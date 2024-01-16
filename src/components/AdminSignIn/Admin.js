import React, { useState, useEffect } from 'react';
import { CenteredContainer, FormContainer, Form, FormGroup, Label, Input, Button, WidAdj, Title,
         ResultsContainer, ContainerOne, ContainerTwo, ContainerInsideOne, ContainerInsideTwo,
          TitleBar, Title1,Subtitle1, Dropdown, Option} from './AdminElements';
import AdminStatsCard from './AdminStatsCard';
import styled from 'styled-components';
import {auth, fireStore} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import DataTable from './DataTable';

// import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";

const Admin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [logged, setLogged] = useState(false);
  const [numUsers, setNumUsers] = useState(0);
  const [users, setAllUsers] = useState([]);
  const [numRecordings, setNumRecordings] = useState(0);
  const [chatGPTData, setChatGPTData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRecording, setSelectedRecording] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const [userRecordings, setUserRecordings] = useState([]);
  const [selectedTableData, setSelectedTableData] = useState([]);
  const [userAvailableTables, setUserAvailableTables] = useState([]);

//   const auth = getAuth();
    const handleLogout = () => {
        console.log("logging out")
        auth.signOut();
        setLogged(false);
    }

  const handleSubmit = async(e, email, password) => {
    e.preventDefault()
    console.log(email)
    console.log(password)

    await signInWithEmailAndPassword(auth, email, password)
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
       if (user) {
          
          async function fetchUserData() {
             const q = query(collection(fireStore, "users"), where("userEmail", "==",  user.email));
             const querySnapshot = await getDocs(q);
             querySnapshot.forEach(async(doc) => {
                if (doc.data().role === "admin"){
                    setLogged(true);
                    getAllUsers();
                    getAllRecordings();
                    await getChatGPTData();
                } else {
                    handleLogout();
                }
             });
          }
          fetchUserData();
       } else {
          setLogged(false);
       }
    });
    return unsubscribe
 }, []);

// update when numUsers, numCollections, or chatGPTData gets updated
// useEffect(() => {
//   setLogged(true);
//   getAllUsers();
//   getAllRecordings();
//   getChatGPTData();
//   }, [numUsers, numRecordings, chatGPTData]);

useEffect(() => {
  if (selectedUser) {
      setSelectedRecording(null);
      const fetchUserRecordings = async () => {
          const q = query(collection(fireStore, "recordings"), where("user_id", "==", selectedUser));
          const userRecordingsData = [];
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              userRecordingsData.push({...doc.data(), recording_id: doc.id});
          });
          setUserRecordings(userRecordingsData);
      }
      fetchUserRecordings();
  } else {
      setUserRecordings([]);  // Clear recordings when no user is selected
  }
}, [selectedUser]);

// useEffect(() => {
//   if (selectedRecording) {
//     setSelectedTable(null);
//      // get recording id for selected recording
//      const recording = userRecordings.find(
//       (recording) => recording.recording_start_time === selectedRecording
//     );
     
//     const availableTabes = [];
//     const allTables = ["chat_gpt_api_results", "stats", "juji_api_data"]
//     const findAvailableTables = async () => {
//       for (const table of allTables) {
//            console.log("table is: " + table);
//            console.log("Looking for", selectedUser,  "recording id is: " + recording.recording_id);
//            const q = query(collection(fireStore, table), where("recording_id", "==", recording.recording_id));
//            getDocs(q).then((querySnapshot) => {
//             console.log("querySnapshot size for ", table  + "is: " + querySnapshot.size);
//             if (querySnapshot.size > 0 ) {
//               availableTabes.push(table);
//             }
//         });
//         }
//         setUserAvailableTables(availableTabes);
//       }
//       findAvailableTables();
//   } else {
//     setUserAvailableTables([]);  // Clear recordings when no user is selected
//   }
// }, [selectedRecording]);

