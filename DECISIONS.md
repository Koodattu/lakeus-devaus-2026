# Presentation decisions

Content direction updated **5 September 2026** from the [research refresh](docs/13-research-refresh-2026-09-05.md). The [one-hour run of show](docs/02-one-hour-run-of-show.md) is the main draft for the future PowerPoint. HTML-specific decisions below describe the existing prototype.

## Structural directions considered

| Direction | Strength | Risk | Decision |
| --- | --- | --- | --- |
| Editorial argument | Builds one causal chain from capability to responsibility; works for a mixed audience | Requires aggressive cutting of the broad research dossier | Selected |
| Data-led industry report | Makes the research volume visible and supports detailed comparison | Turns the talk into a catalogue, dates quickly, and crowds slides | Rejected for the main deck; evidence remains in sources and notes |
| Kinetic agent-tool showcase | Makes 2026 workflows feel new and technically impressive | Becomes vendor-centric, animation-heavy, and weakens the human/value ending | Rejected; one workflow sequence is retained |

## Selected narrative

```text
delegation expands
        ↓
first versions and experiments become more affordable
        ↓
output, value, and learning can diverge
        ↓
verification and understanding need investment
        ↓
value moves toward judgment, trust, and ownership
```

The polls describe the room. A transparent process reveal then makes a correction,
verification, and ownership visible. Five movements follow: history (4 minutes),
delegation (7), productivity (7), verification and learning (8), and value, people,
and Finland (9). The close turns responsibility into three practical choices.
The overall format remains 5 + 10 + 5 + 35 + 5 minutes.

## Content decisions

- Keep Brooks and Naur; move Lehman, Parnas, full CASE/4GL history, model tables,
  geopolitics, legal detail, and company-by-company comparisons out of the main
  flow.
- Present the Microsoft and METR results as different experimental boundaries,
  not competing universal productivity constants.
- Use the later METR research-design note to prevent the early-2025 slowdown
  result from being presented as a current 2026 estimate.
- Define AI slop by externalized evaluation cost, not visual sameness or origin.
- Use Godot and Linux as two contrasting responses to reviewer scarcity; keep
  ESLint in notes and acknowledge that automation can improve verification too.
- Treat Finnish market weakness as mixed evidence. AI is one pressure and one
  product category, not a proven single cause.
- Prefer a real software task with a mistake, correction, evidence, and owner.
  Use the documented presentation research process as the current reveal fallback;
  do not invent software provenance or a failure story.
- Use MirrorCode as a concrete capability case, with its checkable specification
  and estimated human baseline explicit. Retain HubSpot for the engineering lesson;
  remove the multiple-vendor code-volume showcase.
- Include the August METR incident investigation as a short autonomy boundary case,
  clearly distinguished from ordinary workplace use. Keep technical details in reserve.
- Use task substitution to explain newly feasible work and distinguish output from
  value. Merge repeated bottleneck explanations.
- Anchor apprenticeship in the coding skill-formation experiment, preserving the
  immediate-comprehension boundary. Move the broad critical-thinking survey to notes.
- Apply the August Finnish sector figures and Stanford employment revision. Keep
  observation periods and non-causal interpretation visible; company detail is reserve.
- Use one explicitly hypothetical local maintenance-record scenario for callbacks.
  It is a product discussion example, not a customer testimonial.
- Close with accepted outcomes and rework, deliberate learning, and ownership before
  release. Keep the repeated mood poll and final responsibility question.

## Existing HTML prototype decisions

- One warm-light theme; no recurring light/dark background switching.
- Vanilla HTML, CSS, and JavaScript; no runtime framework, animation library, or
  external font dependency.
- Progressive fragments are presenter-controlled. Automatic animation is used
  only for short state transitions.
- Notes, sources, overview, progress, and help are built into the same document
  so the deck is portable.
- Core navigation remains semantic and keyboard accessible. Visible controls
  meet a 44-pixel target and motion respects user preferences.

