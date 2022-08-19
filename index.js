const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();
require('dotenv').config();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req, res) =>{
    res.send("Hello There!")
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))