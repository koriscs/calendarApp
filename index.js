const express = require('express');
const app = express();
require('dotenv').config();
const helmet = require('helmet');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const isProduction = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());
app.use(cors(origin = {origin:isProduction ? process.env.HEROKU_URL : process.env.CLIENT_URL, credentials: true }));
app.options('*', cors(origin));
app.use(helmet());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")))
       
    }
    // app.get('*',(req, res) =>{
    //     res.sendFile(path.join(__dirname,"client/build/index.html"));
    // })

app.get('/',(req, res) =>{
    res.send("Hello There!")
})

const appStart = () => {
    try{
    app.listen(PORT, () =>{
        console.log(`The app is listening on ${PORT}`)
    })
        } catch (error) {
    console.log(`Error: ${error.message}`)
    } 
}

appStart();