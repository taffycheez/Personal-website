# Personal Website Modernization Plan

## Overview
Complete overhaul of existing personal website with modern design, responsive layout, dark mode, and animations while maintaining simplicity and ease of understanding.

## Current State Analysis

### Existing Structure
- [`index.html`](../index.html) - About/CV page with personal information
- [`projects.html`](../projects.html) - Projects page with collapsible sections
- [`blog.html`](../blog.html) - Blog listing page
- [`contact.html`](../contact.html) - Contact form page
- [`styles.css`](../styles.css) - Basic styling

### Issues Identified
1. **CSS Bug**: Line 2 in [`styles.css`](../styles.css:2) has `##9caf88` (double hash) instead of `#9caf88`
2. **Non-responsive**: Fixed width of 960px not suitable for mobile devices
3. **Outdated Bootstrap**: Using Bootstrap 4.5.3 but not leveraging it effectively
4. **Repeated Header Code**: Header structure duplicated across all pages
5. **Navigation Active State**: Wrong active class on non-index pages
6. **Missing Features**: No dark mode, limited animations, basic styling
7. **Accessibility**: Missing ARIA labels and semantic HTML improvements

## Technical Approach

### Technology Stack
**Core Technologies:**
- Modern HTML5 with semantic elements
- CSS3 with CSS Grid, Flexbox, and custom properties
- Vanilla JavaScript for interactivity
- Font Awesome 6 for icons (CDN)
- Google Fonts for typography

**Why This Approach:**
- No build tools or frameworks required
- Easy to understand and maintain
- Fast loading and performance
- Can be hosted on any static hosting service

### Project Structure
```
Personal-website/
├── index.html
├── projects.html
├── blog.html
├── contact.html
├── css/
│   ├── reset.css          # CSS reset for consistency
│   ├── variables.css      # CSS custom properties (colors, spacing)
│   ├── base.css          # Base styles and typography
│   ├── components.css    # Reusable components (buttons, cards)
│   ├── layout.css        # Layout styles (header, nav, footer)
│   └── animations.css    # Animation keyframes and transitions
├── js/
│   ├── theme-toggle.js   # Dark mode functionality
│   ├── navigation.js     # Mobile menu and nav interactions
│   └── main.js          # General utilities and interactions
├── assets/
│   └── images/
│       └── headshot.jpg  # User will upload later
├── plans/
│   └── website-modernization-plan.md
└── README.md
```

## Design System

### Color Palette

**Light Mode:**
- Primary: `#9caf88` (sage green - from existing)
- Secondary: `#8D8DFF` (periwinkle - from existing)
- Accent: `#ffc06e` (warm peach - from existing)
- Background: `#ffffff`
- Surface: `#f8f9fa`
- Text: `#212529`
- Text Secondary: `#6c757d`

**Dark Mode:**
- Primary: `#b4c9a3` (lighter sage for contrast)
- Secondary: `#a8a8ff` (lighter periwinkle)
- Accent: `#ffd195` (lighter peach)
- Background: `#1a1a1a`
- Surface: `#2d2d2d`
- Text: `#e9ecef`
- Text Secondary: `#adb5bd`

### Typography
- **Headings**: 'Playfair Display' (serif) - elegant and professional
- **Body**: 'Inter' (sans-serif) - modern and highly readable
- **Code/Mono**: 'JetBrains Mono' - for any code snippets

### Spacing System
Using 8px base unit:
- xs: 4px (0.25rem)
- sm: 8px (0.5rem)
- md: 16px (1rem)
- lg: 24px (1.5rem)
- xl: 32px (2rem)
- 2xl: 48px (3rem)
- 3xl: 64px (4rem)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Wide: > 1440px

## Component Design

### Navigation
**Desktop:**
- Horizontal navigation bar
- Logo/name on left
- Menu items center or right
- Dark mode toggle
- Social media icons (LinkedIn, GitHub)

**Mobile:**
- Hamburger menu icon
- Slide-in drawer navigation
- Full-screen overlay
- Animated menu items

### Hero Section (Homepage)
- Large headshot image with subtle animations
- Name as primary heading
- Professional tagline/subtitle
- Call-to-action buttons
- Social media links with hover effects

### Content Cards
- Consistent card design for CV sections, projects, blog posts
- Hover effects with subtle scale/shadow transitions
- Responsive grid layout
- Clean typography hierarchy

### Projects Section
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Project cards with:
  - Image or icon placeholder
  - Title and description
  - Technology tags
  - Expandable/collapsible details
  - Link to project/GitHub

### Blog Section
- Card-based layout for blog posts
- Featured image support
- Publication date
- Excerpt/summary
- Read more functionality

### Contact Form
- Clean, modern form design
- Input validation with visual feedback
- Success/error messages
- Form submission handling (can use Formspree, Netlify Forms, or similar)
- Alternative contact methods (email, social)

## Features Implementation

### 1. Dark Mode Toggle
**Implementation:**
```javascript
// Store preference in localStorage
// Toggle data-theme attribute on root element
// Smooth transition between themes (0.3s)
// Respect system preference as default
```

### 2. Smooth Animations
**Page Load:**
- Fade in content with stagger effect
- Slide up animations for sections

**Interactions:**
- Hover effects on links and cards
- Smooth color transitions
- Scale transforms on interactive elements

