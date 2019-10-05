const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
var db = require("./models");
var seqPORT = process.env.PORT || 8080;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Get username and password from database to check against login form
app.post("/api/users", function(req, res) {
  console.log(req.body)
  db.User.findOne({
    where:{
      userName: req.body.userName,
      password: req.body.password
    }}).then(function(dbusers) {
      console.log(dbusers)
      res.send(dbusers)
    // res.render("Home");
  });
});


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Define API routes here
db.sequelize.sync({ force: false }).then(function() {
  app.listen(seqPORT, function() {
    console.log("App listening for mysql database on PORT " + seqPORT);
  });
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))


