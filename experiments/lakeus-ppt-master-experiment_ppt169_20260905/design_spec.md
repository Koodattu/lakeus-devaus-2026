<!-- ppt-master-schema: design-spec/v1 -->
# Lakeus-Devaus ppt-master experiment - Design Spec

## I. Project Information

| Item | Value |
| --- | --- |
| Project Name | lakeus-ppt-master-experiment |
| Canvas Format | ppt169 1280×720 |
| Page Count | 23 |
| Primary Language | fi-FI |
| Target Audience | Finnish developers, students, managers and adjacent professionals |
| Communication Intent | Explain current AI development evidence, then teach a practical end-to-end task workflow |
| Desired Audience Outcome | Audience can scope one task and name the evidence needed to assess its result |
| Core Message / Ask / Action | Koodi halpeni. Vastuu ei. |
| Delivery Context | Presenter-led 60-minute Lakeus-Devaus talk: 5 intro, 10 browser gallup, 20 context, 20 practical, 5 ending |
| Artifact Afterlife | Editable separate experimental deck for comparison and rehearsal |
| Reading Mode | presentation |
| Content Strategy | Preserve the current 23-slide argument, timings and factual limits; redesign visual expression freely |
| Design Style | Editorial field guide with asymmetric type and evidence figures |
| AI Image Acquisition Path | not applicable; reuse existing generated assets with provenance |
| Generation Mode | continuous |
| Spec Refinement | disabled |
| Speaker Notes | enabled — existing user brief |
| Custom Animations | disabled — resolved experiment production policy |
| Narration Audio | disabled — workflow default |
| Created Date | 2026-09-05 |

## II. Canvas Specification

| Property | Value |
| --- | --- |
| Format | PPT 16:9 |
| Dimensions | 1280 × 720 |
| viewBox | `0 0 1280 720` |
| Margins | 64 px |
| Content Area | x 64–1216, y 48–672 |

## III. Visual Theme

### Theme Style

- **Mode**: custom
- **Mode References**: instructional
- **Mode Behavior**: Explain the current evidence first, then carry one bounded software task through context, tools, correction, review and feedback, ending with a usable task pattern.
- **Visual style**: custom
- **Visual Style References**: editorial, swiss-minimal
- **Visual Style Behavior**: Use editorial hierarchy and asymmetric columns for research and worked examples, with Swiss planar geometry, bold sans type and broad whitespace. Large statistics and dark section fields change emphasis with the page job. Flat lines carry relationships and the address example retains its positions through its consecutive states.
- **Theme**: The recurring visual unit is a task and its observable evidence; vary its scale and position between research and practical sections.
- **Tone**: Curious, concrete, technically credible and approachable.

### Color Scheme

| Role | HEX | Purpose |
| --- | --- | --- |
| Background | #F4F0E7 | Light reading field |
| Secondary background | #10243A | Dark anchor field |
| Primary | #10243A | Headings and structure |
| Accent | #2563EB | Evidence and active task |
| Secondary accent | #D8F36A | Focus on dark fields |
| Body text | #162A3D | Main prose |
| Secondary text | #52616B | Source and scope captions |
| Divider | #CBD3D8 | Relationships and separators |
| Inverse | #F8FAFC | Text on dark fields |
| Warning | #C45635 | Lost value and open issue |

### AI Image Strategy

- **Image Rendering**: custom
- **Visual**: Reused print-textured illustrations, unchanged pixels.
- **Mood**: Human workplace and practical craft.
- **Image Rendering Behavior**: Existing workbench and maintenance illustrations use cut-paper-like surfaces and fine print grain. Their material and depth remain unchanged; editable typography and evidence sit outside them.

## IV. Typography System

### Font Plan

| Role | Character (Reference) | Primary | English if non-English | Fallback tail |
| --- | --- | --- | --- | --- |
| Title | Bold sans concord | Arial | Arial | sans-serif |
| Body | Open neutral sans | Arial | Arial | sans-serif |
| Code | Literal monospaced excerpt | Courier New | Courier New | monospace |

- **Title stack**: Arial
- **Body stack**: Arial
- **Code stack**: Courier New
- **Role rationale**: Code uses a distinct mono face for exact field names and syntax.

### Font Size Hierarchy

