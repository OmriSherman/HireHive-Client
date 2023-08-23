import React from 'react'
import './ServiceGiver.css'
import '../global.css'
import location from '../icons/location.png'
import { Link } from 'react-router-dom';

function ServiceGiver({data, type}) {

  return (
    <div className='body'>
      <div className='candidate-container'>

        <div className='photo-div' ><img src={data.photo} className={`${type}-photo`} /></div>
          <div className="data-container">
    <Link to={`/${type}/${data.id}`}  className="link-no-style">
    <div className="title">{data.business_name ?? `${data.first_name} ${data.last_name}, ${data.age}`}</div>
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

export default ServiceGiver