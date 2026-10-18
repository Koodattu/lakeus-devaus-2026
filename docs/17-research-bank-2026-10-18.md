# Presentation research bank — 18 October 2026

**Purpose:** expand the pool of current, interesting material for *Hei ohjelmistokehitys, mitä kuuluu?* before choosing or rebuilding slides. This is a research bank, not a new running order. The breadth is intentional: these ideas are alternatives, discussion material, and supporting evidence for later selection.

**Research cutoff:** 18 October 2026, Europe/Helsinki. Publication dates and observation periods are separate below. Older work is included where it remains useful, with its age visible. Sources were checked on this date; this is not a systematic literature review or a complete re-audit of the earlier dossiers.

Read with the [source register and research limits](18-research-source-register-2026-10-18.md), [September refresh](13-research-refresh-2026-09-05.md), and [current run of show](02-one-hour-run-of-show.md).

## 1. What this project is trying to accomplish

The audience is the Finnish-speaking Lakeus-Devaus community in Seinäjoki and Etelä-Pohjanmaa: developers alongside students, managers, entrepreneurs, and other interested people. The presentation should make software development's change from 2022–2026 understandable, give people a concrete way to work with agents, and make room for disagreement and career uncertainty.

The working thesis, **“Koodi halpeni. Vastuu ei.”**, is an argument about changing scarcity, not a measured code-price index. Implementation becomes easier in many settings; problem choice, trustworthy evidence, integration, learning, and ownership still determine whether the result is useful. AI can help with those activities too. Research that challenges a simplistic version of the thesis is particularly valuable.

The latest agreed programme is **5 + 10 + 20 + 20 + 5 minutes**: introduction, opening gallup, context, practical workflow, closing gallup and wrap-up. Some older documents still describe the superseded five-minute demo plus 35-minute lecture. This research follows the newer purpose while leaving the structure and existing decks intact.

The current address-loss bug and maintenance-record example are teaching scenarios. Neither is evidence of the speaker's own completed customer work. The bank supplies material for both the context half and the practical half without inventing that missing provenance.

### Questions the research should help us answer

| Audience question | Material to draw from |
| --- | --- |
| What actually changed beyond autocomplete? | Whole-program reconstruction, unattended workflows, maintenance, infrastructure at agent scale |
| Does this make us more productive? | Different experimental outcomes, changed task selection, delivery and verification costs |
| How do I work with it tomorrow? | Task boundaries, local context, deterministic checks, evidence, handoffs, learning |
| What happens to my skills and career? | Immediate learning evidence, hiring composition, supervision work, uncertain labour effects |
| What becomes valuable when building gets cheaper? | Useful experiments, integration, subtraction, customer understanding, support |
| What does this mean here? | Finnish sector evidence, adoption differences, local activity, actual lifecycle obligations |

## 2. Navigation and freshness

| Theme | Cards | Main tension |
| --- | --- | --- |
| Adoption and everyday experience | A1–A6 | Frequent use, conditional trust, and uneven experience can coexist |
| Productivity and value | B1–B4 | Task output, delivery, and useful outcomes are different quantities |
| Capability and engineering practice | C1–C8 | More autonomy increases the importance of environment and feedback |
| Maintenance, learning, and careers | D1–D5 | Today's output changes tomorrow's code and expertise |
| Security and shared infrastructure | E1–E4 | AI can improve assurance and create new assurance work |
| Finland and regional opportunity | F1–F5 | Local demand and institutions matter alongside model capability |
| Product and demo ideas | G1 | Cheap experiments need a meaningful decision at the end |

Especially fresh additions include the **6 October Stack Overflow survey**, **29 September revision of the AGENTS.md study**, **10 October maintenance preprint**, **13 October Anthropic source-control case**, **14 October OpenAI maintenance account**, and **16 October Anthropic employment study**. These are recent publications, not necessarily observations made in October.

Other additions were missed by the previous pass: Stripe's February engineering account, the fuller June/July MirrorCode paper, and Finnish adoption/governance data. They should not be introduced as news from the last six weeks.

**Evidence labels:** survey = reported attitudes or behaviour; experiment = effect in a specified intervention; benchmark = performance on a test setting; case = an organization's own account; preprint = preliminary research whose publication status matters; guidance = recommended practice; synthesis = our interpretation or teaching proposal. These labels are not a universal quality ranking.

All Finnish hooks and proposed visuals below are authored presentation ideas, not source quotations.

## 3. Adoption and everyday experience

### A1. Using AI is common; autonomous workflows are a narrower category

**Fresh survey.** Stack Overflow's 2026 AI-usage question has **17,464 respondents**. **65.9%** selected coding assistants or coding agents, **62.5%** general chat tools, **26.2%** agents or automated workflows, and **17.2%** no AI tools. It is a multiple-selection question, so categories overlap. [S01: usage data](https://survey.stackoverflow.co/2026/ai/data/ai-select)

The survey overall contains 30,903 valid responses from 169 countries, collected **23 June–5 August 2026**. Recruitment used Stack Overflow's own channels. Question-level denominators are much smaller than the full sample. [S00: methodology](https://survey.stackoverflow.co/2026/methodology)

**Why interesting:** the room can recognize a spectrum of practice without being told that everyone already runs autonomous agents. Coding-agent use also does not imply unsupervised use.

**Finnish hook:** “AI:n käyttö ei vielä kerro, mitä sille delegoidaan.”

**Possible treatment:** three overlapping use categories beside a local gallup result. Do not add them together or call them market shares. Do not compare this directly with 2025's use-*or-plan-to-use* headline as if the questions were identical.

