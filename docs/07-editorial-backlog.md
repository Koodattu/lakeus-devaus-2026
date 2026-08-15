# Editorial backlog: keep, cut, and test

This is where good ideas are preserved without forcing them into the main talk.

## Must keep in the main talk

| Material | Why it is structural | Maximum time |
| --- | --- | ---: |
| Intro and central tension | Gives every later topic one question to answer | 5 min |
| Seven-question quick-fire gallup | Profiles the room without turning polls into mini-discussions | 10 min |
| Truthful personal workflow/project reveal | Makes the change concrete and exposes human judgment | 5 min |
| Veteran test: Brooks and Naur | Establishes what previous revolutions teach and what may be different | 5 min |
| 2022→2026 shift, AI-native control system, and jagged capability | Shows the move from answers to delegated outcomes and why frontier autonomy differs from normal practice | 7 min |
| Conflicting productivity evidence and J-curve | Builds epistemic honesty and moves measurement from task to system | 7 min |
| Review scarcity, slop, and ownership | Unifies quality, security, maintainer burden, and apprenticeship | 6 min |
| SaaS, attention, people, Finland, and global synthesis | Shows where value moves without creating five separate talks | 7 min |
| Recap and repeated mood poll | Resolves the opening and opens the optional discussion | 5 min |

These working maximums leave several minutes inside the 35-minute main section for transitions. The formal presentation must be complete at 60 minutes; anything after that is optional discussion, not more required slides.

## Keep in reserve or appendix

| Idea | Why it is interesting | Why it should not lead |
| --- | --- | --- |
| Current model leaderboard | Demonstrates competition and convergence | Ages rapidly and turns discussion into brand preference |
| Detailed open-weight model comparison | Relevant to sovereignty and local use | Lakeus-Devaus covered model mechanics in 2024 |
| USA vs China model counts and investment | Gives global context | Can become a separate geopolitics talk |
| EU AI Act timeline | Affects European organizations | Requires fresh legal verification and can derail into compliance detail |
| AI compute and energy growth | Important externality | Weak connection to the main software-development loop unless audience asks |
| Detailed company-by-company consultancy table | Makes the local picture concrete | Different periods and businesses make comparison easy to misuse |
| App Store supply table | Strong attention provocation | Does not establish AI causality |
| Package hallucination rates | Concrete security example | Exact rates are setup-dependent |
| Entry-level employment data | Raises the apprenticeship problem | U.S.-specific and causality is contested |
| Long-term BLS projection | Useful counterweight to job panic | Also U.S.-specific and forecast uncertainty is high |
| Detailed Godot/Linux/ESLint policy comparison | Reviewer scarcity is tangible | Main talk needs the shared lesson, not every policy clause |
| AI data centers and power | Broad societal consequence | Not necessary to the central argument |
| Lehman’s individual laws and Parnas’ full aging argument | Deeply relevant to veterans | Brooks and Naur are enough for the short historical sequence |
| Complete 4GL/CASE history | Provides historical humility | Needs archival work and can become its own talk |
| Longitudinal AI-maintenance preprints | Directly relevant to the thesis | Evidence is young, selected, and easy to overstate |
| Full skills/MCP/browser/subagent taxonomy | Useful reference for technical discussion | A glossary would date quickly and turn the talk into a tools tour |
| Eight detailed workflow scenarios | Makes autonomy concrete across development contexts | Main talk needs one or two contrasts; the complete set belongs in notes or discussion |
| Self-improving agent harnesses | A plausible next frontier beyond longer tasks | Very early evidence and too much conceptual overhead for the main narrative |
| Reddit career-panic discussion | Makes uncertainty, identity, and workplace culture emotionally concrete | A self-selected thread is not a forecast or labor-market sample |

## Cut from the first version

