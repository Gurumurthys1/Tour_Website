import React from 'react'
import "../component/TripStyle.css"

const TripData = (props) => {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img src={props.image} alt='mountain' />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default TripData
