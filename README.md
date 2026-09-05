# Hei ohjelmistokehitys, mitä kuuluu?

Working material for an hour-long Lakeus-Devaus talk about how AI changed software development from 2022 to 2026—and what that change asks of developers next.

This repository contains an HTML presentation, PowerPoint versions, and the broader working material behind them: the argument, evidence, audience polls, workflow examples, and material cut from the main talk.

The **[one-hour run of show](docs/02-one-hour-run-of-show.md)** is the revised content plan, updated **5 September 2026**: 5 minutes intro, 10 minutes gallup, 20 minutes context, 20 minutes practical AI workflow, and 5 minutes closing gallup and wrap-up. The [slide storyboard](docs/16-practical-presentation-storyboard.md) and [design brief](DESIGN.md) specify the rebuild. The [updated PowerPoint](output/lakeus-devaus-2026-practical.pptx) now follows this direction. The [red thread](docs/01-red-thread.md) explains the underlying argument.

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
- [Presentation design research and installed skill](docs/15-presentation-design-research.md)
- [Practical presentation storyboard](docs/16-practical-presentation-storyboard.md)

The earlier research dossiers retain their dated August snapshots. The **5 September research refresh** records the current corrections and qualifications for selected evidence; it is not a complete re-audit of the source ledger. Follow the updated main draft rather than copying older figures into new slides.

## PowerPoint presentation

The editable [updated PowerPoint](output/lakeus-devaus-2026-practical.pptx) contains **23 slides**, revised directly in Microsoft PowerPoint through computer use with the `ppt-visual` skill. It includes a dedicated practical AI workflow section, two generated illustrations, editable SmartArt, a results graphic, contrasting panels, and dark section slides. [Finnish speaker notes](output/lakeus-devaus-2026-practical-notes.md) are also embedded in the deck with timings, transitions, source links, and evidence qualifications.

The address-bug walkthrough uses explicitly labelled teaching diagrams and code, not captured demo execution or claimed passing tests. The results graphic uses editable shapes because PowerPoint could not open Excel to edit chart data. All 23 slides were inspected in native slideshow view; package integrity, layout geometry, and import checks passed. The [previous draft](output/lakeus-devaus-2026.pptx) remains unchanged.

Opening and closing voting, plus final feedback, take place in [gallup.koodattu.dev](https://gallup.koodattu.dev). The notes mark the browser handoffs. The deck contains no voting-question slides.

## HTML presentation

Open [`index.html`](index.html) directly in a browser. Rebuilt on **5 September 2026**, it contains **25 Finnish slides** following the 5 + 10 + 20 + 20 + 5 minute programme. The count includes two browser-handoff slides for [gallup.koodattu.dev](https://gallup.koodattu.dev); the voting questions and results stay in that service.

The deck combines navy, warm paper, blue and lime with two illustrations, labelled research figures, an end-to-end address-bug walkthrough, code, project instructions, and workflow diagrams. All slides have Finnish notes and timings. Research qualifications and source links accompany the relevant material.

The address example on slide 16 has three clickable states: input, save and reload. It is an explicitly labelled teaching simulation, not a running customer system or a claim of completed regression tests.

There are no runtime dependencies, external fonts or build steps. Keep `index.html`, `styles.css`, `presentation.js`, and both PNG files in `output/assets/` together. Slides work offline; opening the gallup or research links requires a connection. Landscape screens use a scaled 16:9 canvas; portrait screens use scrollable reading layouts. Browser printing produces one page per slide.

Presentation controls:

- Right arrow, Space, or Page Down: next slide.
- Left arrow or Page Up: previous slide.
- Home / End: first / last slide.
- `N`: presenter notes and slide sources.
- `O`: slide overview.
- `F`: fullscreen.
- `B`: black out the screen; press `B` or Escape to return.
- `?`: keyboard help.

Use `#/16` in the URL to open a particular slide. On a phone, swipe horizontally to change slides and scroll vertically to read a longer slide. Space activates a focused button or link, so the interactive example remains keyboard accessible.

The HTML was checked in Chrome across desktop, tablet and phone sizes, including all 25 slides, keyboard controls, modal focus, the example's states, deep links, offline loading, and 25-page print output. The PowerPoint files are separate versions.
