# Presentation structure: the build blueprint

**Written 18 October 2026.** This document is what the next PowerPoint gets built from. It does not describe a finished deck.

It combines three inputs:

- **What to say:** the [run of show](02-one-hour-run-of-show.md), [red thread](01-red-thread.md), [editorial backlog](07-editorial-backlog.md), the [September refresh](13-research-refresh-2026-09-05.md) and the [October research bank](17-research-bank-2026-10-18.md).
- **How it looks and sounds:** the speaker's presentation style guide (`kuopio-pelaa-2026/presentation-style/`, files 01–06). This is the style used in *Tekoäly tuli – nyt kaikki on ohi… vai onko?*.
- **What already failed or worked:** the three earlier decks (`output/*.pptx`), the HTML version and the ppt-master experiment.

**What it replaces:** the visual direction in [DESIGN.md](../DESIGN.md) (navy, lime, dark section slides) and the 23-slide [storyboard](16-practical-presentation-storyboard.md). **What it keeps:** the 5 + 10 + 20 + 20 + 5 programme, the gallups in gallup.koodattu.dev and every evidence rule from the earlier documents.

Slide copy below is in Finnish and everything else is in English, following the repo's convention. All slide copy is a draft. Shorten it freely, but keep each slide's job.

---

## 1. The talk on one page

| | |
|---|---|
| **Title** | Hei ohjelmistokehitys, mitä kuuluu? |
| **Central question (salmon note)** | **Koodi halpeni. Mikä ei?** |
| **Answer to the title (slide 54)** | **Koodi halpeni. Vastuu ei.** |
| **Promise** | Näet, mitä ohjelmistokehityksessä oikeasti muuttui, ja miten agentin kanssa edetään tehtävästä tarkistettuun muutokseen. |
| **Audience** | Lakeus-Devaus, Seinäjoki: a mixed room of developers, students, managers, entrepreneurs and curious visitors. Some use agents daily, some avoid AI, and some are tired of the subject. |
| **Format** | 60 minutes: 5 intro, 10 opening gallup, 20 *Mitä kuuluu?* (context), 20 *Miten tehdään?* (practical), 5 closing gallup and wrap-up. Open discussion follows the hour. |
| **Slides** | 57 numbered slides, ~14 progressive builds, 3 memes, and 14 hidden backup slides |
| **Three takeaways** | 1. Pyydä tulosta, jonka voit tarkistaa. · 2. Varmista, että osaaminen kasvaa työn mukana. · 3. Sovi omistajuus ennen julkaisua. |

**Why the salmon note works as the hook:** the style guide's title pattern is a dramatic claim with built-in doubt, and the talk has to answer it explicitly. The title is a greeting, so the doubt goes on the central note: *Koodi halpeni. Mikä ei?* The thesis then answers it word for word. The room sees the question at 00:30, the note returns at every section break, and it is answered at 55:00.

---

## 2. Key decisions

| Decision | Why |
|---|---|
| **Adopt the scrapbook / paper-explainer style** in place of the navy/lime field-guide look | The speaker asked for it. It also matches the speaker's previous talk, so the two read as a series. |
| **Keep the 5 + 10 + 20 + 20 + 5 programme** | It was agreed on 5 September and the gallups depend on it. |
| **The practical half replaces the style guide's workshop** | The format has no hands-on block. The address-bug walkthrough plays the "talk → do" role, and slide 52 gives everyone one exercise to take home. |
| **The gallup replaces the word-association warm-up** | Ten minutes of voting is already the warm-up. Doing both would eat the intro. |
| **No question slides in the deck** | This is still the agreed rule. The deck has two *kysytään yleisöltä* handoff slides with a QR code and the URL, and the questions themselves stay in the web app. |
| **About 57 slides instead of 23** | The style guide budgets one point per 40–60 seconds. The deck runs for about 45 of the 60 minutes, which gives roughly 50–60 points. The 23-slide decks ran about 2 minutes per slide, which is too slow for this style. |
| **History moves to the start of the context half** (style guide beat 11 → our first content beat) | A veteran room needs "ollaanko tässä oltu ennenkin?" before the new numbers, or it tunes out. This is a deliberate deviation from the template order. |
| **"This presentation was made with agents" is the personal proof** | It is the one real, documented case of "what the AI did and what I decided" that we have. The repo is the evidence. The speaker must confirm every line (see §11). |
| **Retire `ai-workbench.png`** | Its dark navy palette clashes with cork and paper. **Keep `maintenance-illustration.png`**: its warm paper tones fit the content surface. |
| **Most new evidence comes from the October bank** | The Stack Overflow 2026 survey, the fuller MirrorCode results, the OpenAI deletion case, curl, SWE-Maintain and Statistics Finland are fresher and more concrete than what the older decks used. |

---

## 3. How the style-guide arc maps to this talk

| Style beat ([04](../../kuopio-pelaa-2026/presentation-style/04-deck-template.md)) | Here | Slides |
|---|---|---|
| 1 Hook | Collage title → agenda corkboard with the salmon note | 01–02 |
| 2 Who I am | Bio on cardboard → permission slide | 03–04 |
| 3 Warm-up | Replaced by the 10-minute gallup, with a short timeline before the handoff | 05–07 |
| 4 Basics / why now | *Pyydä tulosta, jonka voit tarkistaa*: asking vs delegating | 06 |
| 5 What professionals think | Stack Overflow 2026 usage by lifecycle stage, plus experience and sentiment | 12, 27 |
| 6 What users think | Folded into 5. The audience here *is* the professionals, and the gallup covers "users". | — |
| 7 Why opinions differ | Productivity studies measure different things | 16–18 |
| 8 Controversy cases + framework | curl case (2 slides) plus the slop definition. MirrorCode is the capability case. | 13, 24–25 |
| 9 Domain by domain | **The practical lifecycle**: one stage per slide, each with "Agentti / Sinä" | 38–53 |
| 10 What's possible now | Task substitution and the maintenance-record prototype | 22, 47 |
| 11 Been here before | 1968 → 4GL → Brooks/Naur, moved to the start (see §2) | 09–11 |
| 12 Opportunity turn | "AI muuttaa myös sitä, mitä kannattaa yrittää" and the local advantage | 22, 34 |
| 13 Answer the title | The salmon note flips: *Vastuu ei.* | 54 |
| 14 Personal proof | *Tämäkin esitys tehtiin agenttien kanssa* (what the agent did / what I decided) | 37 |
| 15 Takeaways | Takeaways corkboard, 3 notes | 55 |
| 16 Workshop | Replaced by the practical half (see §2) | 35–53 |
| 17 Close | Closing-gallup handoff → closing corkboard | 56–57 |

---

## 4. Visual system for this deck

Use the style guide's [01-visual-system.md](../../kuopio-pelaa-2026/presentation-style/01-visual-system.md) as written: two surfaces, the `#F1ECE1` paper, Arial Black 32 pt titles, grey 18 pt subtitles, Aptos body text, `#0070C0` for numbers, Bungee for audience prompts, and a `Lähde:` line bottom-left on every claim. Only the additions this topic needs are listed below.

### 4.1 Surfaces, as used here

| Surface | Slides |
|---|---|
| **Frame** (corkboard or cardboard) | 01, 02, 03, 07, 08, 15, 23, 30, 35, 54, 55, 56, 57 |
| **Content** (warm paper) | Everything that argues or teaches |
| **Full-bleed** (no title, credit only) | 14, 29, 48 (memes) and 24 (curl case opener) |
| **Permission / prompt** (paper with a character) | 04 |

### 4.2 New components for a software talk

These are **objects placed on the paper surface**, in the same way screenshots or quote cards are. They are not a third surface, so the "never mix surfaces" rule still holds.