| Idea | Reason to cut now |
| --- | --- |
| A complete 2000–2026 history of software development | Consumes the hour and invites false comparisons between incomparable revolutions |
| Step-by-step prompting or agent tutorial | Conflicts with the stated presentation/discussion format |
| Ten-model feature matrix | Becomes obsolete and mistakes product shopping for industry analysis |
| Live coding | Fragile, slow, and centers spectacle instead of process |
| “Top 10 AI tools I use” | Vendor-centric and weakens the red thread |
| Generic optimism/pessimism debate slide | The evidence tensions and room polls already embody it better |
| App-store release-count causality claim | Available transparency data cannot show that AI created the increase |
| Claim that Finnish government cuts explain named company results | Not established by the collected evidence |
| Claim that all SaaS becomes disposable | Ignores data, integration, security, support, compliance, and ownership |
| Claim that code no longer matters | Confuses reduced marginal production cost with zero engineering value |

## Claims to test before slide production

| Working line | Status | Responsible formulation |
| --- | --- | --- |
| “Koodi halpeni. Vastuu ei.” | Keep | A thesis/metaphor, not a price index. Support with workflow and evidence. |
| “The unit of delegation moved from a line to a task.” | Keep with nuance | “Is moving”; capability and trust vary by context. |
| “2026 changed development more than 2000–2025.” | Provocation only | Ask the room, then narrow to who can produce plausible software and at what marginal cost. |
| “Anyone can make software.” | Rewrite | “More people can make a plausible prototype.” Production and ownership barriers remain. |
| “AI makes developers 26% faster.” | Reject as general claim | One field-experiment synthesis found 26.08% more completed tasks in its settings. |
| “Experienced developers are 19% slower with AI.” | Reject as general claim | One small randomized study found this in familiar mature open-source repositories. |
| “AI caused junior employment to fall 20%.” | Reject causal wording | U.S. employment declines are concentrated among young workers in AI-exposed occupations; causal attribution remains contested. |
| “Open-source models caught up.” | Rewrite and date | Use open-weight terminology and a dated performance-gap measure. |
| “SaaS is dead.” | Use as question | Point tools and generic feature layers face pressure; systems and accountability remain. |
| “Finnish consultancies are failing because of AI.” | Reject | Show a mixed market and treat AI as one interacting pressure and service opportunity. |
| “Everything is AI slop.” | Rewrite | Cheap generation can externalize evaluation cost; process and ownership distinguish good work from slop. |
| “AI removes only accidental complexity.” | Too strong | AI also proposes conceptual structures; ask whether it resolves essential complexity or hides it behind plausible output. |
| “Nobody understands AI-generated systems.” | Reject as general claim | Use Naur to ask who builds and retains the theory; AI can also help articulate it. |
| “Open source is banning AI.” | Reject | Projects choose different governance models; Godot restricts substantial generation, while Linux and ESLint permit tools under accountability rules. |
| “AI code needs less maintenance.” | Reject | A recent selected-sample preprint observed less frequent/smaller changes, but exposure time, selection, and interpretation prevent that conclusion. |
| “AI can now do the whole software lifecycle.” | Keep with boundary | Documented harness-first teams delegate implementation, testing, review, browser verification, and handoff end to end; humans still build the environment, choose goals, resolve judgment, and own consequences. |
| “More autonomy is better.” | Reject | Appropriate autonomy depends on planning quality, feedback, blast radius, reversibility, evaluability, and lifespan. |
| “A good `AGENTS.md` makes agents reliable.” | Rewrite | Relevant local instructions can help, while generated or bloated files can add cost or reduce success; instructions must be tested and maintained like code. |
| “MCP is the modern default.” | Reject | MCP is valuable for governed live integration; CLI, APIs, or scripts may be simpler and more reliable for local work. |
| “Multi-agent is more advanced than one agent.” | Reject | Multiple agents buy parallelism and context isolation only when work can be decomposed and integrated safely. |
| “Half of software jobs will disappear within five years.” | Reject | The Reddit thread expresses fear and prediction, not measured probability; use labor data and scenarios without inventing a timetable. |

