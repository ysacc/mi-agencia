export type Lang = "es" | "en" | "fr" | "de";

export type ServiceItem = {
  title: string;
  description: string;
  tag: string;
  bullets: string[];
  delivery: string;
  fromPrice: string;
  cta: string;
  fromLabel: string;
};

export type StepItem = { icon: string; title: string; description: string };

export type MemberItem = {
  name: string;
  role: string;
  description: string;
  tags: string[];
};

export type ProjectItem = {
  name: string;
  description: string;
  tag: string;
  result: string;
  stack: string[];
  cta: string;
};

export type TrustedCompaniesSection = {
  ariaLabel: string;
  title: string;
  subtitle: string;
};

export type ReviewItem = {
  name: string;
  time: string;
  rating: number; // 1..5
  text: string;
  source: string; // "Google", etc.
};

export type ReviewsSection = {
  title: string;
  subtitle: string;
  items: ReviewItem[];
};

export type WhyChooseUsItem = {
  icon: string; // "🚀"
  title: string;
  text: string;
};

export type WhyChooseUsSection = {
  title: string;
  subtitle: string;
  items: WhyChooseUsItem[];
};

export type WhyHireUsStat = {
  value: string; // "10+"
  label: string;
};

export type WhyHireUsSection = {
  title: string;
  subtitle: string;
  stats: WhyHireUsStat[];
};

export type FAQItem = {
  q: string;
  a: string;
};

export type FAQSection = {
  title: string;
  subtitle: string;
  items: FAQItem[];
};
export type PromotionItem = {
  title: string;
  fromLabel: string;
  price: string;
  badge: string;
  bullets: string[];
  cta: string;
};

type ContactTranslation = {
  title: string;
  subtitle: string;

  // Form labels base
  formName: string;
  formEmail: string;
  formMessage: string;
  submit: string;

  // Textos del card
  kicker: string;
  cardTitle: string;
  cardDesc: string;
  badgeText: string;

  // Placeholders
  namePlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  emailPlaceholder: string;
  companyLabel: string;
  companyPlaceholder: string;
  messagePlaceholder: string;

  // Servicio
  serviceLabel: string;
  servicePlaceholder: string;
  serviceOptions: string[];

  // Horario
  scheduleLabel: string;
  schedulePlaceholder: string;
  scheduleOptions: string[];

  // Prefill/hints
  prefillMessage: string;
  prefillServiceLabel: string;
  prefillCaseLabel: string;

  // CTA secundarios / legal
  secondaryCta: string;
  legal: string;

  // WhatsApp appenders
  whatsAppQuoteAppend: string;
  whatsAppAppointmentAppend: string;

  // Email
  emailSubject: string;

  // Side (cierre)
  sideTitle: string;
  sideText: string;
  sideBullets: string[];
  sideCta1: string;
  sideCta2: string;
  sideNote: string;

  // Modal
  modalTitle: string;
  modalText: string;
  modalCtaWhatsApp: string;
  modalCtaEmail: string;
  modalNote: string;
  closeLabel: string;

  // (si aún los usas en otros lugares)
  sideSub: string;
  whatsappCta: string;
};

export interface Translation {
  navbar: {
    brandMain: string;
    brandAccent: string;
    sections: {
      inicio: string;
      companies: string;
      servicios: string;
      reviews: string;
      faq: string;
      // si ya no usas estos en App.tsx, puedes quitarlos del tipo:
      proceso?: string;
      equipo?: string;
      portafolio?: string;
      contacto: string;
    };
    cta: string;
  };

  hero: {
    pill?: string;
    h1a?: string;
    h1b?: string;
    h1c?: string;
    sub?: string;
    priceLabel?: string;
    price?: string;
    priceNote?: string;
    cta?: string;
    cta2?: string;
    trust?: string;
    bullets?: string[];
  };

  services: {
    title: string;
    subtitle: string;
    promos: PromotionItem[];
    items: ServiceItem[];
  };

  // si dejaste de usar "process" en App, puedes mantenerlo opcional:
  process?: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };

  // opcional si lo comentaste:
  team?: {
    title: string;
    subtitle: string;
    members: MemberItem[];
  };

  // opcional si lo comentaste:
  portfolio?: {
    title: string;
    subtitle: string;
    projects: ProjectItem[];
  };

  contact: ContactTranslation;

  footer: {
    text: string;
    tagline: string;
    cta: string;
    sectionsTitle: string;
    contactTitle: string;
    location: string;
    links: {
      inicio: string;
      companies: string;
      servicios: string;
      reviews: string;
      faq: string;
      contacto: string;
    };
    bottomNote: string;
  };

  // ✅ NUEVAS SECCIONES (ya las tienes en tu es)
  trustedCompanies: TrustedCompaniesSection;
  reviews: ReviewsSection;
  whyChooseUs: WhyChooseUsSection;
  whyHireUs: WhyHireUsSection;
  faq: FAQSection;
}

