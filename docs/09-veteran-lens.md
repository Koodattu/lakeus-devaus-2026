# Veteran lens: what changed and what did not

This document collects material likely to resonate with people who have lived through several software-industry revolutions. It is intentionally larger than the eventual historical section.

## Why this lens matters

An experienced audience has heard variations of these promises before:

- higher abstraction will make programming simple;
- tools will generate the implementation;
- business users will build their own systems;
- software will become an industrial assembly process;
- off-the-shelf products will replace bespoke development;
- outsourcing, cloud, low-code, or no-code will eliminate the developer bottleneck.

A talk that only says “this time everything changes” will lose veterans. A talk that says “nothing changes” ignores the extraordinary capability jump. The interesting territory is the boundary:

> **What did AI make accidental—and what complexity is still essential?**

An even more human version:

> **If an agent writes the artifact, who understands the system well enough to change it later?**

## Five old ideas that feel newly relevant

### 1. The software crisis never really ended

The 1968 NATO Software Engineering Conference gathered practitioners around problems of unreliable, late, costly, and difficult-to-maintain software. The phrase “software engineering” itself gained prominence in response to systems becoming larger than existing methods could comfortably manage.

The interesting comparison is not “1968 was just like 2026.” It is that every increase in computing capacity and software ambition creates another scale at which coordination, correctness, and change become difficult.

Possible slide:

> **1968:** We can build more software than we know how to manage.  
> **2026:** We can generate more software than we know how to review.

That is a rhetorical compression, not a statistical claim. Its value is to connect the old software crisis to reviewer and ownership scarcity.

### 2. Brooks: accidental versus essential complexity

Fred Brooks’ 1986 “No Silver Bullet” distinguishes:

- **accidental difficulties:** friction caused by representation, tools, languages, hardware, and mechanical implementation;
- **essential difficulties:** understanding and designing the conceptual structure of a changing, interconnected, invisible system.

Brooks argued that eliminating accidental work cannot eliminate the inherent complexity of the problem being modeled. He highlighted complexity, conformity, changeability, and invisibility as persistent properties of software.

#### AI-era reading

AI attacks a much larger share of accidental work than previous tools:

- syntax and APIs;
- boilerplate;
- code translation;
- test scaffolding;
- documentation drafts;
- repository navigation;
- mechanical refactoring;
- tool invocation.

It also reaches into essential work by proposing decompositions, architectures, requirements, and solutions. That is genuinely different. But proposing a conceptual structure is not the same as establishing that it matches reality, organizational intent, and every future constraint.

The useful question is not “Was Brooks wrong?” It is:

> **How much essential complexity can AI help us reason about—and how much can it merely hide behind a plausible implementation?**

Possible veteran provocation:

> “Maybe AI is the biggest silver bullet we have ever had. Brooks’ test still applies: what remains after the bullet hits?”

### 3. Naur: programming is theory building

Peter Naur’s 1985 “Programming as Theory Building” argues that programming is not primarily producing program text. Programmers develop a theory: an internal understanding of how the problem domain and the program correspond, why the system has its structure, and how it can be changed intelligently.

Code and documentation are incomplete carriers of that theory. When people who understand the system leave, a later team may need to reconstruct it even if every source file remains.

#### AI-era reading

An agent can produce the text without a human necessarily building the theory.

That creates several possibilities:

1. **Deskilling:** no one forms a durable mental model because plausible changes arrive too easily.
2. **Theory compression:** repository instructions, architecture records, tests, and examples make part of the theory explicit and available to both people and agents.
3. **Theory partner:** the agent helps the human explore alternatives and articulate a stronger model.
4. **Synthetic continuity:** a future agent reconstructs enough theory from code, history, telemetry, and documents to make safe changes.

The fourth possibility is exciting but not yet something organizations can assume. Context windows, stale documentation, hidden organizational knowledge, and ambiguous requirements remain real limits.

This may be the best veteran-facing question in the whole talk:

> **Kuka rakentaa teorian järjestelmästä, jos agentti rakentaa koodin?**

### 4. Lehman: useful software must continue changing

Lehman’s laws of software evolution describe real-world systems as feedback-driven and continually changing. Their complexity tends to increase unless teams actively work to control it. Functionality must also continue growing if the system is to remain useful in a changing environment.

#### AI-era reading

AI reduces the cost of making another change. That does not necessarily reduce the accumulated interaction among changes.

Two opposite futures are plausible:

- agents continuously refactor and keep systems simpler than humans could afford to;
- organizations generate features faster than architecture, tests, and human understanding can absorb them.

