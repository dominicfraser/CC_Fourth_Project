const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const jwt    = require('jsonwebtoken')
const config = require('./config')
const verifyToken = require('./auth/verifyToken')(config.secret)
const signToken = require('./auth/signToken')(config.secret)
const allRoutes = require('./controllers/index')(verifyToken, signToken)
const cookieParser = require('cookie-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
  
app.use(cookieParser())

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.use(allRoutes)
app.use(express.static('client/build'))

app.use(morgan('dev'))

const server = app.listen(3000, function () {
  const host = server.address().address
  const port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})
