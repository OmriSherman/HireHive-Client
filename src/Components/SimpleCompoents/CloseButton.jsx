import React from 'react'
import '../../icons/close.png';

export default function CloseButton({onClick}) {
    const closeButtonStyle = {
        position: 'absolute',
        top: '280px',
        right: '495px',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 'none',
        zIndex: '101'
      };
    
    
  return (
        <button onClick={onClick} style={closeButtonStyle}>
      <img src="/src/icons/close.png" alt="" />
    </button>
  )
}
