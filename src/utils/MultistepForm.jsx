import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CloseButton from '../Components/SimpleCompoents/CloseButton';
import { Step1, Step2, Step3, Finish } from '../SignupForm';

export default function MultistepForm(props) {
  const LAST_STEP = 4;
  const [step, setStep] = useState(1);
  const [data, setData] = useState({});
  const [finalMessage, setFinalMessage] = useState("");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleClose = () => {
    props.close();
  }

  const mergeData = () => {
    const mergedData = {
      type: data.type,
      data: {
        ...data.data2,
        ...data.data3,
      },
    };
    return mergedData;
  }

  const sendData = async () => {
    const user = mergeData();
    console.log(user);
    await axios.post(`http://localhost:3000/advanced/insertNewUser`, user)
      .then(res => setFinalMessage(res.data));
  }

  const validateForm = (data) => {
    console.log('data');
    console.log(data);
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

  return (
    <div>
      {step === 1 && (
        <div>
          <Step1 nextStep={nextStep} setData={handleDataChange} />
          <CloseButton onClick={handleClose} />
        </div>
      )}
      {step === 2 && (
        <div>
          <Step2 prevStep={prevStep} nextStep={nextStep} setData={handleDataChange} type={data.type} validate={validateForm} />
          <CloseButton onClick={handleClose} />
        </div>
      )}
      {step === 3 && (
        <div>
          <Step3 prevStep={prevStep} nextStep={nextStep} setData={handleDataChange} type={data.type} validate={validateForm} />
          <CloseButton onClick={handleClose} />
        </div>
      )}
      {step === 4 && (
        <div>
          <Finish handleClose={handleClose} finalMessage={finalMessage} />
          <CloseButton onClick={handleClose} />
        </div>
      )}
    </div>
  );
}
