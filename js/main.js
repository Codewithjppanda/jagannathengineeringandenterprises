// Main JavaScript for Jagannath Engineering & Equipment

document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lenis smooth scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Initialize AOS
  AOS.init({
    once: true,
    offset: 120,
    duration: 600,
    easing: 'ease-out-cubic'
  });

  // Sticky header with scroll effect
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 10) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }

    // Update back to top button
    updateBackToTop(currentScrollY);
    
    lastScrollY = currentScrollY;
  });

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  
  function updateBackToTop(scrollY) {
    if (scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      lenis.scrollTo(0);
    });
  }

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Hero animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
      gsap.fromTo(heroContent, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
      );
    }

    // Hero parallax effect
    const heroImage = document.querySelector('.hero-bg');
    if (heroImage) {
      gsap.to(heroImage, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroImage,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Counter animations
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      
      gsap.fromTo(counter, 
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          onUpdate: function() {
            counter.innerText = Math.ceil(counter.innerText);
          }
        }
      );
    });

    // Stagger animations for cards
    gsap.utils.toArray('.service-card, .project-card').forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );
    });
  }

  // Initialize GLightbox for gallery
  if (typeof GLightbox !== 'undefined') {
    const lightbox = GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideos: true,
      closeOnOutsideClick: true,
      skin: 'clean'
    });
  }

  // Form handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      try {
        const formData = new FormData(this);
        const response = await fetch(this.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
        
        if (response.ok) {
          showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
          this.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        showToast('Failed to send message. Please try again or contact us directly.', 'error');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  // Toast notification function
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 ${
      type === 'success' ? 'bg-green-500 text-white' :
      type === 'error' ? 'bg-red-500 text-white' :
      'bg-blue-500 text-white'
    }`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Trigger the animation
    setTimeout(() => {
      toast.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
      toast.classList.add('translate-x-full');
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 5000);
  }

  // Mobile menu toggle handling is done via Alpine.js in HTML
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // Close mobile menu
      const mobileMenuData = document.querySelector('[x-data]');
      if (mobileMenuData && mobileMenuData.__x) {
        mobileMenuData.__x.$data.mobileMenuOpen = false;
      }
    }
  });

  // Skip to content functionality
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector('#main-content');
      if (target) {
        target.focus();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Lazy loading for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
});

// Project filtering for projects page
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-item');
  const buttons = document.querySelectorAll('.filter-btn');
  
  // Update active button
  buttons.forEach(btn => {
    btn.classList.remove('bg-sky-600', 'text-white');
    btn.classList.add('bg-gray-100', 'text-gray-700');
  });
  
  const activeBtn = document.querySelector(`[onclick="filterProjects('${category}')"]`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-gray-100', 'text-gray-700');
    activeBtn.classList.add('bg-sky-600', 'text-white');
  }
  
  // Filter projects
  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.classList.remove('hidden');
      // Re-trigger AOS animation
      if (typeof AOS !== 'undefined') {
        project.classList.add('aos-animate');
      }
    } else {
      project.classList.add('hidden');
    }
  });
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement && typeof lenis !== 'undefined') {
      lenis.scrollTo(targetElement);
    }
  }
});