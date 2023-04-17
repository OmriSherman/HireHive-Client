import React from 'react'
import './MyButton.css'

export default function MyButton(props) {
    const {text, width, height, onClick} = props;

  return (
    <button style={{width, height}} className='myButton' onClick={onClick}>
        {text}
    </button>
  )
}
