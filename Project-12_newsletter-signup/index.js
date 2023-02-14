const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  var fName = req.body.fName;
  var lName = req.body.lName;
  var email = req.body.email;

  var url =
    "https://us21.api.mailchimp.com/3.0/lists/0c843a9599?skip_merge_validation=false&skip_duplicate_check=false>";

  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fName,
          LNAME: lName,
        },
      },
    ],
  };

  var jsonData = JSON.stringify(data);
  options = {
    method: "POST",
    auth: "waxabe:c25cc8da341a5473eb34e22fcc99ac79-us21",
  };

  const request = https.request(url, options, (response) => {

    if(response.errors.length() === 0) {
        res.sendFile(__dirname + "/success.html");
    } else {
        res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", (data) => {
        console.log(JSON.parse(data));
    });
  });
   request.write(jsonData);
  request.end();

});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
