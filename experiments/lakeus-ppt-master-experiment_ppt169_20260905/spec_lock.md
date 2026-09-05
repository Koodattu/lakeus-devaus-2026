<!-- ppt-master-schema: spec-lock/v1 -->
# Execution Lock

## canvas
- viewBox: 0 0 1280 720
- format: PPT 16:9

## communication
- primary_language: fi-FI
- audience: Finnish developers, students, managers and adjacent professionals
- objective: Explain current AI development evidence and teach how to scope one task and assess its result.
- core_message: Koodi halpeni. Vastuu ei.

## mode
- mode: custom
- mode_references: instructional
- mode_behavior: Explain evidence, then carry one bounded software task through context, tools, correction, review and feedback.

## visual_style
- visual_style: custom
- visual_style_references: editorial, swiss-minimal
- visual_style_behavior: Editorial hierarchy and asymmetric columns with planar geometry, bold sans type and whitespace; large statistics and dark section fields vary emphasis by page job.

## colors
- background: #F4F0E7
- secondary_background: #10243A
- primary: #10243A
- accent: #2563EB
- secondary_accent: #D8F36A
- body_text: #162A3D
- secondary_text: #52616B
- divider: #CBD3D8
- inverse: #F8FAFC
- warning: #C45635
- image_rendering: custom
- image_rendering_behavior: Reuse the existing print-textured illustrations unchanged; native text and evidence sit outside the artwork.

## typography
- font_family: Arial
- title_family: Arial
- body_family: Arial
- code_family: Courier New
- body: 32
- title: 48
- subtitle: 40
- annotation: 24
- footnote: 20
- display: 96
- code: 28

## icons
- library: none
- inventory: none

## images
- workbench: images/ai-workbench.png | source=ai | crop=adaptive
- maintenance: images/maintenance-illustration.png | source=ai | crop=no-crop

## page_visualizations
- P07: chart/horizontal_bar_chart

## page_rhythm
- P01: anchor
- P02: dense
- P03: breathing
- P04: dense
- P05: anchor
- P06: breathing
- P07: anchor
- P08: breathing
- P09: breathing
- P10: anchor
- P11: anchor
- P12: dense
- P13: dense
- P14: dense
- P15: dense
- P16: dense
- P17: dense
- P18: breathing
- P19: breathing
- P20: breathing
- P21: anchor
- P22: breathing
- P23: anchor

## pptx_structure
- mode: flat

## forbidden
- `mask`, `<style>`, `class`, external CSS, `<foreignObject>`, `textPath`, `@font-face`, `<animate*>`, `<set>`, `<script>` / event attributes, `<iframe>`
- HTML named entities in text; write typography as raw Unicode and escape XML reserved characters
