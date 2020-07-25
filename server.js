const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose')

const apiRoutes = require('./routes');

//Add middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//API routes
app.use('/api', apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// mongoose.connect('mongodb://localhost/googlebooks', {useNewUrlParser: true},
// function(error) {
//   if (error) throw error;
//   app.listen(PORT, function() {
//     console.log(`🌎 ==> API server now on port ${PORT}!`);
//   });
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/books101", {
  useNewUrlParser: true
});

app.listen(PORT, function() {
  console.log(`Now listening on port: ${PORT}`);
});

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/books101';

mongoose.connect(MONGODB_URI)
