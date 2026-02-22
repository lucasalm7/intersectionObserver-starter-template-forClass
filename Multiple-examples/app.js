// --- 1 & 2: Slide-in and Staggered Animations ---
const animatedElements = document.querySelectorAll('.slide-in, .stagger-item');

// Helper to set delays dynamically - add staggered delays based on index(dynamic approach). Automatically adjusts if you add/remove items without needing to change CSS.
const staggerItems = document.querySelectorAll('.stagger-item');
const delayIncrement = 0.1; // Seconds per item

staggerItems.forEach((el, index) => {
  // index 0 gets 0.1s, index 1 gets 0.2s, etc.
  el.style.transitionDelay = `${(index + 1) * delayIncrement}s`; 
});

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
    // Removed the 'else' block so they stick around until we hit the top
  });
}, { threshold: 0.1 });

animatedElements.forEach(el => animationObserver.observe(el));


// --- 3: Parallax Effect (Using Observer to only run when visible) ---
const parallaxContainer = document.querySelector('.parallax-container');
const parallaxBg = document.querySelector('.parallax-bg');

/* 
   We use io to toggle a 'scroll' listener. 
   Calculation is expensive, so only do it when section is visible! 
*/
const parallaxObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.addEventListener('scroll', updateParallax);
    } else {
      window.removeEventListener('scroll', updateParallax);
    }
  });
});

parallaxObserver.observe(parallaxContainer);

function updateParallax() {
  const scrollPosition = window.scrollY;
  // Move background slower than scroll speed (0.5 speed)
  parallaxBg.style.transform = `translateY(${scrollPosition * 0.3}px)`;
}


// --- 4: Page Progress Bar + RESET LOGIC ---
window.addEventListener('scroll', () => {
  // How much have we scrolled?
  const scrollTop = window.scrollY;

  // NEW: Reset animations when at the very top
  if (scrollTop === 0) {
    animatedElements.forEach(el => el.classList.remove('show'));
  }

  // How taall is the entrie page content?
  const docHeight = document.body.scrollHeight - window.innerHeight;
  
  // Calculate percentage
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  document.querySelector('.progress-bar').style.width = `${scrollPercent}%`;
});
