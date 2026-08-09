# Research notes

These notes are an evidence bank, not slide copy. Each section asks: what does the evidence let us say, what does it mean for the red thread, and where can we overreach?

Research snapshot: **9 August 2026**. See the [source ledger](08-source-ledger.md) for URLs and source types.

## 1. Adoption is high; confidence is not

The 2025 Stack Overflow Developer Survey gives a useful contradiction:

- 84% of respondents were using or planning to use AI tools;
- 51% of professional developers said they used them daily;
- 60% had favorable or very favorable sentiment, down from more than 70% in the previous two years;
- 46% distrusted AI output accuracy, while 33% trusted it;
- 66% named “almost right” answers as a frustration;
- 45% said debugging AI-generated code can take more time;
- 52% reported a positive productivity effect;
- 72% said they were not “vibe coding.”

Agent use was less mainstream than general AI use. Many respondents stayed with simpler tools or had no plans to use agents. Among agent users, reported time and productivity benefits were high, but concerns about accuracy, security, and privacy remained higher still.

### Meaning

Adoption is not trust, and use is not endorsement. A developer can use AI every day and remain skeptical. This is the right emotional foundation for the talk: the room does not need to choose between enthusiast and skeptic identities.

### Caveat

The survey is global and self-selected, with roughly 31,000–33,000 responses to relevant AI questions. It describes respondents, not every developer, and self-reported productivity is not causal evidence.

## 2. “Does AI make developers faster?” has no context-free answer

### Evidence pointing toward acceleration

Microsoft Research combined three field experiments involving 4,867 developers at Microsoft, Accenture, and a Fortune 100 company. Access to an AI coding assistant was associated with a **26.08% increase in completed tasks** across the experiments. Less-experienced developers showed larger gains in the study.

A 2026 METR survey of 349 technical workers reported large perceived gains: median respondents estimated roughly 1.4–2× more value and 3× speed in some measures.

### Evidence pointing toward friction

METR’s early-2025 randomized study involved 16 experienced open-source developers completing 246 tasks in mature repositories they knew well. With AI tools, they took **19% longer**, while believing in advance that AI would make them approximately 24% faster and estimating afterward that it had made them about 20% faster.

### System-level synthesis

DORA’s 2025 research reports widespread use and perceived productivity gains, but treats AI as an **amplifier** of the surrounding organization. Higher AI use was associated with higher throughput and also more delivery instability. Time saved during creation can be spent in audit and verification. Tests, continuous integration, small batches, user feedback, and psychological safety remain part of the causal system.

### Meaning

The apparent disagreement is the content:

- unfamiliar task or familiar repository;
- beginner or domain expert;
- count of completed tasks or time to dependable production;
- individual output or team delivery;
- first draft or lifetime ownership;
- self-report or randomized observation.

The useful question is not “Is AI faster?” It is **“Faster for whom, doing what, measured at which boundary?”**

### Caveats

- Microsoft’s experiments concern a particular assistant and participating companies; task completion is not the whole product lifecycle.
- METR’s randomized study is narrow: 16 experienced contributors, specific repositories, and early-2025 tools. METR explicitly warns against generalizing it to beginners, unfamiliar codebases, or all software work.
- METR itself cautions that self-reported gains often exceed experimental results.
- DORA reports associations across complex organizational systems, not a simple guarantee that adding AI causes either outcome.

## 3. Capability is advancing quickly and unevenly

The Stanford 2026 AI Index reports steep progress on several technical benchmarks:

- SWE-bench Verified moved from roughly 60% to near saturation within about a year;
- OSWorld agent performance rose from roughly 12% to 66.3%, while still failing about one-third of tasks;
- top models became closely clustered on major arena rankings by March 2026;
- the United States–China gap on tracked model performance narrowed to approximately 2.7%;
- industry produced more than 90% of notable frontier models in 2025.

The same report offers a useful anti-hype counterexample: leading systems can solve advanced formal problems while remaining weak on some visually simple tasks. Capability is jagged rather than uniformly humanlike.

METR’s task-horizon work estimates the length of software tasks that frontier agents can complete with a chosen reliability threshold. Its updated 2026 method estimates rapid doubling since 2024, on the order of months rather than years. The metric is more meaningful than a model-name slide because it asks how long a coherent task can be delegated.

### Meaning

The unit of delegation is moving outward—from token to function, from function to issue, and sometimes from issue to a multi-step outcome. This changes workflow even before full reliability arrives.

### Caveats

- Benchmarks can saturate, leak into training, or become optimized targets.
- Task-horizon results describe a benchmark distribution and success threshold, not unrestricted autonomous work.
- More inference compute can buy longer performance at a cost that makes comparisons nontrivial.
- Model rankings are highly time-sensitive. The talk should show the direction and consequence, not crown a permanent winner.

## 4. Open weights are strategically important—and not the same as open source

