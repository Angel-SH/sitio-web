document.addEventListener("DOMContentLoaded", function () {
    const translations = {
        en: {
            login: "Login",
            register: "Register",
            home: "Home",
            about: "About Us",
            team: "Our Team",
            pricing: "Pricing",
            "chat-tag": "Chat software",
            "hero-title": "Provide real-time support through chat for your customers",
            "hero-description": "Great software that allows you to chat from any place at any time without any interruption",
            "chat-now": "Chatting Now",
            "learn-more": "Learn More",
            "scroll-down": "SCROLL DOWN",
            "tools-title": "Effortless integration with your preferred tools",
            
            // TR ACcess a unified section
            // TR Craft a communication section 

            "promo-title": "Get direct orders from your customers",
            "promo-description": "Create custom landing pages with Rare blocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available.",
            "stat-websites": "Website's <br> Powering",
            "stat-chats": "Chats in <br> Last 2022"


        },
        es: {
            login: "Iniciar sesión",
            register: "Registrarse",
            home: "Inicio",
            about: "Sobre Nosotros",
            team: "Nuestro Equipo",
            pricing: "Precios",
            "chat-tag": "Software de chat",
            "hero-title": "Soporte en tiempo real a tus clientes a través del chat",
            "hero-description": "Software que te permite chatear desde cualquier lugar en cualquier momento sin interrupciones",
            "chat-now": "Chatear Ahora",
            "learn-more": "Información",
            "scroll-down": "DESPLAZARSE HACIA ABAJO",
            "tools-title": "Integración sin esfuerzo con tus herramientas preferidas",
            
            // TR ACcess a unified section 
            // TR Craft a communication section 
            
            "promo-title": "Recibe pedidos directos de tus clientes",
            "promo-description": "Crea páginas de destino personalizadas con Rare blocks que convierten más visitantes que cualquier otro sitio web. Con muchos bloques únicos, crea fácilmente una página. Hay muchas variaciones de pasajes disponibles.",
            "stat-websites": "Sitios web <br> funcionando",
            "stat-chats": "Chats en el <br> último 2022"

        },
    };

    const languageSelector = document.getElementById("language-selector");
    const elementsToTranslate = document.querySelectorAll("[data-lang]");

    function updateLanguage(lang) {
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-lang");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key]; 
            }
        });
        localStorage.setItem("selectedLanguage", lang);
    }

    languageSelector.addEventListener("change", function () {
        updateLanguage(this.value);
    });

    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    languageSelector.value = savedLanguage;
    updateLanguage(savedLanguage);
});