useEffect(() => {
  if (selectedRecording) {
    setSelectedTable(null);
    setUserAvailableTables([]);
    // get recording id for selected recording
    const recording = userRecordings.find(
      (recording) => recording.recording_start_time === selectedRecording
    );
    
    const allTables = ["chat_gpt_tone", "stats", "juji_api_data",
                      "dim_aeq", "dim_big_five_personality", "dim_emotional_balance",
                       "dim_emotional_intelligance", "dim_home_first_dashboard",
                       "dim_leadership", "dim_mind_canvas", "dim_personal_brand", "dim_ego"];
    const fetchAvailableTables = async () => {
      const tableChecks = allTables.map(async (table) => {
        const q = query(collection(fireStore, table), where("recording_id", "==", recording.recording_id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size > 0) {
          return table;
        }
        return null;
      });

      const tableResults = await Promise.all(tableChecks);
      const availableTables = tableResults.filter(table => table !== null);
      setUserAvailableTables(availableTables);
    };
    fetchAvailableTables();
  } else {
    setUserAvailableTables([]);  // Clear recordings when no user is selected
  }
}, [selectedRecording]);


useEffect(() => {
  if (selectedTable) {
     // get recording id for selected recording
     const recording = userRecordings.find(
      (recording) => recording.recording_start_time === selectedRecording
    );

     
      const fetchTable = async () => {
          const q = query(collection(fireStore, selectedTable), where("user_id", "==", selectedUser), where("recording_id", "==", recording.recording_id));
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
              setSelectedTableData([doc.data()]);
          });
      }
      fetchTable();
  } else {
    setSelectedTableData(null);  // Clear recordings when no user is selected
  }
}, [selectedTable]);

useEffect(() => {
  setSelectedTable(null);
}, [userAvailableTables]);
 


  const getAllUsers =  async() => {
    const q = query(collection(fireStore, "users"));
    const allUsersData = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const user = {...doc.data(), userId: doc.id};
      allUsersData.push(user);
    });
    setAllUsers(allUsersData);
    setNumUsers(querySnapshot.size);

   //get the number of users
    // console.log(`Number of users: ${querySnapshot.size}`);
   return "We will get the number of users here";
  }

  const getAllRecordings =  () => {
    const q = query(collection(fireStore, "recordings"));
    const querySnapshot =  getDocs(q).then((querySnapshot) => {
        setNumRecordings(querySnapshot.size);
    });

   //get the number of users
    // console.log(`Number of users: ${querySnapshot.size}`);
   return "We will get the number of users here";
  }

  const getChatGPTData =  async() => {
    const q = query(collection(fireStore, "chat_gpt_api_results"));
    const allChatData = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(`Chat GPT Data: ${JSON.stringify(doc.data())}`);
      allChatData.push(doc.data());
    });
    setChatGPTData(allChatData);

    // getDocs(q).then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(`Chat GPT Data: ${JSON.stringify(doc.data())}`);
    //     allChatData.push(doc.data());
    //   });
    // });
    // setChatGPTData(allChatData);
  }

  return (
    <CenteredContainer>
      <FormContainer>
        {!logged ? (
        <WidAdj>
          <Title>Hello Admins</Title>
          <Form onSubmit={(e) => handleSubmit(e, email, password)}>
          <FormGroup>
              <Label>Email Address</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
         
              <Button type="submit" >Submit</Button>

          </Form>
        </WidAdj>
        ) : 
        <ResultsContainer>
        <ContainerOne>
        <TitleBar>
            <Title1>DATA CENTER</Title1>
            <Subtitle1>Arth Admin Services</Subtitle1>
        </TitleBar>
            <AdminStatsCard title="Number of Users" count={numUsers} />
            <AdminStatsCard title="Number of Recordings" count={numRecordings} />
            <AdminStatsCard title="Number of Chat Gpt data" count={chatGPTData.length} />
            <Button onClick={handleLogout}>Logout</Button>
        </ContainerOne>
        <ContainerTwo>
          <ContainerInsideOne>
          <Dropdown value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
          <Option value="">Choose user</Option>
          {users.map((user, index) => 
            <Option key={index} value={user.userId}>{user.userEmail}</Option>
          )}
        </Dropdown>

        {selectedUser && userRecordings.length > 0 && (
        <Dropdown value={selectedRecording} onChange={(e) => setSelectedRecording(e.target.value)}>
            <Option value="">Choose recording</Option>
            {userRecordings.map((recording, index) => 
                <Option key={index} value={recording.id}>{recording.recording_start_time}</Option>
            )}
        </Dropdown>
    )}


        {selectedUser && selectedRecording && userAvailableTables.length >0 &&
          <Dropdown value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
          <Option value="">Choose A Table</Option>
          {userAvailableTables.map((table, index) =>
            <Option key={index} value={table}>{table}</Option>
          )}
        </Dropdown>}
        </ContainerInsideOne>
        <ContainerInsideTwo>
            {selectedRecording && selectedTableData && selectedTableData.length > 0 &&  <DataTable data={selectedTableData} transpose={true} />}
        </ContainerInsideTwo>
        </ContainerTwo>
        </ResultsContainer>
        }
      </FormContainer>
    </CenteredContainer>
  );
};

export default Admin;
