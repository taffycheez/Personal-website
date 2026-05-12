/**
 * Main JavaScript File
 * General utilities and form handling
 */

// Contact Form Handler
class ContactForm {
  constructor(formId) {
    this.form = document.getElementById(formId);
    if (!this.form) return;
    
    this.submitBtn = this.form.querySelector('button[type="submit"]');
    this.init();
  }

  init() {
    this.form.addEventListener('submit', this.handleSubmit.bind(this));
    
    // Real-time validation
    const inputs = this.form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearError(input));
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    // Validate all fields
    if (!this.validateForm()) {
      return;
    }
    
    // Get form data
    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());
    
    // Show loading state
    this.setLoading(true);
    
    try {
      // Submit to Formspree or your preferred service
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        this.showSuccess();
        this.form.reset();
      } else {
        this.showError('Something went wrong. Please try again.');
      }
    } catch (error) {
      this.showError('Network error. Please check your connection.');
    } finally {
      this.setLoading(false);
    }
  }

  validateForm() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!this.validateField(input)) {
        isValid = false;
      }
    });
    
    return isValid;
  }

  validateField(field) {
    const value = field.value.trim();
    const type = field.type;
    
    // Clear previous error
    this.clearError(field);
    
    // Required check
    if (field.hasAttribute('required') && !value) {
      this.showFieldError(field, 'This field is required');
      return false;
    }
    
    // Email validation
    if (type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        this.showFieldError(field, 'Please enter a valid email address');
        return false;
      }
    }
    
    // Min length check
    const minLength = field.getAttribute('minlength');
    if (minLength && value.length < parseInt(minLength)) {
      this.showFieldError(field, `Minimum ${minLength} characters required`);
      return false;
    }
    
    return true;
  }

  showFieldError(field, message) {
    field.classList.add('input-error');
    
    let errorDiv = field.parentElement.querySelector('.error-message');
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      field.parentElement.appendChild(errorDiv);
    }
    
    errorDiv.textContent = message;
    
    // Announce error to screen readers
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', 'error-' + field.id);
  }

  clearError(field) {
    field.classList.remove('input-error');
    field.classList.remove('input-success');
    
    const errorDiv = field.parentElement.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
    
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
  }

  setLoading(loading) {
    if (loading) {
      this.submitBtn.disabled = true;
      this.submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    } else {
      this.submitBtn.disabled = false;
      this.submitBtn.innerHTML = 'Send Message';
    }
  }

  showSuccess() {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-info animate-fade-in';
    successDiv.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <strong>Success!</strong> Your message has been sent. I'll get back to you soon!
    `;
    
    this.form.insertAdjacentElement('beforebegin', successDiv);
    
    setTimeout(() => {
      successDiv.style.opacity = '0';
      setTimeout(() => successDiv.remove(), 300);
    }, 5000);
  }

  showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-warning animate-fade-in';
    errorDiv.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <strong>Error:</strong> ${message}
    `;
    
    this.form.insertAdjacentElement('beforebegin', errorDiv);
    
    setTimeout(() => {
      errorDiv.style.opacity = '0';
      setTimeout(() => errorDiv.remove(), 300);
    }, 5000);
  }
}

// Utility Functions
const utils = {
  // Debounce function
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Format date
  formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  },

  // Copy to clipboard
  copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        console.log('Copied to clipboard');
      });
    } else {
      // Fallback
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize contact form if on contact page
  const contactForm = new ContactForm('contact-form');
  
  // Add page transition animation
  document.body.classList.add('page-transition');
  
  // External links open in new tab
  const externalLinks = document.querySelectorAll('a[href^="http"]');
  externalLinks.forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });
  
  // Add loading="lazy" to images below the fold
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index > 3 && !img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
});

// Export utilities for use in other scripts
window.utils = utils;
window.ContactForm = ContactForm;
