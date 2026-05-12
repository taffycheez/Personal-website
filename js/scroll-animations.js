/**
 * Scroll Animations using Intersection Observer
 * Handles fade-in effects and scroll-to-top button
 */

class ScrollAnimations {
  constructor() {
    this.scrollToTopBtn = null;
    this.observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    this.init();
  }

  init() {
    this.setupIntersectionObserver();
    this.setupScrollToTop();
    this.setupProgressBars();
  }

  setupIntersectionObserver() {
    // Observe elements with fade-in-section class
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // If element has progress bars, animate them
          const progressBars = entry.target.querySelectorAll('.progress-fill');
          if (progressBars.length > 0) {
            this.animateProgressBars(progressBars);
          }
        }
      });
    }, this.observerOptions);

    // Observe all fade-in sections
    const fadeInSections = document.querySelectorAll('.fade-in-section');
    fadeInSections.forEach(section => {
      observer.observe(section);
    });

    // Observe reveal elements
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(element => {
      observer.observe(element);
    });
  }

  setupScrollToTop() {
    // Create scroll to top button if it doesn't exist
    this.scrollToTopBtn = document.querySelector('.scroll-to-top');
    
    if (!this.scrollToTopBtn) {
      this.scrollToTopBtn = document.createElement('button');
      this.scrollToTopBtn.className = 'scroll-to-top';
      this.scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
      this.scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
      document.body.appendChild(this.scrollToTopBtn);
    }

    // Show/hide based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        this.scrollToTopBtn.classList.add('visible');
      } else {
        this.scrollToTopBtn.classList.remove('visible');
      }
    });

    // Click handler
    this.scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  setupProgressBars() {
    // Will be triggered by Intersection Observer
  }

  animateProgressBars(progressBars) {
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-progress') || '0';
      bar.style.setProperty('--progress-width', width + '%');
      bar.classList.add('progress-animate');
    });
  }

  // Utility to add fade-in animation to new elements
  addFadeInAnimation(element) {
    element.classList.add('fade-in-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, this.observerOptions);
    
    observer.observe(element);
  }

  // Parallax effect for hero section
  setupParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      
      if (scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
      }
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.scrollAnimations = new ScrollAnimations();
  });
} else {
  window.scrollAnimations = new ScrollAnimations();
}
