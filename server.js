const express = require('express');
const app = express();
const PORT = 8000; 

// my vocabulary list API 
let words = [
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 2,
        'word': "assimilate",
        'meaning': "become like one's environment",
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 3,
        'word': "concede",
        'meaning': 'admit or acknowledge, often reluctantly',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 4,
        'word': "dissipate",
        'meaning': 'go away, scatter, or disappear',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 5,
        'word': "erratic",
        'meaning': 'liable to sudden unpredictable change',
        'partOfSpeech': 'adjective',
        'example': ''
    },
    {
        'id': 6,
        'word': "flourish",
        'meaning': 'a showy gesture',
        'partOfSpeech': 'noun',
        'example': ''
    },
    {
        'id': 7,
        'word': "impulsive",
        'meaning': 'characterized by undue haste and lack of thought',
        'partOfSpeech': 'adjective',
        'example': ''
    },
    {
        'id': 8,
        'word': "longevity",
        'meaning': 'the property of having lived for a considerable time',
        'partOfSpeech': 'noun',
        'example': ''
    },
    {
        'id': 9,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    },
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': ''
    }

]

app.listen(8000, () => {
    console.log(`PORT ${PORT} is LIVE! WE GO GET!`);
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(words)
})

app.get('/api/:id', (request, response) => {
    const id = request.params.id 
    console.log(`you entered the id ${id}`)
})

