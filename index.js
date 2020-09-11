const express = require("express")
const app = express()
const port = process.env.ELASTIC_BEANSTALK_PORT || 3000

app.get('/', (req, res) => {
  res.send("Hello World, from Sellix.")
})

app.listen(port, () => {
  console.log(`Hello Sellix listening at http://localhost:${port}`)
})