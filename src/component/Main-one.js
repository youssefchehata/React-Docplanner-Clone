import React, { Component } from 'react';
import './Main-one.css';


class Mainone extends Component {
  render() {
    return (
        
        <div className="main-one">
            <div>
                <img src="https://www.docplanner.com/img/sygnet.png"/>
            </div>
               <div className="title">
                <h1>Making the healthcare experience more human</h1>
                </div>
                
            <div className="para">
                 
               <p className="para1">
                We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
                 </p>
               <p className="para2">
                We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.
                </p>
            </div>
        </div>

    )
}
}
export default Mainone;