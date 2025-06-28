# Thesis Presentation Slides Overview

## "Generalization in Reinforcement Learning with Structural Priors"

This document provides a comprehensive overview of all slides in the thesis presentation web application.

---

## Slide 1: Title Slide
**ID:** `title`  
**Title:** "Generalization in Reinforcement Learning with Structural Priors"

**Content Overview:**
- Main title prominently displayed
- Subtitle: "Master Thesis Research - Statistical Learning Theory for RL Generalization"
- Key question highlighted: *"When an agent is deployed in a new environment, will it still work?"*
- Three domain icons representing:
  - 🧠 Machine Learning Theory
  - 📈 Reinforcement Learning
  - ⚙️ Statistical Analysis
- Visual design: Blue-to-purple gradient background with decorative circles

---

## Slide 2: Real-World Motivation
**ID:** `motivation`  
**Title:** "Real-World Motivation"  
**Subtitle:** "Training on Few, Acting in Many"

**Content Overview:**
- Two practical examples:
  1. **Robotic Assistant**
     - Training: Works perfectly in one apartment
     - Challenge: Moves to a new apartment
     - Question: Will it navigate the new layout?
  
  2. **Autonomous Vehicle**
     - Training: Learns in San Francisco
     - Challenge: Deployed in Tokyo
     - Question: Will it handle different traffic patterns?

- Core challenge visualization: Training → GENERALIZATION GAP → Deployment
- Visual design: Light gradient background with white cards and colored borders

---

## Slide 3: RL Primer
**ID:** `rl-primer`  
**Title:** "What Is Reinforcement Learning? 90-second Primer"

**Content Overview:**
- **Agent ↔ Environment Loop:**
  - Agent: Makes decisions
  - Environment: Responds with state & reward
  
- **Key Vocabulary:**
  - State: Current situation
  - Action: What the agent does
  - Policy: Agent's decision strategy
  - Return: Total reward accumulated

- **Traditional RL Assumption:**
  - 🎯 One Fixed MDP: Agent learns in same environment it will be tested in
  - ⚠️ But Reality Is Different: Environments change, agents need to adapt

---

## Slide 4: Problem Statement
**ID:** `problem-statement`  
**Title:** "Problem Statement: RL with Environment Uncertainty"

**Content Overview:**
- **Three-step process:**
  1. 🎲 Nature Draws: Unknown MDP each episode
  2. 📚 Training: Sample of m MDPs → learn policy
  3. 🧪 Testing: Fresh draw from distribution

- **"Bag of MDPs" Visual:**
  - Training Sample (M₁, M₂, ..., Mₘ) → Learn Policy π → Test on M*

- **Core Question:** How big must **m** be for the learned policy to generalize?

---

## Slide 5: The Epistemic-POMDP Barrier
**ID:** `epistemic-barrier`  
**Title:** "Why Is This Hard? The Epistemic-POMDP Barrier"

**Content Overview:**
- **Partial Observability Problem:**
  - Agent doesn't know which MDP it's in
  - Task identity is latent/hidden
  - Must infer environment from observations
  - Creates partial observability (called "Epistemic-POMDP")

- **Worst-Case Result:**
  - Sample Complexity: **Exponential in H** (H = planning horizon)
  - Intuition: Without structure, agent needs exponentially many examples

- **Key Takeaway:** Without structure, generalization is intractable!

---

## Slide 6: Two Structural Lenses
**ID:** `two-lenses`  
**Title:** "Two Structural Lenses That Rescue Generalization"

**Content Overview:**
- **Uniform Similarity (Bounded Likelihood Ratio):**
  - Intuition: "Environments differ like fonts—look different up close, read the same sentence"
  - Real-world analogy: Different cities, similar traffic rules

- **Decodability (Short Trajectory Reveals Task):**
  - Intuition: "First three notes of a song reveal which song it is"
  - Real-world analogy: Apartment layout clear from entrance

- **Summary Table:**
  - Both achieve Õ(1/√m) generalization rate
  - Methods: Plain ERM vs. Truncated Policies + ERM

---

## Slide 7: Uniform Similarity Details
**ID:** `uniform-similarity`  
**Title:** "Uniform Similarity – Intuition & Result"

