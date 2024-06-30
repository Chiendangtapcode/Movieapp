import React, { useState } from 'react'
import { firebaseAuth } from '../firebase.config'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

function Signup() {
  const [fromvalues,setFromValues] = useState({
    email:"",
    passWord:""
  })
  const navigate = useNavigate()
  const handSignup = async() =>{
    try{
      const {email,passWord} = fromvalues;
      await createUserWithEmailAndPassword(firebaseAuth,email,passWord)
    }catch(e){
      console.log(e)
    }
  }
  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(currentUser) navigate("/login")
  })
  return (
    <div>
      
    </div>
  )
}

export default Signup
