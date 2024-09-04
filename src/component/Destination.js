import React from 'react'
import Des_img_1 from "./img/des_img_1.avif"
import Des_img_2 from "./img/des_img_2.avif"
import Des_img_3 from "./img/des_img_3.avif"
import Des_img_4 from "./img/des_img_4.avif"
import DestinationData from './DestinationData'


const Destination = () => {
  return (
    <div className='destination'>
      <h1>Popular Destinations</h1>
      <p>Tours give you the opporunity to see a lot, within a time frame</p>
      <DestinationData
        classname = "first-des"
        heading1 = "The Paradise on Earth"
        heading2 = "Srinagar Tourism"
        text = "Famously known as 'Heaven on Earth, Srinagar is located in the union territory of Jammu & Kashmir, on the banks of river Jhelum. Known for its serene lakes, lush gardens, and Mughal-era architecture, Srinagar is a timeless destination that beckons travelers from around the world. Srinagar is known for the stationary houseboats and gondola-type rowboats- Shikaras on Dal Lake."
        img1 = {Des_img_1}
        img2 = {Des_img_2}
      />

      <DestinationData
        classname = "second-das"
        heading1 = "Eiffel Tower-Paris"
        heading2 = "Cruise on Seine River"
        text = "Stretched high in the skies of Paris, the iconic Eiffel Tower is probably the most well-known symbol of the country, France. It is located on the Champ de Mars space and hosts the visitors on its three levels. At evening show it sparkles in its beautiful lights for about 5 minutes every hour.The tower has three levels - with restaurants on the first two floors and the observation deck on the third. Built initially as a temporary structure."
        img1 = {Des_img_3}
        img2 = {Des_img_4}
      />
    </div>
  )
}

export default Destination
