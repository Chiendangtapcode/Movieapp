import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { firebaseAuth } from '../firebase.config';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [fromvalues,setFromValues] = useState({
    email:'',
    password:''
  });
  const navigate = useNavigate();

  const handleLogin = async() =>{
    try{
      await signInWithEmailAndPassword(firebaseAuth,email,password)
    }catch(e){
      console.log(e)
    }
  }

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/")
  })

  return (
    <div>
      
    </div>
  )
}

export default Login
