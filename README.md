# Hei ohjelmistokehitys, mitä kuuluu?

Working material for an hour-long Lakeus-Devaus talk about how AI changed software development from 2022 to 2026—and what that change asks of developers next.

This repository contains an HTML presentation prototype and the broader working material behind it: the argument, evidence, audience polls, possible demonstrations, and material cut from the main talk.

The **[one-hour run of show](docs/02-one-hour-run-of-show.md)** is the main content draft behind the PowerPoint, updated **5 September 2026**. Start there for the structure, timed beats, selected evidence, transitions, and closing takeaways. The [red thread](docs/01-red-thread.md) explains the argument.

## Working thesis

> **Koodi halpeni. Vastuu ei.**
>
> AI did not remove software engineering. It moved the bottleneck from producing code toward choosing problems, specifying intent, verifying results, integrating systems, earning trust, and finding users.

## Working documents

- [Brief and principles](docs/00-brief-and-principles.md)
- [Red thread](docs/01-red-thread.md)
- [One-hour run of show](docs/02-one-hour-run-of-show.md)
- [Live polls](docs/03-live-polls.md)
- [Research notes](docs/04-research-notes.md)
- [Finland and Lakeus-Devaus](docs/05-finland-and-lakeus.md)
- [Demo and reveal ideas](docs/06-demo-and-reveal.md)
- [Editorial backlog: keep, cut, and test](docs/07-editorial-backlog.md)
- [Source ledger](docs/08-source-ledger.md)
- [Veteran lens: what changed and what did not](docs/09-veteran-lens.md)
- [AI-native software development in August 2026](docs/10-ai-native-development-workflows.md)
- [Workflow scenarios, field lessons, and open questions](docs/11-workflow-scenarios-and-field-notes.md)
- [Career anxiety, expectations, and the value shift](docs/12-career-anxiety-and-value-shift.md)
- [September research refresh and source corrections](docs/13-research-refresh-2026-09-05.md)

The earlier research dossiers retain their dated August snapshots. The **5 September research refresh** records the current corrections and qualifications for selected evidence; it is not a complete re-audit of the source ledger. Follow the updated main draft rather than copying older figures into new slides.

## PowerPoint presentation

The editable [PowerPoint deck](output/lakeus-devaus-2026.pptx) contains 23 Finnish slides with speaker timing, source links, and evidence qualifications in the notes. It follows the September content plan and uses the documented research correction as the process demo.

Opening and closing voting, plus final feedback, take place in [gallup.koodattu.dev](https://gallup.koodattu.dev). The notes mark the browser handoffs. The deck contains no voting-question slides.

## HTML presentation

The earlier prototype is in [`index.html`](index.html). It has no runtime
dependencies and can be opened directly in a browser. It has not been updated to
match the September content plan.

Presentation controls:

- Right arrow, Space, or Page Down: reveal the next item or advance.
- Left arrow or Page Up: reverse the current reveal or go back.
- `N`: presenter notes and slide sources.
- `O`: slide overview.
- `F`: fullscreen.
- `?`: keyboard help.

The seven poll slides are an offline/hand-vote fallback. A live-voting system
can replace them during the event without changing the rest of the deck.
