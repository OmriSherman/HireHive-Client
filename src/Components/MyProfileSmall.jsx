import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import './MyProfileSmall.css'

export default function MyProfileSmall({handleLogout}) {
  const [userInfo, setUserInfo] = useState({});
  const [updateInfo, setUpdateInfo] = useState(false);
  let isCandidate = false;

useEffect(()=> {
  setUserInfo(JSON.parse(sessionStorage.getItem("user")));
   isCandidate = userInfo.type === 'candidate';

}, [])

  return (
    <div className='my-profile-class'>
    <div className='profile-container'>
    <div><img className='profile-pic' src={userInfo.photo}/></div>
    <div className='profile-name'>{userInfo.first_name} {userInfo.last_name}</div>
    <div className='profile-work'></div>
    <div className='my-profile-line'></div>
    <div className='my-profile-actions'>
    <Link to={`/update/${userInfo.id}`}  className="link-no-style">
        <div className='action-option'>Update my information</div>
    </Link>
    <Link to={`/update`}  className="link-no-style">
    <div className='action-option'>My profile</div>
    </Link>
        { !isCandidate ? <> 
        <div className='action-option'>Add a new job offer</div>        
        </>
        : '' }
        <div className='action-option' style={{color: '#c61616', fontWeight: '600'}} onClick={handleLogout}>Log Out</div>
    </div>
    </div>
    </div>
    
  )
}
