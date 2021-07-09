import React, { Component } from 'react'
import '../Style/application__.scss'
import { GiVibratingSmartphone } from 'react-icons/gi';
import Image1 from '../Image/google.png'
import Image2 from '../Image/app-store.png'


 class Application extends Component {
    render() {
        return (
            <div className="app">
                <div className="phone">
                    <GiVibratingSmartphone className="icon"/>
                    <h5>Book and manage trips via our mobile apps.</h5>
                </div>
                
                
                <div  className="image">
                <img src={Image2} alt="" />
                <img src={Image1} alt="" />
                </div>
                
                
                
            </div>
        )
    }
}


export default Application;