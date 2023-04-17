import React from 'react'

export default function SeparationLine(props) {
    const {width, height, color, marginTop, marginBottom, position, direction, directionNum} = props;

    const myStyle = {
        width: width,
        borderBottom: `${height}px solid ${color}`,
        marginTop: marginTop,
        marginBottom: marginBottom,
        position: position,
        [direction]: directionNum
    };

  return (
    <div style={myStyle}></div>
  )
}
