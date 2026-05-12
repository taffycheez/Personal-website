/**
 * Blog Post Filtering Functionality
 * Allows filtering blog posts by category and search
 */

class BlogFilter {
  constructor() {
    this.filterButtons = document.querySelectorAll('[data-filter]');
    this.blogPosts = document.querySelectorAll('[data-category]');
    this.searchInput = document.querySelector('#blog-search');
    this.noPostsMessage = document.querySelector('#no-posts-message');
    this.activeFilter = 'all';
    
    this.init();
  }

  init() {
    if (this.filterButtons.length === 0) {
      return; // Not on blog page
    }

    this.setupFilters();
    this.setupSearch();
    this.updateCount();
  }

  setupFilters() {
    this.filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const filter = e.target.getAttribute('data-filter');
        this.filterPosts(filter);
        this.setActiveButton(e.target);
      });
    });
  }

  setupSearch() {
    if (!this.searchInput) return;

    this.searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      this.searchPosts(searchTerm);
    });
  }

  filterPosts(filter) {
    this.activeFilter = filter;
    
    this.blogPosts.forEach(post => {
      const categories = post.getAttribute('data-category').split(',').map(c => c.trim());
      const tags = post.getAttribute('data-tags')?.split(',').map(t => t.trim()) || [];
      
      if (filter === 'all') {
        this.showPost(post);
      } else if (categories.includes(filter) || tags.includes(filter)) {
        this.showPost(post);
      } else {
        this.hidePost(post);
      }
    });
    
    this.updateCount();
  }

  searchPosts(searchTerm) {
    if (!searchTerm) {
      // Reset to current filter
      this.filterPosts(this.activeFilter);
      return;
    }

    this.blogPosts.forEach(post => {
      const title = post.querySelector('.card-title')?.textContent.toLowerCase() || '';
      const description = post.querySelector('.card-body p')?.textContent.toLowerCase() || '';
      const tags = post.getAttribute('data-tags')?.toLowerCase() || '';
      const category = post.getAttribute('data-category')?.toLowerCase() || '';
      
      if (title.includes(searchTerm) || 
          description.includes(searchTerm) || 
          tags.includes(searchTerm) ||
          category.includes(searchTerm)) {
        this.showPost(post);
      } else {
        this.hidePost(post);
      }
    });
    
    this.updateCount();
  }

  showPost(post) {
    post.style.display = 'block';
    setTimeout(() => {
      post.style.opacity = '1';
      post.style.transform = 'scale(1)';
    }, 10);
  }

  hidePost(post) {
    post.style.opacity = '0';
    post.style.transform = 'scale(0.9)';
    setTimeout(() => {
      post.style.display = 'none';
    }, 300);
  }

  setActiveButton(button) {
    this.filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  }

  updateCount() {
    const visiblePosts = Array.from(this.blogPosts).filter(
      post => post.style.display !== 'none'
    );
    
    const countElement = document.querySelector('#post-count');
    if (countElement) {
      countElement.textContent = `${visiblePosts.length} post${visiblePosts.length !== 1 ? 's' : ''}`;
    }

    // Show/hide no posts message
    if (this.noPostsMessage) {
      if (this.blogPosts.length === 0 || visiblePosts.length === 0) {
        this.noPostsMessage.style.display = 'block';
      } else {
        this.noPostsMessage.style.display = 'none';
      }
    }
  }

  // Method to dynamically add blog posts
  addPost(postData) {
    const postsGrid = document.querySelector('#blog-posts-grid');
    if (!postsGrid) return;

    const post = this.createPostCard(postData);
    postsGrid.appendChild(post);
    
    // Update posts array
    this.blogPosts = document.querySelectorAll('[data-category]');
    this.updateCount();

    // Hide no posts message if visible
    if (this.noPostsMessage) {
      this.noPostsMessage.style.display = 'none';
    }
  }

  createPostCard(data) {
    const post = document.createElement('article');
    post.className = 'card hover-lift fade-in-section';
    post.setAttribute('data-category', data.categories.join(','));
    post.setAttribute('data-tags', data.tags.join(','));
    
    const categoryBadgeClass = data.categories[0] === 'philosophy' ? 'badge' : 
                                 data.categories[0] === 'literature' ? 'badge-secondary' : 'badge-accent';
    
    post.innerHTML = `
      <div class="card-header">
        <span class="${categoryBadgeClass}">${data.categories[0]}</span>
        <span class="text-sm text-tertiary mt-2">${data.date}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${data.title}</h3>
        <p class="text-secondary">${data.excerpt}</p>
      </div>
      <div class="card-footer flex-between">
        <a href="${data.url}" class="btn btn-sm btn-primary">
          <i class="fas fa-book-open"></i> Read Post
        </a>
        <span class="text-sm text-tertiary">${data.readTime} min read</span>
      </div>
    `;
    
    return post;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.blogFilter = new BlogFilter();
  });
} else {
  window.blogFilter = new BlogFilter();
}