### A2. Trust is a condition, not a yes/no personality trait

**Fresh survey.** Of **14,304** respondents to the trust question, **48.0%** chose trust when output is easy to verify; **6.6%** chose trust across many tasks including important work decisions. These are response categories, not measured error probabilities. [S02: trust data](https://survey.stackoverflow.co/2026/ai/data/ai-trust)

**Why interesting:** this turns an abstract optimism-versus-skepticism debate into an engineering question: what makes checking cheap and reliable?

**Finnish hook:** “Luottamus syntyy tarkistettavuudesta.”

**Possible treatment:** show one output with no supporting evidence and another with a reproduction, diff, and independent check. Ask which one the audience would accept. The comparison is illustrative, not an experiment proving that those artifacts are sufficient.

**Boundary:** do not claim trust rose or fell by subtracting this from the differently worded 2025 trust question. Avoid translating 6.6% into “only 6.6% trust AI at all.”

### A3. Production is a different delegation boundary from generating code

**Fresh survey.** In the workflow table, current use is **69.3%** for generating code in a familiar area, **58.1%** for writing or improving tests, **40.5%** for reviewing code/PRs/design decisions, and **19.9%** for deploying, operating, or troubleshooting production systems. The page reports **n = 12,547** for the question. [S03: workflow data](https://survey.stackoverflow.co/2026/ai/data/ai-work)

**Why interesting:** this supports a lifecycle conversation rather than another model list. Adoption varies with the task and its consequences.

**Finnish hook:** “Sama agentti, eri vastuu, eri rajat.”

**Possible treatment:** place these four activities along the existing task-to-operation loop, with their labels and denominators preserved.

**Boundary:** respondents have different jobs; production is not part of everyone's workflow. These percentages do not measure capability or show that everyone else forbids AI in production. The table includes expectations as well as current use: use the correct column.

### A4. Verification is already part of reported practice

**Fresh survey.** Of **13,162** respondents, **76.5%** report running an answer locally, **63.9%** comparing it against codebase context, and **53.0%** inspecting tests/security implications before use. **9.6%** select use-as-is. Multiple responses are allowed. [S04: actions after an AI answer](https://survey.stackoverflow.co/2026/ai/data/ai-work-next)

**Why interesting:** the practical half can build on familiar habits instead of portraying developers as universally careless.

**Finnish hook:** “Mitä tarkistit — ja mitä tarkistus todisti?”

**Possible treatment:** use a verification ladder: it runs; it solves the reported problem; it preserves prior behaviour; it works after reload; the actual user accepts it. This ladder is our teaching synthesis.

**Boundary:** reported checking is not audited checking, and running code locally does not prove security or production fitness. Because answers overlap, use-as-is is not necessarily a mutually exclusive group of people who never verify anything.

### A5. Useful AI work includes debugging, documentation, and review

**Fresh survey; positive counterweight.** Respondents rated AI useful or very useful for implementation (**74.6%**), debugging/refactoring (**72.6%**), documentation (**65.7%**), and review (**64.5%**). These totals add the two positive columns in the published table; the question reports **n = 12,734**. [S05: usefulness by function](https://survey.stackoverflow.co/2026/ai/data/ai-impact)

**Why interesting:** it challenges a version of our thesis in which humans generate all assurance manually while AI only creates more code. People also report value in the work that helps make code trustworthy.

**Finnish hook:** “AI voi auttaa myös vähentämään epävarmuutta.”

**Possible treatment:** pair code creation with explanation, test improvement, and a verified review finding. Show the latter in a future real capture if selected.

**Boundary:** usefulness is a subjective rating, not a causal quality improvement or a measured review defect-detection rate.

### A6. Experience does not map neatly onto enthusiasm or resistance

**Fresh survey.** Overall favourable sentiment is **62.0%** (31.6% very, 30.4% somewhat), among **14,428** respondents. The publisher reports about **53%** favourable among those with 1–5 years of work experience and **69%** among those with 16+ years. [S06: sentiment data](https://survey.stackoverflow.co/2026/ai/data/ai-sentiment)

**Why interesting:** this complicates the stereotype of enthusiastic juniors and resistant veterans. It gives the career section a more humane opening.

**Finnish hook:** “Sama muutos näyttää erilaiselta eri uravaiheissa.”

**Possible treatment:** ask what each career stage needs from adoption: learning opportunities, time to experiment, credible expectations, and support. Those needs are discussion prompts, not measured explanations for this difference.

**Boundary:** cross-sectional association cannot show that experience causes enthusiasm. Respondent composition and reasons for participating may matter.

## 4. Productivity and value

### B1. Keep the field-experiment result, with its actual outcome

**Retained evidence, rechecked.** The Microsoft Research summary dated **June 2025** describes three randomized field experiments at Microsoft, Accenture, and an anonymous Fortune 100 company. Across **4,867 developers**, access to a code-completion assistant increased completed tasks by **26.08%**, with a reported standard error of 10.3 percentage points. [S07: study summary](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/)

**Why interesting:** substantial gains are compatible with careful evidence. The result need not become a universal slogan to matter.

**Finnish hook:** “Enemmän valmistuneita tehtäviä — näissä kokeissa.”

**Possible treatment:** a study card naming intervention, sample, outcome, and setting, beside B2. Give each study its own unit.

**Boundary:** completed tasks are not the inverse of completion time, revenue, or lifetime software value. This tests a particular assistant intervention, not every October 2026 agent workflow. Do not plot +26% and METR's +19% time result on one productivity axis.

### B2. Better tools also change what can be measured cleanly

**Retained methodological update, rechecked.** METR's **24 February 2026** follow-up says its newer experiment does not provide a reliable current productivity estimate. Reasons include people and tasks selected out because participants did not want to work without AI, lower participant pay, and difficulty measuring concurrent agent work. The original early-2025 result was **19% more completion time**, not a timeless effect. [S08: METR redesign note](https://metr.org/blog/2026-02-24-uplift-update/)

**Why interesting:** the uncertainty itself explains why competent people can report radically different experiences. The measurement target is moving with the workflow.

**Finnish hook:** “Kun työtapa muuttuu, vanha mittari ei välttämättä mittaa samaa asiaa.”

**Possible treatment:** distinguish human attention, elapsed time, parallel compute, and accepted output. Ask which one improved in someone's example.

**Boundary:** the authors' belief that newer tools probably help more is not a precise replacement uplift. Searches in this pass did not establish a newer clean causal estimate; that is a search limit, not proof that none exists.

### B3. Team delivery can improve while instability also increases

**Retained synthesis, rechecked.** DORA's **10 March 2026** article combines 2025 findings with thematic analysis of **1,110 Google engineers' responses from Q3 2025**. It discusses both delivery throughput and instability associations, verification overhead, and benefits across development activities. [S09: DORA AI tensions](https://dora.dev/insights/balancing-ai-tensions/)

**Why interesting:** quality and speed are not a single dial. The team can ship more and also create more recovery work.

**Finnish hook:** “Nopeus näkyy vasta koko toimitusketjussa.”

**Possible treatment:** an illustrative flow with implementation, review, integration, release, and recovery. Show a queue moving after one stage accelerates, without fabricated measured widths.

**Boundary:** this is not a randomized causal test of organizational delivery. A 2026 publication date does not make its survey observations 2026 data. DORA also discusses using AI to improve review; do not imply that assurance capacity must stay fixed.

### B4. New work can be valuable without being time saved

**Retained conceptual analysis, rechecked.** METR's **8 May 2026** analysis distinguishes gains on the old task mix, gains on the newly chosen task mix, and gains in value. Its mathematical ordering relies on simplifying assumptions; it is not another measured productivity percentage. [S10: task substitution](https://metr.org/blog/2026-05-08-task-substitution-and-uplift/)

**Why interesting:** this offers an optimistic story beyond doing the same tickets faster. Some experiments become worth trying for the first time.

**Finnish hook:** “AI muuttaa myös sitä, mitä kannattaa yrittää.”

**Possible treatment:** revisit the hypothetical maintenance-record prototype. Its value could be learning that a workflow is useful—or cheaply discovering that it is not. Compare this with generating an elaborate dashboard nobody will use.

**Boundary:** a statement that an artifact would have taken weeks manually does not establish weeks of realized savings. The organization might never have commissioned it. Keep experimental learning, labour savings, and customer value separate.

## 5. Capability and engineering practice

### C1. MirrorCode is richer than the preliminary example in our slides

**New-to-bank fuller benchmark.** The paper appeared **29 June 2026**, revised **17 July**. It covers **25 target programs**, requiring output matching against end-to-end tests without access to original source code. The paper's strongest reported score was **56%**; that is a historical result under its protocol. [S11: MirrorCode paper](https://arxiv.org/abs/2606.30182v2)

The current project page reports an Opus 4.7 gotree attempt taking **14 hours and $251**, with best implementations passing **2,000 of 2,001 tests**. It also warns about possible training contamination and explains that today's leaderboard protocol differs from the paper. [S12: MirrorCode project page](https://epoch.ai/MirrorCode)

**Why interesting:** substantial implementation and one remaining edge case make a better story than a bare “weeks of work” claim.

**Finnish hook:** “Iso tehtävä voi onnistua, kun onnistuminen on tarkasti määritelty.”

**Boundary:** not a demonstration of discovering a customer need, operating the product, or perfect reconstruction. Human weeks are estimated. If charting results, choose one dated protocol rather than mixing the paper and live leaderboard.

### C2. At extreme agent volume, source control becomes the bottleneck

**Fresh first-party case: 13 October, updated 15 October 2026.** Anthropic reports growth from about **2,500 merged changes/day in May to over 30,000/day in September**, and describes building Scion and associated tooling. Engineers still supplied system constraints and rejected unnecessary complexity. [S13: Anthropic source control](https://www.anthropic.com/engineering/redesigning-source-control)

**Why interesting:** an unexpectedly concrete consequence of abundant code: builds, checkouts, integration, and review systems can need redesign. The scarce thing changes again after a bottleneck is removed.

**Finnish hook:** “Kun koodia syntyy tarpeeksi, seuraava ongelma on sen liikenne.”

**Possible treatment:** a short extreme-case sidebar alongside a modest team's delivery queue. Translate the principle; do not recommend replacing Git.

**Boundary:** vendor-reported, exceptionally large workload and token budget. Merge volume is not delivered value. The authors explicitly say their replacement is unsuitable for general Git use. Their intent-focused review practice is not a blanket recommendation to stop reading code.

### C3. The compelling AI result can be less code

**Fresh first-party case: 14 October 2026.** OpenAI's Core Experimentation account describes agents gathering repository and organizational evidence to propose cleanup. Five engineers reportedly coordinated over **1,400 merged PRs deleting more than 800,000 lines**, largely part-time over two weeks, with review distributed to relevant teams. One service image fell from **3.31 GB to 1.72 GB**. [S14: OpenAI maintenance account](https://developers.openai.com/blog/maintaining-software-with-the-gpt-6-family)

**Why interesting:** this is a direct counterweight to code-volume celebration. Maintenance, removal, and simplification are worthwhile targets for stronger agents.

**Finnish hook:** “Hyvä AI-muutos voi poistaa koodia.”

**Possible treatment:** show a hypothetical cleanup evidence trail: references, runtime evidence, feature-state context, tests, and owner review. Capture a real small example later if selected.

**Boundary:** selected internal success story, not independently measured ROI. Deletion counts do not prove safety. Static absence of references alone is insufficient for reflection, incident fallbacks, or dormant features. Do not reproduce its broad access prompt without a deliberately bounded environment.

### C4. Stripe makes autonomy a property of the environment

**New-to-bank first-party case: 19 February 2026.** Stripe describes isolated, standardized devboxes and workflows that alternate flexible agent steps with deterministic lint, Git, and CI steps. Its report says over **1,300 minion-produced, human-reviewed PRs** were merged weekly. Production access and arbitrary network egress are restricted; retries are bounded. [S15: Stripe Minions, part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2)

**Why interesting:** familiar engineering investments—fast setup, tests, clear environments—also support agents. This broadens the evidence beyond model vendors.

**Finnish hook:** “Autonomia rakennetaan ympäristöön.”

**Possible treatment:** distinguish “agent chooses how to implement” from “workflow always runs the required check.” Map the distinction onto our address bug.

**Boundary:** company-reported implementation and volume, not a controlled productivity comparison. “Unattended” describes task execution; it does not erase human review. A worktree separates files but is not, by itself, a security sandbox.

### C5. Delegation creates work that ordinary coding metrics miss

**Fresh qualitative preprint: 21 September 2026; under review.** *The Work Behind Delegation* draws on observations and workflow diagrams from **19 experienced developers** and applies its supervision framework to public Reddit discussions. It describes planning, supervision loops, delegated supervisory activity, and reusable guidance. [S16: delegation study](https://arxiv.org/abs/2609.24234v1)

**Why interesting:** it gives names to real work between prompting and accepting a result. Supervision need not mean watching every keystroke.

**Finnish hook:** “Delegointi on työtä, vaikka et kirjoita jokaista riviä.”

**Possible treatment:** show where the developer intervenes in the task loop: specifying success, noticing drift, correcting context, interpreting checks, accepting consequences.

**Boundary:** a small qualitative study provides a lens, not population frequencies or proof that one supervision method is fastest. This pass reviewed the abstract and study description, not a complete coding-method audit.

### C6. A larger instruction file is not automatically a better one

**Revised preprint: v3, 29 September 2026.** The current *Evaluating AGENTS.md* abstract reports no general task-success improvement from context files and **over 20% higher average inference cost** across its tested settings. It distinguishes following instructions from improving task completion, and retains a role for non-standard project practices. [S17: current AGENTS.md study](https://arxiv.org/abs/2602.11988v3)

**Why interesting:** this challenges a practical oversimplification in many agent tutorials, including any version of our walkthrough that implies documentation alone creates reliability.

**Finnish hook:** “Ohjeenkin pitää ansaita paikkansa.”

**Possible treatment:** compare useful local facts—an unusual test command, a domain invariant—with a redundant repository summary. Test a proposed instruction on representative tasks.

**Boundary:** not “delete AGENTS.md” or “agents should ignore instructions.” The tested setups, cost measure, and tasks constrain the finding. The revised abstract was checked; detailed cross-version numerical changes were not audited.

### C7. Repair loops are a more durable pattern than a perfect first prompt

**New-to-bank official worked example: 11 May 2026.** OpenAI's cookbook demonstrates reviewing stale documentation examples, repairing a copied artifact, executing validation, and feeding remaining failures into the next repair pass. Its sample notebooks are deliberately stale teaching material. [S18: iterative repair loops](https://developers.openai.com/cookbook/examples/codex/build_iterative_repair_loops_with_codex)

**Why interesting:** recurring maintenance can be useful even when a first attempt fails. The check makes a failure actionable.

**Finnish hook:** “Palaute tekee seuraavasta yrityksestä paremman.”

**Possible treatment:** use a docs example or small failing test instead of fresh live coding. Show the failed check and the bounded correction as part of the result.

**Boundary:** a vendor recipe, not an independently verified success-rate study. Stop conditions, execution cost, and the validity of the checker still matter. This research did not run the example or build an automation.

### C8. Improve the workflow from observed failures, not prompt folklore

**New-to-bank official guidance: 3 August 2026.** The Codex workflow recipe separates project goals, plans, observed verification, and review records, then examines what actually happened. It explicitly says its supporting filenames are optional conventions rather than required product machinery. [S19: iterating development workflows](https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex)

**Why interesting:** a failed agent run can yield a reusable test, clearer environment, or shorter instruction. The learning belongs to the team as well as the model interaction.

**Finnish hook:** “Korjaa toistuva epäselvyys, älä vain viimeistä vastausta.”

**Possible treatment:** one small retrospective: what went wrong, what evidence showed it, and which durable change prevents recurrence. Keep the existing cause/change/checks/limits handoff.

**Boundary:** this does not justify a large collection of Markdown files for every task. Use the smallest artifact that solves an observed coordination problem. Guidance establishes a possible workflow, not an adoption statistic.

## 6. Maintenance, learning, and careers

### D1. Test what the next agent inherits

**Fresh benchmark preprint: 10 October 2026.** SWE-Maintain compares subsequent tasks after developer-written versus agent-written changes: **100 three-event episodes, 50 Python repositories, five coding systems, two models, 1,996 paired later events**. Agent history reduced later-task resolution by **5.6 percentage points**; requiring earlier tests to pass increased the gap to **14.0 points**. In the subset with passing prior tests and no pre-solved next task, the difference was **+2.7 points, 95% CI −0.5 to +6.1**. [S20: paper, results and validity sections](https://arxiv.org/html/2610.14768v1)

**Why interesting:** the evidence points toward inherited failures rather than an inevitable penalty from agent authorship.

**Finnish hook:** “Seuraava tehtävä perii edellisen jäljet.”

**Possible treatment:** the address fix followed by a second change; both must preserve earlier behaviour.

**Boundary:** preliminary, short sequences, hidden evaluation tests, and selected models/repositories. The successful subset is selected, not a randomized intervention proving that visible CI eliminates all maintenance costs. Human maintainability and long-term production quality were not measured.

### D2. Finishing and learning remain separate outcomes

**Retained experiment, rechecked.** The **29 January 2026** author account describes 52 participants learning an unfamiliar Python library. Rounded immediate quiz means were **50% with AI and 67% without**; task-time improvement was not statistically significant. Explanatory interaction patterns correlated with better comprehension. [S21: skill-formation research](https://www.anthropic.com/research/AI-assistance-coding-skills)

**Why interesting:** a learner can deliver the artifact while missing the understanding needed to debug the next one. Equally, using AI is not one uniform learning behaviour.

**Finnish hook:** “Valmis tehtävä ja opittu taito ovat eri tuloksia.”

**Possible treatment:** keep the existing quiz chart, then demonstrate our proposed learning check: explain a decision, predict a failure, diagnose a deliberately broken variant.

**Boundary:** approximately **17 percentage points**, not permanent loss of 17% of a person's skill. Short-task immediate comprehension does not establish long-term deskilling. Interaction styles were not themselves randomized; do not present the proposed learning check as a proven remedy.

### D3. More answers do not automatically create more shared expertise

**Fresh observational preprint: 29 September 2026.** A Stack Overflow study reports different post-ChatGPT participation changes among knowledge consumers and producers: some consumers supplied more answers with lower acceptance, while established producers supplied fewer answers receiving greater recognition. [S22: knowledge-community study](https://arxiv.org/abs/2609.38563v1)

**Why interesting:** this extends Naur's system-understanding question into community knowledge. Private assistance may change who asks publicly, who explains, and where knowledge is recorded.

**Finnish hook:** “Kuka kirjoittaa yhteisen ymmärryksen, jos kysymme vain omalta agentilta?”

**Possible treatment:** contrast a private solved question with a reusable explanation, documented decision, or community session. Lakeus-Devaus can discuss what should still be shared.

**Boundary:** abstract-level review only in this pass; no percentages cleared for slides. Post-release changes do not establish that each answer was AI-generated or isolate ChatGPT from every other platform change. This is not evidence that public technical knowledge is disappearing universally.

### D4. A US entry-path warning is not a Finnish job-loss count

**Retained revised working paper, rechecked.** Stanford's **12 August 2026** update uses US payroll data through **June 2026**. It describes a **19% relative employment gap** for ages 22–25 in highly AI-exposed occupations compared with less-exposed peers, alongside no widespread economy-wide displacement. [S23: authors' revision summary](https://digitaleconomy.stanford.edu/news/canariesaug26/)

**Why interesting:** weaker entry routes can matter even if aggregate employment does not collapse. The practical question is how future expertise gets built.

**Finnish hook:** “Jos ensimmäinen porras kapenee, mistä seuraavat seniorit tulevat?”

**Possible treatment:** an apprenticeship discussion rather than another alarming percentage chart. Ask what supervised work teaches diagnosis, judgment, and ownership in the local organizations represented.

**Boundary:** descriptive relative gap, not a causal count of jobs destroyed by AI. The exposure category spans occupations, not only software. Do not import its magnitude into Finland or turn it into a five-year forecast.

### D5. Frontier workplaces show role change, but are unusual workplaces

**Fresh first-party research: 16 October 2026.** Anthropic combines internal employment and usage data with **17 interviews**. It reports that the junior share of technical hires fell from **27% to 9%** over the period discussed, while technical hiring still grew in absolute terms. The account describes rising output, attention pressure, changing hiring criteria, and internal redeployment. [S24: employment at Anthropic](https://www.anthropic.com/research/employment-at-anthropic)

**Why interesting:** concrete organizational choices replace vague “AI will take jobs” speculation. Hiring mix, training, and redeployment can change before total headcount shrinks.

**Finnish hook:** “Työ muuttuu myös siinä, ketä palkataan ja mihin kasvatetaan.”

**Possible treatment:** pair this exceptional case with D4 and ask which mechanisms might transfer locally.

**Boundary:** a fast-growing AI vendor, selected internal metrics, and company-authored interpretation. This is not a representative employer sample or causal estimate. Its agent-hours comparison pools subagents and compares runtime with assumed human hours; it must not be described as equivalent human labour replaced.

## 7. Security and shared infrastructure

### E1. The cost of cheap reports lands on someone

**New-to-bank maintainer account: 26 January 2026.** Daniel Stenberg announced curl's bug-bounty programme would end on **31 January** after low-quality and bad-faith reports overloaded maintainers. Valid vulnerability reports remained welcome. [S25: curl maintainer account](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/)

**Why interesting:** incentives and verification capacity are more concrete than arguing over the aesthetics of “AI slop.” A submitter's cheap output can create someone else's expensive work.

**Finnish hook:** “Ilmainen lähettää ei ole ilmainen tarkistaa.”

**Possible treatment:** a report moves from author to maintainer; place the checking work on the recipient's side. Pair with E2 so the argument does not become “AI cannot help security.”

**Boundary:** one project's governance decision, not an industry-wide rejection of AI or security research. Not every poor report was AI-generated, and ending rewards is not the same as refusing genuine disclosures.

### E2. AI security assistance can make review consent explicit

**Fresh service description: launched 8 October 2026, updated 13 October.** Anthropic's OSS Scanner is an opt-in programme for eligible open-source projects. Enrolled maintainers receive model-generated reports without human review, with reproducers and proposed patches where available. This differs from the company's human-reviewed coordinated-disclosure route. [S26: OSS Scanner documentation](https://red.anthropic.com/oss-scanner/), [enrolment repository](https://github.com/anthropics/oss-scanner)

**Why interesting:** the same ability that increases report volume may also improve defence. Delivery policy determines who accepts the evaluation burden.

**Finnish hook:** “Myös tarkistustyön vastaanottamisesta pitää sopia.”

**Possible treatment:** compare unsolicited reports with an enrolled maintainer's expected evidence and triage workflow.

**Boundary:** a service launch establishes availability and intended process, not an independently validated false-positive rate, net maintainer benefit, or security guarantee. No enrolment or scanning was performed for this research.

### E3. The evidence viewer belongs inside the trust boundary

**Fresh security proof of concept: 6 October 2026.** METR describes a vulnerability allowing displayed evaluation transcripts to be altered in Inspect's viewer. The underlying database transcript remained intact; METR says it had not observed agents using this exploit in evaluations. The issue was patched after disclosure. [S27: METR observability analysis](https://metr.org/blog/2026-10-06-ai-systems-could-cover-up-misbehavior/)

**Why interesting:** “look at the logs” only helps if the display and recording path are trustworthy. Verification is a system, not a screenshot saying success.

**Finnish hook:** “Myös näytön luotettavuus pitää varmistaa.”

**Possible treatment:** an original diagram distinguishing the action, stored record, rendered view, and reviewer. No exploit demonstration is needed.

**Boundary:** a researcher-led proof of concept, not evidence that ordinary coding assistants routinely conceal actions. Keep it separate from the earlier actual incident in the September dossier; do not merge their timelines or claims.

### E4. Capability improvements do not settle open-ended judgment

**Fresh independent-evaluator summary: 22 September 2026.** METR's preliminary Opus 5.5 assessment used five tasks and ten business days of API access, plus other evidence. It judged the model likely to accelerate parts of AI R&D but unlikely to fully automate it, identifying remaining weaknesses in open-ended judgment. [S28: METR evaluation](https://metr.org/blog/2026-09-22-claude-opus-5-5/)

**Why interesting:** this is a more careful counterweight to self-improving-AI headlines than dismissing capability progress.

**Finnish hook:** “Tehtävän suorittaminen ja oikean tutkimussuunnan valinta ovat eri asioita.”

**Possible treatment:** reserve discussion about which kinds of feedback are easy to obtain and which require uncertain judgment.

**Boundary:** narrow, preliminary AI-R&D assessment, not a universal model ranking or a software-job forecast. The unpaid evaluation allowed Anthropic review/edit opportunity before METR signed off; some internal evidence came from a separate team without publicly shared supporting detail.

## 8. Finland and regional opportunity

### F1. Finnish IT demand is mixed; the latest checked sector snapshot is still August

**Retained official industry snapshot, rechecked.** The sector page still gives **2025 turnover of €19bn, +5%**, Q2 2026 new orders **−12% quarter-on-quarter and +6% year-on-year**, and approximately **80,200 employees at end-June, −1% from end-March**. Its order survey excludes gaming and data centres. [S29: Technology Industries of Finland](https://teknologiateollisuus.fi/talous-ja-tilastot/teknologiateollisuuden-talousnakymat/tietotekniikka-ala/)

**Why interesting:** revenue, orders, and employment do not describe the same thing or move together automatically.

**Finnish hook:** “Suomen IT-markkina ei mahdu yhteen käyrään.”

**Possible treatment:** one dated sector card, then discuss what clients now buy and what work remains difficult.

**Boundary:** no identified AI causal effect. Do not relabel this as October observations. The page's order-book prose names March 2025 while its table compares June 2025; avoid that ambiguous comparison. Older €20bn/+9% figures in the repo should not be reused for this vintage.

### F2. The local customer may be much earlier in adoption than the developer

**New-to-bank official statistics; older observation.** Statistics Finland's **27 November 2025** release reports AI use in spring 2025 at **38%** of enterprises in the survey population: **80%** in information/communication, **24%** in construction, and **13%** in transport/storage. **15%** reported documented AI instructions, practices, or procedures. This enterprise ICT survey covers enterprises with at least ten employees in its covered industries. [S30: Statistics Finland release](https://stat.fi/fi/julkaisu/cm1hnps701dbm07w59uo0jw6u)

**Why interesting:** the developer community's tool familiarity is a poor proxy for the customer's starting point. Integration, training, and routine operating rules may matter more than another model upgrade.

**Finnish hook:** “Asiakkaan pullonkaula ei välttämättä ole mallin älykkyys.”

**Possible treatment:** compare industry starting points without ranking their competence.

**Boundary:** broad AI definition, self-reported enterprise adoption, 2025 data; not generative coding adoption or an Etelä-Pohjanmaa estimate. The 15% is a share of the whole survey population, not “15% of AI users.” Do not extrapolate to microbusinesses.

### F3. AI can be a service category inside a mixed consulting market

**New release since the previous pass: 11 September 2026, covering August.** Gofore reported **€19.3m monthly net sales versus €14.7m** and described winning Tampere University's AI-platform work, including architecture, implementation, governance, and maintenance. Acquisitions affect group comparisons; a divestment completed on 1 September affects subsequent numbers. [S31: Gofore August business review](https://gofore.com/en/news/gofore-plcs-business-review-for-august-2026-net-sales-19-3-million-euros/)

**Why interesting:** an actual disclosed purchase illustrates demand beyond raw code generation. It fits the earlier “AI is pressure and product” argument.

**Finnish hook:** “Asiakas ostaa myös käyttöönoton, hallinnan ja jatkuvuuden.”

**Possible treatment:** use the scope of work rather than a company league table.

**Boundary:** unaudited company reporting and management narrative. Revenue growth is not attributable to AI from this release. This is a checked August report, not a claim that no newer company disclosure exists. The other consultancies' entire tables were not refreshed in this run.

### F4. There is a contemporary regional conversation to connect with

**Fresh local context: event advertised for 17 September 2026.** SEAMK's *Testauspaja: River IT* listing at Rytmikorjaamo and River IT covered local models, making existing software usable by agents, and agent-style knowledge work. It targeted SMEs and other local organizations. [S32: organizer's event listing](https://www.seamk.fi/tapahtuma/testauspaja-river-it/)

**Why interesting:** regional relevance need not rely on a hypothetical story about everyone being behind. The conversation already includes integration and local deployment choices.

**Finnish hook:** “Tämä keskustelu on jo täällä.”

**Possible treatment:** connect the talk to that subject matter and ask which existing regional workflows could become easier to use. A useful alternative to repeating the 2024 model workshop.

**Boundary:** the listing establishes the advertised programme, not attendance, learning outcomes, or successful deployments. Do not imply the speaker attended. Local hosting is a design option, not automatic privacy, security, or economic superiority.

### F5. Lifecycle responsibility now has a date that has already passed

**Updated time context, official guidance.** The Commission says CRA reporting obligations apply from **11 September 2026** for actively exploited vulnerabilities and severe incidents affecting the security of in-scope products with digital elements. Full application is **11 December 2027**. [S33: reporting obligations](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting), [implementation timeline](https://digital-strategy.ec.europa.eu/en/factpages/cyber-resilience-act-implementation)

**Why interesting:** a prototype can be generated quickly while an organization's responsibilities extend beyond release.

**Finnish hook:** “Julkaisu aloittaa myös velvollisuuksia.”

**Possible treatment:** one dated reserve card linked to ownership and incident readiness.

**Boundary:** applicability depends on product, activity, and role. This is not a statement that every app, SaaS service, personal experiment, or open-source contributor has identical duties. Do not call September 2026 the date when all CRA requirements began. This is presentation context, not a product-specific compliance determination.

## 9. Product value and possible examples

### G1. A broader menu of useful experiments

**Our synthesis and hypothetical teaching scenarios.** B4 supplies the distinction between newly feasible work and savings; C3, C7, and F2 supply examples of maintenance and adoption questions. These proposals have no measured customer outcomes.

| Scenario | What an agent could help produce | What would make the result useful | Evidence to collect if we later build a demonstration |
| --- | --- | --- | --- |
| Existing address bug | Diagnosis, small patch, regression check | Address survives save and reload without changing other behaviour | Actual reproduction, diff, test result, browser state |
| Service notes to maintenance records | Structured drafts from fictional notes | A worker can correct them quickly and retain uncertainty | User corrections, omitted-field handling, accepted draft |
| Documentation repair | Updated examples and validation | A newcomer can actually run the documented path | Broken example before, successful execution after |
| Removing a stale feature | Evidence for deletion and a smaller change surface | Lower maintenance cost without removing a needed fallback | Owner decision, references, runtime context, tests |
| Accessibility improvement | Suggested fixes and automated checks | People can complete the workflow using keyboard or assistive technology | Relevant automated results plus actual manual task checks |
| Legacy-system understanding | A dependency map and explanation | Another developer can diagnose a real failure with it | Links to code, corrected assumptions, a follow-up task |
| Small operational assistant | A bounded error digest and suggested investigation | The owner gets actionable information with tolerable noise | Real examples of useful alerts and false positives |
| Customer-specific adapter | A prototype connecting existing systems | Less duplicate entry with understandable failure recovery | End-to-end input/output, invalid-input case, recovery path |

**Finnish hook:** “Mitä kannattaa nyt kokeilla, mitä ei ennen kannattanut?”

The scarce decision can be whether to build, keep, simplify, or stop. A failed product hypothesis can be a useful result if the experiment is cheap and teaches something. That is our strategic proposition, not a promise that all small tools pay off.

For the “SaaS is dead” discussion, ask which part of the purchase is replaceable: interface, implementation, data, integrations, support, or responsibility. We found no basis in this pass for a universal SaaS-collapse claim. Likewise, regional proximity is a possible source of user understanding and trust, not a guaranteed competitive advantage.

## 10. Extra discussion material and combinations

### A concrete incentives question

The new Stack Overflow survey reports **10.2% of 13,167 respondents** selecting the category that their organization measures or evaluates AI use as part of employee/team performance. This does not specify whether the measure is token volume, useful results, or something else. [S34: AI at work](https://survey.stackoverflow.co/2026/ai/data/ai-use)

**Our discussion prompt:** “Palkitaanko hyödyllistä muutosta vai näkyvää AI:n käyttöä?” Pair it with C3's subtraction example. A team that celebrates generated volume might undervalue simplification. That is an incentive hypothesis to discuss, not a causal finding from the survey.

### Six combinations worth trying during editorial selection

| Combination | What the tension adds | Avoid |
| --- | --- | --- |
| A2 + A4 + address walkthrough | Conditional trust becomes an observable checking habit | Treating self-reported checks as assurance proof |
| C1 + D1 | Long bounded tasks can succeed while later tasks inherit failures | Turning either benchmark into a universal production score |
| C2 + C3 | AI can increase both code traffic and capacity to remove code | Equating output counts with value |
| C4 + C6 | Reliable environments and concise local guidance matter more than document volume | A mandatory elaborate agent framework |
| E1 + E2 | Security capability and maintainer attention need to improve together | An all-positive or all-negative AI-security story |
| D2 + D4 + D5 | Learning, entry routes, and hiring choices are connected questions | Claiming one experiment predicts employment |

### Finnish questions for conversation or future poll testing

These are candidate questions, not changes to the existing live gallup.

1. “Minkä tehtävän annat AI:lle, mutta et antaisi sen julkaista?”
2. “Mikä tarkistus muutti viimeksi mielesi AI:n vastauksesta?”
3. “Mittaako tiiminne valmistunutta työtä, korjaustyötä vai tuotettua koodia?”
4. “Mitä osaat nyt paremmin AI:n ansiosta — ja mitä harjoittelet vähemmän?”
5. “Minkä tehtävän teet nyt, jota et ennen olisi edes aloittanut?”
6. “Mitä projektista pitää tietää, mitä repossa ei lue?”
7. “Kuka saa lisää työtä, kun sinä saat valmista nopeammin?”
8. “Mikä asiakkaan ongelma jää ratkaisematta, vaikka koodi olisi ilmaista?”
9. “Miten juniori osoittaa ymmärryksensä, kun tehtävän voi delegoida?”
10. “Mitä kannattaisi poistaa sen sijaan, että rakennamme lisää?”

### Historical depth without another history lecture

The existing [veteran lens](09-veteran-lens.md) already supplies Brooks and Naur. This run did not rediscover or re-audit those historical sources. A useful new pairing is Naur's system-understanding question with D2's learning experiment and C5's supervision work. Brooks can frame why cheaper implementation does not settle problem selection or organizational integration. These are interpretations, not new quotations from either author.

## 11. Corrections and freshness warnings for eventual slide production

| Earlier material or tempting shorthand | Current treatment |
| --- | --- |
| September memo could not find 2026 annual Stack Overflow results | They were released 6 October. Use the new question-level pages, retaining June–August fieldwork dates. |
| Adoption/trust trend made by subtracting 2025 and 2026 headlines | Questions and answer categories differ. Verify comparability before building a time series. |
| MirrorCode described only through April preliminary results | Fuller paper and current project page are now in the bank. Keep protocols separate; gotree's best result still has one failed edge-case test. |
| AGENTS.md paper summarized from February/June | v3 is dated 29 September. Use its current qualified conclusion; no complete version-diff audit here. |
| “AI-written code is inevitably harder to maintain” | D1 makes the inherited-failure distinction essential; it does not settle long-term human maintenance. |
| “Verification is permanently human and cannot scale” | A5, C3, C7, and E2 supply counterexamples and opportunities, with their limits. |
| “METR says developers are still 19% slower in 2026” | The early-2025 intervention and February redesign note must travel together. |
| “A 2026 DORA article means 2026 observations” | B3 uses 2025 data. The ROI guide is a framework, not a new randomized result. |
| Finland figures relabelled as October | The checked sector page still contains the August outlook and Q2 observations. |
| Siili Q1 treated as its latest available report | Its investor site lists H1 on 11 August and schedules the next business review for 28 October. H1 values were not extracted here. |
| CRA reporting described as upcoming | Its 11 September start date has passed as of this research cutoff. Full application remains a separate date. |
| Frontier hiring shares described as jobs eliminated | Share, absolute headcount, hiring, and hours are different measures. |
| New official demo or company case copied into our personal story | Attribute it; it does not establish the speaker's own experience. |

The old research files remain historical snapshots. This table records selected updates, not blanket certification of everything else in the repo. The source register records further gaps and source-review depth.

## 12. What we have enough material for—and what is still missing

We now have alternatives for the opening evidence, capability example, productivity contrast, practical workflow, security discussion, learning and career section, and regional ending. Novelty alone should not choose the final story. At selection time, pick a small set of complementary tensions and retain the rest for notes and discussion.

The most valuable missing artifact is still a **real, publicly usable software task with a recorded failure, correction, and verification**. Research cannot establish the speaker's personal history. If we later produce a demo, preserve actual artifacts and label any simulation. Do not turn this research run into claimed demo execution.

Other open questions are genuinely unresolved: long-term learning under current agent use; maintenance over years and languages; causal Finnish employment effects; ordinary-company total costs; and which local customers will pay for new capabilities. These uncertainties are material for an honest discussion, not a reason to invent a single forecast.