| Purpose | Anchor Size (px) |
| --- | ---: |
| Body | 32 |
| Title | 48 |
| Subtitle | 40 |
| Annotation | 24 |
| Footnote | 20 |
| Display | 96 |
| Code | 28 |

## V. Layout Principles

### Deck-wide Direction

- **Hierarchy direction**: Main point, evidence or worked object, then its boundary.
- **Composition tendency**: Unequal visual weight by message, peers comparable when appropriate.
- **Cross-page continuity**: Address fields persist through task, reproduction, fix and handoff.
- **Spacing posture**: Variable by information density with large section resets.
- **Spacing anchors**: page margin 64; block gap 32; column gutter 48; corner radius 0; body leading 48 px.

## VI. Icon Usage Specification

- **Primary bundled library**: none

| Icon Path | Suitable Scenarios |
| --- | --- |

## VII. Visualization Reference List

| Page | Family | Template | Usage |
| --- | --- | --- | --- |
| P07 | chart | horizontal_bar_chart | Compare immediate quiz scores on a common 0–100 scale |

## VIII. Image Resource List

| Filename | Dimensions | Ratio | Purpose | Type | Image pattern | Crop Policy | Acquire Via | Status | Reference | text_policy | page_role |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ai-workbench.png | 1672×941 | 1.78 | Opening setting | Illustration | Full background with quiet left title region | adaptive | ai | Generated | Existing imagegen illustration from 5 September 2026, reused unchanged | none | hero_page |
| maintenance-illustration.png | 1254×1254 | 1.00 | Concrete fictional maintenance setting | Illustration | Large square image beside the proposed record | no-crop | ai | Generated | Existing imagegen illustration from 5 September 2026, explicitly fictional | none | local |

## IX. Content Outline

### Part 1: Context and practical workflow

#### Slide 01 - Hei ohjelmistokehitys, mitä kuuluu?

- **Audience move**: Understand hei ohjelmistokehitys, mitä kuuluu? through the example or evidence.
- **Relationships**: none
- **Composition**: Illustrated cover with large title
- **Title**: Hei ohjelmistokehitys, mitä kuuluu?
- **Core message**: Kaksi kysymystä: mikä muuttui ja miten AI:n kanssa tehdään työtä. Lakeus-Devaus 2026.
- **Content**: Kaksi kysymystä: mikä muuttui ja miten AI:n kanssa tehdään työtä. Lakeus-Devaus 2026. Time 00:00–02:00.
- **Cover impact**: Hook: what changed in software work and how to use it.
- **Images**: ai-workbench.png establishes an illustrative workbench, with native title.

#### Slide 02 - Pyydä tulosta, jonka voit tarkistaa

- **Audience move**: Understand pyydä tulosta, jonka voit tarkistaa through the example or evidence.
- **Relationships**: contrast explanation and delegated task
- **Composition**: Asymmetric contrast anchored by a task request
- **Title**: Pyydä tulosta, jonka voit tarkistaa
- **Core message**: Selitys: selitä osoitteen tallennus. Delegointi: toista virhe, korjaa rajattu syy, näytä toimiva tallennus. Alkugallup 05:00–15:00 selaimessa.
- **Content**: Selitys: selitä osoitteen tallennus. Delegointi: toista virhe, korjaa rajattu syy, näytä toimiva tallennus. Alkugallup 05:00–15:00 selaimessa. Time 02:00–05:00.

#### Slide 03 - Toteutus helpottuu. Vaikeat kysymykset jäävät.

- **Audience move**: Understand toteutus helpottuu. vaikeat kysymykset jäävät. through the example or evidence.
- **Relationships**: membership implementation in software work
- **Composition**: Implementation within a larger work system
- **Title**: Toteutus helpottuu. Vaikeat kysymykset jäävät.
- **Core message**: Tarve, ymmärrys, toteutus, ylläpito. Toteutus on osa kokonaisuutta. Brooks ja Naur taustana muistiinpanoissa.
- **Content**: Tarve, ymmärrys, toteutus, ylläpito. Toteutus on osa kokonaisuutta. Brooks ja Naur taustana muistiinpanoissa. Time 15:00–17:00.

#### Slide 04 - Rajattu tehtävä voi edetä pitkälle itsenäisesti