**Content Overview:**
- **Everyday Analogy:**
  - 📖 "Environments differ like fonts"
  - Look different up close, but read the same sentence
  - Same underlying structure, different surface appearances
  - Similar trajectory distributions

- **Main Result:**
  - Plain ERM achieves: **Õ(1/√m)** generalization error
  - 🎉 No regularization needed!
  - Key insight: Bounded likelihood ratios → reduced variance → small Rademacher complexity

- **Visual:** Overlapping trajectory distributions between MDPs

---

## Slide 8: Decodability Details
**ID:** `decodability`  
**Title:** "Decodability – Intuition & Result"

**Content Overview:**
- **Musical Analogy:**
  - 🎵 "First three notes reveal the song"
  - Short prefix uniquely identifies the MDP
  - Environments are distinguishable, quick identification possible

- **Truncated Policies:**
  - Explore if MDP not identified
  - Use π*_M if MDP M identified
  - ERM achieves: **Õ(1/√m)** same optimal rate!

- **Flow Chart:** Explore → Decode → Act Optimally

---

## Slide 9: Proof Sketches
**ID:** `proof-sketches`  
**Title:** "Proof Sketches at a Glance"  
**Subtitle:** "How Structure Reduces Complexity"

**Content Overview:**
- **Uniform Similarity:**
  - Key Insight: Reduced variance ⇒ small Rademacher complexity
  - Steps: Bounded likelihood ratios → Control distribution differences → Uniform convergence

- **Decodability:**
  - Key Insight: Policy class shrinks ⇒ small covering number
  - Steps: Truncate policies → Effective hypothesis space reduces → Manageable covering number

- **Comic-Style Visual:** 😰 Without Structure (Exponential) → Add Structure! → 😊 With Structure (Õ(1/√m))

---

## Slide 10: Practical Implications
**ID:** `practical-implications`  
**Title:** "Empirical / Practical Implications"  
**Subtitle:** "When Simple Methods Suffice"

**Content Overview:**
- **Simple ERM Works:**
  - No regularization needed
  - No meta-learning required
  - When structure exists

- **Benchmark Examples:**
  - Procgen: Visual similarity
  - Meta-World: Task decodability

- **Design Advice:**
  - Look for similarity first
  - Check for easy task IDs
  - Structure beats algorithms

- **Decision Framework:**
  1. Analyze Your Environment
  2. Choose Your Approach
  3. Validate Assumptions

---

## Slide 11: Limitations & Future Work
**ID:** `limitations`  
**Title:** "Limitations & Future Work"  
**Subtitle:** "Honest Assessment & Research Directions"

**Content Overview:**
- **Current Limitations:**
  - Training-Environment Exploration: Assume perfect knowledge of training MDPs
  - Exact vs Approximate Structure: Real environments may only approximately satisfy assumptions
  - Finite Horizon: Infinite-horizon case remains open
  - Function Approximation: Neural networks and large state spaces not covered

- **Future Directions:**
  - Combining Assumptions: What if environments are both similar AND decodable?
  - Automatic Detection: Algorithms that detect which structure exists
  - Robustness Analysis: How much can assumptions be violated?
  - Deep RL Extension: Neural networks with structural priors

- **Research Questions:**
  1. Can we develop algorithms that automatically detect structural assumptions?
  2. How to extend to continuous state spaces and neural networks?

---

## Slide 12: Key Takeaways
**ID:** `takeaways`  
**Title:** "Key Take-aways & Discussion Prompts"

**Content Overview:**
- **Main Message:** Structure turns impossibility into Õ(1/√m) learnability

- **Three Key Points:**
  1. **Structure Matters:** Environmental structure often more valuable than algorithmic sophistication
  2. **Simple Can Work:** Plain ERM achieves optimal rates under structural assumptions
  3. **Two Regimes:** Both similarity and distinguishability enable generalization

- **Discussion Questions:**
  1. Which structural regime do you think a self-driving car faces when moving between cities?
  2. How might you design environments to satisfy structural assumptions?

- **Contact Information:** Placeholders for email, paper link, and code repository

---

## Technical Notes

- **Total Slides:** 12
- **Navigation:** Keyboard arrows, click navigation, slide menu
- **Visual Design:** Each slide has distinct color themes and gradients
- **Icons:** Extensive use of Lucide React icons for visual appeal
- **Responsive:** Built with Tailwind CSS for responsive design