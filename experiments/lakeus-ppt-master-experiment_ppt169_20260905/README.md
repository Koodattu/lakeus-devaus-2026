# Separate ppt-master experiment

A 23-slide Finnish redesign of the existing Lakeus-Devaus presentation. The original decks were not used as output targets. The 60-minute structure and gallups at https://gallup.koodattu.dev are retained.

Deliverable: [lakeus-devaus-2026-ppt-master.pptx](../../output/lakeus-devaus-2026-ppt-master.pptx).

## Build

Used [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master), skill version 6.3.0, downloaded on 5 September 2026 into `/private/tmp/lakeus-ppt-master-tools/ppt-master`. This was an isolated experiment, not a global skill installation. SKILL.md SHA256: e1c5a8c1af2c326bbe72de65b8a867c8099326bf2986ac76383d1fec0373f8fa. The attribution guard passed before the Generate PPTX route.

`design_spec.md` contains the full plan; `spec_lock.md` retains cross-slide design rules. The main agent authored the 23 complete SVG pages under `svg_output/`. `svg_final/` contains self-contained previews; `images/` reuses the two existing imagegen illustrations unchanged. Source content and notes are under `sources/`; adapted Finnish speaker notes are under `notes/`.

The export used ppt-master's `svg_to_pptx.py` with default native DrawingML conversion and `-a none`. Text, diagrams and bar-chart marks are editable PowerPoint objects. The bar chart is composed of shapes; it has no Excel Edit Data workbook. Images remain pictures. The default fade transition is retained.

To rebuild after edits: run the SVG quality checker at the final gate, split notes using `total_md_split.py`, build previews using `finalize_svg.py`, and export using `svg_to_pptx.py`, each serially. All scripts live under the installed skill's absolute directory. `finalize.mjs` applies the first-party package, geometry and import checks and writes a separate final output; use a new output filename for another iteration.

## Review

All 23 slides passed ppt-master's final checker, with no warnings. Native export postflight passed. The first-party finalizer passed package integrity, slide geometry, font policy and import for 23 slides. All 23 slides were inspected in native PowerPoint slideshow; one connector crossing text on slide 6 was corrected and the final file was reopened and that slide rechecked. The package contains 23 speaker-note parts, 242 native shape/text objects, 56 groups and two pictures.

The live preview server could not bind a local TCP port; native PowerPoint review was used instead. Teaching scenarios remain labelled as illustrative, and research caveats and source URLs remain in speaker notes.
