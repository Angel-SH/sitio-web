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
            
            "chat-title": "An ideal interface for swift, code-free support",
            "chat-desc-1": "The Visual Builder enables you to effortlessly create a top-notch AI chatbot with no coding required. Drag and drop conversational elements, and instantly test them to craft engaging client interactions.",
            "chat-desc-2": "Experience a modern messaging platform that seamlessly integrates everything essential for effective support, sales, and engagement, all within a user-friendly interface.",
            "chat-btn": "Learn More",

            "hero-video-title": "Craft a communication<br>strategy using live video chat",
            "hero-video-description": "Video conferencing enhances productivity and fosters collaboration, making it a versatile tool for achieving these goals.",

            "promo-title": "Get direct orders from your customers",
            "promo-description": "Create custom landing pages with Rare blocks that converts more visitors than any website. With lots of unique blocks easily build a page. There are many variations of passages of available.",
            "stat-websites": "Website's <br> Powering",
            "stat-chats": "Chats in <br> Last 2022",

            "testimonials-title": "Give our users a great experience",
            "testimonials-subtext": "Community building is a field of practices directed toward the creation or enhancement of community among individuals.",
            "testimonial1-name": "Jhonatan Albert",
            "testimonial1-role": "CEO, GoTick",
            "testimonial1-text": "\"They are able to help a startup like mine scale and are very responsive to all our unique needs.\"",
            "testimonial2-name": "Jhonatan Albert",
            "testimonial2-role": "Owner, Code Dev",
            "testimonial2-text": "\"Division of Labor's creative ideas were great, and working with their team was truly easy they were very responsive.\"",
            "testimonial3-name": "Jhonatan Albert",
            "testimonial3-role": "Marketing & Office Coordinator",
            "testimonial3-text": "\"We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, etc\"",

            "pricing-title": "Pricing Plans",
            "pricing-subtitle": "Coca landing page UI Kit no credit card required. All plans come with a free, 14 day trial of our Premium features.",
            "pricing-monthly": "Monthly",
            "pricing-yearly": "Yearly",
            "most-popular": "MOST POPULAR",
            "plan-silver": "SILVER",
            "plan-gold": "GOLD",
            "plan-premium": "PREMIUM",
            "plan-per-month": "/month",
            "feature-no-discount": "No Discount",
            "feature-basic-support": "Basic Support",
            "feature-ads-banner-free": "Ads Banner Free",
            "feature-design-style": "Design Style",
            "feature-component-library": "Component Library",
            "feature-limited-links": "All limited links",
            "feature-analytics": "Own analytics platform",
            "feature-chat-support": "Chat support",
            "feature-optimize-hashtags": "Optimize hashtags",
            "feature-unlimited-users": "Unlimited users",
            "choose-plan": "Choose plan",

            "cta-title": "Sign up for your free trial today and incorporate live chat on your website.",
            "cta-subtitle": "Unlock the Power of Real-Time Customer Engagement: Start Your<br>Free Trial and Integrate Live Chat on Your Website Today!",
            "cta-google-play": "Get it on Google Play",
            "cta-app-store": "Download on the App Store",

            "footer-title": "Are you prepared to collaborate with us?",
            "footer-address": "1929, Bancangan, Sambit,<br> Suroboyo, Wakanda",
            "footer-email": "hello@cocapay.co",
            "footer-button": "Get Start a Project →",
            "footer-copyright": "© Coca Pay by Sans Brothers",
            "footer-terms": "Terms & Conditions",
            "footer-privacy": "Privacy Policy",

            "content1-title": "Access a unified <br> multi-channel messaging <br> solution in one place",
            "content1-subtitle": "Enable your customers to communicate effortlessly through Live Chat, Facebook, Telegram, and numerous other tools, with prompt responses from Coca",
            "feature1": "Engage in real-time chats with visitors, prospects, and customers.",
            "feature2": "Easily scale personalized conversations without limitations.",
            "feature3": "Participate in contextual chat conversations on the go."


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
            
            "chat-title": "Una interfaz ideal para un soporte ágil y sin código",
            "chat-desc-1": "El Constructor Visual te permite crear sin esfuerzo un chatbot de IA de alta calidad sin necesidad de programación. Arrastra y suelta elementos conversacionales y pruébalos al instante para diseñar interacciones atractivas con los clientes.",
            "chat-desc-2": "Experimenta una plataforma de mensajería moderna que integra sin problemas todo lo esencial para un soporte, ventas y compromiso efectivos, todo dentro de una interfaz fácil de usar.",
            "chat-btn": "Aprender más",
            
            "hero-video-title": "Elabora una estrategia de comunicación<br>utilizando chat de video en vivo",
            "hero-video-description": "Las videoconferencias mejoran la productividad y fomentan la colaboración, convirtiéndolas en una herramienta versátil para alcanzar estos objetivos.", 
            
            "promo-title": "Recibe pedidos directos de tus clientes",
            "promo-description": "Crea páginas de destino personalizadas con Rare blocks que convierten más visitantes que cualquier otro sitio web. Con muchos bloques únicos, crea fácilmente una página. Hay muchas variaciones de pasajes disponibles.",
            "stat-websites": "Sitios web <br> funcionando",
            "stat-chats": "Chats en el <br> último 2022",

            "testimonials-title": "Brinda a nuestros usuarios una gran experiencia",
            "testimonials-subtext": "La construcción de comunidad es un conjunto de prácticas dirigidas a la creación o mejora de una comunidad entre individuos.",
            "testimonial1-name": "Jhonatan Albert",
            "testimonial1-role": "CEO, GoTick",
            "testimonial1-text": "\"Pueden ayudar a una startup como la mía a escalar y son muy receptivos a todas nuestras necesidades únicas.\"",
            "testimonial2-name": "Jhonatan Albert",
            "testimonial2-role": "Propietario, Code Dev",
            "testimonial2-text": "\"Las ideas creativas de Division of Labor fueron geniales y trabajar con su equipo fue realmente fácil, eran muy receptivos.\"",
            "testimonial3-name": "Jhonatan Albert",
            "testimonial3-role": "Coordinador de Marketing y Oficina",
            "testimonial3-text": "\"Quedamos impresionados cuando vimos Mixland. La combinación de redes sociales, correo electrónico, base de conocimientos, móvil, etc.\"",

            "pricing-title": "Planes de precios",
            "pricing-subtitle": "El kit de UI de Coca Landing Page no requiere tarjeta de crédito. Todos los planes incluyen una prueba gratuita de 14 días de nuestras funciones Premium.",
            "pricing-monthly": "Mensual",
            "pricing-yearly": "Anual",
            "most-popular": "MÁS POPULAR",
            "plan-silver": "SILVER",
            "plan-gold": "GOLD",
            "plan-premium": "PREMIUM",
            "plan-per-month": "/mes",
            "feature-no-discount": "Sin descuento",
            "feature-basic-support": "Soporte básico",
            "feature-ads-banner-free": "Sin anuncios publicitarios",
            "feature-design-style": "Estilo de diseño",
            "feature-component-library": "Biblioteca de componentes",
            "feature-limited-links": "Todos los enlaces limitados",
            "feature-analytics": "Plataforma de análisis propia",
            "feature-chat-support": "Soporte por chat",
            "feature-optimize-hashtags": "Optimización de hashtags",
            "feature-unlimited-users": "Usuarios ilimitados",
            "choose-plan": "Elegir plan",

            "cta-title": "Regístrate hoy para tu prueba gratuita e incorpora chat en vivo en tu sitio web.",
            "cta-subtitle": "Desbloquea el poder del compromiso en tiempo real con tus clientes: comienza tu prueba gratuita e integra el chat en vivo en tu sitio web hoy mismo.",
            "cta-google-play": "Consíguelo en Google Play",
            "cta-app-store": "Descárgalo en la App Store",

            "footer-title": "¿Estás listo para colaborar con nosotros?",
            "footer-address": "1929, Bancangan, Sambit,<br> Suroboyo, Wakanda",
            "footer-email": "hello@cocapay.co",
            "footer-button": "Comenzar un proyecto →",
            "footer-copyright": "© Coca Pay by Sans Brothers",
            "footer-terms": "Términos y Condiciones",
            "footer-privacy": "Política de Privacidad",

            "content1-title": "Accede a una solución <br> unificada de mensajería <br> multicanal en un solo lugar",
            "content1-subtitle": "Permite que tus clientes se comuniquen sin esfuerzo a través de Live Chat, Facebook, Telegram y muchas otras herramientas, con respuestas rápidas de Coca.",
            "feature1": "Interactúa en chats en tiempo real con visitantes, prospectos y clientes.",
            "feature2": "Escala fácilmente conversaciones personalizadas sin limitaciones.",
            "feature3": "Participa en conversaciones de chat contextuales sobre la marcha."

        },
    };

    const langToggle = document.getElementById("language-toggle");
    const elementsToTranslate = document.querySelectorAll("[data-lang]");

    function updateLanguage(lang) {
        elementsToTranslate.forEach((element) => {
            const key = element.getAttribute("data-lang");
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem("selectedLanguage", lang);
        document.body.setAttribute("data-lang", lang);
        
        // Actualiza la posición del switch
        langToggle.checked = (lang === "en");
    }

    langToggle.addEventListener("change", function () {
        const newLang = this.checked ? "en" : "es";
        updateLanguage(newLang);
    });

    // Recuperar el idioma guardado
    const savedLanguage = localStorage.getItem("selectedLanguage") || "es";
    updateLanguage(savedLanguage);
});