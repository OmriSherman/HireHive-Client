import React, { useState, useEffect } from 'react'
import CloseButton from '../Components/SimpleCompoents/CloseButton';
import { Step1, Step2, Step3, Finish } from '../SignupForm';

export default function MultistepForm(props) {
  const LAST_STEP = 4;
    const [step, setStep] = useState(1);
    const [data, setData] = useState({});
    

    const nextStep = () => {
        setStep(step + 1);
      };
    
    const prevStep = () => {
      setStep(step - 1);
    };

    const handleClose = () => {
      props.close();
    }

    const sendData = () => {
      console.log(data);
    }
    
    const validateForm = (data) => {
      const missingFields = [];
      Object.keys(data).forEach((key) => {
        if (!data[key]) {
          missingFields.push(key.replace('_', ' '));
        }
      });
    
      if (missingFields.length > 0) {
        const fields = missingFields.join(', ');
        return `Missing fields: ${fields}`;
      }
    
      return false;
    };

    const handleDataChange = (stepData) => {
      console.log(stepData);
      setData((data) => ({ ...data, ...stepData }));
    };
    
    useEffect(() => {
      if (step === LAST_STEP) {
        sendData(data);
      }
    }, [step, data]);
   

      switch (step) {
        case 1:
          return (<div>
             <Step1 nextStep={nextStep} setData={handleDataChange}  />;
             <CloseButton onClick={handleClose}/>
             </div>)
        case 2:
          return (<div>
            <Step2 prevStep={prevStep} nextStep={nextStep} setData={handleDataChange} type={data.type} validate={validateForm} />;
            <CloseButton onClick={handleClose}/>
            </div>)
        case 3:
          return (<div>
            <Step3 prevStep={prevStep} nextStep={nextStep} setData={handleDataChange} type={data.type} validate={validateForm}/>;
            <CloseButton onClick={handleClose}/>
            </div>)
        case 4:
          return (<div>
            <Finish handleClose={handleClose} />;
            <CloseButton onClick={handleClose}/>
            </div>)
        default:
          return null;
      }
    };
