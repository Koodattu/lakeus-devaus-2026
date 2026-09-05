# One-hour run of show

**Main presentation draft, updated 5 September 2026.** This is the content and timing plan for the future PowerPoint, incorporating the [research refresh](13-research-refresh-2026-09-05.md). The [red thread](01-red-thread.md) explains the argument; the [editorial backlog](07-editorial-backlog.md) records cuts and reserve material. The existing HTML deck is an earlier prototype and does not implement this plan.

## Audience, promise, and format

The talk is for Lakeus-Devaus's mixed public audience: developers, students, managers, entrepreneurs, and adjacent professionals. Audience-facing wording is Finnish; planning notes are English. The event date, venue, and final personal demo remain to be confirmed.

**Title:** Hei ohjelmistokehitys, mitä kuuluu?

**Thesis:** Koodi halpeni. Vastuu ei.

The audience should leave able to distinguish what can be delegated, what constitutes evidence of a useful result, and how people keep learning to judge it. The talk should make room for real opportunity and real uncertainty.

| Time | Segment | Minutes | Purpose |
| --- | --- | ---: | --- |
| 0:00–0:05 | Introduction | 5 | Establish the tension and central question |
| 0:05–0:15 | Quick-fire gallup | 10 | Describe this room's experience, use, and trust |
| 0:15–0:20 | Project/process reveal | 5 | Show an outcome, a correction, evidence, and ownership |
| 0:20–0:24 | 1. History and understanding | 4 | Brooks and Naur frame what remains hard |
| 0:24–0:31 | 2. Delegation and its conditions | 7 | Capability, feedback, and enforceable limits |
| 0:31–0:38 | 3. Productivity and changed work | 7 | Separate task speed, delivery, and value |
| 0:38–0:46 | 4. Verification and learning | 8 | Connect reviewer attention to future expertise |
| 0:46–0:55 | 5. Value, people, and Finland | 9 | Apply the argument to products, careers, and the region |
| 0:55–1:00 | Close | 5 | Three practical choices, repeated mood poll, final question |
| **Total** | | **60** | **Main presentation: 35 minutes** |

Section budgets include transitions and brief callbacks. If the booking allows 90 minutes, the remaining time is audience discussion, not another prepared lecture.

## 0:00–0:05 — Introduction

**Question:** Kun ohjelmiston tuottamisesta tulee halpaa, mikä muuttuu arvokkaaksi—ja mikä ei edelleenkään muutu helpoksi?

Suggested sequence:

1. Title and opening observation: “Vuonna 2022 pyysimme tekoälyltä vastauksia. Vuonna 2026 annamme sille tehtäviä.”
2. Put two thoughts beside each other: the tools changed quickly; many difficult engineering problems are familiar.
3. Explain that the session will test both through examples, research, and the room's experience.
4. Introduce the poll.

Use this as a qualitative trajectory, not exact dates on which capabilities first appeared. Leave the “more change than all earlier decades” superlative in reserve. Do not begin with definitions or a model catalogue.

## 0:05–0:15 — Quick-fire gallup

Use the seven questions in [live polls](03-live-polls.md): experience, recent use, perceived speed, reading generated code, production autonomy, output quality, and mood. Do not add new poll questions for each new research source.

- 90 seconds to join.
- Six minutes for the seven questions and transitions.
- Two and a half minutes to synthesize at most three actual patterns and move to the reveal.

The later callbacks are part of the narrative: perceived speed before the experiments, autonomy before permission boundaries, and code-reading habits before comprehension.

Do not assume use exceeds trust before seeing the room's answers. Results describe attendees, not the industry. Prepare the existing hand-vote fallback.

## 0:15–0:20 — Project/process reveal

**Purpose:** make the invisible decisions behind a plausible result visible.

Preferred material is a real AI-assisted software task with a mistake, correction, verification artifact, and continuing owner. The particular project and its public development history are still unconfirmed.

**Current usable fallback:** the presentation's documented research process. Show an earlier draft claim, the source recheck that challenged it, and the resulting editorial decision. The Finnish-source discrepancy in the research memo supplies a concrete candidate; distinguish a documented finding from a correction actually applied to a deck. Do not invent a software failure or imply the live-voting application was agent-built without evidence.

| Beat | Seconds | Material |
| --- | ---: | --- |
| Visible result | 30 | What the audience sees or has used |
| Goal and constraints | 45 | Audience/user need and two or three limits |
| Division of work | 60 | What was delegated and what the person decided |
| Correction or rejection | 90 | One actual mistake, tradeoff, or changed claim |
| Evidence | 45 | A source comparison, test, or observed behavior |
| Ownership | 15 | Who maintains the result and answers for it |
| Transition | 15 | Return to the central question |
| **Total** | **300** | |

