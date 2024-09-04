import React from 'react'
import TripData from './TripData'
import "../component/TripStyle.css"
import card_img_1 from "./img/card_6.jpeg"
import card_img_2 from "./img/card_7.jpg"
import card_img_3 from "./img/card_8.jpg"


const Trip = () => {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google map </p>
      <div className='tripcard'>
        <TripData
            image = {card_img_1}
            heading = "Trip in Thailand"
            text="Thailand is a Southeast Asian country and one of Asia’s most popular tourist destinations, with stunning beaches, vibrant nightlife, and a backpacker-friendly atmosphere. Sharing borders with Myanmar, Laos, Cambodia, and Malaysia, it is one of the top countries for exploring this region. Thailand is full of immersive experiences."
        />

        <TripData
            image = {card_img_2}
            heading = "Trip in Bhaktapur"
            text="Bhaktapur is one of three medieval cities in the Kathmandu Valley, the other two being Kathmandu and Patan. It is often referred to as Bhadgaon and Khwopa and has a mix of Hindu and Buddhist populations. "
        />

        <TripData
            image = {card_img_3}
            heading = "Trip in  Maldives"
            text="The Maldives is an archipelago of 1,192 coral islands grouped into natural atolls. However, only 200 islands are inhabited. Each resort generally occupies an entire atoll.Imagine having a room on a pier jutting out from the shore with a glass floor under which manta rays and reef sharks can be seen swimming, and step out from your overwater bungalow to the view of turquoise water."
        />
      </div>
    </div>
  )
}

export default Trip
