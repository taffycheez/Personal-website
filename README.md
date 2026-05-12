# Personal Portfolio Website

A modern, responsive portfolio website for Varya Kern - Data Science & Mathematics student seeking impact-driven internships.

![Portfolio Preview](assets/preview.png)

## 🎨 Features

- **Interactive Voronoi Diagram** - Mathematical visualization that responds to cursor movement on the hero section
- **Fully Responsive** - Mobile-first design that works beautifully on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- **Accessible** - WCAG AA compliant with proper ARIA labels and keyboard navigation
- **Performance Optimized** - Fast loading with optimized assets and efficient rendering
- **SEO Friendly** - Proper meta tags, semantic HTML, and optimized content

## 🚀 Quick Start

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/taffycheez/Personal-website.git
   cd Personal-website
   ```

2. **Add your headshot image:**
   - Place your professional photo at `assets/images/headshot.jpg`
   - See `assets/images/README.md` for image specifications

3. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using VS Code Live Server extension
   # Right-click index.html → "Open with Live Server"
   ```

4. **View the site:**
   - Navigate to `http://localhost:8000` (or the port shown)

### No Build Process Required!

This is a static website with no build tools or dependencies to install. All technologies are vanilla HTML, CSS, and JavaScript.

## 📁 Project Structure

```
Personal-website/
├── index.html              # Homepage with hero & about sections
├── projects.html           # Portfolio projects with filtering
├── blog.html              # Blog listing (content coming soon)
├── contact.html           # Contact form and information
├── css/
│   ├── reset.css          # CSS normalization
│   ├── variables.css      # Design tokens (colors, spacing, etc.)
│   ├── typography.css     # Font styles and text formatting
│   ├── base.css          # Base HTML element styles
│   ├── components.css    # Reusable UI components
│   ├── layout.css        # Page layouts and navigation
│   ├── animations.css    # Animation keyframes and effects
│   └── responsive.css    # Media queries for responsive design
├── js/
│   ├── voronoi-visualizer.js  # Interactive Voronoi diagram
│   ├── navigation.js          # Mobile menu and nav behavior
│   ├── scroll-animations.js   # Scroll-triggered animations
│   ├── project-filter.js      # Project filtering functionality
│   └── main.js               # General utilities and form handling
├── assets/
│   └── images/           # Image assets
│       ├── headshot.jpg  # Your professional photo (add this!)
│       └── projects/     # Project screenshots (optional)
├── blog/
│   ├── posts/           # Individual blog posts (future)
│   └── template.html    # Blog post template (future)
└── plans/               # Design documentation
```

## 🎨 Customization Guide

### Colors

Edit `css/variables.css` to change the color scheme:

```css
:root {
  --color-primary: #9caf88;      /* Sage green */
  --color-secondary: #8D8DFF;    /* Periwinkle */
  --color-accent: #ffc06e;       /* Warm peach */
  /* ... more colors */
}
```

### Content Updates

#### Personal Information
1. **Homepage (`index.html`)**
   - Update hero section text, achievements, skills
   - Modify CV/education sections
   - Update certifications and interests

2. **Projects (`projects.html`)**
   - Add/remove project cards
   - Update GitHub links
   - Modify project descriptions and tags

3. **Contact (`contact.html`)**
   - Update email: `varya.kern@gmail.com`
   - Modify availability and location
   - Change Formspree form action (see Contact Form Setup below)

#### Social Links
Update throughout the site:
- LinkedIn: https://www.linkedin.com/in/varya-kern-a25baa2a2/
- GitHub: https://github.com/taffycheez
- Email: varya.kern@gmail.com

### Fonts

The site uses:
- **Headings:** Space Grotesk (geometric, mathematical feel)
- **Body:** Inter (highly readable, professional)
- **Code:** JetBrains Mono

To change fonts, edit the `@import` in `css/typography.css` and update the font family variables in `css/variables.css`.

### Voronoi Visualization Settings

Customize the interactive background in `js/voronoi-visualizer.js`:

