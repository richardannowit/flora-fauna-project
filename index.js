require('dotenv').config()
require("./config/database").connect();
const express = require('express')
const bodyParser = require('body-parser')
const { isAuth } = require('./middleware/AuthMiddleware')
const { isRole } = require('./middleware/CheckRoleMiddleware')

const authRouter = require('./routes/auth')


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/auth', authRouter)

app.get('/home', isAuth, isRole(['admin', 'normal']), (req, res) => {
    return res.status(200).json('Successful')
})



const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})