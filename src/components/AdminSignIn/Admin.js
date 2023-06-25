import React, { useState, useEffect } from 'react';
import { FormContainer, Form, FormGroup, Label, Input, Button, WidAdj, Title} from './AdminElements';
import styled, { keyframes } from 'styled-components';
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
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
  const [user, setUser] = useState(null);

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
        console.log("Logged in")
        setUser(user)
        console.log(user)
        if (user === null){
        setLogged(false);}
        else {
            setLogged(true);

        }

    })
    return unsubscribe
  }, [])

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
        <div>
        <Title>User Logged in</Title><Button onClick={handleLogout}>Logout</Button>
        </div>
        }
      </FormContainer>
    </CenteredContainer>
  );
};

export default Admin;
