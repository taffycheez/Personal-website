# Updated Website Vision - Data Science Portfolio with Interactive Visualizations

## 🎯 Core Purpose
Create a unique, eye-catching portfolio website for **Varya Kern**, a second-year Data Science and Mathematics student seeking Summer 2026-2027 internships in impact-driven quantitative analysis and data science roles.

## 🌟 Unique Selling Points

### 1. Interactive Voronoi Diagram Hero
**Signature Feature:** Full-screen interactive Voronoi diagram visualization
- Responds to cursor movement in real-time
- Creates organic, cellular patterns
- Demonstrates mathematical understanding visually
- Smooth 60fps performance
- Mobile-optimized version

**Technical:** Canvas API with d3-delaunay for calculations

### 2. Impact-Driven Positioning
**Focus Areas:**
- Climate change analysis
- Healthcare and public health data
- Social inequality research
- Environmental science applications

**Message:** "Using mathematics and data science to solve problems that matter"

### 3. Strong Mathematical Foundation
Showcase coursework and certifications that demonstrate:
- Linear algebra, calculus, probability
- Statistical modeling and inference
- Algorithm design
- Beginning machine learning (reinforcement learning, currently expanding)

## 🎓 Content Strategy

### About/Hero Section

**Opening:**
"Second-year Data Science and Mathematics student at the University of Canterbury, seeking Summer 2026-2027 internships where I can apply quantitative methods to address pressing challenges in climate, healthcare, and social equity."

**My Story Section:**
"I have always loved learning. As a child, my passion was writing stories and poetry. In my teenage years, I became captivated by visual arts and creative expression. Eventually, I found myself drawn to STEM—the logical beauty of mathematics, the puzzle-solving nature of programming, and the power of data to reveal hidden patterns.

After completing a semester of first-year engineering, I discovered my true passion lies in the intersection of mathematics and data science."

**Current Status:**
- First-year Data Science & Mathematics student
- GPA: 8.75
- Taking 200-level courses

### Education & Achievements

**University of Canterbury (2025 - Present)**
- Double Degree: Data Science & Mathematics
- GPA: 8.75

**Relevant Coursework:**
- STAT202: Linear Regression
- STAT211: Stochastic Processes
- DATA201: Data Wrangling
- COSC262: Algorithms
- COSC265: Databases & SQL
- DATA203: Linear Algebra

**Academic Achievements:**
- Outstanding Scholar Award (Top 50 students in NZ)
  - Scholarships in: Statistics, Chemistry, Classics, Calculus, Physics, English, Music, Earth & Space Science
- University of Canterbury Scholarships: AIMS, Go Waitaha, Helen MacMillan Brown, **WiE CAN** (corrected from WfE)
- ICAS Medals: Top score in NZ for Mathematics and Science (2024)
- United Space School: Selected to represent NZ in Houston, Texas (2023)
- Research: Conducted regression analysis in R for PhD student on pohutukawa microbiome (2022)

### Work Experience

**Tutor - University of Canterbury & Accelerate Tuition** (Feb 2025 - Present)
- Teaching high school students in Science, Mathematics, English
- First-year university mathematics tutoring
- Skills: Communication, Leadership, Problem-solving

**Lifeguard - Wai O Rua** (Mar 2024 - Feb 2026)
- Pool safety and customer service
- Skills: Teamwork, Decision-making under pressure

### Technical Skills

**Programming & Data Science:**
- **Python:** pandas, numpy, matplotlib (Proficient)
- **R:** tidyverse, ggplot2, Rmarkdown (Intermediate)
- **SQL:** Database querying and management (Intermediate)
- **Git & GitHub:** Version control

**Machine Learning:**
- Reinforcement learning (Python)
- Currently learning: Supervised learning, neural networks
- Working on: Andrew Ng's ML Specialization, CS229 (Harvard)

**Mathematical Foundations:**
- Linear algebra
- Multivariable calculus, vector calculus, PDEs (200-level)
- Probability and statistics
- Statistical modeling and inference
- Algorithms and data structures

### Certifications

