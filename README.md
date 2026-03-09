# Cultural Design Intelligence Platform (CDIP)

A modern web application that transforms brand data into structured cultural performance insights, turning narrative into measurable strategy.

## Overview

CDIP is a comprehensive platform designed to help brands understand their cultural resonance and market positioning. It combines cultural analysis with commercial intelligence to provide actionable insights for brand strategy and optimization.

## Features

- **Landing Page**: Beautiful hero section with navigation to onboarding and dashboard
- **Onboarding Flow**: Guided setup for brand data collection
- **Intelligence Dashboard**: Comprehensive cultural resonance and market alignment analysis
  - Brand Overview with key metrics
  - Cultural Resonance Score visualization
  - Market Alignment Chart with interactive data
  - Strategic recommendations
- **Data Layer**: Backend data management and visualization
- **Admin Panel**: Administrative controls for system management
- **Responsive Design**: Fully responsive UI with Tailwind CSS
- **Animations**: Smooth transitions and micro-interactions with Framer Motion
- **UI Components**: Pre-built component library using Shadcn UI

## Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **UI Components**: Shadcn UI (Radix UI primitives)
- **Routing**: React Router
- **State Management**: TanStack React Query
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: Bun
- **Testing**: Vitest + Playwright
- **Linting**: ESLint
- **Type Checking**: TypeScript

## Project Structure

```
src/
├── components/          # React components
│   ├── MarketAlignmentChart.tsx
│   ├── NavLink.tsx
│   └── ui/             # Shadcn UI components library
├── pages/              # Route pages
│   ├── Landing.tsx     # Landing page
│   ├── Onboarding.tsx  # Brand onboarding flow
│   ├── Dashboard.tsx   # Intelligence dashboard
│   ├── DataLayer.tsx   # Data management
│   ├── Admin.tsx       # Admin panel
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── test/               # Test files
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── styles/             # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cultural-insight-hub
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun run dev
```

The application will be available at `http://localhost:8080`

## Available Scripts

- `bun run dev` - Start development server with HMR
- `bun run build` - Build for production
- `bun run build:dev` - Build for development mode
- `bun run preview` - Preview production build locally
- `bun run lint` - Run ESLint
- `bun run test` - Run tests once
- `bun run test:watch` - Run tests in watch mode

## Routing

The application uses React Router with the following routes:

- `/` - Landing page
- `/onboarding` - Brand onboarding flow
- `/dashboard` - Intelligence dashboard with cultural insights
- `/data-layer` - Data management and visualization
- `/admin` - Admin panel
- `*` - 404 Not Found page

## Key Components

### MarketAlignmentChart
Interactive chart component for visualizing market positioning and cultural alignment metrics.

### NavLink
Navigation link component for consistent routing and styling.

### UI Components
Pre-built accessible components from Shadcn UI including:
- Buttons, Cards, Dialogs
- Forms and Input controls
- Tables, Tabs, Accordions
- Charts and Visualizations
- And many more...

## Development

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Use absolute imports with `@` alias

### Component Development
1. Create components in `src/components/`
2. Use Shadcn UI components for consistent styling
3. Apply Framer Motion for animations
4. Ensure responsive design with Tailwind CSS

### Testing
Write tests for critical functionality:
```bash
bun run test:watch
```

Use Vitest for unit tests and Playwright for E2E tests.

## Configuration Files

- `vite.config.ts` - Vite configuration with React and path aliases
- `tailwind.config.ts` - Tailwind CSS customization
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint rules
- `vitest.config.ts` - Vitest configuration
- `playwright.config.ts` - Playwright E2E test configuration

## Performance Optimizations

- Code splitting with Vite
- Image optimization
- CSS optimization with Tailwind
- Query caching with React Query
- Lazy loading of routes

## Browser Support

- Modern browsers supporting ES2020+
- Chrome, Firefox, Safari, Edge (latest versions)

## License

[Add your license information here]

## Contributing

[Add contribution guidelines here]

## Support

For issues and questions, please [add support contact information]

---

© 2026 Cultural Design Intelligence Platform