The reveal is complete here, before the main presentation. Revisit it later rather than withholding its origin until a supposed midpoint. The optional “human or AI?” poll is omitted from the core version to protect the five-minute limit.

## 0:20–0:24 — 1. History and understanding

**Claim:** easier implementation does not automatically resolve complexity or create shared understanding.

| Time | Beat | Content |
| --- | --- | --- |
| 0:20–0:22 | Kitka vähenee. Vaikeat kysymykset jäävät. | A brief 1968 callback, then Brooks' essential/accidental distinction |
| 0:22–0:24 | Kuka ymmärtää järjestelmän ensi vuonna? | Naur's theory-building lens; understanding needed for change and handoff |

Treat the Finnish lines as the speaker's interpretations, not historical quotations. AI can also suggest conceptual solutions and help articulate understanding. Ask how those proposals are checked.

**Transition:** what can we delegate today that changes the work in practice?

**Sources:** the historical sources in [veteran lens](09-veteran-lens.md). Full CASE/4GL history, Lehman, and Parnas remain in reserve.

## 0:24–0:31 — 2. Delegation and its conditions

**Claim:** substantial delegation becomes possible when the task has useful context, feedback, and enforceable boundaries.

| Time | Beat | Content and evidence |
| --- | --- | --- |
| 0:24–0:26 | Vastauksesta tehtävään | Chat → repository work → bounded outcome; MirrorCode as one concrete capability case |
| 0:26–0:29 | Luotettava tulos tarvitsee palautetta | One goal–context–agent–evidence–judgment loop; HubSpot's engineering case as supporting material |
| 0:29–0:31 | Kyky ja lupa ovat eri asioita | 60–90-second incident example, then the practical autonomy rule and poll callback |

