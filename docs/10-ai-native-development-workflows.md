# AI-native software development in August 2026

This is a research dossier, not a tool-shopping guide or a claim that every team should work this way. It maps what a genuinely AI-powered software-development system can look like now, from occasional assistance to end-to-end delegated delivery.

Research snapshot: **11 August 2026**. Product names, model recommendations, and interface details will age quickly. The workflow principles should age more slowly.

## The shortest answer

A mature AI workflow is not “a clever prompt connected to a powerful model.” It is a control system:

```text
human purpose and responsibility
              ↓
goal, constraints, acceptance criteria, risk
              ↓
repository knowledge and durable instructions
              ↓
skills and tools: code, CLI, MCP/apps, browser, computer use
              ↓
one agent or an orchestrated set of bounded agents
              ↓
tests, policies, sandboxing, approvals, review, runtime evidence
              ↓
production observation and human judgment
              ↓
better tests, instructions, skills, architecture, and goals
```

The model is the generative core. The surrounding system determines how much useful, trustworthy work it can do.

This suggests a stronger claim than “models got better”:

> **Autonomy is earned by feedback, legibility, and reversibility.**

## What “AI does everything” actually means

There are now documented workflows in which agents:

- clarify and plan a task;
- inspect a repository and its history;
- reproduce a defect;
- write application code, tests, migrations, and documentation;
- operate a local app through a browser;
- inspect logs, traces, screenshots, network calls, and console errors;
- create a branch and pull request;
- review one another’s work;
- respond to review and CI failures;
- deploy or prepare a release under policy;
- monitor outcomes and propose follow-up work.

But “the agent wrote all the code” does not mean “the human did no engineering.” The work moves into:

- choosing the problem;
- making the organization and repository understandable;
- defining what success and unacceptable failure mean;
- building the tests, tools, environments, and guardrails;
- deciding when evidence is sufficient;
- resolving product and architectural judgment;
- accepting responsibility for release and consequences.

