// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log("Listening to the smooth jams of PORT " + PORT);
});

//get requests
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"))
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"))
});

//TODO: Grab the json
app.get("/api/notes", function(req, res){
  return res.json("db.json")
})


