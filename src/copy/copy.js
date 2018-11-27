import React from 'react';
import './App.css';

const Navbar =(props) =>

<div className="creditCard">
<h1 className="credit-card-title">{props.companyName}</h1>
<div className="credit-card-chip"></div>
<div className="credit-card-content"></div>
<div className="cerdit-card-text"></div>
<h2 className="credit-card-number">
{props.cardNumber}
</h2>
<h2 className="credit-card-valid-thru">
{props.validThru}
</h2>
<h2 className="credit-card-holder-name">
{props.CardHolder}
</h2>
<div className="credit-card-logo">
        <img src="https://i.ebayimg.com/images/g/B7MAAMXQgJRRBDvt/s-l300.jpg"></img>
      </div>

</div>

export default Navbar
