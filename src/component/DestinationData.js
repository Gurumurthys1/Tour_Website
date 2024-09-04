import React, { Component } from "react"
import "../component/DestinationStyle.css"



class DestinationData extends Component{
    render()
    {
        return(
        <div className={this.props.classname}>
            <div className='text-des'>
                <h2>{this.props.heading1}</h2>
                <h2>{this.props.heading2}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className='image'>
                <img alt='des_img_1' src={this.props.img1}/>
                <img alt='des_img_2' src={this.props.img2}/>
            </div>
        </div>
        )
    }
}

export default DestinationData;