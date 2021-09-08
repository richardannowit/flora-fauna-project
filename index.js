require('dotenv').config()
const { connect } = require("./config/database");
const express = require('express')
const bodyParser = require('body-parser')


const authRouter = require('./routes/auth')
const homeRouter = require('./routes/home')

connect();
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))




app.use('/api/auth', authRouter)


app.use('/api/home', homeRouter)


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})