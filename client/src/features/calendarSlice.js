import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
axios.defaults.withCredentials = true;


export const fetchAppointments = createAsyncThunk('calendar/fetchAppointments', async (month) => {
    const response = await axios.get(`/calendar/${month}`)
    
    return response.data;
})
export const addAppointment = createAsyncThunk(
    'calendar/addAppointment',
    async (data) => {
        await axios.post('/calendar', data)

        return data
    })

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        appointments:[]
    },
    reducers: {
       
    },    
    extraReducers: {
        [fetchAppointments.pending]: (state, action) =>{
            state.fetchAppointments ='loading'
        },
        [fetchAppointments.fulfilled]: (state, action) =>{
            state.fetchAppointments ='succeded'
            state.appointments = action.payload
        },
        [fetchAppointments.rejected]: (state, action) =>{
            state.fetchAppointments ='failed'

        },
        [addAppointment.pending]: (state, action) =>{
            state.addAppointment = 'loading'
        },
        [addAppointment.fulfilled]: (state, action) =>{
            state.addAppointment = 'succeded'
            state.appointments.push(action.payload)
        },
        [addAppointment.rejected]: (state, action) =>{
            state.addAppointment = 'failed'
        },
    }
})

export default calendarSlice.reducer