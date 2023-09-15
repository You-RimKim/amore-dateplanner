const mongoose = require('mongoose');

const { Router } = require('express');
const router = new Router();

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const User = require('../models/User.model');

const { isLoggedIn, isLoggedOut } = require('../middleware/route-guard.js');


router.get('/signup', isLoggedOut, (req, res) => res.render('auth/signup'));

router.get('/userProfile', isLoggedIn, (req, res) => {
  res.render('users/user-profile', { userInSession: req.session.currentUser });
});

router.get('/login', (req, res) => res.render('auth/login'));

router.post('/signup', (req, res, next) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.render('auth/signup', { errorMessage: 'All fields are mandatory. Please provide your username, email and password.' });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {

      return User.create({
        username,
        email,
        passwordHash: hashedPassword
      })
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/userProfile');
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/signup', { errorMessage: error.message });
      } else if (error.code === 11000) {

        console.log(" Username and email need to be unique. Either username or email is already used. ");

        res.status(500).render('auth/signup', {
          errorMessage: 'User not found and/or incorrect password.'
        });
      } else {
        next(error);
      }
    });
});

router.post('/signup', (req, res, next) => {
  console.log('The form data: ', req.body);
});

router.post('/login', (req, res, next) => {
  console.log('SESSION =====> ', req.session);

  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.render('auth/login', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }

  User.findOne({ email })
    .then(user => {
      if (!user) {
        console.log("Email not registered. ");
        res.render('auth/login', { errorMessage: 'User not found and/or incorrect password.' });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        req.session.currentUser = user;
        res.redirect('/userProfile');
      } else {
        console.log("Incorrect password. ");
        res.render('auth/login', { errorMessage: 'User not found and/or incorrect password.' });
      }
    })
    .catch(error => next(error));
});

router.get("/users/:userId/edit", (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((userToEdit) => {
      res.render("users/user-edit.hbs", { userInSession: userToEdit });
    })
    .catch((error) => next(error));
});

router.post("/users/:userId/edit", (req, res, next) => {
  const { userId } = req.params;
  const { username, email, password } = req.body;

  User.findByIdAndUpdate(
    userId, 
    { username, email, password }, { new: true })
    .then((updatedUser) => res.render(`/users/${updatedUser._id}/edit`))
    .catch((error) => next(error));
});

// POST route to delete a book from the database
router.post("/users/:userId/delete", (req, res, next) => {
  const { userId } = req.params;

  User.findByIdAndDelete(userId)
    .then(() => res.redirect("/"))
    .catch((error) => next(error));
});

router.get("/users", (req, res, next) => {
  User.find()
    .then((userFromDB) => {
      res.render("users/user-profile.hbs", { userInSession: userFromDB });
    })
    .catch((error) => {
      console.log("Error while getting the user from the DB: ", error);

      next(error);
    });
});

router.get("/users/:userId", (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((theUser) => res.render("users/user-profile.hbs", { userInSession: theUser }))
    .catch((error) => {
      console.log("Error while retrieving user details: ", error);
      next(error);
    });
});

router.post('/logout', (req, res, next) => {
  req.session.destroy(err => {
    if (err) next(err);
    res.redirect('/');
  });
});

router.get('/questionnaire', (req, res) => {
  res.render('users/questionnaire-form');
});

module.exports = router;
