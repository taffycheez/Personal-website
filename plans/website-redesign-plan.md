# Personal Website Redesign Plan
## Data Science Portfolio with Interactive Mathematical Visualizations

## 🎯 Core Objective
Create a unique, eye-catching portfolio website for a data science and mathematics student seeking internships in impact-driven quantitative analysis roles (climate change, environmental science, social inequality, healthcare).

## 👤 Target Audience
- Data science recruiters
- Quantitative analysis teams
- Impact-driven organizations
- Academic collaborators
- Fellow data science students

## 🎨 Design Vision

### Theme: Mathematics Meets Impact
**Concept:** A sophisticated data science portfolio that immediately conveys mathematical prowess and passion for impact-driven work through interactive visualizations and clean, modern design.

**Hero Feature:** Interactive Voronoi diagram background that responds to cursor movement, creating organic cellular patterns that subtly reference data clustering and spatial analysis.

### Design Principles
1. **Unique & Memorable** - Stand out with mathematical visualizations
2. **Professional** - Polished enough for internship applications
3. **Interactive** - Engaging without being distracting
4. **Accessible** - Works well on all devices and for all users
5. **Content-First** - Visualization enhances, doesn't overshadow content

## 🏗️ Technical Architecture

### Technology Stack
**Frontend:**
- HTML5 with semantic elements
- CSS3 (Grid, Flexbox, Custom Properties, CSS Animations)
- Vanilla JavaScript (ES6+)
- Canvas API for Voronoi visualization
- D3.js voronoi module (lightweight) for mathematical calculations

**Libraries & Tools:**
- Font Awesome 6 (icons)
- Google Fonts (typography)
- Prism.js (code syntax highlighting for blog)
- MathJax or KaTeX (mathematical notation for blog posts)
- Intersection Observer API (scroll animations)

**No Dark Mode** - Focus on perfecting single polished theme

### Project Structure
```
Personal-website/
├── index.html                  # Homepage with hero + about
├── projects.html               # Portfolio of projects
├── blog.html                  # Blog listing
├── contact.html               # Contact + internship inquiries
├── css/
│   ├── reset.css              # CSS normalization
│   ├── variables.css          # Design tokens (colors, spacing, typography)
│   ├── base.css              # Base HTML element styles
│   ├── typography.css        # Font styles and hierarchy
│   ├── layout.css            # Grid systems and page layouts
│   ├── components.css        # Reusable components (cards, buttons, forms)
│   ├── navigation.css        # Header and nav styles
│   ├── animations.css        # Keyframes and transitions
│   └── responsive.css        # Media queries
├── js/
│   ├── voronoi-visualizer.js  # Interactive Voronoi diagram
│   ├── navigation.js          # Mobile menu and nav interactions
│   ├── scroll-animations.js   # Intersection Observer for fade-ins
│   ├── project-filter.js      # Project filtering functionality
│   └── main.js               # Initialization and utilities
├── assets/
│   ├── images/
│   │   ├── headshot.jpg       # Professional photo (user uploads)
│   │   └── projects/          # Project screenshots
│   └── documents/
│       └── resume.pdf         # Downloadable CV (optional)
├── blog/
│   ├── template.html          # Blog post template
│   └── posts/                # Individual blog posts
├── plans/
│   └── website-redesign-plan.md
└── README.md
```

## 🎨 Visual Design System

### Color Palette
**Primary Palette** (keeping existing colors but optimizing):
- **Sage Green** `#9caf88` - Primary brand color, calm/natural (impact themes)
- **Periwinkle** `#8D8DFF` - Secondary, mathematical/logical
- **Warm Peach** `#ffc06e` - Accent, energy and optimism

**Extended Palette:**
- **Deep Forest** `#5a6b4f` - Dark text on light backgrounds
- **Soft Cream** `#faf8f6` - Page background
- **Pure White** `#ffffff` - Cards and elevated surfaces
- **Charcoal** `#2d3436` - Primary text
- **Slate** `#636e72` - Secondary text
- **Light Gray** `#f1f3f5` - Borders and subtle backgrounds

**Voronoi Visualization Colors:**
- Gradient from sage green to periwinkle
- Semi-transparent cells allowing content to remain readable
- Subtle color shifts on hover

### Typography

**Font Choices:**
- **Headings:** 'Space Grotesk' - Geometric, modern, mathematical feel
- **Body:** 'Inter' - Highly readable, professional
- **Code/Data:** 'JetBrains Mono' - For code blocks and technical content
- **Accent/Numbers:** 'Space Grotesk' - For statistics and data points

