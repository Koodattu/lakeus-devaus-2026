# 01_cover

00:00–02:00 · Avaus. Kysy, mikä muuttuu omassa työssä, kun uskottavan ensimmäisen version tekeminen helpottuu. Esityksen kaksi kysymystä ovat: mitä ohjelmistokehityksessä on muuttunut, ja miten AI:n kanssa tehdään käytännössä työtä. Yleisössä saa olla erilaisia kokemuksia. Tarkoitus on antaa sekä tutkimukseen perustuvaa taustaa että yksi kokeiltava työtapa. Käytännön osoite- ja huoltoesimerkit ovat opetusta varten kirjoitettuja, eivät väitteitä puhujan asiakasprojekteista. Rytmi: 5 min johdanto, 10 min alkugallup, 20 min nykytilanne, 20 min käytännöt, 5 min loppugallup ja päätös. Siirry kahteen erilaiseen pyyntöön. Kuvitus: OpenAI imagegen, 5.9.2026; tätä esitystä varten luotu työpöytäkuvitus, ei todellinen työympäristö.

---

# 02_task

02:00–05:00 · Keskustelusta tarkistettavaan tehtävään. Lue vasen pyyntö: siinä halutaan selitys. Oikeassa pyynnössä halutaan muutos ja näyttö siitä, että se toimii. Molemmat käyttötavat ovat hyödyllisiä. Ero on siinä, mitä odotamme vastaukseksi. Käytännön osassa käymme läpi osoitevirheen samalla periaatteella. Anna tehtävän rajat ja kerro, millainen lopputulos voidaan havaita. Älä vielä avaa jokaista työkalua. Kysy yleisöltä lyhyesti, kumman tyyppisiä pyyntöjä he tekevät useammin. 05:00 SIIRRY SELAIMEEN: https://gallup.koodattu.dev. Varaa alkugallupiin 10 minuuttia. Käsittele aidot vastaukset, älä ennakoi tulosta. PowerPointissa ei ole gallupkysymyksiä. Palaa diaan 3 ajassa 15:00. Lähteet: https://learn.chatgpt.com/docs/prompting ; https://code.claude.com/docs/en/best-practices

---

# 03_work

15:00–17:00 · Toteutus on yksi osa kehittämistä. Käy neljä aluetta läpi arkisesti: tarve, ymmärrys, toteutus ja ylläpito. Käyttäjän oikean ongelman löytäminen, järjestelmän käsitteiden ymmärtäminen ja muutoksen sovittaminen olemassa olevaan ympäristöön eivät katoa. AI voi auttaa kaikissa vaiheissa, mutta valmiin näköinen koodi ei yksin osoita, että ymmärrys tai hyöty on syntynyt. Brooksin ja Naurin klassiset tekstit antavat tälle taustan; niitä ei käytetä empiirisenä mittauksena vuoden 2026 työkaluista. Kysy: missä näistä teillä odotetaan eniten? Siirry seuraavaksi esimerkkiin siitä, kuinka pitkälle rajattu toteutustehtävä voi jo edetä. Lähteet: Fred Brooks, No Silver Bullet (1987); Peter Naur, Programming as Theory Building (1985). Tarkemmat bibliografiset lähteet projektin lähdeaineistossa.

---

# 04_mirrorcode

17:00–20:00 · MirrorCode. Selitä ketju: vertailtava ohjelma tai käyttäytyminen, agentin tekemä toteutus, ja erillinen vertailu tai testaus. Epochin alustavat tulokset havainnollistavat, kuinka laajoja mutta rajattuja toteutustehtäviä agentit voivat tehdä. Säilytä rajaus: kyse on valitusta toiminnallisuudesta ja tutkimuksen arviointiympäristöstä. Älä väitä, että kokonaisen tuotteen asiakastarve, julkaisu, tuki ja ylläpito hoituisivat samalla tavalla automaattisesti. Kuvion tasakokoiset vaiheet eivät esitä ajankäyttöä. Yleisölle tärkeä kysymys: mikä on se vertailukohde, jolla oma tehtävä voidaan arvioida? Näin kyvykkyys kytkeytyy käytännön työn rajaamiseen. Seuraavaksi erotetaan kyvykkyys ja mitattu tuottavuus. Lähde: https://epoch.ai/publications/mirrorcode-preliminary-results

---

# 05_productivity

