require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

let books = [
    {
        id: 1,
        title: 'Book 1',
        auther: 'Auther'
    },
    {
        id: 2,
        title: 'Book 2',
        auther: 'Auther 2' 
    },
    {
        id: 3,
        title: 'Book 3',
        auther: 'Auther 3' 
    }
];

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    res.json(book);
});

app.post('/books' , (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        auther: req.body.auther
    };
    books.push(book);
    req.send(book);
});

app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    book.title = req.body.title;
    book.auther = req.body.auther;
    res.send(book);
});

app.delete('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if(!book) res.status(404).send('Book not found');
    const index = books.indexOf(book);
    books.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port http://localhost:${port}`));