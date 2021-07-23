import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Section from './components/Section'
import Application from './components/Application'
import Information from './components/Information'
import Information2 from './components/Information2'
import Taxi from './components/Taxi'
import Comment from './components/Comment'
import Number from './components/Number'
import Footer from './components/Footer'



const root = document.getElementById('root')

 class App extends Component {
  render() {
    return (
      <div>
       <Navbar/>
       <Section/>
       <Application/>
       <Information/>
       <Information2/>
       <Taxi/>
       <Comment/>
       <Number/>
       <Footer/>
      </div>
    )
  }
}

export default App;



ReactDOM.render(<App/>,root)