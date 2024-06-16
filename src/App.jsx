import React, { useEffect, useState } from 'react';
import './App.css'
import Home from './Home'
import Success from './Success'


function App() {
const [email, setEmail] = useState("");
const [emailerr, setEmailerr] = useState("");
const [success, setSuccess] = useState(false)
const [ismodalopen, setIsmodalopen] = useState(true)
const [erralert, setErralert] = useState(false)

function handleChange (e){
const {value} = e.target;
setEmail(value)
}


function handleDismiss(){
setIsmodalopen(false)
setSuccess(false)
setEmail("")
setIsmodalopen(true)
}

function handleSubmit(e){
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if(regex.test(email)){
    setEmailerr("")
    setSuccess(true)
    
    }else{
      setEmailerr("valid email required")
      setErralert(true)

      }
      
      }

      function handleFocus(){
        setEmail("")
        setEmailerr("")
        setErralert(false)
      }

  return success ? (
    <Success email={email} handleDismiss={handleDismiss} ismodalopen={ismodalopen} />
  ) : (
    <Home handleChange={handleChange} handleSubmit={handleSubmit} email={email} emailerr={emailerr} erralert={erralert} handleFocus={handleFocus} />
  )
}

export default App

