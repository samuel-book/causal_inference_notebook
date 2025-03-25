# Glossary

* **Aleatory uncertainty**: Uncertainty due to randomness e.g. whether a coin toss will results in a heads or tails. It cannot be reduced through additional knowledge or data collection, and is usually managed by talking about probabilities.

* **Antecedent**: An antecedent in causal models refers to a preceding event, condition, or characteristic that influences or determines a subsequent outcome.

* **Augmented Inverse Probability Weighting (AIPW)** is a doubly robust statistical method for estimating causal effects, particularly average treatment effects (ATEs). It combines two approaches: inverse probability weighting (IPW) and outcome regression modeling, making it more reliable than either method alone when causal assumptions are met. AIPW requires only either the propensity score model (predicting treatment assignment) or the outcome model (predicting treatment effect) to be correctly specified. This property reduces bias compared to methods that rely on a single model.

* **Average treatment effect**: the difference in mean outcomes between treated and untreated patients across a population (often a population of patients who are considered eligible for treatment). In outcome models the *counterfactual* outcomes for each patient for when they do or or do not receive treatment may be predicted (and averaged across the population). In clinical trails it is the average difference between treated and untreated outcomes (see also *intention-to-treat* and *per-protocol analysis*).

* **Backtracking counterfactuals**: an approach to causal reasoning where changes are traced backward through a causal chain while preserving the original causal laws. Unlike traditional interventional counterfactuals, backtracking allows both downstream and upstream variables to change in response to a counterfactual scenario. This allows linkage between causative factors.

* **Bayes theorem**: Bayes' theorem is a mathematical formula that calculates the probability of an event based on a prior estimate of the probability of that event, and then the addition of new information. It allows us to update our probability estimates when we receive new evidence or information.

* **Bias**: Bias in causal inference refers to systematic deviations between observed relationships and true causal effects. There are three main types of bias that affect causal studies: 1) *Confounding bias* (or *omitted variable bias*) occurs when a variable, that is either not measured or not controlled for properly, affects both the treatment and outcome but is not included in the analysis, 2) *Selection bias* occurs when there is selection of people into a trial, or selection of people out of results collection for a trial, 3) *Measurement bias* stems from incorrect measurement of outcomes, exposures, or confounding variables.

* **Bradford Hill criteria**: Nine principles used to evaluate whether an observed association between a presumed cause and an effect is likely to be causal.

* **Causal discovery**: Causal discovery is the process of inferring cause-and-effect relationships between variables from observational data, without relying on controlled experiments or interventions. Core approaches are: 1) Constraint-based methods use conditional independence testing to identify causal relationships by examining how variables become independent when conditioning on other variables, 2) Score-based methods evaluate potential causal graphs using scoring functions and select the highest-scoring structure, 3) Functional causal model-based methods use specific assumptions about the functional relationships between variables to determine causation. Causal discovery differs from causal inference in that causal discovery focuses on what identifying what factors are causal, and causal inference focuses on determining what effect changing those factors would have.

* **Causal Function**: A function that maps from parent node values to possible values of a node, where changes in arguments represent controlled changes.

* **Causal inference**: Causal inference is the process of figuring out whether one thing truly causes another thing to happen. It goes beyond simply noticing that two things are related (correlation) and tries to determine if changing one thing directly leads to changes in another. Causal inference differs from causal discovery in that causal discovery focuses on what identifying what factors are causal, and causal inference focuses on determining what effect changing those factors would have.

* **Collider**: A collider is a variable that gets affected by two or more other variables - imagine it like a point where multiple influences "collide" into each other. Unlike confounders, which need to be controlled for in studies, controlling for a collider can actually create false relationships between variables and mess up your analysis. As an example, consider a sack filled with potatoes and carrots. The total weight of any sack of any size (the collider) is independently affected by both the number of potatoes and the number of carrots. If you look at sacks of the same weight, you'll find that more potatoes means fewer carrots, and vice versa - creating an artificial relationship between two otherwise unrelated variables. The key insight is that these relationships only appear when we focus on (or "condition on") the collider.

* **Conditional average treatment effect (CATE)**: The Conditional Average Treatment Effect (CATE) is the average impact of a treatment or intervention on a specific subgroup of people who share similar characteristics (such as age, race, or sex). Unlike looking at how a treatment affects everyone as a whole, CATE focuses on how it affects particular groups differently.

