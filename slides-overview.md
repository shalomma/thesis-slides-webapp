# Thesis Presentation Slides Overview

## "Generalization in Reinforcement Learning with Structural Priors"

This document provides a comprehensive overview of all slides in the thesis presentation web application.

---

## Slide: Generalization in Reinforcement Learning with Structural Priors

**ID:** `title`
**Title:** "Generalization in Reinforcement Learning with Structural Priors"
**Subtitle:** "Master Thesis Research - Statistical Learning Theory for RL Generalization"

**Content Overview:**

* Main title prominently displayed
* Subtitle: "Master Thesis Research - Statistical Learning Theory for RL Generalization"
* Key question highlighted: *"When an agent is deployed in a new environment, will it still work?"*
* Three domain icons representing:

  * 🧠 Machine Learning Theory
  * 📈 Reinforcement Learning
  * ⚙️ Statistical Analysis
* Visual design: Blue-to-purple gradient background with decorative circles

---

## Slide: Agenda

**ID:** `agenda`
**Title:** "Agenda"
**Subtitle:** "Our journey through RL generalization"

**Content Overview:**

* A list of six key topics for the presentation:
  * Introduction & Motivation
  * The Generalization Problem
  * Intractability Without Structure
  * Two Roads to Tractability
  * Main Results & Key Insights
  * Conclusion & Future Work
* Each topic is accompanied by a short descriptive question or statement.
* Visual: A clean, light-gray gradient background with a prominent centered card listing the agenda items with checkmark icons.

---

## Slide: How Supervised Learning Works

**ID:** `supervised_learning_intro`
**Title:** "How Supervised Learning Works"
**Subtitle:** "Learning from labeled examples"

**Content Overview:**

* **Problem:** Learn a function from inputs to known outputs
  Example:

  $$
  \text{Image} \rightarrow \text{"cat"} \quad\text{Image} \rightarrow \text{"dog"}
  $$

* **Training data:** (x, y) pairs where y is given

* **Objective:**
  Learn $f(x) \approx y$ that performs well on **new, unseen x**

* **Common applications:**

  * Image classification
  * Spam detection
  * Medical diagnosis

* **Visual:**
  Labeled image dataset → ML model → Predictions on new image

---

## Slide: What Does It Mean to Generalize?

**ID:** `generalization_intro`
**Title:** "What Does It Mean to Generalize?"
**Subtitle:** "From memorization to real-world success"

**Content Overview:**

* After training, will the model **work on new data**?

* **Good generalization:**

  * Captures patterns, not just specific examples

* **Poor generalization (overfitting):**

  * Memorizes training data, fails on new inputs

* **Analogy:**
  *Cramming for an exam vs. truly understanding the material*

* **Visual:**

  * Side-by-side: Train set → model → Success on new data vs. Failure due to overfitting

---

## Slide: How Do Machines Learn to Act?

**ID:** `agent_learning_intro`
**Title:** "How Do Machines Learn to Act?"
**Subtitle:** "Learning through trial and error"

**Content Overview:**

* **Reinforcement Learning (RL):**

  * No labels — only experience
  * Feedback comes in the form of **reward or cost**

* **Key idea:**
  Learn a **policy**: how to act in any given situation

* **Examples:**

  * A robot that learns to walk
  * An agent playing chess
  * A factory arm optimizing its motions

* **Visual:**
  Agent–Environment feedback loop (State → Action → Reward → Next State)

---

## Slide: A Day in the Life of an RL Agent

**ID:** `rl_lifecycle`
**Title:** "A Day in the Life of an RL Agent"
**Subtitle:** "From exploration to policy improvement"

**Content Overview:**

* Timeline view:

  1. Agent observes state
  2. Chooses action
  3. Receives feedback (reward/cost)
  4. Updates its policy

* **Goal:** Learn to choose actions that lead to **low cost** (or high reward)

* **Visual:**
  Horizontal diagram with cartoon agent acting, receiving signals, updating behavior

---

## Slide: Why Generalization Matters in RL

**ID:** `generalization_rl_intro`
**Title:** "Why Generalization Matters in RL"
**Subtitle:** "Training in one world, acting in another"

**Content Overview:**

* Train in a **few simulated environments**, deploy in the **real world**

* **Examples:**

  * Trained robot → new home layout
  * Car trained in SF → deployed in Tokyo
  * Game agent trained on level A → plays level B

* **Key challenge:**
  The test environment **is not** the same as the training ones

* **Question:**
  *"Will the agent succeed anyway?"*

* **Visual:**
  Training MDPs → Generalization Gap → New MDP

---

## Slide: What is Reinforcement Learning?

**ID:** `rl_primer`
**Title:** "What is Reinforcement Learning?"
**Subtitle:** "Learning through interaction with an environment"

**Content Overview:**

* **Agent ↔ Environment Loop:**

  * State
  * Action
  * Reward (or Cost)
  * Next State

* **Key terms:**

  * **Policy π**: maps states to actions
  * **Return**: total reward or cost over time
  * **Objective**: Find a policy that **minimizes expected cost** over time

