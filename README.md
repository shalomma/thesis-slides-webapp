# Thesis Slides Web Application

An interactive web-based presentation for the master's thesis **"Generalization in Reinforcement Learning with Structural Priors"**.

## 🎯 Overview

This project is a modern, interactive slide presentation built as a React web application. It explores the theoretical foundations of generalization in reinforcement learning, focusing on when and why simple Empirical Risk Minimization (ERM) can achieve good generalization performance across different environments.

### Key Research Topics Covered

- **Generalization Problem in RL**: Why traditional RL assumes a single environment while deployment requires adaptation to new environments
- **Intractability Results**: Formal proof that generalization is exponentially hard without structural assumptions
- **Two Structural Assumptions**: 
  - **Bounded Likelihood Ratio**: Environments behave similarly under any policy
  - **Decodability**: Short trajectory prefixes can uniquely identify environments
- **Main Results**: Both assumptions enable O(1/√m) sample complexity for ERM

## 🚀 Features

- **Interactive Navigation**: Navigate through slides using arrow keys, clickable buttons, or the slide menu
- **Mathematical Rendering**: LaTeX equations rendered using MathJax for precise mathematical notation
- **Responsive Design**: Built with Tailwind CSS for modern, responsive styling
- **Slide Overview**: Quick navigation menu showing all presentation slides
- **Progress Tracking**: Current slide indicator and total slide count
- **Professional Styling**: Modern UI with gradients, cards, and smooth transitions

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **Mathematical Rendering**: better-react-mathjax 2.3.0
- **Icons**: Lucide React 0.510.0
- **UI Components**: Radix UI primitives
- **Package Manager**: pnpm
- **Deployment**: Vercel-ready configuration

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd thesis-slides-webapp
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Start the development server:**
   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` to view the presentation.

## 🎮 Usage

### Navigation Controls

- **Arrow Keys**: Use left/right arrow keys to navigate between slides
- **Navigation Buttons**: Click the arrow buttons in the bottom-right corner
- **Slide Menu**: Click the hamburger menu (top-left) to see all slides and jump to any slide
- **Progress Indicator**: View current slide number in the bottom center

### Presentation Features

- **Smooth Transitions**: Seamless slide transitions with modern animations
- **Mathematical Formulas**: All equations are properly rendered with MathJax
- **Interactive Elements**: Hover effects and responsive design elements
- **Professional Layout**: Academic presentation styling with clear visual hierarchy

## 📂 Project Structure

```
thesis-slides-webapp/
├── src/
│   ├── components/ui/          # Reusable UI components (Radix UI)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── App.jsx                 # Main presentation component
│   ├── App.css                 # Tailwind CSS configuration
│   ├── index.css               # Global styles
│   └── main.jsx                # React app entry point
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
├── slides-overview.md         # Detailed slide content overview
└── README.md                  # This file
```

## 📊 Slide Content

The presentation contains **29 slides** covering:

1. **Introduction** (Slides 1-6): Introduction to supervised learning, generalization, and RL
2. **Problem Formulation** (Slides 7-11): MDP definitions, epistemic POMDP perspective, and risk measures
3. **Hardness Results** (Slides 12-15): Proof that generalization is intractable without structure
4. **Main Results** (Slides 16-26): Two structural assumptions and their guarantees
5. **Conclusion** (Slides 27-29): Summary, limitations, and key takeaways

### Mathematical Content

The presentation includes formal mathematical definitions and theorems:

- MDP definitions with states 𝒮, actions 𝒜, transitions T, and costs c
- Value functions V_π;M for policy π in environment M
- Population risk L_𝒟(π) and empirical risk L_ℳ(π)
- Sample complexity bounds O(H³κ²log(|S||A|)/ε²)
- Formal proofs using Rademacher complexity and uniform convergence

## 🔧 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run linting
pnpm lint

# Preview production build
pnpm preview

# Vercel build command
pnpm vercel-build
```

### Key Dependencies

- **React**: Core framework for building the interactive presentation
- **MathJax**: Renders LaTeX mathematical notation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Modern icon library
- **Radix UI**: Accessible, unstyled UI primitives
- **Vite**: Fast build tool and development server

### Customization

To modify the presentation content:

1. **Edit slides**: Modify the `slides` array in `src/App.jsx`
2. **Update styling**: Customize Tailwind classes or modify `src/App.css`
3. **Add new components**: Create reusable components in `src/components/ui/`
4. **Mathematical content**: Use MathJax syntax for equations: `<MathJax>{"\\\\( \\\\text{your formula} \\\\)"}</MathJax>`

## 🚀 Deployment

The project is configured for deployment on Vercel:

1. **Automatic deployment**: Connect your GitHub repository to Vercel
2. **Manual deployment**: Run `pnpm build` and upload the `dist/` folder
3. **Vercel CLI**: Use `vercel` command for CLI deployment

### Build Configuration

- **Vite build**: Optimized production builds with code splitting
- **Vercel config**: Configured in `vercel.json` for proper routing
- **Package manager**: Uses pnpm with lockfile for consistent dependencies

## 📄 License

This project is part of a master's thesis research and is intended for academic and educational purposes.

## 🤝 Contributing

This is a thesis presentation project. For questions or suggestions about the research content, please contact the author.

## 📚 Research Context

This presentation is based on research in **Statistical Learning Theory for Reinforcement Learning**, specifically focusing on:

- When simple learning algorithms can generalize across different environments
- The role of structural assumptions in making generalization tractable
- Theoretical guarantees for Empirical Risk Minimization in RL settings
- Connections between RL generalization and classical statistical learning theory

The work builds upon and extends previous research in multi-environment RL, transfer learning, and statistical learning theory.
