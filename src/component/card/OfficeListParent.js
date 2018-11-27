import React from 'react';
import OfficeCard from'./Officecardchild.js';
import './OfficeListParent.css';




 const OfficeList=(props)=>{
   return( 
   <div className="allcard">

{props.article.map((el,i)=> <OfficeCard card={el} key={i}/>)}

   </div>
   )
   
 } 
   


      

export default OfficeList;