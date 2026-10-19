# Hei ohjelmistokehitys, mitä kuuluu? (v3 deck)

[`hei-ohjelmistokehitys-mita-kuuluu.pptx`](hei-ohjelmistokehitys-mita-kuuluu.pptx) is built from the blueprint in [docs/19-presentation-structure.md](../../docs/19-presentation-structure.md) (version 2.5).

**Look: "Clean diff".** White slides, near-black text, one blue accent and monospace code-review cues:

- section labels such as `// 02 · nopeus`;
- green + and red − only where something is added or lost;
- PR-comment and code-block cards.

The title, the dividers, the answer and the closing slides are dark, like an editor. The speaker's style guide shapes the structure, voice and audience moments, not the look.

**What's in the deck:**

- **63 visible slides:** the blueprint's 48 slides plus their progressive builds. Each build is a separate slide.
- **18 hidden backup slides:** B1–B18, in the *Varadiat* section.
- **Finnish speaker notes on every slide**, with timing, what to say, caveats and full source links. Notes marked `TODO` list pre-event tasks.
- **Sections** follow the running order: Alku, A–D, Käytäntö, SuomiWoW, Loppu, Varadiat.
- **Fonts:** Segoe UI and Consolas, both standard on Windows. On a Mac, install them or expect substitutes.

## Placeholders to fill before the event

| Slide | What to do |
|---|---|
| 05 · aikajana | Replace the dashed box with a screenshot of the 2024 event post on the Lakeus-Devaus site. |
| 07 · gallup | Fill in the session code. |
| 20 · reaktio | Insert the Homer "D'oh!" GIF (check its licence), or delete the slide. |
| 27 · curl | Optional: replace the typographic headline with a cropped screenshot of the blog post. |
| 33, 56, 57 · data | Refresh the Finnish figures, plus the SuomiWoW screenshot and numbers, in November (see the blueprint's §10, step 7). |

## Notes

- **The memes are rebuilt from shapes and the speaker's avatar:** *Two buttons* (slide 15), *Find the differences* (slide 32) and the four-panel comic (slide 48). Swap in the original templates if you prefer.
- **The address-bug walkthrough is slides only** (speaker's decision). Check results are shown in grey as *odotettu* (expected), because nothing was run.

## Rebuilding

```bash
python output/v3/build/make_assets.py
```

```bash
NODE_PATH=<dir with pptxgenjs, sharp, react, react-dom, react-icons> PPTX_SKILL_DIR=<pptx skill dir> node output/v3/build/build-deck.js
```

```bash
python output/v3/build/dedupe_media.py output/v3/hei-ohjelmistokehitys-mita-kuuluu.pptx
```

`make_assets.py` needs Pillow and qrcode. It reads the speaker's photo and the SuomiWoW screenshots from the sibling `kuopio-pelaa-2026` repository, and makes the round avatar crop and the QR codes. `dedupe_media.py` removes the duplicate image copies that pptxgenjs embeds.
