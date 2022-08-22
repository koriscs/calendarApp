const pool = require('../config/index');

exports.getAppointments = async (req, res) => { 
    const month = req.params.month;
try {
    const results = await pool.query('SELECT * FROM calendar WHERE month = $1;',[month])
        
        if (results.rows.length) {
            res.status(200).json(results.rows)
        }else {
            res.status(200).json({msg:"There are no appointments in this month!"})
        }
    }catch(error){
        console.log(error);
    }

}

exports.addAppointment = async (req, res) => {
    const {month, day, year, hour, name, email} = req.body;

    const results = await pool.query('INSERT INTO calendar (month, day, year, hour, name, email) VALUES ($1, $2, $3, $4, $5, $6)'
    ,[month, day, year, hour, name, email])

    res.status(201).json({success: true ,msg:"Your appointment is booked!"}) 

}