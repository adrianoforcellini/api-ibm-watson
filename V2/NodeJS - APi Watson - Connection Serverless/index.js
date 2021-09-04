const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const http = require('http').createServer(app);
const bodyParser = require('body-parser');

const insert = require("./models/insert");
const getAll = require("./models/getAll");
const postWatson = require("./models/postWatson");

app.use(express.json());
app.use(cors());
app.use(bodyParser());
app.use(express.static(path.join(__dirname, "Audios")));

app.get("/comments", getAll);
app.get("/", (_req, res) => res.send('on'));

app.post("/comments", insert);

app.post("/watson", postWatson);

const PORT = 3001;
http.listen(process.env.PORT || PORT, () =>
  console.log(`Servidor rodando liso lá na ${PORT}`)
);
