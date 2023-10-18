//node app.js
//http://localhost:3000/get?q=
//https://5e20-2800-e2-9400-2e4-c22-9faa-b801-e2c4.ngrok-free.app/get?q=

var express = require("express"), cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000"));

var noticias = [ 
    "Licenciatura Paris", "Futbol Barcelona", "Futbol Barranquilla", 
    "Politica Montevideo", "Economia Santiago de Chile", "Cocina Mexico DF",
    "Finanzas Nueva York" 
];

app.get("/get", (req, res, next) =>
 res.json(noticias.filter((c) => c.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1)));

var misFavoritos = [];
app.get("/favs", (req, res, next) => res.json(misFavoritos));
app.post("/favs", (req, res, next) => {
    console.log(req.body);
    misFavoritos.push(req.body.nuevo);
    res.json(misFavoritos);
});