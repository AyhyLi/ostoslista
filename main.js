const express = require("express");
const app = express();

const portti = process.env.PORT || 3103; //Herokulle ei voi määrittää porttia joten se luo oman, tai toimii paikallisesti omassa portissa

const tehtavalista = require("./models/tehtavat"); 

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {

    tehtavalista.haeKaikki((data) => {

        res.render("index", { "tehtavat" : data });

    });
    
});

app.listen(portti, () => {

    console.log(`Palvelin käynnistyi porttiin ${portti}`);

});
