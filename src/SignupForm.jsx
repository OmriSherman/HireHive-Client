import React from 'react'
import './SignupForm.css'

  export const Step1 = ({ nextStep }) => (
    <div className='form-div '>
      <h1>You are...</h1>
      <div>
        {/* <input type='radio' name={'clientType'}>Looking for a job.</input>
        <input type='radio' name={'clientType'}>Looking for employees</input> */}
      </div>
      <button onClick={nextStep}>Next</button>
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