The 2026 AI Index estimates that the best closed model led the best open model by about 3.3 percentage points in March 2026, while open-weight projects and model uploads continued to grow. Chinese developers are important contributors to the competitive open-weight ecosystem.

The Open Source Initiative’s Open Source AI Definition requires more than downloadable parameters: users need sufficient access and freedoms to use, study, modify, and share the system. Stanford’s terminology guide therefore distinguishes **open-weight** models from systems whose data, training code, and process are open enough to reproduce and study.

### Meaning

Open-weight models matter for local operation, privacy choices, cost control, customization, resilience, and technological sovereignty. But “weights available” should not be used as a synonym for transparent or fully open.

### Presentation use

This is a short consequence-led section, not a model-architecture workshop. Lakeus-Devaus already hosted a local-coding-model event in 2024 covering model characteristics, quantization, context, Ollama, and practical comparisons. The 2026 continuation is: **what became possible, what remained hard, and why openness changes the strategic options.**

## 5. The development loop changed

Anthropic’s 2025 analysis of Claude Code conversations classified approximately 79% as automation and 21% as augmentation under its taxonomy. GitHub’s 2025 Octoverse reported 4.3 million AI-related projects, 43.2 million pull requests per month, and more than 180 million developers on the platform.

These are platform-specific measurements, but they support a visible workflow shift: AI is increasingly asked to act within the repository rather than only explain code outside it.

### Working model

```text
Goal
  → constraints and acceptance criteria
  → repository and domain context
  → bounded delegation
  → inspection and adversarial questions
  → automated checks
  → human review and integration
  → production observation
  → new context and revision
```

The expensive mistake is to treat generation as the end of this loop. In production, the human or organization still owns every downstream consequence.

### Practical implications

- Clear product intent becomes executable leverage.
- Existing architecture and test quality determine how safely output can scale.
- Small, reviewable changes remain valuable because they bound uncertainty.
- Reviewing plausible code is a different cognitive task from writing code and can become a bottleneck.
- Repository instructions, examples, and tools are a form of organizational memory.
- Experienced developers may type less while making more consequential decisions.

## 6. More software does not automatically mean more value

Apple’s transparency reports provide a clean supply-side comparison:

| App Store measure | 2022 | 2025 | Approximate change |
| --- | ---: | ---: | ---: |
| Apps available | 1,783,232 | 2,172,472 | +22% |
| Submissions reviewed | 6,101,913 | 9,100,620 | +49% |
| Registered developers | 36,974,015 | 60,597,750 | +64% |
| Average weekly visitors | 656,739,889 | 892,670,823 | +36% |
| Average weekly downloads | 747,873,877 | 929,754,061 | +24% |

### Meaning

Supply, participants, and review workload can grow faster than actual downloads. The provocative question is not “Can anyone make an app?” but **“When more people can make one, who chooses yours?”**

### Caveat

Submissions include updates and resubmissions, and the reports do not identify AI-created applications. This comparison cannot establish that AI caused the growth. It illustrates an existing attention and review problem that cheaper creation may intensify.

## 7. AI slop is an incentive and verification problem

“AI slop” is useful only if defined. In this talk it means high-volume, superficially plausible output produced with too little care for context, truth, maintenance, or the recipient’s attention. It is not simply “anything made with AI.”

Evidence for concrete failure modes includes:

- Stack Overflow respondents’ frustration with nearly-correct answers and debugging time;
- a USENIX Security 2025 study of 576,000 code samples across 16 models, finding hallucinated package references at materially higher rates in open models than commercial models in the tested setup;
- Veracode’s vendor study, in which 45% of tested coding tasks introduced security flaws;
- OWASP’s explicit concern about inappropriate trust in AI-generated code and guidance for secure AI-assisted coding;
- GitHub’s own discussion of low-quality issue and pull-request volume burdening maintainers.

### Meaning

The defining failure is not aesthetic sameness. It is **externalized evaluation cost**: the creator saves time by making reviewers, maintainers, users, or the public spend more time determining whether the output deserves attention.

This suggests a strong ethical rule for AI-assisted development: do not make your speed someone else’s review debt.

### Caveats

- Security studies use selected languages, prompts, weakness classes, and models. Exact rates are not universal defect rates.
- Veracode has a commercial interest in code-security tooling.
- “Slop” can become a lazy label that dismisses good work or people learning in public. Critique process and consequences, not provenance alone.

## 8. SaaSpocalypse is pressure on undifferentiated layers, not the death of software

The UK National Cyber Security Centre’s 2026 paper argues that AI shifts the buy/build/go-without curve: “bespoke enough” internal or personal tools become cheaper to create. Simple point solutions face pressure before large, critical enterprise systems. Maintenance, security, compliance, support, data, and organizational ownership do not disappear.

Thoughtworks makes a similar distinction: narrow tools and generic feature layers are exposed, while systems of record, proprietary data, workflow integration, governance, and trust remain defensible.

### A useful comparison

