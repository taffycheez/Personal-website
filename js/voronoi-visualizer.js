/**
 * Simple Elegant Particle System
 * Calm, smooth drifting particles with cursor interaction
 */

class VoronoiVisualizer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.width = 0;
    this.height = 0;
    
    this.config = {
      numParticles: 30,
      mobileNumParticles: 15,
      particleRadius: 4,
      maxDistance: 200,
      baseSpeed: 0.4,
      mouseRadius: 100,
      mouseForce: 0.8,
      colors: [
        'rgba(149, 164, 131, 0.7)',
        'rgba(152, 114, 132, 0.6)',
        'rgba(139, 115, 85, 0.5)',
      ],
      lineColor: 'rgba(149, 164, 131, 0.2)',
    };
    
    this.particles = [];
    this.mouse = { x: null, y: null, active: false };
    this.animationFrame = null;
    this.isRunning = false;
    
    this.init();
  }

  init() {
    this.resize();
    this.generateParticles();
    this.setupEventListeners();
    this.start();
  }

  resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = this.canvas.getBoundingClientRect();
    
    this.width = rect.width;
    this.height = rect.height;
    
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.scale(dpr, dpr);
  }

  generateParticles() {
    const isMobile = window.innerWidth < 768;
    const num = isMobile ? this.config.mobileNumParticles : this.config.numParticles;
    
    this.particles = [];
    for (let i = 0; i < num; i++) {
      const angle = Math.random() * Math.PI * 2;
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: Math.cos(angle) * this.config.baseSpeed,
        vy: Math.sin(angle) * this.config.baseSpeed,
        color: this.config.colors[Math.floor(Math.random() * this.config.colors.length)],
        size: this.config.particleRadius + Math.random(),
      });
    }
  }

  setupEventListeners() {
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.active = true;
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.active = false;
    });

    window.addEventListener('resize', () => {
      this.resize();
      this.generateParticles();
    });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.stop();
      } else {
        this.start();
      }
    });
  }

  updateParticles() {
    this.particles.forEach(particle => {
      // Simple constant drift
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Wrap around edges
      if (particle.x < -20) particle.x = this.width + 20;
      if (particle.x > this.width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = this.height + 20;
      if (particle.y > this.height + 20) particle.y = -20;

      // Mouse repulsion - ALL particles always respond
      if (this.mouse.active && this.mouse.x !== null && this.mouse.y !== null) {
        const dx = particle.x - this.mouse.x;
        const dy = particle.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance > 0 && distance < this.config.mouseRadius) {
          const force = (1 - distance / this.config.mouseRadius) * this.config.mouseForce;
          const angle = Math.atan2(dy, dx);
          
          particle.vx += Math.cos(angle) * force * 0.5;
          particle.vy += Math.sin(angle) * force * 0.5;
        }
      }

      // Very gentle damping
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Keep minimum speed
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      if (speed < this.config.baseSpeed) {
        const scale = this.config.baseSpeed / speed;
        particle.vx *= scale;
        particle.vy *= scale;
      }

      // Limit max speed
      if (speed > this.config.baseSpeed * 3) {
        const scale = (this.config.baseSpeed * 3) / speed;
        particle.vx *= scale;
        particle.vy *= scale;
      }
    });
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.config.maxDistance) {
          const opacity = (1 - distance / this.config.maxDistance) * 0.4;
          this.ctx.strokeStyle = this.config.lineColor.replace('0.2', opacity.toString());
          this.ctx.lineWidth = 1.5;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  }

  drawParticles() {
    this.particles.forEach(particle => {
      // Glow
      const gradient = this.ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, 10
      );
      gradient.addColorStop(0, particle.color);
      gradient.addColorStop(1, particle.color.replace(/[\d.]+\)$/, '0)'));

      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, 10, 0, Math.PI * 2);
      this.ctx.fill();

      // Core
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
    });
  }

  render() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.drawConnections();
    this.drawParticles();
  }

  animate() {
    if (!this.isRunning) return;
    
    this.updateParticles();
    this.render();
    
    this.animationFrame = requestAnimationFrame(this.animate.bind(this));
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.animate();
  }

  stop() {
    this.isRunning = false;
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVoronoi);
} else {
  initVoronoi();
}

function initVoronoi() {
  const canvas = document.getElementById('voronoi-canvas');
  if (canvas) {
    window.voronoiVisualizer = new VoronoiVisualizer('voronoi-canvas');
  }
}
