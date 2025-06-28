# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based thesis presentation web app built with Vite. The application presents slides about "Generalization in Reinforcement Learning with Structural Priors" - a master's thesis research on statistical learning theory for RL generalization.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint linting
- `pnpm preview` - Preview production build locally

## Architecture & Structure

### Core Technologies
- **React 19** with JSX syntax (not TypeScript)
- **Vite** for build tooling and development
- **Tailwind CSS v4** for styling with CSS variables
- **Lucide React** for icons
- **shadcn/ui** components in "new-york" style

### File Structure
- `src/App.jsx` - Main application with slide show functionality
- `src/main.jsx` - React app entry point
- `src/components/ui/` - shadcn/ui component library
- `src/lib/utils.js` - Utility functions for component styling
- `src/hooks/` - Custom React hooks

### Key Features
- Interactive slide presentation with navigation
- Keyboard controls (arrow keys for navigation)
- Slide menu with outline
- Responsive design with Tailwind
- Gradient backgrounds and glassmorphism effects

### Slide System
The app contains a predefined array of slide objects in `App.jsx`, each with:
- `id` - unique identifier
- `title` - slide title
- `content` - JSX content with styling

### Package Manager
Uses **pnpm** (version 10.4.1+) as specified in packageManager field.

### Configuration
- ESLint with React plugins and hooks rules
- Vite with React and Tailwind plugins
- Path aliases: `@/` points to `src/`
- shadcn/ui configured for JSX (not TSX)

## Development Notes

- Uses React 19 with StrictMode
- No TypeScript - pure JavaScript/JSX
- Comprehensive UI component library from shadcn/ui
- All styling through Tailwind CSS classes
- Icons from Lucide React library