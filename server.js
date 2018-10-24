const express = require('express')
const cors = require('cors')
const app = express()
 
app.use(cors())

app.get('/', (req, res) => {
    return res.json({text: req.query.text})
})

module.exports = app.listen(3002)