OpenAI’s February 2026 [harness-engineering report](https://openai.com/index/harness-engineering/) is the clearest extreme case: an internal product reached roughly one million lines of agent-produced code without engineers manually writing application code. The report is valuable because it describes the enormous complementary investment—structured repository knowledge, per-worktree environments, browser access, telemetry, automated review, documentation maintenance, and continual cleanup. It is a first-party exceptional case, not a representative industry baseline.

HubSpot’s [cloud coding agent report](https://product.hubspot.com/blog/cloud-coding-agents-at-hubspot) gives a more enterprise-shaped example: 7,000 fully AI-generated pull requests merged in six months, using isolated jobs, human-editable plans, CI, hooks, logs, and automatic review. Its most instructive failures were mundane: agents stopped with a broken build, forgot to create a pull request, or communicated their state poorly. HubSpot moved deterministic steps such as branch and draft-PR creation outside the language model, and used hooks to prevent agents from stopping before required checks passed.

The lesson is not that all teams should pursue zero human-written code. It is:

> **Put a deterministic spine around a nondeterministic worker.**

## The nine layers of an AI-native development system

The layers below are separable. A team can adopt one without adopting all nine.

| Layer | Question it answers | Typical artifacts | Failure if missing |
| --- | --- | --- | --- |
| 1. Purpose and ownership | Why should this exist, and who is responsible? | product decision, owner, risk class | impressive output without value or accountability |
| 2. Goal and specification | What outcome counts as done? | issue, brief, acceptance criteria, examples, non-goals | plausible implementation of the wrong thing |
| 3. Local truth | How does this system actually work here? | repository docs, architecture map, conventions, decision records | generic advice and repeated rediscovery |
| 4. Repeatable methods | How should recurring work be performed? | skills, runbooks, scripts, templates | inconsistent improvisation and prompt folklore |
| 5. Context and action | What can the agent inspect and change? | shell, APIs, MCP, apps, browser, computer use | agent reasons about stale abstractions instead of reality |
| 6. Orchestration | Who does what, in which context, and in what order? | plans, one agent, subagents, worktrees, queues | context overload, collisions, duplicated work |
| 7. Guardrails and evidence | How do we reject bad work? | types, lint, tests, security scans, hooks, policies, approvals | confident output becomes unbounded risk |
| 8. Observability and evaluation | What happened, what did it cost, and did it work? | traces, logs, screenshots, eval sets, delivery metrics | anecdotes replace learning |
| 9. Improvement loop | What should the system learn from this failure? | new tests, edited instructions, refined skills, architecture changes | the same correction is paid for forever |

### 1. Human purpose and accountable ownership

The strongest current agents can execute a chosen direction; they do not make responsibility disappear. A human or organization still decides:

- whether the problem is worth solving;
- which users and harms matter;
- what may be traded away;
- whether a release is supportable;
- who answers when it fails.

This is not a ceremonial “human in the loop.” The human owns the boundary between technical evidence and business or ethical judgment.

### 2. Goals, plans, and specifications

A useful task request normally contains:

```text
Goal       What outcome should change?
Context    Where is the relevant system and why does this matter?
Boundaries What must not change? What risks require approval?
Evidence   How can the result be demonstrated?
Done       What exact observable conditions finish the task?
```

For a small task, this can be five sentences. For a migration, it may be a versioned specification, architecture decision, rollout plan, and test matrix.

The critical distinction is between specifying the **result** and micromanaging every token-generating step. Let the agent search and propose, while specifying process constraints wherever blast radius, compliance, or irreversibility makes the process itself material.

Current agent environments also distinguish three related artifacts:

- **Task prompt:** the immediate outcome and its evidence.
- **Plan:** a temporary decomposition of ambiguous or multi-stage work.
- **Persistent goal:** a longer-running outcome whose state survives multiple turns or scheduled continuations.

A goal does not expand authority. “Finish the migration” does not imply permission to deploy, delete production data, or bypass review.

### 3. System prompts, instructions, memory, and repository knowledge

These are often collapsed into “prompt engineering,” but they solve different problems.

| Mechanism | Best use | Bad use |
| --- | --- | --- |
| system/developer policy | stable non-negotiable behavior and safety boundaries | project trivia or a giant universal style manual |
| repository instructions such as `AGENTS.md` | local commands, structure, conventions, constraints, definition of done | copying the README or documenting every file |
| nested instructions | rules that genuinely differ inside a subtree | invisible contradictions and needless hierarchy |
| memory | durable preferences or facts that should recur | stale decisions that should live in version control |
| task prompt | the current outcome, context, boundaries, and proof | repeating the entire organization handbook |
| plan/specification | decisions and decomposition for complex work | permanent bureaucracy for a two-line fix |

The emerging pattern is **a map, not a thousand-page manual**:

- keep the always-loaded instruction set short and coherent;
- point to authoritative, version-matched documents;
- disclose detail progressively when the task needs it;
- put changing project truth in the repository;
- add a rule after a repeated failure, not after every imagined failure;
- turn deterministic rules into code, lint, schemas, or tests instead of prose.

Instruction files are not magic. A February 2026 [evaluation of `AGENTS.md`](https://arxiv.org/abs/2602.11988) found no general success improvement from generated context files and approximately 20% higher cost; human-written files performed somewhat better. A larger June study, [*Toward Instructions-as-Code*](https://arxiv.org/abs/2606.13449), found projects improving and declining after adopting instruction files. The presence of instructions matters less than their relevance, quality, and maintenance.

A focused Vercel [Next.js evaluation](https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals) offers a useful counterexample: a compact index of version-matched framework documentation substantially outperformed the baseline in that specific test. The transferable lesson is not “one file format wins.” It is that routing the agent to the correct local truth can matter more than adding generic advice.

### 4. Skills: repeatable methods, not extra adjectives

A skill packages a repeatable workflow so the agent can load it when relevant. It may contain:

- trigger description and scope;
- ordered procedure and decision points;
- required inputs and output contract;
- references loaded only when needed;
- scripts for deterministic operations;
- templates and assets;
- stop conditions and escalation rules;
- verification criteria.

Good candidates are recurring, bounded tasks: creating a database migration, triaging an incident, verifying a UI, preparing a release, reviewing a security-sensitive change, or adapting a design system.

Weak candidates are broad knowledge dumps, vague personas, and one-off tasks. Skills also have supply-chain and versioning risk. [SWE-Skills-Bench](https://arxiv.org/abs/2603.15401) found little average benefit across 49 public software-engineering skills: specialized skills sometimes helped greatly, while version-mismatched skills sometimes hurt and token use could grow sharply. A very recent August 2026 [ecosystem preprint](https://arxiv.org/abs/2608.08453) reports widespread quality defects in public skills, especially weak routing metadata and bloated or poorly organized instructions. Both are early studies, but they argue for testing skills like code rather than treating installation as improvement.

### 5. Tools, MCP, apps, browser use, and computer use

An agent cannot reliably act on information it cannot inspect. Different interfaces serve different jobs.

#### Shell, CLI, and direct APIs

Prefer a stable command or API when the action is local, structured, scriptable, and easy to validate. Commands can be compact, composable, inspectable, and cheap in context.

#### MCP and connected apps

Model Context Protocol can expose live organizational systems—tickets, design files, databases, observability, documentation, source control, and communication—with structured resources and actions.

Use it when there is real value in:

- live changing context;
- authenticated access;
- discoverable structured capabilities;
- consistent integration across clients;
- organizational governance and audit.

Do not use MCP merely because it is fashionable. Each server and tool increases attack surface, tool-selection ambiguity, context use, distributed-state complexity, and failure modes. MCP’s own [client guidance](https://modelcontextprotocol.io/docs/develop/clients/client-best-practices) recommends dynamic discovery rather than loading large tool catalogues up front. Thoughtworks’ April 2026 Technology Radar similarly cautions against [MCP by default](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2026/04/tr_technology_radar_vol_34_en.pdf): a good CLI or small script is often simpler for local development.

#### Browser and developer tools

Browser access closes the gap between “the code compiles” and “the product works.” A capable agent can:

- inspect the actual DOM and accessibility tree;
- click, type, navigate, and exercise a user journey;
- compare screenshots and designs;
- inspect console, network, storage, and runtime state;
- measure performance and identify layout problems;
- record visual evidence for a reviewer.

Chrome’s current [DevTools for agents](https://developer.chrome.com/docs/devtools/agents/get-started) and Playwright’s [planner–generator–healer agents](https://playwright.dev/docs/test-agents) show where this is going: the live application becomes a first-class feedback sensor, not a screenshot afterthought.

Browser content is also untrusted input. An agent that can read private data, consume hostile page content, and take external actions has the ingredients for prompt-injection damage. Restrict profiles and credentials, isolate environments, minimize permissions, and require approval for consequential actions.

#### Computer use

Native UI automation is useful when no reliable structured interface exists—for a legacy desktop application, design tool, device workflow, or manual administrative system. It is slower and more fragile than a purpose-built API, plugin, or CLI. Treat it as an empirical interface of last resort, with screenshots, assertions, and bounded permissions.

#### Design and other source-of-truth apps

Connections are not only about automation. They can reduce lossy translation. Figma’s 2026 [MCP workflow](https://www.figma.com/blog/the-tldr-on-mcp/) is an example: agents can read actual tokens and components, create implementation from design context, and return code-derived states to the design canvas. The interesting change is round-trip continuity, not “AI can draw a button.”

### 6. One agent, subagents, orchestration, and worktrees

#### Models and routing

A mature workflow need not send every task to one flagship model. A model portfolio can be useful:

- a stronger reasoning model for ambiguous planning, cross-cutting implementation, failure recovery, and high-risk review;
- a faster or cheaper model for broad search, classification, mechanical updates, and repeated narrow checks;
- an open-weight or local model where privacy, offline use, customization, predictable availability, or marginal cost justifies the operational work;
- a different model family for independent review when correlated errors matter.

Routing adds its own complexity. A cheap worker is not cheap if a senior model must redo its work, and a local model is not private if the connected tools still send data elsewhere. Evaluate the complete workflow by accepted outcomes, latency, data path, and recovery cost. Treat model-version changes like dependency changes: rerun representative evaluations rather than assuming improvement.

The harness should remain as model-agnostic as practical. Repository truth, tests, permissions, and observable outcomes should survive leaderboard churn.

#### Subagents and isolation

Subagents are most useful for **context isolation and independent work**, not simulated corporate org charts.

Good delegations include:

- repository exploration that would flood the main context;
- independent security, accessibility, or architecture review;
- several unrelated investigations run concurrently;
- focused test generation or failure triage;
- comparing independent solutions or different model families;
- mechanical work in isolated files or worktrees.

Poor delegations include:

- a tiny reactive edit with high communication overhead;
- multiple agents editing the same files concurrently;
- vague “be the senior architect” role theater;
- work where the parent requires every raw detail;
- using more agents to compensate for an unclear task.

Every delegation spends tokens and loses information during handback. Useful subagent outputs cite paths, line numbers, commands, evidence, risks, and unresolved questions. The parent verifies the report rather than treating it as authority.

For parallel writing, isolation matters. Branches or worktrees give each worker its own filesystem and create an explicit integration boundary. [CAID](https://arxiv.org/abs/2603.21489), a March 2026 multi-agent method, combines a central dependency-aware plan with asynchronous agents, isolated workspaces, structured merges, and executable verification. Its benchmark gains are promising, but the mechanism—not the benchmark headline—is the durable lesson: parallel agents need dependency management and integration design.

Thoughtworks’ current position is a useful counterweight: [small, deliberate teams of coding agents](https://www.thoughtworks.com/content/dam/thoughtworks/documents/radar/2026/04/tr_technology_radar_vol_34_en.pdf) may help, while large swarms remain costly and immature. Benchmark swarms often start with detailed specifications and comprehensive tests that ordinary product work does not have.

#### Long-running work and context resets

Long context is not the same as durable state. A conversation can accumulate stale hypotheses, irrelevant logs, and contradictory instructions. For extended work:

- keep decisions, plans, progress, and evidence in versioned artifacts;
- let a fresh agent resume from those artifacts when context becomes noisy;
- split work at coherent integration boundaries;
- ensure workflows can pause, retry, and resume without hidden state;
- preserve tool and decision traces for diagnosis.

Fresh-context loops can help with well-specified, testable backlogs, but they do not repair an ambiguous goal. Persistence needs an external state model, not merely an agent that never stops.

### 7. Tests, hooks, review, sandboxes, and approvals

Agents need more feedback sensors than conventional autocomplete because they act over longer horizons.

Useful sensors include:

- compiler and type checker;
- formatter and linter;
- unit, integration, contract, property, mutation, and end-to-end tests;
- schema and architecture fitness checks;
- security, secret, dependency, and license scanners;
- browser assertions, screenshots, and performance budgets;
- production-like logs, traces, and metrics;
- small reviewable diffs and protected branches.

The agent should be allowed to iterate against low-risk sensors without waiting for a human. Humans should approve boundary crossings such as production writes, destructive operations, credentials, payments, public messages, legal decisions, or irreversible migrations.

A useful security lens is the combination of:

1. access to private information;
2. exposure to untrusted instructions or content;
3. permission to take consequential external action.

The most capable connected agents often have all three. Reduce the combination through least privilege, isolated identities and environments, allowlisted tools, approval boundaries, read-only defaults, audit logs, and small pipelines whose individual agents cannot both read everything and act everywhere. Skills, MCP servers, plugins, and browser pages are part of the software supply chain and require review and version control.

Hooks are valuable when the rule is deterministic:

- block access to secrets;
- require a clean test result before completion;
- reject forbidden file changes;
- enforce generated-file provenance;
- log tool calls and subagent activity;
- require a branch, commit, or pull request at a lifecycle point.

AI reviewers are sensors, not verdicts. Risk-tier the work. A typo and a payment-state transition should not receive the same review ceremony. Independent reviewers with different prompts, tools, or model families can reduce correlated blind spots, but humans still own high-blast-radius integration.

Tests also need protection from the optimizer. If an agent can weaken an assertion, remove coverage, or change a fixture merely to make the build green, the feedback loop is corrupt. Protect key tests and policies, ask for test-diff explanations, and use mutation or adversarial checks when risk justifies it.

### 8. Observability, traces, and evaluation

If a team cannot reconstruct what an agent saw, attempted, changed, and concluded, it cannot improve the system or investigate failure.

Capture enough to answer:

- Which goal, model, instructions, skill version, and tools were used?
- What files, services, and private data were accessed?
- Where did the plan change, and why?
- Which checks ran and what evidence was produced?
- How much human correction and rework followed?
- Did the change improve product or delivery outcomes?

Do not measure success by generated lines, commits, pull requests, or agent hours alone. Those are output-volume measures in a world where output is cheap.

Better measures include:

- first-pass acceptance rate;
- review time and number of correction cycles;
- escaped-defect and rollback rate;
- change failure rate and recovery time;
- lead time and deployment frequency;
- security and policy violations;
- percentage of plans requiring material human redesign;
- cost per accepted outcome;
- developer cognitive load and interrupted work;
- whether the team can still explain and safely modify the system.

Thoughtworks recommends keeping DORA delivery measures and warns against coding-throughput metrics. DORA’s 2026 [AI tensions synthesis](https://dora.dev/insights/balancing-ai-tensions/) similarly describes a verification tax and a workflow gap: local generation gains can disappear during review, integration, and production operation.

### 9. The improvement flywheel

A failed run should produce more than a corrected patch.

```text
failure or friction
      ↓
classify the missing capability
      ↓
add or improve the smallest durable artifact
      ↓
test it against real tasks
      ↓
delete stale or conflicting guidance
```

Possible durable improvements:

- a missing regression test;
- a clearer acceptance criterion;
- an architecture boundary enforced by a check;
- a shorter repository map;
- a version-correct documentation link;
- a new reusable skill;
- a safer tool permission;
- better local data or telemetry;
- a faster development environment;
- a task that should no longer be delegated.

This is **harness engineering**: improving the socio-technical environment in which agents work. The same investment usually helps human developers too.

## Autonomy is not one percentage

“How autonomous is your AI?” is underspecified. Autonomy has at least five dimensions:

| Dimension | Low autonomy | High autonomy |
| --- | --- | --- |
| problem selection | human chooses every task | agent proposes or schedules work from signals |
| planning | human specifies implementation | agent explores and chooses a plan |
| execution | snippets and suggestions | multi-file implementation and tool use |
| verification | human checks manually | agent gathers evidence and iterates against gates |
| external action | local draft only | merge, deploy, message, or modify production |
| accountability | always human/organization | cannot meaningfully be delegated to a model |

The last row is different. Technical agency can move; moral, legal, and organizational responsibility still attaches to people and institutions.

## A practical autonomy ladder

| Level | Typical request | Human role | Appropriate use |
| --- | --- | --- | --- |
| 0. Lookup and completion | “Explain this” / next-line completion | writes, checks, integrates everything | unfamiliar code, learning, sensitive work |
| 1. Supervised pair | “Fix this with me” | steers frequently and reviews the diff | ambiguous brownfield work, skill-building |
| 2. Delegated task | issue or brief → tested pull request | sets acceptance criteria, reviews, merges | bounded bugs, features, refactors |
| 3. Parallel team | orchestrator delegates independent work | designs decomposition and integrates | migrations, broad audits, multi-surface features |
| 4. Continuous repository operations | signals or schedules → proposed changes | governs policy and exceptions | dependency upkeep, docs drift, CI repair, triage |
| 5. Harness-first delivery | goal → implemented, reviewed, evidenced outcome | chooses product direction and resolves judgment | highly legible systems with strong gates and reversible changes |

Level 5 is not automatically better. The correct level depends on blast radius, reversibility, lifespan, regulatory context, and how well the organization can observe and verify the work.

## What broad practice looks like, not just the frontier case

The current mainstream remains supervised. Stack Overflow’s April 2026 [developer pulse](https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work/) found agent use rising rapidly, but 63% of respondents rarely or never allowed full autopilot and 68% preferred a predictable single-agent setup over a complex multi-agent one. The survey is not a census, but it is a useful antidote to frontier-demo selection bias.

Anthropic’s June 2026 [study of roughly 400,000 Claude Code sessions](https://www.anthropic.com/research/claude-code-expertise) found a complementary pattern: users made about 70% of planning decisions while the agent performed about 80% of execution decisions. Sessions were often short, and user expertise predicted verified success. This is vendor-specific usage data with classifier limitations, but “human plans, agent executes” currently describes practice better than “agent replaces the team.”

Longitudinal survey research describes the emerging human work as **supervisory engineering**: directing, evaluating, and correcting generated work. A May 2026 [two-wave study](https://arxiv.org/abs/2605.23135) found sustained self-reported productivity gains alongside growing reports of worse developer experience in at least one dimension. Faster output and easier work are not the same outcome.

## The human role after code generation becomes cheap

The role becomes more, not less, concentrated in consequential decisions:

- finding worthy problems and users;
- translating ambiguity into falsifiable acceptance criteria;
- understanding domain exceptions that are absent from the repository;
- designing boundaries, interfaces, data lifecycles, and failure modes;
- choosing evidence proportional to risk;
- detecting plausible but conceptually wrong solutions;
- keeping a team’s theory of the system alive;
- teaching future engineers how to form that theory;
- negotiating priorities and consequences with other humans;
- owning maintenance after the demo.

This makes Naur’s old question newly urgent:

> If the agent builds the code, who builds and preserves the theory of the system?

The best answer is not necessarily “the human must type every line.” It may be: make plans, decisions, traces, tests, and explanations first-class artifacts; require the humans who approve the system to be able to explain and change it.

## Claims worth carrying into the talk

- **A true AI workflow is a feedback system, not a chat window.**
- **Zero human-written code is not zero human engineering.**
- **The model sets the ceiling; the harness determines how much of it reaches production.**
- **Autonomy is earned by feedback, legibility, and reversibility.**
- **Put a deterministic spine around a nondeterministic worker.**
- **Context is a routed supply chain, not a giant prompt.**
- **Skills are executable organizational memory—when narrow, current, and tested.**
- **MCP is an integration choice, not a maturity badge.**
- **The browser is where generated code meets empirical reality.**
- **Subagents buy context isolation and parallelism, not free intelligence.**
- **If generation scales but review does not, productivity becomes review debt.**
- **Plan quality determines safe unattended time.**
- **Measure accepted outcomes and system health, not generated volume.**
- **The mature question is not “Did AI write this?” but “How was it constrained, evidenced, understood, and owned?”**

## What not to turn this into

This material could easily consume two hours. For the main Lakeus-Devaus talk, avoid:

- a glossary slide for every acronym;
- step-by-step agent setup;
- a product-logo wall;
- a fixed model-routing table that expires before the event;
- implying that frontier harness cases describe the median team;
- presenting maximum autonomy as the universal destination;
- treating instructions, skills, MCP, or subagents as independently magical.

The useful presentation unit is a contrast:

```text
One prompt → impressive prototype

versus

One goal → reliable outcome
          because the environment can explain, constrain,
          test, observe, reverse, and learn from the work
```
