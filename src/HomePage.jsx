import React, { useEffect, useState } from 'react';
import './HomePage.css'
import axios from 'axios';
import Candidate from './Components/Candidate'
import MyProfileSmall from './Components/MyProfileSmall';
import FilterRow from './Components/FilterRow';
import SeparationLine from './Components/SimpleCompoents/SeparationLine';

function HomePage() {
    const [users, setUsers] = useState([]);
    const [displayLoading, setLoading] = useState(false);

    useEffect(() => {
                axios.get("http://localhost:3000/candidates/getAll")
                .then(res => {
                  if(res.data) {
                    // setLoading(false);
                    // setTimeout(() => { }, 10000); not working, ruins the entire display
                    setUsers(res.data);
                  
                    
                  }
            }) 
    },[]) 

    const displayCandidates = () => {
       return users.map((user) => {
            return <div key={user.id}><Candidate data={user}/></div>
       });
    }


  return (
    <div className='homepage-bg'>
      <h1>HireHive</h1>

      <div className='my-profile'><MyProfileSmall/></div>
    <div className='homepage-container'>
    <div className='filter-row'><FilterRow/></div>
    <SeparationLine width={800} height={1} color={'black'} marginTop={15} marginBottom={10} position={'relative'} direction={'left'} directionNum={'25%'}/>
    <div className='candidates'>{displayLoading ? <div><img src="./icons/loading.gif"/></div> : displayCandidates()}</div>
    <SeparationLine width={800} height={1} color={'black'} marginTop={8} marginBottom={10} position={'relative'} direction={'left'} directionNum={'25%'}/>
    </div>
    </div>
  )
}

export default HomePage