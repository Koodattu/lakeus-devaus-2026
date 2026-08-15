# Red thread

## The story in one paragraph

Software development has repeatedly automated the difficult mechanics of its previous era without eliminating complexity, change, coordination, or maintenance. Generative AI is both part of that history and a discontinuity within it. In 2022 it produced surprising snippets and fluent answers. By 2026, agents can inspect repositories, edit several files, run tools, and continue for much longer tasks—but not with uniform reliability. This makes the first plausible version dramatically cheaper and faster while the costs of system integration, customer understanding, security, maintenance, and accountability remain. The bottleneck is moving from “can we produce code?” toward “do we understand what should exist, can we verify it, and will anyone own it?”

## The four-act arc

### Act I — Every generation gets a silver bullet

**Question:** What actually changed between 2022 and 2026—and what remained stubbornly familiar?

Begin with a compressed historical test:

- the 1968 software crisis: scale, reliability, cost, coordination, and maintenance;
- 4GLs, CASE, visual programming, outsourcing, cloud, and low-code as earlier attempts to move the abstraction boundary;
- Brooks: accidental difficulty can shrink while essential conceptual complexity remains;
- Naur: the durable product of programming may be the theory held by people, not only the program text.

Then show why 2026 may still be different in degree and kind:

The progression is not merely better autocomplete:

1. chat produces snippets and explanations;
2. IDE assistants complete local code;
3. agents navigate repositories, edit files, run commands, and revise;
4. workflows start to delegate bounded outcomes rather than individual keystrokes.

The state-of-the-art section belongs here only to establish the speed and unevenness of the shift. Show a task-capability curve, open-weight competition, and one stubbornly jagged failure. Do not spend ten minutes naming models.

**Act claim:** The unit of delegation is moving from a line toward a task, but delegation is not the same as shared understanding.

**Transition:** If producing code is no longer the main constraint, what becomes the constraint?

### Act II — The bottleneck moved

**Question:** How is software actually made now?

Contrast two loops:

**Earlier simplified loop**  
Understand → design → type → test → review → ship

**AI-assisted loop**  
Frame → expose context → delegate → inspect → test → challenge → integrate → observe → revise

The second loop is not automatically shorter. It is more parallel and produces more candidate output. This increases the value of specifications, architecture, automated checks, small changes, good feedback, and knowing when not to delegate.

By 2026, the mature version of this loop is a control system rather than a collection of buzzwords:

```text
goal → local truth → skills/tools → agent(s) → evidence → human judgment → learning
```

Skills encode repeatable methods, MCP and apps expose live context and actions, browser use supplies empirical product feedback, subagents isolate context or parallel work, and deterministic checks bound the nondeterministic core. The frontier case is technically close to end-to-end autonomous implementation; the normal case is still supervised. The difference is often the quality of the surrounding environment rather than model access alone.

This is where a personal workflow belongs. Show artifacts and decisions, not a magic prompt:

- how an ambiguous goal becomes constraints and acceptance criteria;
- how repository instructions, examples, and tests steer the work;
- how the agent proposes or implements a bounded change;
- what the human rejects, changes, or verifies;
- who owns the result after the session ends.

**Act claim:** AI is an amplifier. It makes strong development systems faster and weak ones noisier. Autonomy is earned by feedback, legibility, and reversibility.

**Transition:** If the tools feel faster, why does the research disagree about how much faster we are?

### Act III — Abundance has side effects

**Question:** What happens when plausible output becomes cheap?

Present the productivity evidence as a deliberate contradiction:

- one large field-experiment synthesis found substantially more completed tasks with an AI assistant;
- a small randomized study of experienced open-source developers found they were slower in familiar repositories;
- surveys report high perceived gains, while developers also report distrust and time spent fixing nearly-correct answers;
- DORA frames AI as an amplifier associated with higher throughput and also greater delivery instability.

Then widen the lens:

- more prototypes, pull requests, packages, and apps;
- security flaws, hallucinated dependencies, review burden, and “AI slop”;
- look-alike SaaS and pressure on undifferentiated feature layers;
- an attention problem: making software is not the same as earning use;
- a maintenance problem: the bill arrives after the demo.

