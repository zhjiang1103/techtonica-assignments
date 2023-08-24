
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

  // Create (C)
app.post('/items', (req, res) => {
    const newItem = req.body;
    books.push(newItem);
    console.log(books);
    res.status(201).json(newItem);
  });

  // Update (U)
app.put('/items/:id', (req, res) => {
    console.log("Hey");
    const id = req.params.id;//const { id } = req.params;
    console.log(id);
    const updatedItem = req.body;
    const book = books.find(book => book.id === id);
    if (book) {
        book.title = updatedItem.title;
        book.author = updatedItem.author;
        res.send("Updated Sucessfully")
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
  });

  app.delete('/items/:id', (req, res) => {
    const id = req.params.id;//const { id } = req.params;
    const index = books.findIndex(book => book.id === id);
    if(index !== -1){
        books.splice(index,1)
        res.send("Delete Sucessfully")
    } else {
        res.status(404).json({ message: 'Book not found' });
    }
  });


  

app.listen(PORT, () => console.log(`Server running on Port http://localhost:${PORT}`));