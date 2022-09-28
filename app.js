const express = require('express')
const app = express()
app.use(express.static(__dirname + '/public'));
app.use(express.json())
const people = []


// app.all('/api/v1/*', (req, res) => {
//     res.json({ error: 'That route is not implemented.' })
// })

//routes 
app.post('/api/v1/people', (req, res) => {
    const { name, age } = req.body
    if (!name) {
      return res
        .status(400)
        .json({ error: 'Please enter a name.' })
    }
    if (!age) {
        return res
          .status(400)
          .json({ error: 'Please enter an age.' })
      }
    res.status(200).json({ message: 'A person record was added.' })
})

app.get('/api/v1/people', (req, res) => {
    res.status(200).json({ success: true})
})

app.get('/api/v1/people/:id', (req, res) => {
    index = Number(req.params.id)
    if (isNaN(index) || !Number.isInteger(index) || index<0 || index>= people.length) {
        res.status(404).json({message: 'No record is found.'})
        return
    }
    res.json(people[index])
})

app.listen(3000, () => {
    console.log("listening on port 3000...")
})

module.exports = app
