Raportoi tekem�si ty� erilliseksi raportiksi (lyhyiden teht�vien malli). Esittele toteutusraportissa omin sanoin: kuinka toteutit sovelluksesi, oliko ongelmia, kuinka ratkaisit ongelmat jne.

IDEA TAIKKA TARVE
Minulla ja Jessell� on eri aikataulut ja sen my�t� min� taikka h�n k�y kaupassa tarpeen tullen. Ongelma on se ett� jos h�n menee kauppa kun olen koulussa niin en todellakaan muista mit� tarvitsee kaupasta. Tarvitsemme ostoslistan joka on helposti saatavilla ja jonne kummatkin p��sev�t kiinni paikasta riippumatta.

TY� PROSESSI
Alottelin jo ty�n tekoa jo aikasemmin, miettim�ll� miten koostan j�rkev�sti tietokannan, sek� mill� tavalla se n�kyy. Ensimm�inen ongelma tuli siin� vastaan kun en osanut ja tunnilla emme saaneet azurea toimimn, koska jo alussa oli tavoitteena ett� sovellus  toimii siell�.
Nyt Azure demo saitiin toimiin niin nyt voin siirt�� minun jo aikasemmin tehdyt koodit azure projektiin. Helpommin sanottu kuin tehty. Koska uppoutui liikaa aikaa siihen ett� yritin vain saada koodeeja toimimaan Azureen... Joten toimikoot paikallisesti vain.
Listaan lis��misen j�lkeen lis�sin poistamisen, muokkaamisen sek� vaihtaa ett� onko ostettu vai ei.
Kun perus toiminnallisuudet oli tehty, niin muutin alku n�kym�ksi ett� etusivulla voi luoda, poistaa ja jakaa listan. Listan nime� painamalla p��see listan si�lle.
Listan luominen ei tee uutta taulua SQL koska, se olisi hassua olla monta taulua jossa on vain muutama asia. Joten uusi lista on vain uusi rivi olemassa olevaan tauluun.

Hieman takapakkia prosessissa tuli kun muutin tietokanan rakennetta niin ett� kahden taulun sijasta on kolme. Mutta kolmella se on j�rkev�mpi listan jaon kannalta.

BUGI: kun lista on tyj� niin ei hae listan nime�

sen j�lkeen tulee kirjautuminen ja sitten listan jaon mahdollistaminen


hash ot10

LISTAT: Mink� niminen, kenen, jaettu (kenen kanssa), hyv�ksytty jako
LISTA: sisalto, ostettu, mihin listaan kuuluu
K�YTT�J�T: K�ytt�j�nimi, salasana

DELETE pa
      FROM pets_activities pa
      JOIN pets p ON pa.id = p.pet_id
 WHERE p.order > :order
   AND p.pet_id = :pet_id
