import React from 'react'
import {useState} from 'react';
import './App.css';
import Model from './Model';

const time = ['08:00','09:00','10:00','14:00','15:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [isOpen, setIsOpen] = useState(false)

 function displayInfo(e) {
   setIsOpen(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
   {time.map((times, index) => {
    return (
    <div key={index}>
      <button  onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div>
      <Model open={isOpen} onClose={() => setIsOpen(false)} props={props} event={event}/>
    </div>
 </div>
  )
}

export default Times;