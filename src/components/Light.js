import React, {useState} from 'react';
import './Light.css';

const Light = ({status, press}) => {
    const [bulba,setBulba] = useState(false);

    const [bulbb,setBulbb] = useState(false);

function bulbaSelected(a){
  setBulba (!a);
}

function bulbbSelected(b){
  setBulbb (!b);
}


  return(
    
 <div className='main'>
    <div className='box'>
    <div className={bulba? 'circle' : 'circlea'} ></div>
    <div className={bulbb? 'circleb' : 'circlebb'}></div>
    <button className='buttona' onClick={() => bulbaSelected(bulba)}>{bulba? "On" : "Off"}</button>
    <button className='buttonb' onClick={() => bulbbSelected(bulbb)}>{bulbb? "On" : "Off"}</button>
    
    </div>
</div> 
  )    
}

export default Light;