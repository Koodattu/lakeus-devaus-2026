# One-hour run of show

The formal presentation should finish in **60 minutes**. If the booking allows up to 90 minutes, the extra time is a discussion runway rather than another half-hour of prepared slides. This protects audience energy and lets people leave at the advertised one-hour mark with a complete experience.

## Core 60-minute format

| Time | Segment | Job |
| --- | --- | --- |
| 0:00–0:05 | Intro | Name the change and pose the central question. |
| 0:05–0:15 | Quick-fire gallup | Build a fast profile of the room: experience, use, trust, productivity, autonomy, and mood. |
| 0:15–0:20 | Project demo | Let the audience experience the argument before explaining it. |
| 0:20–0:55 | Main presentation | Tell one 35-minute story using models, productivity, slop, SaaS, jobs, Finland, and geopolitics as evidence—not as separate talks. |
| 0:55–1:00 | Recap | Resolve the opening, repeat the mood question, and open the comment wall. |

This is the target version. It requires discipline: gallup answers stay short, the demo is pre-rehearsed, and every main-section topic gets one claim rather than a miniature deep dive.

## The central question

> **Kun ohjelmiston tuottamisesta tulee halpaa, mikä muuttuu arvokkaaksi—ja mikä ei edelleenkään muutu helpoksi?**

Working answer:

> Code production becomes cheaper. Understanding, judgment, verification, integration, maintenance, trust, attention, and responsibility do not automatically become cheap with it.

The main talk is a sequence of attempts to answer this one question.

## 0:00–0:05 — Intro

### Job

Create tension without summarizing the entire presentation.

### Possible sequence

1. **Hei ohjelmistokehitys, mitä kuuluu?**
2. “Vuonna 2022 pyysimme tekoälyltä vastauksia. Vuonna 2026 annamme sille tehtäviä.”
3. Show the two candidate claims:
   - “Ohjelmistokehitys muuttui enemmän neljässä vuodessa kuin edeltävissä vuosikymmenissä.”
   - “Ohjelmistokehityksen vaikeat osat eivät muuttuneet juuri lainkaan.”
4. Say that both may contain part of the truth.
5. Introduce the central question and open the gallup.

Do not begin with definitions, model names, or a historical timeline. The gallup should start while the room’s curiosity is still unresolved.

## 0:05–0:15 — Quick-fire gallup

### Job

Turn the audience into the talk’s local dataset. The poll should feel like a rapid pulse check, not a sequence of discussion questions.

### Rhythm

- 60–90 seconds to join;
- six or seven questions at approximately 40–50 seconds each;
- no audience comments between questions;
- one two-minute synthesis after the last result.

The synthesis should identify no more than three patterns, for example:

> “Tässä huoneessa on paljon kokemusta. AI on jo arkea. Käyttö on silti selvästi luottamusta edellä.”

Do not read every percentage aloud. Return to selected gallup results later when the relevant evidence appears.

## 0:15–0:20 — Project demo

### Job

Make the change tangible before explaining it.

The live-voting application is a strong candidate if its actual development history supports the reveal. Otherwise use another real project.

### Five-minute sequence

1. **What you just used** — the visible outcome, 30 seconds.
2. **What it had to do** — three or four product constraints, 45 seconds.
3. **How it was made** — the truthful role of the agent and human, 60 seconds.
4. **What went wrong or needed judgment** — one concrete correction, rejection, or tradeoff, 90 seconds.
5. **What proved it worked** — a test, observation, or real-use signal, 45 seconds.
6. **Who owns it now** — maintenance and operational responsibility, 15 seconds.

Optional 30-second reveal poll:

> **Ihminen vai AI?**  
> Ihminen / AI / Molemmat / En tiedä

The reveal should land on: “That was the wrong binary.” The useful questions are how the result was constrained, verified, and owned.

## 0:20–0:55 — Main presentation

The main presentation is 35 minutes and five movements. Each movement advances the same causal chain.

```text
capability rises
      ↓
plausible output gets cheaper
      ↓
output volume grows faster than review and attention
      ↓
value moves toward understanding, evidence, trust, and ownership
```

### Movement 1 — Haven’t we heard this before? (0:20–0:27)

