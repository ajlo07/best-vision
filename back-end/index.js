const express = require('express')
const userRoute = require('./src/routes/userRoute')
const productRoute = require('./src/routes/productRoute')
const orderRoute = require('./src/routes/orderRoute')

const bodyParser = require('body-parser')
var app = express()
const serverless = require('serverless-http')
const cors = require('cors')
require('./src/config/config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use('/', productRoute)
app.use('/', userRoute)
app.use('/', orderRoute)

if(process.env.ENVIRONMENT  === "lambda"){
    module.exports.handler = serverless(app)
}else{
app.listen(process.env.Port || 6500, function () {
    console.log('App running on port ' + (process.env.PORT || 6500))
})
};