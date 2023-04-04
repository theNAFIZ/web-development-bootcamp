const express = require("express");
const bodyParser = require("body-parser");
const env = require("dotenv").config();
const ejs = require("ejs");
const mongoose = require("mongoose");
const { day } = require("./date.js");
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_URL + process.env.DB_NAME);

const itemSchema = {
    name: String
}

const Item = mongoose.model("Item", itemSchema);

app.get("/", async (req, res) => {
    const items = await Item.find({});
    console.log(items);
    res.render("index.ejs", {header: day, items});
});

app.post("/", async (req, res)=> {
    const newItem = req.body.newItem;
    const task = new Item({
        name: newItem
    });
    await task.save();
    res.redirect("/");
});

app.listen(3000, ()=> {
    console.log("Running on port 3000");
});
