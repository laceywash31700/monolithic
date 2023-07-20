'use strict';
const bcrypt = require('bcrypt');
const {user} = require('../models/index.js');

console.log('I AM IN THE SIGNUP MODULES', user);

const signUpCreate = async (req, res) => {
  try {
    const {password, username } = req.body;
    const encryptedPassWord = await bcrypt.hash(password, 10);
    console.log('I am in signup create', user);
    const record = await user.create({password: encryptedPassWord, username});
    res.status(201).json(record);
  } catch (e) {
    res.status(403).send('Error Creating User');
  }
};

module.exports = signUpCreate;