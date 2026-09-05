# Presentation design research and skill selection

Research date: **5 September 2026**. Purpose: make the talk more practical and visually engaging while retaining editable PowerPoint slides and browser-based gallups. This pass changes the production brief and storyboard, not the PPTX itself.

## Findings that change this presentation

The [assertion–evidence tutorial](https://www.craftscicom.org/ae_tutorial.html), edited by Penn State's Michael Alley, recommends building a technical talk around messages supported by visual evidence, with secondary detail in notes. Our application: a slide about verification should show the observed behaviour or a test, rather than a paragraph saying verification matters. This is established presentation guidance; we have not measured its effect on this audience.

[Duarte's presentation workflow](https://www.duarte.com/blog/make-a-presentation/) starts with the talk's central idea and narrative before slide production. Its [Glance Test](https://www.duarte.com/resources/guides-tools/the-glance-test/) asks whether the main point is understandable within roughly three seconds. Treat that as a design heuristic, not a universal scientific attention-span limit. Our application: keep a clear focal point and let the speaker explain the details.

These sources support a change in communication, not merely a new colour theme. The concrete design and timing decisions below are our editorial synthesis.

## GitHub candidates inspected

| Candidate | Relevant contribution | Fit and decision |
| --- | --- | --- |
| [hugohe3 / ppt-master](https://github.com/hugohe3/ppt-master) | Narrative planning, varied visual systems, SVG-to-native-PowerPoint production, notes, charts and tables | **Preferred production candidate after the user's suggestion.** Sample visuals and PPTX structure inspected; not installed or run locally. Details below. |
| [claude-office-skills / ppt-visual](https://github.com/claude-office-skills/skills/tree/9702ad817c25f22b7d9f5c455734b37f554e6801/ppt-visual) | Composition patterns, hierarchy, contrast, visual concepts | **Installed.** A guidance-only addition that can complement native PowerPoint work. It does not generate files or images. |
| [siril9 / presentation-skill](https://github.com/siril9/presentation-skill) | Source planning, visual anchors, composition variety, QA | Useful reference, but brings a separate build/runtime workflow that duplicates existing presentation tooling. Not installed. |
| [Gabberflast / academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | Argument structure and action titles | Its academic defaults, including white content backgrounds and restrained imagery, are a poor fit for the requested visual direction. Not installed. |
| [K-Dense-AI / scientific-slides](https://github.com/K-Dense-AI/scientific-agent-skills/tree/main/skills/scientific-slides) | Research storytelling and visual planning | Defaults include whole-slide image generation and PDF delivery; adds a different image/API workflow. Not installed for this editable deck. |
| [sk2977 / presentation-builder](https://github.com/sk2977/presentation-builder) | Storyboard-first process and graphic inventory | Main output is HTML/CSS exported to PDF. Wrong production route for this task. Not installed. |

Selection is based on compatibility and inspected instructions, not popularity or a benchmark proving better design. Installing a skill does not establish that a deck is good.

## Follow-up: PPT Master

The user suggested [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) during the research. It is a stronger production candidate than the guidance-only skill initially selected.

Its [documented architecture](https://github.com/hugohe3/ppt-master/blob/main/docs/why-ppt-master.md) separates narrative purpose from visual style and compiles constrained SVG into native PowerPoint DrawingML. That is compatible with delivering an editable deck, though it is a different authoring route from operating PowerPoint's UI. PowerPoint should still be used for final visual and editing checks.

The [UV example](https://hugohe3.github.io/ppt-master-examples/viewer.html?project=ppt169_uv_launch) was visually inspected on the cover, workflow, and chart pages. The workflow uses a sequence, enlarged commands, and outcome labels; the chart gives the measured quantity and context space beside the plot. These are useful composition references for our practical section. This visual inspection did not audit its UV factual claims.

The public native-chart variant was downloaded into memory and inspected as a ZIP/XML package, without executing repository code. Observed: **14 slides, 379 native shape elements, 333 text runs, two native tables, one chart part with an embedded XLSX workbook, and 14 notes pages**. This substantiates native structure in that example; it is not a full rendering or editability certification across PowerPoint versions.

Two route details matter:

- Its [Beautify profile](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/workflows/profiles/beautify-pptx.md) freezes wording, slide count, and order. Our content revision therefore belongs in its main Generate workflow, using the new source plan.
- Its [export documentation](https://github.com/hugohe3/ppt-master#quick-start) distinguishes editable chart/table shapes from data-backed chart/table objects. Request `--native-charts-and-tables` for the latter.

The package includes Python tooling and dependencies, unlike `ppt-visual`. Its [skill entry](https://github.com/hugohe3/ppt-master/blob/main/skills/ppt-master/SKILL.md), generation and beautification instructions, dependency list, and attribution-guard source were inspected as research. No scripts were executed, no dependency installation was performed, and no project files were transmitted to a hosted presentation service. A full code audit and a local generation trial have not been performed.

**Recommendation:** prefer PPT Master for a programmatic rebuild, with the revised Finnish storyboard as input and final QA in PowerPoint. Retain `ppt-visual` as optional design guidance. This recommendation does not mean the original request for direct PowerPoint computer use has silently been replaced or that PPT Master is already installed.

## Installation record

- Repository: `claude-office-skills/skills`
- Path: `ppt-visual`
- Pinned revision: `9702ad817c25f22b7d9f5c455734b37f554e6801`
- Destination: `/Users/koodattu/.codex/skills/ppt-visual`
- Installed with the built-in skill-installer helper using the download method.
- The inspected skill directory contains one `SKILL.md` file and no executable scripts.
- The skill metadata declares MIT licensing.
- Installation succeeded; automatic discovery is expected on the next turn. Its guidance was read for this brief.

The skill's model recommendations and references to other tools do not change this task's model or require another connector. Its generic layout examples are a starting vocabulary, not a template to repeat on every slide. Existing presentation creation and verification tooling remains responsible for the file.

## Rebuild decisions

1. Adopt **5 + 10 + 20 + 20 + 5 minutes**, with the two substantive halves equally weighted.
2. Follow one address-editing bug from task to reviewed delivery. Reuse the hypothetical maintenance-record scenario for discovery and ongoing operation.
3. Teach tools through their purpose: project instructions, a reusable skill, a connected service, a test command, a browser, and an isolated worktree.
4. Replace repeated text layouts with diagrams, cropped evidence, a small readable diff, a real screenshot sequence, and one properly labelled statistical chart.
5. Use dark opening/transition slides, light evidence slides, and dark code/evidence surfaces. Keep typography and spacing consistent across them.
6. Put historical detail, research qualifications, and long prompts in notes. Preserve essential caveats beside charts.
7. Reserve the unusual incident and detailed policy comparisons for discussion to protect the practical half.
8. Keep both gallups in [gallup.koodattu.dev](https://gallup.koodattu.dev).

## What “more visual” means here

| Previous treatment | Proposed treatment | What it helps the audience understand |
| --- | --- | --- |
| “Delegation needs feedback” with text | A task, agent, check, and correction loop | Where feedback changes the next action |
| Two large learning percentages | Two native bars on a 0–100% scale, with study context | The specific measured difference |
| A list of tool categories | The running example connected to code, instructions, ticket, and browser | Why each tool is being used |
| “Review needs responsibility” with text | An annotated handoff showing cause, evidence, and open decisions | What a useful result looks like |
| An abstract product/value statement | Input note, draft maintenance record, human correction | Where domain judgement enters the workflow |

Photos or illustrations should establish a concrete setting. Screenshots should show actual evidence. Avoid generic robot imagery, fabricated terminal transcripts, and dense screenshots reduced until unreadable.

## Production status

The updated [run of show](02-one-hour-run-of-show.md), [storyboard](16-practical-presentation-storyboard.md), and [design brief](../DESIGN.md) define the rebuild. The existing 23-slide PPTX remains the previous version. New demo captures, image assets, native charts/diagrams, revised speaker notes, and a full visual review are still production work.
