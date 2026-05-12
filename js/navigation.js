/**
 * Navigation functionality
 * Handles mobile menu, scroll behavior, and active states
 */

class Navigation {
  constructor() {
    this.header = document.querySelector('header');
    this.mobileToggle = document.querySelector('.mobile-menu-toggle');
    this.mobileNav = document.querySelector('.nav-mobile');
    this.mobileOverlay = document.querySelector('.mobile-overlay');
    this.navLinks = document.querySelectorAll('.nav-link, .nav-mobile-link');
    
    this.isOpen = false;
    this.lastScroll = 0;
    
    this.init();
  }

  init() {
    this.setupMobileMenu();
    this.setupScrollBehavior();
    this.setActiveNavItem();
    this.setupSmoothScroll();
  }

  setupMobileMenu() {
    if (!this.mobileToggle) return;

    // Toggle mobile menu
    this.mobileToggle.addEventListener('click', () => {
      this.toggleMobileMenu();
    });

    // Close when clicking overlay
    if (this.mobileOverlay) {
      this.mobileOverlay.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    }

    // Close when clicking a link
    const mobileLinks = document.querySelectorAll('.nav-mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMobileMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMobileMenu();
      }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && this.isOpen) {
        this.closeMobileMenu();
      }
    });
  }

  toggleMobileMenu() {
    if (this.isOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.isOpen = true;
    this.mobileToggle.classList.add('active');
    this.mobileNav.classList.add('open');
    this.mobileOverlay.classList.add('visible');
    document.body.classList.add('no-scroll');
    
    // Set aria attributes
    this.mobileToggle.setAttribute('aria-expanded', 'true');
    this.mobileNav.setAttribute('aria-hidden', 'false');
    
    // Focus first link in mobile menu
    const firstLink = this.mobileNav.querySelector('.nav-mobile-link');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 300);
    }
  }

  closeMobileMenu() {
    this.isOpen = false;
    this.mobileToggle.classList.remove('active');
    this.mobileNav.classList.remove('open');
    this.mobileOverlay.classList.remove('visible');
    document.body.classList.remove('no-scroll');
    
    // Set aria attributes
    this.mobileToggle.setAttribute('aria-expanded', 'false');
    this.mobileNav.setAttribute('aria-hidden', 'true');
    
    // Return focus to toggle button
    this.mobileToggle.focus();
  }

  setupScrollBehavior() {
    if (!this.header) return;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add shadow to header when scrolled
      if (currentScroll > 10) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
      
      this.lastScroll = currentScroll;
    });
  }

  setActiveNavItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    this.navLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href === currentPage || 
          (currentPage === '' && href === 'index.html') ||
          (currentPage === '/' && href === 'index.html')) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  setupSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') {
          e.preventDefault();
          return;
        }
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Update URL without jumping
          history.pushState(null, null, targetId);
          
          // Focus the target element for accessibility
          targetElement.focus({ preventScroll: true });
          if (!targetElement.hasAttribute('tabindex')) {
            targetElement.setAttribute('tabindex', '-1');
          }
        }
      });
    });
  }
}

// Initialize navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.navigation = new Navigation();
  });
} else {
  window.navigation = new Navigation();
}
