# Source Code Structure

This directory contains a professionally modularized frontend codebase following best practices for scalability and maintainability.

## Directory Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (Header, Footer, Brand, etc.)
│   ├── layout/         # Layout components (SiteShell)
│   └── ui/             # UI library components (shadcn/ui)
├── sections/           # Page sections organized by page
│   ├── home/          # Home page sections
│   └── shared/        # Shared sections (PageHero, CtaBand, etc.)
├── pages/              # Page component implementations
├── routes/             # TanStack Router route definitions
├── data/               # Data files and constants
├── lib/                # Utility functions and helpers
├── hooks/              # Custom React hooks
├── assets/             # Static assets (images, etc.)
└── styles.css          # Global styles
```

## Key Principles

1. **Separation of Concerns**: Routes only define metadata and import page components
2. **Component Modularity**: Components are organized by function (common, layout, sections)
3. **Data Organization**: Static data is extracted into dedicated data files
4. **Page Composition**: Pages compose sections to build complete views
5. **Clean Imports**: Clear import paths using @ alias for src directory

## Component Organization

### Common Components (`components/common/`)
- Brand, Header, Footer, Breadcrumbs, ArrowLink
- Shared across all pages

### Layout Components (`components/layout/`)
- SiteShell: Main layout wrapper
- Manages header, footer, and page structure

### Sections (`sections/`)
- **home/**: Hero, Services, Equipment, etc.
- **shared/**: PageHero, CtaBand, SectionHeading
- Reusable page building blocks

### Pages (`pages/`)
- Complete page implementations
- Compose sections to create full pages
- HomePage, AboutPage, ServicesPage, etc.

### Routes (`routes/`)
- Define route configuration
- SEO metadata
- Import and render page components

## Data Files (`data/`)
- site-data.ts: General site data (images, navigation, services, equipment)
- quote-data.ts: Quote form options
- about-data.ts: About page data
- safety-data.ts: Safety practices and documentation
- insights-data.ts: Articles data
- services-data.ts: Service details

## Benefits

- **Maintainability**: Easy to locate and update specific components
- **Scalability**: Clear structure for adding new features
- **Reusability**: Components and sections can be easily reused
- **Team Collaboration**: Clear boundaries make parallel development easier
- **Testing**: Modular structure simplifies unit and integration testing
