# Red thread

Editorial draft updated **5 September 2026**, following the [research refresh](13-research-refresh-2026-09-05.md). The [one-hour run of show](02-one-hour-run-of-show.md) is the main content and timing plan for the future PowerPoint. This document explains why its sections belong together.

## The story in one paragraph

Software development keeps making implementation easier while discovering new limits in understanding, coordination, and maintenance. AI expands the unit of delegation from answers and snippets toward substantial tasks, and makes some worthwhile work affordable for the first time. Those gains depend on the task and on the environment that provides context, feedback, and enforceable limits. Completing more tasks, creating more value, and learning to understand the result are different outcomes. As generation scales, verification, integration, and learning need deliberate investment too. AI can help with those activities; responsibility for the result remains with people and organizations. The question becomes: what should we build, how will we know it works, and who will understand and own it later?

## The central question

> **Kun ohjelmiston tuottamisesta tulee halpaa, mikä muuttuu arvokkaaksi—ja mikä ei edelleenkään muutu helpoksi?**

The recurring answer is **Koodi halpeni. Vastuu ei.** This is the talk's thesis, not a measured price index or a prediction that human tasks will never change.

The causal chain:

```text
more substantial tasks can be delegated
                  ↓
first versions and experiments become more affordable
                  ↓
the task mix changes; output, value, and learning can diverge
                  ↓
verification, integration, and understanding need investment
                  ↓
value depends on useful outcomes, trust, and accountable ownership
```

## Five movements, one argument

### 1. What did earlier revolutions leave unresolved?

**Main time: 0:20–0:24.**

Use the 1968 software crisis as a short callback, Brooks to distinguish implementation friction from conceptual difficulty, and Naur to ask who holds the understanding needed to change a system. The extended CASE/4GL timeline belongs in reserve.

Do not conclude that AI can only address accidental complexity. It can propose designs and help people understand systems. The test is whether that understanding survives verification, change, and handoff.

**Transition:** If these problems are familiar, what can we now delegate that we could not before?

### 2. What can be delegated, under what conditions?

**Main time: 0:24–0:31.**

Move from chat to repository agents to bounded outcomes. Use MirrorCode as the concrete capability example: substantial reconstruction of existing software with unusually checkable behavior. Its estimated human effort is not a measured human baseline, and reconstruction is not the whole product lifecycle.

Follow it with one workflow:

```text
goal → context and constraints → agent work → evidence → judgment → learning
```

Retain HubSpot as the supporting engineering case for feedback and deterministic lifecycle steps. The case's lesson is the environment, not the number of generated pull requests. Skills, connected tools, browser feedback, and subagents are possible components, not separate topics.

Use the August METR incident investigation as a short boundary case: agents in an unusual cybersecurity evaluation crossed intended isolation and authorization limits. Explain the research setting and limited investigation scope. The transferable lesson is that instructions, enforced permissions, and trustworthy evidence have distinct jobs.

> **Kyky saavuttaa tavoite ja lupa käyttää keinoja ovat eri asioita.**

Autonomy depends on consequences, reversibility, evaluability, and lifespan. A capability demonstration does not by itself establish safe delegation in another setting.

**Transition:** Even when an agent can complete the task, how much better did the work become?

### 3. What does “more productive” mean?

**Main time: 0:31–0:38.**

Show the Microsoft and early-2025 METR experiments as measurements with different boundaries. Name the participant/task context and the measured variable. Bring METR's later inability to estimate a reliable current effect into the spoken explanation.

Then distinguish individual task speed, team delivery, and useful outcomes. DORA connects this to the surrounding delivery system. Use one explanation of the bottleneck; avoid repeating it as several abstract slides.

METR's task-substitution analysis adds the opportunity: AI changes what people choose to attempt. Some worthwhile work becomes feasible, but the manual effort of an artifact nobody would otherwise build is not automatically value saved.

> **AI muuttaa myös sitä, mitä kannattaa yrittää.**

**Transition:** More completed work only helps if we can evaluate it—and continue learning enough to do so.

### 4. Who verifies the result, and who learns?

**Main time: 0:38–0:46.**

