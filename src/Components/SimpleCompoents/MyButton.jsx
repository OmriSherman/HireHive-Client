import React from 'react'
import './MyButton.css'

export default function MyButton(props) {
    const {text, width, height} = props;

  return (
    <button style={{width, height}} className='myButton'>
        {text}
    </button>
  )
}