export const translations: Record<Lang, Translation> = {
  es: {
    navbar: {
      brandMain: "BR ",
      brandAccent: "Digital Systems",
      sections: {
        inicio: "Inicio",
        companies: "Empresas",
        servicios: "Servicios",
        reviews: "Reseñas",
        faq: "Preguntas frecuentes",
        proceso: "Proceso",
        equipo: "Equipo",
        portafolio: "Portafolio",
        contacto: "Contacto",
      },
      cta: "Agendar diagnóstico",
    },

    hero: {
      pill: "DISEÑO WEB PARA EMPRENDEDORES Y PYMES",
      h1a: "Páginas web que",
      h1b: "venden",
      h1c: "por ti",
      sub: "Lanza tu web con WhatsApp y formulario listos para captar clientes. Diseño profesional, rápido y sin complicaciones.",
      priceLabel: "Desde",
      price: "USD 299",
      priceNote: "Pago único · Entrega rápida",
      cta: "Quiero mi web",
      cta2: "Ver precios",
      trust: "Respuesta en menos de 24 h",
      bullets: [
        "WhatsApp + formulario",
        "Diseño profesional",
        "Optimizada para Google",
        "Soporte incluido",
      ],
    },

    services: {
      title: "Servicios",
      subtitle:
        "Paquetes pensados para que puedas empezar rápido, crecer y escalar sin fricción técnica.",
      promos: [
        {
          title: "Web Emprendedor",
          fromLabel: "Desde",
          price: "USD 299",
          badge: "Más solicitado",
          bullets: [
            "WhatsApp + formulario",
            "Diseño profesional",
            "Entrega rápida",
          ],
          cta: "Quiero esta web",
        },
        {
          title: "Tienda Online",
          fromLabel: "Desde",
          price: "USD 499",
          badge: "Para vender",
          bullets: [
            "Catálogo de productos",
            "Pagos en línea",
            "Panel de administración",
          ],
          cta: "Quiero vender online",
        },
        {
          title: "Aula Virtual",
          fromLabel: "Desde",
          price: "USD 499",
          badge: "Educación",
          bullets: ["Clases online", "Acceso para alumnos", "Escalable"],
          cta: "Crear aula virtual",
        },
      ],

      items: [
        {
          title: "Web Corporativa Pro",
          description:
            "Sitio moderno orientado a conversiones, con base técnica sólida para posicionar y escalar.",
          tag: "Más vendido",
          bullets: [
            "Diseño profesional + copy base",
            "SEO técnico (metas, indexación, performance)",
            "Integración WhatsApp + formularios",
            "Analítica (eventos y conversiones)",
          ],
          delivery: "Entrega estimada: 7–14 días",
          fromLabel: "Desde",
          fromPrice: "USD 999",
          cta: "Agendar diagnóstico",
        },
        {
          title: "Automatización & Sistemas",
          description:
            "Dashboards, flujos y herramientas internas para reducir trabajo manual y ganar control.",
          tag: "Para equipos",
          bullets: [
            "Panel / dashboard a medida",
            "Integraciones (WhatsApp, email, APIs)",
            "Roles y permisos (si aplica)",
            "Base escalable (MVP → v2)",
          ],
          delivery: "Entrega estimada: 2–4 semanas",
          fromLabel: "Desde",
          fromPrice: "USD 2,499",
          cta: "Agendar diagnóstico",
        },
        {
          title: "Tienda Online / E-commerce",
          description:
            "Catálogo, pagos y operación lista para vender con una experiencia rápida y confiable.",
          tag: "Para vender",
          bullets: [
            "Catálogo + productos + categorías",
            "Checkout / pagos en línea",
            "WhatsApp + notificaciones",
            "SEO + performance optimizada",
          ],
          delivery: "Entrega estimada: 2–3 semanas",
          fromLabel: "Desde",
          fromPrice: "USD 3,499",
          cta: "Agendar diagnóstico",
        },
      ],
    },

    process: {
      title: "Nuestro proceso",
      subtitle:
        "Un flujo pensado para que tengas claridad desde el día uno: qué haremos, cómo y cuándo lo tendrás listo.",
      steps: [
        {
          icon: "🧭",
          title: "1. Discovery & objetivos",
          description:
            "Aterrizamos objetivos, usuarios, alcance y restricciones. Definimos éxito (KPIs) y prioridad del MVP.",
        },
        {
          icon: "🏗️",
          title: "2. Arquitectura & plan",
          description:
            "Definimos stack, integraciones (WhatsApp/pagos/APIs), modelo de datos y plan por sprints con entregables claros.",
        },
        {
          icon: "🧩",
          title: "3. Sprint de diseño (UX/UI)",
          description:
            "Wireframes y UI final en componentes. Validamos copy, estructura y flujo de conversión antes de construir.",
        },
        {
          icon: "⚙️",
          title: "4. Desarrollo por sprints",
          description:
            "Implementamos funcionalidades incrementales (frontend + backend). Demo semanal y feedback para iterar rápido.",
        },
        {
          icon: "✅",
          title: "5. QA, performance & seguridad",
          description:
            "Pruebas funcionales, revisión de edge cases, performance (CWV) y hardening básico antes de pasar a producción.",
        },
        {
          icon: "🚀",
          title: "6. Deploy, monitoreo & mejora continua",
          description:
            "Publicación con checklist, analítica/trackeo, observabilidad y roadmap de mejoras post-lanzamiento.",
        },
      ],
    },

    team: {
      title: "Equipo",
      subtitle:
        "Unimos desarrollo full-stack con marketing y contenido multilingüe para que trabajes con un solo equipo de confianza.",
      members: [
        {
          name: "Ysacc Roncal",
          role: "Líder Técnico / Senior Full-Stack",
          description:
            "Más de 7 años construyendo soluciones para banca y empresas. Enfoque en front, escalabilidad y calidad.",
          tags: ["React", "Node.js", "AWS"],
        },
        {
          name: "Flor Bottcher",
          role: "Marketing & Legal (ES / EN / DE)",
          description:
            "Gestión de marca, contenidos y contratos. Atiende clientes en español, inglés y alemán.",
          tags: ["Marketing", "Legal", "Content"],
        },
        {
          name: "Analyst EN/FR",
          role: "Content & Briefing",
          description:
            "Toma requerimientos en inglés y francés y los traduce en briefs claros para el equipo técnico.",
          tags: ["EN", "FR", "Briefing"],
        },
        {
          name: "Analyst EN/IT",
          role: "Content & Briefing",
          description:
            "Soporte a clientes en inglés e italiano, alineando negocio y tecnología.",
          tags: ["EN", "IT", "Briefing"],
        },
      ],
    },

    portfolio: {
      title: "Portafolio",
      subtitle:
        "Algunos tipos de proyectos que hemos construido o podemos desarrollar para tu negocio. Siempre con foco en resultados.",
      projects: [
        {
          name: "Dashboard de monitoreo para empresa de seguridad",
          description:
            "Panel web para visualizar alertas, cámaras y estados en tiempo real, con filtros y métricas clave.",
          tag: "Sistemas a medida",
          result: "Visibilidad operativa en tiempo real y control centralizado",
          stack: ["React", "TypeScript", "APIs", "Dashboards"],
          cta: "Ver caso",
        },
        {
          name: "Landing para academia online",
          description:
            "Página de alta conversión con información de cursos, testimonios y formulario directo a WhatsApp.",
          tag: "Landing page",
          result: "Mejor flujo de captación y contacto directo por WhatsApp",
          stack: ["React", "SEO", "Analytics", "WhatsApp"],
          cta: "Ver caso",
        },
        {
          name: "Sitio corporativo para estudio contable",
          description:
            "Web institucional con servicios, equipo, blog y agenda de citas, optimizada para posicionamiento local.",
          tag: "Web corporativa",
          result: "Presencia profesional y base SEO para posicionamiento local",
          stack: ["React", "SEO Técnico", "Performance", "Formularios"],
          cta: "Ver caso",
        },
        {
          name: "Portal interno de tareas y seguimientos",
          description:
            "Aplicación web para organizar tareas, responsables y estados, pensada para ordenar la operación.",
          tag: "Automatización",
          result:
            "Mejor orden operativo con seguimiento de responsables y estados",
          stack: ["React", "Roles", "Automatización", "Workflows"],
          cta: "Ver caso",
        },
      ],
    },

    contact: {
      title: "Agenda una cita",
      subtitle:
        "Cuéntanos lo básico y te responderemos con precio, tiempos y próximos pasos.",

      // Campos base
      formName: "Nombre",
      formEmail: "Email",
      formMessage: "Cuéntanos sobre tu proyecto",
      submit: "Enviar solicitud",

      // Prefill (cuando llega servicio/caso)
      prefillMessage:
        "Quiero agendar una llamada para cotizar y definir próximos pasos.",

      // Card (encabezado del formulario)
      kicker: "Solicitud de cita",
      cardTitle: "Cuéntanos lo básico",
      cardDesc:
        "Te respondemos con precio y próximos pasos. Si ya elegiste un plan, quedará registrado.",
      badgeText: "Respuesta < 24h",

      // Placeholders inputs
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "tu@correo.com",

      // Teléfono
      phoneLabel: "Teléfono (WhatsApp)",
      phonePlaceholder: "Ej: 999 999 999",

      // Empresa
      companyLabel: "Empresa / Negocio",
      companyPlaceholder: "Nombre de tu negocio",

      // Servicio
      serviceLabel: "¿Qué servicio quieres?",
      servicePlaceholder: "Seleccionar...",
      serviceOptions: [
        "Web Emprendedor",
        "Tienda Online",
        "Aula Virtual",
        "Web Empresa",
        "Sistema a medida",
        "Marketing / Ads",
      ],

      // Horario
      scheduleLabel: "Horario para contactarte",
      schedulePlaceholder: "Seleccionar...",
      scheduleOptions: ["Hoy (mañana)", "Hoy (tarde)", "Mañana", "Esta semana"],

      // Mensaje
      messagePlaceholder:
        "Ej: Necesito una web para captar clientes. Ya tengo logo y fotos. ¿Cuánto costaría y en cuánto tiempo lo entregan?",

      // Hint cuando viene preseleccionado
      prefillServiceLabel: "Servicio preseleccionado",
      prefillCaseLabel: "Caso",

      // Botón secundario (en el form)
      secondaryCta: "Reservar cita por WhatsApp",

      // Legal
      legal:
        "Al enviar, aceptas que te contactemos para coordinar la cita y la cotización.",

      // WhatsApp appenders (para tu payload)
      whatsAppQuoteAppend:
        "Solicito cotización rápida (precio, tiempos y qué incluye).",
      whatsAppAppointmentAppend:
        "Quiero agendar una cita (llamada o videollamada). Envíen disponibilidad.",

      // Email
      emailSubject: "Nueva solicitud desde BR Digital Systems",

      // Lado derecho (cierre rápido)
      sideTitle: "Cierre rápido",
      sideText:
        "Si quieres respuesta inmediata, escríbenos por WhatsApp y te enviamos precios y tiempos.",
      sideBullets: [
        "Catálogo de planes",
        "Cotización en minutos",
        "Asesoría para elegir plan",
      ],
      sideCta1: "Pedir cotización por WhatsApp",
      sideCta2: "Agendar llamada",
      sideNote:
        "Tip: “Web Emprendedor” es ideal si solo quieres empezar a captar clientes.",

      // Modal (reemplaza alert)
      modalTitle: "Listo. ¿Cómo quieres enviarlo?",
      modalText:
        "Para asegurar respuesta rápida, recomendamos WhatsApp. También puedes enviarlo por correo.",
      modalCtaWhatsApp: "Enviar por WhatsApp",
      modalCtaEmail: "Enviar por Email",
      modalNote:
        "Si cierras esta ventana, la solicitud queda guardada localmente como respaldo.",
      closeLabel: "Cerrar",

      // (Opcional: si quieres conservar estos antiguos)
      sideSub:
        "También podemos atenderte en inglés, alemán, francés e italiano.",
      whatsappCta: "Escribir por WhatsApp",
    },

    footer: {
      text: "Desarrollamos soluciones digitales a medida para empresas y emprendedores.",
      tagline:
        "Desarrollo web y soluciones digitales para emprendedores y empresas que quieren crecer.",
      cta: "Agenda una cita",
      sectionsTitle: "Secciones",
      contactTitle: "Contacto",
      location: "Lima, Perú",
      links: {
        inicio: "Inicio",
        companies: "Empresas",
        servicios: "Servicios",
        reviews: "Reseñas",
        faq: "Preguntas frecuentes",
        contacto: "Contacto",
      },
      bottomNote: "Hecho en Perú · Soluciones digitales modernas",
    },

    trustedCompanies: {
      ariaLabel: "Empresas que confían en nosotros",
      title: "Empresas que confían en nosotros",
      subtitle:
        "Marcas con las que hemos trabajado en proyectos web y software.",
    },

    reviews: {
      title: "Reseñas",
      subtitle: "Opiniones reales de clientes que ya trabajaron con nosotros.",
      items: [
        {
          name: "Christian Garrido",
          time: "hace 1 año",
          rating: 5,
          text: "Un excelente trabajo, confiable y sobre todo seguro. Gracias muchachos y continúen así.",
          source: "Google",
        },
        {
          name: "Informes Dragotek",
          time: "hace 1 año",
          rating: 5,
          text: "Excelente servicio, rapidez, calidad y garantía.",
          source: "Google",
        },
        {
          name: "BEHF PERU",
          time: "hace 1 año",
          rating: 4,
          text: "Buen trabajo en atención y desarrollo de páginas web.",
          source: "Google",
        },
      ],
    },

    whyChooseUs: {
      title: "¿Por qué elegirnos?",
      subtitle: "Somos la mejor opción para el desarrollo web de tu empresa",
      items: [
        {
          icon: "🚀",
          title: "Diseño Web Personalizado",
          text: "Creamos sitios web únicos que reflejan la identidad de tu negocio y te ayudan a destacar frente a tu competencia.",
        },
        {
          icon: "🔍",
          title: "Optimización SEO",
          text: "Mejoramos la visibilidad de tu web en Google para que más clientes potenciales te encuentren fácilmente.",
        },
        {
          icon: "📱",
          title: "Diseño Responsivo",
          text: "Tu web se verá y funcionará perfectamente en computadoras, tablets y celulares.",
        },
      ],
    },

    whyHireUs: {
      title: "¿Por qué contratar nuestros servicios?",
      subtitle: "Amplia experiencia para el desarrollo web de tu empresa",
      stats: [
        { value: "10+", label: "Años de experiencia" },
        { value: "800+", label: "Proyectos realizados" },
        { value: "200+", label: "Clientes satisfechos" },
      ],
    },

    faq: {
      title: "Preguntas frecuentes",
      subtitle: "Resolvemos las dudas más comunes antes de contratar.",
      items: [
        {
          q: "¿Qué incluye el plan Web Emprendedor desde S/299?",
          a: "Incluye una landing profesional con sección de servicios, botón WhatsApp, formulario de contacto y diseño responsive. Ideal para empezar a captar clientes rápido.",
        },
        {
          q: "¿Cuánto demoran en entregar?",
          a: "Depende del plan y del contenido. En general: Web Emprendedor 3–7 días, Tienda Online 7–14 días, y proyectos a medida según alcance.",
        },
        {
          q: "¿Necesito tener dominio y hosting?",
          a: "No es obligatorio para iniciar. Podemos asesorarte para comprar dominio y configurar hosting, o publicar en una opción recomendada según tu presupuesto.",
        },
        {
          q: "¿Puedo pagar por partes?",
          a: "Sí. Normalmente trabajamos con un adelanto para iniciar y el saldo al entregar. Para proyectos grandes se puede dividir por hitos.",
        },
        {
          q: "¿La tienda online incluye pagos y delivery?",
          a: "Podemos integrar pasarelas (según disponibilidad) y configurar métodos de envío. El alcance exacto depende del plan elegido.",
        },
        {
          q: "¿Brindan soporte después de la entrega?",
          a: "Sí. Ofrecemos soporte y mantenimiento opcional. También podemos enseñarte a gestionar tu contenido si tu web incluye panel administrable.",
        },
      ],
    },
  },

  // ✅ Para que compile sin romper, completa luego EN/FR/DE copiando ES y traduciendo.
  // Si ya tienes en/fr/de en tu archivo, deja esas versiones como están.
  en: undefined as any,
  fr: undefined as any,
  de: undefined as any,
};

