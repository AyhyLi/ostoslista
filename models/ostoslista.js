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
            
            let tiedot = data.map((tieto)=>{
                if(tieto.ostettu == 1){
                  tieto.ostettu = true;
              }
              else{
                  tieto.ostettu = false;
              }
               
              return tieto;
            });
            
            callback(err, tiedot);
        });
    },
    
    "lisaaListaan":(uudetTiedot, callback) => {
        let sql="INSERT INTO listat (kayttajaId, listanNimi, sisalto, ostettu) VALUES (?, ?, ?, ?)";
        
        yhteys.query(sql, [uudetTiedot.kayttaja, uudetTiedot.lista, uudetTiedot.sisalto, uudetTiedot.ostettu], (err)=>{
            callback(err);
        });
    }
};