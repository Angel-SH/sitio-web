// Add floating animation to icons
document.querySelectorAll('.floating-icons .icon').forEach(icon => {
    // Random starting position
    const startX = Math.random() * 20 - 10;
    const startY = Math.random() * 20 - 10;
    
    // Apply random floating animation
    icon.style.transform = `translate(${startX}px, ${startY}px)`;
    
    setInterval(() => {
        const moveX = Math.random() * 20 - 10;
        const moveY = Math.random() * 20 - 10;
        
        icon.style.transition = 'transform 3s ease-in-out';
        icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }, 3000);
});
// Scroll down function when clicking "SCROLL DOWN"
document.querySelector('.scroll-down').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight, // Se desplaza hasta el final de la página
        behavior: 'smooth' // Animación suave
    });
});

