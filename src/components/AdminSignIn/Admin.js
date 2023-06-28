import React, { useState, useEffect } from 'react';
import { FormContainer, Form, FormGroup, Label, Input, Button, WidAdj, Title,
         ResultsContainer, ContainerOne, ContainerTwo, ContainerInsideOne, ContainerInsideTwo,
          TitleBar, Title1,Subtitle1, Dropdown, Option} from './AdminElements';
import AdminStatsCard from './AdminStatsCard';
import styled from 'styled-components';
import {auth, fireStore} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import DataTable from './DataTable';

// import { signInWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";



const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const Admin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [logged, setLogged] = useState(false);
  const [numUsers, setNumUsers] = useState(0);
  const [numRecordings, setNumRecordings] = useState(0);
  const [chatGPTData, setChatGPTData] = useState([]);

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
 


  const getAllUsers =  () => {
    const q = query(collection(fireStore, "users"));
    const querySnapshot =  getDocs(q).then((querySnapshot) => {
        setNumUsers(querySnapshot.size);
    });

   //get the number of users
    console.log(`Number of users: ${querySnapshot.size}`);
   return "We will get the number of users here";
  }

  const getAllRecordings =  () => {
    const q = query(collection(fireStore, "recordings"));
    const querySnapshot =  getDocs(q).then((querySnapshot) => {
        setNumRecordings(querySnapshot.size);
    });

   //get the number of users
    console.log(`Number of users: ${querySnapshot.size}`);
   return "We will get the number of users here";
  }

  const getChatGPTData =  async() => {
    const q = query(collection(fireStore, "chat_gpt_api_results"));
    const allChatData = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(`Chat GPT Data: ${JSON.stringify(doc.data())}`);
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
          <Dropdown>
          <Option value="User1">User 1</Option>
          <Option value="User2">User 2</Option>
          <Option value="User3">User 3</Option>
        </Dropdown>

        <Dropdown>
          <Option value="Recording1">Recording 1</Option>
          <Option value="Recording2">Recording 2</Option>
          <Option value="Recording3">Recording 3</Option>
        </Dropdown>

        <Dropdown>
          <Option value="Table1">Table 1</Option>
          <Option value="Table2">Table 2</Option>
          <Option value="Table3">Table 3</Option>
        </Dropdown>
        </ContainerInsideOne>
            <ContainerInsideTwo>{chatGPTData.length > 0 && <DataTable data={chatGPTData} transpose={true} />}</ContainerInsideTwo>
        </ContainerTwo>
        </ResultsContainer>
        }
      </FormContainer>
    </CenteredContainer>
  );
};

export default Admin;
