# AI workflow scenarios, field lessons, and open questions

This dossier turns the architecture in [AI-native software development in August 2026](10-ai-native-development-workflows.md) into concrete situations. It deliberately includes both modest and maximal AI use. The goal is to show that the “right” workflow changes with risk, clarity, lifespan, and reversibility.

Research snapshot: **11 August 2026**.

## Choose autonomy by consequence, not enthusiasm

Four variables explain much of the appropriate control model:

| Variable | Less human intervention can be reasonable when… | More human intervention is needed when… |
| --- | --- | --- |
| blast radius | impact is local and cheap | money, safety, privacy, reputation, or many users are exposed |
| reversibility | change can be deleted or rolled back easily | migration or external action is hard to undo |
| intended lifespan | disposable experiment | system must be understood and maintained for years |
| evaluability | success is quickly machine-checkable | quality is subjective, delayed, political, or domain-dependent |

The same model can therefore be:

- nearly autonomous for a throwaway data transformation;
- a supervised pair for a legacy refactor;
- restricted to evidence gathering in a production incident;
- prohibited from taking the final action in a payment, health, or legal system.

## Scenario 1: a bounded brownfield defect

**Example:** A customer reports that editing an address sometimes removes the apartment number.

### A mature delegated loop

```text
ticket + logs + reproduction clues
            ↓
agent inspects code, history, tests, and related incidents
            ↓
proposes a short plan and risk assessment
            ↓
reproduces through API or browser and records evidence
            ↓
writes failing regression test
            ↓
implements the smallest fix
            ↓
runs focused and wider checks
            ↓
self-review + independent risk review
            ↓
pull request with cause, alternatives, evidence, and rollout notes
            ↓
human confirms product meaning and merges
```

### Where AI helps most

- searching a large repository and history;
- correlating code, issue, and runtime evidence;
- producing a reproduction and regression test;
- performing the mechanical edit and documenting it;
- iterating quickly against CI.

### Human leverage

- noticing that “apartment number” has country-specific semantics;
- deciding whether historical malformed records need repair;
- distinguishing the symptom from the actual business rule;
- accepting rollout and data risk.

### Good autonomy level

Usually level 2: issue to tested pull request, with human review and merge. Increase autonomy only if the repository has strong feedback and the change is reversible.

## Scenario 2: greenfield prototype and product discovery

**Example:** A local manufacturer wants a tool that turns photographed service notes into draft maintenance records.

### High-autonomy path

- a domain expert describes the workflow, examples, forbidden claims, and successful output;
- the agent interviews the expert for missing edge cases;
- research and design agents explore alternatives;
- the coding agent creates the application, schema, tests, deployment config, and onboarding;
- browser and computer-use tools exercise the real flow;
- observability captures failures and user corrections;
- the team demonstrates to users within a day rather than debating a specification for weeks.

### The trap

Fast implementation makes it easy to confuse “we can build this” with “people want this, trust this, and will change their work for it.” The hardest questions arrive after the demo:

- Where do photos and personal data go?
- Who corrects a confidently wrong maintenance record?
- Does this integrate with the system of record?
- What happens without connectivity?
- Who supports it during harvest or production season?
- Does the organization have enough examples to evaluate accuracy?

### Good autonomy level

Level 3–5 can be appropriate for the prototype. Production should drop to a risk-appropriate level until domain evaluation, ownership, data governance, and support exist.

### Talk connection

This is the SaaSpocalypse tension in miniature: creation cost collapsed; discovery, trust, distribution, workflow fit, and long-term ownership did not.

## Scenario 3: UI and design-system implementation

**Example:** Implement a new booking flow from a Figma design.

### AI-native loop

```text
design source of truth + component library + requirements
                       ↓
agent reads actual design tokens and existing components
                       ↓
implements states and responsive behavior
                       ↓
opens the live app in a browser
                       ↓
checks user paths, accessibility tree, console, network, and performance
                       ↓
compares screenshots and records evidence
                       ↓
returns implementation discoveries to design or product artifacts
```

### What changed

