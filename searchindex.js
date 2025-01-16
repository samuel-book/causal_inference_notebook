Search.setIndex({"docnames": ["1_dags/01_dag", "2_deconfounding/deconfounding", "glossary", "intro", "misc/bias", "misc/bradford_hill", "misc/causal_discovery", "pearl/01_introduction", "pearl/02_ladder_of_causation", "pearl/03_genesis_of_causal_inference", "pearl/04a_bayes_theorem", "pearl/04b_bayesian_networks"], "filenames": ["1_dags/01_dag.ipynb", "2_deconfounding/deconfounding.md", "glossary.md", "intro.md", "misc/bias.md", "misc/bradford_hill.md", "misc/causal_discovery.md", "pearl/01_introduction.md", "pearl/02_ladder_of_causation.md", "pearl/03_genesis_of_causal_inference.md", "pearl/04a_bayes_theorem.md", "pearl/04b_bayesian_networks.md"], "titles": ["Graphviz plot of Directed Acyclic Graph (DAG) for thrombolysis use in stroke", "Deconfounding", "Glossary", "Causal Inference Notebook", "Types of bias in observational studies", "Bradford Hill criteria", "Key causal discovery methods", "Introduction", "The ladder of causation", "From Buccaneers to Guinea Pigs: The genesis of Causal Inference", "Bayes and causal inference", "Bayesian networks"], "terms": {"an": [0, 2, 4, 5, 7, 9, 10, 11], "exampl": [0, 2, 4, 7, 8], "show": [0, 2, 4, 8, 9], "kei": [0, 2], "determin": [0, 2, 6, 9, 11], "outcom": [0, 2, 4, 5], "thi": [0, 2, 4, 5, 8, 9, 10, 11], "includ": [0, 1, 2, 4, 6, 8], "clot": 0, "bust": 0, "treatment": [0, 1, 2, 4, 6], "patient": [0, 2, 4], "characterist": [0, 1, 2, 4], "influenc": [0, 2, 4], "whether": [0, 2, 5, 7, 8, 11], "i": [0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11], "from": [0, 1, 2, 4, 6, 7, 8, 10, 11], "import": [0, 6, 11], "digraph": 0, "creat": [0, 2, 4, 7, 8], "g": [0, 2, 4, 10, 11], "attribut": [0, 6, 9], "attr": 0, "overlap": 0, "scale": [0, 6], "sep": 0, "0": [0, 10, 11], "25": [0, 1], "layout": 0, "dot": 0, "see": [0, 2, 4, 8, 10], "http": [0, 1, 5, 6, 8, 10], "org": [0, 1, 5, 6], "doc": [0, 6], "shape": 0, "circl": 0, "fixeds": 0, "true": [0, 2, 4, 10, 11], "width": 0, "1": [0, 1, 2, 5, 6, 10, 11], "5": [0, 1, 2, 5, 6, 9, 10, 11], "height": [0, 9], "label": 0, "penwidth": 0, "2": [0, 1, 2, 5, 6, 10, 11], "fontnam": 0, "time": [0, 1, 2, 5, 9, 10, 11], "bold": 0, "fontcolor": 0, "black": [0, 10], "stroke_team": 0, "nteam": 0, "nihss": 0, "nsever": 0, "color": 0, "mr": 0, "prior": [0, 2, 4, 7, 10], "ndisabl": 0, "ag": [0, 1, 2, 4, 11], "af": 0, "atrial": 0, "nfibril": 0, "red": 0, "anticoag": 0, "anticoagul": 0, "precis": 0, "precic": 0, "nknown": 0, "nonset": 0, "enquiri": 0, "central": 0, "darkgoldenrod": 0, "style": 0, "dash": 0, "confound": [0, 1, 2, 6, 8, 11], "save": 0, "png": 0, "file": [0, 1, 5], "format": 0, "render": 0, "thrombolysis_dag": 0, "cleanup": 0, "here": [1, 4], "ar": [1, 2, 4, 5, 6, 7, 8, 9, 10, 11], "main": [1, 2], "us": [1, 2, 4, 5, 6, 8, 9, 10, 11], "research": [1, 2, 4, 5], "analysi": [1, 2, 4, 6], "random": [1, 2, 9], "randomli": [1, 9, 10], "assign": [1, 2, 4], "subject": [1, 2, 4], "group": [1, 2, 4, 7], "ensur": [1, 11], "equal": [1, 2, 4], "distribut": [1, 2, 9, 10], "known": [1, 2, 4, 9, 10, 11], "unknown": 1, "variabl": [1, 2, 4, 6, 7, 8], "restrict": [1, 4, 8], "limit": [1, 2, 8, 9], "studi": [1, 2, 5], "particip": [1, 2, 4], "those": [1, 2, 4, 9], "similar": [1, 2, 5], "valu": [1, 2, 9, 10, 11], "potenti": [1, 2, 4, 5, 6], "elimin": [1, 8, 10, 11], "variat": [1, 9], "match": [1, 2], "pair": [1, 2, 9], "counterpart": 1, "comparison": [1, 2, 4], "who": [1, 2, 4, 7], "share": [1, 2], "same": [1, 2, 5, 11], "control": [1, 2, 4, 6, 7], "regress": [1, 4, 9], "stratif": 1, "evenli": 1, "within": [1, 4], "separ": 1, "strata": 1, "8": [1, 5, 6, 11], "multivari": 1, "model": [1, 2, 4, 6, 7, 8, 9], "handl": [1, 4], "multipl": [1, 2, 4, 6, 8, 10, 11], "covari": 1, "simultan": [1, 4], "9": [1, 5, 6, 11], "standard": 1, "refer": [1, 2], "popul": [1, 2, 4, 5, 9, 10, 11], "negat": 1, "effect": [1, 2, 4, 5, 6, 7, 9, 10, 11], "factor": [1, 2, 4, 5, 8, 9], "like": [1, 2, 4, 5, 9, 10], "sex": [1, 2], "10": [1, 5, 6, 10, 11], "latent": [1, 2], "infer": [1, 2, 5, 6, 8, 11], "recurr": 1, "neural": [1, 2], "network": [1, 2, 8], "rnn": 1, "unobserv": [1, 2, 11], "histor": 1, "data": [1, 2, 4, 6, 8, 9, 10], "16": [1, 6, 10], "autoencod": 1, "remov": 1, "featur": [1, 2, 10], "correl": [1, 2, 6, 9, 11], "special": [1, 9], "architectur": 1, "7": [1, 5, 6, 10, 11], "propens": [1, 2], "score": [1, 2, 6], "estim": [1, 2, 4, 7, 10], "probabl": [1, 2], "receiv": [1, 2, 4], "base": [1, 2, 4, 6, 10, 11], "logist": 1, "15": [1, 6], "citat": [1, 6], "www": [1, 5, 6], "medrxiv": 1, "content": [1, 5], "1101": 1, "2024": 1, "09": 1, "20": [1, 6, 10, 11], "24314055v1": 1, "scribbr": 1, "co": [1, 9], "uk": [1, 5], "faq": [1, 5], "how": [1, 2, 4, 6, 7, 8, 9, 10, 11], "do": [1, 2, 7, 8, 9, 10, 11], "prevent": 1, "interf": 1, "my": 1, "3": [1, 2, 5, 6, 9, 11], "academ": 1, "oup": 1, "com": [1, 5, 6], "bib": 1, "articl": [1, 5, 6], "abstract": 1, "6": [1, 2, 5, 6, 11], "bbae512": 1, "7824239": 1, "4": [1, 2, 5, 6, 10, 11], "tandfonlin": 1, "doi": [1, 6], "full": [1, 5, 6, 10], "1080": 1, "01621459": 1, "2023": 1, "2240461": 1, "openreview": 1, "net": 1, "forum": 1, "id": 1, "ryxdjjcqtq": 1, "statsdirect": 1, "help": [1, 2, 10], "basic": [1, 11], "htm": 1, "pmc": [1, 5], "ncbi": [1, 5], "nlm": [1, 5], "nih": [1, 5], "gov": [1, 5], "pmc4017459": 1, "healthknowledg": [1, 5], "public": [1, 4, 5], "health": [1, 2, 4, 5], "textbook": 1, "1a": 1, "epidemiologi": [1, 5], "bias": [1, 4], "11": [1, 6], "ture": 1, "ac": 1, "site": [1, 5], "default": [1, 5], "2020": 1, "07": 1, "time_series_deconfound": 1, "pdf": [1, 5, 6], "12": [1, 6, 11], "nngroup": 1, "quantit": [1, 7], "ux": 1, "13": [1, 6], "new": [1, 2, 6, 8, 10, 11], "seri": [1, 9], "over": [1, 2, 4], "presenc": [1, 6], "hidden": [1, 2, 4], "14": [1, 6], "pubm": 1, "24834204": 1, "handbook": 1, "cochran": 1, "chapter_13": 1, "13_6_2_1_controlling_for_confound": 1, "arxiv": [1, 6], "html": [1, 6], "2410": 1, "20423v1": 1, "17": [1, 6], "proceed": 1, "mlr": 1, "press": 1, "v236": 1, "hatt24a": 1, "anteced": 2, "causal": [2, 4, 5, 8, 11], "preced": [2, 5], "event": [2, 6, 8, 9], "condit": [2, 4, 6, 7, 8, 10], "subsequ": 2, "averag": [2, 9], "differ": [2, 4, 5, 7, 8], "mean": [2, 9, 10], "between": [2, 4, 5, 6, 11], "treat": 2, "untreat": 2, "across": [2, 4, 5, 6], "often": [2, 7], "consid": 2, "elig": 2, "In": [2, 7, 8, 9, 10, 11], "counterfactu": [2, 8], "each": [2, 4, 8, 9, 10, 11], "when": [2, 4, 6, 8, 9, 10], "thei": [2, 4, 5, 10, 11], "mai": [2, 4, 5, 7, 8, 9, 10], "predict": [2, 8, 9], "clinic": [2, 4], "trail": 2, "also": [2, 4, 7, 8, 9, 10, 11], "intent": 2, "per": [2, 9], "protocol": 2, "backtrack": 2, "approach": [2, 6, 7], "reason": 2, "where": [2, 4, 5, 10, 11], "chang": [2, 4, 5, 6, 8], "trace": 2, "backward": 2, "through": [2, 4, 11], "chain": [2, 11], "while": [2, 5], "preserv": 2, "origin": [2, 8], "law": [2, 8, 9], "unlik": [2, 6], "tradit": [2, 6], "intervent": [2, 4, 6, 7, 8], "allow": [2, 8, 11], "both": [2, 4, 7, 8, 10, 11], "downstream": 2, "upstream": 2, "respons": [2, 4, 5], "scenario": [2, 8], "linkag": 2, "caus": [2, 5, 6, 7, 8, 9, 10, 11], "bay": [2, 11], "theorem": [2, 11], "mathemat": [2, 7, 9], "formula": [2, 7], "calcul": [2, 9, 10, 11], "addit": [2, 4, 9], "inform": [2, 8, 11], "It": [2, 7, 8], "u": [2, 8, 10], "updat": [2, 10], "our": [2, 5, 7, 8, 10, 11], "we": [2, 7, 8, 9, 10, 11], "evid": [2, 4, 5, 10, 11], "bia": [2, 9], "systemat": [2, 4], "deviat": 2, "observ": [2, 5, 6, 7, 8, 10], "relationship": [2, 4, 5, 6, 8, 9], "There": [2, 4, 5, 11], "three": [2, 7, 11], "type": [2, 11], "affect": [2, 4, 7, 9], "omit": [2, 4, 9], "occur": [2, 4, 10], "either": [2, 9], "measur": [2, 4, 6, 7, 9, 10, 11], "properli": [2, 10], "select": [2, 6, 10], "peopl": [2, 4, 8, 9, 10, 11], "trial": 2, "out": [2, 4, 8, 9, 10], "result": [2, 4, 10], "collect": [2, 4, 7], "stem": [2, 4], "incorrect": 2, "exposur": [2, 4, 5], "bradford": 2, "hill": 2, "criteria": 2, "nine": 2, "principl": [2, 5], "evalu": [2, 5, 6], "associ": [2, 4, 5, 6, 8], "presum": [2, 5], "discoveri": 2, "process": [2, 4, 6, 7], "without": [2, 4, 6, 7], "reli": [2, 6], "experi": [2, 4, 6, 8], "core": [2, 6], "constraint": [2, 6], "method": [2, 4, 8, 10], "independ": [2, 4, 6, 11], "test": [2, 4, 6, 7, 9, 10, 11], "identifi": [2, 6, 11], "examin": [2, 4, 6], "becom": [2, 4, 5, 6], "other": [2, 6, 7, 8, 10], "graph": [2, 4, 6, 7], "function": [2, 6], "highest": [2, 6, 10], "structur": [2, 6, 7], "specif": [2, 4, 5, 6, 11], "assumpt": [2, 6, 7], "about": [2, 4, 6, 7, 8], "causat": [2, 5, 6, 9], "focus": 2, "what": [2, 7, 8, 9, 10], "would": [2, 7, 8, 10], "have": [2, 4, 5, 7, 8, 9, 10, 11], "A": [2, 4, 5, 7, 8, 11], "map": 2, "parent": 2, "node": [2, 4, 11], "possibl": [2, 8, 9], "argument": [2, 10], "repres": [2, 4, 8, 9], "figur": 2, "one": [2, 4, 5, 8, 10, 11], "thing": [2, 7, 8, 9, 10], "truli": 2, "anoth": [2, 8], "happen": [2, 4, 7, 8], "goe": 2, "beyond": 2, "simpli": [2, 4], "notic": [2, 11], "two": [2, 4, 7, 11], "relat": [2, 8, 9, 11], "tri": 2, "directli": [2, 9, 11], "lead": [2, 4, 7, 9], "collid": [2, 11], "get": [2, 6, 9, 10], "more": [2, 4, 5, 6, 10, 11], "imagin": [2, 8, 10, 11], "point": [2, 11], "which": [2, 4, 7, 8, 9, 10, 11], "need": [2, 5, 6, 7, 8, 9, 10, 11], "can": [2, 4, 6, 7, 8, 9, 10, 11], "actual": [2, 6, 9, 10], "fals": [2, 4, 10, 11], "mess": 2, "up": [2, 4, 8, 10, 11], "your": 2, "As": [2, 11], "sack": 2, "fill": 2, "potato": 2, "carrot": 2, "The": [2, 6, 10, 11], "total": [2, 9], "weight": 2, "ani": [2, 8, 11], "size": [2, 4, 9, 11], "number": 2, "If": [2, 7, 8, 11], "you": [2, 10], "look": [2, 7, 8, 9, 10, 11], "ll": 2, "find": [2, 4, 5], "fewer": 2, "vice": [2, 9, 11], "versa": [2, 9, 11], "artifici": [2, 4, 7], "otherwis": 2, "unrel": 2, "insight": 2, "onli": [2, 4, 6, 7, 9, 10, 11], "appear": [2, 4, 8, 9, 11], "focu": 2, "cate": 2, "impact": 2, "subgroup": 2, "race": 2, "everyon": 2, "whole": [2, 11], "particular": [2, 11], "set": [2, 9, 11], "b": [2, 8, 10, 11], "given": [2, 6, 8, 9, 10, 11], "third": [2, 4], "c": [2, 10, 11], "express": 2, "For": [2, 4, 7, 8, 11], "sea": 2, "drown": 2, "ic": 2, "cream": 2, "sale": 2, "disappear": [2, 4], "weather": [2, 6], "re": 2, "make": [2, 4, 6, 7, 8, 10, 11], "": [2, 4, 7, 8, 9, 10, 11], "them": [2, 4, 8], "might": 2, "think": [2, 7, 8], "try": 2, "yellow": 2, "finger": 2, "nail": 2, "lung": [2, 5], "cancer": [2, 5, 11], "smoke": [2, 5], "so": [2, 10], "account": [2, 4], "order": [2, 10], "avoid": [2, 4, 10], "conclud": 2, "suggest": [2, 8, 9], "hrt": 2, "reduc": [2, 4], "cardiovascular": 2, "risk": [2, 4, 6], "were": [2, 9, 10, 11], "overturn": 2, "signfic": 2, "wa": [2, 9, 10, 11], "women": [2, 11], "less": [2, 4, 11], "deprviv": 2, "take": [2, 4, 10, 11], "lower": [2, 4], "baselin": 2, "failur": 2, "part": [2, 4], "due": [2, 4, 7, 9], "preval": 2, "user": 2, "immort": [2, 4], "becaus": [2, 4, 10], "alreadi": [2, 4], "toler": 2, "befor": [2, 7, 9], "began": 2, "had": [2, 4, 8, 9], "likelihood": [2, 4, 8, 11], "problem": [2, 4, 6, 9], "start": [2, 4, 10], "follow": [2, 4, 9], "healthi": 2, "chosen": 2, "indic": 2, "choic": 2, "hypothet": [2, 8], "under": [2, 4, 7, 10], "deconfound": 2, "overcom": 2, "instrument": [2, 4], "below": [2, 4], "direct": [2, 4, 6, 7, 9, 11], "acycl": [2, 4, 7], "dag": [2, 4], "visual": 2, "tool": 2, "arrow": [2, 4, 9], "alwai": [2, 8, 9, 10], "never": 2, "loop": 2, "roadmap": 2, "educ": 2, "incom": 2, "turn": 2, "back": [2, 9], "bit": 2, "commun": [2, 9], "e": [2, 4, 5, 10, 11], "practic": [2, 6], "assess": [2, 6], "strong": 2, "unmeasur": [2, 6], "invalid": 2, "understand": [2, 5, 6, 7, 8], "robust": 2, "against": [2, 10], "couldn": 2, "t": [2, 4, 11], "larg": 2, "veri": [2, 8], "explain": [2, 5, 11], "awai": [2, 11], "simpl": [2, 9], "ratio": [2, 10], "rr": 2, "produc": [2, 7, 9], "greater": 2, "than": [2, 4, 5, 9, 10], "50": [2, 10, 11], "correspond": [2, 5], "37": 2, "least": [2, 10], "fold": 2, "nullifi": 2, "modif": 2, "vari": 2, "defin": [2, 4], "estimand": [2, 7], "target": [2, 4], "quantiti": 2, "interest": [2, 11], "statist": [2, 4, 6, 11], "numer": 2, "obtain": 2, "exchang": 2, "compar": [2, 4, 10], "all": [2, 5, 6, 8, 10], "aspect": 2, "except": 2, "extern": 2, "valid": [2, 6], "well": 2, "scientif": [2, 5, 9], "appli": [2, 5, 9, 10, 11], "its": [2, 4], "context": 2, "simpler": 2, "term": 2, "discov": [2, 6], "hold": 2, "situat": [2, 8], "intern": 2, "famili": [2, 9, 11], "techniqu": 2, "complex": 2, "particularli": [2, 5], "deal": [2, 7], "especi": 2, "valuabl": [2, 5], "forth": 2, "margin": [2, 10], "nest": 2, "hazard": 2, "hr": 2, "wai": [2, 4, 7, 8, 10, 11], "quickli": 2, "typic": 2, "versu": 2, "reach": [2, 11], "faster": 2, "end": 2, "throughout": 2, "entir": 2, "period": [2, 4], "speed": 2, "rather": [2, 5], "just": [2, 4, 9], "count": 2, "mani": 2, "drug": [2, 6, 7], "therefor": [2, 9, 10], "heterogen": 2, "individu": [2, 4, 9], "tend": [2, 4, 9], "further": 2, "reveal": 2, "smaller": [2, 9], "larger": 2, "surviv": [2, 4], "dure": [2, 4], "certain": [2, 4], "cannot": [2, 4, 7, 8, 11], "being": [2, 4, 6, 7, 10, 11], "advantag": 2, "tea": 2, "crumpet": 2, "dai": [2, 9, 10], "intens": 2, "care": [2, 4], "unit": 2, "icu": 2, "stai": 2, "did": [2, 4, 8, 9], "first": [2, 4], "must": [2, 4, 5, 7, 8, 9, 10], "automat": 2, "better": 2, "rate": [2, 4, 5, 9, 10], "sinc": [2, 11], "di": 2, "could": [2, 7, 9], "incid": [2, 10, 11], "case": [2, 4, 7, 8, 9, 10, 11], "develop": [2, 6, 9, 10], "specifi": 2, "logic": [2, 7], "conclus": [2, 4, 10], "move": 2, "premis": 2, "consequ": 2, "word": [2, 10], "etymolog": 2, "carri": 2, "forward": 2, "fundament": [2, 5, 8], "form": [2, 7], "draw": 2, "avail": 2, "categori": [2, 4], "deduct": 2, "provid": 2, "guarante": 2, "gener": [2, 4, 7, 9, 10], "rule": [2, 5, 9], "made": [2, 7], "induct": 2, "abduct": 2, "seek": [2, 4], "simplest": [2, 11], "most": [2, 10], "explan": [2, 8], "combin": [2, 4, 10], "element": 2, "error": [2, 4, 6, 10], "incomplet": 2, "interact": 2, "joint": 2, "sum": [2, 9], "interfer": 2, "phenomenon": [2, 8], "commonli": 2, "aris": [2, 4], "social": [2, 4], "vaccin": 2, "person": [2, 9, 10, 11], "infect": 2, "Or": [2, 4], "prioritis": 2, "amount": 2, "wait": [2, 11], "itt": 2, "analyz": 2, "accord": 2, "regardless": 2, "intend": [2, 4], "reflect": [2, 4, 6], "real": [2, 4, 6, 10], "life": 2, "analys": [2, 4], "taken": 2, "inher": 2, "efficaci": 2, "strictli": 2, "complet": 2, "confid": [2, 10], "answer": [2, 4, 7, 8, 10], "question": [2, 4, 7, 8, 10], "someth": [2, 7], "els": 2, "confin": 2, "good": 2, "inde": 2, "design": [2, 4, 5, 7], "address": [2, 6], "challeng": [2, 8], "depend": [2, 4, 8, 11], "doe": [2, 8, 9, 11], "blood": 2, "pressur": 2, "instead": 2, "distanc": 2, "nearest": 2, "pharmaci": 2, "live": 2, "closer": [2, 9], "doesn": 2, "invers": [2, 10, 11], "accur": [2, 8], "p": [2, 7, 8, 9, 10], "give": [2, 10], "usual": [2, 10], "normal": [2, 9, 10], "expect": 2, "construct": [2, 10], "indirectli": 2, "iq": 2, "depress": 2, "deriv": [2, 8], "questionnair": 2, "mediat": [2, 11], "li": 2, "along": [2, 9], "pathwai": 2, "pass": [2, 8, 9], "moder": 2, "parametr": 2, "non": [2, 4, 6, 10], "paramet": 2, "onc": 2, "ha": [2, 5, 6, 7, 8, 10, 11], "been": [2, 4, 7, 8, 10, 11], "machin": [2, 8], "learn": [2, 5, 8], "forest": 2, "easili": 2, "meaning": 2, "flexibl": 2, "cope": 2, "lack": 2, "abil": [2, 11], "world": [2, 6, 8, 10], "proport": [2, 4, 10], "record": [2, 4], "drop": [2, 4, 11], "hard": 2, "ascertain": 2, "rct": 2, "should": [2, 5, 7, 8], "robustli": 2, "bad": 2, "simplifi": [2, 7], "singl": 2, "adjust": [2, 4], "subclassif": 2, "rel": 2, "much": [2, 8, 9, 10], "cumul": 2, "fix": [2, 9, 10], "endpoint": 2, "wherea": 2, "instantan": 2, "imperfect": 2, "sampl": [2, 4, 7], "neyman": 2, "extrem": [2, 6], "sick": 2, "exclud": [2, 4], "attrit": [2, 4], "differenti": [2, 4], "loss": 2, "self": [2, 4], "decis": 2, "referr": 2, "shap": 2, "shaplei": 2, "contribut": 2, "final": 2, "input": [2, 7], "output": [2, 7], "equat": [2, 7], "emul": [2, 7], "framework": [2, 5], "begin": 2, "ideal": [2, 7], "strategi": [2, 6], "procedur": 2, "definit": 2, "plan": 2, "note": [3, 10], "broad": 4, "classif": 4, "some": [4, 5, 7, 9], "straddl": 4, "place": [4, 11], "duplic": 4, "skew": 4, "variou": 4, "member": 4, "volunt": 4, "significantli": 4, "don": 4, "respond": 4, "survei": 4, "consciou": 4, "survivor": 4, "success": [4, 9], "ignor": [4, 10, 11], "didn": 4, "remain": [4, 5, 10], "channel": 4, "sever": [4, 6, 7], "ill": 4, "imbal": 4, "cohort": 4, "admiss": 4, "berkson": 4, "hospit": 4, "ones": 4, "former": 4, "sicker": 4, "access": [4, 8], "decreas": [4, 11], "healthcar": [4, 6], "cultur": 4, "socioeconom": 4, "centripet": 4, "clinician": 4, "reput": 4, "attract": 4, "recal": 4, "rememb": 4, "past": 4, "diseas": [4, 5, 6, 10, 11], "statu": 4, "vividli": 4, "misclassif": 4, "categor": 4, "dilut": 4, "hawthorn": 4, "alter": 4, "behaviour": 4, "desir": 4, "believ": [4, 9], "view": 4, "favour": 4, "report": 4, "posit": [4, 10], "neg": 4, "know": [4, 7, 8, 10, 11], "actor": [4, 11], "investig": [4, 5, 9], "knowledg": [4, 5, 7, 8, 10], "belief": [4, 8, 10, 11], "hypothesi": [4, 9, 10], "interpret": [4, 5, 9], "interview": 4, "ask": [4, 7, 8, 10], "drift": 4, "inconsist": 4, "poorli": 4, "calibr": 4, "detect": [4, 6], "extran": 4, "enhanc": 4, "overestim": 4, "underestim": 4, "spuriou": [4, 11], "appar": 4, "exist": [4, 5, 6, 8], "absenc": 4, "despit": 4, "simpson": 4, "paradox": 4, "trend": 4, "revers": 4, "lurk": 4, "obes": 4, "protect": 4, "diabet": 4, "mortal": 4, "improp": 4, "misclassifi": 4, "inflat": 4, "suffici": [4, 6, 7], "long": [4, 11], "enough": [4, 7], "incept": 4, "experienc": 4, "earli": 4, "after": [4, 11], "earlier": 4, "screen": 4, "inaccur": 4, "increas": 4, "even": [4, 8, 11], "natur": [4, 6, 7, 9, 10], "progress": [4, 6], "unchang": 4, "window": 4, "lag": 4, "line": 4, "second": 4, "durat": 4, "medic": 4, "publish": 4, "toward": [4, 9], "signific": 4, "ecolog": 4, "fallaci": 4, "drawn": 4, "aggreg": 4, "robinson": 4, "1950": 4, "found": [4, 9], "state": [4, 10, 11], "higher": 4, "foreign": 4, "born": [4, 9], "resid": 4, "literaci": 4, "howev": [4, 8, 10], "confirm": 4, "tendenc": [4, 9], "support": [4, 5], "pre": 4, "contradictori": 4, "perform": [4, 10], "pure": 4, "chanc": [4, 9, 11], "fail": 4, "relev": [4, 5, 8], "establish": 5, "1965": 5, "sir": 5, "austin": 5, "These": [5, 7], "epidemiolog": 5, "strength": [5, 9, 10], "stronger": 5, "consist": 5, "tempor": 5, "crucial": 5, "criterion": 5, "biolog": 5, "gradient": 5, "dose": 5, "plausibl": 5, "mechan": [5, 9], "coher": 5, "align": 5, "experiment": 5, "analogi": 5, "meant": 5, "rigid": 5, "viewpoint": 5, "guid": 5, "Not": 5, "satisfi": 5, "proven": 5, "notabl": 5, "link": [5, 8, 9, 11], "common": [5, 6, 8, 11], "sens": 5, "strict": 5, "checklist": 5, "evolv": [5, 6], "scienc": [5, 6], "genet": [5, 6, 9], "molecular": 5, "biologi": 5, "advanc": 5, "debat": 5, "current": [5, 7], "practition": 5, "frontiersin": [5, 6], "journal": [5, 6], "neurologi": 5, "3389": [5, 6], "fneur": 5, "2022": 5, "938163": 5, "en": [5, 6], "wikipedia": [5, 6], "wiki": [5, 6], "bradford_hill_criteria": 5, "pmc4589117": 5, "jech": 5, "bmj": 5, "65": 5, "392": 5, "rtih": 5, "26902": 5, "rothman": 5, "1998": 5, "encyclopedia": 5, "biostatist": 5, "pmc8206235": 5, "googl": 5, "polici": 5, "aim": [6, 7], "uncov": 6, "system": 6, "markov": 6, "descend": 6, "faith": 6, "underli": 6, "domain": 6, "optim": 6, "financ": 6, "fraud": 6, "invest": 6, "climat": 6, "driver": 6, "linear": 6, "miss": 6, "high": 6, "dimension": 6, "dataset": 6, "expertis": 6, "field": 6, "continu": 6, "actabl": 6, "ai": 6, "causal_discoveri": 6, "ab": 6, "2407": 6, "08602": 6, "exploratory_causal_analysi": 6, "causalai": 6, "causalen": 6, "resourc": 6, "white": 6, "paper": 6, "leewayhertz": 6, "fgene": 6, "2019": 6, "00524": 6, "towardsdatasci": 6, "6858f9af6dcb": 6, "gi": 6, "bcd6588433fa": 6, "s41598": 6, "020": 6, "59669": 6, "x": [6, 8, 9, 10], "datarefin": 6, "feed": 6, "pywhi": 6, "dowhi": 6, "v0": 6, "example_notebook": 6, "dowhy_causal_discovery_exampl": 6, "wire": 6, "onlinelibrari": 6, "wilei": 6, "1002": 6, "widm": 6, "1449": 6, "youtub": 6, "watch": 6, "v": 6, "6a62uq1ooi4": 6, "2305": 6, "10032": 6, "2412": 6, "01953": 6, "tufdeusjmni": 6, "kth": 6, "diva": 6, "portal": 6, "smash": 6, "diva2": 6, "1720056": 6, "fulltext01": 6, "blog": 6, "18": 6, "19": 6, "stat": 6, "cmu": 6, "edu": 6, "cshalizi": 6, "uada": 6, "lectur": 6, "ch25": 6, "behind": 7, "modern": 7, "comput": [7, 10, 11], "scientist": 7, "lucki": 7, "he": [7, 9], "abl": 7, "virgil": 7, "29": 7, "bc": 7, "work": [7, 8], "parallel": [7, 8], "diagram": [7, 8, 9], "symbol": 7, "languag": 7, "clear": 7, "depict": 7, "qualit": 7, "d": [7, 8, 9, 11], "lifespan": 7, "l": [7, 9, 10], "oper": [7, 8], "signifi": 7, "blueprint": 7, "shown": 7, "abov": [7, 9, 10], "Such": 7, "kind": [7, 11], "come": [7, 9], "queri": 7, "statement": 7, "mimick": 7, "degre": 7, "fit": 7, "compat": 7, "ye": 7, "assum": [7, 10], "z": [7, 8], "uncertainti": 7, "sai": [7, 8, 11], "neglig": 7, "decid": [7, 8], "david": 7, "lewi": 7, "put": 7, "counter": [7, 8], "factual": [7, 8], "heart": 7, "intuit": 7, "alon": 8, "encod": 8, "static": 8, "tell": 8, "act": 8, "bulk": 8, "manipul": 8, "environ": 8, "mental": 8, "involv": 8, "pattern": [8, 9], "One": 8, "write": [8, 10], "go": 8, "outsid": 8, "present": 8, "break": 8, "necessari": 8, "accuraci": 8, "achiev": [8, 11], "rung": 8, "physic": 8, "why": 8, "acquir": 8, "enabl": 8, "swiftli": 8, "correctli": 8, "eas": 8, "compact": 8, "done": 8, "fire": 8, "squad": 8, "But": [8, 9, 10], "itself": 8, "connect": 8, "die": 8, "though": [8, 9, 11], "togeth": 8, "aliv": 8, "dead": 8, "y": 8, "impli": 8, "call": [8, 11], "background": 8, "k": 8, "upon": [8, 10, 11], "casual": 8, "To": [8, 9, 10], "describ": [8, 10, 11], "big": 8, "pearl": 8, "youtu": [8, 10], "7vsiwrasxi": 8, "judea": 8, "ub98c4oud0": 8, "quincunx": 9, "board": 9, "reproduc": 9, "frequenc": [9, 10], "left": 9, "right": [9, 10, 11], "inherit": [9, 11], "previou": 9, "littl": 9, "side": 9, "wider": 9, "add": [9, 10], "layer": 9, "brought": 9, "ball": 9, "centr": 9, "mediocr": 9, "father": [9, 11], "son": 9, "bidirect": 9, "tall": 9, "taller": 9, "next": [9, 11], "wrong": 9, "perhap": 9, "vestig": 9, "saw": 9, "prove": 9, "repetit": 9, "sequenc": 9, "proof": 9, "repeat": 9, "futur": 9, "colour": [9, 11], "patch": 9, "mendelian": 9, "breed": 9, "propos": 9, "development": 9, "womb": 9, "frame": 9, "h": [9, 10], "hereditari": 9, "algebra": 9, "drew": 9, "path": 9, "bred": 9, "42": 9, "highli": 9, "inbr": 9, "92": 9, "gene": [9, 11], "mother": 9, "understood": 9, "power": 9, "coeffici": 9, "multipli": [9, 10], "argu": 9, "hypothesis": 9, "dismiss": 9, "requir": 9, "pup": 9, "grow": 9, "birth": 9, "extra": 9, "gestat": 9, "66g": 9, "heavier": 9, "later": 9, "litter": 9, "growth": 9, "disentangl": 9, "product": 9, "q": 9, "66": 9, "solv": 9, "34g": 9, "teas": 9, "apart": 9, "04_bayesian": 10, "rev": 10, "thoma": 10, "1702": 10, "1761": 10, "geniu": 10, "occurr": 10, "generalis": 10, "raven": 10, "seen": 10, "nobl": 10, "gass": 10, "stabl": 10, "neon": 10, "ga": 10, "hypothes": 10, "check": 10, "fact": 10, "imposs": 10, "whatev": 10, "improb": 10, "truth": 10, "sherlock": 10, "holm": 10, "statquest": 10, "9wcnvr7xw4e": 10, "someon": 10, "love": 10, "candi": 10, "soda": 10, "71": 10, "redund": 10, "short": 10, "With": 10, "frac": 10, "marginalis": 10, "readili": 10, "harder": 10, "pyxnsudsfh4": 10, "area": 10, "pr": 10, "told": 10, "shy": 10, "keep": 10, "tidi": 10, "librarian": 10, "let": [10, 11], "20x": 10, "farmer": 10, "21": 10, "4x": 10, "200": 10, "0190": 10, "0952": 10, "overal": 10, "1143": 10, "167": 10, "24": 10, "100": [10, 11], "sensit": [10, 11], "05": 10, "suppos": 10, "want": 10, "1000": 10, "999": 10, "Of": 10, "51": 10, "0196": 10, "o2l2uv9pdda": 10, "spam": 10, "messag": 10, "lunch": 10, "zero": 10, "matter": 10, "around": 10, "constant": 10, "alpha": 10, "bag": 10, "h3ejcktlvog": 10, "summaris": 10, "class": 10, "log": 10, "ad": [10, 11], "underflow": 10, "too": 10, "low": 10, "cpu": 10, "step": 11, "junction": 11, "shield": 11, "listen": 11, "condition": 11, "program": 11, "instanc": 11, "fork": 11, "shoe": 11, "read": 11, "children": 11, "pearson": 11, "talent": 11, "celebr": 11, "beauti": 11, "level": 11, "diagnost": 11, "breast": 11, "40": 11, "year": 11, "old": 11, "woman": 11, "700": 11, "75": 11, "88": 11, "fp": 11, "27": 11, "73": 11, "flight": 11, "carousel": 11, "plane": 11, "land": 11, "conting": 11, "elaps": 11, "90": 11, "80": 11, "70": 11, "30": 11, "60": 11, "now": 11, "minut": 11, "still": 11, "47": 11, "33": 11, "plot": 11, "curv": 11, "netherland": 11, "partial": 11, "bodi": 11, "airlin": 11, "crash": 11, "buri": 11, "propag": 11, "patern": 11, "allel": 11, "ey": 11, "blue": 11, "cascad": 11, "down": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"graphviz": 0, "plot": 0, "direct": 0, "acycl": 0, "graph": 0, "dag": 0, "thrombolysi": 0, "us": 0, "stroke": 0, "set": 0, "up": 0, "defin": 0, "node": 0, "describ": 0, "edg": 0, "deconfound": 1, "statist": 1, "method": [1, 6], "advanc": 1, "techniqu": 1, "modern": [1, 5], "approach": 1, "glossari": 2, "causal": [3, 6, 7, 9, 10], "infer": [3, 7, 9, 10], "notebook": 3, "type": 4, "bia": 4, "observ": 4, "studi": 4, "select": 4, "inform": 4, "confound": 4, "collid": 4, "time": 4, "relat": 4, "other": 4, "bradford": 5, "hill": 5, "criteria": 5, "The": [5, 7, 8, 9], "nine": 5, "applic": [5, 6], "import": 5, "consider": 5, "citat": 5, "kei": 6, "discoveri": 6, "compon": 6, "challeng": 6, "introduct": 7, "engin": 7, "data": 7, "plain": 7, "english": 7, "ladder": 8, "causat": 8, "three": 8, "level": 8, "mini": 8, "ture": 8, "test": 8, "probabl": [8, 10, 11], "youtub": 8, "from": 9, "buccan": 9, "guinea": 9, "pig": 9, "genesi": 9, "franci": 9, "galton": 9, "karl": 9, "pearson": 9, "sewal": 9, "wright": 9, "A": [9, 10], "work": [9, 10], "exampl": [9, 10, 11], "bay": 10, "induct": 10, "deduct": 10, "theorem": 10, "classif": 10, "likelihood": 10, "anoth": 10, "naiv": 10, "multinomi": 10, "gaussian": 10, "classifi": 10, "bayesian": 11, "network": 11, "condit": 11, "tabl": 11, "lost": 11, "bag": 11, "real": 11, "world": 11}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Graphviz plot of Directed Acyclic Graph (DAG) for thrombolysis use in stroke": [[0, "graphviz-plot-of-directed-acyclic-graph-dag-for-thrombolysis-use-in-stroke"]], "Set up graph": [[0, "set-up-graph"]], "Define nodes": [[0, "define-nodes"]], "Describe edges": [[0, "describe-edges"]], "": [[0, "id1"]], "Deconfounding": [[1, "deconfounding"]], "Statistical Methods": [[1, "statistical-methods"]], "Advanced Techniques": [[1, "advanced-techniques"]], "Modern Approaches": [[1, "modern-approaches"]], "Glossary": [[2, "glossary"]], "Causal Inference Notebook": [[3, "causal-inference-notebook"]], "Types of bias in observational studies": [[4, "types-of-bias-in-observational-studies"]], "Selection bias": [[4, "selection-bias"]], "Information bias": [[4, "information-bias"]], "Confounding": [[4, "confounding"]], "Colliding": [[4, "colliding"]], "Time-Related Bias": [[4, "time-related-bias"]], "Other": [[4, "other"]], "Bradford Hill criteria": [[5, "bradford-hill-criteria"]], "The Nine Criteria": [[5, "the-nine-criteria"]], "Modern Application": [[5, "modern-application"]], "Important Considerations": [[5, "important-considerations"]], "Citations": [[5, "citations"]], "Key causal discovery methods": [[6, "key-causal-discovery-methods"]], "Key Components": [[6, "key-components"]], "Applications": [[6, "applications"]], "Challenges": [[6, "challenges"]], "Introduction": [[7, "introduction"]], "The inference engine": [[7, "the-inference-engine"]], "Data": [[7, "data"]], "Causality in plain English": [[7, "causality-in-plain-english"]], "The ladder of causation": [[8, "the-ladder-of-causation"]], "Three levels of causation": [[8, "three-levels-of-causation"]], "The mini Turing test": [[8, "the-mini-turing-test"]], "Probabilities and causation": [[8, "probabilities-and-causation"]], "YouTube": [[8, "youtube"]], "From Buccaneers to Guinea Pigs: The genesis of Causal Inference": [[9, "from-buccaneers-to-guinea-pigs-the-genesis-of-causal-inference"]], "Francis Galton and Karl Pearson": [[9, "francis-galton-and-karl-pearson"]], "Sewall Wright": [[9, "sewall-wright"]], "A worked example by Wright": [[9, "a-worked-example-by-wright"]], "Bayes and causal inference": [[10, "bayes-and-causal-inference"]], "Induction and deduction": [[10, "induction-and-deduction"]], "Bayes theorem classification": [[10, "bayes-theorem-classification"]], "Bayes theorem": [[10, "bayes-theorem"]], "Probability and likelihood": [[10, "probability-and-likelihood"]], "A worked example": [[10, "a-worked-example"]], "Another worked example": [[10, "another-worked-example"]], "Naive Bayes (Multinomial Naive Bayes)": [[10, "naive-bayes-multinomial-naive-bayes"]], "Gaussian Naive Bayes Classifier": [[10, "gaussian-naive-bayes-classifier"]], "Bayesian networks": [[11, "bayesian-networks"]], "Conditional probabilities tables": [[11, "conditional-probabilities-tables"]], "Lost bag example": [[11, "lost-bag-example"]], "Real world example": [[11, "real-world-example"]]}, "indexentries": {}})