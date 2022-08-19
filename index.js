const express = require('express')
const PORT = 3000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))