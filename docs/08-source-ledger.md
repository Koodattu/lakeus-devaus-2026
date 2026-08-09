# Source ledger

Research snapshot: **9 August 2026**. This ledger favors primary research, official statistics, regulator publications, and company releases. Commentary sources are marked. Links should be rechecked when the slide deck is produced.

## Developer adoption, productivity, and workflow

### Stack Overflow Developer Survey 2025 — AI

- **Source:** [Stack Overflow, 2025 Developer Survey: AI](https://survey.stackoverflow.co/2025/ai)
- **Type:** large, self-selected developer survey.
- **Supports:** widespread use/planned use; daily use; declining positive sentiment; distrust; “almost right” frustration; debugging cost; perceived productivity; limited agent adoption and agent-user concerns.
- **Caveat:** global respondent sample is not a census; productivity is self-reported; question response counts differ.
- **Possible use:** opening contrast—adoption rose faster than trust.

### Three field experiments with software developers

- **Source:** [Microsoft Research, *The Effects of Generative AI on High-Skilled Work: Evidence from Three Field Experiments with Software Developers*](https://www.microsoft.com/en-us/research/publication/the-effects-of-generative-ai-on-high-skilled-work-evidence-from-three-field-experiments-with-software-developers/)
- **Type:** combined field experiments; 4,867 developers.
- **Supports:** AI-assistant access associated with 26.08% more completed tasks across participating companies; heterogeneous effects.
- **Caveat:** assistant, employers, tasks, and outcome measure are specific; not a whole-lifecycle productivity constant.
- **Possible use:** evidence on the “faster” side of the central contradiction.

### METR randomized study of experienced open-source developers

- **Source:** [METR, *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)
- **Type:** randomized controlled trial; 16 developers and 246 tasks.
- **Supports:** participants took 19% longer with AI in familiar mature repositories; their forecasts and perceptions expected speed gains.
- **Caveat:** small and narrow sample, repositories, and tool generation; METR explicitly warns against broad generalization.
- **Possible use:** evidence on the “slower” side and a lesson about perceived speed.

### METR technical-worker AI-usage survey

- **Source:** [METR, *AI Usage Survey: How Technical Workers Use AI*](https://metr.org/blog/2026-05-11-ai-usage-survey/)
- **Type:** 2026 self-report survey; 349 technical workers.
- **Supports:** large reported value and speed gains; intensive use patterns.
- **Caveat:** self-report; METR states skepticism and notes self-reports can exceed experimental effects.
- **Possible use:** optional appendix or one sentence contrasting perception and measurement.

### DORA 2025 AI-assisted software development

- **Sources:** [DORA, 2025 report landing page](https://dora.dev/research/2025/dora-report/); [DORA, “Balancing the tensions of AI-assisted software development”](https://dora.dev/insights/balancing-ai-tensions/); [DORA report PDF](https://dora.dev/ai/gen-ai-report/dora-impact-of-generative-ai-in-software-development.pdf)
- **Type:** industry research and analysis.
- **Supports:** widespread adoption; AI as an amplifier; higher throughput alongside delivery instability; importance of tests, CI, small batches, user focus, responsible use, and outcome measurement.
- **Caveat:** observational relationships in complex systems; report versions contain analyses with different measures and should not be mixed without context.
- **Possible use:** synthesis after conflicting productivity studies.

### Anthropic Economic Index: software development

- **Source:** [Anthropic, *Anthropic Economic Index: AI’s impact on software development*](https://www.anthropic.com/research/impact-software-development)
- **Type:** vendor analysis of its own product conversations.
- **Supports:** under Anthropic’s taxonomy, Claude Code conversations were predominantly automation rather than augmentation in the measured period.
- **Caveat:** one vendor and user population; taxonomy and observed conversations are not all software work.
- **Possible use:** evidence that repository agents are being used for actions, not only explanations.

### GitHub Octoverse 2025

- **Source:** [GitHub, *Octoverse: A new developer joins GitHub every second as AI leads TypeScript to #1*](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/)
- **Type:** platform telemetry and vendor report.
- **Supports:** more than 180M developers; 630M projects; 4.3M AI projects; 43.2M pull requests per month; contribution growth.
- **Caveat:** GitHub-specific; project and activity counts do not equal value, quality, or AI causality.
- **Possible use:** appendix or visual texture for increasing software activity.

## Model capability and openness

### Stanford 2026 AI Index

- **Sources:** [report overview](https://hai.stanford.edu/ai-index/2026-ai-index-report); [technical performance](https://hai.stanford.edu/ai-index/2026-ai-index-report/technical-performance); [research and development](https://hai.stanford.edu/ai-index/2026-ai-index-report/research-and-development); [economy](https://hai.stanford.edu/ai-index/2026-ai-index-report/economy)
- **Type:** annual synthesis of multiple datasets.
- **Supports:** rapid benchmark progress and saturation; jagged capability; model convergence; open/closed gap; U.S.–China comparison; model counts; private investment; compute growth; open-project growth; adoption; young-worker employment pattern.
- **Caveat:** each chart has its own dataset and method; leaderboard and “notable model” definitions are contestable; private investment omits some state support.
- **Possible use:** two main charts at most; detailed comparisons in appendix.

### METR task horizons

- **Sources:** [METR task-horizon overview](https://metr.org/time-horizons/); [METR, Time Horizon 1.1 update](https://metr.org/blog/2026-1-29-time-horizon-1-1/); [METR frontier risk report update](https://metr.org/blog/2026-05-19-frontier-risk-report/?dot=INC-029)
- **Type:** capability evaluation and methodology work.
- **Supports:** a reliability-adjusted measure of software-task duration; rapid historical doubling; frontier saturation on shorter tasks and experiments with longer reimplementation tasks.
- **Caveat:** benchmark task distribution and thresholds are not unrestricted job autonomy; methods change; inference compute affects results.
- **Possible use:** one chart explaining why the unit of delegation is changing.

### Open Source AI Definition and terminology

- **Sources:** [Open Source Initiative, Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition); [Stanford HAI, “What is an open-weight model?”](https://hai.stanford.edu/ai-definitions/what-is-an-open-weight-model)
- **Type:** standards definition and academic explainer.
- **Supports:** open weights are not automatically open-source AI; use, study, modification, and sharing require more complete freedoms and access.
- **Caveat:** terminology remains politically and commercially contested.
- **Possible use:** a 30-second language correction in the global/open-model section.

## Software supply, security, and maintenance

### Apple App Store Transparency Reports

- **Sources:** [Apple 2022 App Store Transparency Report (PDF)](https://www.apple.com/legal/more-resources/docs/2022-App-Store-Transparency-Report.pdf); [Apple 2025 App Store Transparency Report](https://www.apple.com/legal/app-store/transparency/2025/)
- **Type:** official platform transparency statistics.
- **Supports:** apps available, submissions reviewed, registered developers, weekly visitors, weekly downloads, and rejection counts.
- **Caveat:** submissions include updates/resubmissions; reports do not identify AI-created apps; no causal AI inference.
- **Possible use:** “more supply, still-scarce attention and review” comparison.

### Package hallucinations in code-generating models

- **Sources:** [USENIX Security 2025 presentation page](https://www.usenix.org/conference/usenixsecurity25/presentation/spracklen); [paper PDF](https://www.usenix.org/system/files/usenixsecurity25-spracklen.pdf)
- **Type:** peer-reviewed security study; 576,000 generated code samples across 16 models.
- **Supports:** models can invent package names; measured rates differed materially between tested open and commercial models.
- **Caveat:** rates depend on selected models, prompts, languages, and package ecosystems. Verify any exact percentage against the paper before placing it on a slide.
- **Possible use:** one concrete example of plausible output imposing verification cost.

### OWASP secure coding with AI

- **Sources:** [OWASP Top 10:2025 next steps](https://owasp.org/Top10/2025/X01_2025-Next_Steps/); [OWASP Secure Coding with AI Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secure_Coding_with_AI_Cheat_Sheet.html)
- **Type:** nonprofit security guidance.
- **Supports:** inappropriate trust in AI-generated code is a recognized risk; human review, validation, dependency control, and secure workflows remain necessary.
- **Caveat:** guidance, not incidence measurement.
- **Possible use:** practical guardrail after discussing slop.

### Veracode GenAI Code Security Report 2025

- **Source:** [Veracode, *2025 GenAI Code Security Report* (PDF)](https://www.veracode.com/wp-content/uploads/2025_GenAI_Code_Security_Report_Final.pdf)
- **Type:** vendor benchmark study.
- **Supports:** 45% of tested coding tasks introduced a security flaw across the report’s model/task setup.
- **Caveat:** vendor commercial interest; benchmark prompts and weakness selection do not establish the defect rate of all AI-generated code.
- **Possible use:** appendix or paired with independent research, never alone.

### AI slop and open-source maintainers

- **Source:** [GitHub, “How GitHub Models can help open source maintainers focus on what matters”](https://github.blog/open-source/maintainers/how-github-models-can-help-open-source-maintainers-focus-on-what-matters/)
- **Type:** vendor/maintainer commentary.
- **Supports:** maintainers face increasing low-quality issue and pull-request volume; platform tools are being developed to help triage it.
- **Caveat:** not a population-level causal study.
- **Possible use:** anecdotal example of externalized evaluation cost.

## SaaS and the cost curve

### UK National Cyber Security Centre: AI and SaaS

- **Source:** [NCSC, *Vibe check: AI may replace SaaS (but not for a while)* (PDF)](https://www.ncsc.gov.uk/sites/default/files/2026-04/Vibe-check-AI-may-replace-SaaS-but-not-for-a-while.pdf)
- **Type:** government cyber-security analysis.
- **Supports:** AI changes buy/build/go-without economics; simple point tools are exposed first; critical systems, maintenance, security, compliance, and ownership remain difficult; transition is likely years, not months.
- **Caveat:** forward-looking analysis, not a measured forecast.
- **Possible use:** main source for a nuanced “SaaSpocalypse?” segment.

### Thoughtworks commentary on the SaaSpocalypse

- **Source:** [Thoughtworks, “Making sense of the SaaSpocalypse”](https://www.thoughtworks.com/en-de/insights/articles/making-sense-saaspocalypse)
- **Type:** consultancy commentary.
- **Supports:** point tools and generic layers are more exposed than systems of record, proprietary data, integrated workflow, governance, and support.
- **Caveat:** commercial viewpoint; use as an interpretive case, not independent proof.
- **Possible use:** framework language or appendix.

## Employment

### Stanford Digital Economy Lab: early-career employment

- **Sources:** [*Canaries in the Coal Mine? Six Facts about the Recent Employment Effects of Artificial Intelligence*](https://digitaleconomy.stanford.edu/publication/canaries-in-the-coal-mine-six-facts-about-the-recent-employment-effects-of-artificial-intelligence/); [“AI and Labor Markets: What We Know and Don’t Know”](https://digitaleconomy.stanford.edu/news/ai-and-labor-markets-what-we-know-and-dont-know/)
- **Type:** labor-market research and researcher commentary.
- **Supports:** employment declines concentrated among U.S. workers aged 22–25 in AI-exposed occupations; effects vary by age/task.
- **Caveat:** observational evidence; U.S.-specific; macroeconomics and hiring cycles confound simple AI attribution.
- **Possible use:** apprenticeship-pipeline question, carefully worded.

### U.S. Bureau of Labor Statistics outlook

- **Source:** [BLS, Software Developers, Quality Assurance Analysts, and Testers](https://www.bls.gov/ooh/Computer-and-Information-Technology/Software-developers.htm)
- **Type:** official long-term employment projection.
- **Supports:** 15% projected employment growth from 2024 to 2034 for the occupational group.
- **Caveat:** U.S. projection, not a guarantee and not directly comparable to short-term young-worker data.
- **Possible use:** show that near-term entry pain and long-term demand can coexist.

### Associated Press on technology hiring

- **Source:** [Associated Press, report on falling U.S. tech job postings and AI](https://apnews.com/article/ece82b0babb84bf11497dca2dae952b5)
- **Type:** news synthesis.
- **Supports:** AI is one proposed factor among pandemic over-hiring, interest rates, and macro conditions; causality is not obvious.
- **Caveat:** secondary reporting; not needed if primary data tells the slide.
- **Possible use:** background only.

## Europe, regulation, and sovereignty

### EU AI Act implementation

- **Sources:** [European Commission AI Act implementation timeline](https://ai-act-service-desk.ec.europa.eu/en/ai-act/eu-ai-act-implementation-timeline); [AI Act FAQ](https://ai-act-service-desk.ec.europa.eu/en/faq); [General-Purpose AI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice)
- **Type:** official EU guidance.
- **Supports:** staged application through 2028; general-purpose AI governance and obligations from 2025; additional enforcement/transparency milestones in 2026.
- **Caveat:** legal timelines and guidance evolve; requirements depend on role and risk category; not legal advice.
- **Possible use:** one dated line in the Europe column, details in appendix.

### European Commission AI Continent Action Plan / LUMI AI Factory

- **Source:** [European Commission, annex to the AI Continent Action Plan (PDF)](https://interoperable-europe.ec.europa.eu/sites/default/files/news/2025-06/Annex_to_the_AI_Continent_Action_Plan_COM2025165_5OcpRk2EgLVJ9pIx0slBSXI6t2A_114522.pdf)
- **Type:** official policy document.
- **Supports:** European shared-compute and AI-factory initiatives, including Finland’s LUMI ecosystem.
- **Caveat:** policy ambition is not realized adoption or model leadership.
- **Possible use:** local sovereignty note in appendix.

## Finland and consulting

### Technology Industries of Finland: information technology outlook

- **Source:** [Technology Industries of Finland, “Information Technology in Finland”](https://teknologiateollisuus.fi/en/economic-outlook-and-statistics/economic-outlook/information-technology-in-finland/)
- **Type:** industry association outlook using sector data and member survey/order information.
- **Supports:** 2025 turnover growth, Q1 2026 order changes, flat near-term expectation, employment level and change.
- **Caveat:** sector aggregation can hide divergent subsectors and firms.
- **Possible use:** primary local-market anchor.

### Statistics Finland labor market

- **Sources:** [Statistics Finland, 2025 labor force survey](https://stat.fi/en/publication/cmfpdadi40gsg07un1urfrm3q); [Statistics Finland, Q4 employment by industry](https://stat.fi/en/publication/cmfpa3viiap3208urmg5g907c)
- **Type:** official statistics.
- **Supports:** 9.7% unemployment in 2025, increase from 2024, and weakness in information and communication employment.
- **Caveat:** national aggregates do not isolate software consulting or AI effects.
- **Possible use:** macro employment context.

### European Commission Finland forecast

- **Source:** [European Commission, Economic forecast for Finland](https://economy-finance.ec.europa.eu/economic-surveillance/eu-member-states/country-pages-including-country-reports/finland/economic-forecast-finland_en)
- **Type:** official macroeconomic forecast.
- **Supports:** weak 2025 growth, 2026 forecast, weak labor market, and fiscal consolidation context.
- **Caveat:** forecasts change; use the latest vintage and date the slide.
- **Possible use:** one macro sentence, not a dedicated slide.

### Tieto, Q2 2026

- **Source:** [Tieto half-year report 2026](https://news.cision.com/tieto/r/tieto-s-half-year-report-2026--strong-profitability-demonstrates-resilience-in-a-weak-market%2Cc4376629)
- **Type:** company release.
- **Supports:** organic growth, revenue, margin, management’s demand explanation, AI upskilling.
- **Caveat:** management narrative; one firm with a broad business mix.
- **Possible use:** example of weak consulting demand with efficiency response.

### Siili, Q1 2026 and temporary layoffs

- **Sources:** [Siili Q1 2026 business review](https://view.news.eu.nasdaq.com/view?id=bb16bbf85bf9b8fe1cdf291e41652bd38&lang=en); [Siili completion of change negotiations](https://www.globenewswire.com/news-release/2026/05/25/3300653/0/en/completion-of-change-negotiations-concerning-siili-s-temporary-layoffs.html)
- **Type:** company releases.
- **Supports:** revenue, profitability, employment, management’s AI-transition/customer explanation, temporary-layoff scope.
- **Caveat:** do not generalize one company’s wording to the sector.
- **Possible use:** example where AI transition appears explicitly but alongside customer losses.

### Vincit, H1 2026

- **Source:** [Vincit half-year report 2026](https://view.news.eu.nasdaq.com/view?id=b2203241cdb259eb68e7a3b259c3a721f&lang=en)
- **Type:** company release.
- **Supports:** revenue decline, headcount, margin, budget caution, AI-project target and small project size.
- **Caveat:** management narrative and one reporting period.
- **Possible use:** evidence that AI project activity does not automatically offset weak project demand.

### Digia, H1 2026

- **Source:** [Digia half-year financial report 2026 (PDF)](https://digia.com/hubfs/Investors/Reports%20and%20presentations/2026/Digia-Plc-Half-year-financial-report-2026.pdf)
- **Type:** company financial report.
- **Supports:** reported and organic sales, profitability, headcount, postponed starts, weak areas, workforce reduction, AI-assisted service model.
- **Caveat:** acquired growth and business mix matter; do not reduce the report to a single percentage.
- **Possible use:** example of headline growth coexisting with organic/margin pressure.

### Gofore, 2025 and June 2026

- **Sources:** [Gofore June 2026 business review](https://gofore.com/en/news/gofore-plcs-business-review-for-june-2026-net-sales-19-6-million-euros/); [Gofore annual report 2025 (PDF)](https://gofore.com/media/gofore-annual-report-2025.pdf)
- **Type:** company releases.
- **Supports:** June and Q2 organic growth; 2025 sales, organic growth, margin, restructuring, public/private mix.
- **Caveat:** full H1 2026 report was scheduled after this research snapshot; comparison with other H1 releases is incomplete.
- **Possible use:** counterexample showing divergent company trajectories.

## Historical software-engineering lens

### NATO Software Engineering Conference, 1968

- **Source:** [*Software Engineering: Report of a Conference Sponsored by the NATO Science Committee*](https://onlinebooks.library.upenn.edu/webbin/book/lookupid?key=olbp48950)
- **Type:** primary conference proceedings.
- **Supports:** historical context for the software crisis and emergence of software engineering as a discipline responding to scale, reliability, cost, and maintenance problems.
- **Caveat:** a heterogeneous conference discussion, not a single quantified diagnosis; avoid claiming the 1968 and 2026 problems are identical.
- **Possible use:** “We can create more software than we can manage” historical opening.

### Fred Brooks: No Silver Bullet

- **Source:** [Fred Brooks, *No Silver Bullet—Essence and Accident in Software Engineering* (PDF)](https://dl.icdst.org/pdfs/files3/f923b64c10c1292ad76c939911e3e3ac.pdf)
- **Type:** classic software-engineering essay, first presented in 1986.
- **Supports:** essential versus accidental difficulty; complexity, conformity, changeability, and invisibility; limits of eliminating implementation friction alone.
- **Caveat:** an argument rather than an empirical law. AI may reach further into conceptual work than tools Brooks evaluated.
- **Possible use:** central veteran test—what did AI make accidental, and what remains essential?

### Peter Naur: Programming as Theory Building

- **Source:** [Peter Naur, *Programming as Theory Building* (PDF)](https://gwern.net/doc/cs/algorithm/1985-naur.pdf)
- **Type:** classic conceptual paper, 1985.
- **Supports:** programming as development of tacit understanding/theory, not merely production of source text; difficulty of transferring that theory through artifacts alone.
- **Caveat:** conceptual account; does not evaluate modern agents or prove that AI-assisted teams fail to form understanding.
- **Possible use:** “Who builds the theory if the agent builds the code?”

### David Parnas: Software Aging

- **Source:** [David Parnas, *Software Aging*](https://www.researchgate.net/publication/3560773_Software_aging)
- **Type:** classic conference paper, 1994.
- **Supports:** software loses value as its environment and requirements change and as modifications degrade structure; prevention, rejuvenation, and replacement all matter.
- **Caveat:** older conceptual treatment; use the mechanism, not an implied numerical maintenance forecast.
- **Possible use:** version 1 versus version 37 framing.

### Lehman’s laws of software evolution

- **Source:** [Lehman et al., software-evolution planning and management (PDF)](https://plg.uwaterloo.ca/~migod/846/papers/lehman-ase-01.pdf)
- **Type:** research synthesis and evolution of the laws.
- **Supports:** continuing change and growth, increasing complexity without control, and software evolution as a feedback system.
- **Caveat:** the laws apply most directly to real-world evolving systems and have been revised and debated; do not treat them as physical laws.
- **Possible use:** cheap individual changes versus the complexity of their accumulation.

### Fourth-generation methods, 1984

- **Source:** [Journal of Management Information Systems, “Fourth Generation” methods article](https://www.jmis-web.org/articles/379)
- **Type:** contemporary 1984 academic/management article.
- **Supports:** period claims of severalfold productivity and end-user system development using fourth-generation approaches.
- **Caveat:** abstract-level access and historical terminology; find the complete article before quoting or quantifying it on a slide.
- **Possible use:** evidence that democratization and productivity promises predate generative AI.

### Computer-Aided Software Engineering

- **Source:** [IEEE Technology Navigator, CASE](https://technav.ieee.org/topic/computer-aided-software-engineering-case/)
- **Type:** IEEE topic overview and source index.
- **Supports:** CASE aimed to automate, support, and standardize lifecycle activities; many ideas were absorbed into modern toolchains even as monolithic workbenches faded.
- **Caveat:** current retrospective overview, not a primary 1980s marketing source. Archival advertisements/headlines need separate provenance.
- **Possible use:** “failed as a total product, succeeded as invisible infrastructure.”

## Organizational productivity and demand

### Productivity J-curve

- **Source:** [Brynjolfsson, Rock, and Syverson, *The Productivity J-Curve*](https://www.nber.org/papers/w25148)
- **Type:** NBER working paper later published in the *American Economic Journal: Macroeconomics*.
- **Supports:** general-purpose technologies require complementary intangible investments in processes, products, business models, skills, and organizational capital; costs can precede measured gains.
- **Caveat:** economy/firm-level theory and evidence, not a coding-assistant experiment.
- **Possible use:** explain how a faster task can coexist with flat organizational delivery.

### Economics of generative AI

- **Source:** [NBER, *The Economics of Generative AI*](https://www.nber.org/reporter/2024number1/economics-generative-ai)
- **Type:** research overview by Brynjolfsson, Rock, and Syverson.
- **Supports:** AI adoption requires workflow integration, upskilling, and complementary investment before aggregate productivity gains fully appear.
- **Caveat:** synthesis and forward-looking application of general-purpose-technology research.
- **Possible use:** one contemporary bridge from the J-curve to development organizations.

### Jevons-style software-demand hypothesis

- **Source basis:** no single software-specific causal source selected yet; use BLS demand projections, GitHub project growth, and App Store supply only as adjacent evidence.
- **Type:** explicitly labeled economic hypothesis.
- **Supports:** discussion of substitution, expansion, proliferation, and congestion when implementation cost falls.
- **Caveat:** do not present “ten times cheaper means ten times more software” as measured fact or established application of Jevons paradox.
- **Possible use:** audience question, not a predictive chart.

## Review scarcity, learning, and maintenance

### Godot contribution-policy changes, 2026

- **Source:** [Godot Foundation, “Changes to our Contribution Policies”](https://godotengine.org/article/contribution-policy-2026/)
- **Type:** primary project policy announcement, 30 June 2026.
- **Supports:** qualified review is a bottleneck; AI-generated submissions increased review burden; maintainers connect review work to mentoring future maintainers; substantial generated code and autonomous submissions are restricted.
- **Caveat:** one project under specific backlog and community conditions; the policy is a governance choice, not proof all AI contributions are poor.
- **Possible use:** reviewer scarcity and apprenticeship case.

### Linux kernel tool-generated-content guidelines

- **Source:** [Linux kernel documentation, “Guidelines for Tool-Generated Content”](https://cdn.kernel.org/doc/html/latest/process/generated-content.html)
- **Type:** primary project contribution guidance.
- **Supports:** tool use is compatible with contribution if the submitter understands, discloses, tests, explains, and defends the entire submission; maintainers may apply proportional scrutiny.
- **Caveat:** individual maintainers retain discretion; guidance covers traditional generators as well as AI.
- **Possible use:** accountable-tool-use counterpoint to Godot.

### ESLint AI usage policy

- **Source:** [ESLint, AI Usage Policy](https://eslint.org/docs/latest/contribute/ai-policy)
- **Type:** primary project policy.
- **Supports:** AI-assisted contributions are allowed with disclosure, human review/testing, human responses, edited readability, and accepted-issue gates.
- **Caveat:** project-specific governance; compensation policy is not a general statement about value.
- **Possible use:** third policy model between prohibition and open acceptance.

### Students using Copilot in brownfield tasks

- **Source:** [ICER 2025, *The Effects of GitHub Copilot on Computing Students’ Programming Effectiveness, Efficiency, and Processes in Brownfield Coding Tasks*](https://icer2025.acm.org/details/icer-2025-papers/18/The-Effects-of-GitHub-Copilot-on-Computing-Students-Programming-Effectiveness-Effic)
- **Type:** peer-reviewed computing-education research.
- **Supports:** stronger students used suggestions more selectively; students raised concerns about not understanding suggestions; possible efficiency/learning tension in legacy-code tasks.
- **Caveat:** student sample and educational setting; obtain the full paper and sample details before using a quantitative claim.
- **Possible use:** apprenticeship and selective-use discussion.

### Generative AI and critical-thinking effort

- **Sources:** [Microsoft Research publication page](https://www.microsoft.com/en-us/research/publication/the-impact-of-generative-ai-on-critical-thinking-self-reported-reductions-in-cognitive-effort-and-confidence-effects-from-a-survey-of-knowledge-workers/); [CHI 2025 proceedings](https://doi.org/10.1145/3706598.3713778)
- **Type:** peer-reviewed survey study; 319 knowledge workers and 936 reported AI-use examples.
- **Supports:** greater confidence in AI associated with less self-reported critical-thinking effort; confidence in personal ability associated with more critical engagement; goal-setting and verification shift in AI-assisted work.
- **Caveat:** self-report, broad knowledge work, and association—not measured cognitive decline or a software-specific causal result.
- **Possible use:** careful evidence for verification habits and deskilling risk.

### Maintenance of agent-generated files

- **Source:** [*To What Extent Does Agent-generated Code Require Maintenance? An Empirical Study*](https://arxiv.org/abs/2605.06464)
- **Type:** May 2026 preprint; over 1,000 files and roughly 3,200 changes from 100 repositories in the selected dataset.
- **Supports:** later modification patterns in agent-generated files; most observed maintenance performed by humans.
- **Caveat:** recent preprint, selected repositories, younger-file exposure, and maintenance frequency is not maintainability. Less change can have several explanations.
- **Possible use:** demonstrate how little longitudinal evidence currently exists; avoid “AI code needs less maintenance” headline.

### Generated versus human code quality

- **Source:** [*Is LLM-Generated Code More Maintainable & Reliable than Human-Written Code?*](https://arxiv.org/abs/2508.00700)
- **Type:** 2025 empirical preprint using Python coding tasks and SonarQube.
- **Supports:** mixed quality results across difficulty and generation setup; generated solutions scored better on some measures and worse on some structural/critical issue categories.
- **Caveat:** static-analysis proxies and coding tasks do not capture production lifetime quality; recent preprint.
- **Possible use:** support “quality is multidimensional,” probably appendix only.

## Lakeus-Devaus context

### Community and previous event

- **Sources:** [Lakeus-Devaus official site](https://www.lakeusdevaus.fi/); [Lakeus-Devaus news/events](https://www.lakeusdevaus.fi/uutiset/)
- **Type:** community-owned site.
- **Supports:** regional community positioning, Slack-member count, and the December 2024 local coding-model event and its themes.
- **Caveat:** update community figures if the site changes; confirm the precise 2024 event details with organizers/speaker memory.
- **Possible use:** local before/after callback and rationale for not repeating model mechanics.

## Source hygiene for the eventual slides

- Put the organization, year, sample, and outcome boundary in presenter notes.
- Place a short source and “as of” date directly on factual slides.
- Prefer a chart recreated from cited data over a screenshot of a publisher’s chart, unless reuse rights are clear.
- Distinguish fact, company statement, and speaker inference in wording.
- Do not combine percentages with different denominators into a single visual scale.
- Reopen every linked source before publishing the deck; URLs, reports, legal milestones, and current figures can change.
