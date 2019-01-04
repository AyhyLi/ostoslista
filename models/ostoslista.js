const mysql = require("mysql");
const yhteys = mysql.createConnection({
                                        host     : "localhost",
                                        user     : "root",
                                        password : "",
                                        database : "ostoslista"
                                    });

yhteys.connect((err) => {
    if(!err) {
        console.log("Tietokantayhteys avattu");    
    } else {
        throw `Virhe yhdistettäessä tietokantaan: ${err}`;    
    }
});

module.exports = {
    "haeListat":(callback) => {
        
        let sql="SELECT * FROM listat";
        
        yhteys.query(sql, (err, data)=>{
            callback(err, data);
        });
    },
    
    "lisaaListaan":(uudetTiedot, callback)=>{
        let sql="INSERT INTO listat (kayttajaId, listanNimi, sisalto, ostettu) VALUES (?, ?, ?, ?)";
        
        yhteys.query(sql, [uudetTiedot.kayttaja, uudetTiedot.lista, uudetTiedot.sisalto, uudetTiedot.ostettu], (err)=>{
            callback(err);
        });
    },
    
    "poistaListasta":(poistettava, callback)=>{
        let sql=`DELETE FROM listat WHERE id = ${poistettava}`;
        
        yhteys.query(sql, (err)=>{
           callback(err); 
        });
    },
    
    "tallennaMuokkaus":(paivitetty, callback)=>{
        let sql;
        
        if(paivitetty.ostettu){
            sql=`UPDATE listat SET sisalto = "${paivitetty.sisalto}", ostettu = 1 WHERE id = ?`;
        }
        else{
            sql=`UPDATE listat SET sisalto = "${paivitetty.sisalto}", ostettu = 0 WHERE id = ?`;
        }
        
        yhteys.query(sql, [paivitetty.id],(err)=>{
            callback(err);
        });
    },
    
    "muokkaaOstettu":(tiedot, callback)=>{
        let sql;
        
        if(tiedot.ostettu == "true"){
            sql="UPDATE listat SET ostettu = 0 WHERE id = ?";
        }
        else{
            sql="UPDATE listat SET ostettu = 1 WHERE id = ?";
        }
        
        yhteys.query(sql, [tiedot.id], (err)=>{
           callback(err); 
        });
    }
};