**Claim:** Software development has repeatedly automated its accidental difficulties, while its essential complexity survived.

Use the veteran lens:

- the 1968 software crisis;
- high-level languages, 4GLs, CASE, visual programming, outsourcing, cloud, low-code;
- Brooks’ essential versus accidental complexity;
- Naur’s programming-as-theory-building question.

The section should not conclude that AI is merely another CASE tool. Its job is to establish the test:

> Which difficulty did this generation of tools remove—and which difficulty did it expose?

### Movement 2 — What is genuinely different in 2026? (0:27–0:34)

**Claim:** The unit of delegation is moving from a line of code toward a coherent task.

Begin with only enough model material to establish:

- chat → autocomplete → repository agent → bounded outcome;
- rapidly increasing task horizon;
- jagged capability and incomplete reliability.

Then show that a real AI-native workflow is not `prompt → model → code`, but a control system:

```text
goal → local context → skills/tools → agent(s) → evidence → human judgment → learning
```

Skills, MCP/apps, browser use, subagents, tests, hooks, and goals should appear only as parts of these functions—not as a product glossary. The browser closes the gap between compiling and working; skills package repeatable methods; live integrations supply context and action; subagents isolate context and parallel work; deterministic checks keep the generative core inside boundaries.

Use one short frontier-versus-mainstream contrast:

- OpenAI reports an internal product with no manually written application code, enabled by a highly structured repository, isolated environments, browser access, telemetry, review, and continual cleanup;
- HubSpot reports 7,000 merged fully AI-generated pull requests, while also describing agents that stopped with broken builds or forgot lifecycle steps until deterministic hooks and orchestration were added;
- Stack Overflow’s April 2026 pulse found 63% rarely or never allowing full autopilot and 68% preferring a predictable single agent to a complex multi-agent setup.

The point is not that one side is correct. The frontier teams invested in the environment that makes longer delegation safe.

Open-weight competition, model routing, and USA–China–EU differences move to one dated supporting slide or reserve material. The leaderboard is a weather report, not the story.

Land on:

> **Autonomy is earned by feedback, legibility, and reversibility.**

### Movement 3 — Is it actually faster? (0:34–0:42)

**Claim:** AI can accelerate a task while failing to accelerate the system around it.

Present the contradiction:

- Microsoft’s combined field experiments: more completed tasks;
- METR’s experienced open-source developers: slower in familiar repositories;
- Stack Overflow: reported productivity alongside distrust and repair cost;
- DORA: AI amplifies strong and weak delivery systems.

Connect this to the productivity J-curve: general-purpose technologies require complementary investment in process, skills, architecture, measurement, and organizational design.

Question for the room:

> Faster for whom, doing what, measured at which boundary?

### Movement 4 — Cheap output creates expensive evaluation (0:42–0:49)

**Claim:** When submission becomes cheap but review remains scarce, the system starts protecting reviewer attention.

Combine several topics into one mechanism:

- nearly-correct code and security defects;
- package hallucinations;
- open-source review overload;
- Godot restricting substantial AI-generated contributions;
- Linux accepting tools while requiring understanding, disclosure, testing, and responsibility;
- ESLint accepting AI assistance under explicit human-responsibility rules;
- more apps and products competing for finite attention.

This is where “AI slop” gets a precise definition:

> Output that saves the producer time by transferring unbounded evaluation cost to someone else.

### Movement 5 — When anyone can build, what deserves to exist? (0:49–0:55)

**Claim:** The scarce layer moves toward product judgment, durable systems, organizational knowledge, trust, distribution, and responsibility.

Touch the remaining lenses briefly:

- **SaaSpocalypse:** generic point tools and feature layers are exposed; data, workflow, integration, security, support, and accountability remain.
- **Apprenticeship:** if routine work disappears, organizations must deliberately create the future senior developers who can verify AI output.
- **Finland:** weak demand and delayed budgets interact with AI-shaped price and productivity expectations; AI is pressure and product, not a single cause.
- **Global competition:** capital, models, open ecosystems, industrial application, regulation, and sovereignty are different dimensions.
- **Regional advantage:** domain context, proximity, reputation, and willingness to own the unglamorous system after launch.

Finish the main section with:

