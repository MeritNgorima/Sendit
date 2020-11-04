import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import {FormControl,InputLabel,Input,Typography} from '@material-ui/core';
import Message from './Message';
import  db  from './Firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {

  const[input,setInput] = useState('');
  const[messages,setMessages] = useState([]);

  const[username,setUsername] = useState('');

  useEffect(()=>{



    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>({id: doc.id, message:doc.data()})))
    })
  },[])

  useEffect(()=>{
     setUsername( prompt('Please enter your username'))
  },[]);


  const sendMessage = (event) =>{
      event.preventDefault();

      db.collection('messages').add({
        message:input,
        username: username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })

      setInput('');
  }

  return (
    <div className="App">
     <Typography variant='h2' color='secondary'>Sendit</Typography>
    <Typography variant='h4' color='inherit'>Hello👋 {username}</Typography>

     <form className='app__form'>

        <FormControl className='app__formcontrol'>
            <input className='Input' placeholder='  Enter a message...' value={input} onChange={event=>setInput(event.target.value)}  />

            <IconButton
            disabled={!input} 
            type='submit' 
            className='IconButton'
            variant='contained' 
            color='primary' 
            onClick={sendMessage} 
            >
              <SendIcon  />
            </IconButton>
        </FormControl>
        
     </form>

    <FlipMove>
        {
          messages.map(({id,message})=>(
            <Message key={id} username={username} message={message}/>
          
          ))
        }
    </FlipMove>
    </div>
  );
}

export default App;
