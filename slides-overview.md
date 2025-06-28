# Thesis Presentation Slides Overview

## "Generalization in Reinforcement Learning with Structural Priors"

This document provides a comprehensive overview of all slides in the thesis presentation web application.

---

## Slide: Title Slide

**ID:** `title`
**Title:** "Generalization in Reinforcement Learning with Structural Priors"

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

## Slide: Reinforcement Learning Primer

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

## Slide: Problem Statement

**ID:** `problem`
**Title:** "The Generalization Challenge in RL"
**Subtitle:** "A distribution over MDPs"

**Content Overview:**

* Setup: Nature draws hidden MDP from unknown distribution 𝒟
* Learner observes sample of m MDPs
* Learns a policy to minimize expected cost over 𝒟
* Visual: Bag of MDPs → Training sample → Test MDP

---

## Slide: Why Is It Hard?

**ID:** `hardness`
**Title:** "Generalization Is Intractable Without Structure"
**Subtitle:** "The Epistemic-POMDP Barrier"

**Content Overview:**

* Hidden environment identity = partial observability
* Planning becomes POMDP-solving
* Sample complexity may grow exponentially in horizon H

---

## Slide: Structural Assumptions (Roadmap)

**ID:** `roadmap`
**Title:** "Two Structural Lenses for Tractability"
**Subtitle:** "Similarity vs. Identifiability"

**Content Overview:**

| Regime             | Intuition                            | Sample Complexity |
| ------------------ | ------------------------------------ | ----------------- |
| Uniform Similarity | All environments look similar        | 𝒪̃(1/√m)         |
| Decodability       | Short trajectory reveals environment | 𝒪̃(1/√m)         |

---

## Slide: Uniform Similarity

**ID:** `similarity`
**Title:** "Uniform Similarity Assumption"
**Subtitle:** "Environments behave similarly under any policy"

**Content Overview:**

* Likelihood ratio between trajectories bounded by κ
* Intuition: no policy sees wild differences across MDPs
* Result: ERM achieves 𝒪̃(1/√m) generalization
* Visual: overlapping density plots for trajectory distributions

---

## Slide: Sample Complexity under Similarity

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

## Slide: Sample Complexity under Decodability

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

## Slide: Why Shared Dynamics Are Not Enough

**ID:** `counterexample`
**Title:** "When Similarity Fails: A Lower Bound"
**Subtitle:** "Even identical transitions can’t save us"

**Content Overview:**

* Constructed MDP family with shared dynamics but different costs
* No generalization without either assumption
* Sample complexity remains exponential

---

## Slide: Proof Sketch – Uniform Similarity

**ID:** `proof_similarity`
**Title:** "Why ERM Works under Similarity"

**Content Overview:**

* Rewrite excess risk as weighted sum
* Bounded likelihood ratio limits variance
* Uniform convergence via Rademacher complexity

---

## Slide: Proof Sketch – Decodability

**ID:** `proof_decodability`
**Title:** "Why ERM Works under Decodability"

**Content Overview:**

* Truncate policies after $\bar{h}$
* Smaller hypothesis class ⇒ better covering number
* Apply Massart’s lemma + union bound

---

## Slide: Unified Insight

**ID:** `unification`
**Title:** "Two Regimes, One Sample Complexity"
**Subtitle:** "What makes generalization possible?"

**Content Overview:**

* Uniform Similarity: suppresses variance
* Decodability: eliminates epistemic uncertainty
* Both reduce effective policy class size

---

## Slide: Limitations

**ID:** `limitations`
**Title:** "Limitations & Assumptions"

**Content Overview:**

* Idealized: assumes full access to training MDPs
* Real-world: approximate structure, not exact
* Finite horizon + tabular setting only

---

## Slide: Future Work

**ID:** `future`
**Title:** "Future Directions"

**Content Overview:**

* Explore approximate similarity/decodability
* Detect structure automatically
* Extend to function approximation & infinite horizon
* Empirical tests on benchmarks (Meta-World, Procgen)

---

## Slide: Summary & Take-Aways

**ID:** `takeaways`
**Title:** "Key Take-Aways"
**Subtitle:** "When can simple ERM generalize in RL?"

**Content Overview:**

* Structure turns intractability into 𝒪̃(1/√m) learnability
* Two assumptions: similarity or identifiability
* Simple ERM works without regularization
* Invite discussion: How common is structure in real tasks?