The agent is no longer reasoning only from static code or a screenshot. Connected design context and runtime browser state create a round trip. Figma’s [2026 MCP direction](https://www.figma.com/blog/the-tldr-on-mcp/), Chrome’s [DevTools for agents](https://developer.chrome.com/docs/devtools/agents/get-started), and Playwright’s [test agents](https://playwright.dev/docs/test-agents) are concrete examples.

### Failure modes

- pixel similarity hides broken semantics or keyboard navigation;
- browser tests validate the happy path but not user comprehension;
- an agent “fixes” visual differences by hard-coding values outside the design system;
- authenticated browser state exposes private data to hostile page content;
- output looks like every other generated interface because product character was never specified.

### Good autonomy level

Level 2–3. Let agents iterate heavily on machine-observable criteria; reserve product taste, content meaning, accessibility judgment, and release ownership for people.

## Scenario 4: legacy migration

**Example:** Move a large service from an old framework or language version without changing externally observable behavior.

### Suggested topology

- **Explorer agents** map architecture, ownership, data flow, fragile areas, and undocumented contracts.
- **Specification work** records compatibility requirements, explicit non-goals, and migration slices.
- **Test agents** build golden-master, contract, characterization, and smoke tests before broad edits.
- **Worker agents** handle independent modules in isolated branches or worktrees.
- **Integration agent** rebases or merges in dependency order and runs wider checks.
- **Reviewer agents** look for API drift, security changes, test weakening, and generated duplication.
- **Humans** decide boundary changes, exceptions, rollout order, and acceptable compatibility breaks.

### Why this is not “just parallelize it”

Multiple agents can create merge conflicts, duplicated abstractions, inconsistent decisions, and a false sense of progress. The [CAID study](https://arxiv.org/abs/2603.21489) treats dependency planning, isolated workspaces, structured integration, and executable verification as first-class parts of the method. Those controls matter more than the number of workers.

### Good autonomy level

Level 3 for well-characterized slices; level 1–2 where behavior is not understood. The absence of tests is not an invitation for more autonomy—it is evidence that exploration and characterization come first.

## Scenario 5: a production incident

**Example:** Error rate rises after a release and some customers cannot complete checkout.

### Useful agent work

- gather alerts, logs, traces, recent deployments, feature flags, and related code;
- form ranked hypotheses and state missing evidence;
- compare healthy and failing requests;
- reproduce in an isolated environment;
- propose rollback, flag, or patch options with blast radius;
- prepare a tested fix and incident timeline;
- draft internal and customer communication for human approval;
- turn the incident into regression tests and runbook improvements.

### Boundaries

Production writes, rollback, credential use, customer messages, and destructive remediation should normally require explicit human authorization. The pressure of an incident is exactly when a plausible wrong action can be most expensive.

### Good autonomy level

High autonomy for investigation and preparation; low autonomy for consequential external action. This demonstrates why autonomy is multidimensional rather than a single setting.

## Scenario 6: continuous maintenance and repository gardening

**Example tasks:** dependency updates, CI failures, stale documentation, flaky tests, generated-code duplication, missing telemetry, and recurring low-risk bugs.

### Suitable continuous workflows

- scheduled scans create issues or draft pull requests;
- a dependency agent checks release notes, compatibility, tests, and vulnerability context;
- a documentation agent detects drift between code, commands, and repository maps;
- a test-health agent triages flakes and identifies weak assertions;
- a cleanup agent proposes small changes against architectural fitness rules;
- humans approve policy exceptions and higher-risk changes.

### Why this may be more valuable than flashy feature generation

Maintenance work is recurring, bounded, frequently machine-checkable, and often deferred by humans. Agents can make the invisible upkeep of a repository continuous—provided the workflow is stable before it is scheduled.

OpenAI’s harness report describes recurring “garbage collection” and documentation gardening after engineers initially spent roughly 20% of Fridays cleaning generated slop. The durable idea is that generation creates entropy unless the system continually encodes and enforces its principles.

### Failure modes

- an update loop creates endless low-value PR noise;
- the agent optimizes for a green build by weakening tests;
- automated cleanup homogenizes deliberate exceptions;
- scheduled tasks inherit excessive permissions;
- nobody measures whether generated maintenance work is accepted or merely reviewed.

### Good autonomy level

Level 4 for mature, low-risk, reversible workflows with clear owners. Start manually, observe failure modes, and schedule only after the workflow is reliable.

## Scenario 7: a domain expert builds an internal tool

**Example:** A logistics specialist who is not a professional programmer builds a capacity-planning application.

### What the evidence suggests

Anthropic’s 2026 [Claude Code usage study](https://www.anthropic.com/research/claude-code-expertise) found software and non-software occupations closer in success than might be expected, while task and domain expertise remained important. Syntax knowledge becomes less exclusive; knowing what the result must mean becomes more valuable.

### A productive workflow

- domain expert supplies real cases, exceptions, terminology, and evaluation;
- agent translates them into a prototype, test fixtures, and questions;
- software engineer reviews architecture, data lifecycle, security, integration, and maintainability;
- users trial the tool and corrections become structured tests;
- ownership and support are made explicit before adoption grows.

### Failure modes

- shadow IT handles sensitive data without governance;
- the prototype becomes mission-critical without an owner;
- a domain expert can evaluate business output but not security or operations;
- software engineers dismiss valuable domain authorship because the code was generated;
- the organization gains applications faster than it gains maintenance capacity.

### Good autonomy level

High autonomy for discovery and local prototypes; shared ownership before production. This may be one of the largest real shifts of 2022–2026: not “everyone became a programmer,” but more domain experts can make executable proposals.

## Scenario 8: high-stakes or regulated software

**Example:** payment processing, healthcare decisions, identity, industrial safety, or legally consequential systems.

### AI can still help substantially

- map requirements and evidence;
- search for inconsistent implementation;
- generate adversarial tests and threat models;
- review diffs against policy;
- produce traceable documentation;
- implement small, bounded changes in isolation;
- analyze incidents and monitoring;
- compare independent implementations.

### What should remain tightly controlled

- interpretation of law, policy, or clinical meaning;
- architecture and threat-boundary decisions;
- changes to authentication, authorization, billing, encryption, or permissions;
- production data access;
- merge, deployment, and emergency action;
- final sign-off and accountability.

### Good autonomy level

Level 1–2 for implementation, possibly level 3 for independent analysis in isolated contexts. A strong agent may reduce the cost of producing evidence without reducing the standard of evidence.

## The maximum-autonomy case: goal to merged outcome

A plausible frontier workflow now looks like this:

1. A human converts user feedback into a bounded objective and acceptance criteria.
2. The orchestrator inspects the repository map and chooses relevant skills and tools.
3. An explorer builds a change map and identifies risk.
4. The main agent creates a plan, then starts a per-worktree application and telemetry stack.
5. It reproduces the issue in the browser and records evidence.
6. It writes the test and implementation, running fast checks after each slice.
7. It performs self-review and delegates independent security or architecture review.
8. Deterministic hooks prevent completion with failing checks, forbidden changes, missing evidence, or uncommitted work.
9. It creates a pull request containing the decision record, screenshots or video, test results, and unresolved judgment calls.
10. It responds to CI and review until all machine-verifiable gates pass.
11. A human resolves product judgment and accepts or rejects the outcome.
12. Production observation creates the next task, test, instruction, or skill improvement.

This is technically close to “AI does everything.” Organizationally, it is closer to “humans designed a small software factory whose workers happen to be language models.”

## The median case: agents on a leash

The frontier story should be placed beside current practice:

- Stack Overflow’s April 2026 [pulse](https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work/) found 63% rarely or never allow full autopilot.
- 68% preferred a predictable single agent to a complex multi-agent setup.
- Anthropic’s [session study](https://www.anthropic.com/research/claude-code-expertise) found humans making most planning decisions and agents making most execution decisions.
- A study of experienced developers, [*Professional Software Developers Don’t Vibe, They Control*](https://arxiv.org/abs/2512.14012), found positive attitudes alongside deliberate retention of design and implementation control.

The present is therefore not one workflow. It is a widening spectrum between assisted authorship and harness-managed delivery.

## Success patterns found repeatedly

### 1. The repository is the system of record

Agents cannot use crucial context hidden in a meeting, somebody’s memory, or inaccessible chat. Product decisions, commands, architecture boundaries, examples, and verification need an authoritative, discoverable home.

### 2. A short map routes to deep truth

Huge always-loaded instruction files rot and compete for attention. Short indexes, progressive disclosure, and version-matched references perform better than indiscriminate context stuffing.

### 3. The agent can run the real feedback loop

The fastest human review is the one the compiler, test suite, browser, trace, or policy gate already handled. An agent without feedback produces drafts; an agent with fast feedback can converge.

### 4. Work is small, isolated, and reversible

Small changes make uncertainty visible. Worktrees and branches prevent parallel agents from corrupting one another’s state. Rollback and feature flags reduce the cost of being wrong.

### 5. Humans spend judgment where it has leverage

Humans do not line-edit every generated line. They focus on problem framing, hidden domain knowledge, architecture, risk, product taste, and decisions not captured by deterministic tests.

### 6. Repeated corrections become infrastructure

A correction made once may remain conversation. A correction made repeatedly becomes a test, check, repository instruction, skill, tool, or architecture change.

### 7. The team evaluates its own workflow

Prompts, instructions, skills, tools, and models are tested against representative tasks. A public best practice can be actively harmful when it is stale or mismatched to the repository.

## Failure patterns worth telling on stage

### The one-shot miracle

An agent produces a striking result once, but the team cannot reproduce, evaluate, modify, or operate it. The demo optimized for plausibility; the product requires a feedback loop.

### Instruction bloat

Every failure adds another paragraph. The agent receives contradictory rules, important constraints become invisible, tokens grow, and nobody knows which instruction caused a behavior.

### Tool fever

The team adds several MCP servers, dozens of skills, many agents, and multiple models before making one bounded workflow reliable. Tool selection becomes harder and the security boundary expands.

### Agent org-chart cosplay

“CEO agent,” “architect agent,” and “senior-reviewer agent” sound sophisticated but share the same weak specification and feedback. More roles multiply confident agreement rather than independent evidence.

### Parallel-write chaos

Agents edit the same files from one working tree. Merge conflict, overwritten context, and inconsistent decisions consume any parallelism gain.

### Green-build gaming

The agent removes a failing test, weakens an assertion, changes a fixture, adds a broad ignore, or catches an exception to satisfy the visible metric.

### Review displacement

Generation becomes five times faster, so senior engineers receive five times more plausible code. Local productivity becomes organizational review debt.

### Comprehension debt

The system works, but nobody on the team formed a durable mental model of why. Every future change begins with rediscovery and unearned trust.

### Shadow production

A useful prototype quietly acquires real users, data, dependencies, and business importance without production ownership, security review, observability, or support.

### Autonomous permission creep

An agent intended to propose work accumulates credentials to modify systems, send messages, merge code, and deploy. A malicious document or website can now turn context into action.

### Model-chasing without harness improvement

The team changes models every week while tests remain slow, local setup is broken, requirements are implicit, and repository knowledge is stale. A stronger model cannot see missing truth.

## Opinions and tensions to preserve

These do not need a single final answer; they can create veteran discussion.

### “Use one strong agent” versus “build an agent team”

- One agent is easier to understand, cheaper, and avoids lossy coordination.
- Multiple agents help when work is genuinely independent, context is large, or separate criticism is valuable.
- The deciding question is not size but topology: what information and dependency must cross each boundary?

### “Use MCP everywhere” versus “a CLI is enough”

- MCP is valuable for governed live systems and reusable structured integration.
- CLI and APIs are often more compact, observable, and reliable for local work.
- Protocol choice should follow context, security, and lifecycle—not fashion.

### “Write a comprehensive instruction file” versus “let the agent explore”

- Human-written local constraints can prevent expensive rediscovery.
- Generic or generated instruction files add cost and can reduce success.
- A short map plus accessible authoritative material is the most defensible default.

### “Let agents write tests” versus “tests are the trusted oracle”

- Agents are good at generating broad test candidates and reproductions.
- Generated tests can encode the same misunderstanding as generated code.
- Protect high-value expectations, use independent review, and sometimes test the tests.

### “Never review generated code line by line” versus “you own every line”

- Full manual rereading cannot scale with unlimited output.
- Blind trust cannot satisfy accountability.
- The practical answer is risk-tiered review: machine sensors handle deterministic properties; people inspect intent, architecture, exceptions, and high-blast-radius behavior.

### “Agents democratize software” versus “expertise matters more”

- More people can create executable artifacts and prototypes.
- Domain and engineering expertise predict better evaluation and recovery from failure.
- Access broadens, but expertise moves from syntax production toward judgment and control.

### “AI eliminates junior work” versus “AI can accelerate apprenticeship”

- Routine tasks may be delegated before organizations replace the learning they provided.
- An agent can also explain history, generate exercises, challenge reasoning, and make feedback immediate.
- The outcome depends on whether teams optimize only throughput or also deliberate learning and ownership.

## Practical recommendations for an individual developer

1. Start with one coherent outcome per conversation or task.
2. State goal, constraints, evidence, and definition of done.
3. Ask for a plan when ambiguity or blast radius is material.
4. Give the agent direct access to the smallest useful feedback loop.
5. Keep durable repository instructions short and project-specific.
6. Create a skill only after a workflow repeats and its boundary is clear.
7. Add MCP or an app when live structured context justifies the integration cost.
8. Use browser evidence for user-facing work.
9. Delegate noisy exploration or independent review; keep tiny reactive work local.
10. Verify subagent claims and protect tests from being optimized away.
11. Capture why a solution was chosen, not only the final patch.
12. Stop increasing autonomy when review, understanding, or risk controls fall behind.

## Practical recommendations for a team or organization

1. Pick two or three high-frequency workflows, not an abstract “AI transformation.”
2. Establish baseline outcome and delivery metrics before claiming productivity.
3. Fix local setup, test latency, observability, and documentation discoverability.
4. Create a short repository map and make project truth version-controlled.
5. Separate deterministic lifecycle actions from model judgment.
6. Classify actions by permission, blast radius, and approval requirement.
7. Run agents in isolated, reproducible environments with audit trails.
8. Treat prompts, instructions, skills, and tool configurations as tested engineering artifacts.
9. Build explicit learning and review time so comprehension does not silently collapse.
10. Limit work in progress; supervising too many agents is still cognitive load.
11. Give higher autonomy to reversible, machine-evaluable work and lower autonomy to consequential judgment.
12. Measure cost per accepted outcome, rework, failures, and team understanding—not lines or PR count.

## Emerging edge: self-improving agent systems

The next frontier is not merely longer tasks. It is systems that revise their own harness from traces and executable feedback:

- update memory and instructions;
- synthesize or repair skills;
- change tool routing;
- choose different models for different work;
- alter agent topology;
- generate new evaluation cases from failures.

An August 2026 [survey of self-evolving agents](https://arxiv.org/abs/2608.03392) describes this wider design space. It is early and should remain appendix material. Self-improvement creates new risks: overfitting to visible tests, accumulating conflicting rules, reinforcing a mistaken hypothesis, version drift, opaque cost, and weakening controls. The safe form looks less like an agent secretly rewriting itself and more like a proposed, versioned, evaluated change to its working environment.

## Candidate seven-minute segment for the main talk

This could replace part of the current model-progress material without turning the talk into a tutorial.

### Beat 1 — Show the naïve picture (45 seconds)

```text
prompt → model → code
```

Ask: “Is this what AI-powered development means?”

### Beat 2 — Reveal the actual system (90 seconds)

```text
goal → context → skills/tools → agent(s) → evidence → human judgment → learning
```

Name skills, MCP, browser use, and subagents only as parts of these functions—not as a glossary.

### Beat 3 — Contrast two realities (2 minutes)

- Frontier: OpenAI’s zero-manually-written-code harness and HubSpot’s 7,000 merged agent PRs.
- Median: 63% in Stack Overflow’s pulse rarely or never use full autopilot; 68% prefer one predictable agent.

The point is not contradiction. The frontier teams invested in the environment that makes longer delegation safe.

### Beat 4 — Autonomy ladder (90 seconds)

Show lookup → supervised pair → delegated PR → parallel team → continuous operations → harness-first delivery. Emphasize that the correct level depends on blast radius and reversibility.

### Beat 5 — Land the thesis (75 seconds)

> “Koodi halpeni. Vastuu ei. Ja mitä enemmän agentti tekee, sitä enemmän työ siirtyy ympäristöön, joka kertoo sille mikä on totta, mikä on sallittua ja mistä tiedämme että lopputulos toimii.”

## Candidate audience questions

These are discussion prompts, not all quick-fire gallup questions:

- What is the longest task you would currently let an agent run without checking it?
- Which missing feedback loop prevents more autonomy in your repository?
- What part of your organization exists only in people’s heads and is therefore invisible to an agent?
- When did generated output last transfer review cost to somebody else?
- Which production action should an agent never take without explicit approval?
- Are your tests a trustworthy specification or merely a green light?
- Who on your team is learning to become the future reviewer of agent-generated systems?
- If code production became ten times cheaper, which bottleneck would stop you next?
- Would you rather have one excellent agent or five specialized average agents—and why?
- Which maintenance work would you automate before feature implementation?

## Candidate visual: the autonomy budget

Instead of a tool-logo slide, show four sliders:

```text
BLAST RADIUS     local  ─────────────── production-wide
REVERSIBILITY    instant rollback ───── difficult to undo
EVALUABILITY     machine-checkable ──── delayed/subjective
LIFESPAN         disposable ─────────── years of maintenance

More left  → longer unattended execution may be sensible
More right → more human judgment, evidence, and approval
```

The visual supports several topics at once: AI slop, security, demo versus production, SaaS proliferation, and the continued role of senior judgment.

## Editorial recommendation

This research should not become a separate tour of “skills, MCP, browser, apps, agents, subagents, hooks, goals.” That would age quickly and lose non-experts.

Use one compact explanation:

> A model becomes an engineering agent when it can perceive the real system, act through tools, test the result, and learn inside boundaries.

Then show:

1. the full loop;
2. one personal project mapped onto that loop;
3. the frontier-versus-mainstream contrast;
4. one autonomy decision visual;
5. the human responsibilities that remain.

The deeper material belongs in notes, discussion, and an appendix.