- **Audience move**: Understand rajattu tehtävä voi edetä pitkälle itsenäisesti through the example or evidence.
- **Relationships**: order reference, implementation, verification
- **Composition**: Three-stage reference and feedback chain
- **Title**: Rajattu tehtävä voi edetä pitkälle itsenäisesti
- **Core message**: MirrorCode: referenssin käyttäytyminen, toteutus, vertailu/testit. Valittu toiminnallisuus erillisessä tutkimusympäristössä.
- **Content**: MirrorCode: referenssin käyttäytyminen, toteutus, vertailu/testit. Valittu toiminnallisuus erillisessä tutkimusympäristössä. Time 17:00–20:00.

#### Slide 05 - Tuottavuus riippuu tehtävästä

- **Audience move**: Understand tuottavuus riippuu tehtävästä through the example or evidence.
- **Relationships**: contrast two distinct study boundaries
- **Composition**: Two hero statistics with separate measures
- **Title**: Tuottavuus riippuu tehtävästä
- **Core message**: Microsoft: 26 % enemmän valmistuneita tehtäviä, 4 867 kehittäjää, kolme kenttäkoetta. METR alkuvuosi 2025: 19 % enemmän aikaa, 16 kokenutta kehittäjää tutuissa repoissa. Eri mittarit. Jatkotutkimus ei antanut luotettavaa 2026 arviota.
- **Content**: Microsoft: 26 % enemmän valmistuneita tehtäviä, 4 867 kehittäjää, kolme kenttäkoetta. METR alkuvuosi 2025: 19 % enemmän aikaa, 16 kokenutta kehittäjää tutuissa repoissa. Eri mittarit. Jatkotutkimus ei antanut luotettavaa 2026 arviota. Time 20:00–23:00.

#### Slide 06 - Nopeampi tehtävä ei yksin nopeuta toimitusta

- **Audience move**: Understand nopeampi tehtävä ei yksin nopeuta toimitusta through the example or evidence.
- **Relationships**: order implementation, review, integration, use
- **Composition**: Sequential work with one waiting point
- **Title**: Nopeampi tehtävä ei yksin nopeuta toimitusta
- **Core message**: Toteutus, katselmointi, integrointi, käyttö. Missä työ odottaa? Esimerkkiketju, ei mitattu ajankäytön jakauma.
- **Content**: Toteutus, katselmointi, integrointi, käyttö. Missä työ odottaa? Esimerkkiketju, ei mitattu ajankäytön jakauma. Time 23:00–25:00.

#### Slide 07 - Valmis tehtävä ja opittu taito ovat eri tuloksia

- **Audience move**: Understand valmis tehtävä ja opittu taito ovat eri tuloksia through the example or evidence.
- **Relationships**: contrast quiz score by study group
- **Composition**: Large horizontal bar chart and study scope
- **Title**: Valmis tehtävä ja opittu taito ovat eri tuloksia
- **Core message**: Välitön osaamiskoe uudesta Python-kirjastosta, 52 osallistujaa. AI-avusteinen 50 %, ilman AI:ta 67 %. Tekijöiden pyöristetyt keskiarvot. Ei mittaa pysyvää taitojen menetystä.
- **Content**: Välitön osaamiskoe uudesta Python-kirjastosta, 52 osallistujaa. AI-avusteinen 50 %, ilman AI:ta 67 %. Tekijöiden pyöristetyt keskiarvot. Ei mittaa pysyvää taitojen menetystä. Time 25:00–28:00.
- **Visualization**: quiz-scores: horizontal_bar_chart, 50 and 67 percent, domain 0–100.
- **Native-ready**: quiz-scores=yes

#### Slide 08 - AI tekee uusista kokeiluista mahdollisia

- **Audience move**: Understand ai tekee uusista kokeiluista mahdollisia through the example or evidence.
- **Relationships**: link maintenance note and editable record
- **Composition**: Large illustration beside a sample record
- **Title**: AI tekee uusista kokeiluista mahdollisia
- **Core message**: Kuvitteellinen huoltokirjaus: Pumppu A, epätavallinen ääni, tarkista laakeri. Luonnos vaatii asentajan tarkistuksen.
- **Content**: Kuvitteellinen huoltokirjaus: Pumppu A, epätavallinen ääni, tarkista laakeri. Luonnos vaatii asentajan tarkistuksen. Time 28:00–30:00.
- **Images**: maintenance-illustration.png gives context, not evidence of a deployed product.
- **Data class**: scenario