**Type Scale (1.250 - Major Third):**
- xs: 0.64rem (10.24px)
- sm: 0.8rem (12.8px)
- base: 1rem (16px)
- md: 1.25rem (20px)
- lg: 1.563rem (25px)
- xl: 1.953rem (31.25px)
- 2xl: 2.441rem (39px)
- 3xl: 3.052rem (48.8px)
- 4xl: 3.815rem (61px)

### Spacing System (8px base)
```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-10: 4rem;     /* 64px */
--space-12: 6rem;     /* 96px */
--space-16: 8rem;     /* 128px */
```

### Responsive Breakpoints
```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
--breakpoint-2xl: 1536px; /* Extra large */
```

## ⚡ Interactive Voronoi Diagram

### Technical Implementation

**Location:** Full-screen canvas behind hero section, fades/scales on scroll

**Algorithm:**
1. Generate random seed points (30-50 points)
2. Add cursor position as dynamic point
3. Calculate Voronoi tessellation using d3-delaunay
4. Render cells with gradient fills
5. Animate color shifts and morphing
6. Update on mousemove with throttling for performance

**Features:**
- **Cursor Tracking:** Add/move Voronoi site at cursor position
- **Smooth Transitions:** Cells morph smoothly as cursor moves
- **Color Gradients:** Subtle color variations in each cell
- **Performance:** RequestAnimationFrame, throttled updates (60fps)
- **Responsive:** Adapts to window resize
- **Mobile:** Static or simplified version for touch devices

**Visual Effects:**
- Slight blur/glow on cell edges
- Pulsing animation on cells near cursor
- Gradient color shifts based on position
- Semi-transparent to maintain content readability

### Performance Considerations
- Canvas rendering with RAF
- Throttle mousemove events (every 16ms = 60fps)
- Reduce complexity on mobile devices
- Fallback to static gradient if performance issues
- Pause animation when page not visible (Page Visibility API)

## 📄 Page Architecture

### Homepage (index.html)

**Structure:**
```
1. Header/Navigation (sticky)
2. Hero Section with Voronoi Background
   - Name & tagline
   - Professional photo
   - Key skills visualization
   - CTA buttons (Projects, Contact, Resume)
3. About Section
   - Impact focus statement
   - Current status (student seeking internships)
   - Academic achievements
4. Experience Section
   - Education
   - Relevant coursework
   - Work experience (lifeguard, tutor)
   - Achievements (Dux Litteratum, NCEA Scholar)
5. Skills Section
   - Technical skills with proficiency indicators
   - Tools & Technologies
   - Mathematical foundations
6. Certifications Section
   - CS50x, Kaggle, ongoing courses
7. Footer
   - Social links
   - Contact info
   - Copyright
```

**Hero Section Details:**
- Large professional headshot (circular with subtle shadow)
- Name: "Varya Kern" (large, bold)
- Tagline: "Data Science & Mathematics Student" (subtitle)
- Value proposition: "Seeking internships in impact-driven quantitative analysis"
- Focus areas: Small tags/pills - Climate · Healthcare · Social Impact
- CTA Buttons: "View Projects" (primary), "Contact Me" (secondary), "Download CV" (tertiary)