**Completed:**
- CS50x: Harvard's Introduction to Computer Science
- Associate of Trinity College London (ATCL) - Flute Performance (2024)

**In Progress:**
- Stanford Online: Machine Learning Specialization (Andrew Ng)
- CS229: Machine Learning (Harvard)

### Interests & Activities

**Competitive Programming:**
- 2nd place in New Zealand NZPC (2024)
- Regular SPAR contest participant

**Music:**
- Flute: Associate of Trinity College London (ATCL) diploma, working towards LTCL
- Piano: Ongoing study

**Languages:**
- English (Native)
- Russian (Native)
- German (Intermediate)

**Other:**
- Classical literature
- Philosophy and critical theory

## 💼 GitHub Projects Analysis

**Will extract from:** https://github.com/taffycheez

**Expected Projects:**
1. Reinforcement Learning projects (tic-tac-toe bot, etc.)
2. Data analysis work (potentially parkrun data, statistical analysis)
3. CS50x final project
4. This personal website
5. Any other coursework or personal projects

**For Each Project, Capture:**
- Repository name and description
- Technologies used
- Key features/learnings
- Links to repo and live demo (if applicable)
- Category tags (ML, Data Analysis, Web Dev, etc.)

## 📐 Voronoi Visualization Specifications

### Visual Design
**Appearance:**
- Semi-transparent cells (alpha 0.12-0.20)
- Gradient colors from palette (sage → periwinkle → peach)
- Subtle cell borders (1px, low opacity)
- Glow effect on cells near cursor

**Behavior:**
- 35-40 seed points on desktop, 18-20 on mobile
- Cursor adds dynamic point, creates ripple effect
- Cells morph smoothly (not jarring jumps)
- Points drift slowly when cursor not active
- All particles always moving (autonomous drift)
- All particles respond to cursor (not just subset)

**Performance:**
- 60fps target
- RequestAnimationFrame loop
- Throttled mousemove events
- Efficient d3-delaunay calculations
- Simplified version on mobile
- Pause when tab not visible

### Integration
**Hero Section:**
- Canvas as background layer (z-index: 0)
- Content overlay (z-index: 1) with good contrast
- Fade out or scroll parallax as user scrolls down
- Skip link for accessibility (canvas is decorative)

**Technical Notes:**
- Canvas responds to resize
- Works without JavaScript (shows static gradient fallback)
- Performance monitoring and degradation if needed

## 📱 Responsive Design

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1440px
- Large: > 1440px

### Layout Adaptations

**Navigation:**
- Mobile: Hamburger → Full-screen drawer
- Desktop: Horizontal nav with social icons

**Hero:**
- Mobile: Stacked, reduced Voronoi complexity
- Desktop: Centered with full visualization

**Content Sections:**
- Mobile: Single column, stack everything
- Tablet: 2 columns for side-by-side content
- Desktop: Up to 3-4 columns for grids

**Projects Grid:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

## 🎯 Page-by-Page Specifications

### Homepage (index.html)

**Sections:**
1. **Hero with Voronoi Background**
   - Professional headshot (circular, 200px)
   - Name and title
   - Value proposition
   - CTA buttons
   - Social links

2. **My Story**
   - Journey from writing → art → STEM
   - Current status and goals
   - GPA mention

3. **Experience Cards**
   - Education (with coursework grid)
   - Awards & Recognition
   - Work Experience

4. **Skills Showcase**
   - Visual skill indicators
   - Organized by category
   - Progress bars or alternative visualization

5. **Certifications**
   - Completed and in-progress
   - Icons for each certification

6. **Interests & Activities**
   - Competitive programming
   - Music
   - Languages
   - Other interests

7. **CTA Section**
   - "Let's Work Together" message
   - Contact button
   - View projects button

### Projects Page (projects.html)

**Features:**
- Filter by category (All, ML, Data Analysis, Web Dev, etc.)
- Filter by technology (Python, R, SQL, etc.)
- Search functionality
- Sort options (recent, alphabetical)

**Project Card:**
- Thumbnail or icon
- Title
- One-sentence description
- Technology tags
- GitHub link + Live demo link (if applicable)
- Hover: Lift, show more details

