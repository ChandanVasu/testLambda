const express = require('express')
const app = express()
const port = 3000
const serverless = require('serverless-http');


app.get('/', (req, res) => {
  res.send('Hello Worlddsds!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports.handler = serverless(app);
