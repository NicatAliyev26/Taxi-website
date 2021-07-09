import React, { Component } from 'react'
import '../Style/comment__.scss'
import Image1 from "../Image/img1.png"
import Image2 from "../Image/img2.png"

export class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <div className="title">
                <h5>HAPPY CLIENTS</h5>
                <h2>User's Testimonials</h2>
                </div>
                
                   <div className="mainbox">
                   <Main  text="This was one of the best experiences I have ever had with a cab company.
                           I had problems at the airport and the driver stayed with me for over an hour 
                           and helped me sort everything out." 
                        name="POLLY WALTER"  
                        img={Image1} />
                        
                    <Main   text="Thank you for such fabulous service! Mauris porta, nisi a porttitor varius,
                              ipsum lorem condimentum leo, 
                              laoreet faucibus nisl nunc finibus felis. Integer in sapien pulvinar. "
                        name="CONNOR QUINN" 
                        img={Image2} />
                   </div>
                
            </div>
        )
    }
}

export default Comment





 class Main extends Component {
    render() {
        return (
                <div className="main">
                        <div className="picture">
                            <img src={this.props.img} alt="" />
                        </div>
                        <div className="text">
                         <p>{this.props.text}</p>
                         <h5 className="name">{this.props.name}</h5>
                        </div>
                        
                </div>
        )
    }
}


