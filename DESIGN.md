# PowerPoint redesign brief

**Updated 5 September 2026.** This is the design brief for the practical 60-minute version. The [updated deck](output/lakeus-devaus-2026-practical.pptx) was edited through native PowerPoint computer use. The HTML prototype predates this brief. See the [storyboard](docs/16-practical-presentation-storyboard.md) and [design research](docs/15-presentation-design-research.md).

## Communication job

Help a mixed Finnish-speaking Lakeus-Devaus audience understand what AI changes in software development and follow a modern workflow from a useful task to a verified, reviewed result. Practical use has equal weight with the research and argument.

The programme is **5 minutes intro, 10 minutes opening gallup, 20 minutes context, 20 minutes practical workflow, 5 minutes closing gallup and wrap-up**. Both gallups run in gallup.koodattu.dev. PowerPoint holds the talk and browser-handoff notes, without voting-question slides.

## Visual direction

A lively technical field guide with evidence large enough to examine. Dark opening and transition slides give the talk rhythm; light research slides support reading charts; darker code surfaces suit short diffs and captured output. This replaces the earlier rule that every background must remain the same.

The strongest visual on each slide should explain the message. Use a workflow diagram for sequence, a chart for measured quantities, a cropped screenshot for observed behaviour, and a photograph or illustration to establish a concrete setting. Colour and layout variation alone will not solve a text-heavy talk.

## Colour and typography

| Role | Target |
| --- | --- |
| Dark backgrounds and primary ink | Deep navy `#10243A` |
| Light evidence backgrounds | Warm paper `#F4F0E7` |
| Primary evidence accent | Blue `#2563EB` on light surfaces |
| Focal accent on dark surfaces | Yellow-green `#D8F36A`, used sparingly |
| Exceptions or corrections | Coral `#EC765A`, paired with labels |
| Text on dark surfaces | Warm white `#F8FAFC` |

The current native deck retains Arial message headings and uses Aptos for body text and editable code excerpts. Target 36–48 pt message headlines, 26–32 pt body text, 22–26 pt code, and 18–20 pt essential captions. Cover typography may be larger. These are production targets: shorten text before shrinking it and inspect the real projected composition.

Use colour consistently; never encode meaning by colour alone. AI and comparison-group chart labels must be explicit, without implying that one colour is inherently good or bad.

## Composition vocabulary

1. Full-width dark opening or closing with a single dominant message.
2. Large photo/illustration with concise type and generous contrast.
3. Editable process diagram, preferably revealed in a few meaningful steps.
4. Cropped screenshot or diff with a small number of nearby annotations.
5. Native chart with direct labels and visible scope.
6. Clearly separated comparison with units and contexts named.
7. Short task brief or handoff treated as the artifact the speaker explains.

Choose a composition for the information. Avoid three consecutive title-and-body layouts, repeated three-card grids, generic dashboards, and stock robot imagery. Use at least six composition types across the planned sequence, without a rigid quota overriding clarity.

Keep a stable alignment grid, generous margins, and consistent typography across light and dark slides. Diagrams and charts remain editable PowerPoint objects. Real screenshots remain images and must not be passed off as editable UI.

## Evidence and assets

- One main message per slide; support it with something the audience can inspect.
- Keep long explanations, complete prompts, transitions, and full source links in speaker notes.
- Keep essential population, unit, date, and uncertainty context beside the evidence.
- The Microsoft and METR results measure different quantities. Do not put them on a shared percentage axis.
- The learning chart uses a 0–100% quiz-score scale with 50% and 67%, identifying the immediate quiz and unfamiliar-library experiment.
- Use actual demo captures for the bug, fix, checks, and browser result. Until captured, label teaching diagrams and snippets as illustrative.
- Mark the maintenance-record scenario as hypothetical. Never invent client provenance, personal experience, outcomes, or time savings.
- Record image sources and licences, or generation provenance. Generated imagery may illustrate a setting, but does not supply evidence of a real workflow outcome.

## Pacing and stage use

The practical section follows one address bug; the maintenance-record example broadens it to product discovery and use. Reuse concepts, but show a different visual when returning to a case.

Use short, presenter-controlled reveals only when they clarify a sequence. Avoid elaborate transitions and compulsory live generation. Prepared captures keep the walkthrough predictable; a rehearsed live run is optional.

Browser handoffs occur at 05:00 and 56:00. Speaker notes specify when to return. If voting fails, use the existing questions verbally for a show of hands.

## Quality checks

The main message should be identifiable within a few seconds as a practical glance test. This is a design heuristic, not a measured attention-span claim.

Inspect the slide sorter for rhythm, then every slide in PowerPoint slideshow view. Check clipping, contrast, line wrapping, chart labels, screenshot legibility, and consistency. Verify the final deck's native structure and that charts/diagrams intended to be editable are editable. A successful export alone is insufficient.

Rehearse to the 35-minute transition and 55-minute close. The practical walkthrough must leave a newcomer able to explain what the agent did, what the person decided, and what evidence supports the result.

## HTML rebuild — 5 September 2026

The HTML now implements the same 60-minute editorial plan in 25 slides, including dedicated opening and closing gallup handoffs. Its visual system uses warm paper, navy, vivid blue, and lime, with Arial for presentation copy, monospace for code, and Georgia for the fictional field note. Illustrations reuse the two locally generated assets with provenance in `output/assets/README.md`.

The 1600 × 900 landscape canvas scales to the available screen. Portrait layouts reflow into a scrollable slide, preserving readable text. Content stays semantic HTML, with a zero-based bar chart, labelled comparisons, varied flat compositions, and an interactive address example. The example switches authored states locally and is explicitly a teaching simulation.

Keyboard navigation, slide overview, notes and sources, fullscreen, blackout, deep links, reduced motion, and print layouts support stage use. Notes and overview are native modal dialogs. The 25 rendered slides and phone layouts were visually reviewed in Chrome. Printing was checked as 25 pages with extractable text. This HTML rebuild does not regenerate any PowerPoint file.

## Native build record

Completed 5 September 2026 using `ppt-visual` and native PowerPoint computer use. The native Office theme supplies navy and teal alongside warm paper and white; the palette table above remains the broader design direction. Two generated illustrations establish the developer workspace and hypothetical maintenance scenario. SmartArt and short editable comparison panels carry the explanations. The learning-results graphic consists of editable bars and labels, with a 0–100% scale; Excel was unavailable for native chart-data editing. The address walkthrough remains explicitly illustrative, with no fabricated screenshots or claimed test runs. All 23 slides were reviewed in slideshow view, and package/layout/import validation passed.
