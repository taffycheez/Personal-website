/**
 * Project Filtering Functionality
 * Allows filtering projects by technology and type
 */

class ProjectFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('[data-filter]');
    this.projectCards = document.querySelectorAll('[data-category]');
    this.searchInput = document.querySelector('#project-search');
    this.activeFilter = 'all';
    
    this.init();
  }

  init() {
    if (this.filterButtons.length === 0 || this.projectCards.length === 0) {
      return; // Not on projects page
    }

    this.setupFilters();
    this.setupSearch();
  }

  setupFilters() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        this.filterProjects(filter);
        this.setActiveButton(e.target);
      });
    });
  }

  setupSearch() {
    if (!this.searchInput) return;

    this.searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      this.searchProjects(searchTerm);
    });
  }

  filterProjects(filter) {
    this.activeFilter = filter;
    
    this.projectCards.forEach(card => {
      const categories = card.getAttribute('data-category').split(',').map(c => c.trim());
      const tags = card.getAttribute('data-tags')?.split(',').map(t => t.trim()) || [];
      
      if (filter === 'all') {
        this.showCard(card);
      } else if (categories.includes(filter) || tags.includes(filter)) {
        this.showCard(card);
      } else {
        this.hideCard(card);
      }
    });
    
    this.updateCount();
  }

  searchProjects(searchTerm) {
    if (!searchTerm) {
      // Reset to current filter
      this.filterProjects(this.activeFilter);
      return;
    }

    this.projectCards.forEach(card => {
      const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const description = card.querySelector('.card-body')?.textContent.toLowerCase() || '';
      const tags = card.getAttribute('data-tags')?.toLowerCase() || '';
      
      if (title.includes(searchTerm) || description.includes(searchTerm) || tags.includes(searchTerm)) {
        this.showCard(card);
      } else {
        this.hideCard(card);
      }
    });
    
    this.updateCount();
  }

  showCard(card) {
    // Reset position first
    card.style.position = 'relative';
    card.style.visibility = 'hidden';
    card.style.display = 'block';
    
    // Force reflow to ensure layout is calculated
    void card.offsetHeight;
    
    // Now animate in
    requestAnimationFrame(() => {
      card.style.visibility = 'visible';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      
      requestAnimationFrame(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      });
    });
  }

  hideCard(card) {
    card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    card.style.opacity = '0';
    card.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      card.style.display = 'none';
    }, 250);
  }

  setActiveButton(button) {
    this.filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  }

  updateCount() {
    const visibleCards = Array.from(this.projectCards).filter(
      card => card.style.display !== 'none'
    );
    
    const countElement = document.querySelector('#project-count');
    if (countElement) {
      countElement.textContent = `${visibleCards.length} project${visibleCards.length !== 1 ? 's' : ''}`;
    }
  }

  // Method to dynamically add project cards
  addProject(projectData) {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    const card = this.createProjectCard(projectData);
    projectsGrid.appendChild(card);
    
    // Add to cards array
    this.projectCards = document.querySelectorAll('[data-category]');
  }

  createProjectCard(data) {
    const card = document.createElement('div');
    card.className = 'card fade-in-section';
    card.setAttribute('data-category', data.categories.join(','));
    card.setAttribute('data-tags', data.tags.join(','));
    
    card.innerHTML = `
      <div class="card-header">
        <h3 class="card-title">${data.title}</h3>
      </div>
      <div class="card-body">
        <p>${data.description}</p>
        <div class="flex gap-2 flex-wrap mt-4">
          ${data.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="card-footer flex gap-3">
        ${data.githubUrl ? `<a href="${data.githubUrl}" class="btn btn-sm btn-secondary" target="_blank" rel="noopener">
          <i class="fab fa-github"></i> View Code
        </a>` : ''}
        ${data.liveUrl ? `<a href="${data.liveUrl}" class="btn btn-sm btn-primary" target="_blank" rel="noopener">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>` : ''}
      </div>
    `;
    
    return card;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.projectFilter = new ProjectFilter();
  });
} else {
  window.projectFilter = new ProjectFilter();
}
