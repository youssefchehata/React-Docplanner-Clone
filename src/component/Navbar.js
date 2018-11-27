import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (
  
<div className='navbar'>

  <div className="logo">
  <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>
  </div>

 <div className="head-menu">
      <ul>
         <li className="about-us"><a href="#"> About.us </a></li>
          <li className="career"><a href="#"> Career </a></li>
           <li className="department"><a href="#"> Department </a></li>
      </ul>
  </div>

 

</div>
    )
}
}

// const theButtons = [
//   {
//     value: 'About us',
//    },
//    {
//    value: 'Career',
//    },
//    {
//    value: 'Department',
//    },
// ]

// let Button = (props) => //for creating one button 

// <li class="about-us"><a href="#">{props.button.value
//           }</a> </li>


// const Buttons = (props) => //for creating several buttons 

//             props.buttonsList.map((currentButton, i) =>
//             <ul  id="header-list" key={i}>
//               <Button button={currentButton} />
//             </ul>
//             )

// class Navbar extends Component {
//   render() {
//     return (
//       <div className="navbar-style">
//       <div class="menu">
// 	 <div class="logo">
// 	 	<img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"/>
// 	 </div>
// 	 <div class="head-menu">
//    <Buttons buttonsList={theButtons} /> 
  
// 	 	</div>

// 	 </div>
        
//       </div>
//     );
//   }
// }

export default Navbar;
