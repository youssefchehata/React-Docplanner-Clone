import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Mainone from './Main-one.js';
import Service from './Service.js';
import Stat from './Stat';
import Offices from './Offices.js';
import OfficeList from './card/OfficeListParent.js';
import Cards from './card/cards.js';
import Footer from './Footer/Footer.js';


const tab=[{
  image:"https://www.docplanner.com/images/warsaw.png",
  title:"Warsawtit",
  button:"SEE OPENINGS"
},
{
  image:"https://www.docplanner.com/images/barcelona.png",
  title:"barcelone",
  button:"SEE OPENINGS"
},
{
  image:"https://www.docplanner.com/images/istanbul.png",
  title:"istanbul",
  button:"SEE OPENINGS"
},
{
    image:"https://www.docplanner.com/images/rome.png",
    title:"rome",
    button:"SEE OPENINGS"
  },
  {
      image:"https://www.docplanner.com/images/mexico-city.png",
      title:"mexico-city",
      button:"SEE OPENINGS"
    },
    {
        image:"https://www.docplanner.com/images/curitiba.png",
        title:"curitiba",
        button:"SEE OPENINGS"
}]
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Mainone/>
        <Service/>
        <Stat/>
        <Offices/>
        <OfficeList article={tab}/>
        <Cards/>
        <Footer/>
      </div>
    );
  }
}

export default App;