```javascript
window.voronoiVisualizer = new VoronoiVisualizer('voronoi-canvas', {
  numSites: 40,              // Number of Voronoi sites (desktop)
  mobileNumSites: 20,        // Fewer sites on mobile for performance
  cursorInfluence: true,     // Whether cursor affects the diagram
  // ... more options in the file
});
```

## 📧 Contact Form Setup

The contact form uses [Formspree](https://formspree.io/) for handling submissions.

### Setup Steps:

1. **Sign up for Formspree:**
   - Go to https://formspree.io
   - Create a free account (50 submissions/month)

2. **Create a new form:**
   - Click "New Form"
   - Note your form ID

3. **Update contact.html:**
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
   Replace `YOUR_FORM_ID` with your actual Formspree form ID.

### Alternative Form Services:
- **Netlify Forms** (if deploying on Netlify)
- **EmailJS** (client-side email sending)
- **Custom backend** (if you want to build your own)

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Netlify:**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to your GitHub repository
   - Click "Deploy site"
   - Your site will be live at `your-site-name.netlify.app`

3. **Custom Domain (Optional):**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

**Benefits:**
- Free hosting
- Automatic HTTPS
- Built-in form handling (alternative to Formspree)
- Continuous deployment from Git
- Global CDN

### Option 2: GitHub Pages

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

2. **Access your site:**
   - Your site will be available at: `https://taffycheez.github.io/Personal-website/`

3. **Custom Domain:**
   - Add `CNAME` file with your domain
   - Configure DNS records

### Option 3: Vercel

Similar to Netlify:
1. Go to https://vercel.com
2. Import your GitHub repository
3. Deploy with one click

## 🔧 Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Screen reader friendly
- Color contrast meets WCAG AA standards
- Reduced motion support for users with vestibular disorders

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1023px
- **Desktop:** ≥ 1024px
- **Large Desktop:** ≥ 1280px

## 🐛 Troubleshooting

### Voronoi diagram not showing:
- Check browser console for errors
- Ensure `voronoi-visualizer.js` is loading correctly
- Verify canvas element exists: `<canvas id="voronoi-canvas"></canvas>`

### Images not loading:
- Verify image paths are correct (case-sensitive on some servers)
- Check that images are in `assets/images/` directory
- Ensure headshot.jpg is present (or update the path)

### Contact form not working:
- Update Formspree form ID in contact.html
- Check browser console for errors
- Verify form action URL is correct

### Mobile menu not opening:
- Check that navigation.js is loading
- Verify no JavaScript errors in console
- Ensure mobile-menu-toggle button exists in HTML

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

This is a personal portfolio website, but if you notice any bugs or have suggestions:
1. Open an issue
2. Submit a pull request
3. Contact me directly

## 📞 Contact

**Varya Kern**
- Email: varya.kern@gmail.com
- LinkedIn: [linkedin.com/in/varya-kern-a25baa2a2](https://www.linkedin.com/in/varya-kern-a25baa2a2/)
- GitHub: [github.com/taffycheez](https://github.com/taffycheez)

---

## 🎓 About This Project

This website was built as a modern portfolio to showcase data science skills and seek internship opportunities in impact-driven quantitative analysis. The design focuses on:

- **Mathematical aesthetic** - Reflected in the Voronoi visualization
- **Professional presentation** - Clean, modern UI suitable for employers
- **Accessibility** - Ensuring everyone can access the content
- **Performance** - Fast loading and smooth interactions
- **Maintainability** - Clean, well-organized code

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern features (Grid, Flexbox, Custom Properties)
- **Vanilla JavaScript** - No frameworks required
- **Canvas API** - For Voronoi visualization
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Space Grotesk, Inter)

### Future Enhancements

- [ ] Blog post creation and management system
- [ ] Project filtering by multiple criteria
- [ ] Resume/CV download functionality
- [ ] More interactive visualizations
- [ ] Blog RSS feed
- [ ] Newsletter signup integration
- [ ] Analytics integration (privacy-focused)

---

**Built with ❤️ by Varya Kern**

*Last Updated: May 2026*