* **Conditional Independence**: When two sets of variables (A and B) are independent given a third set (C), expressed as (A⊥⊥B∣C). For example sea drownings (A) and ice cream sales (B) may correlate, but the correlation disappears when weather (C) is controlled for.

* **Confounder**: A confounder is a variable that affects both what you're testing (like a treatment) and what you're measuring (like an outcome), which can make it look like there's a relationship between them when there might not be one. Think of it like trying to figure out if yellow finger nails cause lung cancer - they are both caused by smoking, so appear related, but it is the smoking causing both (and so smoking needs to be measured and accounted for in order to avoid concluding that yellow finger nails cause lung cancer). An example of confounding is that multiple observational studies suggested HRT reduced cardiovascular risks, but these findings were overturned by a Randomized Control Trial. Subsequent re-analysis of observational data suggested one signficant confounder was that women who are less deprvived are more likely to take HRT and also have a lower baseline cardiovascular risk (the failure of the HRT observational study was also, in part, due to *Prevalent user bias* and *immortal time bias* because the observational studies included women who were already taking and tolerating HRT before the study began, and these women had a lower likelihood of cardiovascular problems at the start of follow-up). There was also *healthy user bias* where HRT was more likely to be chosen by otherwise healthy women.

* **Confounding by indication**: Occurs when treatment choice is influenced by patient characteristics.

* **Counterfactual**: The hypothetical outcome that would have occurred under a different treatment condition.

* **Deconfounding**: The process of overcoming confounding in models, such as including confounding variables in the model, propensity score matching or weighting, or using *instrumental variable analysis* (see below).

* **Directed Acyclic Graph (DAG)**: A directed acyclic graph (DAG) is a visual tool that maps out cause-and-effect relationships between variables. It uses arrows to show how one variable influences another, with the arrows always pointing in one direction and never creating loops. Think of it as a roadmap showing how different factors affect each other - like how education might affect income, which in turn affects health - but you can never follow the arrows back to where you started (that's the *acyclic* bit). DAGs help researchers identify which variables they need to account for when studying cause-and-effect relationships, and help communicate the presumed causal relationships to others.

* **E-value**: The E-value is a practical tool used in observational studies to assess how strong an unmeasured factor would need to be to invalidate a research finding. It helps researchers understand how robust their findings are against potential hidden factors they couldn't measure or control for. A large E-value indicates that very strong unmeasured confounding would be needed to explain away the results, suggesting the findings are more robust. Calculation is simple: For a given risk ratio (RR), the E-value is calculated using a simple formula that produces a number greater than or equal to 1. For example, if a study finds a risk ratio of 1.50, the corresponding E-value would be 2.37, meaning an unmeasured factor would need to have at least a 2.37-fold association with both the exposure and outcome to nullify the observed effect.

* **Effect Modification**: When the effect of treatment varies across subgroups defined by another variable.

* **Epistemic uncertainty**: Epistemic uncertainty stems from a lack of knowledge or incomplete understanding of a system, model, or process. It is often considered reducible through further research, data collection, or improved modelling. Apart from collecting more data, it may be explored by sensitivity analysis, expert judgement, or Bayesian methods.

* **Estimand , Estimator, Estimate**: *Estimand*: The target quantity of interest to be estimated. *Estimator*: The statistical method or formula used to calculate the estimate. *Estimate*: The actual numerical value obtained from the estimator.

* **Exchangeability**: When treatment groups are comparable in all aspects except for the treatment received.

* **Exogenous variable**: Variables that are not affected by variables within the defined model. They are usually treated as constants in a model.

* **External validity**: External validity refers to how well the findings of a scientific study can be applied beyond its original context. In simpler terms, it's about whether the cause-and-effect relationships discovered in a study will hold true in other situations. Compare with *internal validity*.

* **G methods**: G methods are a family of statistical techniques used to estimate cause-and-effect relationships in complex situations, particularly when dealing with treatments or exposures that change over time. They are especially valuable when there's a back-and-forth relationship between treatments and factors that influence both the treatment and outcome. Three main approaches make up the g methods family: 1) G formula, 2) Marginal structural models, 3) Structural nested models.

* **Hazard ratio**: A hazard ratio (HR) is a way to compare how quickly an event happens between two groups - typically a treatment group versus a control group. Think of it as measuring who reaches a particular outcome faster. Unlike other statistical measures (e.g. see *risk ratio*) that only look at whether an event happened by the end of a study, hazard ratios specifically consider when these events occur throughout the entire study period. It's like comparing the speed at which events happen between groups, rather than just counting how many events happened in total.

* **Healthy User Bias**: A bias where drug drug treatment in observational data sets may be chosen more by more healthy people. Prior health may therefore be a *confounder* in observational drug evaluation.

* **Heterogeneous treatment effects**: Heterogeneous treatment effects are where individual patients vary in their response to treatment. Clinical trials tend to estimate an average treatment effect across the whole population, but further analysis may reveal subgroups of patients who have smaller or larger treatment effects.

* **Immortal time bias (survival bias)**: A bias that occurs in research studies when there is a period during which certain participants cannot experience the outcome being studied, creating an artificial survival advantage. Consider a study examining the effect of receiving tea and crumpets (T&C) on day 3 of intensive care unit (ICU) stay on patient survival: Group 1: Patients who received T&C on day 3, Group 2: Patients who did not receive T&C The first 3 days represent "immortal time" for Group 1 because these patients must have survived at least 3 days to receive T&C. This automatically makes Group 1 appear to have better survival rates since they couldn't have died before day 3, while Group 2 could have died at any time.

* **Incidence**: Incidence is the number of new cases of a condition that develop in a population during a specified time period. Compare to *prevalence*.

* **Inference**: Inference is the process of reaching logical conclusions by moving from premises to consequences, with the word "infer" etymologically meaning "to carry forward". It is a fundamental form of reasoning that allows us to draw conclusions based on available information and observations. There are three main categories of inference: 1) *Deductive inference* provides guaranteed conclusions when premises are true, and typically used in mathematical and logical arguments. Deductive inference moves from general principles/rule to specific observations that can be made 2).  *Inductive inference* draws probable conclusions from specific observations. 3) *Abductive inference*: Seeks the simplest and most likely explanation for observations. Causal inference combines elements from all types of inference.