**Content Updates Needed:**
- Remove: "Whatever" under coursework
- Add: Emphasis on seeking internships
- Add: Connection between technical skills and impact goals
- Update: Current courses (STAT292, MATH202, etc.)
- Clarify: Ongoing learning (Andrew Ng's ML Specialization, CS229)

### Projects Page (projects.html)

**Structure:**
```
1. Header/Navigation
2. Page Hero (smaller)
   - Title: "Projects & Portfolio"
   - Description: Work showcasing data analysis and mathematical applications
3. Filter/Sort Controls
   - By Technology: Python, R, SQL, All
   - By Type: Data Analysis, Machine Learning, Visualization, Web Dev, All
   - Search bar
4. Projects Grid
   - Masonry/Grid layout
   - Project cards with hover effects
5. Footer
```

**Project Card Design:**
- Project title
- Brief description (1-2 sentences)
- Technology badges/tags
- Screenshot or icon
- Links: GitHub repo, Live demo (if applicable)
- Hover effect: Lift + shadow, color accent

**Projects to Feature (from GitHub analysis):**
*Will need to review actual GitHub repos*
1. **Personal Website** - This project itself
2. **Data Analysis Projects** - Any Python/R analysis projects
3. **CS50x Final Project** - If applicable
4. **Coursework Projects** - Relevant university projects
5. **Reinforcement Learning Work** - If you have examples

**Additional Functionality:**
- Filtering without page reload (JavaScript)
- Smooth transitions between filtered states
- "Load More" or pagination if many projects
- Direct GitHub API integration to auto-populate (optional enhancement)

### Blog Page (blog.html)

**Structure:**
```
1. Header/Navigation
2. Page Hero
   - Title: "Blog & Learning Journey"
   - Description: Insights on data science, mathematics, and impact work
3. Featured Post (if any)
4. Blog Categories
   - Technical Tutorials
   - Learning Journey / Course Notes
   - Data Science for Impact
   - Career & Internship Insights
5. Blog Post Grid
   - Card layout
   - Chronological with dates
   - Excerpt preview
6. Footer
```

**Blog Card Design:**
- Publication date
- Category tag
- Title (clickable)
- Excerpt (2-3 lines)
- "Read More" link
- Estimated read time (optional)
- Hover effect: Subtle scale + shadow

**Blog Post Template Features:**
- Code syntax highlighting (Prism.js)
- Mathematical notation support (MathJax/KaTeX)
- Responsive images
- Table of contents for longer posts
- Social share buttons (optional)
- "Back to Blog" navigation

**Suggested Blog Topics:**
- "My Journey into Data Science"
- "Key Takeaways from CS50x"
- "Understanding [Math Concept] for Data Analysis"
- "Reinforcement Learning Basics"
- "Data Science Applications in Climate Change"
- Course notes/summaries from Andrew Ng's course

### Contact Page (contact.html)

**Structure:**
```
1. Header/Navigation
2. Page Hero
   - Title: "Let's Connect"
   - Description: Open to internship opportunities and collaborations
3. Two-Column Layout
   - Left: Contact form
   - Right: Information & Links
4. Footer
```

**Contact Form Fields:**
- Name (required)
- Email (required, validated)
- Organization/Company (optional)
- Subject dropdown:
  - Internship Opportunity
  - Collaboration Proposal
  - Project Inquiry
  - General Message
- Message (textarea, required)
- Submit button with loading state

**Form Validation:**
- Real-time validation
- Clear error messages
- Success confirmation
- Email validation regex
- Spam protection (honeypot field)

**Contact Information Panel:**
- Email: [to be provided]
- LinkedIn: [existing link]
- GitHub: [existing link]
- Location: "Christchurch, New Zealand" or "University of Canterbury"
- Availability: "Seeking internships for [season/year]"
- Response time: "I typically respond within 24-48 hours"

**Form Submission:**
- Option 1: Formspree (free, simple)
- Option 2: Netlify Forms (if deploying on Netlify)
- Option 3: EmailJS (client-side email sending)
- Include thank you message after submission

## 🎯 Component Library

### Navigation Component

**Desktop:**
```
[Logo/Name]                    [About] [Projects] [Blog] [Contact]
```

**Mobile:**
```
[Logo/Name]                                   [☰]
```
When hamburger clicked: Slide-in drawer from right

**Features:**
- Sticky on scroll (with background)
- Active page indicator
- Smooth transitions
- Logo/name links to homepage
- Social icons in mobile menu

### Button Styles

**Primary Button:**
- Sage green background
- White text
- Hover: Darken + slight lift
- Active: Press down animation

**Secondary Button:**
- Outlined (sage green border)
- Sage green text
- Hover: Fill background

**Icon Button:**
- Circular or square
- Hover: Background + scale

### Card Component

**Base Card:**
- White background
- Subtle shadow
- Rounded corners (8px)
- Padding: var(--space-5)
- Hover: Lift + stronger shadow
- Border: 1px solid light gray

**Usage:**
- CV sections
- Project cards
- Blog post cards
- Skill categories

### Skill Badge

**Visual:**
- Small pill shape
- Colored background (based on category)
- Dark text
- Hover: Slight glow

**Categories:**
- Programming: Periwinkle
- Data Science: Sage green
- Mathematics: Peach
- Tools: Gray

### Progress Indicator (for skills)

**Visual:**
- Label: "Python"
- Bar: Background gray, filled sage green
- Percentage can be shown or hidden
- Animate on scroll into view

**Alternative: Radar Chart**
Could use a radar/spider chart for skill visualization

## 🎨 Animations & Interactions

### Page Load Animations
1. Header fades in and slides down
2. Voronoi diagram animates in
3. Hero content fades up with stagger
4. Sections fade in as you scroll

### Scroll Animations
- Intersection Observer for fade-ins
- Sections slide up slightly as they enter viewport
- Stagger effect for grid items
- Progress bars animate to fill

### Hover Interactions
- Cards lift and show stronger shadow
- Buttons have color transition
- Links underline with slide-in animation
- Images slight zoom on hover

### Micro-interactions
- Button clicks have ripple effect
- Form inputs have focus glow
- Checkmarks animate when form validates
- Loading spinner for form submission
- Smooth scroll to anchor links

### Voronoi Interactions
- Cells near cursor pulse gently
- Color shifts based on cursor position
- Smooth morphing between states
- Cells can "pop" when clicked (optional easter egg)

## 📱 Responsive Design Strategy

### Mobile-First Approach
Start with mobile styles, progressively enhance for larger screens.

### Layout Transformations

**Navigation:**
- Mobile: Hamburger menu
- Desktop: Horizontal nav bar

**Hero Section:**
- Mobile: Stack vertically, smaller Voronoi, reduced complexity
- Desktop: Side-by-side or centered with full canvas

**Content Grids:**
- Mobile: Single column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Typography:**
- Mobile: Smaller base size (14px)
- Desktop: Standard size (16px)
- Fluid typography with clamp()

### Touch Considerations
- Larger tap targets (44×44px minimum)
- No hover-dependent functionality
- Swipe gestures for mobile menu
- Simplified Voronoi (static or simpler animation)

### Performance on Mobile
- Lazy load images
- Reduce Voronoi complexity
- Conditional loading of heavy features
- Optimize images for mobile screens

## ♿ Accessibility

### Semantic HTML
- Use proper heading hierarchy (h1-h6)
- `<main>`, `<nav>`, `<article>`, `<section>` landmarks
- `<button>` for interactive elements
- Form labels properly associated

### ARIA Labels
- Navigation: `aria-label="Main navigation"`
- Mobile menu: `aria-expanded`, `aria-controls`
- Cards: `aria-labelledby`
- Canvas: `aria-hidden="true"` (decorative)

### Keyboard Navigation
- All interactive elements focusable
- Visible focus styles
- Skip to main content link
- Logical tab order
- ESC key closes mobile menu

### Color Contrast
- Text: Minimum 4.5:1 contrast ratio (WCAG AA)
- Large text: Minimum 3:1
- Test with contrast checker tools

### Focus Management
- Clear focus indicators
- Focus trap in mobile menu
- Return focus when closing modals/menus

### Screen Reader Considerations
- Alt text for meaningful images
- Empty alt for decorative images
- Descriptive link text ("View project details" vs "Click here")
- Form error announcements

## 🚀 Performance Optimization

### Image Optimization
- Compress images (TinyPNG, Squoosh)
- Use appropriate formats (WebP with fallback)
- Lazy loading with `loading="lazy"`
- Responsive images with `srcset`

### JavaScript Optimization
- Defer non-critical scripts
- Use async where appropriate
- Minimize and bundle if needed
- Remove unused code

### CSS Optimization
- Critical CSS inline in `<head>`
- Load non-critical CSS async
- Remove unused styles
- Minify for production

### Voronoi Performance
- RequestAnimationFrame for smooth rendering
- Throttle mousemove events
- Reduce complexity on low-power devices
- Pause when page hidden
- Use OffscreenCanvas if available

### Loading Strategy
- Critical content loads first
- Progressive enhancement
- Show content while canvas initializes
- Skeleton screens for dynamic content

### Metrics Goals
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Total Blocking Time: < 200ms
- Cumulative Layout Shift: < 0.1

## 📊 Content Strategy

### About/CV Section - Content to Include

**Opening Statement:**
"Second-year Data Science and Mathematics student at the University of Canterbury, passionate about using quantitative analysis to drive meaningful impact in areas like climate change, healthcare, and social equity. Currently seeking internship opportunities where I can apply mathematical rigor and analytical skills to solve real-world problems."

**Education:**
- University of Canterbury
  - Bachelor of Data Science (ongoing)
  - Bachelor of Science in Mathematics (ongoing)
  - GPA: 8.75
  - Currently taking 200-level courses in [STAT292, MATH202, etc.]

**Previous Achievements:**
- 2024 Dux Litteratum, New Plymouth Girls' High School
- NCEA Outstanding Scholar (8 scholarships, 3 at Outstanding level)
- Top 50 students nationally
- 45 points of university coursework during high school (MATH199, ASTR109)

**Work Experience:**
- Tutor, Accelerate Tuition (Current)
  - Teaching Physics and Mathematics including NCEA Scholarship level
  - Developing clear explanations of complex concepts
- Lifeguard (2024)
  - Built interpersonal skills and emergency response capabilities

**Areas of Impact Interest:**
- Climate change and environmental science
- Healthcare and public health
- Social inequality and equity
- Policy analysis and evidence-based decision making

### Skills Section - Organized by Category

**Programming Languages:**
- Python (Proficient)
  - pandas, numpy, matplotlib
  - Reinforcement learning experience
- R (Intermediate)
- SQL (Intermediate)

**Mathematics & Statistics:**
- Linear Algebra (Strong foundation)
- Calculus (including vector calculus, PDEs at 200-level)
- Probability & Statistics
- Statistical modeling
- Mathematical optimization

**Data Science & ML:**
- Data analysis and visualization
- Statistical inference and estimation
- Linear regression
- Reinforcement learning basics
- Currently learning: Machine learning methods (Andrew Ng, CS229)

**Tools & Platforms:**
- Git & version control
- Jupyter Notebooks
- VS Code
- Excel/Google Sheets

**Soft Skills:**
- Problem-solving
- Communication of technical concepts
- Collaborative work
- Self-directed learning

### Certifications

**Completed:**
- CS50x: Harvard's Introduction to Computer Science
- Kaggle: Intro to Machine Learning
- Associate of Trinity College London (ATCL) - Flute Performance (2024)

**In Progress:**
- Stanford Online: Machine Learning Specialization (Andrew Ng)
- CS229: Machine Learning (Harvard)

### Hobbies Section - Refined

**Musical Performance:**
- Flute (ATCL diploma)
- Piano

**Technical Pursuits:**
- Competitive programming (SPAR, NZPC)
- Personal coding projects
- Data visualization explorations

**Other Interests:**
- Fitness and health
- Classical literature
- Visual arts

## 🎯 Call-to-Action Strategy

### Primary CTAs
1. **View Projects** - Most important, showcase work
2. **Contact for Opportunities** - Clear internship focus
3. **Download Resume** - Quick access to formal CV

### Secondary CTAs
- Read blog posts
- Connect on LinkedIn
- View GitHub repositories

### Placement
- Hero section: Primary CTAs
- End of About section: "Interested in working together?"
- Projects section: "See a project you like?"
- Footer: "Let's build something impactful together"

## 📝 Content Questions to Address

### Information Needed:
1. **Contact Email** - Preferred email for inquiries
2. **Current Courses** - Specific 200-level courses this semester
3. **Projects** - Review GitHub repos to extract details
4. **Resume/CV** - Do you have a PDF ready to link?
5. **Internship Timeline** - When are you seeking internships? (Summer 2026/2027?)
6. **Specific Impact Interests** - Any particular organizations or problem areas?
7. **Availability** - Part-time during semester, full-time during breaks?

### Content to Remove:
- Generic "Lorem ipsum" from projects page
- "Whatever" from coursework
- Broken blog links (blogs/blog1.html)
- Placeholder project descriptions

### Content to Add:
- Specific technical project descriptions
- Links to GitHub repositories
- Blog posts or learning journey content
- Clear value proposition for employers

## 🏗️ Implementation Phases

### Phase 1: Foundation & Structure
**Goal:** Set up architecture and core layouts
- [x] Create project structure
- [ ] Set up CSS architecture (variables, reset, base)
- [ ] Build responsive navigation
- [ ] Create reusable header/footer components
- [ ] Implement basic responsive layouts

### Phase 2: Interactive Visualizer
**Goal:** Implement signature Voronoi feature
- [ ] Set up Canvas and rendering loop
- [ ] Implement Voronoi algorithm
- [ ] Add cursor tracking
- [ ] Create smooth animations
- [ ] Optimize performance
- [ ] Add mobile fallback

### Phase 3: Homepage Development
**Goal:** Complete main landing page
- [ ] Build hero section with Voronoi
- [ ] Create about/CV section
- [ ] Design skills showcase
- [ ] Add experience section
- [ ] Implement scroll animations

### Phase 4: Projects Page
**Goal:** Showcase portfolio work
- [ ] Review GitHub repositories
- [ ] Extract project information
- [ ] Build project card components
- [ ] Implement filtering system
- [ ] Add project descriptions and links

### Phase 5: Blog Infrastructure
**Goal:** Set up blog system
- [ ] Create blog listing page
- [ ] Design blog post template
- [ ] Add code syntax highlighting
- [ ] Implement math notation support
- [ ] Create sample blog posts

### Phase 6: Contact & Polish
**Goal:** Finalize remaining pages and details
- [ ] Build contact form
- [ ] Set up form submission
- [ ] Add validation
- [ ] Integrate social links
- [ ] Final content review

### Phase 7: Optimization & Testing
**Goal:** Ensure quality and performance
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Fix bugs and issues

### Phase 8: Documentation & Deployment
**Goal:** Launch and document
- [ ] Write comprehensive README
- [ ] Create deployment guide
- [ ] Set up hosting
- [ ] Test live deployment
- [ ] Final content verification

## 🔧 Technical Details

### Voronoi Algorithm Details

**Library:** d3-delaunay (Delaunator)
- Lightweight (11kb)
- Fast computation
- Returns Voronoi diagram from points

**Implementation Pseudocode:**
```javascript
// Initialize
const canvas = document.getElementById('voronoi-canvas');
const ctx = canvas.getContext('2d');
let sites = generateRandomSites(40);
let mousePos = { x: width/2, y: height/2 };

// Animation loop
function animate() {
  // Update sites array with mouse position
  const allSites = [...sites, mousePos];
  
  // Calculate Voronoi
  const delaunay = Delaunay.from(allSites);
  const voronoi = delaunay.voronoi([0, 0, width, height]);
  
  // Render cells
  for (let i = 0; i < allSites.length; i++) {
    const cell = voronoi.cellPolygon(i);
    const color = calculateCellColor(i, mousePos);
    drawCell(cell, color);
  }
  
  requestAnimationFrame(animate);
}

// Mouse tracking
canvas.addEventListener('mousemove', throttle((e) => {
  mousePos = { x: e.clientX, y: e.clientY };
}, 16)); // ~60fps
```

### Form Handling Options

**Option 1: Formspree**
```html
<form action="https://formspree.io/f/{form-id}" method="POST">
  <!-- form fields -->
</form>
```
- Pros: Free tier, no backend needed, spam protection
- Cons: 50 submissions/month on free tier

**Option 2: Netlify Forms**
```html
<form name="contact" method="POST" data-netlify="true">
  <!-- form fields -->
</form>
```  
- Pros: 100 submissions/month, integrated with Netlify hosting
- Cons: Only works on Netlify

**Option 3: EmailJS**
```javascript
emailjs.send('service_id', 'template_id', formData)
```
- Pros: Client-side, customizable
- Cons: Exposes API keys in client code

### Syntax Highlighting Setup

**Using Prism.js:**
```html
<link href="prism.css" rel="stylesheet" />
<script src="prism.js"></script>

<pre><code class="language-python">
import pandas as pd
df = pd.read_csv('data.csv')
</code></pre>
```

Languages to support:
- Python
- R  
- SQL
- JavaScript
- Bash

### Math Notation Setup

**Using KaTeX (faster than MathJax):**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css">
<script src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js"></script>

<!-- Inline math -->
<span class="math">c = \sqrt{a^2 + b^2}</span>

<!-- Display math -->
<div class="math display">
  \int_0^1 f(x) dx = \lim_{n\to\infty} \sum_{i=1}^n f(x_i)\Delta x
</div>
```

## 📱 Mobile Experience

### Progressive Enhancement
- Base experience works without JavaScript
- Canvas visualization is enhancement
- Forms submit without JS (HTML5 validation)

### Touch Interactions
- Voronoi responds to touch position
- Swipe to open/close mobile menu
- Tap to expand project cards
- Pull-to-refresh compatible

### Mobile-Specific Optimizations
- Reduce Voronoi complexity (20 sites instead of 40)
- Lower animation frame rate if needed
- Lazy load images below fold
- Decrease shadow/blur effects

## 🎯 SEO & Meta Tags

### Standard Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Varya Kern - Data Science & Mathematics student seeking impact-driven internships">
<meta name="keywords" content="data science, mathematics, internship, quantitative analysis, Python, R">
<meta name="author" content="Varya Kern">
```

### Open Graph Tags (Social Sharing)
```html
<meta property="og:title" content="Varya Kern | Data Science Portfolio">
<meta property="og:description" content="Data Science & Mathematics student passionate about impact-driven work">
<meta property="og:image" content="URL-to-preview-image">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">
```

### Twitter Cards
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Varya Kern | Data Science Portfolio">
<meta name="twitter:description" content="Data Science & Mathematics student">
<meta name="twitter:image" content="URL-to-preview-image">
```

## 🚀 Deployment Strategy

### Recommended: Netlify
**Advantages:**
- Free tier generous
- Automatic deployments from Git
- Built-in form handling
- Custom domain support
- HTTPS automatic
- CDN included

**Deployment Steps:**
1. Push code to GitHub
2. Connect Netlify to repository
3. Configure build settings (none needed for static site)
4. Deploy
5. Add custom domain (optional)

### Alternative: GitHub Pages
**Advantages:**
- Free
- Integrated with Git workflow
- Simple setup

**Limitations:**
- No built-in form handling
- Less configuration options

### Alternative: Vercel
Similar to Netlify, excellent performance

## 📊 Success Metrics

### Technical Metrics
- Lighthouse Score: 90+ on all categories
- Page Load Time: < 3 seconds
- Mobile responsive: Works on all screen sizes
- Cross-browser: Chrome, Firefox, Safari, Edge

### User Experience Metrics
- Clear value proposition visible within 3 seconds
- Projects easy to browse and filter
- Contact form simple and functional
- Navigation intuitive

### Content Metrics
- All placeholder content replaced
- All links functional
- GitHub projects accurately represented
- Skills accurately reflect abilities

## 🎓 Learning Resources for Maintenance

### For Future Updates:
- **MDN Web Docs** - HTML/CSS/JS reference
- **CSS-Tricks** - Design patterns and techniques
- **Can I Use** - Browser compatibility
- **Coolors** - Color palette tools
- **Google Fonts** - Typography
- **Font Awesome** - Icon library

### For Content Updates:
- **Markdown Guide** - If using markdown for blog
- **KaTeX Documentation** - Math notation syntax
- **Prism.js Docs** - Code highlighting

## 🎨 Visual Design Mockup Concept

```
╔════════════════════════════════════════════════╗
║  VARYA KERN          About Projects Blog Contact ║
╠════════════════════════════════════════════════╣
║                                                ║
║    [Voronoi Diagram Background - Interactive]  ║
║                                                ║
║         ╭─────────╮                           ║
║         │         │      Varya Kern            ║
║         │ Photo   │                           ║
║         │         │   Data Science & Mathematics║
║         ╰─────────╯      Student              ║
║                                                ║
║     Seeking internships in impact-driven       ║
║        quantitative analysis                   ║
║                                                ║
║   [Climate] [Healthcare] [Social Impact]       ║
║                                                ║
║     [View Projects]  [Contact Me]             ║
║                                                ║
╠════════════════════════════════════════════════╣
║                                                ║
║  ╔═══════════════════════════════════════╗   ║
║  ║  About Me                             ║   ║
║  ║  ───────────────────────────────────  ║   ║
║  ║  Second-year student at University of ║   ║
║  ║  Canterbury...                        ║   ║
║  ╚═══════════════════════════════════════╝   ║
║                                                ║
║  ╔═══════════╗ ╔═══════════╗ ╔═══════════╗  ║
║  ║ Education ║ ║ Skills    ║ ║Experience ║  ║
║  ║           ║ ║           ║ ║           ║  ║
║  ╚═══════════╝ ╚═══════════╝ ╚═══════════╝  ║
║                                                ║
╚════════════════════════════════════════════════╝
```

---

## 📋 Summary

This plan outlines a complete redesign of your personal website focusing on:

1. **Unique Visual Identity** - Interactive Voronoi diagram showcasing mathematical passion
2. **Clear Career Goals** - Emphasis on seeking impact-driven data science internships
3. **Professional Portfolio** - Projects, skills, and achievements displayed effectively
4. **Modern Technology** - Clean, maintainable code without unnecessary complexity
5. **Responsive Design** - Beautiful on all devices
6. **Accessibility** - Inclusive and usable for everyone
7. **Performance** - Fast loading and smooth interactions

The implementation will be systematic, building from foundation to final polish, with content gathered and refined throughout the process.

Ready to begin implementation in Code mode!
