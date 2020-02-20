const express = require("express");
const app = express();

let name = "";

app.get("/name/set/:name", (req, res) => {
  name = req.params.name;

  res.send("Podane imię to: " + name);
});

app.get("/name/show", (req, res) => {
  res.send("Podane imię to: " + name);
});

app.get("/name/check", (req, res) => {
  let text = "";
  if (name.length > 0) {
    text = "Zapisane imię to: " + name;
  } else {
    text = "Brak zapisanych imion!";
  }
  res.send(text);
});

app.listen(3000, () => {
  console.log("Serwer uruchomiony na porcie 3000");
});
