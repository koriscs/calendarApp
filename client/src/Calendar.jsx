import {useState, useEffect} from 'react';
import Calendar from 'react-calendar'; 
import './App.css';
import Time from './Time.jsx'
import {fetchAppointments} from './features/calendarSlice'
import { getMonth } from './utils/utils'
import { useDispatch } from 'react-redux'

function CalendarApp() {
 const [date, setDate] = useState(new Date())
 const [showTime, setShowTime] = useState(false) 
 const disptach = useDispatch();
 let month = getMonth(date);


 useEffect(()=>{
    
   disptach(fetchAppointments(month));
 },[month])

return (
 <div className="app">
   <div className="calendar-container">
     <Calendar tileDisabled={({ date, view }) =>
          (view === "month" && date.getDay() === 0) || date.getDay() === 6
        } locale='hu-HU' onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
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
      <span>Default selected date:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>
 </div>
  )

}

export default CalendarApp;