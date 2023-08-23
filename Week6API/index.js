
import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 3000;

// to let the server know what directory are we working on 
const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));