20:00–23:00 · Eri tutkimukset mittaavat eri työtä. Microsoftin kolmen kenttäkokeen yhdistelmässä oli 4 867 kehittäjää; tekijät raportoivat noin 26 % enemmän valmistuneita tehtäviä AI-avun kanssa. METR:n alkuvuoden 2025 kokeessa 16 kokenutta avoimen lähdekoodin kehittäjää työskenteli tutuissa repositorioissaan ja käytti AI:n kanssa noin 19 % enemmän aikaa. Näitä lukuja ei pidä vähentää toisistaan tai esittää yhteisellä tuottavuusakselilla. Mittari, tehtävä, väline ja käyttäjäjoukko poikkeavat. METR:n helmikuun 2026 jatkotutkimus ei antanut luotettavaa uutta vaikutusarviota valikoitumisen ja mittausongelmien vuoksi. Sano tämä ääneen: vuoden 2025 tulos ei ole nykyisten työkalujen yleispätevä nopeuskerroin. Lähteet: https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/ ; https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ ; https://metr.org/blog/2026-02-24-uplift-update/

---

# 06_delivery

23:00–25:00 · Tehtävästä toimitukseen. Käy ketju läpi: toteutus, katselmointi, integrointi ja käyttö. Jos toteutus nopeutuu mutta muutokset jonoutuvat katselmointiin tai yhteensovittamiseen, asiakkaan kokema toimitusaika ei välttämättä lyhene. DORA käsittelee AI:n hyötyjen ja toimitusjärjestelmän jännitteitä; kyseisiä yhteyksiä ei pidä esittää yksinkertaisena syy-seurauslakina. Kuvio on selittävä esimerkkiketju. Vaiheiden leveydet eivät kuvaa mitattua aikaa. Pyydä yleisöä nimeämään yksi kohta, jossa heidän työssään odotetaan. Käytännön osan rajaus ja näyttö auttavat juuri katselmoinnin ja integroinnin kohdalla. Lähde: https://dora.dev/insights/balancing-ai-tensions/

---

# 07_learning

25:00–28:00 · Oppiminen on oma tuloksensa. Tutkimuksessa 52 osallistujaa opetteli itselleen vierasta Python-kirjastoa. Tekijöiden yhteenvedon pyöristetyt välittömän osaamiskokeen keskiarvot olivat 50 % AI-avusteisessa ryhmässä ja 67 % ilman AI:ta. Ero on noin 17 prosenttiyksikköä, ei väite siitä että kaikki kehittäjät menettäisivät saman osuuden taidoistaan. Koe mittasi välitöntä osaamista kyseisessä tehtävässä, ei pysyvää taitojen menetystä. Tapa käyttää AI:ta vaikutti siihen, miten osallistujat käsittelivät tehtävää. Kysy, miten valmis ratkaisu ja oman ymmärryksen tarkistaminen erotetaan työssä. Palkkien asteikko on nollasta sataan prosenttiin. Lähteet: https://www.anthropic.com/research/AI-assistance-coding-skills ; https://arxiv.org/abs/2601.20245

---

# 08_maintenance

28:00–30:00 · Uusi kokeilu voi olla pieni. Tämä on kuvitteellinen huoltotyön esimerkki: muistiinpanosta syntyy ehdotus rakenteiseksi havainnoksi. Laite, havainto ja seuraava toimi ovat ihmisen tarkistettavia. Emme väitä, että kuvituksessa näkyvä järjestelmä olisi rakennettu, että laakerissa olisi vika tai että aikaa olisi säästynyt tietty määrä. Kysy, mitä asentaja korjaisi ja missä luonnos olisi hyödyllinen. Tarkoitus on näyttää, että AI:n arvo voi syntyä uuden pienen työkalun kokeilemisesta, ei vain vanhan ohjelmointitehtävän nopeuttamisesta. Palaamme samaan esimerkkiin prototypoinnin kohdalla. Kuvitus: OpenAI imagegen, 5.9.2026, esitystä varten luotu kuvitteellinen huoltotyön kuvitus.

---

# 09_learn

30:00–32:00 · Tilaa oppimiselle. Kierros on kokeile, selitä, saa palautetta ja muuta seuraavaa yritystä. Työpaikan on päätettävä, missä kokemusta syntyy ja kuka antaa palautetta. Tunnista urahuoli vähättelemättä sitä. Stanford Digital Economy Labin Yhdysvaltoja koskeva analyysi tarjoaa taustaa nuorten työntekijöiden työllisyyskehitykseen AI:lle altistuneissa ammateissa; se ei ole Suomen työmarkkinaennuste eikä yksin osoita syy-yhteyttä. Älä lisää otsikkoon yleistä väitettä junioreiden katoamisesta. Käytännön toiminta voi olla yhden suunnittelupäätöksen selittäminen katselmoinnissa ja epäonnistumistavan ennustaminen ennen testiä. Siirry paikalliseen näkökulmaan. Lähde: https://digitaleconomy.stanford.edu/news/canariesaug26/

