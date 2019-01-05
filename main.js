const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const ostoslista = require("./models/ostoslista");

const portti = 1000;

let lista = "";

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("./public/"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    lista = "";
    
    ostoslista.haeListat((err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("index", {"tiedot":data});
        }
    });
});

app.get("/lista/:nimi", (req, res)=>{
    lista = req.params.nimi;
    
    ostoslista.haeLista(req.params.nimi, (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("lista", {"tiedot":data});
        }
    });
});

app.get("/poista/:id", (req, res)=>{

    ostoslista.poistaListasta(req.params.id, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect("/");
        }
    });
});

app.get("/muokkaaYhta/:id", (req, res)=>{
    
    ostoslista.haeLista((err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("muokkaaListassa", {"tiedot":data, "muokattava":req.params.id});
        }
    });
});

app.get("/ostettu/:id", (req, res)=>{
    
    let tiedot={
                "id":req.params.id,
                "ostettu":req.query.ostettu
    };

   ostoslista.muokkaaOstettu(tiedot, (err)=>{
      if(err){
          console.log(err);
      }
      else{
          res.redirect(`/lista/${lista}`);
      } 
   });
});

app.post("/lisaaListaan", (req, res)=>{
    
    ostoslista.lisaaListaan(req.body, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect(`/lista/${lista}`);
        }
    });
});

app.post("/tallennaMuokkaus", (req, res)=>{
    
    ostoslista.tallennaMuokkaus(req.body, (err)=>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect(`/lista/${lista}`);
        }
    });
});

app.listen(portti, ()=>{
    console.log(`Yhteys on avattu porttiin ${portti}`);
});

//kenen lista, mikä lista, jaettu, kenen kanssa jaettu, sisältö, ostettu