#### Slide 09 - Työssä tarvitaan myös tilaa oppia

- **Audience move**: Understand työssä tarvitaan myös tilaa oppia through the example or evidence.
- **Relationships**: order try, explain, feedback, change
- **Composition**: Open learning loop
- **Title**: Työssä tarvitaan myös tilaa oppia
- **Core message**: Kokeile, selitä, palaute, muuta. Oppiminen tarvitsee aikaa ja oikeita tehtäviä. Stanford-rajaukset muistiinpanoissa.
- **Content**: Kokeile, selitä, palaute, muuta. Oppiminen tarvitsee aikaa ja oikeita tehtäviä. Stanford-rajaukset muistiinpanoissa. Time 30:00–32:00.

#### Slide 10 - Paikallinen etu syntyy työn tuntemisesta

- **Audience move**: Understand paikallinen etu syntyy työn tuntemisesta through the example or evidence.
- **Relationships**: contrast sector observations and local interpretation
- **Composition**: One dominant sector figure and three local capabilities
- **Title**: Paikallinen etu syntyy työn tuntemisesta
- **Core message**: Suomen IT-ala: liikevaihto 19 mrd euroa ja +5 % vuonna 2025, 80 200 työntekijää kesäkuussa 2026. Paikallisen edun tulkinta: työn tunteminen, integraatiot, tuki.
- **Content**: Suomen IT-ala: liikevaihto 19 mrd euroa ja +5 % vuonna 2025, 80 200 työntekijää kesäkuussa 2026. Paikallisen edun tulkinta: työn tunteminen, integraatiot, tuki. Time 32:00–35:00.

#### Slide 11 - Näin tehtävä etenee AI:n kanssa

- **Audience move**: Understand näin tehtävä etenee ai:n kanssa through the example or evidence.
- **Relationships**: order scope, investigate, implement, verify, observe
- **Composition**: Dark lifecycle map
- **Title**: Näin tehtävä etenee AI:n kanssa
- **Core message**: Rajaa, tutki, toteuta, tarkista, seuraa. Codex ja Claude Code. Esimerkki: huoneiston numero katoaa osoitteen tallennuksessa.
- **Content**: Rajaa, tutki, toteuta, tarkista, seuraa. Codex ja Claude Code. Esimerkki: huoneiston numero katoaa osoitteen tallennuksessa. Time 35:00–37:00.

#### Slide 12 - Hyvä tehtävä kertoo, miltä valmis näyttää

- **Audience move**: Understand hyvä tehtävä kertoo, miltä valmis näyttää through the example or evidence.
- **Relationships**: membership four parts of task brief
- **Composition**: Four-part brief with evidence emphasized
- **Title**: Hyvä tehtävä kertoo, miltä valmis näyttää
- **Core message**: Ongelma: huoneisto katoaa. Tavoite: säilyy latauksessa. Raja: säilytä rajapinta. Näyttö: toisto, testi ja tallennus. Tutki ensin syy ja ehdota pienin korjaus.
- **Content**: Ongelma: huoneisto katoaa. Tavoite: säilyy latauksessa. Raja: säilytä rajapinta. Näyttö: toisto, testi ja tallennus. Tutki ensin syy ja ehdota pienin korjaus. Time 37:00–39:00.
- **Data class**: scenario

#### Slide 13 - Anna agentille projektin oma totuus

- **Audience move**: Understand anna agentille projektin oma totuus through the example or evidence.
- **Relationships**: link project files and persistent instructions
- **Composition**: Repository tree beside persistent instructions
- **Title**: Anna agentille projektin oma totuus
- **Core message**: Opetusesimerkin repo: src/address.ts, tests/address.test.ts, package.json, README.md. Codex AGENTS.md ja Claude Code CLAUDE.md: komennot, tavat, rajat.
- **Content**: Opetusesimerkin repo: src/address.ts, tests/address.test.ts, package.json, README.md. Codex AGENTS.md ja Claude Code CLAUDE.md: komennot, tavat, rajat. Time 39:00–41:00.
- **Data class**: scenario

#### Slide 14 - Työkalut tuovat tehtävän äärelle