---

# 10_local

32:00–35:00 · Suomen toimiala ja paikallinen mahdollisuus. Teknologiateollisuuden toimialakuvauksen mukaan vuoden 2025 liikevaihto oli noin 19 miljardia euroa ja kasvua noin 5 %. Kesäkuun 2026 henkilöstöluku oli noin 80 200. Nämä ovat koko toimialan lukuja, eivät AI:n vaikutuksen mittaus tai alueellinen ennuste. Oikean puolen kolme asiaa ovat esityksen tulkinta: oikean työn tunteminen, yhteydet olemassa oleviin järjestelmiin sekä käyttöönoton ja ylläpidon tuki voivat olla paikallisen tekijän vahvuuksia. Konkretisoi huoltoesimerkillä: kuka tietää miten merkinnät tehdään ja minne ne päätyvät? Päätä nykytilanneosuus tähän ajassa 35:00 ja siirry käytännön ketjuun. Lähde: https://teknologiateollisuus.fi/en/economic-outlook-and-statistics/economic-outlook/information-technology-in-finland/

---

# 11_workflow

35:00–37:00 · Käytännön kokonaisuus. Rajaa, tutki, toteuta, tarkista ja seuraa. Tämä ei ole vain yksi pitkä kehote: agentti lukee projektia, käyttää työkaluja, saa palautetta ja tarkistaa tuloksia. Esimerkkimme on huoneiston numeron katoaminen osoitteen tallennuksessa. Sama työtapa soveltuu Codexiin ja Claude Codeen; työkalujen ominaisuudet ja projektin ohjeet vaikuttavat yksityiskohtiin. Ihminen arvioi tavoitteen, olennaiset päätökset ja näytön. Tässä esityksessä bugi havainnollistetaan muokattavalla dia-aineistolla. Se ei ole väite ajetusta asiakasprojektista tai tuotantoon julkaistusta korjauksesta. Selitä, että seuraavien diojen aikana käydään läpi yksi kokonainen tehtävän ajatteluketju. Lähteet: https://learn.chatgpt.com/docs/prompting ; https://code.claude.com/docs/en/common-workflows

---

# 12_brief

37:00–39:00 · Kirjoita valmis näkyväksi. Tehtävän neljä osaa ovat ongelma, tavoite, raja ja näyttö. Ongelma on katoava huoneiston numero. Tavoite on sen säilyminen uudelleenlatauksessa. Raja on nykyisen rajapinnan säilyttäminen, ja näyttö sisältää toiston, testin ja toimivan tallennuksen. Voit pyytää agenttia tutkimaan syyn ennen toteuttamista, jos vaikutusalue on epäselvä. Säilytä rajapinta on tässä opetusesimerkin raja, ei yleinen sääntö kaikkiin korjauksiin. Määritä konkreettinen havainto: huoneiston numero näkyy vielä uudelleenlatauksen jälkeen. Pyydä toistoa, rajattua muutosta ja sopivaa tarkistusta. Anna yleisölle 20 sekuntia muotoilla mielessään oma tehtävä näihin neljään osaan. Lähteet: https://learn.chatgpt.com/docs/prompting ; https://code.claude.com/docs/en/best-practices

---

# 13_context

39:00–41:00 · Projektin konteksti. Vasemman puolen polut ovat opetusesimerkkejä, eivät väite tämän esitysrepositorion rakenteesta. Agentti tarvitsee toteutuksen, läheiset esimerkit, testit ja oikeat komennot. Codexin AGENTS.md ja Claude Coden CLAUDE.md ovat esimerkkejä pysyvien projektiohjeiden paikoista. Kirjoita niihin projektin tavat, testikomennot ja olennaiset rajat. Älä täytä ohjeita kaikella mahdollisella tai kopioi koko repoa jokaiseen pyyntöön. Viittaa löydettävään tietoon ja anna agentin tarkistaa nykyinen toteutus. Tuo ero esiin: tehtäväkohtainen tavoite kuuluu pyyntöön, toistuva projektitieto pysyviin ohjeisiin. Lähteet: https://learn.chatgpt.com/docs/agent-configuration/agents-md ; https://code.claude.com/docs/en/best-practices

---

# 14_tools

