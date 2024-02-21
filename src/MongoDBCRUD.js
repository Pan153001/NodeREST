const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(
    "mongodb://admin:ZPKryi29668@node57052-pan-noderest.proen.app.ruk-com.cloud:11848",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
const Book = mongoose.mode("Book",{
    id: {
        type: Number,
        unique: true,
        required: true,
    },
    title: String,
    author: String,
});

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find();
        res.send(books);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/books/:id", async (req, res) => {
    try {
        const book = await Book.findOne({id:req.param.id});
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put("/books/:id",async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate({id:req.param.id},req.body, {
            new: true,
        });
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete("/books/:id", async (req, res) => {
    try {
        const book = await Book.findOneAndDelete({id:req.param.id});
        res.send(book);
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
})