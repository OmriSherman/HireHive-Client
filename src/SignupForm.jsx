import React from 'react'
import './SignupForm.css'
import Empolyee from './icons/employee.png'
import Workplace from './icons/workplace.png'
import SeparationLine from './Components/SimpleCompoents/SeparationLine'
import MyButton from './Components/SimpleCompoents/MyButton'

  export const Step1 = ({ nextStep }) => (
    <div className='form-div '>
      <h1>You are...</h1>
      <div className='step1-icons'>
      <div>
       <div style={{marginBottom: 20}}>
        <img src={Workplace}/>
        </div>
       <div>Looking for employees</div>
      </div>
      
      
      <div style={{flex:0.5}}> 
        <SeparationLine
         width={2}
          height={200} 
          color={'rgb(175, 175, 175)'} 
          margin= 'auto'/>
      </div>
      
      <div>
      <div style={{marginBottom: 20}}>
        <img src={Empolyee}/>
        </div>
       <div>Looking for work</div>
      </div>
      </div>
      <div className='form-buttons'>
      <MyButton text={'Next'} width={65} height={30} onClick={nextStep}/>
      </div>
    </div>
  );
  
  export const Step2 = ({ prevStep, nextStep }) => (
    <div className='form-div '>
      <h1>Step 2</h1>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
  
  export const Step3 = ({ prevStep, nextStep }) => (
    <div className='form-div '>
      <h1>Step 3</h1>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
  
  export const Finish = ({ handleClose }) => (
    <div className='form-div '>
      <h1>Good job, you've finished the form!</h1>
      <button onClick={handleClose}>Done</button>
    </div>
  );
