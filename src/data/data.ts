import { ServiceItem, PortfolioItem, FAQItem, ProcessStep, StatItem } from '../types';

export const AGENCY_INFO = {
  name: "JC Web Studio",
  founder: "Jonathan Coronel",
  role: "Fundador & Lead Developer / UX Designer",
  phone: "+595986102279",
  phoneFormatted: "+595 986 102 279",
  email: "coronelacostajonathan@gmail.com",
  location: "Santa Rita, Alto Paraná, Paraguay",
  address: "Santa Rita, Departamento de Alto Paraná, Paraguay",
  whatsappUrl: "https://wa.me/595986102279",
  github: "https://github.com",
  instagram: "https://instagram.com/jcwebstudio",
  googleMapsUrl: "https://maps.google.com/?q=Santa+Rita+Alto+Parana+Paraguay",
  currencyUSDToPYG: 7500, // Exchange rate approx 1 USD = 7,500 PYG
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "landing-page",
    title: "Landing Pages de Alta Conversión",
    shortDesc: "Páginas monoproducto o promocionales diseñadas estratégicamente para captar leads y ventas rápidas.",
    fullDesc: "Creamos Landing Pages ultra optimizadas con estructura CRO (Conversion Rate Optimization), copy persistente, tiempos de carga <1s y llamado a la acción directo a WhatsApp o formulario CRM.",
    iconName: "Zap",
    badge: "Más Solicitado",
    features: [
      "Diseño UX/UI exclusivo en Figma",
      "Copywriting enfocado en ventas",
      "Integración directa con WhatsApp",
      "Velocidad de carga < 1 segundo",
      "Formularios inteligentes y PWA ready"
    ],
    techStack: ["React", "Tailwind CSS", "GSAP", "Vite"],
    estimatedDays: "3 - 5 días",
    startingPriceUSD: 50,
    startingPricePYG: 375000
  },
  {
    id: "sitio-web",
    title: "Páginas Web Corporativas",
    shortDesc: "Sitios multisección profesionales que transmiten autoridad, confianza y elegancia institucional.",
    fullDesc: "Presencia digital sólida para empresas, consultoras, clínicas y firmas. Incluye secciones corporativas, servicios detallados, blog SEO y panel de administración simple.",
    iconName: "Globe",
    badge: "Popular",
    features: [
      "Hasta 7 secciones personalizadas",
      "Optimización SEO on-page completa",
      "Diseño 100% responsive móvil/desktop",
      "Integración con Google Maps & Redes",
      "Capacitación de uso incluida"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    estimatedDays: "5 - 10 días",
    startingPriceUSD: 180,
    startingPricePYG: 1350000
  },
  {
    id: "tienda-online",
    title: "Tiendas Online (E-commerce)",
    shortDesc: "Catálogos digitales y e-commerce interactivos con carrito de compras y pedidos vía WhatsApp.",
    fullDesc: "Plataformas de venta online optimizadas para el mercado paraguayo e internacional. Permiten gestionar productos, categorías, ofertas y recibir pedidos detallados por WhatsApp o pasarelas de pago.",
    iconName: "ShoppingBag",
    badge: "Alto Retorno",
    features: [
      "Catálogo de productos ilimitado",
      "Carrito de compras interactivo",
      "Envío de pedido estructurado a WhatsApp",
      "Filtros de búsqueda avanzada por categoría",
      "Panel de control para inventario"
    ],
    techStack: ["React", "Tailwind CSS", "Express", "Node.js"],
    estimatedDays: "7 - 14 días",
    startingPriceUSD: 300,
    startingPricePYG: 2250000
  },
  {
    id: "menu-qr",
    title: "Menús Digitales QR para Gastronomía",
    shortDesc: "Cartas digitales interactivas para restaurantes, bares, cafeterías y locales gastronómicos.",
    fullDesc: "Elimina los menús de papel antiguos. Ofrece a tus clientes un menú web veloz mediante código QR, con fotos HD de platillos, precios actualizados al instante y pedidos directos a la cocina.",
    iconName: "QrCode",
    badge: "Especialidad Gastronómica",
    features: [
      "Escaneo rápido vía QR en mesa",
      "Categorías de comidas, bebidas y postres",
      "Actualización de precios instantánea",
      "Multilingüe (Español / Portugués / Inglés)",
      "Opción de pedido a mesa o Delivery"
    ],
    techStack: ["React", "Tailwind CSS", "PWA"],
    estimatedDays: "3 - 5 días",
    startingPriceUSD: 75,
    startingPricePYG: 562500
  },
  {
    id: "sistema-web",
    title: "Sistemas Web a Medida",
    shortDesc: "Software web personalizado para gestión de clientes, citas, inventario o procesos internos.",
    fullDesc: "Desarrollamos aplicaciones web complejas adaptadas a las reglas de tu negocio: portales de clientes, agendamiento de citas para clínicas/gimnasios, gestores de stock y automatizaciones.",
    iconName: "Cpu",
    badge: "A Medida",
    features: [
      "Autenticación segura de usuarios",
      "Panel de administración interactivo",
      "Base de datos en la nube",
      "Generación de reportes y PDFs",
      "Integración con APIs externas"
    ],
    techStack: ["React", "Node.js", "Express", "TypeScript"],
    estimatedDays: "12 - 25 días",
    startingPriceUSD: 650,
    startingPricePYG: 4875000
  },
  {
    id: "seo-posicionamiento",
    title: "SEO & Posicionamiento en Google",
    shortDesc: "Aparece en los primeros resultados de búsqueda de Google cuando los clientes buscan tus servicios.",
    fullDesc: "Estrategia técnica y de contenido para posicionar tu negocio en Santa Rita, Alto Paraná y todo Paraguay. Incluye SEO Local (Google Business), rendimiento técnico y palabras clave estratégicas.",
    iconName: "TrendingUp",
    badge: "Tráfico Orgánico",
    features: [
      "Auditoria SEO técnica y de contenido",
      "Optimización Google My Business / Maps",
      "Indexación ultrarrápida en Google",
      "Estructura Schema.org para rich snippets",
      "Reporte mensual de posiciones"
    ],
    techStack: ["JSON-LD", "Google Search Console", "Lighthouse"],
    estimatedDays: "Proceso Mensual",
    startingPriceUSD: 150,
    startingPricePYG: 1125000
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "demo-restaurante",
    title: "Bistro Gourmet - Restaurante & Menú QR",
    category: "Gastronomía",
    industry: "Restaurante / Bar",
    description: "Sistema de menú QR interactivo con fotos en alta resolución, filtros de alérgenos, selección de mesa y pedido directo a WhatsApp o cocina.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    accentColor: "#F59E0B",
    tags: ["Menú QR", "Gastronomía", "WhatsApp Order", "Filtros"],
    metrics: [
      { label: "Tiempo de Carga", value: "0.4s" },
      { label: "Aumento Pedidos", value: "+38%" }
    ],
    demoType: "restaurant"
  },
  {
    id: "demo-electronica",
    title: "TecnoPlus - Tienda de Electrónica & Gadgets",
    category: "E-Commerce",
    industry: "Tecnología & Retail",
    description: "Tienda online moderna con buscador instantáneo, especificaciones técnicas detalladas, calculador de cuotas y pedidos directos.",
    image: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=800&auto=format&fit=crop",
    accentColor: "#00C8FF",
    tags: ["E-Commerce", "Carrito Online", "Filtros por Marca", "Smartphones"],
    metrics: [
      { label: "Conversión Mobile", value: "4.8%" },
      { label: "Productos Activos", value: "1,200+" }
    ],
    demoType: "electronics"
  },
  {
    id: "demo-ferreteria",
    title: "Ferretería Industrial Santa Rita",
    category: "Catálogo Web",
    industry: "Construcción & Ferretería",
    description: "Catálogo industrial interactivo enfocado en cotizaciones rápidas para empresas constructoras y profesionales del rubro.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
    accentColor: "#EF4444",
    tags: ["Catálogo B2B", "Cotizador Rápido", "Búsqueda por Código", "Herramientas"],
    metrics: [
      { label: "Cotizaciones/Día", value: "+45" },
      { label: "SEO Posición", value: "#1 Local" }
    ],
    demoType: "hardware"
  },
  {
    id: "demo-minimercado",
    title: "Supermercado Express - Tienda de Cercanía",
    category: "E-Commerce Local",
    industry: "Supermercados & Bebidas",
    description: "Catálogo web de ofertas diarias con opción de pedido express para delivery en Santa Rita y alrededores.",
    image: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=800&auto=format&fit=crop",
    accentColor: "#10B981",
    tags: ["Supermercado", "Delivery Express", "Ofertas Semanales", "Lista Rápida"],
    metrics: [
      { label: "Tiempo Delivery", value: "< 30 min" },
      { label: "Retención Clientes", value: "82%" }
    ],
    demoType: "supermarket"
  },
  {
    id: "demo-clinica",
    title: "Centro Médico & Odontológico Santa Rita",
    category: "Sitio Web + Citas",
    industry: "Salud & Estética",
    description: "Portal médico elegante con reserva de turnos online, currículum de profesionales y ubicación en mapa interactivo.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
    accentColor: "#6366F1",
    tags: ["Agendamiento Web", "Salud", "Médicos", "Especialidades"],
    metrics: [
      { label: "Reservas Online", value: "70%" },
      { label: "Reducción Faltas", value: "-40%" }
    ],
    demoType: "clinic"
  },
  {
    id: "demo-gimnasio",
    title: "IronGym - Centro de Entrenamiento & Fitness",
    category: "Sitio Web + Membresías",
    industry: "Deportes & Bienestar",
    description: "Sitio web de alto impacto visual con calculadora de planes, horario de clases en vivo y pase de prueba gratuito.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    accentColor: "#EC4899",
    tags: ["Gimnasio", "Calculadora de Planes", "Clases en Vivo", "Pase Gratis"],
    metrics: [
      { label: "Nuevos Socios", value: "+120/mes" },
      { label: "Lighthouse Score", value: "100/100" }
    ],
    demoType: "gym"
  },
  {
    id: "demo-taller",
    title: "Taller Mecánico & Servicentro Coronel",
    category: "Servicios Técnicos",
    industry: "Automotriz",
    description: "Plataforma de seguimiento de reparaciones, agendamiento de mantenimiento preventivo y presupuestos de repuestos.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=800&auto=format&fit=crop",
    accentColor: "#8B5CF6",
    tags: ["Taller Mecánico", "Turnos de Service", "Presupuestos", "Vehículos"],
    metrics: [
      { label: "Repetitividad", value: "94%" },
      { label: "Puntualidad", value: "100%" }
    ],
    demoType: "mechanic"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Contacto & Briefing",
    subtitle: "Comprendemos tu negocio",
    description: "Analizamos los objetivos de tu empresa, tu público objetivo, competencia y requerimientos clave para establecer el alcance exacto del proyecto.",
    duration: "Día 1",
    deliverables: ["Propuesta Formal", "Briefing de Contenido", "Cronograma de Entrega"],
    icon: "MessageSquare"
  },
  {
    number: "02",
    title: "Diseño UX/UI Premium",
    subtitle: "Prototipo interactivo",
    description: "Diseñamos la estructura visual, tipografías, esquema de colores y prototipo navegable enfocado en la experiencia de usuario y máxima conversión.",
    duration: "Días 2 - 4",
    deliverables: ["Mockup Figma", "Paleta de Colores", "Arquitectura de Contenidos"],
    icon: "Palette"
  },
  {
    number: "03",
    title: "Desarrollo & Código",
    subtitle: "Construcción tecnológica",
    description: "Programamos tu sitio con tecnologías de vanguardia (React, Vite, Tailwind CSS). Aplicamos animación fluida, optimización de imágenes y código ultra limpio.",
    duration: "Días 5 - 8",
    deliverables: ["Entorno de Pruebas Privado", "Código Optimizado", "Integraciones Activas"],
    icon: "Code"
  },
  {
    number: "04",
    title: "Revisión & Ajustes",
    subtitle: "Perfeccionamiento conjunto",
    description: "Revisamos cada detalle del sitio junto contigo, realizamos los ajustes finales de diseño o contenido y probamos la respuesta en todos los dispositivos.",
    duration: "Días 9 - 10",
    deliverables: ["Certificación de Calidad", "Feedback Implementado", "Aprobación Final"],
    icon: "CheckCircle2"
  },
  {
    number: "05",
    title: "Publicación & SEO",
    subtitle: "Despliegue al mundo",
    description: "Conectamos tu dominio personalizado, activamos el certificado SSL de seguridad, configuramos la velocidad extrema y realizamos la indexación en Google.",
    duration: "Lanzamiento",
    deliverables: ["Sitio en Vivo (HTTPS)", "Indexación Google", "Certificado SSL"],
    icon: "Rocket"
  },
  {
    number: "06",
    title: "Soporte & Garantía",
    subtitle: "Acompañamiento continuo",
    description: "Te capacitamos en el uso de tu plataforma y te brindamos soporte técnico post-lanzamiento para asegurar que tu sitio siga funcionando al 100%.",
    duration: "Continuo",
    deliverables: ["Video Capacitación", "Soporte WhatsApp", "Garantía de Funcionamiento"],
    icon: "ShieldCheck"
  }
];