// --- ENGLISH ---
//   en: {
//     navbar: {
//       brandMain: "BR ",
//       brandAccent: "Digital Systems",
//       sections: {
//         inicio: "Home",
//         servicios: "Services",
//         proceso: "Process",
//         equipo: "Team",
//         portafolio: "Portfolio",
//         contacto: "Contact",
//         companies: "Companies",
//         reviews: "Reviews",
//         faq: "FAQ",
//       },
//       cta: "Schedule a diagnosis",
//     },
//     hero: {
//       tag: "Development & Automation",
//       titleMain: "We build digital solutions",
//       titleHighlight: "that help your business grow.",
//       sub:
//         "Full-stack team focused on front-end, multilingual marketing and automation." +
//         "We turn ideas into digital products ready to deliver real results.",
//       cta: "Book a call",
//       seeProjects: "See projects →",
//       langs: "We work in Spanish, English, German, French and Italian.",
//       proof1: "Performance-focused",
//       proof2: "Baseline security included",
//       proof3: "Real integrations (WhatsApp, payments)",
//       proof4: "Analytics & tracking",
//     },
//     services: {
//       title: "Services",
//       subtitle:
//         "Service packs designed to help you start fast, grow and scale without technical friction.",
//       items: [
//         {
//           title: "Pro Business Website",
//           description:
//             "Conversion-focused website with a solid technical foundation to rank and scale.",
//           tag: "Best seller",
//           bullets: [
//             "Professional design + base copy",
//             "Technical SEO (indexing, metadata, performance)",
//             "WhatsApp + forms integration",
//             "Analytics (events and conversions)",
//           ],
//           delivery: "Delivery: 7–14 days",
//           fromPrice: "From $ 299",
//           cta: "Schedule a diagnosis",
//         },
//         {
//           title: "Automation & Internal Systems",
//           description:
//             "Dashboards, workflows and internal tools to reduce manual work and improve visibility.",
//           tag: "For teams",
//           bullets: [
//             "Custom dashboard/panel",
//             "Integrations (WhatsApp, email, APIs)",
//             "Roles & permissions (if needed)",
//             "Scalable base (MVP → v2)",
//           ],
//           delivery: "Delivery: 2–4 weeks",
//           fromPrice: "From $ 699",
//           cta: "Schedule a diagnosis",
//         },
//         {
//           title: "Online Store / E-commerce",
//           description:
//             "Catalog, payments and operations ready to sell with a fast, reliable experience.",
//           tag: "For sales",
//           bullets: [
//             "Catalog + products + categories",
//             "Checkout / payments (gateway-dependent)",
//             "WhatsApp + notifications",
//             "SEO + performance optimized",
//           ],
//           delivery: "Delivery: 2–3 weeks",
//           fromPrice: "From $ 999",
//           cta: "Schedule a diagnosis",
//         },
//       ],
//     },
//     process: {
//       title: "Our process",
//       subtitle:
//         "A workflow designed so you have clarity from day one: what we'll do, how and when you'll have it ready.",
//       steps: [
//         {
//           icon: "🧭",
//           title: "1. Discovery & goals",
//           description:
//             "We define objectives, users, scope and constraints. Success metrics (KPIs) and MVP priorities.",
//         },
//         {
//           icon: "🏗️",
//           title: "2. Architecture & plan",
//           description:
//             "We define stack, integrations (WhatsApp/payments/APIs), data model and a sprint plan with clear deliverables.",
//         },
//         {
//           icon: "🧩",
//           title: "3. UX/UI design sprint",
//           description:
//             "Wireframes and final UI components. We validate copy, structure and conversion flow before building.",
//         },
//         {
//           icon: "⚙️",
//           title: "4. Sprint-based development",
//           description:
//             "Incremental delivery (frontend + backend). Weekly demos and feedback loops to iterate fast.",
//         },
//         {
//           icon: "✅",
//           title: "5. QA, performance & security",
//           description:
//             "Functional testing, edge cases, performance (CWV) and baseline hardening before production.",
//         },
//         {
//           icon: "🚀",
//           title: "6. Deploy, monitoring & iteration",
//           description:
//             "Release with checklist, analytics/tracking, observability and a post-launch improvement roadmap.",
//         },
//       ],
//     },
//     team: {
//       title: "Team",
//       subtitle:
//         "We combine full-stack development with multilingual marketing and content so you can work with one reliable team.",
//       members: [
//         {
//           name: "Ysacc Roncal",
//           role: "Tech Lead / Senior Full-Stack",
//           description:
//             "7+ years building solutions for banking and enterprises. Focused on front-end, scalability and quality.",
//           tags: ["React", "Node.js", "AWS"],
//         },
//         {
//           name: "Flor",
//           role: "Marketing & Legal (ES / EN / DE)",
//           description:
//             "Brand, content and contracts. Handles clients in Spanish, English and German.",
//           tags: ["Marketing", "Legal", "Content"],
//         },
//         {
//           name: "Analyst EN/FR",
//           role: "Content & Briefing",
//           description:
//             "Takes requirements in English and French and turns them into clear briefs for the dev team.",
//           tags: ["EN", "FR", "Briefing"],
//         },
//         {
//           name: "Analyst EN/IT",
//           role: "Content & Briefing",
//           description:
//             "Supports clients in English and Italian, aligning business and technology.",
//           tags: ["EN", "IT", "Briefing"],
//         },
//       ],
//     },
//     portfolio: {
//       title: "Portfolio",
//       subtitle:
//         "Some types of projects we've built or can build for your business. Always focused on results.",
//       projects: [
//         {
//           name: "Monitoring dashboard for a security company",
//           description:
//             "Web panel to view alerts, cameras and status in real time, with filters and key metrics.",
//           tag: "Custom systems",
//           result: "Real-time operational visibility and centralized control",
//           stack: ["React", "TypeScript", "APIs", "Dashboards"],
//           cta: "View case",
//         },
//         {
//           name: "Landing page for an online academy",
//           description:
//             "High-conversion page with clear course information, testimonials and direct WhatsApp form.",
//           tag: "Landing page",
//           result: "Improved lead capture flow with direct WhatsApp contact",
//           stack: ["React", "SEO", "Analytics", "WhatsApp"],
//           cta: "View case",
//         },
//         {
//           name: "Corporate site for an accounting firm",
//           description:
//             "Institutional site with services, team, blog and booking, optimized for local SEO.",
//           tag: "Corporate website",
//           result: "Professional presence and a strong technical SEO foundation",
//           stack: ["React", "Technical SEO", "Performance", "Forms"],
//           cta: "View case",
//         },
//         {
//           name: "Internal task & follow-up portal",
//           description:
//             "Web app to organize tasks, assignees and statuses, designed to streamline daily operations.",
//           tag: "Automation",
//           result:
//             "Better operational clarity with assignees and status tracking",
//           stack: ["React", "Roles", "Automation", "Workflows"],
//           cta: "View case",
//         },
//       ],
//     },
//     contact: {
//       title: "Contact",
//       subtitle:
//         "Tell us briefly about your project and we'll reply with a clear and direct proposal.",
//       formName: "Name / Company",
//       formEmail: "Email",
//       formMessage: "Tell us about your project",
//       submit: "Send message",
//       sideText:
//         "If you prefer something more direct, send us a WhatsApp and schedule a quick call.",
//       sideSub:
//         "We can also work with you in English, German, French and Italian.",
//       whatsappCta: "Write on WhatsApp",
//     },
//     footer: {
//       text: "We build tailored digital solutions for entrepreneurs and businesses.",
//       tagline:
//         "Web development and digital solutions for entrepreneurs and businesses ready to grow.",
//       cta: "Book a call",
//       sectionsTitle: "Sections",
//       contactTitle: "Contact",
//       location: "Lima, Peru",
//       links: {
//         inicio: "Home",
//         companies: "Companies",
//         servicios: "Services",
//         reviews: "Reviews",
//         faq: "FAQ",
//         contacto: "Contact",
//       },
//       bottomNote: "Made in Peru · Modern digital solutions",
//     },
//   },

