const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


//Welcome
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);


/*router.get('/addbooks', (req, res) => res.render('addbooks'))

router.post('/addbooks', (req, res) =>{
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
  }})*/
module.exports = router;
