const express = require("express");
const app = new express();

const startPageRoutes = require("./src/routes/startPageRoute");
const gamePageRoutes = require("./src/routes/gamePageRoute");
const readMeRoutes = require("./src/routes/readMeRoute");
const playAgainRoutes = require("./src/routes/playAgainRoute");
const transitionRoutes = require("./src/routes/transitionRoute");
const gameCompleteRoutes = require("./src/routes/gameCompleteRoute");
//Setting the view engine
app.set("view engine", "ejs");

//Setting the static middleware
app.use("/assets",express.static("assets"));
app.use("/javascript",express.static("src/scripts"));

//Setting up the routes
app.use("/",startPageRoutes);
app.use("/game",gamePageRoutes);
app.use("/readme",readMeRoutes);
app.use("/playAgain",playAgainRoutes);
app.use("/transition",transitionRoutes);
app.use("/gameComplete",gameCompleteRoutes);


const port = process.env.port || 5000;

app.listen(port, function(){
    console.log(`You are listening to localhost:${port}`);
})