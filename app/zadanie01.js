const express = require("express");
const app = express();

app.get("/file/:number/:secondNumber", (req, res) => {
  const { number, secondNumber } = req.params;
  const sum = parseInt(number) + parseInt(secondNumber);

  res.send(`Wynik: ${sum}`);
});

app.listen(2000, () => {
  console.log("Serwer uruchomiony na porcie 2000");
});