41:00–43:00 · Työkalut konkreettisesti. Shellillä agentti voi ajaa projektin testikomennon. Selaimella se voi tarkistaa käyttäjälle näkyvän toiminnan. MCP-yhteys voi tuoda saataville liitetyn palvelun, kuten tehtäväjärjestelmän, jos sellainen on asennettu ja sallittu. Skill kuvaa uudelleenkäytettävän työtavan ja voi sisältää tukiresursseja. Nämä eivät ole keskenään sama asia, eikä jokainen tehtävä tarvitse kaikkia. Anna tehtävän vaatimat käyttöoikeudet ja varmista, että agentti tietää missä se työskentelee. Agentin onnistumista arvioidaan tuloksesta, ei käytettyjen työkalujen määrästä. Siirry konkreettiseen virheen toistoon. Lähteet: https://learn.chatgpt.com/docs/build-skills ; https://modelcontextprotocol.io/docs/develop/clients/client-best-practices ; https://code.claude.com/docs/en/common-workflows

---

# 15_reproduce

43:00–45:00 · Toista ensin. Havainnollistuksessa käyttäjä kirjoittaa huoneistoksi B 7. Tallennus näyttää onnistuneen, mutta uudelleenlatauksen jälkeen kenttä on tyhjä. Tämä on kirjoitettu opetusesimerkki, ei todellinen ruutukaappaus. Agentin pitäisi todellisessa tehtävässä havaita vastaava virhe ja seurata arvoa lomakkeesta lähetettävään tietoon, palvelimen tallennukseen ja takaisin näkymään. Älä oleta syytä pelkän oireen perusteella. Tässä seuraava dia näyttää yhden mahdollisen syyn: kenttä puuttuu muodostettavasta payloadista. Kysy, missä muissa kohdissa arvo voisi kadota. Hyvä toisto auttaa rajaamaan korjauksen ja luomaan regressiotarkistuksen. Lähde työskentelyperiaatteelle: https://code.claude.com/docs/en/best-practices

---

# 16_fix

45:00–47:00 · Muutos ja näyttö. Koodikatkelma on korjausidean yksinkertaistettu ydin: apartment lisätään lähetettävään tietoon. Se ei esitä koko sovelluksen toteutusta. Oikealla ovat tarkistuskohteet: annettu huoneisto säilyy, tyhjä arvo toimii ja sivun uudelleenlataus säilyttää arvon. Tässä esityksessä ei väitetä näiden testien olevan ajettuja. Todellisessa työssä regressiotestin pitäisi epäonnistua ennen korjausta ja onnistua sen jälkeen, ja näkyvä tallennus pitäisi tarkistaa tarkoituksenmukaisessa ympäristössä. Yksikkötesti ei yksin takaa palvelimen tai käyttöliittymän toimintaa. Pyydä agenttia raportoimaan mitä ajettiin, tulos sekä mitä jäi tarkistamatta. Lähteet: https://learn.chatgpt.com/docs/prompting ; https://code.claude.com/docs/en/best-practices

---

# 17_handoff

47:00–49:00 · Luovuta arvioitava muutos. Vasemmalla ovat kuvitteellisen korjauksen syy, muutos sekä kehotus liittää oikeasti ajettu testi ja selaintarkistus. Oikealla on avoin kysymys vanhan datan korjaamisesta. Tämä ei ole oikea julkaistu pull request eikä suoritettujen tarkistusten raportti. Hyvä agentin luovutus tekee katselmoinnista helpompaa: lukija löytää syyn, muutoksen, näytön ja keskeneräiset päätökset. Vanhojen puuttuvien huoneistotietojen palautus voi vaatia erillisen päätöksen; uuden kentän tallennuksen korjaaminen ei itsessään palauta niitä. Pidä selitys lyhyenä mutta täsmällisenä. Lähteet: https://product.hubspot.com/blog/cloud-coding-agents-at-hubspot ; https://code.claude.com/docs/en/best-practices

---

# 18_prototype

49:00–51:00 · Prototyypin käyttäjäpalaute. Palaa kuvitteelliseen huoltoesimerkkiin. Muistiinpano tuottaa luonnoksen, jonka asentaja korjaa. Agentti voi auttaa tekemään pienen käyttöliittymän, tarkistamaan selaimessa että muokkaus toimii ja korjaamaan löydetyn virheen. Käyttäjäkokeilu vastaa eri kysymykseen: onko luonnoksesta hyötyä ja vastaavatko kentät oikeaa työtä? Esimerkiksi epätavallinen ääni ei vielä ole diagnoosi. Pyydä käyttäjää näyttämään, mitä hän muuttaisi. Seuraava pieni muutos perustuu tähän havaintoon. Emme väitä, että kuvitteellinen palvelu olisi julkaistu tai säästäisi tietyn ajan. Näin sama rajaus–näyttö–palaute-työtapa palvelee myös uuden työkalun kokeilemista.

