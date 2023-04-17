import React, { useState } from 'react'
import CloseButton from '../Components/SimpleCompoents/CloseButton';
import { Step1, Step2, Step3, Finish } from '../SignupForm';

export default function MultistepForm(props) {
    const [step,setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
      };
    
    const prevStep = () => {
      setStep(step - 1);
    };

    const handleClose = () => {
      props.close();
    }
    
      switch (step) {
        case 1:
          return (<div>
             <Step1 nextStep={nextStep} />;
             <CloseButton onClick={handleClose}/>
             </div>)
        case 2:
          return (<div>
            <Step2 prevStep={prevStep} nextStep={nextStep} />;
            <CloseButton onClick={handleClose}/>
            </div>)
        case 3:
          return (<div>
            <Step3 prevStep={prevStep} nextStep={nextStep} />;
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
