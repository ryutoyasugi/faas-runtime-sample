const express = require('express')

const app = express()
app.use(express.json())

const handler = require('./handler').handler

app.all('*', (req, res) => {
  Promise
    .resolve(handler(req.body, {}))
    .then(result => { res.json(result) })
})

app.listen(8080, () => { console.log(`Running FaaS!`) })
