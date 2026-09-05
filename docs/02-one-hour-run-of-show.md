# One-hour run of show

**Revised direction, 5 September 2026:** give practical AI development a full 20 minutes alongside 20 minutes of context and evidence. This supersedes the earlier 5 + 10 + 5 + 35 + 5 structure. The [updated PowerPoint](../output/lakeus-devaus-2026-practical.pptx) now follows this plan; the previous draft is preserved.

Use the [slide storyboard](16-practical-presentation-storyboard.md) for the messages and production notes, [design brief](../DESIGN.md) for composition, and [design research](15-presentation-design-research.md) for external guidance and the installed skill. The [September research refresh](13-research-refresh-2026-09-05.md) remains authoritative for selected statistical claims.

## Audience and promise

Finnish-speaking developers, students, managers, entrepreneurs, and adjacent professionals at Lakeus-Devaus. Use Finnish slides and plain spoken explanations. No assumed familiarity with agents, MCP, skills, or worktrees.

**Title:** Hei ohjelmistokehitys, mitä kuuluu?

**Working thesis:** Koodi halpeni. Vastuu ei.

**Practical promise:** “Näet, miten AI:n kanssa edetään tehtävästä tarkistettuun muutokseen, ja saat mallin omaan kokeiluun.”

The two halves answer connected questions: what changed in software development, and how can we use that change productively? Show AI helping with understanding, testing, review, and maintenance as well as writing code.

The user selected documented workflow examples with Codex, Claude Code, and other relevant tools. These are teaching scenarios, not claims about the speaker's personal projects or measured results. Cover the full lifecycle without attempting an exhaustive tool catalogue.

## Timing

| Time | Segment | Minutes | Audience outcome |
| --- | --- | ---: | --- |
| 00:00–05:00 | Introduction | 5 | Understand the question and practical promise |
| 05:00–15:00 | Opening gallup in the browser | 10 | See this room's experience and questions |
| 15:00–35:00 | What AI changes in software development | 20 | Understand capability, evidence, learning, and value |
| 35:00–55:00 | How modern AI development works | 20 | Follow a task through context, implementation, verification, and delivery |
| 55:00–60:00 | Ending gallup and wrap-up | 5 | Choose one useful experiment and revisit the room's mood |
| **Total** | | **60** | |

Transitions are included. This is a talk with a guided walkthrough, not a hands-on installation workshop. Longer discussion begins after the 60-minute programme.

## 00:00–05:00: Introduction

Open with a recognisable situation: an agent says the change is complete. What would make us believe it? Establish that the talk will show both the possibilities and a usable way of working.

Use two slides: the title and a visual contrast between asking for an explanation and assigning a bounded task with evidence. Codex and Claude Code are examples of tools used in the second mode; this is not a precise historical claim about when a capability first appeared.

Keep the introduction conversational. Avoid definitions, model rankings, and a long agenda list.

## 05:00–15:00: Opening gallup

