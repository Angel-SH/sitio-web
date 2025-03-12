document.addEventListener("DOMContentLoaded", () => {
    // Agregar animaciones de entrada al cargar la página
    const elementsToAnimate = document.querySelectorAll(".hero-content, .floating-icons, .tools-section, .nav-links, .auth-buttons, .logo");

    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add("animate");
        }, index * 200); // Retraso entre cada animación
    });

    // Agregar animación flotante a los iconos
    document.querySelectorAll('.floating-icons .icon').forEach(icon => {
        // Posición inicial aleatoria
        const startX = Math.random() * 20 - 10;
        const startY = Math.random() * 20 - 10;
        
        // Aplicar posición inicial
        icon.style.transform = `translate(${startX}px, ${startY}px)`;
        
        setInterval(() => {
            const moveX = Math.random() * 20 - 10;
            const moveY = Math.random() * 20 - 10;
            
            icon.style.transition = 'transform 3s ease-in-out';
            icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }, 3000);
    });

    // Funcionalidad de desplazamiento suave al hacer clic en "SCROLL DOWN"
    const scrollDownButton = document.querySelector('.scroll-down');
    if (scrollDownButton) {
        scrollDownButton.addEventListener('click', function() {
            window.scrollTo({
                top: document.body.scrollHeight, // Se desplaza hasta el final de la página
                behavior: 'smooth' // Animación suave
            });
        });
    }
});