* **Classic RL assumption:**
  Single known environment (MDP) used for training and deployment

* **Visual:**
  RL loop with state, action, reward/cost arrows + policy box

---

## Slide: What Is an MDP?

**ID:** `mdp_definition`
**Title:** "What Is a Markov Decision Process (MDP)?"
**Subtitle:** "A simple model of sequential decision-making"

**Content Overview:**

* An **MDP** models an environment where an agent makes a sequence of decisions over **H steps**

* Defined by 6 components:

  1. $\mathcal{S}$: Set of **states** (what the agent sees)
  2. $\mathcal{A}$: Set of **actions** (what the agent can do)
  3. $H$: **Horizon** — the number of time steps (finite)
  4. $\mu_1$: Initial **state distribution**
  5. $T_h(s' \mid s, a)$: Transition rule — how the world evolves
  6. $c_h(s, a)$: Cost function — how bad an action is

* **Agent's interaction:**

  1. Start in state $s_1 \sim \mu_1$
  2. For each step $h = 1, \dots, H$:

     * See state $s_h$
     * Choose action $a_h \in \mathcal{A}$
     * Pay cost $c_h(s_h, a_h)$
     * Move to new state $s_{h+1} \sim T_h(\cdot \mid s_h, a_h)$

* Visual:
  Flow diagram or timeline:

  $$
  s_1 \xrightarrow{a_1, c_1} s_2 \xrightarrow{a_2, c_2} \dots \xrightarrow{a_H, c_H} s_{H+1}
  $$

* **Value function:**
  Given this setup, the cost of a policy $\pi$ in environment $M$ is defined as
  $$
  V_{\pi;M} = \mathbb{E}_{\pi;M}\!\left[\sum_{h=1}^{H} c_{M}(s_{h}, a_{h})\right],
  $$
  where the expectation is taken over the trajectory distribution induced by the environment dynamics $T_M$ and the randomness in the policy's action choices, and $c_M$ denotes the cost function at $M$.

---

## Slide: The Generalization Challenge in RL

**ID:** `problem`
**Title:** "The Generalization Challenge in RL"
**Subtitle:** "The Learning Problem Setup"

**Content Overview:**

* Setup: Nature draws hidden MDP from unknown distribution 𝒟
* Learner observes sample of m MDPs
* Learns a policy to minimize expected cost over 𝒟
* Visual: Bag of MDPs → Training sample → Test MDP

---

## Slide: The Epistemic POMDP Perspective

**ID:** `epistemic_pomdp`
**Title:** "The Epistemic POMDP Perspective"
**Subtitle:** "Planning under hidden environment identity"

**Content Overview:**

* Core Idea: The problem is framed as a Partially Observable Markov Decision Process (POMDP) because the agent doesn't know which environment it's in.
* State Space: The latent state is enlarged to `(M, s_h)`, where `M` is the unknown environment identity.
* Agent's View: The agent only observes the state `s_h` and the cost, not `M`.
* Implication: Generalization is equivalent to planning in a partially observable space.
* Visual Analogy: A diagram shows that `M` is hidden while the state rollout `s_1 -> s_2 -> ...` is observable.

---

## Slide: Measuring Performance: Risk and Empirical Risk

**ID:** `rl_risk`
**Title:** "Measuring Performance: Risk and Empirical Risk"
**Subtitle:** "Expected cost under environment uncertainty"

**Content Overview:**

* Defines two key performance metrics:
  1. **Population Risk (`L_D(pi)`):** The true expected cost of a policy over the entire unknown distribution of environments.
  2. **Empirical Risk (`L_M(pi)`):** The average cost of a policy on the given sample of training environments.
* Presents the formal definition of an **ε-suboptimal** policy guarantee.
* Poses the central question: How large must the training set size `m` be to guarantee low population risk?

---

## Slide: Generalization Is Intractable Without Structure

**ID:** `hardness`
**Title:** "Generalization Is Intractable Without Structure"
**Subtitle:** "The Epistemic-POMDP Barrier"

**Content Overview:**

* Hidden environment identity = partial observability
* Planning becomes POMDP-solving
* Sample complexity may grow exponentially in horizon H

---

## Slide: Construction of a Hard Instance

**ID:** `env_family`
**Title:** "Construction of a Hard Instance"
**Subtitle:** "Same dynamics, exponentially many hidden cost masks"

**Content Overview:**

* Describes the construction of a "hard" family of environments used to prove the lower bound.
* **Shared Properties:** All environments share the same state space, action space, and transition dynamics.
* **Varying Property:** Costs are different. Each environment is associated with a unique binary mask `alpha` that determines costs, but the final-step cost depends on an unknown function `f(alpha)`.
* **Result:** This creates an exponentially large number of environments (`2^(H-1)`) that are difficult to distinguish.

---

## Slide: Proof Outline: Why Generalization Fails

**ID:** `proof_outline`
**Title:** "Proof Outline: Why Generalization Fails"
**Subtitle:** "Even with shared dynamics, cost uncertainty breaks ERM"

**Content Overview:**

* A step-by-step argument for why generalization fails in the constructed hard instance:
  1. **Unseen Masks:** With a small sample `m`, most cost masks `alpha` remain unseen.
  2. **Learner's Guess:** For an unseen mask, the learner has to guess the final action, leading to a high probability of error.
  3. **Risk Gap:** This creates a significant gap between the learner's expected cost and the optimal cost (which is zero).
  4. **Probability Bound:** Markov's inequality is used to show this implies a high probability of failure, proving exponential sample complexity is required.

---

## Slide: Two Structural Lenses for Tractability

**ID:** `roadmap`
**Title:** "Two Structural Lenses for Tractability"
**Subtitle:** "Similarity vs. Identifiability"

**Content Overview:**

| Regime             | Intuition                            | Sample Complexity |
| ------------------ | ------------------------------------ | ----------------- |
| Bounded Likelihood Ratio | All environments look similar        | 𝒪̃(1/√m)         |
| Decodability       | Short trajectory reveals environment | 𝒪̃(1/√m)         |

---

## Slide: Bounded Likelihood Ratio Assumption

**ID:** `similarity`
**Title:** "Bounded Likelihood Ratio Assumption"
**Subtitle:** "Environments behave similarly under any policy"

**Content Overview:**

* Likelihood ratio between trajectories bounded by κ

* **Previous Work:** Tamar et al. (2022) introduced this assumption
* **Their Result:** Regularized ERM achieves 𝒪̃(1/m^{1/4}) sample complexity
* **Our Improvement:** Unregularized ERM achieves 𝒪̃(1/√m) generalization

* Intuition: no policy sees wild differences across MDPs
* Analysis reveals assumption enforces shared cost structure
* Visual: overlapping density plots for trajectory distributions

---

## Slide: Formal Guarantee: Bounded Likelihood Ratio

**ID:** `similarity_bound`
**Title:** "Formal Guarantee: Bounded Likelihood Ratio"
**Subtitle:** "Generalization bound for plain ERM"

**Content Overview:**

* Key result:

  $$
  m = O(H^3 \kappa^2 \log(|S||A|)/\epsilon^2)
  $$
* No regularization needed
* Simpler policies suffice due to low trajectory variance

---

## Slide: Why ERM Works under Similarity

**ID:** `proof_similarity`
**Title:** "Why ERM Works under Similarity"
**Subtitle:** "Proof Sketch – Bounded Likelihood Ratio"

**Content Overview:**

* Rewrite excess risk as weighted sum
* Bounded likelihood ratio limits variance
* Uniform convergence via Rademacher complexity

---

## Slide: Decodability Assumption

**ID:** `decodability`
**Title:** "Decodability Assumption"
**Subtitle:** "Identify the environment early"

**Content Overview:**

* Short trajectory prefix uniquely identifies MDP
* Practical analogy: signature in early states
* Policy can switch to optimal control once MDP is known
* Result: ERM achieves 𝒪̃(1/√m) generalization

---

## Slide: Formal Guarantee: Decodability

**ID:** `decodability_bound`
**Title:** "Formal Guarantee: Decodability"
**Subtitle:** "Truncated policy class enables fast convergence"

**Content Overview:**

* Key result:

  $$
  m = O\left( H^2 (|S||A||C|)^{2\bar h} \log |A| / \epsilon^2 \right)
  $$
* Complexity grows with prefix length $\bar{h}$
* Identifiability reduces class size

---

## Slide: Why ERM Works under Decodability

**ID:** `proof_decodability`
**Title:** "Why ERM Works under Decodability"
**Subtitle:** "Proof Sketch – Decodability"

**Content Overview:**

* Truncate policies after $\bar{h}$
* Smaller hypothesis class ⇒ better covering number
* Apply Massart's lemma + union bound

---

## Slide: Summary: Two Paths to Tractable Generalization

**ID:** `unification`
**Title:** "Summary: Two Paths to Tractable Generalization"
**Subtitle:** "Both roads lead to a simpler policy search problem."

**Content Overview:**

* Bounded Likelihood Ratio: suppresses variance
* Decodability: eliminates epistemic uncertainty
* Both reduce effective policy class size

---

## Slide: Limitations & Assumptions

**ID:** `limitations`
**Title:** "Limitations & Assumptions"
**Subtitle:** "Honest assessment of current approach"

**Content Overview:**

* Idealized: assumes full access to training MDPs
* Real-world: approximate structure, not exact
* Finite horizon + tabular setting only

---

## Slide: Future Directions

**ID:** `future`
**Title:** "Future Directions"
**Subtitle:** "Exciting research opportunities ahead"

**Content Overview:**

* Explore approximate similarity/decodability
* Detect structure automatically
* Extend to function approximation & infinite horizon
* Empirical tests on benchmarks (Meta-World, Procgen)

---

## Slide: Key Take-Aways

**ID:** `takeaways`
**Title:** "Key Take-Aways"
**Subtitle:** "When can simple ERM generalize in RL?"

**Content Overview:**

* Structure turns intractability into 𝒪̃(1/√m) learnability
* Two assumptions: similarity or identifiability
* Simple ERM works without regularization
* Invite discussion: How common is structure in real tasks?
