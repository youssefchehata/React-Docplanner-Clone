import React, { Component } from 'react';
import {Fa} from 'mdbreact'
import './Service.css';


class Service extends Component {
  render() {
    return (
        <div className='allservice'>
      <div className="service">
     <div className="for-patients">  
 
 <div className="text-patients">

<h2>For patients</h2>

  
<h1>Find a doctor, book a visit and
solve any health-related doubt</h1>

        <select className="select-patients">
        <option>CHOOSE CONTRY</option>
         <option><a href="#">ARGENTINA</a></option>
         <option><a href="#">AUSTRALIA</a></option>
          <option><a href="#">BRAZIL</a></option>
         <option><a href="#">CHILE</a></option>
          <option><a href="#">COLOMBIA</a></option>
          <option><a href="#">CZECH</a></option>
          <option><a href="#">FRANCE</a></option>
          <option><a href="#">ITALY</a></option>
          <option><a href="#">MEXICO</a></option>
           <option><a href="#">PERU</a></option>
          <option><a href="#">POLAND</a></option>
           <option><a href="#">PORTUGAL</a></option>
           <option><a href="#">SPAIN</a></option>
           <option><a href="#">TURKEY</a></option>
           <option><a href="#">UK</a></option>
            </select>
   </div>

<div className="img-patients">
<img src="https://www.docplanner.com/img/screen-marketplace@2x.png"/>
</div>
</div>
<div className="for-doctors">
<div className="text-doctors">

		<h2>For doctors</h2>
        <center>
		<h1>Save time managing visits and cut no-shows by half</h1>
		</center>

	    </div>
          <div class="img-doctors">
			    <img src="https://www.docplanner.com/img/screen-saas@2x.png"/>
			    </div>
		   
       

</div>

   </div>
   <div className=" bottom-service">
   <p class="subtitle-Bservice"><strong> We are a global 
			company 
		with local culture</strong>
                 
            </p>
    <div className='list-Bottomservice'>
    <ul>  
    
    
            		<li><i class="fa fa-tags" aria-hidden="true"></i><a href="#"target="_blank"> znanylekarz </a></li>
            		<li><i class="fa fa-tags" aria-hidden="true"></i><a href="#"target="_blank"> doctoralia </a></li>
            		<li><i class="fa fa-tags" aria-hidden="true"></i><a href="#"target="_blank"> miodottore </a></li>
            		<li><i class="fa fa-tags" aria-hidden="true"></i><a href="#"target="_blank"> doktortakvimi</a></li>
            		<li><i class="fa fa-tags" aria-hidden="true"></i><a href="#"target="_blank"> znamylekar </a></li>
            	</ul>
      </div>        
   </div>
   </div>
   
    )
}
}
export default Service;