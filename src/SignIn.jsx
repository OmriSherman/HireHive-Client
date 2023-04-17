import './SignIn.css'
import './icons/email.png'
import './icons/password.png'
import MultistepForm from './utils/MultistepForm';
import {React, useRef, useState} from 'react'


function Signin() {
  const [displayForm,setDisplayForm] = useState(false);
  const email = useRef(null);
  const password = useRef(null);

  const hideForm = () => {
    setDisplayForm(false);
  }

  return (
<div className='bg'>
{ displayForm ? <MultistepForm close={hideForm}/> : ''}
    <div className="full-screen-container">
    <div className="login-container">
      <h1 className="login-title">HireHive</h1>
      <form className="form">
        <div className="input-group">
          <div className="input-row">
          <img className='icon' src="\src\icons\email.png" alt="pic"/>
          <input style={{width: '273px', height: '50px'}} type="email" name="email" id="email" placeholder='email'/>
          </div>
          <span className="msg">Invalid email</span>
        </div>

        <div className="input-group">
        <div className="input-row">
          <img className='icon' src="\src\icons\password.png" alt="pic"/>
          <input style={{width: '273px', height: '50px'}} type="password" name="password" id="password" placeholder='password'/>
          </div>
          <span className="msg">Incorrect password</span>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>
      <div className='sign-up' onClick={()=>setDisplayForm(true)}>Sign Up</div>
      
    </div>
  </div>
  </div>
  )
}

export default Signin