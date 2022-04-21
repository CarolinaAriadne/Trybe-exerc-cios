const express = require("express");
const axios = require("axios");
// const cors = require("cors");

const app = express();
// app.use(cors());
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("tudo certo");
});

app.get("/btc/price", async (req, res) => {
  const { authorization } = req.headers;
  const regexAuth = /^[a-zA-Z0-9]{12}$/;
  if (!regexAuth.test(authorization) || !authorization.length === 12) {
    return res.status(401).json({ message: "invalid token" });
  }
  const data = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );
  console.log(data);
  return res.status(200).json(data.data);
});

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
