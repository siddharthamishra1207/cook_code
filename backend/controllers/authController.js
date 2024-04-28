// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Signup controller
exports.signup = async (req, res) => {
  try {
    const { username, password, phone, email, gender} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const pp =gender === "male" ? boyProfilePic : girlProfilePic ;
    const newUser = await User.create({ 
      username, 
      password: hashedPassword, 
      phone, 
      email, 
      gender, 
      profilePic: pp
    });

    // Respond with a success message and the new user data
    console.log("signup...")
    res.status(201).json({ success: true, message: 'Signup successful', data: newUser });
  } catch (error) {
    // If an error occurs during signup, respond with an error message
    res.status(500).json({ success: false, message: 'Signup failed', error: error.message });
  }
};

// Login controller
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
    // Return user ID only
    res.status(200).json({ success: true, message: 'Login successful', userId: user._id });
    console.log("login....")
  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed', error: error.message });
  }
};

// Logout controller
exports.logout = async (req, res) => {
  try {
    
    res.status(200).json({ success: true, message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Logout failed', error: error.message });
  }
};