export const STATS_DATA: StatItem[] = [
  {
    label: "Proyectos Entregados",
    value: 50,
    suffix: "+",
    description: "Clientes satisfechos en Paraguay",
    icon: "CheckCircle"
  },
  {
    label: "Satisfacción Clientes",
    value: 99.8,
    suffix: "%",
    description: "Basado en reseñas reales",
    icon: "Star"
  },
  {
    label: "Velocidad Promedio",
    value: 0.8,
    suffix: "s",
    description: "Tiempo de carga ultra veloz",
    icon: "Zap"
  },
  {
    label: "Soporte Técnico",
    value: 100,
    suffix: "%",
    description: "Garantizado en cada trabajo",
    icon: "Headphones"
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "¿Cuánto tiempo tarda en estar lista mi página web?",
    answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Una Landing Page o Menú QR se entrega habitualmente en 3 a 5 días hábiles. Un sitio web corporativo o tienda online toma entre 7 a 14 días. Para proyectos urgentes disponemos de modalidad Express."
  },
  {
    id: "faq-2",
    category: "servicios",
    question: "¿Incluye Dominio (.com / .com.py) y Hosting de alta velocidad?",
    answer: "¡Sí! Todos nuestros paquetes incluyen la gestión e instalación de tu dominio personalizado y servidor de hosting ultra rápido en la nube con certificado SSL de seguridad HTTPS activado sin costo adicional el primer año."
  },
  {
    id: "faq-3",
    category: "pagos",
    question: "¿Cómo funciona la forma de pago?",
    answer: "El proceso es transparente y seguro: se abona un 50% de entrega inicial para comenzar el diseño y desarrollo, y el 50% restante una vez que revises el sitio web terminado, probado y aprobado en nuestro servidor de demostración antes de la publicación final."
  },
  {
    id: "faq-4",
    category: "servicios",
    question: "¿Puedo editar el contenido de mi página yo mismo después?",
    answer: "Totalmente. Entregamos las plataformas con paneles intuitivos o te brindamos capacitación directa para que puedas cambiar fotos, precios, textos o agregar nuevos productos en cualquier momento sin depender de un programador."
  },
  {
    id: "faq-5",
    category: "general",
    question: "¿Por qué implementar un Menú Digital QR en mi restaurante?",
    answer: "Un menú QR agiliza la atención al cliente, reduce tiempos de espera en mesa hasta en un 40%, permite cambiar precios y platillos del día al instante sin gastar en impresiones de papel y permite recibir pedidos directo a cocina o WhatsApp."
  },
  {
    id: "faq-6",
    category: "servicios",
    question: "¿Mi página web aparecerá en los primeros puestos de Google?",
    answer: "Sí, todos nuestros sitios incluyen optimización SEO técnica on-page de fábrica: tiempos de carga optimizados, etiquetas meta estructuradas, mapas de sitio XML y alta en Google Search Console y Google Maps."
  },
  {
    id: "faq-7",
    category: "general",
    question: "¿Tienen oficina física en Santa Rita o puedo contratar online?",
    answer: "Atendemos de manera presencial en Santa Rita y todo el departamento de Alto Paraná, además de trabajar de forma 100% remota con empresas de Asunción, Ciudad del Este, Encarnación y todo el Paraguay."
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Diseño 100% Exclusivo y Personalizado",
    jcStudio: true,
    templates: false,
    traditionalAgency: "A veces"
  },
  {
    feature: "Velocidad de carga < 1.0 segundo",
    jcStudio: true,
    templates: false,
    traditionalAgency: false
  },
  {
    feature: "Optimizada para Ventas y Conversión (CRO)",
    jcStudio: true,
    templates: false,
    traditionalAgency: "Rara vez"
  },
  {
    feature: "Integración Directa con WhatsApp Business",
    jcStudio: true,
    templates: "Básica",
    traditionalAgency: true
  },
  {
    feature: "Soporte Directo con el Desarrollador (Jonathan)",
    jcStudio: true,
    templates: false,
    traditionalAgency: false
  },
  {
    feature: "Sin Cobros Mensuales Ocultos Abusivos",
    jcStudio: true,
    templates: false,
    traditionalAgency: false
  }
];
