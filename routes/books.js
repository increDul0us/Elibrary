const express = require('express');
const router = express.Router();
// Load Book model
const Book = require('../models/Book');
const mongoose = require('mongoose');


router.get('/', (req,res)=> {
    Book.find({},function(err, books){
        if(err){
            console.log(err);
        }
        else{
            res.render('books', {books:books})
            console.log(books)
}})})

module.exports = router;