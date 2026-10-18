# Presentation structure: the build blueprint

**Version 2.2, 18 October 2026.** This is the blueprint the next PowerPoint is built from. It is not a finished deck.

Version 2 applies an independent review of version 1 (summarised in §12). In short:

- Corrected six evidence errors.
- Cut the deck from 57 to 48 slides.
- Moved the bug and the personal proof.
- Added interaction to the practical half.
- Removed most of the slide furniture.
- Rewrote the copy against the speaker's actual deck, not only the style guide's rules.

**Inputs:**

- **Content:** the [run of show](02-one-hour-run-of-show.md), [red thread](01-red-thread.md), [editorial backlog](07-editorial-backlog.md), the [September refresh](13-research-refresh-2026-09-05.md) and the [October research bank](17-research-bank-2026-10-18.md).
- **Style:** the speaker's style guide, `kuopio-pelaa-2026/presentation-style/` (files 01–06). Where the guide and the speaker's real deck (`KuopioPelaaEsitys.pdf`) disagree, **follow the real deck**. That is the voice the audience should hear.
- **History:** the three earlier decks in `output/*.pptx`, the HTML version and the ppt-master experiment.

**This document replaces:** the visual direction in [DESIGN.md](../DESIGN.md) and the 23-slide [storyboard](16-practical-presentation-storyboard.md).

**This document keeps:** the 5 + 10 + 20 + 20 + 5 programme, the opening gallup in gallup.koodattu.dev, and every evidence rule from the earlier documents.

Planning notes are in English and slide copy is in Finnish. The copy is a draft: shorten it freely, but keep each slide's job.

---

## 1. The talk on one page

