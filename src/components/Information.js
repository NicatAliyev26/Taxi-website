import React, { Component } from 'react'
import '../Style/information__.scss'
import Image1 from '../Image/taxi.png'
import Image2 from '../Image/shop.png'
import Image3 from '../Image/driver.png'

 class Information extends Component {
    render() {
        return (
            <div className="inform">

                <h4>How Does It Work</h4>

                <div className="content">
                <Text article="Enter your pickup point and time, select your car."
                      img={Image1}/>
                <Text article="Select your preferred payment method."
                      img={Image2}/>
                <Text article="Our taxi driver picks you up at the given location and time."
                      img={Image3}/>
                </div>
                
                
            </div>
        )
    }
}

export default Information;




 class Text extends Component {
    render() {
        return (            
                <div className="card">
                    <img src={this.props.img} alt="" />
                    <p>{this.props.article}</p>
                </div>
            
        )
    }
}


