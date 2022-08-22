import React, { useEffect } from 'react'
import {useState} from 'react';
import './App.css';
import Model from './Model';
import { useSelector } from 'react-redux';
import { selectAppointments } from './features/calendarSlice';
import { getDay, getMonth, getYear } from './utils/utils';

const time = ['08:00','09:00','10:00','14:00','15:00']

function Times({date}) {

 const [event, setEvent] = useState(null)
 const [isOpen, setIsOpen] = useState(false)
 const appointments = useSelector(selectAppointments);

 function filterTimes(time,date,appointments) {
  
    const day = getDay(date)
    const year = getYear(date)
    const month = getMonth(date)
  if (appointments) {
    const result = appointments.every(element => !(element.day === day && element.year === year && element.month === month && time === element.hour))
    return result
  }
 }

 function displayInfo(e) {
   setIsOpen(true);
   setEvent(e.target.innerText);
}


return (
 
 <div className="times">
   {time.map((times, index) => { if (filterTimes(times,date,appointments))
   {
    return ( 
      <div key={index}>
        <button  onClick={(e)=> displayInfo(e)}> {times} </button>
      </div>
          )
   } else {
    return ( 
    <div key={index}>
      <button style={{color: "red"}} onClick={(e)=> displayInfo(e)} disabled> {times} </button>
    </div>
        )}
     })}
    <div>
      <Model open={isOpen} onClose={() => setIsOpen(false)} props={date} event={event}/>
    </div>
 </div>
  )
}

export default Times;