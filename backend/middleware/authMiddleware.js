// // middleware/authMiddleware.js
// const jwt = require('jsonwebtoken');

// // Middleware to verify JWT token
// exports.verifyToken = (req, res, next) => {
//   const token = req.cookies.token;

//   if (!token) {
//     return res.status(401).json({ success: false, message: 'No token provided' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(403).json({ success: false, message: 'Failed to authenticate token' });
//     }
//     req.user = { userId: decoded.userId };
//     next();
//   });
// };

// middleware/authMiddleware.js

// Middleware to extract userId from request
exports.extractUserId = (req, res, next) => {
  // Assuming userId is passed in the request headers
  const userId = req.headers['user-id'];

  if (!userId) {
    return res.status(401).json({ success: false, message: 'No user ID provided' });
  }

  // Assigning userId to req.user
  req.user = { userId };
  next();
};
