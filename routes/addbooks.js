const express = require('express');
const router = express.Router();
// Load Book model
const Book = require('../models/Book');

router.get('/', (req, res) => res.render('addbooks'))

router.post('/', (req, res) =>{
  const { title, description} = req.body;
  let errors = [];

  if (!title || !description) {
    errors.push({ msg: 'Please enter all fields' });
  }
  if (errors.length > 0) {  
    res.render('addbooks', {
      errors,
      title,
      description
    });
  } else {
    Book.findOne({ title: title }).then(book => {
      if (book) {
        errors.push({ msg: 'Book already exists' });
        res.render('addbooks', {
          errors,
          title,
          description
        });
      } else {
        const newBook = new Book({
          title,
          description
        });
            newBook
              .save()
              .then(book => {
                req.flash(
                  'success_msg',
                  'Book successfully added'
                );
                res.redirect('/addbooks');
              })
              .catch(err => console.log(err));
          };
      });
  }})

module.exports = router;