| Component | Spec | Used on |
|---|---|---|
| **Code card** | Dark card (`#20231F`), rounded corners 8 px, Consolas 22–26 pt in warm white, maximum 6 lines. Mark changed lines with `+` and `−` **and** a pale highlight, never colour alone. Consolas ships with Windows, so it needs no embedding. | 40, 44 |
| **Check chip** | Pill shape with ✓ or ✗ **plus the word** (`läpi` / `ei läpi`) and the command name in mono. Green `#00B050` / red `#B64E30`. | 44, 45 |
| **Browser frame** | A thin grey window chrome around a **real capture**, cropped to the form. The relevant field is enlarged at least 2×. | 43, 44, 47 |
| **Handoff card** | Paper-coloured card with four small-caps labels: MIKSI · MITÄ MUUTTUI · MITEN TARKISTETTIIN · AVOIN PÄÄTÖS | 46 |
| **Lifecycle strip** | Seven small dots top-right: *Rajaa · Konteksti · Toista · Korjaa · Tarkista · Luovuta · Seuraa*. The current stage is blue and labelled. This is the practical half's "you are here". | 39–50 |
| **Agentti / Sinä pair** | Two small sticky notes bottom-right, a light-blue **Agentti:** and a yellow **Sinä:**, one line each. Always labelled, so the colour carries no meaning on its own. It is the style guide's "take-away pair" used as a recurring device. | 39–50 |
| **Honesty tag** | A taped paper label, bottom-right, in grey Aptos 14 pt: `Kuvitteellinen esimerkki`, `Opetusesimerkki`, `Havainnollistus – ei mitattu`, `Esityksen tulkinta` or `Demotallenne` | Wherever needed (see §7) |
| **Gallup callback chip** | A small salmon pin, top-right: `↩ Gallup: Nopeuttaako AI sinua?`. It prompts the speaker to recall the room's actual answer aloud. The slide shows the question, never a predicted result. | 09, 12, 16, 21, 26, 27, 42, 45 |

### 4.3 Imagery and assets

| Asset | Status | Note |
|---|---|---|
| Corkboard, cardboard and paper textures | **Reuse** from `kuopio-pelaa-2026/pptx/` (`noticeboard.png`, `cardboard*.png`) | |
| Speaker cut-out (`mä.png`) | **Reuse** | |
| Frog character ("Saa kysyä!") | **Reuse** | |
| Ransom-note title words | **Make new**: `Hei`, `ohjelmistokehitys,`, `mitä`, `kuuluu?`, `Koodi`, `halpeni.`, `Mikä`, `ei?`, `Vastuu`, `ei.` | One PNG per word, generated with the style guide's [06](../../kuopio-pelaa-2026/presentation-style/06-ai-brief.md) prompt |
| Mascot | **Make a new variant** of the cardboard CRT robot. Props: mechanical keyboard, magnifying glass, rubber duck, and a red **LGTM** stamp. | Same character as Kuopio Pelaa, so the two talks read as a series |
| `maintenance-illustration.png` | **Reuse** on 22 and 47 | Already disclosed as generated |
| `ai-workbench.png` | **Retire** | The navy tone does not fit |
| Address-bug captures | **Must produce** (see §10) | The biggest missing asset |
| Evidence screenshots | **Collect**: curl blog headline, NATO 1968 report page, a period 4GL/CASE advert, the repo docs listing | Check reuse rights for each |
| QR codes | **Make**: gallup.koodattu.dev | Test them from the back row |

**AI disclosure:** the illustrations and the research used AI. Slide 37 says so naturally, and slide 57 repeats it in small type.

---

## 5. What makes it cohesive: the red threads

The deck runs on five recurring devices. If a slide uses none of them and adds no evidence, cut it.

1. **The salmon note.** It appears on 02, rides along on every section return (08, 15, 23, 30, 35), and flips to the answer on 54. *Koodi halpeni. Mikä ei?* → *Vastuu ei.*
2. **One bug, start to finish.** "Huoneiston numero katoaa, kun osoite tallennetaan." It is planted on 06 (the example request), named on 38, and followed through 39–53. Slide 53 recaps it as "what the agent did / what the human decided".
3. **One hypothetical local prototype.** Photographed service notes become draft maintenance records. It is introduced on 22 (*worth trying now*), returns on 34 (*local advantage*), and pays off on 47 (*the user corrects it*). It always carries the `Kuvitteellinen esimerkki` tag.
4. **"Agentti teki / ihminen päätti", three times.** It is seeded on 06 (asking vs delegating), shown on the speaker's real work on 37, and proven on the bug on 53. The thesis on 54 is the generalisation of this frame.
5. **The room talks back.** Gallup callbacks on eight context and practical slides, four guess-first reveals, and a hands-up question on 06. Something interactive happens every 3–4 minutes.

**Zoom device.** Slide 19 shows the delivery chain *Tarve → Toteutus → Katselmointi → Integrointi → Julkaisu → Käyttö*. Slide 38 opens by **zooming into the "Toteutus" box** of that same diagram, and the practical loop lives inside it. Slide 50 zooms back out. This links the two halves visually and keeps the two flows from looking like two competing frameworks.

