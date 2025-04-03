# Matching

These notes are based mostly on:

Stuart EA. Matching methods for causal inference: A review and a look forward. Stat Sci. 2010 Feb 1;25(1):1-21. doi: 10.1214/09-STS313. PMID: 20871802; PMCID: PMC2943670. [https://pmc.ncbi.nlm.nih.gov/articles/PMC2943670/]

An AI-generated podcast on this paper (generated using Google NotebookLM) is available at: [https://youtu.be/Vhcmnt1E66M]

## Matching vs. adjustment, and double robustness

* **Matching** seeks to create comparable groups of treated and untreated people, mimicking randomisation of giving treatment. If matching is perfect then the difference in outcomes between treated and untreated people will be entirely due to the treatment. Matching is based on five key ingredients:

    1. **Selection of covariates (features)**: We must decide what features about a patient are important in finding matches between treated and untreated patients. These should reflect those factors which are influential in treatment decisions.
    
    2. **Distance measure**: We must find a way of measuring how patients differ from each other. Minimising the distance measure will minimise the difference between treated and untreated patients.
    
    3. **Matching method**: We define the method used to find matches, given our selection of covariates and our resulting distance measure.
    
    4. **Assess quality of matching**: Check quality of matching, and iterate steps 2 and 3 if necessary.
    
    5. **Analysis of the outcome and estimation of the treatment effect**: Once matching is of sufficient quality the treatment effect may be estimated. Imperfect matching may also be compensated for by *Adjustment* to give *Double Robustness* (see below).

* **Adjustment** seeks to compensate for differences between treated and untreated people, such as by including those factors that influence treatment decision in an outcome model. 

* **Double Robustness** combines *matching* and *adjustment*. It gives two chances of isolating the treatment effect. It will also allow for fine-tuning of estimating the treatment effect - with matching giving us 'similar' untreated and treated groups, and adjustment correcting for remaining differences between the groups.


## Key principles of matching

* **The principle of strong ingnorability** requires:

    1. **Unconfoundedness**: This means that potential outcomes are independent of treatment *assignment* once we control for observed covariates. That is, We have identified and allowed for all the factors could affect both treatment choice and outcome.
    
    2. **Common support** (also called overlap): For all subjects there should be neither 0% or 100% probability of receiving treatment - there must always be the chance of the opposite treatment decision. Patients may also be excluded if their probability of receiving treatment lies outside the range of probabilities in the opposite group (so both untreated and treated groups share the same range of probabilities of receiving treatment).


## Choice of variable

To satisfy the assumption of ignorable treatment assignment, it is important to include in the matching procedure all variables known to be related to both treatment assignment and the outcome. One type of variable that should **not** be included in the matching process are those that may have been affected by the treatment of interest (e.g. we would not match on subsequent treatment decisions or outcomes).


## Matching methods

The following methods aim to create comparable treated and control groups in observational studies by balancing the distributions of observed covariates. The choice of method depends on the specific research question, the characteristics of the data, and the estimand of interest (e.g., ATT or ATE).

* **Exact matching**. This method aims to find individuals with identical values on all chosen covariates. However, it can be difficult to implement with many covariates, potentially leading to many unmatched individuals. **Coarsened exact matching (CEM)** performs exact matching on broader ranges (bins) of variables.

* **Mahalanobis distance matching**. This method uses the Mahalanobis distance to measure the similarity between individuals based on the covariates. It works best with fewer than 8 continuous variables that are approximately normally distributed. It can be combined with propensity score calipers. Mahalanobis distance is distance after standardising data (to give mean=0, SD=1.0) and taking account of covariation; it is equivalent to performing normal Euclidian distances on standardised data that has also been through principal component analysis.

* **Propensity score matching**. This approach uses the propensity score, which is the probability of receiving treatment given the observed covariates, to create matched groups with similar covariate distributions. Matching can be done on the propensity score itself or the **linear propensity score** (which can often give better matching).

* **Calliper**: The closest control and treatment match may not be close. A *calliper* rejects matches above a given allowed distance.

* **Nearest neighbour matching**. This method matches each treated individual to one or more control individuals with the smallest distance (based on a defined measure like propensity score). This can be **1:1** matching or **k:1** matching (ratio matching) where each treated individual is matched to *k* control individuals. **Optimal matching** considers the overall set of matches to minimise a global distance measure, as opposed to simple ("greedy") nearest neighbour matching where the order of matching matters. Matching can be done **with or without replacement**. **Variable ratio matching** allows the number of matches to vary for different treated individuals.

* **Subclassification**. This method divides the sample into subgroups (subclasses) based on similarity, often using quantiles of the propensity score. Treatment effects are then estimated within each subclass and aggregated.

* **Full matching**. This is a more sophisticated form of subclassification that automatically selects the number of matched sets, with each set containing at least one treated and one control individual.

* **Weighting adjustments**. These methods assign weights to individuals based on their propensity scores to create pseudo-populations where the covariate distributions are balanced. Examples include **inverse probability of treatment weighting (IPTW)** for estimating the ATE, **weighting by the odds** for estimating the ATT, and **kernel weighting**.

## Assessing quality of matching

The quality of matching is assessed using a range of key methods, primarily focusing on determining the balance of covariates between the treated and control groups in the matched samples. Balance is defined as the similarity of the empirical distributions of the full set of covariates in the matched treated and control groups. The goal is for the treatment to be unrelated to the covariates after matching.

Here are the key methods used to assess the quality of matching, as described in the sources:

1. **Numerical Diagnostics**:

    * **Standardized Difference of Means**: This is one of the most common numerical balance diagnostics. It is calculated as the difference in means of each covariate, divided by the standard deviation in the full treated group. This measure, sometimes called "standardized bias" or "standardized difference in means," is compared before and after matching to see if balance has improved. The same standard deviation should be used for standardization before and after matching. This should be computed for each covariate, as well as two-way interactions and squares. For binary covariates, either this formula can be used, or a simple difference in proportions can be calculated.

    * **Rubin's Balance Measures**: Rubin (2001) presents three balance measures based on theory in Rubin and Thomas (1996):
    
        * The standardized difference of means of the propensity score.
        
        * The ratio of the variances of the propensity score in the treated and control groups.
        
        * For each covariate, the ratio of the variance of the residuals orthogonal to the propensity score in the treated and control groups. For regression adjustment to be trustworthy, Rubin (2001) suggests that absolute standardized differences of means should be less than 0.25 and variance ratios should be between 0.5 and 2.
        
    * **Caution Against Hypothesis Tests and P-values**: Hypothesis tests and p-values (e.g. t-tests) should not be used as measures of balance. This is because balance is an in-sample property, and hypothesis tests conflate changes in balance with changes in statistical power. Th
    
2. **Graphical Diagnostics**:

    * **Distribution of Propensity Scores**: Examining the distribution of the propensity scores in the original and matched groups is a helpful first step. This is also useful for assessing common support. For weighting or subclassification, these plots can show points with their size proportional to their weight. Figure 1 in the source provides an example of adequate overlap.

    * **Quantile-Quantile (QQ) Plots**: For continuous covariates, QQ plots compare the empirical distributions of each variable in the treated and control groups by plotting their quantiles against each other. If the distributions are identical, all points would lie on the 45-degree line. This can also be done for squared variables and two-way interactions to assess balance in second moments.
    
    * **Weighted Boxplots**: For weighting methods, weighted boxplots can provide similar information to QQ plots by visualising the distribution of covariates in the weighted treated and control groups.
    
    * **Plot of Standardized Differences of Mean**: A plot showing the standardized difference of means for each covariate before and after matching provides a quick overview of whether balance has improved. 

It is crucial to assess balance across the full set of covariates and potentially their interactions and non-linear terms to ensure the quality of the matching. If the resulting matched samples are not adequately balanced, researchers should consider iterating with different matching methods or distance measures until a well-balanced sample is achieved. If balance cannot be achieved, the data may not be suitable for reliably estimating causal effects without strong modelling assumptions.

## Analysis

With perfect matching, the difference in outcomes between untreated and treated patients should reflect the treatment effect size. Imperfect matching may be allowed and corrected for using Imperfect matching may also be compensated for by *Adjustment* to give *Double Robustness*.

## Issues to consider

Even after employing matching methods, several important issues can still exist when estimating causal effects from observational data. Matching is primarily a "design" stage aimed at improving the comparability of treated and control groups based on observed covariates, but it doesn't eliminate all potential sources of bias or uncertainty.

Here are some key issues that can persist after matching:

* **Unobserved Confounding**: Perhaps the most significant limitation is that matching can only balance the treated and control groups on observed covariates. The fundamental assumption of strong ignorability requires that there are no unobserved differences between the groups that are related to both the treatment assignment and the outcome. If such unobserved confounders exist, they can still bias the estimated treatment effect even after matching on observed characteristics. While matching on observed variables can reduce bias from correlated unobserved variables, any unobserved factor entirely independent of the observed ones remains a potential source of bias. Researchers often employ sensitivity analyses to assess how the conclusions might change in the presence of unobserved confounding.

* **Lack of Common Support**: Matching aims to compare treated and control individuals who are similar in their observed characteristics. However, there might still be regions in the covariate space where there are treated individuals but no comparable controls (or vice versa), leading to a lack of complete overlap or common support. In such cases, estimating the treatment effect for individuals outside the region of common support would rely heavily on extrapolation, which can be unreliable. While some matching methods like nearest neighbour with calipers can implicitly handle this by not selecting matches outside a certain range, other methods might require explicit restriction of the analysis to the region of common support. This issue can also affect the generalisability of the findings.

* **Model Dependence in Outcome Analysis**: After matching, the final estimation of the treatment effect often involves regression adjustment using the matched samples. While matching can reduce the dependence on the functional form of the outcome model, the results can still be influenced by model misspecification. The source notes that matching and regression adjustment are often best used in combination, akin to "double robustness". However, if the outcome model is incorrectly specified, particularly in the presence of remaining imbalance or non-linear relationships, the treatment effect estimate might still be biased.

* **Variance Estimation**: Determining the appropriate way to estimate the variance of the treatment effect after matching is a complex and debated topic. Some researchers argue that the uncertainty introduced by the estimation of the propensity score and the matching process itself needs to be accounted for in the variance estimation. Others adopt an approach similar to randomised experiments, conditioning on the covariates and treating them as fixed. The source mentions that under fairly general conditions, using estimated rather than true propensity scores might lead to an overestimate of variance. Bootstrap procedures are sometimes used to account for the uncertainty in matching.

* **Handling Missing Covariate Data**: Matching methods typically assume fully observed covariates. In practice, missing data is common and can complicate the matching process. While strategies like imputation and including missingness indicators in the propensity score model exist, they do not entirely resolve the challenges posed by missing information and can introduce their own assumptions and uncertainties. Furthermore, balance diagnostics for settings with missing covariate values are an area needing further development.

* **Choice Between Matching Methods**: The paper highlights that there is a wide variety of matching methods available, and there is limited definitive guidance on how to select the most appropriate method for a given situation. While the primary advice is to choose the method that yields the best balance on observed covariates, defining "best balance" across multiple covariates is not always straightforward. Researchers might need to try several methods and compare the resulting balance diagnostics.

* **Multiple Treatment Doses**: The discussed matching methods are primarily focused on situations with a binary treatment (treated vs. control). When dealing with multiple levels or doses of a treatment, standard matching approaches become more complex. While generalisations of the propensity score exist for such scenarios, assessing balance and interpreting results can be challenging.

* **Stable Unit Treatment Value Assumption (SUTVA)**: Matching focuses on creating comparable groups of individuals but does not address violations of the Stable Unit Treatment Value Assumption (SUTVA). SUTVA assumes that the outcome of one individual is not affected by the treatment assignment of others (no interference) and that there are no different forms or versions of each treatment level. If SUTVA is violated (e.g., due to spillover effects), matching on individual-level covariates will not address the resulting bias.

In summary, while matching methods are powerful tools for improving causal inference from observational studies by addressing bias due to observed confounding, they do not provide a perfect solution. Researchers must remain aware of the inherent limitations and potential issues that can persist after matching, such as unobserved confounding, lack of common support, model dependence, and challenges in variance estimation. Careful consideration of the assumptions, thorough diagnostic checks, and, where possible, sensitivity analyses are crucial for drawing reliable causal inferences.




