const express = require('express')
const signupRoutes = require('./src/routes/signupRoutes')
const newOrderRoutes = require('./src/routes/newOrderRoutes')

const bodyParser = require('body-parser')
var app = express()
const serverless = require('serverless-http')
const cors = require('cors')
require('./src/config/config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use('/', signupRoutes)
app.use('/', newOrderRoutes)

if(process.env.ENVIRONMENT  === "lambda"){
    module.exports.handler = serverless(app)
}else{
app.listen(process.env.Port || 3000, function () {
    console.log('App running on port ' + (process.env.PORT || 3000))
})
};