**Act claim:** Cheap output creates expensive evaluation.

**Transition:** If code and features are less defensible, where do companies and people create durable value?

### Act IV — Responsibility becomes the product

**Question:** What remains scarce, and what is the role of the human?

Ask the room to choose the scarce resource: good problems, product judgment, trust, attention and distribution, or ownership. The discomfort is the point: all five matter, but a single-choice poll reveals what this particular room values.

Connect this to:

- jobs: short-term pain for some early-career roles can coexist with long-term demand for software work;
- expectations: belief in imminent automation can change learning, hiring, trust, and workplace culture before measured displacement catches up;
- consultancies: pressure comes from weak demand and delayed budgets as well as AI-shaped expectations;
- SaaS: point solutions and generic interfaces are exposed, while systems of record, data, workflow, integration, compliance, and accountability remain meaningful moats;
- geopolitics: the United States, China, and Europe have different mixtures of frontier labs, capital, industrial scale, open-weight ecosystems, regulation, and sovereignty goals;
- the region: in a smaller market, domain knowledge, proximity, trust, and responsibility can be advantages rather than consolation prizes.

**Act claim:** The valuable human is not the person who types every token. It is the person who can decide what should exist and remain accountable when it does.

## Opening

1. Put the live-voting application on screen while introducing the title and central tension.
2. Say: “Vuonna 2022 pyysimme tekoälyltä vastauksia. Vuonna 2026 annamme sille tehtäviä.”
3. Pose the two apparently conflicting claims: everything changed quickly, and the hard parts of software remain stubbornly familiar.
4. Run the seven-question quick-fire gallup without discussion between questions.
5. Summarize the room in three observations: experience, actual use, and the distance between use and trust.
6. Transition directly into the project demo.

The opening makes the room part of the evidence without spending ten minutes interpreting individual feelings. The final short mood question can still reveal whether the conversation changed the room’s emphasis.

## Closing

Return to the same short **“AI-fiilis?”** question with the same options. Do not demand that sentiment improve. A shift from excited to conflicted can indicate a better conversation.

Then close with three lines:

> Koodia syntyy enemmän.  
> Varmuus ei synny samalla nopeudella.  
> Joku omistaa seuraukset joka tapauksessa.

Final spoken question: **“Minkä seurauksen sinä olet valmis omistamaan?”**

The last activity is the optional comment wall: **“Mikä väite tai kysymys jäi pyörimään mieleen?”** Use the comments to open discussion rather than summarizing the talk again.

## The project reveal as a hinge

A strong midpoint hinge is to let participants use or see a polished project, ask them what they infer about its origin, and later reveal the AI-assisted process. The reveal should not be “the machine made this while I watched.” It should expose the invisible human work: the brief, constraints, tool choice, tests, review, iteration, deployment decisions, and ownership.

This makes the thesis experiential:

- output does not reveal authorship reliably;
- origin is less useful than process and evidence;
- “AI-generated” is too coarse a category;
- good steering is not a magic prompt—it is applied software engineering.

Do not misrepresent the development history. If the live-voting project is not actually an AI-assisted project, use a different example or frame it only as the presentation’s interaction layer.

## Why this arc is stronger than a topic catalogue

The user’s original idea bank is rich enough for several talks. A catalogue would create repeated context switches: models, jobs, Finland, apps, SaaS, slop, workflow, geopolitics. The four-act arc makes each topic answer the same causal chain:

```text
capability rises
      ↓
plausible output gets cheaper
      ↓
evaluation, integration, trust, and attention become bottlenecks
      ↓
developer and company value shifts toward judgment and ownership
```

Every candidate slide should earn its place by advancing one arrow in that chain.

## Provocation with a responsible landing

**Provocation:** “Ohjelmistokehitys muuttui vuonna 2026 enemmän kuin vuosina 2000–2025 yhteensä.”

**Landing:** We cannot measure that claim cleanly, and previous shifts—web, open source, cloud, mobile, DevOps—were foundational. The narrower defensible claim is that 2022–2026 may be the fastest change in who can produce plausible software and at what marginal cost. Use the broad claim to start a debate, not to end one.
