import React, { Component } from 'react'
import '../Style/section__.scss'
import Image from '../Image/taxi-car.png'


 class Section extends Component {
    render() {
        return (
            <div >
              <div className="section-1">
        

                <div className="pictures">
                 <div className="bg-1">
                    <h2>BOOK YOUR  TAXI NOW!</h2>
                    <div className="number"><h4>+123 4567 8900</h4></div>
                    <img src={Image} alt="" />
                 </div>
                 <div className="bg-2">
                 </div>
                </div>


                <div className="book-form">
                    <div className="text">
                     <h5>BEST IN CITY</h5><br />
                     <h3>To Book Taxi Please Use The Quick Reservation Form</h3><br />
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed aliquet justo. Quisque ut mollis est.
                        Morbi sed laoreet enim. Donec eget tortor nulla. Ut dolor leo, convallis eget ipsum et, rutrum ornare sem. 
                        Sed volutpat commodo elit in rutrum. Donec fermentum facilisis odio, sit amet accumsan sapien placerat vel. </p>
                     <button>Button</button>
                    </div>
                     

                     <div className="form-table">
                         <form action="">
                         <input type="text" placeholder="Enter your name" />
                         <input type="number" placeholder="Enter your phone (e.g. +14155.)" />
                         <textarea name="" id="" cols="30" rows="10" placeholder="Enter your message"></textarea>
                         <button>Submit</button>
                         </form>
                     </div>
                </div>
              </div>

              

                 



            </div>
        )
    }
}


export default Section;