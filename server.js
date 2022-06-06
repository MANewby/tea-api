const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

// would i also use the triple dot syntax here for repeating information??

const goosebumpsBooks = {
    'monster blood':{
        'published': 'September 1992',
        'author': 'R.L. Stine',
        'ISBN': 978059045367,
        'pages': 128,
        'fan favorite': true,
        'series number': '3'
    },
    'Welcome to Dead House':{
        'published': 'July 1992',
        'author': 'R.L. Stine',
        'ISBN': 0590453653,
        'pages': 123,
        'fan favorite': true,
        'series number': '1'
    },
    'Stay Out of the Basement':{
        'published': 'July 1992',
        'author': 'R.L. Stine',
        'ISBN': 9780439568456,
        'pages': 122,
        'fan favorite': true,
        'series number': '2'
    }
}

app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request,response)=>{
    const teaName = request.params.name.toLowerCase()
    if( tea[teaName] ){
       response.json(tea[teaName]) 
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})