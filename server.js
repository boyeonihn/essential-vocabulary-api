const express = require('express');
const app = express();
const cors = require('cors'); 
const PORT = 8000; 


app.use(cors());
// my vocabulary list API 
let words = [
    {
        'id': 1,
        'word': "abate",
        'meaning': 'become less in amount or intensity',
        'partOfSpeech': 'verb',
        'example': 'In an hour or so the storm would abate and they could leave.'
    },
    {
        'id': 2,
        'word': "assimilate",
        'meaning': "become like one's environment",
        'partOfSpeech': 'verb',
        'example': 'The immigrant family found it difficult to assimilate to new customs because they were vastly different than their own culture.'
    },
    {
        'id': 3,
        'word': "concede",
        'meaning': 'admit or acknowledge, often reluctantly',
        'partOfSpeech': 'verb',
        'example': 'Richard had no choice but to concede these demands, and charters were immediately drawn up to give effect to them.'
    },
    {
        'id': 4,
        'word': "dissipate",
        'meaning': 'go away, scatter, or disappear',
        'partOfSpeech': 'verb',
        'example': 'Most of these symptoms dissipate within a few weeks, although people who are highly addicted can have symptoms for several months.'
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
        'word': "malleable",
        'meaning': 'capable of being shaped or bent',
        'partOfSpeech': 'adjective',
        'example': 'Unlike ionic solids, metals are very malleable, they can be readily bent, pressed or hammered into shape.'
    },
    {
        'id': 10,
        'word': "obstruct",
        'meaning': 'shut out from view',
        'partOfSpeech': 'verb',
        'example': 'He wears part of his long hair tied back so as not to obstruct his vision.'
    },
    {
        'id': 11,
        'word': "render",
        'meaning': 'show in, or as in, a picture',
        'partOfSpeech': 'verb',
        'example': 'His pleasant manners and varied culture, not less than his artistic skill, contributed to render him popular.'
    },
    {
        'id': 12,
        'word': "rueful",
        'meaning': 'feeling or expressing pain or sorrow',
        'partOfSpeech': 'adjective',
        'example': 'Our coach was looking very rueful after such a unprecedented defeat from his underperforming football team.'
    },
    {
        'id': 13,
        'word': "subordinate",
        'meaning': 'subject or submissive to authority or the control of another',
        'partOfSpeech': 'adjective',
        'example': 'But his subordinate rank gave him no chance to impart a greater measure of energy to the naval operations.'
    },
    {
        'id': 14,
        'word': "tarry",
        'meaning': 'stay longer than you should',
        'partOfSpeech': 'verb',
        'example': "But we couldn't tarry long for there was much still to see and do."
    },
    {
        'id': 15,
        'word': "transgression",
        'meaning': 'the violation of a law or a duty or moral principle',
        'partOfSpeech': 'noun',
        'example': "The rest of us are reprimanded for even the smallest transgression, while he can get away with murder."
    }

]

app.listen(process.env.PORT || PORT, () => {
    console.log(`PORT ${PORT} is LIVE! WE GO GET!`);
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(words)
})

app.get('/api/:id', (request, response) => {
    const id = Number(request.params.id)
    const word = words.find(word => word.id === id)
    if (word) {
        response.json(word)
    }
    else {
        response.status(404).end(); 
    }
    console.log(`you entered the id ${id}`)
})

app.get('/api/word/:word', (request, response) => {
    const entry = request.params.word
    const word = words.find(word => word.word === entry)
    if (word) {
        response.json(word)
    }
    else {
        response.status(404).end(); 
    }
    console.log(`you entered the word ${word}`)
})

app.get('/random', (request, response) => {
    const random = Math.floor(Math.random() * words.length)
    console.log(random)
    response.json(words[random])
})

