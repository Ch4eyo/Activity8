# Chatroom App - Modern UI Version

## Overview
This is a modern, sleek version of the chatroom application with the same functionality as the original but with a completely different UI design.

## UI Design Differences

### Color Scheme
- **Original**: Retro blue/purple (Minecraft-style)
- **John's Version**: Modern teal/purple gradient

### Typography
- **Original**: 'Press Start 2P' (pixel/retro font)
- **John's Version**: 'Inter' (modern sans-serif)

### Visual Style
- **Original**:
  - Sharp corners (5px border-radius)
  - Pixelated, blocky design
  - Retro gaming aesthetic
  - Simple color blocks

- **John's Version**:
  - Smooth, rounded corners (12-50px border-radius)
  - Gradient backgrounds
  - Modern glassmorphism effects
  - Subtle shadows and hover animations

### Component Styling

#### Header
- **Original**: Solid color with retro font
- **John's**: Gradient background (teal to purple) with modern typography

#### Messages
- **Original**: Basic bubbles with simple gradients
- **John's**: Smooth rounded bubbles with shadows and fade-up animations

#### Buttons
- **Original**: Pixel-style buttons with simple hover effects
- **John's**: Pill-shaped buttons with gradients, shadows, and smooth transitions

#### Room List
- **Original**: Basic list with solid colors
- **John's**: Gradient hover effects and slide-in animations

### Vanta Background
- **Original**: Blue net effect (#0000f0 dark, #0077ff light)
- **John's**: Teal/Purple net effect (#14b8a6 dark, #8b5cf6 light)

## Setup Instructions

### Backend
\\\ash
cd backend
npm install
npm run start:dev
\\\

### Frontend
\\\ash
cd frontend
npm install
npm run dev
\\\

## Features
- Real-time chat messaging
- Multiple chat rooms
- User authentication (username-based)
- Dark/Light mode toggle
- Typing indicators
- Persistent user sessions
- Animated 3D background

## Tech Stack
- Frontend: React + Vite
- Backend: NestJS
- Database: SQLite
- Real-time: Socket.IO
- 3D Effects: Vanta.js + Three.js

## Color Palette

### Light Mode
- Primary: #14b8a6 (Teal)
- Secondary: #8b5cf6 (Purple)
- Background: #fafafa
- Surface: #ffffff
- Text: #1f2937

### Dark Mode  
- Primary: #5eead4 (Light Teal)
- Secondary: #a78bfa (Light Purple)
- Background: #0f0f18
- Surface: #1e1e2e
- Text: #e0e0e0
