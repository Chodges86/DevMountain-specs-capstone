require('dotenv').config({ path: "./../.env" })
const express = require('express')
const session = require('express-session')
const cors = require('cors')

const { register, login } = require('./controllers/auth')
const { getAllProjects, updateProject, addProject } = require('./controllers/projects')

const { PORT } = process.env; 


const app = express()
app.use(express.json())
app.use(cors())

app.use(session({
    secret: "ImAlittleTeapotShortandStout", // TODO: Put in .env
    saveUninitialized: true,
    resave: false,
    cookie: {
        httpOnly: true,
        rolling: true
        // maxAge: 1000 * 30
    }
}))



app.post('/register', register)
app.post('/login', login)
app.get('/get-all-projects/:id', getAllProjects)
app.put('/project/:id', updateProject)
app.post('/project', addProject)


app.listen(PORT, () => console.log(`Server running on ${PORT}`))