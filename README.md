# ChemTech Solutions - Chemistry Consultancy Website

A modern, responsive consultancy website built with Next.js 14 for chemistry industry services.

## Features

- **Modern Design**: Clean, professional layout with Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **Static Export**: Optimized for GitHub Pages deployment
- **Contact Forms**: Multiple form backends supported
- **SEO Optimized**: Proper meta tags and semantic HTML

## Services Offered

- Electrochemistry
- Materials Science
- Thin Film Deposition
- Materials Characterisation
- Electronic Devices
- Thermoelectrics

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

## Deployment

### GitHub Pages

1. Update `next.config.js` with your repository name
2. Push to main branch
3. GitHub Actions will automatically deploy

### Other Static Hosts

The built files in the `out` directory can be deployed to:
- Netlify
- Vercel
- AWS S3
- Any static hosting service

## Contact Form Configuration

The contact form supports multiple backends:

1. **Netlify Forms**: Add `netlify` attribute to form
2. **Formspree**: Update action URL
3. **EmailJS**: Add JavaScript integration
4. **Mailto Fallback**: Default behavior

## Customization

- Update company information in `src/app/page.tsx`
- Modify colors in `tailwind.config.js`
- Add/remove services in the services array
- Update contact information and map

## License

MIT License - feel free to use for your consultancy website.