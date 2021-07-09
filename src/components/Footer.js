import React, { Component } from 'react'
import '../Style/footer__.scss'
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


class Footer extends Component {
    render() {
        return (
            <div className="footer ">
                <h3>How I Can Pay</h3>
                <div className="box">
                    <div className="part-1">
                        <p>Individual Customers</p>
                        <p>We accepts all major payment methods including MasterCard, Visa and American Express.</p>
                    </div>
                    <div className="part-2">
                        <p>Corporate Customers</p>
                        <p>We supports corporate payment methods such as AirPlus. Upon special request,
                           payment by invoice can be made available for our partners and event organisers.</p>
                    </div>
                </div>

                <div className="line "></div>
                <div className="icons">
                   <FaFacebookF className="icon"/>
                   <AiOutlineTwitter className="icon"/>
                   <AiFillInstagram className="icon"/>
                   <AiFillLinkedin className="icon"/>
                </div>
            </div>
        )
    }
}

export default Footer
