# Source register for the October presentation research

**Checked:** 18 October 2026. Companion to the [research bank](17-research-bank-2026-10-18.md). IDs identify sources within this research run; they do not replace the historical [source ledger](08-source-ledger.md).

## How this research was conducted

The project brief, decisions, current run of show, storyboard, September refresh, source ledger, and earlier workflow/career/local dossiers were inspected before searching. The latest programme took precedence over older conflicting timing tables.

Searches covered developer adoption, productivity, agent capability, engineering workflows, maintenance, learning, labour, open-source/security, Finnish sector conditions, local activity, and European lifecycle obligations. Discovery used broad and domain-targeted web searches; claims in the bank link to research authors, official statistics, organizations describing their own work, or current official guidance. Search snippets and third-party reporting supplied leads, not the sole support for the quantitative cards.

This was a broad editorial research pass. It was not a systematic review, replication, product evaluation, legal assessment, or market forecast. No experiments, scans, example workflows, interviews, external messages, or presentation builds were performed. Where only an abstract or landing page was reviewed, that limitation is explicit.

### Reading the register

- **Page/data:** the relevant primary page and displayed data were inspected; raw datasets were not independently reanalysed.
- **Paper sections:** relevant methods, results, and limitations were inspected in the full HTML paper; no replication was run.
- **Abstract/version:** the author abstract and version metadata were inspected; detailed methods remain a follow-up.
- **Case/guidance:** the organization or author's account was inspected; outcomes are not independently validated.
- **Lead only:** confirms a publication or follow-up opportunity, not its substantive quantitative findings.

All sources below were accessed on the research date. A current page without a stable publication date is marked as such rather than assigned an invented date.

## Adoption, trust, and developer experience

The 2026 survey was released **6 October**, but fieldwork was **23 June–5 August**. Source S00 supplies the common methods context; each data question has its own denominator. The published methodology documents inclusion and response-recovery rules, including a route by which a bot-flagged response can still be retained. Treat the published sample as the publisher defines it; this pass did not audit respondent-level cleaning.