Define AI slop as our editorial description of output that transfers excessive evaluation cost to others. Show one concrete nearly-correct result or return to the demo's actual correction. Critique the process, not beginners or AI provenance.

Use Godot and Linux as two contrasting governance responses to scarce reviewer attention. ESLint stays in notes. Their policies are examples, not universal prescriptions.

Connect Naur to the coding skill-formation experiment: a finished task and comprehension of the unfamiliar library were separate measured outcomes. Preserve its short duration, sample, and limits. It does not demonstrate permanent skill loss.

> **Valmis tehtävä ja opittu taito ovat eri tuloksia.**

Our practical recommendation: preserve opportunities to explain a decision, predict a failure, and diagnose a problem. Merely asking whether someone read the code does not establish understanding.

Close the loop constructively. Agents can also help reproduce failures, prepare evidence, generate candidate tests, and support review. Invest in those capabilities and in human learning as generation grows; do not assume review must remain an unchanged manual queue.

**Transition:** If useful outcomes and durable understanding matter, where should people and companies invest?

### 5. What deserves to exist, and what does that mean here?

**Main time: 0:46–0:55.**

Give product value, people, and Finland a full nine minutes.

- **Product:** cheaper implementation brings the usefulness test forward. Combine SaaS, distribution, and maintenance in one example rather than three topic changes.
- **People:** acknowledge career uncertainty. Use Stanford's revised US employment interpretation carefully, then distinguish measured changes from expectations that influence hiring, learning, and team behavior.
- **Finland:** present one consistent August sector snapshot. AI is pressure on delivery expectations and a potential service opportunity; company results do not isolate its causal effect.
- **Regional opportunity:** apply the argument to domain access, workflow fit, trust, integration, and continued support. Present this as a strategic proposition to discuss, not proof that proximity guarantees success.

Keep global competition, detailed company tables, and legal timelines in reserve.

**Transition to the close:** What can we choose to do differently now, without pretending to know the whole future?

## One recurring example

The preferred anchor is a real AI-assisted software task with an actual mistake, correction, verification artifact, and owner. Its public suitability and development history remain unconfirmed.

Until one is selected, use the presentation's documented research and editorial process for the five-minute reveal. Describe only work supported by actual artifacts. A useful available contrast is an earlier factual draft and the dated source correction recorded in the research refresh.

A separate, explicitly hypothetical local scenario can make later consequences concrete: photographed service notes become draft maintenance records for a manufacturer. It already appears in [workflow scenarios](11-workflow-scenarios-and-field-notes.md). Revisit it briefly when discussing newly affordable experiments, usefulness, integration, and ownership. Never present it as a customer success or manufacture savings.

## Opening

1. Establish the title and the tension between changed tools and persistent engineering problems.
2. Ask the central question.
3. Run the seven-question gallup from [live polls](03-live-polls.md).
4. Summarize at most three patterns actually present in the responses.
5. Move into the five-minute reveal, then return to its decisions during the main section.

The results describe this room. They are not an industry sample, and the final mood comparison is not a causal evaluation of the talk.

## Closing

Translate the thesis into three choices:

1. **Mittaa hyväksyttyä lopputulosta ja korjaustyötä.**
2. **Varmista, että osaaminen kasvaa työn mukana.**
3. **Sovi omistajuus ennen julkaisua.**

These are the speaker's recommendations, not three universal effects established by one study.

Repeat **“AI-fiilis?”** with the same options as at the start. A more conflicted response can coexist with better understanding; do not demand improved sentiment.

Close with:

> Koodia syntyy enemmän.
>
> Varmuus ei synny samalla nopeudella.
>
> Joku omistaa seuraukset joka tapauksessa.

Final spoken question: **“Minkä seurauksen sinä olet valmis omistamaan?”**

The optional final comment wall, **“Mikä väite tai kysymys jäi pyörimään mieleen?”**, opens discussion after the complete formal hour.

## Editorial test

Each beat must advance the causal chain, add evidence or meaning, and fit the time budget. New sources replace weaker material or go into notes. A source's novelty alone does not earn a slide.

Keep these distinctions visible: fact versus interpretation; experiment versus survey or case report; measured task time versus estimated manual effort; code completion versus comprehension; capability versus authorization; and local evidence versus imported labour-market findings.
