import React, { Component } from 'react'
import '../Style/information2__.scss'
import { AiFillHome } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { FaDollarSign } from 'react-icons/fa';
import { BiRun } from 'react-icons/bi';


 class Information2 extends Component {
    render() {
        return (
            <div className="card-2">
                <h6>WE DO THE BEST</h6>
                <h3>What You Wish</h3>
                <p>Duis ornare sapien at arcu rutrum, ut commodo magna vulputate</p>
                 
                 <div className="boxfirst">
                 <Cards   name="HOME PICKUP"
                          sentence="Mauris porta, nisi a porttitor varius, ipsum lorem condimentum leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien pulvinar, placerat ante ac, imperdiet ante. "
                          icon={<AiFillHome className="icons" /> }
                          />
                          
                 <Cards   name="GPS SEARCHING"
                          sentence="Mauris porta, nisi a porttitor varius, ipsum lorem condimentum leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien pulvinar, placerat ante ac, imperdiet ante. "
                          icon={<BiMap className="icons" /> }
                          />
                </div>
                 
                <div className="boxsecond">
                    <Cards   name="BONUSES FOR RIDE"
                          sentence="Mauris porta, nisi a porttitor varius, ipsum lorem condimentum leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien pulvinar, placerat ante ac, imperdiet ante. "
                          icon={<FaDollarSign className="icons" /> }
                        />
                          
                    <Cards   name="FAST BOOKING"
                          sentence="Mauris porta, nisi a porttitor varius, ipsum lorem condimentum leo, laoreet faucibus nisl nunc finibus felis. Integer in sapien pulvinar, placerat ante ac, imperdiet ante. "
                          icon={<BiRun className="icons" /> }
                        />
                </div>
                 
                          
                
            </div>
        )
    }
}


export default Information2;





 class Cards extends Component {
    render() {
        return (
                <div className="text">
                     <div className="icon">
                         <div className="round">
                             {this.props.icon}                        
                         </div>
                         <div className="words"><h6>{this.props.name}</h6></div>
                         
                     </div>

                     <p>{this.props.sentence}</p>
                     
                </div>
        )
    }
}

