
const express = require('express')
const { PORT } = require('./config')
const { connectToMongo } = require('./db')
const app = express()

connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
