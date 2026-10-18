# Maanantain kokeilu

*Hei ohjelmistokehitys, mitä kuuluu?* – Lakeus-Devaus 2026

Kokeile tätä yhdellä oikealla tehtävällä:

1. Valitse **yksi toistettava virhe**.
2. Kirjoita siitä **neljä riviä**.
3. Katso, **mitä näyttöä saat**.

Käy mikä tahansa agentti: Codex, Claude Code tai jokin muu.

## Neljä riviä

```text
Ongelma:  Mikä on vialla? Miten sen huomaa?
Tavoite:  Miltä valmis näyttää käyttäjän silmin?
Raja:     Mitä ei saa muuttaa?
Näyttö:   Mistä tiedät, että korjaus toimii?
```

Jos et osaa sanoa, mikä riittää näytöksi, et vielä tiedä, mitä pyydät.

## Esimerkki illasta

```text
Ongelma:  Huoneiston numero katoaa, kun osoite tallennetaan.
Tavoite:  Osoite säilyy myös sivun uudelleenlatauksen jälkeen.
Raja:     Rajapinta ja muu osoitekäytös pysyvät ennallaan.
Näyttö:   Toistettu virhe, regressiotesti ja toimiva tallennus selaimessa.
```

Pidempi versio samasta pyynnöstä:

> Osoitteen muokkaaminen kadottaa huoneiston numeron. Selvitä ensin, missä tieto katoaa, ja toista virhe. Korjaa rajattu syy nykyisiä käytäntöjä seuraten. Säilytä rajapinta ja muu osoitekäytös. Lisää regressiotarkistus ja varmista tallennus myös sivun uudelleenlatauksen jälkeen. Kerro muutoksen syy, ajetut tarkistukset ja avoimet kysymykset. Älä julkaise muutosta.

Viimeinen lause koskee tätä esimerkkiä. Se ei ole yleinen sääntö jokaiseen muutokseen.

## Kun agentti sanoo "valmis"

Mille portaalle tulos oikeasti yltää?

| | |
|---|---|
| 0 | Toimii mun koneella |
| 1 | Käynnistyy |
| 2 | Ratkaisee ilmoitetun ongelman |
| 3 | Ei riko muuta |
| 4 | Toimii myös uudelleenlatauksen jälkeen |
| 5 | Käyttäjä hyväksyy |

Kysy myös: **mitä tämä testi ei todista?**

## Ennen kuin hyväksyt

Pyydä agentilta lyhyt luovutus:

- **Miksi:** mikä oli syy?
- **Mitä muuttui:** mitä koodissa muutettiin?
- **Miten tarkistettiin:** mitkä tarkistukset ajettiin oikeasti?
- **Avoin päätös:** mitä sinun pitää vielä päättää?

## Pidä ymmärrys omanasi

- **Selitä** yksi tehty päätös omin sanoin.
- **Ennusta** yksi tapa, jolla muutos voisi rikkoutua.
- **Korjaa** itse yksi tarkoituksella rikottu esimerkki.

## Pysyvät ohjeet projektille

Jos agentti kysyy samaa asiaa joka kerta, kirjoita vastaus projektin ohjetiedostoon:

- Codex: `AGENTS.md`
- Claude Code: `CLAUDE.md`

Kirjoita sinne vain se, mitä koodi ei itse kerro: testikomennot, poikkeukselliset säännöt ja rajat. Pitkä ja yleinen ohje ei automaattisesti auta.

## Lähteet ja tausta

- [Esityksen rakenne ja lähdeviitteet](../docs/19-presentation-structure.md)
- [Lokakuun tutkimusaineisto](../docs/17-research-bank-2026-10-18.md) ja [lähderekisteri](../docs/18-research-source-register-2026-10-18.md)
- [Codex: prompting](https://learn.chatgpt.com/docs/prompting) · [Claude Code: best practices](https://code.claude.com/docs/en/best-practices)

Kysymyksiä tai kokemuksia kokeilusta? Juha Ala-Rantala · [ala-ranta.la](https://ala-ranta.la) · juha@ala-ranta.la
