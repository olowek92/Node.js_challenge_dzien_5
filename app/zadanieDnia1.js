const express = require("express");
const app = express();

let yes = 0;
let no = 0;
let maybe = 0;
const thanks = "Dziekujemy za oddanie głosu!";

app.use(express.static("./public/zadanieDnia/"));

app.get("/", (req, res) => {
  console.log("I'm here!");
});

app.get("/vote/:vote", (req, res) => {
  const { vote } = req.params;

  if (vote === "yes") {
    yes++;
    res.send(thanks);
  } else if (vote === "no") {
    no++;
    res.send(thanks);
  } else if (vote === "maybe") {
    maybe++;
    res.send(thanks);
  }
});

app.get("/votes/check", (req, res) => {
  res.send(
    `Wyniki głosowania: 
        Głosy na TAK: ${yes}, 
        Głosy na NIE: ${no},
        Głosy na MAYBE: ${maybe}!
        `
  );
});

app.listen(3900, () => {
  console.log("Serwer uruchomiony na porcie 3900!");
});
