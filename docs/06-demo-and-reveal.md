# Demo and reveal ideas

The demonstration should answer a conceptual question: **what human work becomes more important when an agent can produce a large share of the visible artifact?** It should not become a product tour or a tutorial.

## Recommended demo pattern: artifact first, process second

1. Let the audience use or inspect a real, polished artifact.
2. Ask what they infer about how it was made.
3. Reveal the process in layers.
4. Show one thing the agent did well and one thing the human had to catch, decide, or constrain.
5. End with ownership: who maintains it, handles failure, and decides whether it deserves to exist?

The reveal works when it changes the category from “AI-generated” to “AI-assisted engineering system.”

## Candidate: the live-voting visualization itself

The separate `live-voting-visualization` project is well suited structurally:

- the audience experiences it before discussing it;
- its purpose is legible without technical explanation;
- it has a product brief and explicit participant/presenter/display roles;
- it includes real-time behavior, persistence, tests, and operational constraints;
- it has a visible public surface and invisible engineering decisions;
- it is directly useful to the event rather than a toy created only for a demo.

### Important condition

Do not say the project was AI-generated or agent-built until its actual history is confirmed. If it was not developed that way, it can still be the interaction layer, but the reveal should use another project or the process of preparing the presentation itself.

## What to show—not how to click through a tool

A five-minute sequence could use five artifacts:

1. **One-sentence outcome:** “A participant joins anonymously, votes once, can change the vote while open, and sees a live result.”
2. **Constraint excerpt:** single-choice, 2–5 options, 100 participants, final 160-character feedback wall, no reopening closed questions.
3. **Agent task:** a bounded request with acceptance criteria, not a giant prompt transcript.
4. **Verification:** one or two meaningful tests or a failure the tests exposed.
5. **Human decision:** an example where product judgment, privacy, interaction design, or scope mattered more than code generation.

If the development history supports it, add a compact contribution view:

- initial brief;
- agent-produced candidate change;
- review feedback and revised change;
- checks that passed;
- what remains the owner’s responsibility.

Avoid line-count theater. The percentage of tokens typed by a human does not measure authorship, value, or responsibility.

## Suggested reveal script

> “Olette käyttäneet tätä jo puoli tuntia. Kuka tämän teki?”

After the origin poll:

> “Kysymys oli vähän väärä. Agentti teki paljon näkyvästä työstä—jos tämän projektin historia sen vahvistaa. Mutta se ei päättänyt miksi tämä on olemassa, kenelle se on tehty, mitä siinä ei saa olla, milloin tulos on riittävän luotettava tai kuka vastaa illan aikana. Parempi kysymys ei ole ‘ihminen vai AI?’ vaan ‘millaisessa järjestelmässä tämä syntyi, millä näytöllä se hyväksyttiin ja kuka omistaa seuraukset?’”

Replace the conditional sentence with the exact truth once the project history is verified.

## Alternative: reveal the presentation’s own research process

The talk itself can be a second-order example:

- the speaker supplied the audience, themes, local context, and desired discussion format;
- an AI agent searched current sources, challenged causal claims, and organized an editorial backlog;
- the speaker chose the thesis, rejected material, checked the sources, and owns every statement on stage;
- live audience votes become new context the prepared material could not predict.

This is honest and relevant, but weaker visually than a working software artifact. It is best used as a short closing disclosure, not the main reveal.

## Alternative project shapes

If another personal project is a better fit, prefer one with:

- a real user and consequence;
- enough polish that origin is not obvious;
- accessible before/after or development artifacts;
- at least one nontrivial constraint;
- a verifiable failure, revision, or human rejection;
- ongoing ownership after generation.

Avoid examples that are primarily:

- a landing page whose only lesson is visual polish;
- a one-shot toy with no users, data, or maintenance;
- confidential client work that needs awkward redaction;
- a success story with no visible judgment or correction;
- a demo dependent on live model latency or network reliability.

## Project inventory to complete later

| Candidate | Real users? | AI’s actual role | Human judgment to expose | Verification evidence | Safe to show? |
| --- | --- | --- | --- | --- | --- |
| Live voting | Yes, event audience | To confirm | Product constraints, privacy, session flow | Tests and live behavior | Likely; confirm history |
| Presentation research | Yes, event audience | Research and structuring | Thesis, inclusion, claims, responsibility | Sources and editorial choices | Yes |
| Personal project 2 | To fill | To fill | To fill | To fill | To fill |
| Personal project 3 | To fill | To fill | To fill | To fill | To fill |

## Ethical staging

A temporary reveal is fair if the audience is not asked to make a consequential decision based on false provenance and the truth arrives within the session. The purpose should be to inspect assumptions, not embarrass participants.

- Never invent human authorship or hide a collaborator.
- Distinguish AI-assisted, agent-implemented, and fully automated claims.
- Do not expose private prompts, credentials, user data, or proprietary code.
- Give credit for libraries, templates, designs, and human contributors.
- Show uncertainty and mistakes, not only the clean final path.
- Disclose that the presentation itself used AI assistance.

## Production plan for the eventual deck

Prepare the demo as static assets even if the live system is used:

- a 20–30 second screen recording of the core interaction;
- high-resolution screenshots of the relevant brief, test, and result;
- one redacted task/response excerpt;
- one diagram of the human–agent–verification loop;
- a static image of the poll question and options;
- an offline fallback result to discuss.

The presentation should never depend on generating code live.

## What this segment must prove

The segment earns its time only if participants can articulate at least one of these afterward:

- “I could not determine quality or authorship from surface appearance alone.”
- “The brief and tests were part of the implementation.”
- “The human’s work moved into constraints, review, and product decisions.”
- “Someone still has to own the result.”

If it proves only that an AI tool can make an application, it repeats a claim the audience already knows.
