const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

app.post("/", (req, res) => {
    var fName = req.body.fName;
    var lName = req.body.lName;
    var email = req.body.email;

    
});

app.listen(3000, () => {
    console.log("Running on port 3000");
});