## Questions that still need the speaker’s input

These are not blockers for the editorial draft, but they affect the final deck:

1. What is the event date? Time-sensitive data needs a refresh window.
2. Is the spoken language entirely Finnish, or should slides be bilingual?
3. Which personal projects were materially AI-assisted, and what may be shown publicly?
4. What was the speaker’s real AI-development workflow in 2022, 2024, and 2026?
5. Is there a personal failure story—wrong code, wasted time, over-trust, or maintenance debt—that can balance the success demo?
6. How technical is the expected room relative to the public audience?
7. Does the 60-minute slot include event announcements and Q&A, or is it a full speaking hour?
8. Which Finnish consultancies are most locally relevant or sensitive to name?
9. Should the talk make an explicit recommendation to employers about junior development and AI policy?
10. Will the live-voting system run on a public URL with tested venue connectivity?

## Candidate audience takeaways

Choose three for the final slide; do not use all six.

- Delegate outcomes, but bound them with evidence.
- Optimize the system around the model, not the model in isolation.
- Do not make your speed someone else’s review debt.
- Invest in tests, context, and feedback because generation scales faster than trust.
- Build something people need, can find, and can trust—not merely something that can be built.
- Let AI produce options; keep human ownership of consequences.
- Increase autonomy only as fast as feedback, legibility, and reversibility allow.

## Candidate recurring lines

Use repetition sparingly. Two or three can become motifs:

- **Koodi halpeni. Vastuu ei.**
- **Cheap output creates expensive evaluation.**
- **A demo is not a system.**
- **Faster for whom, doing what, measured where?**
- **Do not make your speed someone else’s review debt.**
- **The leaderboard is a weather report, not a map.**
- **When anyone can build it, why should anyone use it?**
- **Who builds the theory if the agent builds the code?**
- **We may automate the junior task before we automate the need for senior judgment.**
- **Previous revolutions failed as total products and succeeded as invisible infrastructure.**
- **Submission is abundant. Review is governed.**
- **Zero human-written code is not zero human engineering.**
- **Put a deterministic spine around a nondeterministic worker.**
- **Autonomy is earned by feedback, legibility, and reversibility.**
- **The browser is where generated code meets empirical reality.**
- **AI changes work twice: through what it can do, and through what we believe it will soon do.**

## Research refresh checklist

Run this shortly before slide production and again during event week:

- latest Stack Overflow or JetBrains developer AI survey;
- latest DORA publication and any changed productivity findings;
- current METR task-horizon methodology/result;
- current open/closed model capability gap, without overfitting to a leaderboard;
- EU AI Act implementation dates and official guidance;
- latest Technology Industries of Finland outlook;
- latest Tieto, Siili, Vincit, Digia, and Gofore reports if they remain in the talk;
- event URL, privacy copy, capacity, and venue connectivity for live voting;
- every chart source, date, sample, and caveat.
- a small set of properly licensed 4GL/CASE/NATO archival visuals;
- any newer longitudinal evidence on agent-generated code maintenance;
- current Godot, Linux, and ESLint contribution policies if they remain in the deck;
- current agent-usage pulse and any newer independent autonomy data;
- the latest public details or corrections for the OpenAI and HubSpot harness case studies;
- current security guidance for MCP, connected apps, browser agents, and external actions;
- any peer review or replication for the 2026 instruction-file, skill, and multi-agent preprints;

## Decision rule for new ideas

Before adding another article, statistic, or slide, ask:

1. Which arrow in the red thread does it advance?
2. Does it add evidence, meaning, or local relevance that is not already present?
3. What existing material will be removed to make room?
4. Can its claim be stated accurately in one sentence?
5. Will the room discuss the consequence, or merely admire the fact?

If the idea does not survive all five questions, save it here instead of adding it to the main talk.