//   // --- FRANÇAIS ---
//   fr: {
//     navbar: {
//       brandMain: "BR ",
//       brandAccent: "Digital Systems",
//       sections: {
//         inicio: "Accueil",
//         servicios: "Services",
//         proceso: "Processus",
//         equipo: "Équipe",
//         portafolio: "Portfolio",
//         contacto: "Contact",
//         companies: "Entreprises",
//         reviews: "Avis",
//         faq: "FAQ",
//       },
//       cta: "Planifier un diagnostic",
//     },
//     hero: {
//       tag: "Développement & automatisation",
//       titleMain: "Nous créons des solutions digitales",
//       titleHighlight: "qui font grandir votre activité.",
//       sub:
//         "Équipe full-stack orientée front, marketing multilingue et automatisation. " +
//         "Nous transformons vos idées en produits digitaux prêts à produire des résultats.",
//       cta: "Planifier un appel",
//       seeProjects: "Voir les projets →",
//       langs:
//         "Nous travaillons en espagnol, anglais, allemand, français et italien.",
//       proof1: "Performance optimisée",
//       proof2: "Sécurité de base incluse",
//       proof3: "Intégrations réelles (WhatsApp, paiements)",
//       proof4: "Analytics & suivi",
//     },
//     services: {
//       title: "Services",
//       subtitle:
//         "Des offres pensées pour démarrer vite, grandir et évoluer sans friction technique.",
//       items: [
//         {
//           title: "Site vitrine Pro",
//           description:
//             "Site orienté conversion avec une base technique solide pour se positionner et évoluer.",
//           tag: "Le plus demandé",
//           bullets: [
//             "Design professionnel + copy de base",
//             "SEO technique (indexation, métadonnées, performance)",
//             "Intégration WhatsApp + formulaires",
//             "Analytics (événements et conversions)",
//           ],
//           delivery: "Livraison : 7–14 jours",
//           fromPrice: "À partir de 299 €",
//           cta: "Planifier un diagnostic",
//         },
//         {
//           title: "Automatisation & systèmes",
//           description:
//             "Tableaux de bord, flux et outils internes pour réduire le travail manuel et gagner en contrôle.",
//           tag: "Pour équipes",
//           bullets: [
//             "Dashboard sur mesure",
//             "Intégrations (WhatsApp, email, APIs)",
//             "Rôles et permissions (si besoin)",
//             "Base évolutive (MVP → v2)",
//           ],
//           delivery: "Livraison : 2–4 semaines",
//           fromPrice: "À partir de 699 €",
//           cta: "Planifier un diagnostic",
//         },
//         {
//           title: "Boutique en ligne / E-commerce",
//           description:
//             "Catalogue, paiements et opération prêts à vendre avec une expérience rapide et fiable.",
//           tag: "Pour vendre",
//           bullets: [
//             "Catalogue + produits + catégories",
//             "Paiements (selon passerelle)",
//             "WhatsApp + notifications",
//             "SEO + performance optimisée",
//           ],
//           delivery: "Livraison : 2–3 semaines",
//           fromPrice: "À partir de 999 €",
//           cta: "Planifier un diagnostic",
//         },
//       ],
//     },
//     process: {
//       title: "Notre processus",
//       subtitle:
//         "Un flux de travail pensé pour vous donner de la clarté dès le premier jour.",
//       steps: [
//         {
//           icon: "🧭",
//           title: "1. Découverte & objectifs",
//           description:
//             "Définition des objectifs, utilisateurs, périmètre et contraintes. KPIs et priorités du MVP.",
//         },
//         {
//           icon: "🏗️",
//           title: "2. Architecture & plan",
//           description:
//             "Choix du stack, intégrations (WhatsApp/paiements/APIs), modèle de données et plan par sprints.",
//         },
//         {
//           icon: "🧩",
//           title: "3. Sprint UX/UI",
//           description:
//             "Wireframes et UI finale en composants. Validation du contenu et du parcours de conversion.",
//         },
//         {
//           icon: "⚙️",
//           title: "4. Développement par sprints",
//           description:
//             "Livraison incrémentale (frontend + backend). Démos hebdomadaires et itérations rapides.",
//         },
//         {
//           icon: "✅",
//           title: "5. QA, performance & sécurité",
//           description:
//             "Tests fonctionnels, cas limites, performance (CWV) et sécurisation de base avant production.",
//         },
//         {
//           icon: "🚀",
//           title: "6. Déploiement, monitoring & amélioration",
//           description:
//             "Mise en ligne avec checklist, analytics/suivi, observabilité et roadmap post-lancement.",
//         },
//       ],
//     },
//     team: {
//       title: "Équipe",
//       subtitle:
//         "Nous combinons développement full-stack et marketing multilingue pour que vous puissiez travailler avec une seule équipe de confiance.",
//       members: [
//         {
//           name: "Ysacc Roncal",
//           role: "Tech lead / Senior full-stack",
//           description:
//             "Plus de 7 ans d'expérience dans des solutions pour la banque et les entreprises.",
//           tags: ["React", "Node.js", "AWS"],
//         },
//         {
//           name: "Flor",
//           role: "Marketing & juridique (ES / EN / DE)",
//           description:
//             "Gestion de marque, contenus et contrats. Intervient en espagnol, anglais et allemand.",
//           tags: ["Marketing", "Juridique", "Contenu"],
//         },
//         {
//           name: "Analyst EN/FR",
//           role: "Contenu & briefing",
//           description:
//             "Reçoit les besoins en anglais et français et les traduit en briefs clairs pour l'équipe technique.",
//           tags: ["EN", "FR", "Briefing"],
//         },
//         {
//           name: "Analyst EN/IT",
//           role: "Contenu & briefing",
//           description:
//             "Accompagne les clients en anglais et italien, en alignant métier et technologie.",
//           tags: ["EN", "IT", "Briefing"],
//         },
//       ],
//     },
//     portfolio: {
//       title: "Portfolio",
//       subtitle:
//         "Exemples de projets que nous avons construits ou que nous pouvons créer pour votre activité.",
//       projects: [
//         {
//           name: "Tableau de bord de monitoring pour une entreprise de sécurité",
//           description:
//             "Interface pour visualiser alertes, caméras et statuts en temps réel, avec filtres et métriques.",
//           tag: "Systèmes sur mesure",
//           result:
//             "Visibilité opérationnelle en temps réel et contrôle centralisé",
//           stack: ["React", "TypeScript", "APIs", "Dashboards"],
//           cta: "Voir le cas",
//         },
//         {
//           name: "Landing page pour une académie en ligne",
//           description:
//             "Page de conversion avec informations claires, témoignages et formulaire WhatsApp.",
//           tag: "Landing page",
//           result: "Meilleure acquisition avec contact direct via WhatsApp",
//           stack: ["React", "SEO", "Analytics", "WhatsApp"],
//           cta: "Voir le cas",
//         },
//         {
//           name: "Site corporate pour un cabinet comptable",
//           description:
//             "Site institutionnel avec services, équipe, blog et prise de rendez-vous.",
//           tag: "Site corporate",
//           result: "Présence professionnelle et base SEO technique solide",
//           stack: ["React", "SEO technique", "Performance", "Formulaires"],
//           cta: "Voir le cas",
//         },
//         {
//           name: "Portail interne de tâches et suivi",
//           description:
//             "Application web pour organiser tâches, responsables et statuts.",
//           tag: "Automatisation",
//           result:
//             "Meilleure organisation opérationnelle avec suivi des statuts",
//           stack: ["React", "Rôles", "Automatisation", "Workflows"],
//           cta: "Voir le cas",
//         },
//       ],
//     },
//     contact: {
//       title: "Contact",
//       subtitle:
//         "Parlez-nous brièvement de votre projet et nous vous répondrons avec une proposition claire.",
//       formName: "Nom / Entreprise",
//       formEmail: "Email",
//       formMessage: "Parlez-nous de votre projet",
//       submit: "Envoyer",
//       sideText:
//         "Pour un contact plus direct, écrivez-nous sur WhatsApp et planifions un appel rapide.",
//       sideSub:
//         "Nous pouvons également travailler en anglais, allemand, français et italien.",
//       whatsappCta: "Écrire sur WhatsApp",
//     },
//     footer: {
//       text: "Nous créons des solutions digitales sur mesure pour entrepreneurs et entreprises.",
//       tagline:
//         "Développement web et solutions digitales pour entrepreneurs et entreprises en croissance.",
//       cta: "Réserver un appel",
//       sectionsTitle: "Sections",
//       contactTitle: "Contact",
//       location: "Lima, Pérou",
//       links: {
//         inicio: "Accueil",
//         companies: "Entreprises",
//         servicios: "Services",
//         reviews: "Avis",
//         faq: "FAQ",
//         contacto: "Contact",
//       },
//       bottomNote: "Fait au Pérou · Solutions digitales modernes",
//     },
//   },