**Scroll:**
- Fade in elements as they enter viewport
- Scroll-to-top button appears after scrolling
- Smooth scroll behavior for anchor links

### 3. Responsive Design
**Mobile-First Approach:**
- Base styles for mobile
- Progressive enhancement for larger screens
- Touch-friendly tap targets (minimum 44×44px)
- Optimized images for different screen sizes

### 4. Accessibility
- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast meeting WCAG AA standards
- Alternative text for images
- Skip to main content link

## Page-Specific Details

### Homepage (index.html)
**Sections:**
1. Hero with headshot and introduction
2. Curriculum Vitae card
3. Skills grid
4. Certificates & Qualifications
5. Coursework overview
6. Hobbies/Interests

**Layout:**
- Full-width hero section
- Container for content (max-width: 1200px)
- 2-column grid for larger content sections
- Card-based design for each section

### Projects Page (projects.html)
**Structure:**
- Page header with title and description
- Filter/sort options (optional for future)
- Project grid
- Modal or expandable details for each project

**Features:**
- Replace collapsible buttons with cards
- Add hover effects
- Technology tags/badges
- Links to live demos and repositories

### Blog Page (blog.html)
**Structure:**
- Page header
- Blog post grid/list
- Pagination (if needed)

**Features:**
- Create placeholder blog post directory structure
- Individual blog post template
- Date formatting
- Category/tag system (if desired)

### Contact Page (contact.html)
**Sections:**
1. Contact form
2. Alternative contact information
3. Social media links

**Form Fields:**
- Name (required)
- Email (required, validated)
- Subject
- Message (textarea, required)
- Submit button

## Implementation Strategy

### Phase 1: Foundation (Tasks 1-5)
- Set up project structure
- Create CSS architecture
- Implement dark mode
- Build responsive navigation
- Create header component structure

### Phase 2: Content Pages (Tasks 6-9)
- Redesign homepage
- Modernize projects page
- Update blog page
- Enhance contact page

### Phase 3: Polish & Enhancement (Tasks 10-15)
- Add Font Awesome icons
- Implement animations
- Complete responsive design
- Add web fonts
- Improve accessibility

### Phase 4: Optimization & Documentation (Tasks 16-18)
- Fix existing bugs
- Optimize performance
- Create comprehensive README

## JavaScript Modules

### theme-toggle.js
```javascript
// Functions:
// - getThemePreference() - Check localStorage and system preference
// - setTheme(theme) - Apply theme to DOM
// - toggleTheme() - Switch between light/dark
// - initTheme() - Initialize on page load
```

### navigation.js
```javascript
// Functions:
// - toggleMobileMenu() - Open/close mobile navigation
// - setActiveNavItem() - Highlight current page in nav
// - closeMobileMenuOnResize() - Handle window resize
// - setupScrollBehavior() - Smooth scroll to anchors
```

### main.js
```javascript
// Functions:
// - showScrollToTop() - Display scroll-to-top button
// - scrollToTop() - Smooth scroll to page top
// - observeElements() - Intersection Observer for fade-in
// - validateForm() - Contact form validation
```

## CSS Architecture

### Variables Structure (variables.css)
```css
:root {
  /* Colors - Light Mode */
  --color-primary: #9caf88;
  --color-secondary: #8D8DFF;
  --color-accent: #ffc06e;
  /* ... more variables */
  
  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  /* ... more spacing */
  
  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
  /* ... more typography */
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.5s ease;
}

[data-theme="dark"] {
  /* Dark mode overrides */
}
```

### Component Patterns
- BEM-like naming convention for clarity
- Utility classes for common patterns
- Consistent spacing and sizing
- Reusable card component

## Deployment Considerations

### Hosting Options
1. **GitHub Pages** - Free, simple, integrated with Git
2. **Netlify** - Free tier, automatic deployments, form handling
3. **Vercel** - Free tier, excellent performance
4. **Cloudflare Pages** - Free, fast global CDN

### Pre-Deployment Checklist
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- Test on multiple devices (mobile, tablet, desktop)
- Validate HTML (W3C Validator)
- Check accessibility (WAVE, Lighthouse)
- Optimize images
- Test dark mode toggle
- Verify all links work
- Test contact form submission
- Check meta tags and SEO

### SEO & Meta Tags
Each page should include:
- Title tag (unique per page)
- Meta description
- Open Graph tags for social sharing
- Favicon
- Mobile viewport meta tag

## Future Enhancements
After initial implementation, consider:
- Blog post templates and routing
- Project portfolio filtering
- Testimonials section
- Resume/CV download feature
- Analytics integration (Google Analytics, Plausible)
- Newsletter signup
- RSS feed for blog
- Image optimization and lazy loading
- Progressive Web App features

## Success Criteria
- ✅ Fully responsive across all device sizes
- ✅ Functional dark mode with preference persistence
- ✅ Smooth animations and transitions
- ✅ Accessible (keyboard navigation, ARIA labels)
- ✅ Fast loading (< 3s on 3G)
- ✅ Clean, maintainable code
- ✅ Cross-browser compatible
- ✅ Easy to customize and update content

## Timeline Overview
This is a comprehensive rebuild that will require systematic implementation. The modular approach allows for incremental progress and testing at each phase.

---

*This plan provides a complete roadmap for transforming the basic personal website into a modern, professional portfolio site while maintaining simplicity and ease of maintenance.*