The deciding variable may be whether AI is rewarded for producing visible features or for reducing system entropy.

Possible line:

> **AI can make every change cheaper while making the sum of all changes more expensive.**

### 5. Parnas: software ages because the world changes

David Parnas’ “Software Aging” explains that software becomes less useful not because bits physically wear out, but because requirements, environments, platforms, and expectations change—and because modifications can degrade structure.

#### AI-era reading

A generated prototype begins aging the moment it encounters:

- a changing dependency;
- a new user expectation;
- an undocumented business rule;
- production data unlike the examples;
- a security disclosure;
- the next person asked to modify it.

AI may make rejuvenation cheaper. It may also create a far larger population of systems whose original generator, prompt history, or human sponsor has disappeared.

Possible line:

> **The cost of software is not generating version 1. It is remaining correct through version 37.**

## The historical promise: programming without programmers

The history should be handled with evidence, not smug hindsight.

### Fourth-generation languages

A 1984 *Journal of Management Information Systems* article described severalfold productivity improvements from “fourth generation” methods and development by end users. U.S. government technical publications from the period examined “high-productivity languages,” application prototyping, and 4GL selection.

4GLs did create lasting value: SQL, report generators, database-centered application tools, and domain-specific languages reduced enormous amounts of work. They did not remove the need to understand data, organizations, integration, or evolving requirements.

### CASE tools

Computer-Aided Software Engineering attempted to automate and standardize design and development across the lifecycle. Contemporary rhetoric included visions described as “programming without programmers.” Monolithic CASE workbenches did not become the universal software factory, but many of their functions survive in IDEs, modeling tools, static analysis, code generation, CI, and DevOps pipelines.

The fair conclusion is:

> Previous revolutions often failed as totalizing products while succeeding as absorbed infrastructure.

This is a useful warning for AI predictions. Even if the strongest “developer extinction” claims fail, agentic capabilities may become invisible, ordinary infrastructure throughout development.

### Other parallels to collect

- COBOL and business-readable programming;
- structured programming and high-level languages;
- object orientation and software reuse;
- visual programming;
- component markets and “software ICs”;
- outsourcing and global labor arbitrage;
- open source replacing proprietary infrastructure;
- cloud and infrastructure as code;
- low-code/no-code and citizen development.

The eventual deck needs only three or four examples. Keep the rest for discussion and visual research.

## What is the same, and what may be different this time?

| Still familiar | Genuinely different or larger in degree |
| --- | --- |
| Requirements are incomplete and contradictory. | Natural language can produce a working-looking candidate immediately. |
| Useful systems must change with the world. | Agents can execute changes across many files and tools. |
| Integration and organizational conformity dominate mature systems. | The same model can cross code, tests, UI, documentation, data, and operations. |
| Generated code still requires ownership. | People without traditional programming skills can create plausible software. |
| Higher abstraction moves rather than erases complexity. | The abstraction is probabilistic and can improvise beyond a fixed generator. |
| Review and testing constrain throughput. | Submission volume can scale without the submitter understanding the change. |
| Tacit domain knowledge is hard to document. | Agents can ingest far more explicit context, but still miss what was never recorded. |
| Tool benefits depend on process and training. | Capability and interface changes arrive on a timescale of months. |

This table can become the organizing device for a veteran section: avoid both “nothing new” and “history no longer applies.”

## Reviewer attention becomes a governed resource

Open-source communities provide current examples of output supply colliding with human review capacity.

### Godot: protect both reviewers and the maintainer pipeline

In June 2026, the Godot Foundation said its pull-request backlog was already constrained by a shortage of qualified reviewers and that increased AI-generated contributions compounded it. Its policy direction emphasizes:

- no autonomous agent contributions or vibe coding;
- no substantial AI-generated code;
- disclosure of AI assistance;
- human-authored communication;
- contributors who understand and can fix their work;
- preserving a path from new contributor to future maintainer.

The important part is not simply “Godot bans AI.” The Foundation links reviewer motivation to mentoring. Review is valuable partly because a human contributor learns and may later share the maintenance burden. Feedback consumed only by a machine can break that social exchange.

### Linux: tools are allowed; understanding and responsibility are mandatory

The Linux kernel’s tool-generated-content guidelines take a different approach. They cover traditional generators and AI under the existing contribution model. Submitters are expected to:

- understand the entire submission;
- be transparent about origin and tools;
- explain what was generated;
- describe testing;
- respond to review;
- accept additional scrutiny proportional to generated content.

