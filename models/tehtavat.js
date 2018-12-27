const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

//const uri = "mongodb://juuseri:kissakala1@ds115493.mlab.com:49128/tehtavalista_1";
const uri = process.env.MONGOLAB_URI;

let db;

mongoClient.connect(uri, (err, yhteys) => {

    if (err) throw err;

    db = yhteys.db("tehtavalista_1")

});

module.exports = {

    "haeKaikki" : (callback) => {

        db.collection("tehtava").find().toArray((err, result) => {

            if (err) throw err;

            callback(result);

        });

    }

}