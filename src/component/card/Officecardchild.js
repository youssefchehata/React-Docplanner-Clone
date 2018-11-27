import React  from 'react';
import './OfficeCardChild.css';

const OfficeCard = (props)=> {
    return(<div className="imgoffice-lineone">
    
        <div className="card-city">
        
    <a href="#"><img src={props.card.image}/></a> <br/>
    <figcaption>{props.card.title}
    <a className="see-openings" href="#">{props.card.button}</a></figcaption> 
         

</div> 
</div>)}




export default OfficeCard;