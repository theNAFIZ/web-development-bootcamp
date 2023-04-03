const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const { day } = require("./date.js");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const items = [];
app.get("/", (req, res) => {
    res.render("index.ejs", {header: day, items});
});


app.post("/", (req, res)=> {
    const newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
});

app.listen(3000, ()=> {
    console.log("Running on port 3000");
});
