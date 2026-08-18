# HTML presentation design brief

## Communication job

By the end of the session, a mixed Lakeus-Devaus audience should understand
that AI has made plausible implementation dramatically cheaper while moving
more value and responsibility into problem choice, context, verification,
integration, trust, distribution, and long-term ownership.

## Audience and context

- Finnish-speaking developers and adjacent professionals in Seinäjoki and
  Etelä-Pohjanmaa.
- Mixed experience and mixed AI adoption, from active agent users to skeptics.
- Projected in a room, but usable on a laptop or phone as an offline fallback.
- A 60-minute programme: intro, rapid polls, a short reveal, a 35-minute main
  story, and a complete close before optional discussion.

## Information hierarchy

1. One claim per slide, stated in the title.
2. Evidence appears only after the claim is understood.
3. Caveats and sources stay visible but subordinate.
4. Presenter notes hold timing, transitions, and detail that should not compete
   with audience-facing content.

## Interaction model

- Right arrow, Space, or Page Down reveals the next fragment before advancing.
- Left arrow or Page Up reverses fragments before returning to the prior slide.
- Home and End jump to the first and last slide.
- `N` opens presenter notes and slide sources.
- `O` opens a slide overview; `F` toggles fullscreen; `?` shows help.
- Swipe gestures provide a simple touch fallback.
- URL hashes preserve the current slide for refresh and deep links.

## Visual thesis

An editorial, projector-safe field guide: warm paper, dark ink, a Finnish-blue
primary accent, and a restrained coral warning accent. The background remains
stable throughout the deck. Layout silhouettes vary through typography, bars,
timelines, comparisons, and sparse diagrams rather than repeated card grids.

Typography uses system fonts so the deck remains offline-capable. Headings are
large, balanced, and short. Body copy is kept above presentation scale and is
reduced before type is reduced.

## Motion thesis

Motion explains sequence and state. Slide changes use a short, interruptible
opacity and horizontal movement. Fragments enter with a small vertical shift
and a short stagger controlled by the presenter. Exit motion is quieter than
entry motion. `prefers-reduced-motion` removes non-essential movement.

## Critical assumptions

- Audience-facing copy is Finnish.
- The event date, presenter name, venue, live voting URL, and session code are
  not yet available, so the deck does not fabricate them.
- Because the history of the live-voting application is unconfirmed, the reveal
  uses this presentation's own research and implementation process.
- Research is dated 15 August 2026; time-sensitive claims include an as-of date
  and source.

## Acceptance scenarios

- The complete argument can be presented with keyboard only.
- Every progressive slide is understandable at every reveal step.
- Polls can be shown as a hand-vote fallback when the live application is not
  available.
- The deck remains legible at 1920×1080, 1366×768, and a narrow mobile viewport.
- Presenter notes and sources are available without appearing on the audience
  canvas by default.
- Reduced-motion users receive immediate state changes without staged movement.
- The deck has no network or package dependency for core presentation behavior.

