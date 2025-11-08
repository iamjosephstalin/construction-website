# Contributing to AG Builders Website

## Development Setup

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd ag-builders-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Standards

### File Structure
```
src/
├── components/          # Reusable UI components
├── constants.tsx       # Application constants and data
├── types.ts           # TypeScript type definitions
├── App.tsx            # Main application component
└── index.tsx          # Application entry point
```

### Component Guidelines
- Use functional components with hooks
- Implement TypeScript interfaces
- Follow React best practices
- Use Framer Motion for animations
- Maintain responsive design

### Styling
- Use Tailwind CSS classes
- Follow mobile-first approach
- Maintain consistent spacing and colors
- Use CSS-in-JS for dynamic styles

### Code Quality
- Write semantic HTML
- Use descriptive variable names
- Add comments for complex logic
- Ensure accessibility compliance

## Testing
- Test components in different screen sizes
- Verify all links and navigation
- Check form functionality
- Validate performance metrics

## Pull Request Process

1. Create feature branch from `main`
2. Make changes following code standards
3. Test thoroughly
4. Update documentation if needed
5. Submit pull request with clear description

## Issue Reporting

When reporting issues, include:
- Browser and version
- Screen size/device
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable