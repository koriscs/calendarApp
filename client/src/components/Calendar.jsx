import {useState, useEffect} from 'react';
import Calendar from 'react-calendar'; 
import '../App.css';
import Time from './Time.jsx'
import {fetchAppointments} from '../features/calendarSlice'
import { getMonth, isSameDay } from '../utils/utils'
import { useDispatch } from 'react-redux'

const disabledDates = ["Oct 31 2022","Nov 01 2022","Dec 26 2022"]

function CalendarApp() {
 const [date, setDate] = useState(new Date())
 const [showTime, setShowTime] = useState(false) 
 const disptach = useDispatch();
 let month = getMonth(date);


 function tileDisabled({ date, view }) {
  // Disable tiles in month view only
  if (view === 'month') {
    // Check if a date React-Calendar wants to check is on the list of disabled dates
    return disabledDates.find(dDate => isSameDay(dDate, date)) || (view === "month" && date.getDay() === 0 || date.getDay() === 6);
  }
}

 useEffect(()=>{
    
   disptach(fetchAppointments(month));
 },[month])

return (
 <div className="app">
   <div className="calendar-container">
     <Calendar 
     tileDisabled={tileDisabled}
        showNeighboringMonth={false} 
        locale='hu-HU' 
        onChange={setDate} 
        value={date}
        minDetail="month"
        minDate={new Date()} 
        onClickDay={() => setShowTime(true)}/>
   </div>
   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p>
      <span>Elérhető időpontok!</span>
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>
 </div>
  )

}

export default CalendarApp;

// { date, view }) =>
// (view === "month" && date.getDay() === 0 || date.getDay() === 6)