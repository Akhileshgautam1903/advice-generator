// requiring the node modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

//using the modules
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

//declaring paths
app.get("/", (req, res) => {
    res.send("<h1>hello</h1>");
})




//Server live on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000.");
})