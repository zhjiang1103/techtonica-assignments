
import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';

import books from './books.js';


const app = express();
const PORT = 5000;

// to let the server know what directory are we working on 
const __dirname = path.resolve();
// Configuring cors middleware
app.use(cors());
// Use JSON parsing middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello, welcome to Janet's Book Library")
    });

app.get('/books', (req, res) => {
    res.json(books);
  });



app.listen(PORT, () => console.log(`Server running on Port http://localhost:${PORT}`));