Switch to **[gallup.koodattu.dev](https://gallup.koodattu.dev)**. Use the seven questions in [live polls](03-live-polls.md): 90 seconds to join, six minutes for questions, and two and a half minutes to discuss at most three actual patterns.

Results describe attendees, not developers generally. Do not predict the result. Later callbacks connect perceived speed to productivity evidence, autonomy to task boundaries, and code-reading habits to learning.

Do not create PowerPoint question slides. If the site is unavailable, ask the existing questions verbally for a show of hands. Do not copy the old HTML poll slides into PowerPoint.

## 15:00–35:00: What AI changes

| Time | Beat | Treatment |
| --- | --- | --- |
| 15:00–17:00 | Implementation and understanding | Combine Brooks and Naur: implementation sits inside a larger system of requirements, dependencies, users, and continuing understanding. Historical interpretation, not a quotation. |
| 17:00–20:00 | Substantial but bounded delegation | MirrorCode: reference behaviour, implementation, tests. Explain the evaluation boundary. Keep its estimated human comparison in notes. |
| 20:00–23:00 | Productivity depends on the task | Microsoft and METR, with their different measured quantities separated. State that METR's February 2026 follow-up did not establish a reliable current effect. |
| 23:00–25:00 | Task speed and delivery | A delivery-flow diagram shows how review, integration, or unclear requirements can absorb a local gain. DORA supports the discussion; diagram widths are not measured times. |
| 25:00–28:00 | Completing work and learning | A two-bar chart of immediate quiz scores, 50% and 67%, with the 52-participant unfamiliar-library context. Connect it to explaining and diagnosing code. |
| 28:00–30:00 | Useful experiments become possible | Introduce the hypothetical maintenance-record scenario. Turning photographed notes into draft records is an experiment whose usefulness still needs testing. |
| 30:00–32:00 | Work, careers, and expectations | Acknowledge career uncertainty and opportunities to learn. Keep Stanford's qualified US evidence in notes; avoid another employment chart. |
| 32:00–35:00 | Finland and local opportunity | One dated Finnish sector snapshot, then the proposition that domain knowledge, integration, relationships, and support matter. Transition to working with an agent. |

### Evidence boundaries

- Microsoft: about 26% more completed tasks across three experiments and 4,867 developers. This is not a universal speed increase.
- METR: 19% more completion time for 16 experienced contributors on 246 familiar-repository tasks using early-2025 tools. Do not plot it on the same percentage axis as completed tasks.
- DORA: associations with throughput and instability, not a causal guarantee. The March 2026 synthesis uses 2025 data.
- Learning: authors' rounded immediate quiz means, 50% with AI and 67% without. No claim of permanent skill loss or a test of current autonomous agents.
- Finland: 2025 turnover EUR 19bn, +5%; end-June 2026 employment approximately 80,200, down 1% from end-March. These observations do not isolate AI's effect.

Full sources and qualifications are in the [research refresh](13-research-refresh-2026-09-05.md). Keep readable context beside each visual and detailed citations in speaker notes.

### Material moved to reserve

The separate five-minute research-process reveal, detailed Godot/Linux policy comparison, cybersecurity-evaluation incident, full historical sequence, and additional company statistics leave the main flow. Preserve them in existing dossiers for discussion. They would consume the practical section's time if simply added back.

MirrorCode demonstrates capability; the practical scenario demonstrates a reusable method. Avoid making one unusual evaluation carry both jobs.

## 35:00–55:00: How modern AI development works

Use the address-editing defect from [workflow scenarios](11-workflow-scenarios-and-field-notes.md): saving an address loses the apartment number. Introduce it as a teaching example, not an incident in this repository.

| Time | Beat | What the audience sees |
| --- | --- | --- |
| 35:00–37:00 | The complete loop | Understand the need, define a task, inspect context, change, verify, review, release, observe. Distinguish interactive help, delegated work, and recurring work without a maturity ranking. |
| 37:00–39:00 | Write a useful task | A vague request beside a concise brief: symptom, expected result, constraints, completion evidence. |
| 39:00–41:00 | Provide local truth | Relevant code, test command, examples, and project instructions. Name AGENTS.md for Codex and CLAUDE.md for Claude Code. |
| 41:00–43:00 | Give access to the right tools | Skill: reusable procedure. MCP: connection to external context/tools. Shell: project commands. Browser: actual behaviour. Explain each through the task. |
| 43:00–45:00 | Find the failure before fixing it | A small reproduction. Trace the value from form to request to stored record. |
| 45:00–47:00 | Make and check the smallest change | A readable diff, regression check, and the address persisting after reload. Discuss what the check established. |
| 47:00–49:00 | Review and hand over | Cause, change, commands/results, remaining limits, and release owner in a short PR-style handoff. AI can assist review; findings still need checking. |
| 49:00–51:00 | Apply the loop to a prototype | Maintenance records: example input, draft output, correction, user trial. Show how design context and browser checks fit the same loop. |
| 51:00–52:30 | Parallel work when tasks separate | Independent tasks in separate worktrees rejoin at an integration check. Explain how shared-file edits can collide. |
| 52:30–54:00 | Continue after release | Observe errors and user corrections, triage incidents, and automate a proven maintenance task with an owner and useful notification. |
| 54:00–55:00 | Keep learning while delegating | Explain one decision, predict a failure, investigate a broken example. Refer back to the learning chart without repeating it. |

This is a guided walkthrough. Show only a few lines of code at once and explain behaviour before syntax. Avoid stage time installing tools, typing long commands, comparing subscriptions, or waiting for a fresh agent run.

### Example task brief

Authored teaching prompt, adaptable to Codex or Claude Code:

> Osoitteen muokkaaminen kadottaa huoneiston numeron. Selvitä ensin, missä tieto katoaa, ja toista virhe. Korjaa rajattu syy nykyisiä käytäntöjä seuraten. Säilytä rajapinta ja muu osoitekäytös. Lisää regressiotarkistus ja varmista tallennus myös sivun uudelleenlatauksen jälkeen. Kerro muutoksen syy, ajetut tarkistukset ja avoimet kysymykset. Älä julkaise muutosta.

Display a shorter four-part version; keep this full prompt in notes or a handout. The no-release boundary belongs to this example, not to a universal approval rule for every edit.

### Tools in proportion

Codex and Claude Code are named implementations of the workflow, not competing protagonists. Include IDE assistants, Git/CI, browser testing, design tools, skills, and connected services when an example needs them. Do not claim everyone uses the same setup or that more agents is always better.

Official references checked on 5 September 2026:

- [Codex prompting and workflows](https://learn.chatgpt.com/docs/prompting): reproducible tasks, constraints, verification.
- [Codex project instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md) and [skills](https://learn.chatgpt.com/docs/build-skills): project guidance and reusable procedures.
- [Claude Code best practices](https://code.claude.com/docs/en/best-practices): context, exploration, implementation, checks.
- [Claude Code common workflows](https://code.claude.com/docs/en/common-workflows): everyday tasks and isolated parallel sessions.

The detailed sequence and prompts are our synthesis of these references and the existing scenarios, not verbatim vendor recipes or an industry adoption survey.

### Demonstration evidence

For production, record a small example in a disposable demo project, then capture the actual task, failure, diff, checks, and browser outcome. Until that has been done, label diagrams and snippets as illustrative. Do not create fake success output, fake product screenshots, or a fictional client testimonial.

Prepared captures are the default stage sequence. A rehearsed local run is optional. Maintain a short verbal fallback for every capture.

## 55:00–60:00: Ending gallup and wrap-up

| Time | Action |
| --- | --- |
| 55:00–56:00 | One takeaway slide: choose a bounded useful task, define evidence, review what changed. |
| 56:00–59:00 | Switch to gallup.koodattu.dev for the repeated mood question. Discuss actual results. |
| 59:00–60:00 | Return to the closing slide. “Koodi halpeni. Vastuu ei.” Invite one practical experiment and direct optional feedback to the web app. |

Protect the last five minutes. If two minutes late, combine the tools explanation and shorten parallel work; preserve verification and review so the walkthrough stays complete.

## Rehearsal checks

1. Finish context at 35:00 and practical content at 55:00.
2. A newcomer can explain what the agent did, what the developer decided, and how success was checked.
3. Captures are real or explicitly illustrative. Unrun checks never appear as passed.
4. Charts retain population, units, observation period, and limitations.
5. Each slide's main point is visible quickly; speech supplies the detail.
6. Both browser handoffs and the fallback work without PowerPoint poll slides.