**MirrorCode:** substantial reimplementation against reference behavior and tests. Explain that exact reconstruction is more checkable than ordinary product discovery. The 2–17-week human comparison is an expert estimate, not a measured speedup. Use a task description rather than a wall of model scores. [Source](https://epoch.ai/publications/mirrorcode-preliminary-results).

**Workflow:** frame the goal, provide relevant context, delegate a bounded change, gather evidence, review the consequence, and improve the environment. Mention tools only as implementations of those functions. HubSpot's useful lesson is that feedback and deterministic lifecycle steps addressed incomplete agent work; do not lead with PR volume. [Source](https://product.hubspot.com/blog/cloud-coding-agents-at-hubspot).

**Boundary case:** the August METR investigation concerns agents crossing intended limits in OpenAI cybersecurity evaluations. State the unusual research setting and investigation limitations. Use no exploit details or sensational dialogue. The practical distinction is between an instruction, an enforced permission boundary, and independently recorded evidence. [METR investigation](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/), [OpenAI account](https://openai.com/index/hugging-face-incident-and-the-road-ahead/).

**Landing:** choose autonomy by consequence, reversibility, evaluability, and lifespan. The incident is the first case to shorten if rehearsal shows it needs too much explanation; preserve the principle.

**Transition:** what did this capability change at the level of actual work?

## 0:31–0:38 — 3. Productivity and changed work

**Claim:** task speed, team delivery, and value are different outcomes; AI can change the task mix too.

| Time | Beat | Content and evidence |
| --- | --- | --- |
| 0:31–0:34 | Nopeammin kenelle, missä tehtävässä? | Microsoft and METR, with participants, measured variables, and the follow-up caveat |
| 0:34–0:36 | Tehtävästä hyödylliseen lopputulokseen | Individual → team → product; DORA and one bottleneck explanation |
| 0:36–0:38 | AI muuttaa sitä, mitä kannattaa yrittää | Old tasks, newly chosen tasks, and value; a short hypothetical local example |

**Evidence wording:**

- Microsoft: approximately **26% more completed tasks**, combining three field experiments and 4,867 developers. Keep exact estimate and uncertainty in notes. [Study summary](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/).
- METR: **19% more completion time** for 16 experienced contributors working on 246 tasks in familiar repositories with early-2025 tools. Its February 2026 follow-up could not establish a reliable current effect because of selection and measurement problems. Say this on stage. [Original result](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/), [follow-up](https://metr.org/blog/2026-02-24-uplift-update/).
- DORA: the delivery system conditions the outcome; higher adoption was associated with both higher throughput and greater instability. This is not a simple causal guarantee. Its March 2026 synthesis draws on 2025 data. [Synthesis](https://dora.dev/insights/balancing-ai-tensions/).

Do not place the Microsoft and METR numbers on a common percentage axis. They measure different quantities. Do not add the self-reported productivity figures as a third apparent experiment.

**Opportunity:** use METR's task-substitution distinction to explain that AI can make useful work feasible, while hypothetical manual effort is not automatically value saved. This is a conceptual framework, not another measured uplift. [Analysis](https://metr.org/blog/2026-05-08-task-substitution-and-uplift/).

Introduce the existing hypothetical manufacturer scenario: testing whether photographed service notes could become helpful draft records. The experiment can be worth doing even before there is a case for building a production system. Label it hypothetical and claim no measured savings.

**Transition:** how do we evaluate the additional work and retain the ability to understand it?

## 0:38–0:46 — 4. Verification and learning

**Claim:** the work must produce evidence and understanding as well as output.

| Time | Beat | Content and evidence |
| --- | --- | --- |
| 0:38–0:40 | Kenen aikaa säästit? | Our definition of slop as shifted evaluation cost; return to the demo's correction |
| 0:40–0:42 | Katselmointi tarvitsee tekijän | Godot and Linux: contrasting policies, shared reviewer scarcity and responsibility |
| 0:42–0:45 | Valmis tehtävä ja opittu taito ovat eri tuloksia | Coding skill experiment, limitations, and one practical learning recommendation |
| 0:45–0:46 | Myös arviointia voi parantaa | Smaller changes, reproducible evidence, useful automation, and maintained expertise |

**Maintainers:** use current Godot and Linux rules, including contributor understanding and maintainer discretion. ESLint is the reserve third example. These are project choices, not evidence that all open source takes one position. [Godot](https://contributing.godotengine.org/en/latest/pull_requests/pull_request_guidelines.html), [Linux](https://kernel.org/doc/html/next/process/generated-content.html).

**Learning evidence:** the 52-participant experiment concerned learning an unfamiliar Python library. The authors' summary reports immediate quiz averages of 50% with AI and 67% without it; the task-time difference was not statistically significant. Attribute those rounded values to the summary. Do not generalize to permanent deskilling, all juniors, or current autonomous agents. [Author summary](https://www.anthropic.com/research/AI-assistance-coding-skills), [paper](https://arxiv.org/abs/2601.20245).

**Our recommendation:** preserve opportunities to explain one decision, predict a failure, and diagnose a broken example. The study does not prove that this exact practice is the remedy. Connect this back to Naur and the room's code-reading poll.

Agents can support reproduction, testing, and review as well as generation. Evidence should test the intended behavior, rather than merely echoing the generated implementation. Responsibility is not equivalent to manually reading every token.

**Transition:** where do these distinctions leave products, careers, and the local market?

## 0:46–0:55 — 5. Value, people, and Finland

**Claim:** cheaper construction increases the importance of usefulness, adoption, understanding, and continuing ownership.

| Time | Beat | Content and evidence |
| --- | --- | --- |
| 0:46–0:49 | Halpa toteutus tuo arvon testin lähemmäs | Combine the product question and SaaS economics; return to the maintenance-record example |
| 0:49–0:52 | AI muuttaa työtä ja odotuksia | Revised employment interpretation, career uncertainty, and team incentives |
| 0:52–0:55 | AI on paine ja tuote — myös täällä | One current Finnish sector snapshot and the regional application |

**Product:** would the maintenance-record draft improve real work? Who corrects it, integrates it, finds it useful enough to adopt, and supports it later? These questions join SaaS, attention, and lifecycle cost in one concrete story. Reduced feature cost is not proof that subscriptions or entire product categories disappear. [Existing NCSC source](https://www.ncsc.gov.uk/blogs/vibe-check-ai-may-replace-saas-but-not-for-a-while).

**People:** the August Stanford revision identifies a relative employment gap for US workers aged 22–25 in highly AI-exposed occupations, mainly through reduced hiring. It does not establish a causal AI job-loss count or a Finnish trend. Keep the exact 19% relative-gap definition in notes. [Revision](https://digitaleconomy.stanford.edu/news/canariesaug26/).

Then distinguish evidence from our interpretation: expectations can influence learning, hiring, and trust before forecasts are resolved. Acknowledge uncertainty without telling worried people simply to manage agents. Employer choices about mentoring, learning time, and outcome-based evaluation matter. Token-consumption targets are an optional 30-second example within this budget, not an extra slide or an excuse to ridicule employees. [DORA commentary](https://dora.dev/insights/finding-balance-in-the-era-of-tokenmaxxing/).

**Finland:** use the August outlook's consistent vintage: 2025 sector turnover **EUR 19bn, +5%**; end-June employment **approximately 80,200, -1% against end-March**. Put the observation periods on the slide. Do not carry forward the prototype's EUR 20bn/+9% figures or splice older employment snapshots into a trend. These observations do not isolate an AI effect. [Sector source](https://teknologiateollisuus.fi/en/economic-outlook-and-statistics/economic-outlook/information-technology-in-finland/).

Company tables stay in reserve. If a contrasting company is needed in discussion, distinguish acquisitions and organic growth; the refreshed Gofore H1 report is available in the research memo.

**Regional application, explicitly the speaker's proposition:** domain access, integration, relationships, and support can be valuable when implementation becomes more accessible. Return to the same hypothetical local workflow rather than inventing a customer testimonial. Ask what would make its outcome worth paying for and owning.

## 0:55–1:00 — Close

| Time | Beat | Content |
| --- | --- | --- |
| 0:55–0:57 | Three practical choices | Measure accepted outcomes and rework; preserve learning; assign ownership before release |
| 0:57–0:59 | AI-fiilis, nyt? | Same question and options as the opening; one brief observation |
| 0:59–1:00 | Koodi halpeni. Vastuu ei. | Closing lines, final spoken question, open optional comment wall |

Suggested Finnish takeaways:

1. **Mittaa hyväksyttyä lopputulosta ja korjaustyötä.**
2. **Varmista, että osaaminen kasvaa työn mukana.**
3. **Sovi omistajuus ennen julkaisua.**

Close with the established lines:

> Koodia syntyy enemmän.
>
> Varmuus ei synny samalla nopeudella.
>
> Joku omistaa seuraukset joka tapauksessa.

**“Minkä seurauksen sinä olet valmis omistamaan?”**

Open **“Mikä väite tai kysymys jäi pyörimään mieleen?”** as the final optional free-text activity. Discussion follows the complete hour. Do not interpret the mood comparison as proof of a causal attitude change.

## PowerPoint content map

The timed beat tables above are the slide brief. Each row is a communication beat, not an instruction to add a slide per source. Aim for approximately 18–22 sparse content slides, plus opening/closing poll screens; combine adjacent beats when one visual can carry them.

Use one primary message, one relevant visual or artifact, and a short factual source/date per content slide. Presenter notes hold sample definitions, uncertainty, transitions, and the difference between findings and our recommendations. Introduce technical terms only when needed to understand the decision.

Assets to select before production:

- one documented task/process sequence with a correction and evidence;
- a MirrorCode task description and its evaluation boundary;
- the reported comprehension comparison with sample and timing;
- a compact autonomy incident sequence;
- one consistent Finnish sector snapshot;
- a simple recurring hypothetical local workflow.

The real software demo is still a material-selection dependency; the documented research-process fallback makes the draft usable without inventing one. Reuse rights and chart values must be checked when selecting actual assets. This document does not specify slide layouts or implement PowerPoint.

## Compression and discussion reserve

If the session runs long, shorten material that is actually in this draft, in this order:

1. Omit the optional token-target example.
2. Reduce the autonomy incident to one sentence; retain the practical boundary.
3. Reduce the second maintainer example to a spoken contrast.
4. Shorten the MirrorCode detail while retaining what was evaluated.
5. Reduce historical background to the Brooks and Naur questions.

Use the recovered time to preserve the learning, people, Finland, and closing sections. Do not solve an overrun by dropping a source caveat that changes the meaning of a headline.

For optional discussion up to 90 minutes: exact employment results, detailed consultancy comparisons, the third maintainer policy, task-horizon methodology, open-weight ecosystems, geopolitics, security details, or CRA scope and dates. These are appendix threads selected by the room, not required content.

## Final preparation checks

- Confirm the event date and whether the full hour excludes announcements and Q&A.
- Select and substantiate the demo; prepare screenshots or a recording and hand-vote fallback.
- Rehearse to approximately 55–57 minutes to leave room for audience delay.
- Verify every selected factual slide against its source and observation period.
- Keep survey, experimental, conceptual, company-reported, and speaker-inferred claims distinguishable.
- Apply the September corrections rather than copying values from the HTML prototype or older dossiers.
- Keep the formal closing at one hour; extra discussion is optional.
