const { Router } = require('express');
const calendarRouter = Router();
const { getAppointments, addAppointment} = require('../controllers/calendar')

calendarRouter.get('/:month', getAppointments);
calendarRouter.post('/', addAppointment);

module.exports = calendarRouter;
