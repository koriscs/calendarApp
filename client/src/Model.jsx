import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { addAppointment } from './features/calendarSlice';
import { useDispatch } from 'react-redux';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000
}
const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000

}

export default function Model({open, props, onClose, event}) {
    const [values, setValues] = useState({
        name: "",
        email: "" 
    })
    const dispatch = useDispatch();

    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value})
       } 
    const onSubmit = async (e) =>{
        e.preventDefault()
        const {email, name} = values;
        const date = props.date.toString().split(' ');
        const  data= {
            email,
            name,
            month: date[1],
            hour: event,
            year: date[3],
            day: date[2]
        }
        dispatch(addAppointment(data));
        setValues({
            name: "",
            email: "" 
        })
        onClose();
    }


  return open ? (
    <>
    <div style={OVERLAY_STYLES} />
    <div style={MODAL_STYLES}> 
     <form onSubmit={(e) => onSubmit(e) } className="booking-container container mt-3">
    <h1>Foglalás</h1>
    <div className='mb-3'>
  <label htmlFor='name' className='form-label'>
    Teljes Név
  </label>
  <input
    onChange={(e) => onChange(e)}
    type='text'
    value={values.name}
    className='form-control'
    id='name'
    name='name'
    placeholder='Kati Béla'
    required
  />
</div>

<div className='mb-3'>
  <label htmlFor='email' className='form-label'>
    Email cím
  </label>
  <input
    onChange={(e) => onChange(e)}
    type='email'
    className='form-control'
    id='email'
    name='email'
    value={values.email}
    placeholder='test@gmail.com'
    required
  />
</div>
{/* 
 <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>
<div style={{ color: 'green', margin: '10px 0' }}>{success}</div>  */}

<button type='submit' className='btn btn-primary'>
  Submit
</button>
    </form>
        <button onClick={onClose} >Close</button>
    </div>
    </>
  ): null
}
