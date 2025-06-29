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

## Slide: Real-World Motivation

**ID:** `motivation`
**Title:** "Real-World Motivation"
**Subtitle:** "Training on Few, Acting in Many"

**Content Overview:**

* Two practical examples:

  1. **Robotic Assistant**

     * Training: One apartment
     * Deployment: New layout
     * Challenge: Navigation robustness

  2. **Autonomous Vehicle**

     * Training: San Francisco
     * Deployment: Tokyo
     * Challenge: Generalize to new traffic dynamics

* Illustration of the generalization gap

* Visual: Light gradient with white cards and icons (🏠, 🚗, 🌐)

---

## Slide: What is Reinforcement Learning?

**ID:** `rl_primer`
**Title:** "What is Reinforcement Learning?"
**Subtitle:** "Learning through interaction with an environment"

**Content Overview:**

* RL loop: Agent ↔ Environment
* Key terms:

  * Policy π
  * Reward / cost
  * Return
* Single MDP assumption in classical RL
* Visual: RL diagram with state-action arrows

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
| Uniform Similarity | All environments look similar        | 𝒪̃(1/√m)         |
| Decodability       | Short trajectory reveals environment | 𝒪̃(1/√m)         |

---

## Slide: Uniform Similarity Assumption

**ID:** `similarity`
**Title:** "Uniform Similarity Assumption"
**Subtitle:** "Environments behave similarly under any policy"

**Content Overview:**

* Likelihood ratio between trajectories bounded by κ
* Intuition: no policy sees wild differences across MDPs
* Result: ERM achieves 𝒪̃(1/√m) generalization
* Visual: overlapping density plots for trajectory distributions

---

## Slide: Formal Guarantee: Uniform Similarity

**ID:** `similarity_bound`
**Title:** "Formal Guarantee: Uniform Similarity"
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
**Subtitle:** "Proof Sketch – Uniform Similarity"

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

* Uniform Similarity: suppresses variance
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