---

# 19_parallel

51:00–52:30 · Rinnakkainen työ. Erilliset työpuut voivat auttaa, kun tehtävät ovat aidosti erilliset. Kuvion esimerkissä yksi muutos lisää osoitteen regressiotestin ja toinen päivittää käyttöohjeen. Molemmat katselmoidaan ja yhdistetään, minkä jälkeen ajetaan yhteiset tarkistukset. Jos kaksi agenttia muuttaa samaa tiedostoa tai samaa käyttäytymistä, tarvitaan työnjako ja yhteensovitus. Erillinen worktree eristää työkopion, mutta ei poista ristiriitaisten ratkaisujen ongelmaa. Älä väitä lineaarista nopeushyötyä agenttien määrästä. Aloita yhdestä tehtävästä ja lisää rinnakkaisuutta vasta, kun riippuvuudet ovat selvät. Lähde: https://code.claude.com/docs/en/common-workflows

---

# 20_after_release

52:30–54:00 · Julkaisun jälkeinen kierros. Havainto voi olla virheilmoitus tai käyttäjän toistuva korjaus huoltoluonnokseen. Agentti voi auttaa tutkimaan havaintoa ja valmistelemaan rajatun korjauksen. Sovi mitä seurataan, kuka saa ilmoituksen ja kuka tekee julkaisupäätöksen. Pelkkä automaattinen tarkistus ilman omistajaa ei takaa, että ongelma tulee käsitellyksi. Käytä samaa ketjua: havainto, tutkiminen, pieni muutos ja tarkistus. Julkaisu ja käyttö ovat osa elinkaarta; tämä dia ei tarkoita, että agentti saisi automaattisesti julkaista kaikki muutokset. Esimerkki on työskentelymalli, ei tässä tehtävässä käynnistetty seuranta. Siirry lopuksi siihen, miten oma ymmärrys säilyy mukana.

---

# 21_understand

54:00–55:00 · Yksi opittava päätös. Kysy: mitä rikkoutuisi, jos huoneisto olisi tyhjä? Anna hetki ennustamiseen. Selitä omin sanoin, mitä tietoa järjestelmä lähettää ja miten se näkyy takaisin. Tarkista ennuste testillä tai yhdessä toisen kehittäjän kanssa. Näin AI:n käyttö ja oppiminen voidaan yhdistää konkreettiseen tilanteeseen. Kaikkea ei tarvitse kirjoittaa itse, mutta jokaisesta tehtävästä voi valita yhden päätöksen, jonka ymmärtää. Tämä on käytännön ehdotus, ei tutkimuksessa todistettu yleinen oppimismenetelmä. Käytännön osuus päättyy ajassa 55:00. Lähde oppimisen taustalle: https://www.anthropic.com/research/AI-assistance-coding-skills

---

# 22_start

55:00–56:00 · Seuraava hyödyllinen tehtävä. Rajaa tehtävä, määritä näyttö ja arvioi muutos. Palaa osoite-esimerkkiin: yksi toistettava virhe, selkeä säilymisen ehto, pieni korjaus ja tarkistus. Pyydä yleisöä valitsemaan mielessään yksi oma tehtävä, jossa tätä voisi kokeilla. 56:00 SIIRRY SELAIMEEN: https://gallup.koodattu.dev. Käytä loppugallupiin 3 minuuttia ja reagoi todelliseen tulokseen. Gallupin kysymykset ovat verkkosovelluksessa, eivät tässä PowerPointissa. Palaa päätösdiaan ajassa 59:00. Jos aikataulu venyy, pidä päätös silti lyhyenä ja selkeänä.

---

# 23_close

59:00–60:00 · Päätös. Anna lauseelle tilaa: koodi halpeni, vastuu ei. Se on esityksen tiivistävä tulkinta, ei universaali kustannusmittaus. Käytännön kutsu on valita hyödyllinen tehtävä ja tehdä lopputulos tarkistettavaksi. Kiitä yleisöä ja jatka keskustelua. Varsinainen tunnin kokonaisuus päättyy tähän. Mahdollinen lisäpalaute pysyy gallup.koodattu.dev-palvelussa. Älä lisää PowerPointiin uusia gallupkysymyksiä.
