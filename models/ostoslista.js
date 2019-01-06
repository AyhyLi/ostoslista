const mysql = require("mysql");
const yhteys = mysql.createConnection({
                                        host     : "localhost",
                                        user     : "root",
                                        password : "",
                                        database : "ostoslista_2"
                                    });
const crypto=require("crypto");

yhteys.connect((err) => {
    if(!err) {
        console.log("Tietokantayhteys avattu");    
    } else {
        throw `Virhe yhdistettäessä tietokantaan: ${err}`;    
    }
});

module.exports = {
    "luoKayttaja":(tiedot, callback)=>{

        let salasana = crypto.createHash("SHA512").update(tiedot.salasana).digest("hex");
        
        let sql="INSERT INTO kayttajat (tunnus, salasana, sahkoposti) VALUES (?, ?, ?)";
        
        yhteys.query(sql, [tiedot.tunnus, salasana, tiedot.sPosti], (err)=>{
            callback(err);
        });
    },
    
    "kirjaudu":(tiedot, callback)=>{
        let salasana = crypto.createHash("SHA512").update(tiedot.salasana).digest("hex");
        
        let sql="SELECT id, tunnus FROM kayttajat WHERE tunnus = ? AND salasana = ?";
        
        yhteys.query(sql, [tiedot.tunnus, salasana], (err, data)=>{
            callback(err, data);
        });
    },
    
    "haeListat":(kayttaja, callback)=>{
        let sql="SELECT * FROM listat WHERE kayttajaId = ?";
        
        yhteys.query(sql, [kayttaja], (err, data)=>{
            callback(err, data);
        });
    },
    
    "haeLista":(listanNimi, callback) => {
        
        let sql ="SELECT sisalto.id, sisalto.listaId, sisalto.sisalto, sisalto.ostettu, listat.nimi FROM sisalto LEFT JOIN listat ON sisalto.listaId = listat.id WHERE listaId = ?"
        
        yhteys.query(sql, [listanNimi], (err, data)=>{
            callback(err, data);
        });
    },
    
    "lisaaLista":(listanTiedot, callback)=>{
        let sql="INSERT INTO listat (kayttajaId, nimi) VALUES (?, ?)";
        
        yhteys.query(sql, [listanTiedot.id, listanTiedot.nimi], (err)=>{
            callback(err);
        });
    },
    
    "lisaaListaan":(uudetTiedot, callback)=>{
        let sql="INSERT INTO sisalto (listaId, sisalto) VALUES (?, ?)";
        
        yhteys.query(sql, [uudetTiedot.lista, uudetTiedot.sisalto], (err)=>{
            callback(err);
        });
    },
    
    "poistaLista":(poistettava, callback)=>{
        let sql="DELETE FROM listat WHERE id = ?";
        
        yhteys.query(sql, [poistettava], (err)=>{
            callback(err);
        });
    },
    
    "poistaListasta":(poistettava, callback)=>{
        let sql="DELETE FROM sisalto WHERE id = ?";
        
        yhteys.query(sql, [poistettava], (err)=>{
           callback(err); 
        });
    },
    
    "tallennaMuokkaus":(paivitetty, callback)=>{
        let sql;
        
        if(paivitetty.ostettu){
            sql=`UPDATE sisalto SET sisalto = "${paivitetty.sisalto}", ostettu = 1 WHERE id = ?`;
        }
        else{
            sql=`UPDATE sisalto SET sisalto = "${paivitetty.sisalto}", ostettu = 0 WHERE id = ?`;
        }
        
        yhteys.query(sql, [paivitetty.id],(err)=>{
            callback(err);
        });
    },
    
    "muokkaaOstettu":(tiedot, callback)=>{
        let sql;
        
        if(tiedot.ostettu == "true"){
            sql="UPDATE sisalto SET ostettu = 0 WHERE id = ?";
        }
        else{
            sql="UPDATE sisalto SET ostettu = 1 WHERE id = ?";
        }
        
        yhteys.query(sql, [tiedot.id], (err)=>{
           callback(err); 
        });
    },
    
    "haeKayttaja":(kayttaja, callback)=>{
        let sql = "SELECT id FROM kayttajat WHERE tunnus = ?";
        
        yhteys.query(sql, [kayttaja], (err, data)=>{
            callback(err, data);
        });
    },
    
    "jaaLista":(jaettava, callback)=>{
        let sql = "UPDATE listat SET jaettuKayttaja = ? WHERE id = ?";
        
        yhteys.query(sql, [jaettava.id, jaettava.lista], (err)=>{
            callback(err);
        });
    }
};