> “Jos agentti kirjoitti koodin, kuka rakensi teorian siitä, miten järjestelmä toimii—ja kuka pystyy muuttamaan sitä ensi vuonna?”

## 0:55–1:00 — Recap

### Three conclusions

1. **The change is real:** plausible software and repository-level execution became dramatically more accessible.
2. **The old problems survived:** complexity, changing requirements, coordination, maintenance, and responsibility remain.
3. **The bottleneck moved:** judgment, verification, trust, attention, and ownership become more important per unit of generated code.

Repeat the short mood question:

> **AI-fiilis?**  
> Innostunut / Utelias / Ristiriitainen / Huolestunut / Väsynyt

Do not treat “more conflicted” as failure. Ask what became clearer.

Close with:

> Koodia syntyy enemmän.  
> Varmuus ei synny samalla nopeudella.  
> Joku omistaa seuraukset joka tapauksessa.

Open the final comment wall:

> **Mikä väite tai kysymys jäi pyörimään mieleen?**

The formal presentation is now complete.

## Optional 60–90 minute runway

Do not prepare another continuous 30-minute lecture. Use the extra time for:

1. comments from the final wall;
2. questions chosen by the room;
3. one or two appendix threads selected by interest;
4. participants comparing experiences with the gallup results.

Possible appendix threads:

- “No Silver Bullet” in the age of agents;
- junior development and the missing apprenticeship ladder;
- open-source maintainer policies and review debt;
- detailed Finnish consultancy figures;
- state-of-the-art models and open-weight ecosystems;
- USA–China–EU competition;
- SaaS pricing and build-versus-buy economics;
- security and package hallucination research.

This makes 90 minutes a maximum, not an obligation. At 60 minutes the audience has received the full argument; staying longer is a choice.

## Likely slide/beat sequence

These are communication beats, not a commitment to one visual slide each.

1. **Hei ohjelmistokehitys, mitä kuuluu?**
2. **Did everything change—or did the hard part remain?**
3. **Quick-fire gallup** — several questions using one repeated visual system.
4. **The project you just used.**
5. **“Human or AI?” is the wrong question.**
6. **1968 called: software is still in crisis.**
7. **Every generation gets its silver bullet.**
8. **Brooks: accidental difficulty can shrink; essential complexity remains.**
9. **Naur: the real product may be the theory in people’s heads.**
10. **2022: ask for an answer. 2026: delegate an outcome.**
11. **Capability rose fast; reliability is still jagged.**
12. **The leaderboard is a weather report, not a map.**
13. **Faster according to whom, doing what?**
14. **AI accelerates tasks; organizations deliver systems.**
15. **Cheap output creates expensive evaluation.**
16. **Open source is installing gates around reviewer attention.**
17. **When anyone can build it, why should anyone use it?**
18. **SaaS is not dead; undifferentiated features are cheaper.**
19. **Who trains the future reviewer?**
20. **Finland: AI is pressure and product.**
21. **What becomes scarce?**
22. **Koodi halpeni. Vastuu ei.**
23. **AI-fiilis, nyt?**

Some beats should share a slide. The final deck should likely contain approximately 18–22 sparse slides plus poll-result screens.

## Compression order

If the demo or gallup runs long, remove material in this order:

1. exact model rankings;
2. detailed USA–China–EU figures;
3. individual Finnish company examples;
4. App Store exact numbers;
5. one of the three open-source policy examples;
6. the productivity J-curve explanation, leaving one sentence;
7. detailed historical automation examples, while retaining Brooks and Naur.

Never cut:

- quick audience profile;
- truthful project demo with a failure or human decision;
- the essential/accidental complexity distinction;
- 2022→2026 change in delegation;
- conflicting productivity evidence;
- review scarcity and ownership;
- the recap.

## Presenter preparation notes

- Rehearse the 60-minute version to approximately 55–57 minutes without audience delay.
- Prepare the demo as screenshots or a short recording even if the live system is used.
- Assign someone to note the largest gallup result for each question; the application does not provide a combined profile slide.
- Put an “as of” date on every model, market, company, legal, or adoption figure.
- Use source notes for historical screenshots and avoid long quotations.
- Do not improvise causality from company figures.
- Recheck time-sensitive sources shortly before the event.