| | |
|---|---|
| **Title** | Hei ohjelmistokehitys, mitä kuuluu? |
| **Central question (salmon note)** | **Koodi halpeni. Mikä ei?** |
| **Answer (slide 46)** | *Mitä kuuluu?* → "Kiireistä. Koodia tulee enemmän kuin ehditään lukea." · *Mikä ei?* → **Vastuu ei.** |
| **Promise** | Näet, mitä ohjelmistokehityksessä oikeasti muuttui, miten agentin kanssa edetään tehtävästä tarkistettuun muutokseen – ja saat yhden kokeilun maanantaille. |
| **Audience** | Lakeus-Devaus, Seinäjoki. A mixed room of developers, students, managers, entrepreneurs and the curious. Some people use agents daily; others avoid AI or are tired of the topic. |
| **Format** | 60 min in five blocks: 5 intro · 10 opening gallup · 20 *Mitä kuuluu?* · 20 *Miten tehdään?* (ends with the speaker's own project) · 5 takeaways and questions. Longer discussion continues after the hour. |
| **Slides** | 48 numbered slides, ~12 progressive builds, 4 humour beats, 18 hidden backup slides |
| **Three takeaways** | 1. Pyydä tulosta, jonka voit tarkistaa. · 2. Varmista, että osaaminen kasvaa työn mukana. · 3. Sovi omistajuus ennen julkaisua. |
| **Take-home experiment** | *Maanantaina: yksi toistettava virhe · neljä riviä · katso, mitä näyttöä saat.* A QR code links to the four-line template (slide 47). |

**How the title gets answered.** The style guide says the talk must answer its title explicitly. The title is a greeting, so slide 46 answers it twice:

1. The literal greeting: *Mitä kuuluu? Kiireistä.*
2. The salmon note, which the room has seen since 00:30: *Koodi halpeni. Mikä ei? Vastuu ei.*

---

## 2. Key decisions

| Decision | Why |
|---|---|
| **Use the scrapbook / paper-explainer style.** Write copy in the speaker's real voice. | The speaker asked for it, and it links this talk to the previous one. The real deck beats the guide where they differ: about half the slides get a bottom line, usually a question or a dry aside, not a moral. |
| **Keep 5 + 10 + 20 + 20 + 5.** | It is agreed. The gallup runs only at the start (speaker's decision, 18.10.2026), so the last five minutes are takeaways and questions. |
| **48 slides.** | The deck runs about 45 minutes. Cheap beats (memes, GIFs, builds) keep the pace up; dense evidence slides were cut, merged or moved to backup. |
| **The context half is a story, not a catalogue.** About 15 content slides. | DECISIONS.md rejected the "data-led industry report". Every number must earn its slide. |
| **The practical half replaces the workshop and is interactive.** | It opens with the bug itself and has five audience moments. The Monday experiment on slide 47 is the "do" part. |
| **The gallup is the warm-up, used once.** No question slides. | Its only job is to show where this room stands on GenAI and software development. Later slides call back to its answers. The deck has one *kysytään yleisöltä* handoff slide (06). No closing gallup or feedback wall. |
| **The personal proof is SuomiWoW** (43–45), at the end of the practical half. | The teaching bug shows the method; SuomiWoW shows a year of real agent-assisted work: ~1 250 commits, `AGENTS.md`/`CLAUDE.md`, production runbooks. Its data-repair runbook is the thesis in practice, and the ending climbs from the teaching bug to real work to the thesis. Chosen by the speaker on 18.10.2026. *Tämäkin esitys…* shrinks to one spoken sentence plus the disclosure on 48. |
| **Takeaway #1 changed.** *Mittaa hyväksyttyä lopputulosta ja korjaustyötä* became *Pyydä tulosta, jonka voit tarkistaa.* | The new #1 covers the practical half and echoes slide 05. Slide 17 ("Kumpaa teillä juhlitaan?") carries the measurement point. **Confirmed by the speaker on 18.10.2026.** |
| **Light furniture.** Caveats go in the `Lähde:` line, as the guide prescribes. | Version 1 stacked 8–9 extra elements per slide and some of them collided. |
| **Retire `ai-workbench.png`. Keep `maintenance-illustration.png`.** | Navy clashes with cork; the warm paper tone fits. |

---

## 3. How the style-guide arc maps to this talk

| Style beat ([04](../../kuopio-pelaa-2026/presentation-style/04-deck-template.md)) | Here | Slides |
|---|---|---|
| 1 Hook | Collage title → agenda corkboard + salmon note | 01–02 |
| 2 Who I am | Cardboard bio ("Moon härmästä"). Permission to ask is said aloud. | 03 |
| 3 Warm-up | Timeline + the gallup | 04–06 |
| 4 Basics | *Kysy vs. delegoi* | 05 |
| 5–6 What professionals / users think | Stack Overflow 2026 usage, as the bridge out of the gallup | 08 |
| 7 Why opinions differ | METR "Hetkinen…" + Microsoft | 13–15 |
| 8 Controversy case + framework | curl (2 slides) + the slop definition; the "Enemmän koodia vai vähemmän?" contradiction | 17, 19–20 |
| 9 Domain by domain | The practical lifecycle, one stage per slide | 28–42 |
| 10 What's possible now | Maintenance-record prototype | 18, 40 |
| 11 Been here before | 1968 → Brooks/Naur, right after the bridge | 09–10 |
| 12 Opportunity turn | "Mitä kannattaa nyt kokeilla?" / "Mitä täällä kannattaa nyt rakentaa?" | 18, 26 |
| 13 Answer the title | "Mitä kuuluu? Kiireistä." → "Vastuu ei." | 46 |
| 14 Personal proof | SuomiWoW: what the agent did, what I decided, a real production runbook | 43–45 |
| 15 Takeaways | Corkboard + the Monday experiment | 47 |
| 16 Workshop | The practical half + the Monday experiment | 28–42, 47 |
| 17 Close | Closing corkboard + questions (no closing gallup) | 48 |

---

## 4. Visual system

Use [01-visual-system](../../kuopio-pelaa-2026/presentation-style/01-visual-system.md) as written:

- Two surfaces, frame and content.
- `#F1ECE1` paper.
- Arial Black 32 pt titles.
- Grey subtitle.
- Aptos body.
- `#0070C0` for big numbers.
- Bungee for audience prompts.
- `Lähde:` bottom-left on every claim.

**Layout rule:** at most three or four elements in the content zone. If a slide feels full, it is two slides, or one of them is speaker notes.

### 4.1 Surfaces

| Surface | Slides |
|---|---|
| **Frame** (cork / cardboard) | 01, 02, 03, 07, 27, 46, 47, 48 |
| **Audience prompt** (paper + Bungee, as Kuopio's *kysytään yleisöltä*) | 06 |
| **Content** (paper) | Everything that argues or teaches |
| **Full-bleed** (credit only) | 12, 14, 19, 23, 33, 35, 43 (memes, GIF, comic, video, case openers) |

### 4.2 Components this topic adds

Only four new objects. Each sits on paper like a screenshot.

| Component | Spec | Slides |
|---|---|---|
| **Code card** | Dark `#20231F` card; Consolas 22–26 pt in warm white; max 6 lines. Mark changed lines with `+`/`−` **and** a pale highlight. | 30, 34 |
| **Check chip** | A pill holding the command name and the result in words: `läpi` / `ei läpi`. **Only for checks that actually ran.** Unrun checks are grey and say `odotettu: ei läpi → läpi`. | 34 |
| **Browser frame** | Thin grey chrome around a **real capture**, cropped to the form. Enlarge the relevant field at least 2×. | 28, 32, 34 |
| **Lifecycle strip** | Seven small dots top-right: *Rajaa · Konteksti · Toista · Korjaa · Tarkista · Luovuta · Seuraa*. The current dot is blue and labelled. | 29–39 |

**Gone since version 1:** the Agentti/Sinä note pair, the taped honesty tags and the gallup chips on most slides.

**Labels.** Labels move into the `Lähde:` line, and only two are used:

- `Lähde: kuvitteellinen esimerkki · …`
- `Lähde: esityksen tulkinta · …`

A recorded demo is cited as `Lähde: oma demoprojekti, tallenne <pvm>`.

**Gallup callbacks.** These live in the speaker notes. Only three slides (13, 17, 38) show a small salmon pin bottom-right, e.g. `↩ Gallup: Nopeuttaako AI sinua?`.

### 4.3 Assets

| Asset | Status |
|---|---|
| Cork, cardboard and paper textures; speaker cut-out (`mä.png`); frog | **Reuse** from `kuopio-pelaa-2026/pptx/` |
| Cardboard bio (p. 7 of the Kuopio deck) | **Reuse.** Update the roles; fix the surname capitalisation to *Ala-Rantala*. |
| Ransom-note words: `Hei`, `ohjelmistokehitys,`, `mitä`, `kuuluu?`, `Koodi`, `halpeni.`, `Mikä`, `ei?`, `Vastuu`, `ei.`, `Kiireistä.` | **Make**, using the [06](../../kuopio-pelaa-2026/presentation-style/06-ai-brief.md) prompt |
| Mascot variant: CRT robot holding a keyboard, magnifying glass, rubber duck and a red **LGTM** stamp | **Make** |
| `maintenance-illustration.png` | **Reuse** on 18 and 40 |
| SuomiWoW logo, progress screenshot (Kuopio pp. 104–105) + a repo view | **Reuse / capture** for 43–45 |
| Address-bug captures + a 20–30 s sped-up screen recording of the agent working | **Must produce** (§10). This is the biggest missing asset. |
| Screenshots: curl blog headline, NATO 1968 report page, repo `docs/` listing | **Collect** and record their sources |
| Memes, reaction GIF, 4-panel comic | **Make or recreate** with Finnish captions. The comic follows the AI-drawn style of Kuopio p. 53. |
| QR codes: gallup.koodattu.dev and the four-line template page | **Make.** Test them from the back row. |

**AI disclosure:** the speaker mentions it in one sentence on 44, and slide 48 carries it in small type.

---

## 5. What holds it together

1. **The salmon note.** Planted on 02. It rides along on the two section returns (07, 27) and in a corner pin on the first slide of sections B, C and D. It is answered on 46.
2. **One bug.** *Huoneiston numero katoaa.* It is seeded in slide 05's example request, shown concretely on 28, followed through 29–39, and recapped on 42.
3. **One hypothetical local prototype.** Service note → draft maintenance record. Introduced on 18, used as the local callback on 26, corrected by the user on 40. Always cited as `kuvitteellinen esimerkki`.
4. **"What the agent did / what a human decided."** Seeded on 05, proven on the bug on 42, shown on the speaker's own project on 44–45, generalised by the thesis on 46.
5. **The zoom.** Slide 16's chain *Tarve → Toteutus → Katselmointi → Integrointi → Julkaisu → Käyttö*. Slide 28 zooms into "Toteutus", where the practical loop lives. Slide 39 zooms back out.

**Recurring lines.** At most three:

- *Koodi halpeni. Vastuu ei.*
- *Tehtävä valmistui. Ymmärrys ei välttämättä.* (21, recalled on 41)
- *Älä tee nopeudestasi jonkun toisen katselmointivelkaa.* (seeded by curl on 20, landed on 37)

---

## 6. Running order

| Block | Time | Slides | Agenda note |
|---|---|---|---|
| Intro | 00:00–05:00 | 01–06 | — |
| Opening gallup (browser) | 05:00–15:00 | 06 on screen | — |
| **A** Mikä oikeasti muuttui? | 15:00–20:00 | 07–12 | ① |
| **B** Tuleeko meistä nopeampia? | 20:00–25:00 | 13–18 | ② |
| **C** Kuka tarkistaa – ja kuka oppii? | 25:00–30:00 | 19–23 | ③ |
| **D** Mitä tämä tarkoittaa täällä? | 30:00–35:00 | 24–27 | ④ |
| **Practical** Miten agentin kanssa tehdään töitä? | 35:00–54:00 | 28–45 (43–45: SuomiWoW) | ⑤ |
| Close | 54:00–60:00 | 46–48 | Answered |

**Agenda corkboard (slide 02).** The title shrinks to the top. Five pastel notes below:

1. Mikä ohjelmistokehityksessä oikeasti muuttui?
2. Tuleeko meistä nopeampia?
3. Kuka tarkistaa – ja kuka oppii?
4. Mitä tämä tarkoittaa täällä Lakeudella?
5. Miten agentin kanssa tehdään oikeasti töitä?

The salmon note reads **Koodi halpeni. Mikä ei?** On the build, the notes regroup under **"Mitä kuuluu? (tilannekatsaus)"** and **"Miten tehdään? (käytäntö)"**.

---

## 7. Slide by slide

**Format.** Each slide gives:

- **# · start time · slide type** (catalogue numbers from [02-slide-patterns](../../kuopio-pelaa-2026/presentation-style/02-slide-patterns.md))
- Title, subtitle, what's on the slide, bottom line (only where it adds something), `Lähde:` and notes.

⏩ means skip if late. 🙋 marks an audience moment.

### Intro · 00:00–05:00

**01 · 00:00 · Collage title (#1)**

Corkboard. Ransom-note *Hei ohjelmistokehitys, mitä kuuluu?*, the speaker cut-out and the mascot. No other text.

- Notes: open with "Agentti sanoo, että muutos on valmis. Mikä saisi teidät uskomaan sen?"

**02 · 00:30 · Agenda corkboard (#2), 1 build**

The notes from §6. The build regroups them into the two halves.

- Notes: "Tämä punainen lappu on koko illan kysymys."

**03 · 01:15 · Bio on cardboard (#3)**

The Kuopio bio, roles updated:

- Teknologiajohtaja · Clevoy Oy
- Diplomi-insinööri, tekoälytutkija · Tampereen yliopisto
- Ohjelmistokehittäjä · Prima Power
- Insinööri · Seinäjoen ammattikorkeakoulu
- **Moon härmästä.**

Photo stack on the right.

- Notes: in Seinäjoki, SeAMK and Härmä are the credentials. Say aloud: "Saa kysyä – lopussa on aikaa kysymyksille." Roles confirmed current (18.10.2026).

**04 · 02:00 · Three-point timeline (#18)**

- Title: **Kaksi vuotta sitten kysyimme täällä eri kysymystä**
- Subtitle: 2022 → 2024 → 2026
- Points:
  - **2022:** Kone täydentää rivin.
  - **Joulukuu 2024, Lakeus-Devaus:** "Saako paikallisen mallin auttamaan koodauksessa?" Small thumbnail of the event post on the Lakeus-Devaus site.
  - **2026:** "Kuinka ison tehtävän uskallamme antaa agentille?"
- Bottom: **Ja kuka tarkistaa, mitä sieltä tulee takaisin?**
- `Lähde:` Lakeus-Devaus: *Paikalliset koodaavat kielimallit* (tapahtuma 12/2024, julkaistu sivustolla 2025).
- Notes:
  - The speaker ran the 2024 event: "Kaksi vuotta sitten pidin täällä illan paikallisista koodausmalleista. Kuka oli paikalla?" (🙋 hands).
  - The years show a direction, not exact capability dates. Keep the reported attendance figure off the slide.

**05 · 03:00 · Two-column definition (#16)** 🙋

- Title: **Kysy vai delegoi?**
- Subtitle: Sama työkalu, kaksi eri pyyntöä
- Left, **Kysy:** "Selitä, miten osoitteen tallennus toimii." → *Saat selityksen.*
- Right, **Delegoi:** "Toista virhe. Korjaa syy. Näytä, että tallennus toimii." → *Saat muutoksen ja näytön.*
- Bottom: **Kumpia sinä teet useammin?** (show of hands)
- Notes:
  - Plants the bug.
  - The right-hand phrase returns as takeaway 1.
  - Neither mode ranks higher.

**06 · 04:15 · Ask-the-room handoff (#8)**

*kysytään yleisöltä*, a QR code, **gallup.koodattu.dev** and the session code. It stays on screen from 05:00 to 15:00.

- Timing: 90 s to join · ~6 min for the questions · 2.5 min on at most three patterns.
- Synthesis: use the [03](03-live-polls.md#two-minute-synthesis) sentences.
- Fallback: show of hands.

### A · Mikä oikeasti muuttui? · 15:00–20:00

**07 · 15:00 · Section return (note ① highlighted)** · 10 s

**08 · 15:10 · Progressive chart (#10), 1 build** 🙋

- Title: **Mihin AI:ta oikeasti käytetään?**
- Subtitle: Kansainvälinen kehittäjäkysely, 2026
- Horizontal bars:
  - Koodin tuottaminen tutulla alueella **69 %**
  - Testien kirjoittaminen **58 %**
  - Katselmointi **41 %**
  - Tuotannon operointi ja vianetsintä **20 %**
- Build a: only the first bar is shown. Ask: "Kuinka moni käyttää AI:ta testien kirjoittamiseen?" Build b reveals the rest.
- Bottom: **Koodia AI:lle antaa jo moni. Tuotantoa harvempi.**
- `Lähde:` Stack Overflow Developer Survey 2026 · n = 12 547 · kesä–elokuu 2026 · itse valikoitunut otos · monivalinta · tuotanto ei kuulu kaikkien työhön.
- Notes:
  - This is the bridge from the gallup: "Tässä huoneessa X % käytti AI:ta tällä viikolla. Entä maailmalla?"
  - Use the current-use column (69.3 / 58.1 / 40.5 / 19.9).

**09 · 16:10 · Historical reframe (#24)** 🙋

- Title: **Ollaanko tässä oltu ennenkin?**
- Then/now pair:
  - **1968:** Ohjelmistoa osataan tehdä enemmän kuin hallita. (NATO report page)
  - **2026:** Ohjelmistoa osataan tuottaa enemmän kuin tarkistaa. (a long PR list)
- Bottom: **Jokainen sukupolvi saa oman hopealuotinsa.**
- `Lähde:` NATO Software Engineering Conference 1968.
- Notes:
  - The 2026 line is rhetoric.
  - Ask the 20+ year group from the gallup: "Kuulostaako tutulta?"

**10 · 17:00 · Two-column (#16)**

- Title: **Kirjoittaminen helpottui. Ymmärtäminen ei.**
- Subtitle: Brooks ja Naur, luettuna vuonna 2026
- Left: **"Miten tämä kirjoitetaan?"** Syntaksi, rajapinnat, pohjakoodi. → *Tästä AI vie ison osan.*
- Right: **"Mitä tämän pitää tehdä – ja miksi?"** Vaatimukset, muutos, ymmärrys ihmisten päässä. → *Tässä AI auttaa, mutta ei omista.*
- Bottom: **Kuka ymmärtää järjestelmän, jos agentti kirjoittaa koodin?**
- `Lähde:` Brooks, *No Silver Bullet* · Naur, *Programming as Theory Building*.
- Notes: paraphrase only. AI also proposes designs, so don't claim it only removes accidental complexity.

**11 · 18:00 · Case beat with big number (#23 + #11), 1 build** 🙋

- Title: **Agentti kirjoitti ohjelman uusiksi näkemättä alkuperäistä koodia**
- Subtitle: MirrorCode: gotree, noin 16 000 riviä
- Build a, task card:
  - **Annettu:** miten ohjelman pitää käyttäytyä + testit
  - **Ei annettu:** lähdekoodia
- Build b, result: **2 000 / 2 001 testiä läpi.**
- Bottom: **Iso tehtävä onnistuu, kun tiedetään tarkalleen, mikä on oikein.**
- `Lähde:` Epoch AI & METR, MirrorCode (projektisivu 18.10.2026) · yksi protokolla · mahdollinen opetusdatan kontaminaatio.
- Notes:
  - The single failed test is the story. Ask: "Mikä olisi teidän tehtävänne testisarja?"
  - Small print can add "14 h · 251 $" **only after confirming** it is the same run as the 2 000/2 001 result. The source lists them as separate facts.
  - Keep the human-weeks estimate off the slide.

**12 · 19:30 · Full-slide meme (#25)**

*Two buttons*, sweating developer: **"Lue koko diffi"** / **"Hyväksy, kun CI on vihreä"**. Caption under the developer: **Minä, perjantaina klo 15.55.**

- Notes: no comment needed. Let it land and move on. The joke is the agenda for the next 15 minutes: speed versus checking.

### B · Tuleeko meistä nopeampia? · 20:00–25:00

*Corner pin on 13: ② Tuleeko meistä nopeampia?*

**13 · 20:00 · "Hetkinen…" progressive reveal (#10), 3 builds** 🙋 · pin `↩ Gallup: Nopeuttaako AI sinua?`

- Title: **Paljonko AI nopeuttaa kokeneita kehittäjiä?**
- Subtitle: 16 kokenutta kehittäjää, 246 tehtävää omissa repoissaan (alkuvuosi 2025)
- Builds:
  - a: **Ennakkoarvio:** 24 % nopeammin
  - b: **Jälkikäteen tuntui:** 20 % nopeammin. Pause here and let the room guess.
  - c: **Mitattu: 19 % enemmän aikaa.**
  - d: below, a separate card: *Toinen tutkimus, eri mittari: **+26 % valmistuneita tehtäviä** · 4 867 kehittäjää · koodiavustin*
- Bottom (d): **Nopeampi kenelle – ja missä tehtävässä?**
- `Lähde:` METR 2025 & päivitys 2/2026 · Microsoft Research 2025 · eri mittarit, ei samalle akselille.

**14 · 21:20 · Reaction GIF (no title)** · 5 s

Homer Simpson, *"D'oh!"* (the Kuopio deck already uses Simpsons GIFs). No caption: the room has just seen "ennakkoarvio −24 % → mitattu +19 %", so the reaction is the punchline.

- Notes: keep it to the length of one loop. Check the licence or swap in a similar reaction clip.

**15 · 21:30 · Quote-card style (#13)**

- Title: **Uusin koe ei saanut luotettavaa tulosta**
- Subtitle: …koska moni ei enää halunnut tehdä töitä ilman AI:ta.
- Three small cards:
  - osallistujat ja tehtävät valikoituivat
  - pienempi palkkio
  - rinnakkaista agenttityötä vaikea mitata
- Bottom: **Sekin kertoo jotain.**
- `Lähde:` METR, 24.2.2026.

**16 · 22:00 · Flow (#21), 2 builds** 🙋

- Title: **Koodi valmistuu nopeammin. Valmistuuko ominaisuus?**
- Visual: native chain *Tarve → Toteutus → Katselmointi → Integrointi → Julkaisu → Käyttö*. Build 1: "Toteutus" shrinks. Build 2: cards pile up before "Katselmointi".
- Bottom: **Missä teillä työ odottaa?**
- `Lähde:` esityksen tulkinta · DORA 3/2026 (vuoden 2025 aineisto) · leveydet eivät ole mitattuja.
- Notes: DORA also covers AI helping review. **Slide 28 zooms into "Toteutus".**

**17 · 23:00 · Contradiction pair (#15)** 🙋 · pin `↩ Gallup: Enemmän vai parempaa koodia?`

- Title: **Enemmän koodia vai vähemmän?**
- Subtitle: Kaksi tekoälyfirmaa, kaksi suuntaa
- Left, **Anthropic:** noin 2 500 → **yli 30 000** yhdistettyä muutosta päivässä (touko → syyskuu 2026)
- Right, **OpenAI:** **yli 800 000** riviä poistettu · yli 1 400 PR:ää · 5 insinööriä, 2 viikkoa
- Bottom: **Kumpaa teillä juhlitaan?**
- `Lähde:` Anthropic Engineering 13.10.2026 · OpenAI developer blog 14.10.2026 · yritysten omia kertomuksia · määrä ≠ arvo, poisto ≠ turvallisuus.
- Notes:
  - This slide carries the measurement point (the old takeaway #1).
  - The Stack Overflow 2026 survey found 10.2 % whose organisation evaluates AI use in performance reviews. Use it as discussion fuel only.

**18 · 24:00 · Image + record (opportunity turn)** 🙋

- Title: **Mitä kannattaa nyt kokeilla, mitä ei ennen kannattanut?**
- Subtitle: Esimerkki: huoltomuistiinpanosta luonnos huoltokirjaukseen
- Visual: `maintenance-illustration.png` + an editable draft:
  > Laite: Pumppu A · Havainto: epätavallinen ääni · Toimi: tarkista laakeri
- Bottom: **Kokeilu on halpa. Hyöty pitää silti selvittää.**
- `Lähde:` kuvitteellinen esimerkki · METR, *Task substitution and uplift* 5/2026.
- Notes: an artifact nobody would have built saves nobody money. The value is learning cheaply whether the idea helps.

### C · Kuka tarkistaa – ja kuka oppii? · 25:00–30:00

*Corner pin on 20: ③*

**19 · 25:00 · Case opener (#22)**

Full-bleed, tightly cropped screenshot of Daniel Stenberg's blog headline about ending curl's bug bounty. Credit only.

**20 · 25:20 · Case beat with timeline (#23 + #18)**

- Title: **curl lopetti bugipalkkiot**
- Subtitle: Ylläpitäjät hukkuivat heikkoihin raportteihin
- Timeline:
  - **Ennen:** palkkio löydetystä haavoittuvuudesta
  - **Sitten:** paljon heikkoja ja vilpillisiä raportteja
  - **31.1.2026:** palkkiot loppuvat – aidot raportit yhä tervetulleita
- Small card: *Esityksen määritelmä: AI-slop siirtää kohtuuttoman arviointityön jollekulle toiselle.*
- Bottom: **Lähettäminen on ilmaista. Tarkistaminen ei.**
- `Lähde:` Stenberg, daniel.haxx.se 26.1.2026 · kaikki heikot raportit eivät olleet AI:n tekemiä.
- Notes:
  - Critique the incentive, not the people.
  - For balance: Anthropic's opt-in OSS Scanner shows the same capability helps when the receiver agrees.
  - The Godot/Linux contrast is backup slide B1.

**21 · 26:20 · Progressive chart (#10), 1 build** 🙋

- Title: **Oppiiko AI:n kanssa yhtä hyvin?**
- Subtitle: 52 osallistujaa opetteli uuden Python-kirjaston – heti perään osaamiskoe
- Build a: empty 0–100 % axes; ask the room. Build b: **AI:n kanssa 50 %** · **ilman 67 %**.
- Bottom (b): **Tehtävä valmistui. Ymmärrys ei välttämättä.**
- `Lähde:` Shen & Tamkin 2026 (arXiv 2601.20245) · pyöristetyt keskiarvot · välitön koe, ei pitkäaikainen · ei nykyagenttien testi.
- Notes:
  - Gallup callback: "Luetko AI-koodin?"
  - Say "about 17 percentage points", never "17 % of skill lost".

**22 · 27:30 · Two-column with evidence card**

- Title: **AI muuttaa työtä kahdesti**
- Subtitle: Sen kautta, mitä se osaa – ja mitä uskomme sen kohta osaavan
- Left, **Mitä se tekee:** tehtävät, työkalut, tahti
- Right, **Mitä odotetaan:** ketä palkataan, mitä opetellaan, kuka mentoroi
- Card: *Yksi poikkeuksellinen työpaikka: juniorien osuus teknisistä rekrytoinneista 27 % → 9 %, vaikka rekrytointi kasvoi.*
- Bottom: **Jos ensimmäinen porras kapenee, mistä tulevat seuraavat seniorit?**
- `Lähde:` Anthropic 16.10.2026 (tekoälyfirman omat luvut).
- Notes:
  - Acknowledge career fear, never mock it.
  - The Stanford US 19 % relative gap stays in the notes.
  - The Stack Overflow 53 % vs 69 % sentiment split is backup slide B15. Its experience buckets don't match the gallup's.

**23 · 29:00 · Full-slide meme (#25)**

*"Corporate needs you to find the differences"*, captioned in Finnish:

1. **"Firma haluaa, että etsit erot näistä kahdesta PR:stä."**
2. Left picture labelled **AI kirjoitti**, right picture labelled **ihminen kirjoitti** (the same diff in both).
3. Pam: **"Ne ovat sama PR."**

- Notes: the point, spoken after the laugh: the origin doesn't tell you the quality. Someone still has to read and understand it.

### D · Mitä tämä tarkoittaa täällä? · 30:00–35:00

*Corner pin on 24: ④*

**24 · 30:00 · Big numbers (#11 ×3)**

- Title: **Suomen IT-ala ei mahdu yhteen käyrään**
- Subtitle: Toimialan tilannekuva, elokuu 2026
- Three numbers:
  - **19 mrd €** liikevaihto 2025 (+5 %)
  - **Uudet tilaukset Q2:** −12 % edelliseen neljännekseen, +6 % vuoden takaiseen
  - **~80 200** työntekijää kesäkuun lopussa (−1 % maaliskuun lopusta)
- Bottom: **Paine on todellinen. Syy ei ole yksi.**
- `Lähde:` Teknologiateollisuus, tietotekniikka-ala (elokuun katsaus; tilauskysely ei sisällä peli- ja datakeskusyrityksiä) · **päivitä ennen tilaisuutta**.
- Notes: these figures don't isolate any AI effect. Never reuse the old 20 bn / +9 % figures.

**25 · 31:00 · Progressive chart (#10), 1 build** 🙋

- Title: **Monessako yrityksessä AI on käytössä?**
- Subtitle: Vähintään 10 hengen yritykset Suomessa, kevät 2025
- Bars:
  - Tieto ja viestintä **80 %**
  - Kaikki toimialat **38 %**
  - Rakentaminen **24 %**
  - Kuljetus ja varastointi **13 %**
- Build a hides the bars. Ask: "Arvatkaa rakentaminen."
- Bottom: **Asiakkaan pullonkaula ei välttämättä ole mallin älykkyys.**
- `Lähde:` Tilastokeskus 27.11.2025 · laaja AI-määritelmä · itse ilmoitettu · koko maa, ei Etelä-Pohjanmaa.

**26 · 32:10 · Opportunity turn** 🙋

- Title: **Mitä täällä kannattaa nyt rakentaa?**
- Subtitle: Kun koodi halpenee, mikä lähellä on arvokasta?
- Four short items: tunne oikea työ · pääse käyttäjien luo · liitä nykyisiin järjestelmiin · tue käytössä
- Example card: *Asiakas ostaa myös käyttöönoton, hallinnan ja jatkuvuuden – esim. Gofore × Tampereen yliopisto, AI-alusta.*
- Corner thumbnail of the maintenance record from 18.
- Bottom: **Mikä asiakkaan ongelma jää ratkaisematta, vaikka koodi olisi ilmaista?**
- `Lähde:` esityksen tulkinta · Gofore, elokuun katsaus 11.9.2026 · Lakeus-Devaus · SEAMK Testauspaja: River IT 9/2026.
- Notes: this is a proposition; proximity guarantees nothing. "Moon härmästä" lands here.

**27 · 34:30 · Section return: halves regroup, ⑤ highlighted**

30 s. "Nyt käytäntöön."

### Practical · Miten agentin kanssa tehdään töitä? · 35:00–54:00

The lifecycle strip appears on slides 29–39. The bug is cited as `Lähde: kuvitteellinen esimerkki` until real captures exist; after that, `oma demoprojekti, tallenne <pvm>`.

**28 · 35:00 · Browser captures + small loop**

- Title: **Asiakas: huoneiston numero katoaa**
- Subtitle: Osoite tallentuu – B 7 ei
- Visual: two large browser frames, *ennen tallennusta: B 7* → *uudelleenlatauksen jälkeen: —*. Below them, small: slide 16's "Toteutus" box opens into the loop *Rajaa → Konteksti → Toista → Korjaa → Tarkista → Luovuta → Seuraa*.
- Bottom: **Agentti saa tehdä tästä ison osan. Katsotaan, mitä sinulle jää.**

**29 · 36:10 · Two-column (#16)** · strip: *Rajaa* · 🙋

- Title: **Kerro, miltä valmis näyttää**
- Left: "Korjaa osoitelomake."
- Right, four lines:
  - **Ongelma:** Huoneiston numero katoaa tallennuksessa.
  - **Tavoite:** Osoite säilyy myös uudelleenlatauksessa.
  - **Raja:** Rajapinta ja muu osoitekäytös pysyvät ennallaan.
  - **Näyttö:** Toistettu virhe, regressiotesti, toimiva tallennus.
- Bottom: **Jos et osaa sanoa, mikä riittää näytöksi, et vielä tiedä, mitä pyydät.**
- Notes:
  - 🙋 20 seconds: "Ajatelkaa yksi oma tehtävä näillä neljällä rivillä."
  - The full prompt is in [02](02-one-hour-run-of-show.md#example-task-brief).

**30 · 37:30 · Repo + code card** · strip: *Konteksti*

- Title: **Kerro agentille se, mitä koodi ei kerro**
- Subtitle: AGENTS.md (Codex) · CLAUDE.md (Claude Code)
- Left: a small repo tree.
- Right, code card:
  ```
  # Osoitteet
  - Testit: npm test -- address
  - Huoneisto on vapaaehtoinen kenttä.
  - Älä muuta /api/address-rajapintaa.
  ```
- Small note: *Tutkimus: ohjetiedostot eivät yleisesti parantaneet onnistumista – kustannus nousi yli 20 %.*
- Bottom: **Ohjeenkin pitää ansaita paikkansa.**
- `Lähde:` *Evaluating AGENTS.md* v3, 29.9.2026 · Codex- ja Claude Code -dokumentaatio.

**31 · 38:40 · Hub diagram** · strip: *Konteksti*

- Title: **Mitä agentti saa käyttää?**
- Subtitle: Vain sitä, mitä tehtävä tarvitsee
- Diagram, with the agent in the centre:
  - **Shell** → testikomento
  - **Selain** → näkyvä toiminta
  - **MCP** → tikettijärjestelmä
  - **Skill** → toistettava työtapa
- Bottom: **Enemmän työkaluja ei tarkoita parempaa agenttia.**
- `Lähde:` MCP client best practices · Codex skills · Claude Code workflows.

**32 · 39:50 · Browser captures + trace, 1 build** · strip: *Toista* · 🙋

- Title: **Ensin toistetaan, sitten korjataan**
- Subtitle: Lomake → pyyntö → tallennus → lataus
- Build a: the chain with no marks. 🙋 "Missä arvo voi kadota? Huutakaa." Build b: the break is circled, *pyynnössä ei ole huoneistoa.*
- Bottom: **Korjaus ilman toistoa on arvaus.**

**33 · 41:00 · Full-bleed video (#26)** · strip hidden · 30 s

A sped-up, real screen recording of the agent:

1. Reading the repo.
2. Running the failing test.
3. Editing.
4. Rerunning.

No title. A small credit: *oma demoprojekti, nopeutettu*.

- **Use only a real recording.** Without one, skip this slide.

**34 · 41:30 · Code card + checks, 2 builds** · strip: *Korjaa* · 🙋

- Title: **Kolme riviä ja testi**
- Subtitle: Muutos, regressiotesti ja selain uudelleenlatauksen jälkeen
- Builds:
  - a: a 3-line diff
  - b: check chips *ei läpi → läpi*
  - c: browser after reload: *B 7*
- Bottom: **Mitä tämä testi ei todista?** (🙋 take two answers)
- Notes:
  - **Without a recording, the chips are grey and say `odotettu: ei läpi → läpi`.**
  - The answer to pull out: old records, other countries' address formats, the user's actual workflow.

**35 · 42:50 · Four-panel comic (AI-drawn, as on Kuopio p. 53)**

1. Agentti, iloisena: "Valmis! Kaikki testit menee läpi."
2. Minä, kahvikuppi kädessä: "Ajoitko ne?"
3. Agentti, hiljaa: "…"
4. Agentti: "Ajan ne nyt."

Same two-character, four-panel layout and drawing style as Kuopio p. 53. Generate it with the [06](../../kuopio-pelaa-2026/presentation-style/06-ai-brief.md) workflow and disclose it.

- `Lähde:` kuvitteellinen. Disclosed as generated on 48.

**36 · 43:10 · Ladder** · strip: *Tarkista*

- Title: **"Toimii mun koneella" ei vielä riitä**
- Subtitle: 48 % vastaajista luottaa AI:hin, kun tuloksen voi helposti tarkistaa
- Ladder, bottom to top:
  - 0 Toimii mun koneella
  - 1 Käynnistyy
  - 2 Ratkaisee ilmoitetun ongelman
  - 3 Ei riko muuta
  - 4 Toimii uudelleenlatauksen jälkeen
  - 5 Käyttäjä hyväksyy
- Small evidence card: *76,5 % ajaa paikallisesti · 63,9 % vertaa koodipohjaan · 53,0 % tarkistaa testit tai tietoturvan · 9,6 % käyttää sellaisenaan*
- Bottom: **Mille portaalle sinä yleensä jäät?**
- `Lähde:` esityksen tulkinta (portaat) · Stack Overflow 2026, n = 14 304 (luottamus) ja n = 13 162 (toimet), monivalinta, itse raportoitu.
- Notes: gallup callback, "Luetko AI-koodin?"

**37 · 44:20 · Handoff card** · strip: *Luovuta*

- Title: **Hyvä luovutus: muutos ja todisteet samassa paketissa**
- Card:
  - **MIKSI:** huoneisto puuttui lähetetystä tiedosta
  - **MITÄ MUUTTUI:** kenttä lisättiin tallennukseen
  - **MITEN TARKISTETTIIN:** regressiotesti + selain uudelleenlatauksen jälkeen
  - **AVOIN PÄÄTÖS:** *korjataanko vanhat tietueet, joista huoneisto jo puuttuu?*
- Bottom: **Älä tee nopeudestasi jonkun toisen katselmointivelkaa.** (curl callback)

**38 · 45:20 · Four sliders** · strip: *Luovuta* · 🙋 · pin `↩ Gallup: Agentin PR tuotantoon?`

- Title: **Saako agentti yhdistää tämän itse?**
- Subtitle: Mitä helpompi tarkistaa ja perua, sitä pidempi lieka
- Sliders, each with a pin for the address bug:
  - Vaikutusalue: paikallinen ↔ koko tuotanto
  - Peruttavuus: heti ↔ vaikea perua
  - Tarkistettavuus: koneellinen ↔ viiveellä / makuasia
  - Elinikä: kertakäyttö ↔ vuosien ylläpito
- 🙋 **Käsi ylös: kuka antaisi?** Compare with the gallup answer.
- `Lähde:` esityksen tulkinta.
- Notes: Stripe's "deterministic spine" (agent steps between fixed lint/Git/CI steps) and the Stack Overflow pulse (63 % rarely or never allow full autopilot) are the spoken evidence.

**39 · 46:40 · Loop (zoom back out to 16) + card** · strip: *Seuraa*

- Title: **Julkaisu ei ole maali**
- Subtitle: Palaute, korjaus ja omistaja jatkavat työtä
- Loop: *virhe tai käyttäjän korjaus → selvitys → rajattu korjaus → tarkistukset → julkaisupäätös*. Label the owner and notification.
- Card: *Esijulkaisu: kun edellisen muutoksen oli tehnyt agentti, seuraava tehtävä onnistui keskimäärin 5,6 %-yksikköä harvemmin.*
- Bottom: **Mitä seuraava tekijä perii sinulta?**
- `Lähde:` SWE-Maintain, esijulkaisu 10.10.2026 · lyhyet tehtäväketjut, valitut repot.
- Notes: in the paper, requiring earlier tests to pass *widened* the gap to 14 points. Only a narrow subset (passing tests and no pre-solved next task) showed no clear difference. Don't present tests as a proven cure.

**40 · 47:50 · Prototype, part 2** 🙋

- Title: **Asentaja korjaa luonnoksen**
- Subtitle: Huoltoesimerkki, osa 2
- Visual: service note → draft record → the technician's correction (strike-through + handwritten-style note).
- Bottom: **Selain sanoo, että toimii. Asentaja sanoo, onko siitä hyötyä.**
- `Lähde:` kuvitteellinen esimerkki.
- Notes: 🙋 "Mihin kuvat menevät? Kuka korjaa väärän kirjauksen? Kuka tukee sesonkiaikana?"

**41 · 48:50 · One big question + three actions** 🙋

- Title: **Delegoi työ – mutta harjoittele ymmärrystä**
- Large: *"Mitä rikkoutuisi, jos huoneisto olisi tyhjä?"* (🙋 let the room predict)
- Three actions:
  - **Selitä** yksi päätös
  - **Ennusta** yksi virhe
  - **Korjaa** yksi rikottu esimerkki
- Bottom: **Ymmärrys ei synny sivutuotteena.**
- `Lähde:` esityksen tulkinta.
- Notes: recall 21 aloud ("Tehtävä valmistui. Ymmärrys ei välttämättä."). Don't show the chart again.

**42 · 50:00 · Two columns: what the agent did / what the human decided**

- Title: **Mitä agentti teki – mitä ihminen päätti?**
- Subtitle: Osoitebugi alusta loppuun
- **Agentti:** etsi syyn · toisti virheen · ehdotti korjausta · kirjoitti testin · ajoi tarkistukset · kirjoitti luovutuksen
- **Ihminen:** rajasi tehtävän · päätti, mitä "valmis" tarkoittaa · arvioi näytön · päätti vanhoista tietueista · päätti julkaisusta
- No bottom line.
- Notes: rehearsal test — a newcomer can explain these two columns. Bridge: "Opetusesimerkki oli pieni. Tältä sama näyttää oikeassa projektissa."

### The real project · 51:00–54:00 (end of the practical half)

SuomiWoW is the speaker's own production project. The Kuopio audience saw its features. This room sees the backstage: a year of agent-assisted work and what the owner still has to carry. Numbers come from the repository's git history on 18 October 2026.

**43 · 51:00 · Case opener (#22)** · 20 s

Full-bleed screenshot of the SuomiWoW progress page (reuse Kuopio p. 105). Credit only: *suomiwow.vaarattu.tv*.

- Notes: "Moni teistä ei pelaa WoW:ia, eikä tarvitse. Tämä on suomalaisten kiltojen tulospalvelu, jota oikeat ihmiset käyttävät joka viikko."

**44 · 51:20 · Personal proof (#14)**

- Title: **SuomiWoW: vuosi agenttien kanssa**
- Subtitle: Harrastusprojekti, oikeat käyttäjät, oikea tuotanto
- Number row: **~1 250 committia** · **12 kuukautta** · **2 ihmistä** · **~190 000 riviä koodia**
- Left, **Agentti:**
  - kirjoitti valtaosan koodista
  - toteutti ominaisuudet ja korjaukset
  - kirjoitti suunnitelmat ja ajokirjat (`docs/`)
- Right, **Minä:**
  - mitä palvelu on – ja mitä se ei ole ("ei kasinoa, ei maksullista etenemistä")
  - ettei mennyttä historiaa kirjoiteta uudelleen
  - mitä yhteisö oikeasti haluaa
  - milloin muutos menee tuotantoon
- Small visual: repo screenshot with `AGENTS.md`, `CLAUDE.md`, `PRODUCT.md` and `docs/` visible.
- Bottom: **Mitä tässä oli halpaa – ja mikä ei?**
- `Lähde:` github.com/Koodattu/suomiwow.vaarattu.tv (git log 18.10.2026).
- Notes:
  - **[CONFIRM]** the agent's share of the code and the tools used (Codex, Claude Code, Copilot all appear in the history).
  - The "Minä" lines paraphrase `PRODUCT.md` ("must not feel like monetized gacha, casino software…"; "preserve raid-tier history instead of silently rewriting past performance").
  - Say in one sentence that this presentation's research was also done with agents, and that the speaker answers for every claim on stage.

**45 · 52:30 · Code card: a real production runbook**

- Title: **Koodi oli halpaa. Tämä ei.**
- Subtitle: Oikea korjaus tuotannon dataan: hahmojen identiteetit
- Code card (shortened from `docs/character-identity-repair.md`):
  ```
  npm run repair:character-identities        # dry run, ei kirjoita mitään
  # tarkista määrät ja esimerkit
  # varmuuskopio · pysäytä workerit
  npm run repair:character-identities -- --apply
  # käynnistä · dry run uudelleen → 0 jäljellä
  ```
- Bottom: **Agentti kirjoitti korjauksen. Tuotantoon sen ajoin minä.**
- `Lähde:` suomiwow.vaarattu.tv `docs/character-identity-repair.md`, `docs/ingestion-leases.md`.
- Notes:
  - **[CONFIRM the bottom line.]**
  - Other real commits that make the same point: "Separate database backups from automatic deployment"; "Bound account repair transactions to fit production MongoDB cache"; "Fix ingestion recovery with renewable fenced leases".
  - Bridge: "Ja tästä päästään illan kysymykseen."

### Close · 54:00–60:00

**46 · 54:00 · Answer the title (corkboard), 2 builds**

- The ransom words *Mitä kuuluu?* return.
- Build 1: a pinned note, **"Kiireistä. Koodia tulee enemmän kuin ehditään lukea."**
- Build 2: the salmon note *Koodi halpeni. Mikä ei?* — *Mikä ei?* is torn off and the ransom words **Vastuu ei.** appear.
- Notes:
  - Say the three lines aloud, not on the slide: "Koodia syntyy enemmän. Varmuus ei synny samalla nopeudella. Joku omistaa seuraukset joka tapauksessa."
  - Optional human beat: "Me opimme kirjoittamalla koodia. Miten seuraavat oppivat?"

**47 · 55:00 · Takeaways corkboard (#5) + the Monday experiment**

- Three pinned notes (confirmed by the speaker 18.10.2026):
  1. **Pyydä tulosta, jonka voit tarkistaa.**
  2. **Varmista, että osaaminen kasvaa työn mukana.**
  3. **Sovi omistajuus ennen julkaisua.**
- Taped card + QR code: **Maanantaina: yksi toistettava virhe · neljä riviä · katso, mitä näyttöä saat.**
- The QR code leads to the four-line template (see §10 for hosting).

**48 · 56:00 · Closing corkboard (#6) + questions**

- Speaker cut-out, mascot and **the same three takeaways** as 47.
- Salmon note: **Minkä seurauksen sinä olet valmis omistamaan?**
- Contact cards (confirmed current): /juha-ala-rantala · /vaarattu · ala-ranta.la · juha@ala-ranta.la
- Bungee: **Kysymyksiä?**
- Small print: *Tämän esityksen tutkimuksessa ja kuvituksessa on käytetty tekoälyä.*
- Notes: 56:00–60:00 questions inside the hour. Longer discussion continues afterwards. No closing gallup.

### Hidden backup slides (after 48, hidden or in a separate file)

| # | Title (draft) | Source |
|---|---|---|
| B1 | **Lähettäminen on halpaa. Katselmointi on hallittua.** (Godot vs Linux) | [09](09-veteran-lens.md), current policies |
| B2 | **Kyky saavuttaa tavoite ja lupa käyttää keinoja ovat eri asioita** (METR / Hugging Face incident) | [13](13-research-refresh-2026-09-05.md) |
| B3 | **Ohjelmointia ilman ohjelmoijia** (4GL / CASE, 1980s) | [09](09-veteran-lens.md) |
| B4 | **Etujoukko ja arki** (SO pulse 63 % / 68 %; Anthropic 70 % planning / 80 % execution) | [10](10-ai-native-development-workflows.md) |
| B5 | **Autonomian portaat 0–5** | [10](10-ai-native-development-workflows.md) |
| B6 | **Korjaa toistuva epäselvyys, älä vain viimeistä vastausta** (improvement flywheel) | [10 §9](10-ai-native-development-workflows.md#9-the-improvement-flywheel), [17 C7–C8](17-research-bank-2026-10-18.md) |
| B7 | **SaaS ei kuole – ominaisuudet hinnoitellaan uudelleen** | [04 §8](04-research-notes.md) |
| B8 | **Jos ohjelmiston tekeminen halpenee 90 %…** (Jevons) | [09](09-veteran-lens.md) |
| B9 | **Sovelluksia enemmän, latauksia ei samassa tahdissa** (App Store; no causal claim) | [04 §6](04-research-notes.md) |
| B10 | **Nuorten työllisyys Yhdysvalloissa** (Stanford, 19 % relative gap, descriptive) | [17 D4](17-research-bank-2026-10-18.md) |
| B11 | **Tietoturva-AI apuna: suostumus ratkaisee** (OSS Scanner, evidence viewer) | [17 E2–E3](17-research-bank-2026-10-18.md) |
| B12 | **Julkaisu aloittaa velvollisuuksia** (CRA reporting from 11.9.2026) | [17 F5](17-research-bank-2026-10-18.md) |
| B13 | **Kuka kirjoittaa yhteisen ymmärryksen?** (Stack Overflow knowledge community) | [17 D3](17-research-bank-2026-10-18.md) |
| B14 | **Konsulttiyhtiöt 2026** (**refresh first**) | [05](05-finland-and-lakeus.md) |
| B15 | **Kuka suhtautuu AI:hin myönteisimmin?** (SO 2026: 53 % for 1–5 years vs 69 % for 16+ years; association only) | [17 A6](17-research-bank-2026-10-18.md) |
| B16 | **Kumpi muutti address.ts:ää?** (Spider-Man meme) | — |
| B17 | **Kaksi agenttia, kaksi worktreetä** (parallel work; pull back in if rehearsal runs short) | Claude Code common workflows |
| B18 | **Tämäkin esitys tehtiin agenttien kanssa** (the research process behind this talk) | docs/13, docs/18 |

---

## 8. Interaction map

| Time | Moment |
|---|---|
| 02:00 | Hands up: kuka oli joulukuun 2024 illassa? (04) |
| 03:00 | Show of hands: kysy vai delegoi? (05) |
| 05:00–15:00 | Opening gallup |
| 15:10 | Guess: testien kirjoittaminen % (08) |
| 16:10 | Veterans: kuulostaako tutulta? (09) |
| 18:00 | Mikä olisi teidän testisarja? (11) |
| 20:00 | Guess the measured METR result (13) |
| 22:00 | Missä teillä työ odottaa? (16) |
| 23:00 | Kumpaa teillä juhlitaan? (17) |
| 24:00 | Mitä kokeilisit nyt? (18) |
| 26:20 | Guess: kumpi ryhmä oppi paremmin (21) |
| 31:00 | Guess: rakentaminen (25) |
| 32:10 | Mikä ongelma jää ratkaisematta? (26) |
| 36:10 | 20 s: frame your own task in four lines (29) |
| 39:50 | Shout: missä arvo katoaa? (32) |
| 41:30 | Mitä tämä testi ei todista? (34) |
| 43:10 | Mihin porrasta jäät? (36, rhetorical) |
| 45:20 | Hands up: saako agentti yhdistää? (38) |
| 47:50 | Mihin kuvat menevät? (40) |
| 48:50 | Predict: mitä rikkoutuisi? (41) |
| 51:20 | Mitä tässä oli halpaa – ja mikä ei? (44) |
| 56:00–60:00 | Questions (48) |

The longest stretch without an audience moment is about 4.5 minutes (26:20–31:00).

---

## 9. What we use and what we don't

### 9.1 On slides, with the caveat that must travel with each item

| Evidence | Slide | Caveat |
|---|---|---|
| Stack Overflow 2026: workflow use | 08 | n = 12 547; self-selected; multiple choice; current-use column |
| NATO 1968 | 09 | The 2026 line is rhetoric |
| Brooks, Naur | 10 | Paraphrase; AI also reaches essential work |
| MirrorCode | 11 | One protocol; contamination; confirm 14 h / $251 is the same run before using it |
| METR 2025 + Feb 2026 note; Microsoft 2025 | 13, 15 | Different measures; never one axis; early-2025 tools |
| DORA, March 2026 | 16 | 2025 data; illustration widths |
| Anthropic source control; OpenAI deletion | 17 | "yli"; company accounts; volume ≠ value |
| METR task substitution | 18 | Conceptual; hypothetical effort ≠ savings |
| curl | 19–20 | One project; not all reports were AI-made; slop definition labelled as ours, with "kohtuuton" |
| Skill-formation experiment | 21 | ~17 pp; immediate test only |
| Anthropic employment | 22 | Exceptional vendor; hiring share ≠ jobs lost |
| Teknologiateollisuus, August | 24 | −1 % is vs end of March; refresh |
| Tilastokeskus 2025 | 25 | ≥10 employees; broad definition; national |
| Gofore | 26 | Company narrative |
| AGENTS.md study v3 | 30 | Tested setups; "context files", not only generated ones |
| Stack Overflow 2026: trust + verification actions | 36 | Response categories; self-reported; overlapping |
| SWE-Maintain | 39 | Preprint; 5.6 pp average; tests are not a proven cure |
| SuomiWoW repository (git log, `PRODUCT.md`, `docs/`) | 44–45 | The speaker's own project; numbers from git on 18.10.2026, refresh in event week; confirm the agent's share |

### 9.2 Speaker notes only

Stanford's entry-level gap · Reddit career anxiety (framing only) · DORA tokenmaxxing · Stack Overflow's 10.2 % performance-evaluation figure · Stripe and the SO pulse (38) · OSS Scanner (20) · Microsoft standard error · the 15 % of firms with documented AI rules · the full task prompt · the SWE-Maintain subset detail.

### 9.3 Not used

| Item | Reason |
|---|---|
| Model leaderboards, tool or logo walls | Date fast |
| Live coding / live agent runs | Fragile. Prepared captures only. |
| Prompting or install tutorial | Wrong format |
| Geopolitics, energy, AI Act timeline | Off the thread |
| "26 % faster" / "19 % slower" as general claims | False generalisations |
| A trend line fusing METR "−19 %" into later "+100 % / +200 %" figures, as on **Kuopio p. 61** | Mixes measures and studies. **Don't reuse that slide.** |
| "Junior jobs fell 20 %", "SaaS is dead", "AI caused the Finnish downturn" | Unsupported |
| Social-coding simulation preprint (2608.03585) | Simulated, not observed |
| Old Finnish figures (20 bn, +9 %, 79 200) | Superseded |
| Navy/lime palette, dark section slides, SmartArt, `ai-workbench.png` | Replaced |
| Poll questions on slides | Questions stay in gallup.koodattu.dev |
| Per-slide Agentti/Sinä notes, taped honesty tags, six label variants | Furniture overload; caveats go in `Lähde:` |

---

## 10. Production plan

1. **Template.** Start from `KuopioPelaaEsitys.pptx`: copy its masters, textures, fonts and frame layouts, then delete the content. Build the frame slides first.
2. **New assets** (§4.3).
3. **Record the demo** — the most important open item.
   - Build a disposable mini app: one form, one save path, and a missing `apartment` field.
   - Run Codex or Claude Code for real.
   - Capture the reproduction, the 20–30 s sped-up recording, the diff, the failing → passing test and the browser after reload.
   - With the recording, slides 28 and 32–34 become evidence. Without it, slide 33 is skipped and the chips on 34 stay grey.
4. **Host the four-line template** behind slide 47's QR code. Recommended: a short page in this public repo, `docs/maanantain-kokeilu.md`, holding the four-line brief, one filled-in example and a link to the sources. One QR then gives both the template and the evidence. No new hosting needed.
5. **Native charts and flows.**
   - Charts: 08, 13, 21, 25. Keep the title, subtitle and source identical across each chart's builds.
   - Flows: 16, 28, 39.
6. **Screenshots:** the 2024 event post on the Lakeus-Devaus site, curl, NATO 1968, SuomiWoW (progress page from Kuopio p. 105; a repo view showing `AGENTS.md`, `CLAUDE.md`, `PRODUCT.md`, `docs/`). Record their sources. Refresh the SuomiWoW numbers from git during event week.
7. **Event-week data refresh:**
   - Teknologiateollisuus outlook.
   - Gofore.
   - Siili, if it's discussed. Its next review is due 28 October.
   - Recheck the Stack Overflow 2026 pages.
   - Confirm the MirrorCode run detail.
8. **Finnish speaker notes** for every slide: timing, transition sentence, full source links, the caveat to say aloud. Reuse from `output/lakeus-devaus-2026-practical-notes.md` where the slides overlap.
9. **Checks.** Run [05-checklist](../../kuopio-pelaa-2026/presentation-style/05-checklist.md), plus:
   - [ ] No check shown as passed unless it actually ran
   - [ ] Every hypothetical or interpretive slide says so in `Lähde:`
   - [ ] Microsoft and METR never share an axis
   - [ ] Takeaways on 47 and 48 are identical
   - [ ] The gallup handoff works, with a show-of-hands fallback
   - [ ] Rehearsal hits 35:00, 51:00 and 54:00

### If running late

| Late by | Skip | Never skip |
|---|---|---|
| 1 min | 14, 35 | 28–37 (bug → handoff) |
| 2 min | + 40, + compress 31 into one sentence on 30 | 44–47 |
| 3+ min | + 23, + 26 to its example card only, + shorten questions | 46–48 |

---

## 11. Open decisions for the speaker

**Settled on 18.10.2026:** takeaway #1 swap confirmed; bio and contacts current; SuomiWoW is the personal proof; the gallup runs only at the start; the speaker ran the December 2024 Lakeus-Devaus event (slide 04 updated); the humour beats have had their final caption pass (12, 14, 23, 35).

1. **SuomiWoW lines (44–45):** confirm the agent's share of the code, the tools used, and "Tuotantoon sen ajoin minä".
2. **Record the demo** (§10 step 3)? It decides whether slides 28 and 32–34 are evidence or illustration.
3. **Four-line template behind slide 47's QR:** recommended home is this public repo (§10 step 4).
4. **Event date: unknown.** Until it is set:
   - every number on a slide carries its own date or vintage;
   - run §10 step 7 in event week.
   
   Data that will change in the meantime:
   - Teknologiateollisuus publishes a new IT-sector outlook each quarter (slide 24).
   - Statistics Finland's annual enterprise AI release came out on 27.11.2025, so a 2026 release is likely around late November 2026 (slide 25).
   - Siili's business review is due 28.10.2026 (backup B14).
   - If the event moves into mid-2027, a new Stack Overflow survey replaces slides 08 and 36.
5. **Title:** keep *Hei ohjelmistokehitys, mitä kuuluu?* (recommended) or switch to the guide's pattern.

---

## 12. Changes from version 1 (after the independent review)

| Area | Change |
|---|---|
| **Accuracy** | SWE-Maintain card corrected (39). Personal-proof lines corrected (45). "yli" added (17). Slop definition labelled as ours and with "kohtuuton" (20). Finnish employment −1 % now says "maaliskuun lopusta" (24). MirrorCode run detail flagged for confirmation (11). AGENTS.md wording matched to v3 (30). Timeline subtitle fixed (04). Mismatched gallup callback removed (old 27 → B15). |
| **Structure** | 57 → 49 slides. The 4GL slide, flywheel and sentiment slide moved to backup. Microsoft folded into the METR reveal. Anthropic/OpenAI merged into one contradiction pair. Gofore folded into the local slide. The 48 % trust stat moved into the ladder. Permission slide cut (said aloud). Section returns reduced from five to two plus corner pins. |
| **Practical half** | Opens with the bug itself. Five audience moments added. A real 30 s agent recording added. The prototype moved after the handoff. The personal proof moved to the close. |
| **Ending** | Answers the literal title ("Kiireistä…") and the salmon note. One summary only. The Monday experiment is on a slide, with a QR code. |
| **Style** | Bottom lines on about half the slides, mostly questions or dry asides. Plainer titles. The Kuopio bio reused. Five humour beats, including an AI-drawn comic as on Kuopio p. 53. Slide furniture cut to four components. |
| **Version 2.1 (speaker feedback, 18.10.2026)** | SuomiWoW replaces "Tämäkin esitys" as the personal proof (43–45), including a real production runbook. The closing gallup is dropped; the gallup is only the opening gauge. The close ends with questions inside the hour. Parallel-work slides moved to backup. 48 slides. Takeaways, bio and contacts confirmed. |
| **Version 2.2 (18.10.2026)** | Slide 04 states the speaker ran the 2024 event, with a hands-up callback. Final caption pass on the humour beats (12, 14, 23, 35). Finnish copy fixes on 08, 11, 36, 39 and 45. Event-date handling added to §11. |
