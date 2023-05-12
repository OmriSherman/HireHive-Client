import React from 'react'
import { useEffect } from 'react'
import './SignupForm.css'
import Empolyee from './icons/employee.png'
import Workplace from './icons/workplace.png'
import Celebrate from './icons/celebrate.png'
import SeparationLine from './Components/SimpleCompoents/SeparationLine'
import MyButton from './Components/SimpleCompoents/MyButton'

  export const Step1 = ({ nextStep, setData }) => {

      const saveDataAndContinue = (type) => {
        setData({ type });
       nextStep(); 
      };

    return (<div className='form-div'>
      <h1>You are...</h1>
      <div className='step1-icons'>
        <div>
          <div style={{ marginBottom: 20 }} onClick={()=>saveDataAndContinue('employer')}>
            <img src={Workplace} alt="Workplace" />
          </div>
          <div>Looking for employees</div>
        </div>

        <div style={{ flex: 0.5 }}>
          <SeparationLine
            width={2}
            height={200}
            color={'rgb(175, 175, 175)'}
            margin='auto'
          />
        </div>

        <div>
          <div style={{ marginBottom: 20 }} onClick={()=>saveDataAndContinue('candidate')}>
            <img src={Empolyee} alt="Employee" />
          </div>
          <div>Looking for work</div>
        </div>
      </div>

    </div>
  );
  };
  
  
  export const Step2 = ({ prevStep, nextStep, setData, type }) => {
    

    const saveDataAndContinue = (data) => {
      setData({ data });
     nextStep(); 
    };

    return (
    <div className='form-div'>
      <h1>About you</h1>
      { type === 'candidate' ? 
      <div className='step2-form'>
        <div className='step2-form-items'><span className='label'>Full name: </span><input className='step2-input'/></div>
        {/* <div className='step2-form-items'><span className='label'>Phone: </span><input className='step2-input'/></div> */}
        <div className='step2-form-items'><span className='label'>Location (City): </span><input className='step2-input'/></div>
        <div className='step2-form-items'><span className='label'>Birthday: </span><input className='step2-input' type="date"/></div>
        <div className='step2-form-items'><span className='label'>About you: </span><textarea className='step2-textarea'/></div>
      </div>
      : 
      <div className='step2-form'>
      <div className='step2-form-items'><span className='label'>Business name: </span><input className='step2-input'/></div>
      <div className='step2-form-items'><span className='label'>Location (City): </span><input className='step2-input'/></div>
      <div className='step2-form-items'><span className='label'>Business type: </span><input className='step2-input'/></div>
      <div className='step2-form-items'><span className='label'>About: </span><textarea className='step2-textarea'/></div>
    </div> }
      <div className='form-buttons'>
        <MyButton text={'Next'} width={65} height={30} backgroundColor={'#007BFF'} onClick={nextStep}/>
        <MyButton text={'Back'} width={65} height={30} backgroundColor={'#6C757D'} onClick={prevStep}/>
      </div>
    </div>
  );
    };
  
  export const Step3 = ({ prevStep, nextStep, setData, type }) => {

    const saveDataAndContinue = (data) => {
      setData({ data });
     nextStep(); 
    };
      return (
    <div className='form-div '>
      <h1>Final Details</h1>
      <div className='step2-form'>
        { type === 'candidate' ?
        <div className='step2-form-items'><span className='label'>Phone: </span><input className='step2-input'/></div>
        : null }
        <div className='step2-form-items'><span className='label'>E-mail: </span><input type="email" className='step2-input'/></div>
        <div className='step2-form-items'><span className='label'>Password: </span><input type="password" className='step2-input'/></div> 
      </div>
      <div className='form-buttons'>
        <MyButton text={'Next'} width={65} height={30} backgroundColor={'#007BFF'} onClick={nextStep}/>
        <MyButton text={'Back'} width={65} height={30} backgroundColor={'#6C757D'} onClick={prevStep}/>
      </div>
    </div>
  );
  };
  export const Finish = ({ handleClose }) => (
    <div className='form-div'>
      <div className='finish-container'>
        <div><img src={Celebrate} className="rotate-image" /></div>
    <div className='finish-div'>
      <div className="finish-header">You're all set! </div>
      <div className="finish-subheader">You can now login with your email and password!</div>
      </div>
      <div><img src={Celebrate}/></div>
      </div>
      <div className='finish-button'>
        <MyButton text={'Done'} width={100} height={30} backgroundColor={'#007BFF'} onClick={handleClose}/>
      </div>

    </div>
  );
