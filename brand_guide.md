# LearnAI Brand Guide

This document defines the visual identity and design system for LearnAI. It ensures consistency across all screens, modes (light/dark), and device sizes.

## 1. Vision & Aesthetics
- **Core Aesthetic**: High-contrast, premium glassmorphism.
- **Vibe**: Sophisticated, intelligent, and vibrant.
- **Style**: Soft gradients, rounded corners (radius), and depth through layered shadows.

## 2. Color Palette (Dynamic Variables)

All colors are controlled via CSS variables and support both Light and Dark modes.

### 2.1. Brand Colors
| Name | Light Hex | Dark Hex | Purpose |
| :--- | :--- | :--- | :--- |
| Primary | `#7c3aed` | `#818cf8` | Main CTA, active states, key branding |
| Accent | `#0891b2` | `#fbbf24` | Gems/XP, secondary highlights, Rank |
| Success | `#059669` | `#34d399` | Correct answers, progress completion |
| Error | `#dc2626` | `#f87171` | Errors, incorrect answers, logout |
| Streak | `#ea580c` | `#fb923c` | Streak fire icon and count |

### 2.2. Backgrounds & Surfaces
| Name | Light | Dark | Purpose |
| :--- | :--- | :--- | :--- |
| Page BG | Gradient (Slate-50 -> Slate-200) | Gradient (Slate-900 -> Slate-800) | Main body background |
| Surface (Card) | `rgba(255, 255, 255, 0.95)` | `rgba(15, 23, 42, 0.85)` | Cards, panels, modals |
| Border | `rgba(15, 23, 42, 0.1)` | `rgba(255, 255, 255, 0.1)` | Card outlines, dividers |

### 2.3. Typography Colors
| Name | Light Hex | Dark Hex | Purpose |
| :--- | :--- | :--- | :--- |
| Text Main | `#0f172a` | `#f8fafc` | Headings, body text |
| Text Muted | `#475569` | `#94a3b8` | Subtitles, labels, info text |

## 3. RGB Variable Support
To maintain consistent transparency across themes, RGB variables are provided for high-alpha usage:
- `--primary-rgb`
- `--accent-rgb`
- `--success-rgb`
- `--error-rgb`

Example: `background: rgba(var(--primary-rgb), 0.1);`

## 4. Typography
- **Headings**: `Outfit`, sans-serif (800 for H1, 700 for others).
- **Body**: `Inter`, sans-serif (400 Regular, 600 Semi-bold for highlights).
- **Icon Font**: Material Symbols Rounded.

## 5. Spacing & Radius
- **XS**: `0.5rem` (8px)
- **S**: `1rem` (16px)
- **M**: `1.5rem` (24px)
- **L**: `2rem` (32px)
- **Radius S**: `12px` (Small buttons/inputs)
- **Radius M**: `24px` (Main cards/buttons)
- **Radius L**: `32px` (Large sections/containers/modals)

## 6. Layout & Responsiveness
### 6.1. Desktop (>= 1024px)
- **Layout**: 2-Column Grid (30% Sidebar, 70% Main).
- **Sidebar (Left Panel)**: Uses a persistent **Rich Dark Blue Gradient** (`#1e3a8a` to `#172554`) for a premium "always-dark" look, with forced white text accessibility.
- **Sidebar Features**: Persistent navigation, user stats, AI insights.
- **Header**: Minimalist, showing only essential info.

### 6.2. Mobile (< 1024px)
- **Header**: Full-width with back navigation.
- **Bottom Navigation**: Persistent `.mobile-nav` bar providing access to Home, Leaderboard, and Settings.
- **Sidebar**: Hidden from layout, features moved to Bottom Nav and Modals.
- **Content**: Single column with increased padding and optimized font sizes.

## 7. Accessibility Goal
- **Contrast**: All Text-to-BG ratios target WCAG AA (4.5:1).
- **Touch Targets**: Minimum 44x44px for all interactive elements.
- **Feedback**: Immediate visual confirmation for correct/incorrect actions.
