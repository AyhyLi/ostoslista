const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const ostoslista = require("./models/ostoslista");

const portti = 1000;

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    ostoslista.haeListat((err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {"tiedot":data});
        }
    });
});

app.post("/lisaaListaan", (req, res)=>{
    let tiedot={"kayttajaId":req.body.kayttaja,
                "listanNimi":req.body.lista,
                "ostettu":Number(req.body.ostettu),
                "sisalto":req.body.sisalto
               };
    
    ostoslista.lisaaListaan(req.body, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    });
});

app.listen(portti, ()=>{
    console.log(`Yhteys on avattu porttiin ${portti}`);
});

//kenen lista, mikä lista, jaettu, sisältö, ostettu