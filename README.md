# Kirti Gupta Portfolio

A modern portfolio website built with React, TypeScript, and Tailwind CSS.

## Project Overview

This is a personal portfolio website showcasing Kirti Gupta's work, skills, and experience. Built with modern web technologies for optimal performance and user experience.

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Modern UI library
- **shadcn-ui** - Beautiful UI components
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kirtig7/kirti-gupta-folio.git
   cd kirti-gupta-folio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:gh-pages` - Build for GitHub Pages deployment
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Development

### Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── styles/        # Global styles and Tailwind config
├── utils/         # Utility functions
└── main.tsx       # Application entry point
```

### Adding New Components

1. Create your component in the appropriate directory
2. Use shadcn-ui components for consistent design
3. Style with Tailwind CSS classes
4. Export and import where needed

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

**Automatic Deployment**:
- Every push to the `main` branch triggers automatic deployment
- The workflow builds the project and deploys to the `gh-pages` branch

**Manual Deployment**:
```bash
npm run build:gh-pages
git add .
git commit -m "Update for deployment"
git push origin main
```

**Site URL**: https://kirtig7.github.io/kirti-gupta-folio/

### Custom Domain

To use a custom domain:

1. Add your domain in repository Settings → Pages → Custom domain
2. Update your DNS settings accordingly
3. The base path in `vite.config.ts` can be changed to `/` for custom domains

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **GitHub**: [@kirtig7](https://github.com/kirtig7)
- **Portfolio**: [kirtig7.github.io/kirti-gupta-folio](https://kirtig7.github.io/kirti-gupta-folio)


