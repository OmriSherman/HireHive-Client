import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import './EmployerPage.css'
import MyButton from './Components/SimpleCompoents/MyButton';

export default function EmployerPage(skonk) {
  const id = skonk.id;
  const [employer, setEmployer] = useState({});
  const [displayJobs, setDisplayJobs] = useState(false);
  const back = 'Back';

  useEffect(() => {
      axios.get(`http://localhost:3000/employers/getById/${id}`).then(res => {
        setEmployer(res.data[0]);
      })
  },[id])


  return (
    <div className='page'>
    <div className='segment'>
    <Link to ={`/home`}>
    <MyButton text={'Back'} width={65} height={30} backgroundColor={'#007BFF'} />
    </Link>
    <div className='header-container'>
      <img src={employer?.photo} alt="kroki" className='image'/>
      <div className='name'>{employer?.business_name}</div>
      </div>
      <div>
      <div>Age: {employer?.age}</div>
      <div>Location: {employer?.location}</div>
      {/* <div><button onClick={()=>setDisplayContact(!displayContact)} className="contact-info">Contact Info</button></div>
      {displayContact ? <div>
      <div>Phone: {employer?.phone}</div>
      <div>Email: {employer?.email}</div>
      </div> : null} */}
      <div className='about-area'>
        <div className='about-employer?'>{employer?.about}</div>
        </div>
    </div>
    </div>
    </div>
  )
}
