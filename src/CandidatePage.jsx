import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import './CandidatePage.css'
import MyButton from './Components/SimpleCompoents/MyButton';

export default function CandidatePage() {
  const {id} = useParams();
  const [candidate, setCandidate] = useState([]);
  const [displayContact, setDisplayContact] = useState(false);
  const back = 'Back';

  useEffect(() => {
      axios.get(`http://localhost:3000/candidates/getById/${id}`).then(res => {

        setCandidate(res.data[0]);
      })
  },[id])


  return (
    <div className='page'>
    <div className='segment'>
    <Link to ={`/hirehive/home`}>
    <MyButton text={back} width={100} height={40}/>
    </Link>
    <div className='header-container'>
      <img src={candidate.photo} alt="kroki" className='image'/>
      <div className='name'>{candidate.first_name} {candidate.last_name}</div>
      </div>
      <div>
      <div>Age: {candidate.age}</div>
      <div>Location: {candidate.location}</div>
      <div><button onClick={()=>setDisplayContact(!displayContact)} className="contact-info">Contact Info</button></div>
      {displayContact ? <div>
      <div>Phone: {candidate.phone}</div>
      <div>Email: {candidate.email}</div>
      </div> : null}
      <div className='about-area'>
        <div className='about-candidate'>{candidate.about}</div>
        </div>
    </div>
    </div>
    </div>
  )
}
