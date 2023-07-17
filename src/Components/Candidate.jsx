import React from 'react'
import './Candidate.css'
import '../global.css'
import location from '../icons/location.png'
import { Link, Routes, Route } from 'react-router-dom';

function Candidate(candidateData) {

  const data = candidateData.data;
  return (
    <div className='body'>
      <div className='candidate-container'>

        <div><img src={data.photo} className='photo' /></div>
          <div className="data-container">
    <Link to={`/candidate/${data.id}`}  className="link-no-style">
    <div className="title">{data.first_name} {data.last_name}, {data.age}</div>
    </Link>
    <div className="sub-title">
    <div><img src={location} width='20px' height='20px' /> {data.location}</div>
    <div className="about">"{data.about}"</div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Candidate