**Real Projects to Include:**
(Will extract from GitHub at implementation)
- Reinforcement learning tic-tac-toe bot
- Parkrun data analysis
- Vocabulary learning app
- WorkspaceIQ (Saasathon)
- Personal website
- CS50x final project
- Any data visualization projects
- Statistical analysis coursework

### Blog Page (blog.html)

**Categories:**
- Technical Tutorials (Python, R, data analysis)
- Learning Journey (course reflections, lessons learned)
- Data for Impact (applications to social problems)
- Mathematics & Theory
- Career Development

**Features:**
- Filter by category
- Search posts
- Chronological ordering
- Featured post section
- Newsletter signup (Mailchimp/Buttondown integration)

**Blog Post Template:**
- Publication date
- Reading time estimate
- Category tags
- Code syntax highlighting (Prism.js)
- Mathematical notation (KaTeX)
- Table of contents for longer posts
- Share buttons
- "Related Posts" section

**Newsletter Signup:**
- Email input with validation
- Privacy notice
- Subscribe button
- Success/error messaging
- Alternative connection methods (LinkedIn, email)

### Contact Page (contact.html)

**Focus:** Internship and collaboration opportunities

**Form Fields:**
- Name (required)
- Email (required, validated)
- Organization/Company
- Subject dropdown:
  - Internship Opportunity
  - Collaboration Proposal
  - Speaking/Teaching Opportunity
  - General Inquiry
- Message (required, min length)
- Submit button

**Additional Content:**
- Email: varya.kern@gmail.com
- Location: Christchurch / Hamilton, New Zealand
- University: University of Canterbury
- Availability: "Seeking Summer 2026-2027 internships"
- Open to: Full-time (summer), part-time (semester), remote, Christchurch, Hamilton
- Response time: "24-48 hours typical"
- Social media links
- Alternative: "Prefer email? Reach me directly at..."

## 🎭 Animation & Interaction Details

### Page Load Sequence
1. Navigation fades in (0.3s delay)
2. Voronoi diagram initializes and fades in (0.5s)
3. Hero content stagger fade-up:
   - Image (0.6s delay)
   - Name (0.7s)
   - Title (0.8s)
   - Description (0.9s)
   - Buttons (1.0s)

### Scroll Animations
- Intersection Observer triggers fade-ins
- Content slides up 20px as it fades in
- Stagger for grid items (0.1s delay each)
- Voronoi background parallax or fade

### Interactive Elements To Fix
- ✅ Card hover: Transform translateY(-8px), gradual shadow transition (0.6s)
- ✅ Hero buttons: Float on hover translateY(-4px)
- ✅ Navigation links: Proper alignment with inline-flex helper
- Link underlines: Slide in from left
- Images: Zoom on hover
- Skill bars: Animate on scroll

### Micro-interactions
- Button press: Scale down slightly
- Form focus: Border color + glow
- Successful form submit: Checkmark animation
- Loading states: Simple spinner
- Copy email: Tooltip "Copied!" appears

## ♿ Accessibility Features

### Keyboard Navigation
- Tab through all interactive elements
- Skip to main content link
- Focus visible indicators (2px sage green outline)
- ESC closes mobile menu
- Arrow keys for carousel (if implemented)

### Screen Reader Support
- Semantic HTML5
- ARIA labels for icon-only buttons
- Alternative text for images
- Form labels properly associated
- Status announcements for dynamic updates
- Canvas marked as `aria-hidden="true"` (decorative)

### Visual Accessibility
- Color contrast: WCAG AA minimum (4.5:1)
- Text remains readable over Voronoi background
- Don't rely solely on color for information
- Hover indicators also have text/icon changes

