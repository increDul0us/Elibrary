const express = require('express');
const router = express.Router();
// Load Book model
const Book = require('../models/Book');
const mongoose = require('mongoose');

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

router.get('/', (req,res)=> {
    Book.find({},function(err, books){
        if(err){
            console.log(err);
            res.json(err);
        }
        else{
            res.render('books', {books})
            console.log(books)
}})})

module.exports = router;