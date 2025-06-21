# Diego's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Three.js. Features a dynamic 3D model viewer and smooth transitions between sections.

## Features

- 3D Model Viewer using Three.js
- Responsive design for all devices
- Animated text typing effect
- Glassmorphism UI design
- Mobile-friendly navigation
- Interactive project cards
- Contact section with direct links

## Tech Stack

- React with TypeScript
- Three.js for 3D rendering
- React Three Fiber/Drei for 3D React components
- React Router for navigation
- CSS with modern features (backdrop-filter, etc.)
- Font Awesome for icons

## Pages

- **Home**: Features a 3D model viewer and animated introduction
- **About**: Personal introduction with hobbies including:
  - Programming
  - FPV Drones
  - Fitness
  - Cars (especially GT3RS)
- **Projects**: Showcase of development work
- **Contact**: Links to GitHub and email

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy



diego-portfolio/
├── src/
│   ├── components/    # Reusable components
│   ├── pages/        # Page components
│   ├── assets/       # Static assets
│   └── App.tsx       # Main app component
└── public/           # Public assets
    ├── model1.glb    # 3D model
    └── pic1.jpg      # Profile picture
```
