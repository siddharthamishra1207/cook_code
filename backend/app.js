// app.js
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());


// Routes
const authRoutes = require('./routes/authRoutes.js');
const taskRoutes = require('./routes/taskRoues.js');
const getallRoutes =require('./routes/getallRoutes.js');

app.use('/api/auth', authRoutes);
app.use('/api/tasks',taskRoutes);
app.use('/api/getall',getallRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


