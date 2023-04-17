import React from 'react'
import '../../icons/close.png';

export default function CloseButton({onClick}) {
    const closeButtonStyle = {
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none'
      };
    
    
  return (
        <button onClick={onClick} style={closeButtonStyle}>
      <img src="/src/icons/close.png" alt="" />
    </button>
  )
}
