// Initialize AOS for animations
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000,   // Duration of the animation (in milliseconds)
        once: true,       // Animation will happen only once
        offset: 200,      // Start animation after scrolling 200px
        easing: 'ease-in-out', // Easing function for smooth animation
        delay: 100,       // Delay before the animation starts (in milliseconds)
        anchorPlacement: 'top-bottom' // Anchor point for animation trigger
    });
});
