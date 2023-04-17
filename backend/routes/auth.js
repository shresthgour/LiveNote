const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = 'ThanoZisJ@WDD';


// * ROUTE 1: Create A User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  //* Declaring the information pattern 
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 })
], async (req, res) => {
  let success = false;
  // * If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }

  try {
    //* Check if the user with this email already exists  
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return req.status(400).json({ success, error: "Sorry a user with this email already exists" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    //* Create a new User
    user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    });

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);

    // res.json(user);
    success = true;
    res.json({ success, authToken });

  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server ERROR!");
  }
});


// * ROUTE 2: Authenticate a User using: POST '/api/auth/login'. No login required
router.post('/login', [
  //* Declaring the information pattern 
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Pasword cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // * If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ success, error: "Please try to login with the correct Credentials " });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false;
      return res.status(400).json({ error: "Please try to login with the correct Credentials " });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authToken = jwt.sign(data, JWT_SECRET);
    success = true;

    // res.json(user);
    res.json({ success, authToken });


  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server ERROR!");
  }
})


// * ROUTE 2: Get loggedin User Details using: POST '/api/auth/getuser'. Login required
router.post('/getuser', fetchuser, async (req, res) => {
  try {
    const userID = req.user.id;
    const user = await User.findById(userID).select("-password"); 
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server ERROR!");
  }
})

module.exports = router;