* **Information bias**: Errors or incompleteness in data collection that occur in one group more than another.

* **Interaction**: Interaction in causal inference occurs when the joint effect of two exposures on an outcome differs from the sum of their individual effects.

* **Interference**: Interference in causal inference occurs when one subject's treatment or exposure can affect the outcomes of other subjects. This phenomenon commonly arises in settings where social interactions influence outcomes. An example of interference is vaccination, where vaccination of one person affects others' infection risks. Or prioritisation of one patients treatment may affect the amount of time another patient waits for treatment.

* **Intention-to-treat**: Intention-to-treat (ITT) analysis is a fundamental method in randomized controlled trials where all participants are analyzed according to their originally assigned treatment groups, regardless of whether they actually received the intended treatment or not. The outcome may reflect real life treatment effects better than analysing only those known to have taken the treatment, but may under-estimate the inherent efficacy of the treatment. This compares with *per-protocol analysis* which only includes participants who strictly followed the study protocol and completed the treatment as intended. 

* **Internal validity**: Internal validity is how confident we can be that a cause-and-effect relationship in a study is real and not due to other factors. Think of it as answering the question: "Did A actually cause B, or was something else responsible?". Internal validity is confined to making good conclusions in the study group. Compare with *external validity*.

* **Instrumental variable analysis**: Instrumental Variable analysis is indeed a deconfounding method specifically designed to address the challenge of unmeasured confounding in causal inference studies. It is a technique for determining causality that depends on identifying a variable that effects exposure (treatment), in a way that is independent of eligibility of treatment, but does not affect outcomes directly. Consider studying how a drug affects blood pressure. Instead of just comparing drug use and blood pressure directly, you might use "distance to the nearest pharmacy" as an instrumental variable. People living closer to pharmacies are more likely to take the drug, but their distance from a pharmacy doesn't directly affect their blood pressure in any other way.

* **Inverse propensity weighting**: The outcomes of patients are weighted by their propensity to treat, or more accurately by the inverse propensity to treat. For treated individuals the weight is 1 / p; for untreated individuals the weight is 1 / (1 - p). This effectively gives more weight to patients not treated in the usual way (e.g. gives more weight to looking at the outcome of patients who would normally be expected to be treated but did not receive treatment, and vice versa). The method can be extended to Inverse Probability Censoring Weighting (IPCW) which can help cope with missing outcomes and follow-up; By assigning weights inversely proportional to the probability of remaining uncensored, IPCW rebalances the sample to represent the original population.

* **Latent variable**: An unobserved construct that can only be inferred indirectly through models using observable or measurable data. Examples are IQ, or depression scores derived from questionnaires.

