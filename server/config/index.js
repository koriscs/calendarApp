require('dotenv').config()
const { Pool } = require('pg');
const isProduction = process.env.NODE_ENV === 'production';
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;


const pool = isProduction ? new Pool ({
    connectionString: process.env.DATABASE_URL, 
       ssl: {
        rejectUnauthorized: false,
     } 
  }) : new Pool ({
    connectionString: connectionString,
  })

module.exports = {
    query: (text, params) => pool.query(text, params)
}