import React, { Component } from 'react';

import Navbar from '../component/navbar';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar companyName='Credit Card' 
        cardNumber='7253 3256 7895 1245'
         validThru='11/50'
         CardHolder='Cardholder'
         />
        
      </div>
    );
  }
}

export default App;