| ID | Primary source | Date/vintage | Review depth | Bank use |
| --- | --- | --- | --- | --- |
| S00 | [Stack Overflow methodology](https://survey.stackoverflow.co/2026/methodology) | 2026 annual survey | Page/data | A1; common survey limits |
| S01 | [AI tool usage](https://survey.stackoverflow.co/2026/ai/data/ai-select) | 2026 annual survey | Page/data | A1 |
| S02 | [Trust in AI tools](https://survey.stackoverflow.co/2026/ai/data/ai-trust) | 2026 annual survey | Page/data | A2 |
| S03 | [Current and expected workflow use](https://survey.stackoverflow.co/2026/ai/data/ai-work) | 2026 annual survey | Page/data | A3 |
| S04 | [Actions after receiving an AI answer](https://survey.stackoverflow.co/2026/ai/data/ai-work-next) | 2026 annual survey | Page/data | A4 |
| S05 | [AI usefulness by work function](https://survey.stackoverflow.co/2026/ai/data/ai-impact) | 2026 annual survey | Page/data | A5 |
| S06 | [Attitudes towards AI tools](https://survey.stackoverflow.co/2026/ai/data/ai-sentiment) | 2026 annual survey | Page/data and publisher subgroup summary | A6 |
| S34 | [AI use in organizations](https://survey.stackoverflow.co/2026/ai/data/ai-use) | 2026 annual survey | Page/data | Incentives question |
| S37 | [Publisher's release announcement](https://stackoverflow.co/company/press/archive/stack-overflow-annual-developer-survey-ai-trust-conditional) | 6 Oct 2026 | Page | Release date |

Use the data tables over rounded promotional summaries. A5's positive ratings are explicit sums of the two published positive columns. They are not new measurements. Multiple-selection items should not be charted as a partition. Survey data carry ODbL 1.0 attribution requirements; check the intended reuse before copying charts or distributing a derived dataset.

## Productivity, capability, and workflows

| ID | Primary source | Publication/version | Review depth | Bank use |
| --- | --- | --- | --- | --- |
| S07 | [Cui et al., three field experiments](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/) | Jun 2025 publisher record | Author/institution summary | B1 |
| S08 | [METR, changing the experiment design](https://metr.org/blog/2026-02-24-uplift-update/) | 24 Feb 2026 | Methods/results discussion | B2 |
| S09 | [DORA, balancing AI tensions](https://dora.dev/insights/balancing-ai-tensions/) | 10 Mar 2026; 2025 observations | Research-team synthesis | B3 |
| S10 | [METR, task substitution and uplift](https://metr.org/blog/2026-05-08-task-substitution-and-uplift/) | 8 May 2026 | Conceptual analysis and assumptions | B4 |
| S11 | [Adamczewski et al., MirrorCode](https://arxiv.org/abs/2606.30182v2) | 29 Jun; v2 17 Jul 2026 | Abstract/version | C1 |
| S12 | [Epoch MirrorCode project page](https://epoch.ai/MirrorCode) | Living page checked at cutoff | Methods, example, protocol footnotes | C1 |
| S13 | [Anthropic, redesigning source control](https://www.anthropic.com/engineering/redesigning-source-control) | 13 Oct; updated 15 Oct 2026 | Case | C2 |
| S14 | [OpenAI, maintaining software](https://developers.openai.com/blog/maintaining-software-with-the-gpt-6-family) | 14 Oct 2026 | Case | C3 |
| S15 | [Stripe Minions, part 2](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents-part-2) | 19 Feb 2026 | Case | C4 |
| S16 | [Park et al., the work behind delegation](https://arxiv.org/abs/2609.24234v1) | 21 Sep 2026; under review | Abstract/version | C5 |
| S17 | [Gloaguen et al., evaluating AGENTS.md](https://arxiv.org/abs/2602.11988v3) | 12 Feb; v3 29 Sep 2026 | Abstract/version | C6 |
| S18 | [OpenAI, iterative repair loops](https://developers.openai.com/cookbook/examples/codex/build_iterative_repair_loops_with_codex) | 11 May 2026 | Worked-example description | C7 |
| S19 | [OpenAI, iterating development workflows](https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex) | 3 Aug 2026 | Guidance | C8 |

Official OpenAI documentation was checked using the OpenAI Docs skill. Product-specific instructions are references for later example design, not instructions to install or execute anything during this research run. Model names in company accounts identify the reported case; they are not recommendations or a current leaderboard.

## Maintenance, learning, labour, and security

| ID | Primary source | Publication/version | Review depth | Bank use |
| --- | --- | --- | --- | --- |
| S20 | [Pan et al., subsequent software maintenance](https://arxiv.org/html/2610.14768v1) | 10 Oct 2026, v1 preprint | Paper sections, including validity threats | D1 |
| S21 | [Shen/Tamkin author account, coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills) | 29 Jan 2026 | Experiment summary and qualitative discussion | D2 |
| S22 | [Kim et al., online knowledge participation](https://arxiv.org/abs/2609.38563v1) | 29 Sep 2026, v1 preprint | Abstract/version | D3 |
| S23 | [Stanford, Canaries revision summary](https://digitaleconomy.stanford.edu/news/canariesaug26/) | 12 Aug 2026; payroll through Jun | Author summary | D4 |
| S24 | [Wilmers et al., employment at Anthropic](https://www.anthropic.com/research/employment-at-anthropic) | 16 Oct 2026 | First-party research account | D5 |
| S25 | [Stenberg, end of curl's bug bounty](https://daniel.haxx.se/blog/2026/01/26/the-end-of-the-curl-bug-bounty/) | 26 Jan 2026 | Maintainer account | E1 |
| S26 | [OSS Scanner](https://red.anthropic.com/oss-scanner/) and [repository](https://github.com/anthropics/oss-scanner) | Launched 8 Oct; docs updated 13 Oct 2026 | Service/process documentation | E2 |
| S27 | [METR, observability and concealment](https://metr.org/blog/2026-10-06-ai-systems-could-cover-up-misbehavior/) | 6 Oct 2026 | Proof-of-concept description and caveats | E3 |
| S28 | [METR, Opus 5.5 evaluation](https://metr.org/blog/2026-09-22-claude-opus-5-5/) | 22 Sep 2026 | Evaluation summary and access limits | E4 |

Recent preprints are useful discussion material, not automatically settled results. If D3 becomes central, read the complete paper before making a causal or quantitative claim. For D1, the paired agent outcomes do not directly measure a human maintainer's experience.

## Finland and lifecycle context

| ID | Primary source | Publication/observation | Review depth | Bank use |
| --- | --- | --- | --- | --- |
| S29 | [Technology Industries: IT sector](https://teknologiateollisuus.fi/talous-ja-tilastot/teknologiateollisuuden-talousnakymat/tietotekniikka-ala/) | Aug 2026 outlook; Q2 and earlier | Page/data | F1 |
| S30 | [Statistics Finland enterprise AI release](https://stat.fi/fi/julkaisu/cm1hnps701dbm07w59uo0jw6u), [statistical series](https://stat.fi/fi/tilasto/icte), [population/methods](https://stat.fi/fi/dokumentaatio/tilastojen-dokumentaatio/icte) | 27 Nov 2025; spring 2025 observations | Page/data and population definition | F2 |
| S31 | [Gofore August business review](https://gofore.com/en/news/gofore-plcs-business-review-for-august-2026-net-sales-19-3-million-euros/) | 11 Sep 2026; August activity | Company release | F3 |
| S32 | [SEAMK: Testauspaja, River IT](https://www.seamk.fi/tapahtuma/testauspaja-river-it/) | Event advertised for 17 Sep 2026 | Organizer listing | F4 |
| S33 | [Commission CRA reporting](https://digital-strategy.ec.europa.eu/en/policies/cra-reporting), [implementation timeline](https://digital-strategy.ec.europa.eu/en/factpages/cyber-resilience-act-implementation) | Current guidance; timeline updated 27 Jul 2026 | Official guidance | F5 |
| S36 | [Siili investor calendar](https://sijoittajille.siili.com/en/investor-calendar), [investor page](https://sijoittajille.siili.com/en/) | 2026 calendar | Lead only for H1 results | Freshness warning |

The local event is a particularly good contextual lead, but it supplies no measured adoption, attendance, or outcome evidence. The Finnish enterprise survey and the IT-sector outlook describe different populations and periods; they must not be combined into an inferred causal AI effect.

## Additional lead checked, not promoted to an empirical result

**S35 — [DORA ROI guide landing page](https://cloud.google.com/resources/content/dora-roi-of-ai-assisted-software-development), [errata/version record](https://dora.dev/ai/roi/errata/).** The landing page describes a capacity/financial-outcome framework; the errata record identifies the initial version as 2026.1 and is dated 22 April 2026. The complete report was behind a lead form on the inspected page and was not retrieved. No contact information was submitted. Use this as a follow-up reading lead, not as a new measured ROI result or proof of a 2026 annual survey.

## Search coverage and unresolved gaps

| Area searched | Outcome of this pass | What remains open |
| --- | --- | --- |
| 2026 developer adoption | Annual Stack Overflow results located and checked | Raw-data cleaning, representative Finnish subgroup, comparable year-to-year series |
| Current causal productivity | Existing experiments and METR redesign rechecked | No newer clean general effect estimate established by this search |
| Current DORA material | March synthesis and ROI-guide lead checked | Full ROI report; a new annual empirical dataset was not established here |
| Frontier capability | MirrorCode paper/project and September METR assessment checked | No exhaustive October leaderboard or cost/quality comparison |
| Longitudinal maintenance | October sequential-task preprint read beyond abstract | Years-long production evidence, non-Python coverage, human maintenance costs |
| Instruction effectiveness | September paper revision located | Full version comparison and independent replication |
| Learning | Existing coding experiment rechecked | Durable retention and workplace apprenticeship under current agents |
| Careers | Stanford revision and fresh Anthropic internal research checked | Causal Finnish occupation-level estimates and ordinary-employer evidence |
| Finnish consultancy market | Sector page and one newer Gofore release checked | Full comparable update of Tieto, Siili, Vincit, Digia, and Gofore tables |
| Regional context | Recent organizer listing located | Documented local outcomes and a real speaker case |
| Security | Maintainer decision, new service, and observability case checked | Independent scanner outcomes and full re-audit of old project AI policies |
| Regulation | CRA dates and reporting context checked | Product-specific scope; current AI Act detail if chosen later |
| Product economics | Task-mix analysis and engineering examples collected | Causal SaaS-market claims, customer willingness to pay, total operating costs |

“Not established” means the search did not establish it, not that the evidence or publication cannot exist. The scope intentionally avoids filling gaps with forecasts presented as facts.

## Reuse and verification notes

The new bank uses attributed paraphrases, small factual extracts, and original Finnish hooks. No publisher figures, screenshots, or tables were copied wholesale into assets. Any future visual needs its own source, date, population, units, and reuse check. Recreate a small factual chart with attribution where appropriate rather than assuming a publisher's artwork is freely reusable.

Before slide production, verify only the material actually selected in depth: paper methods for central claims, current dates for policy/product references, and the exact data/version behind each chart. Recheck publication calendars against the actual event date. Preserve the distinction between a source being new to us and evidence being newly produced.

Markdown links and source-ID consistency are checked separately from substantive source review. Link checks do not certify a source's correctness, and reading a published result does not replicate it.