| More exposed | More durable, though not immune |
| --- | --- |
| Thin wrapper around a generic model | System of record with durable data |
| Single-purpose internal point tool | Workflow crossing teams and organizations |
| Generic CRUD feature set | Deep integration and migration knowledge |
| Per-seat value based mainly on UI access | Outcome, transaction, or infrastructure value |
| Easy demo with low switching cost | Security, compliance, support, and accountable operation |

### Meaning

The “SaaSpocalypse” is better framed as a repricing of features and seats. It raises the bar for why a product deserves to exist and what its monthly fee actually pays for.

### Caveat

The transition is likely measured in years, not a single dramatic quarter. Custom generation also creates a long tail of maintenance and security obligations. Replacing a subscription with unowned software can be false economy.

## 9. Employment: near-term distributional pain and long-term demand can coexist

The Stanford Digital Economy Lab found employment declines concentrated among U.S. workers aged 22–25 in highly AI-exposed occupations. The 2026 AI Index summarizes the fall among young software developers as nearly 20% since 2024. The researchers are careful about causality and identify heterogeneity rather than an economy-wide collapse.

At the same time, the U.S. Bureau of Labor Statistics projects 15% growth in employment for software developers, quality assurance analysts, and testers from 2024 to 2034.

### Meaning

It is possible for software work to grow over a decade while the entry ramp becomes worse now. If routine starter tasks are delegated before organizations redesign learning, the profession can consume its apprenticeship system.

This is a better discussion than “Will AI take developer jobs?”:

- Where do juniors get deliberate practice?
- Who reviews the reviewer when senior attention is scarce?
- Does AI widen access to building, or only reduce headcount in existing firms?
- Which new responsibilities appear when output volume rises?

### Caveats

The employment evidence is U.S.-specific. Hiring also reflects interest rates, pandemic-era over-hiring, firm investment, and macroeconomic conditions. Do not attribute every tech vacancy decline to AI.

## 10. The global race is not one scoreboard

The 2026 AI Index depicts different strengths:

| United States | China | European Union |
| --- | --- | --- |
| Frontier model labs and large private investment | High publication volume, citations, patents, industrial deployment, and strong open-weight models | Regulation, public-interest institutions, industrial domains, trust, and sovereignty investments |
| 59 notable models in 2025 | 35 notable models in 2025 | Fewer frontier models in the same count |
| $285.9B private AI investment in 2025 | $12.4B recorded private investment, excluding much state support | Less private investment than the U.S.; shared compute and AI-factory initiatives |

The measured U.S.–China technical-performance gap narrowed to roughly 2.7%. China led several research and patent-volume measures. U.S. private investment exceeded China and Europe combined by a wide margin.

The EU AI Act is being applied in stages through 2028. General-purpose AI obligations and governance began in 2025, with further enforcement and transparency milestones in 2026. Europe’s wager is partly that trust, rules, shared compute, and industrial application can be strategic assets—not merely constraints.

### Meaning

Avoid declaring a single winner. The games differ: frontier capability, capital, compute, industrial adoption, open ecosystems, governance, and local sovereignty are related but not identical.

### Caveats

- Private-investment comparisons undercount state-directed funding and are not a complete measure of national capability.
- Patent volume is not equivalent to quality or deployment.
- EU implementation dates and obligations are changing and must be rechecked before presentation. This talk is not legal advice.

## 11. What did not become cheap

The historical software-engineering literature gives the current evidence a longer memory:

- the 1968 software crisis centered scale, reliability, cost, coordination, and maintenance long before generative AI;
- Brooks separated accidental implementation difficulty from the essential complexity of conceptual structures, conformity, change, and invisibility;
- Naur described programming as building a theory of the problem and solution inside the people doing the work;
- Lehman described useful real-world software as continually changing and becoming more complex unless teams actively control it;
- Parnas described aging as the mismatch that grows between a system, its changing environment, and an increasingly degraded structure.

These ideas do not prove that AI cannot transform software engineering. They identify what a transformation must overcome before “generating code” can be equated with “solving software.”

Current open-source policies make the abstract problem concrete. Godot, Linux, and ESLint take different positions on generated contributions, but all protect scarce reviewer attention and insist on some form of human understanding, disclosure, testing, interaction, or responsibility.

Early learning evidence adds another constraint: assistance can improve task performance while reducing how much a learner understands or critically engages. The evidence is not mature enough for a deskilling verdict, but it is strong enough to make apprenticeship an explicit design problem for employers.

See [Veteran lens: what changed and what did not](09-veteran-lens.md) for the full historical treatment and new source set.

## 12. Research conclusions that support the thesis

Across the evidence, five recurring tensions survive individual statistics:

1. **Adoption rose faster than trust.**
2. **Output speed rose faster than our ability to measure product-level value.**
3. **Capability rose faster than reliability became uniform.**
4. **Software supply rose while attention and review remained scarce.**
5. **Automation pressure rose while responsibility remained attached to people and organizations.**

Those tensions are the presentation. The individual studies are supporting evidence, not the red thread.
