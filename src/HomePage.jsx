import React, { useEffect, useState } from 'react';
import './HomePage.css'
import LoadingGIF from './icons/Loading.gif'
import axios from 'axios';
import MyProfileSmall from './Components/MyProfileSmall';
import FilterRow from './Components/FilterRow';
import SeparationLine from './Components/SimpleCompoents/SeparationLine';
import ServiceGiver from './Components/ServiceGiver';

function HomePage({handleLogout}) {
const [displayedData, setDisplayedData] = useState([]);
const [loading, setLoading] = useState(true);
const [typeToDisplay, setTypeToDisplay] = useState('');

useEffect(() => {
  const tempData = JSON.parse(sessionStorage.getItem("user"));
  const userTypeToDisplay = tempData.type === 'candidate' ? 'employer' : 'candidate';
  setTypeToDisplay(userTypeToDisplay);
  if (userTypeToDisplay) getData(userTypeToDisplay); 
}, []); 

const getData = async(userTypeToDisplay) => {
  await axios.get(`http://localhost:3000/${userTypeToDisplay}s/getAll`)
    .then(res => {
      if (res.data) {
          setDisplayedData(res.data);
          setLoading(false);
      }
    })
}

  

    const renderItems = () => {

      return displayedData.map((serviceGiver) => (
            <div key={serviceGiver.id}>
              <ServiceGiver data={serviceGiver} type={typeToDisplay} />
            </div>
          ))
    };




    return (
      <div className='homepage-bg'>
        <h1>HireHive</h1>
        <div className='my-profile'><MyProfileSmall handleLogout={handleLogout} /></div>
        <div className='homepage-container'>
          <div className='filter-row'><FilterRow type={typeToDisplay} /></div>
          <SeparationLine width={800} height={1} color={'black'} marginTop={15} marginBottom={10} position={'relative'} direction={'left'} directionNum={'25%'} />
          <div className='candidates'>
            {loading ? <div><img className='loading' src={LoadingGIF} alt="Loading" /></div> : renderItems()}
          </div>
          <SeparationLine width={800} height={1} color={'black'} marginTop={8} marginBottom={10} position={'relative'} direction={'left'} directionNum={'25%'} />
        </div>
      </div>
    );
  }

export default HomePage