//   // --- DEUTSCH ---
//   de: {
//     navbar: {
//       brandMain: "BR ",
//       brandAccent: "Digital Systems",
//       sections: {
//         inicio: "Start",
//         servicios: "Leistungen",
//         proceso: "Ablauf",
//         equipo: "Team",
//         portafolio: "Projekte",
//         contacto: "Kontakt",
//         companies: "Unternehmen",
//         reviews: "Bewertungen",
//         faq: "FAQ",
//       },
//       cta: "Diagnose vereinbaren",
//     },
//     hero: {
//       tag: "Entwicklung & Automatisierung",
//       titleMain: "Wir entwickeln digitale Lösungen,",
//       titleHighlight: "die Ihr Geschäft voranbringen.",
//       sub:
//         "Full-Stack-Team mit Fokus auf Frontend, mehrsprachigem Marketing und Automatisierung. " +
//         "Wir verwandeln Ideen in digitale Produkte mit messbaren Ergebnissen.",
//       cta: "Gespräch vereinbaren",
//       seeProjects: "Projekte ansehen →",
//       langs:
//         "Wir arbeiten auf Spanisch, Englisch, Deutsch, Französisch und Italienisch.",
//       proof1: "Performance-optimiert",
//       proof2: "Basis-Sicherheit inklusive",
//       proof3: "Echte Integrationen (WhatsApp, Zahlungen)",
//       proof4: "Analytics & Tracking",
//     },
//     services: {
//       title: "Leistungen",
//       subtitle:
//         "Pakete, mit denen Sie schnell starten, wachsen und ohne technische Reibung skalieren können.",
//       items: [
//         {
//           title: "Business-Website Pro",
//           description:
//             "Conversion-starke Website mit solider technischer Basis für Wachstum und Skalierung.",
//           tag: "Bestseller",
//           bullets: [
//             "Professionelles Design + Basis-Copy",
//             "Technisches SEO (Indexierung, Metadaten, Performance)",
//             "WhatsApp + Formulare",
//             "Analytics (Events und Conversions)",
//           ],
//           delivery: "Lieferung: 7–14 Tage",
//           fromPrice: "Ab 299 €",
//           cta: "Diagnose vereinbaren",
//         },
//         {
//           title: "Automatisierung & Systeme",
//           description:
//             "Dashboards, Workflows und interne Tools, um manuelle Arbeit zu reduzieren und Überblick zu gewinnen.",
//           tag: "Für Teams",
//           bullets: [
//             "Individuelles Dashboard/Panel",
//             "Integrationen (WhatsApp, E-Mail, APIs)",
//             "Rollen & Rechte (falls nötig)",
//             "Skalierbare Basis (MVP → v2)",
//           ],
//           delivery: "Lieferung: 2–4 Wochen",
//           fromPrice: "Ab 699 €",
//           cta: "Diagnose vereinbaren",
//         },
//         {
//           title: "Onlineshop / E-commerce",
//           description:
//             "Katalog, Zahlungen und Betrieb – bereit zum Verkaufen mit schneller, zuverlässiger UX.",
//           tag: "Für Verkauf",
//           bullets: [
//             "Katalog + Produkte + Kategorien",
//             "Checkout/Zahlungen (je nach Anbieter)",
//             "WhatsApp + Benachrichtigungen",
//             "SEO + Performance optimiert",
//           ],
//           delivery: "Lieferung: 2–3 Wochen",
//           fromPrice: "Ab 999 €",
//           cta: "Diagnose vereinbaren",
//         },
//       ],
//     },
//     process: {
//       title: "Unser Ablauf",
//       subtitle:
//         "Ein strukturierter Prozess, der Ihnen von Anfang an Klarheit gibt.",
//       steps: [
//         {
//           icon: "🧭",
//           title: "1. Discovery & Ziele",
//           description:
//             "Ziele, Nutzer, Umfang und Einschränkungen. KPIs und MVP-Prioritäten werden definiert.",
//         },
//         {
//           icon: "🏗️",
//           title: "2. Architektur & Plan",
//           description:
//             "Stack, Integrationen (WhatsApp/Zahlungen/APIs), Datenmodell und Sprint-Plan mit Deliverables.",
//         },
//         {
//           icon: "🧩",
//           title: "3. UX/UI-Design Sprint",
//           description:
//             "Wireframes und finale UI als Komponenten. Validierung von Copy, Struktur und Conversion-Flow.",
//         },
//         {
//           icon: "⚙️",
//           title: "4. Entwicklung in Sprints",
//           description:
//             "Inkrementelle Umsetzung (Frontend + Backend). Wöchentliche Demos und schnelle Iterationen.",
//         },
//         {
//           icon: "✅",
//           title: "5. QA, Performance & Sicherheit",
//           description:
//             "Funktionstests, Edge Cases, Performance (CWV) und Basishärtung vor dem Go-Live.",
//         },
//         {
//           icon: "🚀",
//           title: "6. Deploy, Monitoring & Weiterentwicklung",
//           description:
//             "Release mit Checklist, Analytics/Tracking, Observability und Roadmap nach dem Launch.",
//         },
//       ],
//     },
//     team: {
//       title: "Team",
//       subtitle:
//         "Wir verbinden Full-Stack-Entwicklung mit mehrsprachigem Marketing, damit Sie mit einem verlässlichen Team arbeiten können.",
//       members: [
//         {
//           name: "Ysacc Roncal",
//           role: "Tech Lead / Senior Full-Stack",
//           description:
//             "Über 7 Jahre Erfahrung in Lösungen für Banken und Unternehmen. Fokus auf Frontend und Qualität.",
//           tags: ["React", "Node.js", "AWS"],
//         },
//         {
//           name: "Flor",
//           role: "Marketing & Recht (ES / EN / DE)",
//           description:
//             "Verantwortlich für Marke, Inhalte und Verträge. Betreut Kunden auf Spanisch, Englisch und Deutsch.",
//           tags: ["Marketing", "Recht", "Content"],
//         },
//         {
//           name: "Analyst EN/FR",
//           role: "Content & Briefing",
//           description:
//             "Nimmt Anforderungen auf Englisch und Französisch auf und übersetzt sie in klare Briefings.",
//           tags: ["EN", "FR", "Briefing"],
//         },
//         {
//           name: "Analyst EN/IT",
//           role: "Content & Briefing",
//           description:
//             "Betreut Kunden auf Englisch und Italienisch und verbindet Business und Technik.",
//           tags: ["EN", "IT", "Briefing"],
//         },
//       ],
//     },
//     portfolio: {
//       title: "Projekte",
//       subtitle:
//         "Beispiele für Projekte, die wir umgesetzt haben oder für Sie umsetzen können.",
//       projects: [
//         {
//           name: "Monitoring-Dashboard für Sicherheitsunternehmen",
//           description:
//             "Web-Panel zur Anzeige von Alarmen, Kameras und Status in Echtzeit.",
//           tag: "Individuelle Systeme",
//           result: "Echtzeit-Transparenz und zentralisierte Steuerung",
//           stack: ["React", "TypeScript", "APIs", "Dashboards"],
//           cta: "Fall ansehen",
//         },
//         {
//           name: "Landingpage für Online-Akademie",
//           description:
//             "Conversion-starke Seite mit Kursinfos, Testimonials und WhatsApp-Formular.",
//           tag: "Landingpage",
//           result: "Besserer Lead-Flow mit direktem WhatsApp-Kontakt",
//           stack: ["React", "SEO", "Analytics", "WhatsApp"],
//           cta: "Fall ansehen",
//         },
//         {
//           name: "Firmenseite für Steuerkanzlei",
//           description:
//             "Corporate Website mit Leistungen, Team, Blog und Terminbuchung.",
//           tag: "Corporate Website",
//           result: "Professioneller Auftritt und starke technische SEO-Basis",
//           stack: ["React", "Technisches SEO", "Performance", "Formulare"],
//           cta: "Fall ansehen",
//         },
//         {
//           name: "Internes Aufgaben- & Tracking-Portal",
//           description:
//             "Web-App zur Organisation von Aufgaben, Zuständigkeiten und Status.",
//           tag: "Automatisierung",
//           result:
//             "Mehr Klarheit im Betrieb durch Status- und Verantwortungs-Tracking",
//           stack: ["React", "Rollen", "Automatisierung", "Workflows"],
//           cta: "Fall ansehen",
//         },
//       ],
//     },
//     contact: {
//       title: "Kontakt",
//       subtitle:
//         "Erzählen Sie uns kurz von Ihrem Projekt, und wir melden uns mit einem klaren Angebot.",
//       formName: "Name / Unternehmen",
//       formEmail: "E-Mail",
//       formMessage: "Projektbeschreibung",
//       submit: "Nachricht senden",
//       sideText:
//         "Für einen direkten Draht schreiben Sie uns einfach per WhatsApp und vereinbaren einen kurzen Call.",
//       sideSub:
//         "Wir können Sie auch auf Englisch, Deutsch, Französisch und Italienisch unterstützen.",
//       whatsappCta: "Auf WhatsApp schreiben",
//     },
//     footer: {
//       text: "Wir entwickeln maßgeschneiderte digitale Lösungen für Selbstständige und Unternehmen.",
//       tagline:
//         "Webentwicklung und digitale Lösungen für Selbstständige und Unternehmen, die wachsen wollen.",
//       cta: "Termin vereinbaren",
//       sectionsTitle: "Bereiche",
//       contactTitle: "Kontakt",
//       location: "Lima, Peru",
//       links: {
//         inicio: "Start",
//         companies: "Unternehmen",
//         servicios: "Leistungen",
//         reviews: "Bewertungen",
//         faq: "FAQ",
//         contacto: "Kontakt",
//       },
//       bottomNote: "In Peru erstellt · Moderne digitale Lösungen",
//     },
//   },
// };
