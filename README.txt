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

Kun SQLt ja muut oli korjattu muutoksen takia, tein kirjautumisen ja jaon. Jako teko onnistu helposti haetaan nimen perusteella (oletetaan ett� sovelluksessa k�ytt�j�nimet ovat uniikkeja) id ja lis�t��n sen lista tauluun jaettu k�ytt�j� kohtaan. Seuraavaksi piti hetken mietti� ett� teenk� "SQL hivi� haulla" ett� se hakee omat listat sek� jaetut, mutta koska halusin ne erikseen, joten ratkuisu oli sellainen kuten n�et koodissa.

Koodissani oli jonkin aikaa "ominaisuus" ett� kun meni listan sis�lle joka oli tyhj�, niin listan nime� ei n�kynyt ja vasta kun siell� oli sis�lt� se n�kyin, korjaisin ominaisuuden per�kk�is haulla jos ensimm�inen haku ei tuota tulosta.

Nyt kun kaikki ominaisuudet toimii, niin lopuksi touteutan hieman virhe ilmoitukset.


Sivu kommentti, tied�n ett� kirjautuminen olisi voinut hoitaa ehk� j�rkev�mmin ja ehk� turvallisemmin sessiolla taikka passportilla, mutta toteutin sen tuolla tavalla koska projekti on minusta tarpeeksi laaja maksimi pisteisiin.


hash ot10
sessio ot6

   AND p.pet_id = :pet_id
