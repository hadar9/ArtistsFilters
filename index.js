const express = require("express");
const data = require("./data");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/artists", (req, res) => {
  res.send(data.artists);
});

app.get("/artist/:id", (req, res) => {
  if (!data.artists[req.params.id-1]) {
    res.status(404).send(`artist id ${req.params.id} wasn't found`);
  } else {
    res.send(data.artists[req.params.id-1]).end();
  }
});

// update an existing artist
app.put("/artist/:id", (req, res) => {
  if (!data.artists[req.params.id-1]) {
    res.status(404).send(`artist id ${req.params.id} wasn't found`);
  } else {
    // assigns the modified values into the artist
    Object.assign(data.artists[req.params.id-1], req.body);
    res.send(data.artists[req.params.id-1]);
  }
});

app.listen(5000, () => console.log("server started..."));