The maintainer may treat, scrutinize, deprioritize, or reject the work. The key principle is not code purity; it is accountable contribution.

### ESLint: responsible assistance with contribution gates

ESLint welcomes AI-assisted work but requires disclosure, human review and testing, human responses to maintainers, and readable edited submissions. AI-generated pull requests are restricted to issues the team has already accepted.

Together, these projects form a useful three-policy comparison:

| Godot | Linux | ESLint |
| --- | --- | --- |
| Restrict substantial generated code | Allow tools under longstanding accountability rules | Allow assistance within explicit contribution gates |
| Protect learning and maintainer pipeline | Require understanding, disclosure, testing, and defense | Require accepted issue, human interaction, and edited output |

There is no single correct policy. All three recognize the same economic fact: **submission is cheap; qualified review is scarce.**

## The apprenticeship problem

### Why it is deeper than junior employment

Routine tasks have historically served two roles:

1. they produced useful work;
2. they trained the person doing it.

If AI removes the task but organizations do not replace its learning function, the industry may save time now and create a future verification shortage.

### Early evidence

An ICER 2025 study of computing students working on brownfield tasks found that stronger students used Copilot more selectively. Students also raised concerns about not understanding why suggestions worked, creating a tension between efficiency and learning.

A 2025 CHI study from Microsoft Research and Carnegie Mellon surveyed 319 knowledge workers about 936 uses of generative AI. Greater confidence in AI was associated with less self-reported critical-thinking effort, while confidence in one’s own ability was associated with more. This is not proof of cognitive decline: it is self-reported, covers knowledge work broadly, and cannot establish long-term skill loss. It does provide a reason to study how verification habits change.

Godot’s 2026 policy supplies the social version of the problem: maintainers want review effort to grow a future contributor, not merely improve another generated submission.

### Questions for veteran discussion

- Which “boring” tasks actually trained your judgment?
- What did code review teach you that documentation did not?
- Can juniors learn faster by interrogating an agent, or do they skip the productive struggle?
- Should companies allocate agent-free work or explicit explanation duties?
- If seniors become the permanent verification layer, do they become the new organizational bottleneck?
- How does someone learn to distrust output appropriately without first building things themselves?

Possible line:

> **We may automate the junior task before we automate the need for senior judgment.**

## Productivity is an organizational redesign problem

The productivity J-curve research by Brynjolfsson, Rock, and Syverson argues that general-purpose technologies require complementary investment in processes, products, business models, skills, and organizational capital. Costs appear before the eventual productivity benefits and are often poorly measured.

This explains why all of these can be true simultaneously:

- an individual developer completes a task faster;
- the team’s review queue grows;
- the organization pays for tools and training;
- delivery outcomes remain flat initially;
- larger gains appear only after workflows and responsibilities are redesigned.

This is a stronger economic frame than “companies have not learned prompting.” The complement is the whole operating system around the model.

Possible slide:

```text
faster coding
     ↓
review queue
     ↓
test / security / integration queue
     ↓
unchanged release decision
```

The model did not fail. The bottleneck moved.

## The Jevons question: fewer developers or more software?

Jevons paradox describes cases where efficiency lowers the cost of using a resource enough that total consumption increases. Applying it to software is a hypothesis, not an established empirical law.

If implementation becomes much cheaper, at least four futures are plausible:

1. **Substitution:** organizations produce the same software with fewer people.
2. **Expansion:** organizations keep similar teams and attempt much more software.
3. **Proliferation:** many more people and small organizations create software that previously did not justify its cost.
4. **Congestion:** supply grows faster than maintenance, trust, security, attention, and purchasing power.

All four can happen in different markets.

Question for the talk:

> **Jos ohjelmiston tekeminen halpenee 90 %, väheneekö työ 90 %—vai syntyykö ohjelmistoa kymmenen kertaa enemmän?**

Do not answer with certainty. Connect it to GitHub project growth, App Store supply, SaaS proliferation, internal tools, and the continuing long-term demand forecast for software occupations.

## Maintenance evidence: useful but still immature

A May 2026 empirical preprint analyzed more than 1,000 files and roughly 3,200 changes from 100 repositories using a dataset of agent-generated pull requests. It reported that AI-generated files were changed less frequently and by smaller proportions, that their common later changes were feature extensions, and that humans performed most maintenance.

This does **not** prove agent code is more maintainable:

