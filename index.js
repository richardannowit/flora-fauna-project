require('dotenv').config()
const { connect } = require("./config/database");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');


const authRouter = require('./routes/auth')
const homeRouter = require('./routes/home')
const foodRouter = require('./routes/food')
const categoryRouter = require('./routes/category')
const orderRouter = require('./routes/order')
const userRouter = require('./routes/user')

connect();
const app = express()

app.use(express.static('public'))
app.use(cors())

//localhost:3000 --> http://localhost:8000


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', userRouter)

app.use('/api/orders', orderRouter)

app.use('/api/categories', categoryRouter)

app.use('/api/foods', foodRouter)

app.use('/api/auth', authRouter)

app.use('/api/home', homeRouter)


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})