- **Audience move**: Understand työkalut tuovat tehtävän äärelle through the example or evidence.
- **Relationships**: link agent with project tools
- **Composition**: Agent with four connected capabilities
- **Title**: Työkalut tuovat tehtävän äärelle
- **Core message**: Agentti käyttää shelliä projektin komentoihin, selainta näkyvän toiminnan tarkistukseen, MCP:tä liitettyyn palveluun ja skilliä toistettavaan työtapaan. Tarvittavat oikeudet.
- **Content**: Agentti käyttää shelliä projektin komentoihin, selainta näkyvän toiminnan tarkistukseen, MCP:tä liitettyyn palveluun ja skilliä toistettavaan työtapaan. Tarvittavat oikeudet. Time 41:00–43:00.

#### Slide 15 - Toista virhe ennen korjausta

- **Audience move**: Understand toista virhe ennen korjausta through the example or evidence.
- **Relationships**: order entry, save, reload
- **Composition**: Two moments sharing the same address form
- **Title**: Toista virhe ennen korjausta
- **Core message**: Havainnollistettu opetusesimerkki: Esimerkkikatu 12, huoneisto B 7 ennen tallennusta. Uudelleenlatauksessa huoneisto puuttuu. Seuraa arvoa lomakkeesta payloadiin, tallennukseen ja takaisin.
- **Content**: Havainnollistettu opetusesimerkki: Esimerkkikatu 12, huoneisto B 7 ennen tallennusta. Uudelleenlatauksessa huoneisto puuttuu. Seuraa arvoa lomakkeesta payloadiin, tallennukseen ja takaisin. Time 43:00–45:00.
- **Data class**: scenario

#### Slide 16 - Pieni muutos tarvitsee toimivan tarkistuksen

- **Audience move**: Understand pieni muutos tarvitsee toimivan tarkistuksen through the example or evidence.
- **Relationships**: link bounded fix with verification cases
- **Composition**: Enlarged code paired with three checks
- **Title**: Pieni muutos tarvitsee toimivan tarkistuksen
- **Core message**: Korjausidea: const payload = { street: form.street, apartment: form.apartment }; Tarkista B 7, tyhjä huoneisto ja uudelleenlataus. Havainnollistus, ei raportti ajetuista testeistä.
- **Content**: Korjausidea: const payload = { street: form.street, apartment: form.apartment }; Tarkista B 7, tyhjä huoneisto ja uudelleenlataus. Havainnollistus, ei raportti ajetuista testeistä. Time 45:00–47:00.
- **Data class**: scenario

#### Slide 17 - Hyvä luovutus näyttää muutoksen ja näytön

- **Audience move**: Understand hyvä luovutus näyttää muutoksen ja näytön through the example or evidence.
- **Relationships**: membership cause, change, evidence, open decision
- **Composition**: Readable review note with one open question
- **Title**: Hyvä luovutus näyttää muutoksen ja näytön
- **Core message**: Malliluovutus: syy oli payloadista puuttuva huoneisto, muutos lisää kentän. Liitä oikeasti ajettu testi ja selaintarkistus. Avoin päätös: vanhan datan korjaus. Ei julkaistu PR.
- **Content**: Malliluovutus: syy oli payloadista puuttuva huoneisto, muutos lisää kentän. Liitä oikeasti ajettu testi ja selaintarkistus. Avoin päätös: vanhan datan korjaus. Ei julkaistu PR. Time 47:00–49:00.
- **Data class**: scenario

#### Slide 18 - Prototyyppi auttaa kysymään käyttäjältä

- **Audience move**: Understand prototyyppi auttaa kysymään käyttäjältä through the example or evidence.
- **Relationships**: order note, draft, correction
- **Composition**: Three stages with user correction emphasized
- **Title**: Prototyyppi auttaa kysymään käyttäjältä
- **Core message**: Kuvitteellinen huoltotyö: muistiinpano, luonnos, asentajan korjaus. Selain tarkistaa toiminnan, käyttäjäkokeilu hyödyllisyyden.
- **Content**: Kuvitteellinen huoltotyö: muistiinpano, luonnos, asentajan korjaus. Selain tarkistaa toiminnan, käyttäjäkokeilu hyödyllisyyden. Time 49:00–51:00.
- **Data class**: scenario

#### Slide 19 - Rinnakkaisuus auttaa erillisissä tehtävissä

