# Key causal discovery methods

Causal discovery is the process of inferring cause-and-effect relationships between variables from observational data, without relying on controlled experiments or interventions [1] [3]. Unlike traditional correlation analysis that only identifies statistical associations, causal discovery aims to uncover the actual causal structure and relationships in a system [9].

## Key Components

**Core Approaches**

- Constraint-based methods use conditional independence testing to identify causal relationships by examining how variables become independent when conditioning on other variables [8]

- Score-based methods evaluate potential causal graphs using scoring functions and select the highest-scoring structure [8]

- Functional causal model-based methods use specific assumptions about the functional relationships between variables to determine causation [6]

**Key Assumptions**

- Causal Markov condition: Variables are independent of non-descendants given their direct causes [1]

- Causal faithfulness: The observed independencies in the data reflect the underlying causal structure [1]

- Causal sufficiency: All common causes are included in the observed variables [1]

## Applications

Causal discovery has important applications across multiple domains:

**Healthcare**

- Drug discovery and development

- Treatment optimization

- Disease progression analysis [5]

**Finance**

- Risk assessment

- Fraud detection

- Investment strategy optimization [5]

**Climate Science**

- Understanding climate change drivers

- Attribution of extreme weather events [5]

## Challenges

Several key challenges exist in practical causal discovery:

- Non-linear relationships between variables [9]

- Presence of unmeasured confounding variables

- Measurement errors and missing data [16]

- High dimensionality of real-world datasets [17]

- Need for domain expertise to validate discovered relationships [10]

The field continues to evolve with new methods and approaches being developed to address these challenges and make causal discovery more applicable to real-world problems [14].

Citations:
[1] https://docs.actable.ai/causal_discovery.html

[2] https://arxiv.org/abs/2407.08602

[3] https://en.wikipedia.org/wiki/Exploratory_causal_analysis

[4] https://causalai.causalens.com/resources/white-papers/how-can-ai-discover-cause-and-effect/

[5] https://www.leewayhertz.com/causal-ai/

[6] https://www.frontiersin.org/journals/genetics/articles/10.3389/fgene.2019.00524/full

[7] https://towardsdatascience.com/causal-discovery-6858f9af6dcb?gi=bcd6588433fa

[8] https://www.nature.com/articles/s41598-020-59669-x

[9] https://datarefiner.com/feed/causality

[10] https://www.pywhy.org/dowhy/v0.10/example_notebooks/dowhy_causal_discovery_example.html

[11] https://wires.onlinelibrary.wiley.com/doi/10.1002/widm.1449

[12] https://www.youtube.com/watch?v=6A62uq1Ooi4

[13] https://arxiv.org/pdf/2305.10032.pdf

[14] https://arxiv.org/abs/2412.01953

[15] https://www.youtube.com/watch?v=tufdEUSjmNI

[16] http://kth.diva-portal.org/smash/get/diva2:1720056/FULLTEXT01.pdf

[17] https://causalens.com/resources/blog/discovering-causal-drivers-at-scale/

[18] https://towardsdatascience.com/causal-discovery-6858f9af6dcb?gi=bcd6588433fa

[19] https://www.stat.cmu.edu/~cshalizi/uADA/12/lectures/ch25.pdf

[20] https://www.pywhy.org/dowhy/v0.11/example_notebooks/dowhy_causal_discovery_example.html
