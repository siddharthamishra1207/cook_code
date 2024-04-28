// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const getAll = require('../controllers/getallController');




router.get('/', getAll.getTasks);
router.get('/re/:id', getAll.getdetail);

module.exports = router;
