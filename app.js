const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.status(404).send("Oh uh, something went wrong");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
