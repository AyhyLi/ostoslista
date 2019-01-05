Raportoi tekemäsi työ erilliseksi raportiksi (lyhyiden tehtävien malli). Esittele toteutusraportissa omin sanoin: kuinka toteutit sovelluksesi, oliko ongelmia, kuinka ratkaisit ongelmat jne.

IDEA TAIKKA TARVE
Minulla ja Jessellä on eri aikataulut ja sen myötä minä taikka hän käy kaupassa tarpeen tullen. Ongelma on se että jos hän menee kauppa kun olen koulussa niin en todellakaan muista mitä tarvitsee kaupasta. Tarvitsemme ostoslistan joka on helposti saatavilla ja jonne kummatkin pääsevät kiinni paikasta riippumatta.

TYÖ PROSESSI
Alottelin jo työn tekoa jo aikasemmin, miettimällä miten koostan järkevästi tietokannan, sekä millä tavalla se näkyy. Ensimmäinen ongelma tuli siinä vastaan kun en osanut ja tunnilla emme saaneet azurea toimimn, koska jo alussa oli tavoitteena että sovellus  toimii siellä.
Nyt Azure demo saitiin toimiin niin nyt voin siirtää minun jo aikasemmin tehdyt koodit azure projektiin. Helpommin sanottu kuin tehty. Koska uppoutui liikaa aikaa siihen että yritin vain saada koodeeja toimimaan Azureen... Joten toimikoot paikallisesti vain.
Listaan lisäämisen jälkeen lisäsin poistamisen, muokkaamisen sekä vaihtaa että onko ostettu vai ei.
Kun perus toiminnallisuudet oli tehty, niin muutin alku näkymäksi että etusivulla voi luoda, poistaa ja jakaa listan. Listan nimeä painamalla pääsee listan siälle.
Listan luominen ei tee uutta taulua SQL koska, se olisi hassua olla monta taulua jossa on vain muutama asia. Joten uusi lista on vain uusi rivi olemassa olevaan tauluun.

Hieman takapakkia prosessissa tuli kun muutin tietokanan rakennetta niin että kahden taulun sijasta on kolme. Mutta kolmella se on järkevämpi listan jaon kannalta.

BUGI: kun lista on tyjä niin ei hae listan nimeä

sen jälkeen tulee kirjautuminen ja sitten listan jaon mahdollistaminen


hash ot10

LISTAT: Minkä niminen, kenen, jaettu (kenen kanssa), hyväksytty jako
LISTA: sisalto, ostettu, mihin listaan kuuluu
KÄYTTÄJÄT: Käyttäjänimi, salasana

DELETE pa
      FROM pets_activities pa
      JOIN pets p ON pa.id = p.pet_id
 WHERE p.order > :order
   AND p.pet_id = :pet_id
