const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const date = new Date();
const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}

const day = date.toLocaleDateString("en-US", options);

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