### Motion Preferences
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Static Voronoi or simple gradient fallback */
}
```

## 📊 Content Collection Checklist

### Information Needed:
- [ ] Exact course codes and names for current semester
- [ ] GitHub repository review for project details
- [ ] Preferred professional photo
- [ ] CV/Resume PDF (if offering download)
- [ ] Any specific impact projects or interests to highlight
- [ ] Blog post ideas or drafts (if starting blog immediately)
- [ ] Preferred email for contact form submissions

### Content to Remove:
- "Whatever" in coursework
- Lorem ipsum placeholders
- Broken blog links
- References to impact categories in footer (keeping it focused)

### Content to Add:
- Clear internship call-to-action
- Link between technical skills and impact goals
- Specific examples of impact-driven interest
- Current learning pathway (ML specialization progress)

## 🚀 Implementation Phases

### Phase 1: Core Structure
- Set up file structure
- Create CSS architecture foundation
- Build responsive navigation
- Set up HTML structure for all pages

### Phase 2: Voronoi Visualization
- Implement Canvas setup
- Add d3-delaunay integration
- Create cursor tracking
- Optimize performance
- Add mobile fallback

### Phase 3: Homepage Content
- Build hero section
- Implement My Story
- Create experience cards
- Build skills showcase
- Add certifications section

### Phase 4: Projects Implementation
- Review GitHub repositories
- Extract project information
- Build project cards
- Implement filtering
- Add project descriptions

### Phase 5: Blog System
- Create blog structure
- Design post template
- Add syntax highlighting
- Implement math notation
- Create newsletter signup

### Phase 6: Contact & Polish
- Build contact form
- Add form validation
- Implement submission handling
- Final content review
- Cross-browser testing

### Phase 7: Final Optimization
- Performance audit
- Accessibility testing
- Mobile testing
- SEO optimization
- Deployment preparation

## 🎓 SEO & Meta Tags

```html
<!-- Homepage -->
<title>Varya Kern | Data Science & Mathematics Student</title>
<meta name="description" content="Data Science and Mathematics student seeking impact-driven internships in quantitative analysis. Specializing in Python, R, and statistical modeling.">

<!-- Projects -->
<title>Projects | Varya Kern</title>
<meta name="description" content="Portfolio of data science and machine learning projects using Python, R, and statistical methods.">

<!-- Blog -->
<title>Blog | Varya Kern</title>
<meta name="description" content="Writing about data science, mathematics, and applying quantitative methods to social impact challenges.">

<!-- Contact -->
<title>Contact | Varya Kern</title>
<meta name="description" content="Get in touch about internship opportunities, collaborations, or data science projects.">
```

## 📈 Success Metrics

### Technical
- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Mobile responsive: Perfect on all sizes
- Voronoi runs at 60fps
- Page load: < 2 seconds

### User Experience
- Clear value proposition in < 5 seconds
- Easy project browsing
- Smooth, non-distracting animations
- Intuitive navigation

### Content
- Professional tone appropriate for internships
- Technical credibility demonstrated
- Impact focus clear
- All information accurate and current
- No placeholder content

## 🚀 Deployment

### Recommended: Netlify
- Free hosting with custom domain support
- Automatic HTTPS
- Built-in form handling
- Easy continuous deployment from Git
- Excellent performance (global CDN)

**Setup:**
1. Push to GitHub
2. Connect Netlify to repo
3. Deploy (no build process needed)
4. Add custom domain (optional)
5. Configure form notifications

### Alternative: GitHub Pages
- Free and simple
- Good for static sites
- Will need external form service

## 🎉 Unique Differentiators

What makes this portfolio stand out:
1. **Interactive mathematical visualization** - Shows rather than tells
2. **Impact-driven positioning** - Clear purpose beyond just getting a job
3. **Learning journey transparency** - Honest about growth areas
4. **Strong foundations** - Impressive academic achievements
5. **Clean, modern design** - Professional but memorable
6. **Thoughtful details** - Every element intentional

---

## 📝 Next Steps for Implementation

1. Fix remaining CSS issues (shadow transitions, button hover, nav alignment) ✅
2. Review GitHub to extract real project data
3. Begin building with updated content
4. Systematically implement each phase
5. Test thoroughly
6. Deploy and iterate

This redesigned portfolio will effectively showcase your unique combination of mathematical rigor, technical skill, and passion for impact-driven work—exactly what organizations look for in data science interns.
