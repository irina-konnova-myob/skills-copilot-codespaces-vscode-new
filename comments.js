// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Create a variable called comments and set it to an empty array
let comments = [];

// Set up body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Create a route that responds with the contents of the comments variable
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route that adds a new comment to the comments variable
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  let newComment = req.body.comment;
  // Add the comment to the comments variable
  comments.push(newComment);
  // Respond with a message
  res.send('Comment added');
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Run the server
// node comments.js

// Send a POST request to the server to add a new comment
// curl -X POST -H "Content-Type: application/json" -d '{"comment": "This is a comment"}' http://localhost:3000/comments

// Send a GET request to the server to get the comments
// curl http://localhost:3000/comments