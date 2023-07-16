import './SignIn.css'
import './icons/email.png'
import './icons/password.png'
import MultistepForm from './utils/MultistepForm';
import {React, useRef, useState} from 'react'
import axios from 'axios';


function Signin({handleLoginSuccess}) {
  const [displayForm,setDisplayForm] = useState(false);
  const [loginError, setLoginError] = useState("");
  const emailRef = useRef("");
  const passwordRef = useRef("");


  const hideForm = () => {
    setDisplayForm(false);
  }

  const handleLogin = async () => {
    const loginData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };
  
    try {
      const response = await axios.post('http://localhost:3000/advanced/loginUser', loginData);
      handleLoginSuccess(response.data);
    } catch (error) {
      setLoginError(error?.response?.data);
    }
  };
    

  return (
<div className='bg'>
{ displayForm ? <MultistepForm close={hideForm}/> : ''}
    <div className="full-screen-container">
    <div className="login-container">
      <h1 className="login-title">HireHive</h1>
      <div className="form">
        <div className="input-group">
          <div className="input-row">
          <img className='icon' src="\src\icons\email.png" alt="pic"/>
          <input style={{width: '273px', height: '50px'}} type="email" name="email" id="email" ref={emailRef} placeholder='email'/>
          </div>
        </div>

        <div className="input-group">
        <div className="input-row">
          <img className='icon' src="\src\icons\password.png" alt="pic"/>
          <input style={{width: '273px', height: '50px'}} type="password" name="password" id="password" ref={passwordRef} placeholder='password'/>
          </div>
        </div>
        { loginError && 
      <div className='login-error-container'>
    <div className='login-error'><span>{loginError}</span></div>
    </div> } 
        <button className="login-button" onClick={handleLogin}>Login</button>
      </div>
      <div className='sign-up' onClick={()=>setDisplayForm(true)}>Sign Up</div>
      
    </div>
  </div>
  </div>
  )
}

export default Signin