- the repositories and generated changes are selected;
- younger files have had less time to accumulate maintenance;
- less change can indicate stability, irrelevance, or abandonment;
- maintenance frequency is not the same as comprehensibility or defect rate;
- the paper is a recent preprint.

Another 2025 study comparing generated and human Python solutions with SonarQube found a mixed quality picture: generated solutions scored better on some issue measures while introducing structural or critical issues in some harder-task settings. Again, benchmark tasks and static-analysis findings do not represent production lifetime quality.

The honest conclusion is that long-term maintenance evidence lags adoption. That gap is itself worth showing:

> **We are deploying the workflow before we have longitudinal evidence about the systems it leaves behind.**

## Candidate five-minute veteran sequence

If only five minutes survive into the main deck:

1. **1968 / 2026:** “We can create more software than we can manage/review.”
2. **Brooks:** Which accidental complexity did AI remove? Which essential complexity remains?
3. **Naur:** Who holds the theory when the agent writes the artifact?
4. **Three project policies:** Godot, Linux, and ESLint govern reviewer scarcity differently.
5. **Landing:** The new bottleneck is not typing; it is accountable understanding.

Lehman, Parnas, CASE, 4GL, the J-curve, maintenance studies, and apprenticeship evidence remain in notes or appendix.

## Candidate visual artifacts to find

- a page or photograph from the 1968 NATO report;
- a period 4GL or CASE advertisement using productivity or end-user-development language;
- a “programming without programmers” period headline;
- Brooks’ four essential properties as one simple visual;
- Naur represented as code artifact versus living theory;
- a current pull-request queue or policy excerpt from Godot/Linux/ESLint;
- a bottleneck animation: generation expands while the review lane stays fixed;
- an old local project or screenshot from the speaker’s own career.

Licensing and image reuse must be checked before placing archival material in the deck.

## Provocations worth preserving

- “1968 had a software crisis. In 2026 we automated the production side of it.”
- “Every generation gets the silver bullet it deserves.”
- “AI may remove accidental complexity—or merely generate it faster.”
- “If nobody holds the theory, the repository is already legacy code.”
- “The code passed the tests. Did the team learn anything?”
- “The future senior developer is hidden inside today’s boring ticket.”
- “AI can make every change cheaper while making the sum of all changes more expensive.”
- “Submission is abundant. Review is governed.”
- “Previous revolutions failed as total products and succeeded as invisible infrastructure.”
- “We are deploying the workflow before we have longitudinal evidence about what it leaves behind.”

These are working lines. They need testing for accuracy, tone, and audience response.

## Sources added for this lens

- [NATO, *Software Engineering: Report of a Conference Sponsored by the NATO Science Committee* (1968)](https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp48950)
- [Fred Brooks, *No Silver Bullet—Essence and Accident in Software Engineering*](https://dl.icdst.org/pdfs/files3/f923b64c10c1292ad76c939911e3e3ac.pdf)
- [Peter Naur, *Programming as Theory Building*](https://gwern.net/doc/cs/algorithm/1985-naur.pdf)
- [David Parnas, *Software Aging*](https://www.researchgate.net/publication/3560773_Software_aging)
- [Lehman software-evolution overview and source trail](https://plg.uwaterloo.ca/~migod/846/papers/lehman-ase-01.pdf)
- [1984 JMIS article on fourth-generation methods](https://www.jmis-web.org/articles/379)
- [IEEE Technology Navigator, CASE](https://technav.ieee.org/topic/computer-aided-software-engineering-case/)
- [NBER, *The Productivity J-Curve*](https://www.nber.org/papers/w25148)
- [NBER, *The Economics of Generative AI*](https://www.nber.org/reporter/2024number1/economics-generative-ai)
- [Godot Foundation, 2026 contribution-policy changes](https://godotengine.org/article/contribution-policy-2026/)
- [Linux kernel guidelines for tool-generated content](https://cdn.kernel.org/doc/html/latest/process/generated-content.html)
- [ESLint AI usage policy](https://eslint.org/docs/latest/contribute/ai-policy)
- [ICER 2025, Copilot and student brownfield tasks](https://icer2025.acm.org/details/icer-2025-papers/18/The-Effects-of-GitHub-Copilot-on-Computing-Students-Programming-Effectiveness-Effic)
- [Microsoft Research and CMU, generative AI and critical thinking](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/)
- [2026 preprint, maintenance of agent-generated code](https://arxiv.org/abs/2605.06464)
- [2025 study, maintainability and reliability of generated code](https://arxiv.org/abs/2508.00700)

These sources should also be normalized into the central source ledger before slide production.
