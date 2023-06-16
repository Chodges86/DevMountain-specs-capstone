require('dotenv').config({ path: "./../.env" })
const express = require('express')
const cors = require('cors')

const { register, login } = require('./controllers/auth')

const { PORT } = process.env; 


const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', register)
app.post('/login', login)


app.listen(PORT, () => console.log(`Server running on ${PORT}`))