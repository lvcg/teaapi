const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const tea = {
    'oolong': {
        'type': 'oolong',
        'origin': 'China',
        'waterTemp': '95',
        'steepTimeSeconds': '330',
        'caffinated': 'true',
        'flavor': 'delicious',
    },
    'black': {
        'type': 'black',
        'origin': 'China',
        'waterTemp': '95',
        'steepTimeSeconds': '330',
        'caffinated': 'true',
        'flavor': 'delicious',
    },
    'green': {
        'type': 'green',
        'origin': 'China',
        'waterTemp': '95',
        'steepTimeSeconds': '200',
        'caffinated': 'false',
        'flavor': 'delicious',
    },
}

app.get('/', (req, res)=> {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const teaName = req.params.name.toLowerCase()
    if (tea[teaName]) {
        res.json(tea[teaName])
    } else {
        res.json(tea['Tea not found'])
    }
})

app.listen(process.env.PORT || PORT,() =>{
    console.log(`listening on port ${PORT}`)
})
