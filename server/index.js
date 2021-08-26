require('dotenv').config()
require("./config/database").connect();
const express = require('express')
const bodyParser = require('body-parser')
const authMiddleware = require('./middleware/AuthMiddleware')


const authRouter = require('./routes/auth')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)

app.get('/home', authMiddleware.isAuth, (req, res) => res.send('This is home'))



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})