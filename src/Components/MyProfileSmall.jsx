import React from 'react'
import './MyProfileSmall.css'

export default function MyProfileSmall({handleLogout}) {
  return (
    <div className='my-profile-class'>
    <div className='profile-container'>
    <div><img className='profile-pic' src="/src/icons/sharlinge.jpeg"/></div>
    <div className='profile-name'>Omris</div>
    <div className='profile-work'>Amdocs</div>
    <div className='my-profile-line'></div>
    <div className='my-profile-actions'>
        <div className='action-option'>Add a new job offer</div>
        <div className='action-option'>My job offers</div>
        <div className='action-option' onClick={handleLogout}>Log Out</div>
    </div>
    </div>
    </div>
    
  )
}
