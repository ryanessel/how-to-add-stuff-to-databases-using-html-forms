const router = require(`express`).Router();

const Book = require('../models/Book.model.js'); 
//GET route to rerieve and display all the books

// when we go to localhost:3000/books the code below will run.
//showing console loggin all the documents(books) in our library-project database (database established using mongoos in bin/seeds.js)
router.get(`/books`, (req, res, next) => {
    Book.find()
    .then(allBooksDb => {
        console.log("Got db books", allBooksDb);

        res.render('books/books-list.hbs', { books: allBooksDb});
    })
    .catch(error => {
        console.log(`Error on books get`, error);

        next(error);
    })

})

// router.get(`/books/:bookId`, (req, res) => {
//     const { bookId } = req.params;
//     console.log(`the ID from the URL is:`, bookId);

//     res.render(`books/book-details.hbs`)
// });


//making a route to create directory for local host which renders the HBS page(view) "book-create"
//GET ROUTE!!!-//renders teh page
router.get(`/books/create`, (req, res) =>{
res.render(`books/book-create.hbs`)

})

//POST ROUTE-USES THE POST METHOD FORM THE VIEW's FORM AT THE LOCAL HOST ROUTE TO retrieve the the data input in that form. it makes an object based on the "name" attribue of each input (this name must match schema)
router.post('/books/create', (req, res, next) => {
    console.log({entireFromInput: req.body});// req.body is the thing catching the data sent from the html form method POST
    const {title, author, description, rating} = req.body;
    // adds new book to database from the form
    Book.create({title, author, description, rating})
        // .then(newBookForDb => console.log(`New book created: ${newBookForDb.title}`))
        .then(() => {
            res.redirect(`/books`)
        })
        .catch(error => {
            next(error)
        });

  });


// when accesing this route /books/:bookId (:bookId will change based on the the book id requested when the seet details is clicked on) it will do the funciton finding that book using the id then returining it?
router.get(`/books/:bookId`, (req, res, next) => {
    const { bookId } = req.params;

    Book.findById(bookId)
        .then(targetBook => res.render(`books/book-details.hbs`, { book: targetBook }))// book key is targeted on the hbs page to access the READ data by this functionerino
        .catch(error => {
            console.log(`error while retrieving book details:`, error);

            next(error);
        })


})




module.exports = router;

// THIS NEEDS TO BE LINKED ON  app.js

// const bookRoutes = require('./routes/book.routes'); // <== import (require) book routes
// app.use('/', bookRoutes); // <== use book routes

//NOTE AOBUT the  app.use('/', bookRoutes).
//                         ↑ this has to be the same either on the routes or has to be the same on the app.js. They can be whatever but only on either the app.js or routes folders js files. If it is `/` on app.js then all of of the routes files will have different names. IF on the routes js files it is `/` then give the different route names on the app.js file.



