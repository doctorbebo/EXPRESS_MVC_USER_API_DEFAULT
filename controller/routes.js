var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
console.log('Time: ', Date.now())
next()
});



// define the home page route
router.get('/', function (req, res) {
  res.json({"Name": "Byron",  "Occupation": "Being Awsome"})
});
// define the about route
router.get('/about', function (req, res) {
  res.send('About page')
});

// Basic crud operations example for a "Bird" database
// Read:
router.get('/bird/:id', (req, res) => {
  //logic here.
});

// Create
router.post('/bird', (req, res) => {
  //logic here.
});

// Update
router.put('/bird/:id', (req, res) => {
  //logic here.
});

// Delete
router.delete('/bird/:id', (req, res) => {
  //logic here.
});

module.exports = router;