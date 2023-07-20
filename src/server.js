'use strict';

require('dotenv').config();
const express = require('express');
const signUpCreate = require('./auth/middleware/bcrypt.js');
const sigInPost = require('./auth/middleware/base.js');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Signup Route -- create a new user
// Two ways to test this route with http
// echo '{"username":"john","password":"foo"}' | http post :3000/signup
// http post :3000/signup username=john password=foo
app.post('/signup', signUpCreate);


// SignIn Route -- login with username and password
// test with http
// http post :3000/signin -a john:foo
app.post('/signin', sigInPost);



// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));

module.exports = app;