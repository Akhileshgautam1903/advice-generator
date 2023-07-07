// requiring the node modules
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

//using the modules
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

//declaring paths
app.get("/", (req, res) => {

    const url = "https://api.adviceslip.com/advice";

    https.get(url, (resopnse) => {
        resopnse.on("data", (data) => {
            const advice = JSON.parse(data);
            res.render("index", {adNo: advice.slip.id, adContent: advice.slip.advice});
        })
    })

})




//Server live on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000.");
})