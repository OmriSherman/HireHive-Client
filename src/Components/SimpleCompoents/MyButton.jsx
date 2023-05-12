import React from 'react'
import './MyButton.css'

export default function MyButton(props) {
    const {text, width, height, backgroundColor, onClick} = props;

  return (
    <button style={{width, height, backgroundColor}} className='myButton' onClick={onClick}>
        {text}
    </button>
  )
}
