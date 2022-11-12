const dotenv = require('dotenv') 
const express = require('express')  

const routes = require('./routes')

dotenv.config()

const app = express()

app.use(express.json()) 

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    console.log(`on port ${process.env.PORT}`)
})