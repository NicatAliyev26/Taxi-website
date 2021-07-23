import React, { Component } from 'react'
import '../Style/taxi__.scss'
import Image from "../Image/car-1.png"
import Image1 from "../Image/eco.png"
import Image2 from "../Image/business.png"

 class Taxi extends Component {
    render() {
        return (
            <div className="cars">

           <Taxicar
           name="Taxi"
           img={Image}
           inform="The Taxi You Know"
           list="Price based on taximeter"
           list1="Executed by local taxi fleets"
           list2="Online and offline payment"
           list3="24/7 support hotline"
           />
           <Taxicar           
           name="Economy+"
           img={Image1}
           inform="For Budget Travelers"
           list="Fixed price "
           list1="English-speaking driver "
           list2="Automated flight and train tracking "
           list3="24/7 support hotline"          
           />
           <Taxicar 
           name="Business Class"
           img={Image2}
           inform="Business Traveler's Favourite"
           list="Black car guaranteed "
           list1="Fixed price "
           list2="Automated flight and train tracking"
           list3="Children seats available on request"
           />

            </div>
        )
    }
}

export default Taxi;




 class Taxicar extends Component {
    render() {
        return (
            <div className="taxi container">
            <div className="title"><h4>{this.props.name}</h4></div>
            <img src={this.props.img} alt="" />
            <p>{this.props.inform}</p>
            <ul>
                <li>{this.props.list}</li>
                <li>{this.props.list1}</li>
                <li>{this.props.list2}</li>
                <li>{this.props.list3}</li>
            </ul>
        </div>
        )
    }
}