- **Audience move**: Understand rinnakkaisuus auttaa erillisissä tehtävissä through the example or evidence.
- **Relationships**: order independent tasks then shared integration
- **Composition**: Two branches converge at integration
- **Title**: Rinnakkaisuus auttaa erillisissä tehtävissä
- **Core message**: Worktree A: regressiotesti. Worktree B: käyttöohje. Katselmointi, yhdistäminen, yhteiset tarkistukset. Sama tiedosto vaatii työnjaon. Ei luvattua nopeuskerrointa.
- **Content**: Worktree A: regressiotesti. Worktree B: käyttöohje. Katselmointi, yhdistäminen, yhteiset tarkistukset. Sama tiedosto vaatii työnjaon. Ei luvattua nopeuskerrointa. Time 51:00–52:30.
- **Data class**: scenario

#### Slide 20 - Julkaisun jälkeen palaute jatkaa työtä

- **Audience move**: Understand julkaisun jälkeen palaute jatkaa työtä through the example or evidence.
- **Relationships**: order observation, investigation, fix, check
- **Composition**: Operational loop with an accountable owner
- **Title**: Julkaisun jälkeen palaute jatkaa työtä
- **Core message**: Havainto, tutki, korjaa, tarkista. Sovi seurattava asia, ilmoituksen vastaanottaja ja julkaisupäätöksen tekijä.
- **Content**: Havainto, tutki, korjaa, tarkista. Sovi seurattava asia, ilmoituksen vastaanottaja ja julkaisupäätöksen tekijä. Time 52:30–54:00.

#### Slide 21 - Delegoi työ ja harjoittele ymmärrystä

- **Audience move**: Understand delegoi työ ja harjoittele ymmärrystä through the example or evidence.
- **Relationships**: order predict, explain, check
- **Composition**: Single question at large scale
- **Title**: Delegoi työ ja harjoittele ymmärrystä
- **Core message**: Mitä rikkoutuisi, jos huoneisto olisi tyhjä? Ennusta tulos, selitä ratkaisu, tarkista yhdessä. Valitse yksi päätös jonka ymmärrät.
- **Content**: Mitä rikkoutuisi, jos huoneisto olisi tyhjä? Ennusta tulos, selitä ratkaisu, tarkista yhdessä. Valitse yksi päätös jonka ymmärrät. Time 54:00–55:00.

#### Slide 22 - Aloita yhdestä hyödyllisestä tehtävästä

- **Audience move**: Understand aloita yhdestä hyödyllisestä tehtävästä through the example or evidence.
- **Relationships**: order scope, evidence, assessment
- **Composition**: Three concise actions and browser handoff
- **Title**: Aloita yhdestä hyödyllisestä tehtävästä
- **Core message**: Rajaa tehtävä, määritä näyttö, arvioi muutos. Yksi toistettava virhe. Loppugallup 56:00–59:00 gallup.koodattu.dev.
- **Content**: Rajaa tehtävä, määritä näyttö, arvioi muutos. Yksi toistettava virhe. Loppugallup 56:00–59:00 gallup.koodattu.dev. Time 55:00–56:00.

#### Slide 23 - Koodi halpeni. Vastuu ei.

- **Audience move**: Understand koodi halpeni. vastuu ei. through the example or evidence.
- **Relationships**: none
- **Composition**: Large closing thesis on navy
- **Title**: Koodi halpeni. Vastuu ei.
- **Core message**: Koodi halpeni. Vastuu ei. Valitse hyödyllinen tehtävä ja tee lopputulos tarkistettavaksi. Päätös 59:00–60:00.
- **Content**: Koodi halpeni. Vastuu ei. Valitse hyödyllinen tehtävä ja tee lopputulos tarkistettavaksi. Päätös 59:00–60:00. Time 59:00–60:00.
- **Closing impact**: Koodi halpeni. Vastuu ei. Choose one useful task and make the result checkable.

## X. Speaker Notes Requirements

- **Generation**: enabled
- **Filename**: match each SVG filename under notes/
- **Content**: Adapt the existing Finnish notes to each final visual, retaining timings, factual caveats and source URLs. Remove technical build commentary. Clearly label illustrative examples.
- **Total duration**: 60 minutes including 13 minutes of gallup plus discussion and handoffs.
- **Notes style**: Conversational, explanatory and interactive.
- **Presentation purpose**: Explain evidence and teach a bounded modern AI task workflow.