* **Mediator**: A variable that lies along the causal pathway between cause and effect, through which the causal effect may pass.

* **Moderator**: A variable that affects the relationship between cause and effect variables.

* **Parametric (and non-parametric)**: Parametric refers to something that is defined or controlled by parameters. In statistical models these parameters usually define a distribution - once that distribution has been defined then further results (such as confidence limits, or statistical difference between two distributions) may be calculated. Non-parametric models (such as machine learning methods such as random forests or neural networks) are not easily reduced to meaningful parameters. Non-parametric models are usually more flexible (coping with interactions between variables, and complex relationships between a variable and the result), but lack the ability to quickly estimate results such as confidence limits and statistical difference.

* **Per-Protocol Analysis**: Analysis of the effect of treatment when it is known the subject has taken the treatment as intended. This compares with *intention-to-treat* which analyses across the whole population where treatment was intended, whether the treatment was actually taken or not. This analysis may provide a better estimation of the inherent treatment efficacy, but over-estimate real world treatment effects.

* **Prevalence**: The proportion of a population that has a specific condition at a given time or during a specific period. Compare to *incidence*.

* **Prevalent user bias**: The bias in observational data where treatment is recorded for those who have tolerated the treatment (and drop-out may be hard to ascertain from the observational data). This compares with Randomized Controlled Trials (RCT) where treatment drop-out should be robustly recorded.

* **Prior event rate ratio (PERR)**: PERR adjusts treatment effect for hidden confounders by comparing groups prior to and after treatment. The PERR is calculated as the ratio of the hazard ratios (HR) after treatment to the HR before treatment (HRpost/HRprior).

* **Propensity score**: the probability that an individual receives a treatment or intervention, given a set of observed data about the patient/setting. This allows better comparison of treatment effects when the people more likely to receive treatment are more likely to have a good/bad outcome compared with those that do not receive treatment. It helps to simplify analysis by combining multiple features about patients/setting into a single variable. The propensity score may be used for 1) *matching*, where pairs of treated and untreated people are identified each with similar propensity scores, *weighting*, where a model includes the propensity score in order to adjust outcome by likelihood to treat, and *subclassification*, where analysis can group people with similar propensity scores. See also *inverse propensity weighting*.

* **Risk ratio**: A risk ratio, also known as relative risk, is a number that shows how much more likely one group is to experience a specific health outcome compared to another group. Risk ratios differ from hazard ratios: Risk ratios measure cumulative risk at a fixed endpoint, whereas hazard ratios measure instantaneous risk at any given point during the study period.

* **Selection bias**: Bias that affects studies due to imperfect selection of people in the study. This includes 1) *Sampling bias*: Occurs when study participants are not representative of the target population, 2) *Prevalence-incidence* bias (Neyman bias) occurs when extremely sick or extremely healthy individuals are excluded from research studies, 3) *Attrition bias*: Results from differential loss of participants during follow-up, 4) *Self-selection bias*: When participants' decision to participate creates systematic differences, 6) *Referral bias*: Related to how participants are referred to the study.

* **SHAP values**: SHAP (SHapley Additive exPlanations) values show how individual features (or combinations of features) in a machine learning model contribute to the final model prediction. They may be applied to all machine learning model types.

* **Structural Causal Modelling**: A model combining a set of nodes with functions specifying causal relationships between inputs and outputs. This is similar to *Structural Equation Modelling* (which also used a network of functions/equations), but the Structural Causal Model is intended to map causal relationships only, not predictive relationships.

* **Structural Equation Modelling**: A model combining a set of nodes with functions specifying causal *or* predictive relationships between inputs and outputs. This is similar to *Structural Causal Modelling* (which also used a network of functions/equations), but the Structural Causal Model is intended to map causal relationships only, not predictive relationships.

* **Survival bias**: See *immortal time bias*.

* **T-Learner**: A T-learning approach uses separate two or more models for untreated and treated patients. It is a method that allows for examination of heterogenous treatment effects in isolated subgroups.

* **Target trial emulation**: Target trial emulation is a framework that applies the principles of randomized clinical trials (RCTs) to observational data to estimate the causal effects of interventions. The process begins by designing a hypothetical randomized trial (the "target trial") that would ideally answer the research question. This protocol includes: 1) Eligibility criteria, 2) Treatment strategies
Assignment procedures, 3) Follow-up period, 4) Outcome definitions, 5) Statistical analysis plan. 




