// Smooth Scroll for Horizontal Index
document.querySelectorAll('.horizontal-index a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    
    // Switch active class
    document.querySelectorAll('.horizontal-index a').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// GSAP Entrance
gsap.from(".event-header", { opacity: 0, x: -50, duration: 1 });