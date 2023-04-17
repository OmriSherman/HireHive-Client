import React from 'react'

export default function SeparationLine(props) {
    const {width, height, color, marginTop, marginBottom, position, direction, directionNum, margin} = props;

    const myStyle = {
        width: width,
        borderBottom: `${height}px solid ${color}`,
        marginTop: marginTop,
        marginBottom: marginBottom,
        position: position,
        margin: margin,
        [direction]: directionNum
    };

  return (
    <div style={myStyle}></div>
  )
}
