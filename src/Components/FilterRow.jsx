import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './FilterRow.css'
import MyButton from './SimpleCompoents/MyButton';

export default function FilterRow() {
const [cities,setCities] = useState([]);
const text="Filter";



   useEffect(()=> {
    axios.get("http://localhost:3000/candidates/getCities")
                .then(res => {
                  setCities(res.data)}) 
              },[])

  return (
    <div className='filter-main'>
    <div style={{paddingBottom: '15px'}}>Filter By:</div>
    <div className='filter-container'>
            
            <div className='sex-filter-container'>
            <div className='filter-title'>Sex:</div>
            <div>
                <select name="sex">
                    <option value={null} selected disabled hidden>Choose</option>
                    <option value={'male'}>Male</option>
                    <option value={'female'}>Female</option>
                    <option value={'*'}>Both</option>
                </select>
                </div>
            </div>

            <div className='age-filter-container'>
            <div className='filter-title'>Age range:</div>
            <div ><input type="number" style={{width: 60}} /></div>
            <div>-</div>
            <div ><input type="number" style={{width: 60}}/></div>
            </div>

            <div className='location-filter-container'>                
            <div className='filter-title'>Location:</div>
            <div>
              <select name="cities">
              <option value={null} hidden>Choose</option>
              <option value={'*'}>All</option>
                { cities.map(element => {
                  return <option key={element} value={element}>{element}</option>
                })}
              </select>
              </div>      
            </div>  
            <div style={{position:'absolute', right: '10px', bottom: '10px'}}>
              <MyButton width={80} height={30} text={text} backgroundColor={'blue'} />
            </div>
    </div>
    </div>
  )
}
