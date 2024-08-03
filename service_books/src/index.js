const express = require('express')
//const session = require('express-session')

const app = express()
app.use(express.json())   
app.use(express.urlencoded())
app.set("views","src/views")
app.set('view engine', 'ejs')

const {passport, session} = require('./auth')
app.use(session)
app.use(passport.initialize())
app.use(passport.session())

const router = require('./routes')
app.use(router)

const errorMiddleware = require('./middleware/error')
app.use(errorMiddleware)

// Настраиваем порт, который будет прослушивать сервер
const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`Server is listening port ${PORT}.`)
})