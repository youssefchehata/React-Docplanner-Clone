import React, { Component } from 'react';
import './Stat.css';


class Stat extends Component {
  render() {
    return (
        
        <div className="stat">
    	<div className="text-stat">
    	<h1>The world's <br/>
         biggest healthcare platform
        </h1>
        <p>
         We work from 6 offices all over the world, bringing Docplanner<br/>
          Group to life in almost 20 countries.
         </p>
    	</div>
    	<div className="box-stat">
    		<div className="box-stat-1" >
    			<div className="leaderin">
    				<img src="https://www.docplanner.com/img/flag.png"/>
    				<h3>Leader in 8 countries<br/></h3>
    		<p >
    			
             Poland, Turkey, Spain, Italy,<br/> Mexico, 
             Brazil, Argentina <br/>and Chile
    		</p>
    		    </div>
    		    <div className="appointments">
    		    	<img src="https://www.docplanner.com/img/visits.png"/>
    		    	<h3>600 000 appointments<br/></h3> 
    		 <p >
    		 	   booked last month
    		 </p>
    		 </div>
    		 </div>
    		 <div className="box-stat-2" >
    		 	<div className="nbr-patients">
    		 		<img src="https://www.docplanner.com/img/patients.png"/>
    		 	<h3> 20 million uniquestr<br/>
    		 	 patients</h3><br/>	
    		 <p >
    		 	  
    		 	 visit us every month<br/>
               
    		 </p>
    		   </div>
    		 <div className="nbrdoctors">
    		 	<img src="https://www.docplanner.com/img/doctors.png"/>
    		 	<h3> 35 000 active doctors<br/></h3>
    		 <p >
    		 	
               trust in our solutions
    		 	    		 	
    		 </p>
    		   </div>
    		</div>
    	</div>
    </div>  
    
    
    )
}
}
export default Stat;