**Recurring lines.** Use at most three as motifs. The book of candidates is in [07](07-editorial-backlog.md#candidate-recurring-lines).
- *Koodi halpeni. Vastuu ei.* (thesis)
- *Valmis tehtävä ja opittu taito ovat eri tuloksia.* (26, called back on 52)
- *Älä tee nopeudestasi jonkun toisen katselmointivelkaa.* (seeded on 25 by curl, landed on 46)

---

## 6. Running order at a glance

| Block | Time | Slides | Agenda note (shown on the section return) |
|---|---|---|---|
| Intro | 00:00–05:00 | 01–07 | — |
| Opening gallup (browser) | 05:00–15:00 | 07 stays on screen | — |
| **A** Mikä oikeasti muuttui? | 15:00–20:00 | 08–14 | ① |
| **B** Tuleeko meistä nopeampia? | 20:00–25:40 | 15–22 | ② |
| **C** Kuka tarkistaa – ja kuka oppii? | 25:40–30:20 | 23–29 | ③ |
| **D** Mitä tämä tarkoittaa täällä? | 30:20–35:00 | 30–34 | ④ |
| **Practical**: Miten agentin kanssa tehdään töitä? | 35:00–55:00 | 35–53 | ⑤ |
| Close | 55:00–60:00 | 54–57 | Salmon note answered |

**Agenda corkboard (slide 02)**

The title words shrink to the top of the board. Below them sit five pastel notes:

1. Mikä ohjelmistokehityksessä oikeasti muuttui?
2. Tuleeko meistä nopeampia?
3. Kuka tarkistaa – ja kuka oppii?
4. Mitä tämä tarkoittaa täällä Lakeudella?
5. Miten agentin kanssa tehdään oikeasti töitä?

The salmon note reads **Koodi halpeni. Mikä ei?**

On the build, the notes regroup under two larger notes: **"Mitä kuuluu? (tilannekatsaus)"** and **"Miten tehdään? (käytäntö)"**.

---

## 7. Slide by slide

Format: **# · start time · slide type** (catalogue numbers from [02-slide-patterns](../../kuopio-pelaa-2026/presentation-style/02-slide-patterns.md)). Then the title, the subtitle, what the audience sees, the bottom line, the source, and speaker notes where needed. ⏩ marks a slide to skip if running late. **Every content slide needs a title, a subtitle and a bottom line.**

### Intro · 00:00–05:00

**01 · 00:00 · Collage title (#1)**
- Corkboard background. Ransom-note words: *Hei ohjelmistokehitys, mitä kuuluu?* Speaker cut-out bottom-left, mascot right. No other text.
- Notes: Open with a recognisable situation: "Agentti sanoo, että muutos on valmis. Mikä saisi teidät uskomaan sen?"

**02 · 00:30 · Agenda corkboard (#2), 1 build**
- The five notes and the salmon note from §6. On the build, the notes regroup into the two halves.
- Notes: "Ensimmäinen puolisko on tilannekatsaus, toinen käytäntöä. Tämä punainen lappu on koko esityksen kysymys."

**03 · 01:15 · Bio on cardboard (#3)**
- A career ladder of taped labels, a photo stack on the right, and one self-ironic last line. Suggested line: *"Agentti pyörii taustalla nytkin."* **[CONFIRM roles and photo]**

**04 · 01:50 · Permission (#4)**
- Frog character. In Bungee: **Saa kysyä!** · **Isommat keskustelut tunnin jälkeen.**
- Notes: The hour is tightly timed because of the gallups, so promise a discussion slot instead of inviting interruptions.

**05 · 02:00 · Three-point timeline (#18)**
- Title: **Kaksi vuotta sitten kysyimme eri kysymystä**
- Subtitle: Lakeus-Devaus 2024 → 2026
- Timeline:
  - **2022:** Kone täydentää rivin.
  - **Joulukuu 2024:** *Saako paikallisen mallin auttamaan koodauksessa?* (Lakeus-Devaus: Paikalliset koodaavat kielimallit, 50+ osallistujaa)
  - **2026:** *Kuinka ison tehtävän uskallamme antaa agentille?*
- Bottom: **Ja kuka tarkistaa, mitä sieltä tulee takaisin?**
- Source: Lakeus-Devaus event page. Notes: The years show a direction, not exact capability dates. **[CONFIRM whether the speaker ran the 2024 event; that decides "kysyimme" vs "Lakeus-Devaus kysyi"]**

**06 · 03:00 · Two-column definition (#16)**
- Title: **Pyydä tulosta, jonka voit tarkistaa**
- Subtitle: Keskustelu ja delegointi ovat eri pyyntöjä
- Left, **Kysy**:
  - Request: "Selitä, miten osoitteen tallennus toimii."
  - What you get: a selitys.
- Right, **Delegoi**:
  - Request: "Toista virhe. Korjaa rajattu syy. Näytä toimiva tallennus."
  - What you get: a muutos, a testi and a tallennus that works.
- Bottom: **Kummanlaisia pyyntöjä sinä teet useammin?** (show of hands)
- Notes: This plants the address bug, and the line returns as takeaway 1. Both modes are useful; neither ranks above the other. Codex and Claude Code are examples of tools for the right-hand mode.

**07 · 04:15 · Ask-the-room handoff (#8)**
- *kysytään yleisöltä* in Bungee, a QR code, **gallup.koodattu.dev** and the session code.
- Stays on screen from 05:00 to 15:00.
- Gallup timing: 90 s to join, about 6 min for the seven questions, and 2.5 min to discuss at most three patterns. Use the three-sentence synthesis in [03-live-polls](03-live-polls.md#two-minute-synthesis).
- Fallback: show of hands for experience, recent use and mood.

### A · Mikä oikeasti muuttui? · 15:00–20:00

**08 · 15:00 · Section return (agenda corkboard, note ① highlighted)** · 10 s

**09 · 15:10 · Historical reframe (#24)** · ↩ Gallup: *Vuosia ohjelmistoalalla?*
- Title: **Ollaanko tässä oltu ennenkin?**
- Subtitle: Ohjelmistokriisi on vanhempi kuin useimmat meistä
- Then/now pair:
  - **1968:** Ohjelmistoja osataan tehdä enemmän kuin hallita. (NATO 1968 report page)
  - **2026:** Ohjelmistoa osataan tuottaa enemmän kuin tarkistaa. (a crowded PR list, captured from a public repo or recreated as a graphic)
- Bottom: **Jokainen sukupolvi saa oman hopealuotinsa.**
- Source: NATO Software Engineering Conference 1968. Notes: The 2026 line is a rhetorical compression, not a statistic. Ask the 20+ year group whether it sounds familiar.

**10 · 16:00 · Headline screenshot (#14)** ⏩
- Title: **"Ohjelmointia ilman ohjelmoijia"**
- Subtitle: 1980-luvun lupaus: neljännen sukupolven kielet ja CASE
- Visual: a period advert or headline. **Check reuse rights.** If none can be cleared, recreate it as typewriter text and add the `Havainnollistus` tag.
- Bottom: **Lupaus ei toteutunut tuotteena. Se toteutui infrastruktuurina.** (SQL, IDEs, CI)
- Source: JMIS 1984; IEEE Technology Navigator, CASE

**11 · 16:40 · Two-column definition (#16)**
- Title: **Toteutus helpottuu. Vaikeat kysymykset jäävät.**
- Subtitle: Brooks 1986 ja Naur 1985, luettuna vuonna 2026
- Left, **Satunnainen vaikeus**: "Miten tämä kirjoitetaan?" Syntaksi, rajapinnat, pohjakoodi, testirungot. → *AI vie tästä ison osan.*
- Right, **Olennainen vaikeus**: "Mitä tämän pitää tehdä – ja miksi?" Vaatimukset, muutos, näkymättömyys. Naur: ymmärrys elää ihmisissä. → *AI voi auttaa, mutta ei omista.*
- Bottom: **Kuka rakentaa teorian järjestelmästä, jos agentti rakentaa koodin?**
- Source: Brooks, *No Silver Bullet*; Naur, *Programming as Theory Building*. Paraphrase only, no quotations. Notes: Don't claim that AI can only remove accidental complexity. It also proposes designs.

**12 · 17:40 · Progressive chart (#10), guess first, 1 build** · ↩ Gallup: *AI koodauksessa tällä viikolla?*
- Title: **Mihin kehittäjät käyttävät AI:ta?**
- Subtitle: Nykyinen käyttö työvaiheittain, 2026
- Horizontal bars:
  - Koodin tuottaminen tutulla alueella: **69 %**
  - Testien kirjoittaminen: **58 %**
  - Katselmointi: **41 %**
  - Tuotannon operointi ja vianetsintä: **20 %**
- Build a shows the labels only. Ask: "Arvatkaa, mikä on alin." Build b reveals the bars.
- Bottom: **Sama agentti, eri vastuu, eri rajat.**
- Source: Stack Overflow Developer Survey 2026 · n = 12 547 · kesä–elokuu 2026 · itse valikoitunut otos · monivalinta · tuotanto ei kuulu kaikkien työhön.
- Notes: Use the current-use column, not the expectations column. The exact values are 69.3 / 58.1 / 40.5 / 19.9.

**13 · 18:40 · Case beat with big number (#23 + #11), 1 build**
- Title: **Agentti rakensi ohjelman uudelleen näkemättä sen koodia**
- Subtitle: MirrorCode: bioinformatiikan työkalu gotree, noin 16 000 riviä
- Build a, the task card:
  - **Annettu:** ohjelman käyttäytyminen ja testit
  - **Ei annettu:** lähdekoodia
- Build b, the result: **2 000 / 2 001** testiä läpi · 14 h · 251 $
- Bottom: **Iso tehtävä voi onnistua, kun onnistuminen on tarkasti määritelty.**
- Source: Epoch AI, MirrorCode project page (checked 18 October 2026) · one protocol only · possible training-data contamination
- Notes: The single failed test is the story. Ask: "Mikä on teidän tehtävänne testisarja?" Any human-weeks estimate is an expert guess, so keep it out of the slide. This is not product discovery or operation.

**14 · 19:50 · Full-slide meme (#25)**
- *Distracted boyfriend* recreated with Finnish labels: Kehittäjä → **"Uusi malli"**, with **"Testit, jotka eivät vieläkään aja"** glaring.
- It lands the "model-chasing without harness improvement" failure from [11](11-workflow-scenarios-and-field-notes.md) as a joke.

### B · Tuleeko meistä nopeampia? · 20:00–25:40

**15 · 20:00 · Section return (note ②)** · 10 s

**16 · 20:10 · Guess first, "Hetkinen…" move (#10), 2 builds** · ↩ Gallup: *Nopeuttaako AI sinua?*
- Title: **Paljonko AI nopeutti kokeneita kehittäjiä?**
- Subtitle: Alkuvuosi 2025: 16 kokenutta avoimen lähdekoodin kehittäjää, 246 tehtävää omissa repoissaan
- Builds:
  - a: **Ennakkoarvio:** 24 % nopeammin
  - b: **Jälkikäteen koettu:** 20 % nopeammin. Pause here and let the room guess.
  - c: **Mitattu: 19 % enemmän aikaa.** Large, burnt orange, with a text label.
- Bottom: **Tuntuma nopeudesta ja mitattu nopeus voivat erota.**
- Source: METR, July 2025 study · METR update, February 2026

**17 · 21:20 · Two separate study cards (#11 ×2)**
- Title: **Tuottavuus riippuu tehtävästä**
- Subtitle: Kaksi huolellista tutkimusta, kaksi eri mittaria
- Left, Microsoft and partners: **+26 % valmistuneita tehtäviä**. 4 867 kehittäjää · 3 kenttäkoetta · koodiavustin.
- Right, METR: **+19 % aikaa**. 16 kokenutta · tutut repot · alkuvuoden 2025 työkalut.
- Under both: *Eri mittari. Eri tehtävä. Eri ihmiset.*
- Bottom: **Nopeampi kenelle, missä tehtävässä, mitattuna mistä?**
- Source: Microsoft Research (2025); METR (2025). **Never put both on one axis and never subtract them.**

**18 · 22:10 · Quote-card style (#13)**
- Title: **Uusin koe ei saanut luotettavaa tulosta**
- Subtitle: …koska moni ei enää halunnut tehdä töitä ilman AI:ta.
- Three small cards:
  - Osallistujat ja tehtävät valikoituivat
  - Pienempi palkkio
  - Rinnakkaista agenttityötä vaikea mitata
- Bottom: **Kun työtapa muuttuu, vanha mittari ei mittaa samaa asiaa.**
- Source: METR, 24 February 2026. Notes: Let the subtitle get its laugh, then make the point.

**19 · 22:40 · Flow diagram (#21), 2 builds**
- Title: **Nopeampi tehtävä ei yksin nopeuta toimitusta**
- Subtitle: Missä teillä työ odottaa?
- Visual: a native flow, *Tarve → Toteutus → Katselmointi → Integrointi → Julkaisu → Käyttö*. Build 1: "Toteutus" shrinks. Build 2: a queue of cards piles up in front of "Katselmointi".
- Tag: `Havainnollistus – ei mitattu`
- Bottom: **Pullonkaula ei katoa. Se siirtyy.**
- Source: DORA, *Balancing AI tensions*, March 2026, using 2025 data. Notes: DORA also discusses AI improving review, so verification capacity is not fixed. **Slide 38 zooms into the "Toteutus" box of this diagram.**

**20 · 23:30 · Big number (#11)** ⏩
- Title: **Kun koodia syntyy tarpeeksi, seuraava ongelma on sen liikenne**
- Subtitle: Ääriesimerkki: Anthropicin oma kehitys
- Number: **2 500 → 30 000** yhdistettyä muutosta päivässä (toukokuu → syyskuu 2026)
- Bottom: **Yksi pullonkaula poistuu – seuraava tulee näkyviin.**
- Source: Anthropic Engineering, 13 October 2026 · company-reported, extreme workload · merge volume ≠ value

**21 · 24:00 · Big number twist (#11)** · ↩ Gallup: *Enemmän vai parempaa koodia?*
- Title: **Hyvä AI-muutos voi poistaa koodia**
- Subtitle: OpenAI siivosi omaa kokeilualustaansa agenttien avulla
- Number: **−800 000 riviä**. Small print: 1 400 PR:ää · 5 insinööriä · 2 viikkoa · konttikuva 3,31 → 1,72 Gt
- Bottom: **Palkitaanko teillä tuotettua koodia vai hyödyllistä muutosta?**
- Source: OpenAI developer blog, 14 October 2026 · first-party, not independently measured · deletion count ≠ safety. Notes: The Stack Overflow 2026 survey found 10.2 % whose organisation evaluates AI use in performance reviews. Use that as a discussion hook only.

**22 · 24:40 · Opportunity turn: image plus record**
- Title: **AI muuttaa myös sitä, mitä kannattaa yrittää**
- Subtitle: Kokeilu, joka ei ennen ylittänyt kynnystä
- Visual: `maintenance-illustration.png` beside an editable draft record: *Laite: Pumppu A · Havainto: epätavallinen ääni · Toimi: tarkista laakeri*
- Tag: `Kuvitteellinen esimerkki`
- Bottom: **Mitä kokeilisit nyt, mitä ei ennen kannattanut?**
- Source: METR, *Task substitution and uplift*, May 2026. Notes: The manual effort an artifact would have needed is not money saved if nobody would have built it. The value is learning cheaply whether the workflow helps.

### C · Kuka tarkistaa – ja kuka oppii? · 25:40–30:20

**23 · 25:40 · Section return (note ③)** · 10 s

**24 · 25:50 · Case opener (#22)**
- Full-bleed: a tightly cropped screenshot of Daniel Stenberg's blog headline announcing the end of curl's bug bounty. Credit only.

**25 · 26:10 · Case beat with timeline (#23 + #18)**
- Title: **curl lopetti palkkiot haavoittuvuuksista**
- Subtitle: Ylläpitäjät hukkuivat heikkoihin raportteihin
- Timeline:
  - **Ennen:** palkkio löydetystä haavoittuvuudesta
  - **Sitten:** paljon heikkoja ja vilpillisiä raportteja
  - **31.1.2026:** palkkio-ohjelma päättyy. Aidot raportit ovat yhä tervetulleita.
- Small definition card: *AI-slop = tuotos, joka siirtää arviointityön jollekulle toiselle.*
- Bottom: **Ilmainen lähettää ei ole ilmainen tarkistaa.**
- Source: Stenberg, daniel.haxx.se, 26 January 2026 · not every poor report was AI-made
- Notes: Critique the incentive, not the people. For balance, mention the opt-in OSS Scanner (E2): the same capability can help when the receiver agrees to it. The Godot/Linux policy contrast is backup slide B1.

**26 · 27:10 · Progressive chart (#10), guess first, 1 build** · ↩ Gallup: *Luetko AI-koodin?*
- Title: **Oppiko AI:n kanssa työskennellyt ryhmä yhtä hyvin?**
- Subtitle: 52 osallistujaa opetteli uuden Python-kirjaston – välitön osaamiskoe
- Visual: two native bars on a 0–100 % scale. Build a: empty axes. Build b: **AI-avusteinen 50 %**, **Ilman AI:ta 67 %**.
- Bottom (on build b): **Tehtävä valmistui. Ymmärrys ei välttämättä.**
- Source: Shen & Tamkin 2026 (arXiv 2601.20245) · rounded author means · immediate test only · not long-term · not a test of current agents
- Notes: Say "about 17 percentage points", never "17 % of skill lost". Spoken line: *Valmis tehtävä ja opittu taito ovat eri tuloksia.*

**27 · 28:20 · Big number pair, guess first (#11), 1 build** · ↩ Gallup: *Vuosia alalla?* / *AI-fiilis?*
- Title: **Kuka suhtautuu AI:hin myönteisimmin?**
- Subtitle: Kehittäjät työkokemuksen mukaan, 2026
- Build a: two empty labels, *1–5 vuotta* and *16+ vuotta*. Ask the room. Build b: **53 %** and **69 %** myönteisiä.
- Bottom: **Sama muutos näyttää erilaiselta eri uravaiheissa.**
- Source: Stack Overflow 2026 (publisher-reported split; question n = 14 428) · association, not cause

**28 · 29:00 · Two-column explanation with evidence card**
- Title: **AI muuttaa työtä kahdesti**
- Subtitle: Sen kautta, mitä se osaa – ja mitä uskomme sen kohta osaavan
- Left, **Mitä se tekee**: tehtävät, työkalut, tahti
- Right, **Mitä odotetaan**: ketä palkataan, mitä opetellaan, kuka mentoroi
- Evidence card: *Yksi poikkeuksellinen työpaikka: juniorien osuus teknisistä rekrytoinneista 27 % → 9 %, vaikka rekrytointi kasvoi.*
- Bottom: **Jos ensimmäinen porras kapenee, mistä seuraavat seniorit tulevat?**
- Source: Anthropic, 16 October 2026 (an AI vendor's own data). Notes: The Stanford US entry-level relative gap (19 %, descriptive) stays in the notes, as does the Reddit career-anxiety framing. Acknowledge the fear without mocking it.

**29 · 30:10 · Full-slide meme (#25)**
- *"Corporate needs you to find the differences"*: **AI:n kirjoittama PR** / **Ihmisen kirjoittama PR** → *"Molemmat pitää ymmärtää ennen mergeä."*
- It closes the slop argument: provenance does not tell you quality.

### D · Mitä tämä tarkoittaa täällä? · 30:20–35:00

**30 · 30:20 · Section return (note ④)** · 10 s

**31 · 30:30 · Big numbers (#11 ×3)**
- Title: **Suomen IT-ala ei mahdu yhteen käyrään**
- Subtitle: Toimialan tilannekuva, elokuu 2026
- Numbers:
  - **19 mrd €** liikevaihto 2025 (+5 %)
  - **Uudet tilaukset Q2:** −12 % ed. neljännekseen, +6 % vuoden takaiseen
  - **~80 200** työntekijää kesäkuussa (−1 %)
- Bottom: **Paine on todellinen. Syy ei ole yksi.**
- Source: Teknologiateollisuus, tietotekniikka-ala (August outlook; the order survey excludes games and data centres) · **refresh before the event**
- Notes: These figures do not isolate any AI effect. Never reuse the old 20 bn / +9 % figures.

**32 · 31:20 · Progressive chart (#10), guess first, 1 build**
- Title: **Monessako yrityksessä AI on käytössä?**
- Subtitle: Vähintään 10 hengen yritykset Suomessa, kevät 2025
- Bars:
  - Tieto ja viestintä: **80 %**
  - Kaikki toimialat: **38 %**
  - Rakentaminen: **24 %**
  - Kuljetus ja varastointi: **13 %**
- Build a hides the bars. Ask: "Arvatkaa rakentaminen."
- Bottom: **Asiakkaan pullonkaula ei välttämättä ole mallin älykkyys.**
- Source: Tilastokeskus, 27 November 2025 · broad AI definition · self-reported · not a South Ostrobothnia estimate · 15 % have documented AI rules (keep in the notes)

**33 · 32:20 · Comparison (#19)**
- Title: **AI on paine – ja tuote**
- Subtitle: Mitä asiakas lakkaa ostamasta, mitä alkaa pyytää?
- Left, **Paine vanhalle mallille**: enemmän tulosta per euro · geneerinen toteutus siirtyy taloon · tuntihinnoittelu kyseenalaistuu · juniorien tehtävät muuttuvat
- Right, **Kysyntä uudelle**: käyttöönotto ja hallinta · data, tietoturva, integraatiot · ylläpito ja jatkuvuus · osaamisen uudistaminen
- Example card: *Gofore × Tampereen yliopisto: AI-alusta – arkkitehtuuri, toteutus, hallinta, ylläpito.*
- Bottom: **Asiakas ostaa myös käyttöönoton, hallinnan ja jatkuvuuden.**
- Source: Gofore business review for August 2026 (11 September) · company narrative · growth not attributable to AI

**34 · 33:20 · Opportunity turn (#12-style)**
- Title: **Paikallinen etu syntyy työn tuntemisesta**
- Subtitle: Kun koodi halpenee, mikä lähellä on arvokasta?
- Four items: tunne oikea työ · pääse käyttäjien luo · liitä nykyisiin järjestelmiin · tue käytössä ja ylläpidossa
- Small chips: *Lakeus-Devaus, mettäpöyröytymistä vastaan since 2016* · *SEAMK Testauspaja: River IT, syyskuu 2026*
- Callback: a thumbnail of the maintenance record from slide 22
- Tag: `Esityksen tulkinta`
- Bottom: **Mitä täällä kannattaa nyt rakentaa, mitä ei ennen kannattanut?**
- Source: Lakeus-Devaus; SEAMK event listing. Notes: This is a strategic proposition. Proximity does not guarantee success.

**35 · 34:30 · Section return: halves regroup, ⑤ highlighted**
- The agenda board from 02's second build, with "Miten tehdään?" pulled forward. 30 s to switch the energy: "Nyt käytäntöön."

### Practical · Miten agentin kanssa tehdään töitä? · 35:00–55:00

From slide 39 onward, every slide carries the **lifecycle strip** and an **Agentti / Sinä** note pair (§4.2). The pair is given for each slide.

**36 · 35:00 · Big number (#11)**
- Title: **Luottamus syntyy tarkistettavuudesta**
- Subtitle: Milloin kehittäjät luottavat AI:hin? (2026)
- Number: **48 %** luottaa, kun tulos on helppo tarkistaa. Small beside it: *6,6 % luottaa myös tärkeissä päätöksissä.*
- Bottom: **Seuraavat 20 minuuttia: miten tuloksesta tehdään tarkistettava.**
- Source: Stack Overflow 2026, trust question, n = 14 304 · response categories, not error rates

**37 · 35:40 · Personal proof (#14 showcase)**
- Title: **Tämäkin esitys tehtiin agenttien kanssa**
- Subtitle: Mitä agentti teki – mitä minä päätin
- Visual: a screenshot of the repo's `docs/` listing, plus two columns.
- Left, **Agentti**:
  - haki ja luki kymmeniä lähteitä
  - kirjoitti 18 taustamuistiota
  - rakensi neljä versiota esityksestä
  - korjasi omia lukujaan (19 mrd €, ei 20)
  - hylkäsi lupaavan tutkimuksen, joka osoittautui simulaatioksi
- Right, **Minä**:
  - valitsin väitteen
  - karsin suurimman osan
  - tarkistin luvut
  - vastaan jokaisesta väitteestä tällä lavalla
- Bottom: **Agentti teki paljon. Vastuu lavalla on minun.**
- Footer: *Tämän esityksen tutkimuksessa ja kuvituksessa on käytetty tekoälyä.*
- Source: this repository (see [13](13-research-refresh-2026-09-05.md) and [18](18-research-source-register-2026-10-18.md)). **[CONFIRM every line. Describe only what the speaker actually did.]**

**38 · 36:40 · Loop diagram (#21) with the zoom from 19**
- Title: **Näin tehtävä etenee AI:n kanssa**
- Subtitle: Esimerkki: huoneiston numero katoaa, kun osoite tallennetaan
- Visual: zoom into the "Toteutus" box from 19, which opens into the loop *Rajaa → Konteksti → Toista → Korjaa → Tarkista → Luovuta → Seuraa*. This loop becomes the strip on later slides.
- Tag: `Opetusesimerkki`
- Bottom: **Agentti tekee ison osan työstä. Sinä päätät, milloin näyttö riittää.**
- Source: Codex prompting guide; Claude Code best practices

**39 · 37:40 · Two-column definition (#16)** · strip: *Rajaa*
- Title: **Hyvä tehtävä kertoo, miltä valmis näyttää**
- Subtitle: Sama pyyntö kahdella tavalla
- Left: "Korjaa osoitelomake."
- Right, four lines:
  - **Ongelma:** Huoneiston numero katoaa tallennuksessa.
  - **Tavoite:** Osoite säilyy myös uudelleenlatauksessa.
  - **Raja:** Säilytä rajapinta ja muu osoitekäytös.
  - **Näyttö:** Toistettu virhe, regressiotarkistus, toimiva tallennus.
- Bottom: **Jos et osaa kirjoittaa näyttöä, et vielä tiedä, mitä pyydät.**
- Pair: *Agentti: tutkii syyn ja ehdottaa · Sinä: määrität valmiin ja rajat*
- Notes: The full prompt is in [02](02-one-hour-run-of-show.md#example-task-brief). Give the room 20 seconds to frame one of their own tasks in these four lines.

**40 · 38:50 · Repo plus code card** · strip: *Konteksti*
- Title: **Anna agentille projektin oma totuus**
- Subtitle: AGENTS.md (Codex) · CLAUDE.md (Claude Code)
- Left: a small repo tree.
- Right: a code card with 4 lines:
  ```
  # Osoitteet
  - Testit: npm test -- address
  - Huoneisto on vapaaehtoinen kenttä.
  - Älä muuta /api/address-rajapintaa.
  ```
- Twist note: *Tutkimus: generoidut ohjetiedostot eivät yleisesti parantaneet onnistumista – kustannus nousi yli 20 %.*
- Bottom: **Ohjeenkin pitää ansaita paikkansa.**
- Pair: *Agentti: lukee ja noudattaa · Sinä: kirjoitat vain sen, mitä repo ei kerro*
- Source: *Evaluating AGENTS.md*, v3 (29 September 2026), plus official docs · `Opetusesimerkki`

**41 · 40:00 · Hub diagram** · strip: *Konteksti*
- Title: **Työkalut tuovat agentin oikean työn äärelle**
- Subtitle: Valitse tehtävän tarvitsemat – ei kaikkea
- Diagram, with the agent in the centre:
  - **Shell** → testikomento
  - **Selain** → näkyvä toiminta
  - **MCP** → tikettijärjestelmä
  - **Skill** → toistettava työtapa
- Bottom: **Työkalu on integraatiovalinta, ei kypsyysmerkki.**
- Pair: *Agentti: käyttää annettuja työkaluja · Sinä: päätät, mihin sillä on pääsy*
- Source: MCP client best practices; Codex skills; Claude Code workflows

**42 · 41:00 · Four sliders** · ↩ Gallup: *Agentin PR tuotantoon?*
- Title: **Kuinka pitkälle agentti saa edetä yksin?**
- Subtitle: Autonomia ansaitaan palautteella, luettavuudella ja peruttavuudella
- Sliders:
  - Vaikutusalue: paikallinen ↔ koko tuotanto
  - Peruttavuus: heti ↔ vaikea perua
  - Tarkistettavuus: koneellinen ↔ viiveellä / subjektiivinen
  - Elinikä: kertakäyttö ↔ vuosien ylläpito
- A pin marks where the address bug sits on each slider.
- Bottom: **Mitä vasemmalla, sitä pidemmälle voi delegoida.**
- Source: our synthesis ([10](10-ai-native-development-workflows.md), [11](11-workflow-scenarios-and-field-notes.md)) · `Esityksen tulkinta`. Notes: Stripe's "deterministic spine" (agent steps between fixed lint, Git and CI steps) is the real-world example. Say it aloud.

**43 · 42:10 · Browser captures (#14)** · strip: *Toista*
- Title: **Toista virhe ennen korjausta**
- Subtitle: Arvo katoaa jossain lomakkeen ja tallennuksen välissä
- Visual: two browser frames, *ennen tallennusta: B 7* and *uudelleenlatauksen jälkeen: —*, with a trace underneath: *Lomake → pyyntö → tallennus → lataus*. The break is circled.
- Bottom: **Korjaus ilman toistoa on arvaus.**
- Pair: *Agentti: toistaa ja jäljittää · Sinä: vahvistat, että tämä on oikea virhe*
- Tag: `Demotallenne` (once captured) or `Havainnollistus`

**44 · 43:20 · Code card plus checks, 3 builds** · strip: *Korjaa*
- Title: **Pieni muutos, toimiva tarkistus**
- Subtitle: Muutama rivi koodia, kolme tarkistettavaa asiaa
- Builds:
  1. A 3-line diff
  2. Check chip: *✗ ei läpi*
  3. Check chip: *✓ läpi*
  4. Browser after reload: *B 7*
- Bottom: **Testi kertoo, mitä tarkistettiin – ei sitä, mitä unohdettiin.**
- Pair: *Agentti: tekee muutoksen ja testin · Sinä: luet, mitä testi oikeasti todistaa*
- Tag: `Demotallenne` / `Opetusesimerkki`. **Never show an unrun check as passed.**

**45 · 44:50 · Verification ladder** · ↩ Gallup: *Luetko AI-koodin?* · strip: *Tarkista*
- Title: **Vihreä testi on askel, ei maali**
- Subtitle: Mitä kehittäjät tekevät AI:n vastaukselle (2026)
- Ladder:
  1. Ajaa
  2. Ratkaisee ilmoitetun ongelman
  3. Ei riko muuta
  4. Toimii uudelleenlatauksessa
  5. Käyttäjä hyväksyy
- Side evidence: *76,5 % ajaa paikallisesti · 63,9 % vertaa koodipohjaan · 53,0 % tarkistaa testit/tietoturvan · 9,6 % käyttää sellaisenaan*
- Bottom: **Mitä tarkistit – ja mitä tarkistus todisti?**
- Pair: *Agentti: kerää näytön · Sinä: päätät, riittääkö se*
- Source: Stack Overflow 2026, n = 13 162 · multiple answers allowed · self-reported · the ladder is `Esityksen tulkinta`

**46 · 45:50 · Handoff card** · strip: *Luovuta*
- Title: **Hyvä luovutus näyttää muutoksen ja näytön**
- Subtitle: Malliluovutus – näin katselmoija pääsee nopeasti kiinni
- Card:
  - **MIKSI:** huoneisto puuttui lähetetystä tiedosta
  - **MITÄ MUUTTUI:** kenttä lisättiin tallennukseen
  - **MITEN TARKISTETTIIN:** regressiotesti ja selain uudelleenlatauksen jälkeen
  - **AVOIN PÄÄTÖS:** *korjataanko vanhat tietueet, joista huoneisto jo puuttuu?*
- Bottom: **Älä tee nopeudestasi jonkun toisen katselmointivelkaa.** (callback to curl)
- Pair: *Agentti: kirjoittaa luovutuksen · Sinä: teet avoimen päätöksen*
- Tag: `Opetusesimerkki`

**47 · 47:00 · Prototype, part 2**
- Title: **Prototyyppi auttaa kysymään käyttäjältä**
- Subtitle: Huoltoesimerkki: asentaja korjaa luonnoksen
- Visual: service note → draft record → the technician's correction, shown as a strike-through plus a handwritten-style note
- Tag: `Kuvitteellinen esimerkki`
- Bottom: **Toimiva selain ei vielä todista hyödyllisyyttä.**
- Pair: *Agentti: tekee luonnoksen · Käyttäjä: kertoo, mikä on oikein*
- Notes: Ask: Where do the photos go? Who corrects a confidently wrong record? Who supports it during the busy season?

**48 · 48:10 · Full-slide meme (#25)**
- *Spider-Man pointing*: **Agentti A** and **Agentti B**, captioned *"Kumpi muutti address.ts:ää?"*. It sets up 49.

**49 · 48:20 · Branch diagram**
- Title: **Rinnakkaisuus auttaa vain erillisissä tehtävissä**
- Subtitle: Omat työpuut, yhteinen tarkistus
- Diagram: *Worktree A: regressiotesti* and *Worktree B: käyttöohje* merge into *katselmointi + yhteiset tarkistukset*. A small red-flag example: *sama tiedosto → sovi työnjako.*
- Bottom: **Useampi agentti ei korjaa epäselvää tehtävää.**
- Pair: *Agentit: tekevät erilliset osat · Sinä: suunnittelet jaon ja yhdistät*
- Source: Claude Code common workflows · `Havainnollistus`. Do not claim any speedup.

**50 · 49:30 · Loop (zoom back out to 19's chain) plus evidence card** · strip: *Seuraa*
- Title: **Julkaisu ei ole maali**
- Subtitle: Palaute, korjaus ja omistaja jatkavat työtä
- Loop: *virhe tai käyttäjän korjaus → selvitys → rajattu korjaus → tarkistukset → julkaisupäätös*. Owner and notification are labelled.
- Evidence card: *Seuraava tehtävä perii edellisen jäljet: agentin aiempi muutos heikensi seuraavan tehtävän onnistumista 5,6 %-yks. – kun aiemmat testit menivät läpi, selvää eroa ei havaittu.*
- Bottom: **Jätä seuraavalle tekijälle testit, ei arvoituksia.**
- Pair: *Agentti: seuloo ja ehdottaa · Sinä: omistat julkaisun ja ilmoitukset*
- Source: SWE-Maintain preprint, 10 October 2026 · short sequences, selected repositories, human maintainability not measured

**51 · 50:50 · Flywheel** ⏩
- Title: **Korjaa toistuva epäselvyys, älä vain viimeistä vastausta**
- Subtitle: Kun agentti tekee saman virheen kahdesti
- Loop: *virhe → mikä puuttui? → pienin pysyvä korjaus (testi · ohje · tarkistus · skill) → kokeile oikealla tehtävällä → poista vanhentunut*
- Bottom: **Muuten sama korjaus maksetaan joka kerta.**
- Source: OpenAI Codex cookbook (May and August 2026) · [10 §9](10-ai-native-development-workflows.md#9-the-improvement-flywheel)

**52 · 51:50 · One big question with three actions**
- Title: **Delegoi työ – harjoittele ymmärrystä**
- Subtitle: Kolme tapaa varmistaa, että osaaminen kasvaa
- Large: *"Mitä rikkoutuisi, jos huoneisto olisi tyhjä?"*
- Three actions: **Selitä** yksi päätös · **Ennusta** yksi virhe · **Korjaa** yksi rikottu esimerkki
- Bottom: **Ymmärrys ei synny sivutuotteena. Se pitää järjestää.**
- Tag: `Esityksen suositus`
- Notes: Refer back to slide 26 verbally. Do not show the chart again.

**53 · 53:00 · Two columns: what the agent did, what the human decided**
- Title: **Mitä agentti teki – mitä ihminen päätti?**
- Subtitle: Osoitebugi alusta loppuun
- Left, **Agentti**: etsi syyn · toisti virheen · ehdotti korjausta · kirjoitti testin · ajoi tarkistukset · kirjoitti luovutuksen
- Right, **Ihminen**: rajasi tehtävän · päätti, mitä "valmis" tarkoittaa · arvioi näytön · päätti vanhoista tietueista · päätti julkaisusta · omistaa seuraukset
- Bottom: **Agentti teki suurimman osan työstä. Ihminen teki ne päätökset, joilla on seurauksia.**
- Notes: This is the rehearsal test. A newcomer should be able to explain these two columns. It mirrors slide 37 on purpose. **54:00 is a 1-minute buffer.**

### Close · 55:00–60:00

**54 · 55:00 · Answer the title (corkboard), 1 build**
- The salmon note *Koodi halpeni. Mikä ei?* moves to the centre. On the build, *Mikä ei?* is torn off and the ransom-note words **Vastuu ei.** appear.
- Three paper labels below:
  - Koodia syntyy enemmän.
  - Varmuus ei synny samalla nopeudella.
  - Joku omistaa seuraukset joka tapauksessa.

**55 · 55:30 · Takeaways corkboard (#5)**
- Three pinned notes:
  1. **Pyydä tulosta, jonka voit tarkistaa.**
  2. **Varmista, että osaaminen kasvaa työn mukana.**
  3. **Sovi omistajuus ennen julkaisua.**
- Notes: Suggest one experiment: "Ota maanantaina yksi toistettava virhe, kirjoita neljä riviä ja katso, mitä näyttöä saat."

**56 · 56:00 · Ask-the-room handoff (#8)**
- *kysytään yleisöltä – vielä kerran*, a QR code and gallup.koodattu.dev. The closing mood question runs from 56:00 to 59:00.
- Compare only the largest categories. A more conflicted room can mean the talk worked.

**57 · 59:00 · Closing corkboard (#6)**
- Speaker cut-out, mascot, and **the same three takeaways** as 55.
- The salmon note asks: **Minkä seurauksen sinä olet valmis omistamaan?**
- Contact cards, plus *Palaute: gallup.koodattu.dev* and *Keskustelu jatkuu*.
- Small print: AI disclosure. **[CONTACTS]**

### Hidden backup slides (after 57, hidden or in a separate file)

Use these in the discussion after the hour. Each one is built like a normal content slide.

| # | Title (draft) | Source |
|---|---|---|
| B1 | **Lähettäminen on halpaa. Katselmointi on hallittua.** (Godot vs Linux contrast pair) | [09](09-veteran-lens.md), current policies |
| B2 | **Kyky saavuttaa tavoite ja lupa käyttää keinoja ovat eri asioita** (METR / Hugging Face incident, 3 beats) | [13](13-research-refresh-2026-09-05.md) |
| B3 | **Etujoukko ja arki** (Stack Overflow pulse 63 % / 68 %; Anthropic: users made ~70 % of planning decisions, agents ~80 % of execution) | [10](10-ai-native-development-workflows.md) |
| B4 | **Autonomian portaat 0–5** | [10](10-ai-native-development-workflows.md) |
| B5 | **SaaS ei kuole – ominaisuudet hinnoitellaan uudelleen** | [04 §8](04-research-notes.md) |
| B6 | **Jos ohjelmiston tekeminen halpenee 90 %…** (Jevons question) | [09](09-veteran-lens.md) |
| B7 | **Sovelluksia enemmän, latauksia ei samassa tahdissa** (App Store 2022 → 2025; no causal claim) | [04 §6](04-research-notes.md) |
| B8 | **Nuorten työllisyys Yhdysvalloissa** (Stanford 19 % relative gap, descriptive) | [17 D4](17-research-bank-2026-10-18.md) |
| B9 | **Tietoturva-AI apuna: suostumus ratkaisee** (OSS Scanner, evidence viewer) | [17 E2–E3](17-research-bank-2026-10-18.md) |
| B10 | **Julkaisu aloittaa velvollisuuksia** (CRA reporting from 11 September 2026) | [17 F5](17-research-bank-2026-10-18.md) |
| B11 | **Kuka kirjoittaa yhteisen ymmärryksen?** (Stack Overflow knowledge community) | [17 D3](17-research-bank-2026-10-18.md) |
| B12 | **Microsoft-tutkimus tarkemmin** (setting, standard error) | [13](13-research-refresh-2026-09-05.md) |
| B13 | **Konsulttiyhtiöt 2026** (**refresh first**; different periods) | [05](05-finland-and-lakeus.md) |
| B14 | **Stripe: deterministinen selkäranka** (1 300+ PRs per week, all human-reviewed) | [17 C4](17-research-bank-2026-10-18.md) |

---

## 8. Interaction map

| Time | What the room does |
|---|---|
| 03:00 | Show of hands: which kind of requests do you make? (06) |
| 05:00–15:00 | Opening gallup, 7 questions |
| 15:10 | Veterans: does this sound familiar? (09) |
| 17:40 | Guess the lowest bar (12) |
| 18:40 | What is your task's test suite? (13) |
| 20:10 | Guess the measured result (16) |
| 22:40 | Where does work wait for you? (19) |
| 27:10 | Guess which group learned better (26) |
| 28:20 | Guess which experience group is more positive (27) |
| 31:20 | Guess construction's adoption rate (32) |
| 33:20 | What is worth building here now? (34) |
| 37:40 | 20 seconds: frame your own task in four lines (39) |
| 56:00–59:00 | Closing gallup |
| 59:00 | Final question to take away (57) |

The hands-on workshop from the style template is replaced by the practical half and the Monday experiment on 55. The style guide's "would you use this?" moment becomes the maintenance-record questions on 22 and 47.

---

## 9. What we use and what we don't

### 9.1 Main deck: evidence that appears on slides

| Evidence | Slide | Caveat that must travel with it |
|---|---|---|
| NATO 1968 | 09 | The 2026 line is rhetoric |
| 4GL / CASE | 10 | Reuse rights; history, not proof |
| Brooks, Naur | 11 | Paraphrase only; AI also reaches essential work |
| Stack Overflow 2026: workflow use | 12 | n = 12 547, self-selected, multiple choice, current-use column |
| MirrorCode project page | 13 | One protocol; contamination risk; human weeks are an estimate |
| METR 2025 + February 2026 note | 16–18 | Early-2025 tools; not a current effect; never on Microsoft's axis |
| Microsoft field experiments | 17 | Completed tasks, not speed; specific assistant |
| DORA, March 2026 | 19 | 2025 data; associations; widths not measured |
| Anthropic source control ⏩ | 20 | Extreme, vendor-reported |
| OpenAI deletion case | 21 | First-party; deletion ≠ safety |
| METR task substitution | 22 | Conceptual; hypothetical effort ≠ savings |
| curl bug bounty | 24–25 | One project; not all reports were AI-made |
| Skill-formation experiment | 26 | ~17 percentage points; immediate test; not deskilling |
| Stack Overflow 2026: sentiment by experience | 27 | Association |
| Anthropic employment | 28 | Exceptional AI-vendor workplace; share ≠ jobs lost |
| Teknologiateollisuus, August | 31 | No AI effect identified; refresh before the event |
| Tilastokeskus, 2025 | 32 | Broad definition; ≥10 employees; national, not regional |
| Gofore, August | 33 | Company narrative |
| Stack Overflow 2026: trust | 36 | Response categories |
| AGENTS.md study v3 | 40 | Tested setups only; not "delete your instructions" |
| Stack Overflow 2026: verification actions | 45 | Self-reported; overlapping answers |
| SWE-Maintain | 50 | Preprint; short sequences |

### 9.2 Speaker notes only

Stanford's entry-level gap · Reddit career anxiety (as framing only, never on a slide) · DORA tokenmaxxing · Stack Overflow's 10.2 % performance-evaluation figure · Stripe on 42 · OSS Scanner on 25 · METR's 2025 study details · Microsoft standard error · the 15 % of firms with AI rules · the CAID multi-agent method · the full task prompt.

### 9.3 Backup only

Everything in B1–B14.

### 9.4 Not used at all

| Item | Reason |
|---|---|
| Model leaderboard, benchmark tables, tool or logo walls | Dates fast; turns the talk into brand preference |
| Live coding or live agent runs | Fragile and slow. Prepared captures only. |
| Prompting or installation tutorial | Wrong format |
| Geopolitics, energy, EU AI Act timeline | Off the red thread |
| "AI makes developers 26 % faster" / "19 % slower" | False generalisations |
| "Junior jobs fell 20 %", "SaaS is dead", "AI caused the Finnish downturn" | Not supported |
| Social-coding simulation preprint (2608.03585) | Simulated, not observed |
| Old Finnish figures (20 bn, +9 %, 79 200) | Superseded |
| Navy/lime palette, dark section slides, SmartArt, `ai-workbench.png` | Replaced by the style guide |
| A poll question on a slide | Questions stay in gallup.koodattu.dev |
| The HTML deck as a production base | Different medium; reference only |

---

## 10. Production plan

1. **Start from `KuopioPelaaEsitys.pptx` as a template.** Copy its masters, textures, fonts and frame layouts, then delete its content. Building the frame slides first gives the deck its identity before the content exists (style guide quick start, step 4).
2. **Make the new assets:** ransom-note words, the mascot variant and the QR codes (§4.3).
3. **Record the address-bug demo.** This is the biggest open item. Build a disposable mini app with one form and one save path, and plant the missing `apartment` field. Then run Codex or Claude Code for real and capture the reproduction, the diff, the failing and passing test, and the browser after reload. Slides 43–46 then become `Demotallenne` instead of `Havainnollistus`, which makes the practical half far stronger. Until then, every one of those slides must carry the illustrative tag.
4. **Build the native charts:** 12, 26, 27 and 32 as real PowerPoint charts with data, using the same template on each, plus the flows on 19, 38 and 50. Keep titles, subtitles and sources identical across a chart's build steps.
5. **Collect the screenshots:** curl, NATO 1968, 4GL, and the repo listing. Record each licence or source in the notes.
6. **Refresh the data during event week:** the Teknologiateollisuus outlook, Gofore and Siili (Siili's review is due 28 October), and a recheck of the Stack Overflow 2026 pages.
7. **Write speaker notes** for every slide in Finnish, with the timing, the transition sentence, full source links and the caveat to say aloud. The 23-slide deck's notes in `output/lakeus-devaus-2026-practical-notes.md` are reusable for about 15 of these slides.
8. **Run the style guide's [05-checklist](../../kuopio-pelaa-2026/presentation-style/05-checklist.md),** plus these talk-specific checks:
   - [ ] No checks shown as passed that were not actually run
   - [ ] Every `Kuvitteellinen` / `Opetus` / `Havainnollistus` tag is in place
   - [ ] Microsoft and METR never share an axis
   - [ ] The takeaways on 55 and 57 are identical
   - [ ] Both gallup handoffs work offline-to-browser, with a hands-up fallback
   - [ ] Rehearsal finishes the context half at 35:00 and the practical half at 55:00

### If running late

| Late by | Skip | Never skip |
|---|---|---|
| 1 min | 10, 20 | 43–46 (reproduce → handoff) |
| 2 min | + 51, + merge 41 into 42 orally | 53, 54, 55 |
| 3+ min | + 27, + shorten 33 to the example card | The closing gallup |

---

## 11. Open decisions for the speaker

1. **Title.** Keep *Hei ohjelmistokehitys, mitä kuuluu?* (recommended, since it is probably already announced) with the salmon-note hook? Or switch to the style-guide pattern, for example *Agentti koodaa – kehittäjät on ohi… vai onko?*
2. **Bio facts** for 03: current roles, photo, and the self-ironic line.
3. **Slide 37:** confirm each claim about what the agent did and what the speaker decided. Optionally add the gallup app's development story if its history supports a truthful reveal ([06](06-demo-and-reveal.md)).
4. **Lakeus-Devaus 2024:** did the speaker run that event? This affects the wording on 05.
5. **Record the real demo** (step 3 of §10) or keep the illustrative sequence.
6. **Memes:** are the three planned ones (14, 29, 48) right for this room? The Finnish caption text needs a final pass.
7. **Takeaway set:** the proposed three, or the earlier strategic set (*Mittaa hyväksyttyä lopputulosta ja korjaustyötä* in place of #1)?
8. **Event date:** sets the data-refresh window.
9. **Contacts** for 57.
