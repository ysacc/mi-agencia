export type Lang = 'es' | 'en' | 'fr' | 'de';

type ServiceItem = { title: string; description: string };
type StepItem = { title: string; description: string };
type MemberItem = {
  name: string;
  role: string;
  description: string;
  tags: string[];
};
type ProjectItem = { name: string; description: string; tag: string };

interface Translation {
  navbar: {
    brandMain: string;
    brandAccent: string;
    sections: {
      inicio: string;
      servicios: string;
      proceso: string;
      equipo: string;
      portafolio: string;
      contacto: string;
    };
    cta: string;
  };
  hero: {
    tag: string;
    titleMain: string;
    titleHighlight: string;
    sub: string;
    cta: string;
    seeProjects: string;
    langs: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  team: {
    title: string;
    subtitle: string;
    members: MemberItem[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    projects: ProjectItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    submit: string;
    sideText: string;
    sideSub: string;
    whatsappCta: string;
  };
  footer: {
    text: string;
  };
}

export const translations: Record<Lang, Translation> = {
  es: {
    navbar: {
      brandMain: 'BR ',
      brandAccent: 'Digital Systems',
      sections: {
        inicio: 'Inicio',
        servicios: 'Servicios',
        proceso: 'Proceso',
        equipo: 'Equipo',
        portafolio: 'Portafolio',
        contacto: 'Contacto',
      },
      cta: 'Hablemos',
    },
    hero: {
      tag: 'Desarrollo & Automatización',
      titleMain: 'Construimos soluciones digitales',
      titleHighlight: 'que hacen crecer tu negocio.',
      sub:
        'Equipo full-stack con foco en front, marketing multilingüe y automatización. ' +
        'Transformamos ideas en productos digitales listos para producir resultados reales.',
      cta: 'Agenda una reunión',
      seeProjects: 'Ver proyectos →',
      langs: 'Atendemos en Español, Inglés, Alemán, Francés e Italiano.',
    },
    services: {
      title: 'Servicios',
      subtitle:
        'Paquetes pensados para que puedas empezar rápido, crecer y escalar sin fricción técnica.',
      items: [
        {
          title: 'Desarrollo Web Profesional',
          description:
            'Sitios modernos, rápidos y optimizados para que tus clientes te encuentren y conviertan.',
        },
        {
          title: 'Sistemas y Automatización',
          description:
            'Dashboards, integraciones y herramientas internas para que tu negocio trabaje por ti.',
        },
        {
          title: 'Mantenimiento & Soporte',
          description:
            'Actualizaciones, seguridad, hosting y soporte técnico continuo para tus proyectos.',
        },
      ],
    },
    process: {
      title: 'Nuestro proceso',
      subtitle:
        'Un flujo pensado para que tengas claridad desde el día uno: qué haremos, cómo y cuándo lo tendrás listo.',
      steps: [
        {
          title: '1. Descubrimiento',
          description:
            'Conversamos contigo para entender tu negocio, tus objetivos y lo que realmente necesitas.',
        },
        {
          title: '2. Propuesta y planificación',
          description:
            'Preparamos una propuesta clara con alcance, tiempos y costos definidos. Sin letra pequeña.',
        },
        {
          title: '3. Diseño, desarrollo y pruebas',
          description:
            'Construimos tu solución digital iterando contigo y probamos antes de lanzar.',
        },
        {
          title: '4. Lanzamiento y acompañamiento',
          description:
            'Publicamos el proyecto y te acompañamos con soporte, mejoras y planes de mantenimiento.',
        },
      ],
    },
    team: {
      title: 'Equipo',
      subtitle:
        'Unimos desarrollo full-stack con marketing y contenido multilingüe para que trabajes con un solo equipo de confianza.',
      members: [
        {
          name: 'Ysacc Roncal',
          role: 'Líder Técnico / Senior Full-Stack',
          description:
            'Más de 7 años construyendo soluciones para banca y empresas. Enfoque en front, escalabilidad y calidad.',
          tags: ['React', 'Node.js', 'AWS'],
        },
        {
          name: 'Flor',
          role: 'Marketing & Legal (ES / EN / DE)',
          description:
            'Gestión de marca, contenidos y contratos. Atiende clientes en español, inglés y alemán.',
          tags: ['Marketing', 'Legal', 'Content'],
        },
        {
          name: 'Analyst EN/FR',
          role: 'Content & Briefing',
          description:
            'Toma requerimientos en inglés y francés y los traduce en briefs claros para el equipo técnico.',
          tags: ['EN', 'FR', 'Briefing'],
        },
        {
          name: 'Analyst EN/IT',
          role: 'Content & Briefing',
          description:
            'Soporte a clientes en inglés e italiano, alineando negocio y tecnología.',
          tags: ['EN', 'IT', 'Briefing'],
        },
      ],
    },
    portfolio: {
      title: 'Portafolio',
      subtitle:
        'Algunos tipos de proyectos que hemos construido o podemos desarrollar para tu negocio. Siempre con foco en resultados.',
      projects: [
        {
          name: 'Dashboard de monitoreo para empresa de seguridad',
          description:
            'Panel web para visualizar alertas, cámaras y estados en tiempo real, con filtros y métricas clave.',
          tag: 'Sistemas a medida',
        },
        {
          name: 'Landing para academia online',
          description:
            'Página de alta conversión con información de cursos, testimonios y formulario directo a WhatsApp.',
          tag: 'Landing page',
        },
        {
          name: 'Sitio corporativo para estudio contable',
          description:
            'Web institucional con servicios, equipo, blog y agenda de citas, optimizada para posicionamiento local.',
          tag: 'Web corporativa',
        },
        {
          name: 'Portal interno de tareas y seguimientos',
          description:
            'Aplicación web para organizar tareas, responsables y estados, pensada para ordenar la operación.',
          tag: 'Automatización',
        },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle:
        'Cuéntanos brevemente sobre tu proyecto y te responderemos con una propuesta clara y directa.',
      formName: 'Nombre / Empresa',
      formEmail: 'Email',
      formMessage: 'Cuéntanos sobre tu proyecto',
      submit: 'Enviar mensaje',
      sideText:
        'Si prefieres algo más directo, escríbenos por WhatsApp y agenda una llamada rápida para revisar tu caso.',
      sideSub:
        'También podemos atenderte en inglés, alemán, francés e italiano.',
      whatsappCta: 'Escribir por WhatsApp',
    },
    footer: {
      text: 'Desarrollamos soluciones digitales a medida para empresas y emprendedores.',
    },
  },

  // --- ENGLISH ---
  en: {
    navbar: {
      brandMain: 'BR ',
      brandAccent: 'Digital Systems',
      sections: {
        inicio: 'Home',
        servicios: 'Services',
        proceso: 'Process',
        equipo: 'Team',
        portafolio: 'Portfolio',
        contacto: 'Contact',
      },
      cta: "Let's talk",
    },
    hero: {
      tag: 'Development & Automation',
      titleMain: 'We build digital solutions',
      titleHighlight: 'that help your business grow.',
      sub:
        'Full-stack team focused on front-end, multilingual marketing and automation. ' +
        'We turn ideas into digital products ready to deliver real results.',
      cta: 'Book a call',
      seeProjects: 'See projects →',
      langs: 'We work in Spanish, English, German, French and Italian.',
    },
    services: {
      title: 'Services',
      subtitle:
        'Service packs designed to help you start fast, grow and scale without technical friction.',
      items: [
        {
          title: 'Professional Web Development',
          description:
            'Modern, fast websites optimized so your customers can find you and convert.',
        },
        {
          title: 'Systems & Automation',
          description:
            'Dashboards, integrations and internal tools so your business can work for you.',
        },
        {
          title: 'Maintenance & Support',
          description:
            'Updates, security, hosting and ongoing technical support for your projects.',
        },
      ],
    },
    process: {
      title: 'Our process',
      subtitle:
        "A workflow designed so you have clarity from day one: what we'll do, how and when you'll have it ready.",
      steps: [
        {
          title: '1. Discovery',
          description:
            'We talk with you to understand your business, goals and what you really need.',
        },
        {
          title: '2. Proposal & planning',
          description:
            'We prepare a clear proposal with scope, timeline and costs. No fine print.',
        },
        {
          title: '3. Design, development & testing',
          description:
            'We build your digital solution iterating with you and testing before launch.',
        },
        {
          title: '4. Launch & support',
          description:
            'We launch the project and support you with maintenance and improvements.',
        },
      ],
    },
    team: {
      title: 'Team',
      subtitle:
        'We combine full-stack development with multilingual marketing and content so you can work with one reliable team.',
      members: [
        {
          name: 'Ysacc Roncal',
          role: 'Tech Lead / Senior Full-Stack',
          description:
            '7+ years building solutions for banking and enterprises. Focused on front-end, scalability and quality.',
          tags: ['React', 'Node.js', 'AWS'],
        },
        {
          name: 'Flor',
          role: 'Marketing & Legal (ES / EN / DE)',
          description:
            'Brand, content and contracts. Handles clients in Spanish, English and German.',
          tags: ['Marketing', 'Legal', 'Content'],
        },
        {
          name: 'Analyst EN/FR',
          role: 'Content & Briefing',
          description:
            'Takes requirements in English and French and turns them into clear briefs for the dev team.',
          tags: ['EN', 'FR', 'Briefing'],
        },
        {
          name: 'Analyst EN/IT',
          role: 'Content & Briefing',
          description:
            'Supports clients in English and Italian, aligning business and technology.',
          tags: ['EN', 'IT', 'Briefing'],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle:
        "Some types of projects we've built or can build for your business. Always focused on results.",
      projects: [
        {
          name: 'Monitoring dashboard for a security company',
          description:
            'Web panel to view alerts, cameras and status in real time, with filters and key metrics.',
          tag: 'Custom systems',
        },
        {
          name: 'Landing page for an online academy',
          description:
            'High-conversion page with clear course information, testimonials and direct WhatsApp form.',
          tag: 'Landing page',
        },
        {
          name: 'Corporate site for an accounting firm',
          description:
            'Institutional site with services, team, blog and booking, optimized for local SEO.',
          tag: 'Corporate website',
        },
        {
          name: 'Internal task & follow-up portal',
          description:
            'Web app to organize tasks, assignees and statuses, designed to streamline daily operations.',
          tag: 'Automation',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle:
        "Tell us briefly about your project and we'll reply with a clear and direct proposal.",
      formName: 'Name / Company',
      formEmail: 'Email',
      formMessage: 'Tell us about your project',
      submit: 'Send message',
      sideText:
        'If you prefer something more direct, send us a WhatsApp and schedule a quick call.',
      sideSub:
        'We can also work with you in English, German, French and Italian.',
      whatsappCta: 'Write on WhatsApp',
    },
    footer: {
      text: 'We build custom digital solutions for businesses and entrepreneurs.',
    },
  },

  // --- FRANÇAIS ---
  fr: {
    navbar: {
      brandMain: 'BR ',
      brandAccent: 'Digital Systems',
      sections: {
        inicio: 'Accueil',
        servicios: 'Services',
        proceso: 'Processus',
        equipo: 'Équipe',
        portafolio: 'Portfolio',
        contacto: 'Contact',
      },
      cta: 'Parlons-en',
    },
    hero: {
      tag: 'Développement & automatisation',
      titleMain: 'Nous créons des solutions digitales',
      titleHighlight: 'qui font grandir votre activité.',
      sub:
        'Équipe full-stack orientée front, marketing multilingue et automatisation. ' +
        'Nous transformons vos idées en produits digitaux prêts à produire des résultats.',
      cta: 'Planifier un appel',
      seeProjects: 'Voir les projets →',
      langs:
        'Nous travaillons en espagnol, anglais, allemand, français et italien.',
    },
    services: {
      title: 'Services',
      subtitle:
        'Des offres pensées pour démarrer vite, grandir et évoluer sans friction technique.',
      items: [
        {
          title: 'Développement web professionnel',
          description:
            'Sites modernes, rapides et optimisés pour que vos clients vous trouvent et convertissent.',
        },
        {
          title: 'Systèmes & automatisation',
          description:
            'Tableaux de bord, intégrations et outils internes pour que votre entreprise travaille pour vous.',
        },
        {
          title: 'Maintenance & support',
          description:
            'Mises à jour, sécurité, hébergement et support technique continu.',
        },
      ],
    },
    process: {
      title: 'Notre processus',
      subtitle:
        'Un flux de travail pensé pour vous donner de la clarté dès le premier jour.',
      steps: [
        {
          title: '1. Découverte',
          description:
            'Nous analysons votre activité, vos objectifs et vos vrais besoins.',
        },
        {
          title: '2. Proposition & planification',
          description:
            'Nous préparons une proposition claire avec périmètre, délais et coûts.',
        },
        {
          title: '3. Design, développement & tests',
          description:
            'Nous construisons votre solution digitale en itérant avec vous avant le lancement.',
        },
        {
          title: '4. Lancement & accompagnement',
          description:
            'Nous publions le projet et vous accompagnons avec maintenance et améliorations.',
        },
      ],
    },
    team: {
      title: 'Équipe',
      subtitle:
        'Nous combinons développement full-stack et marketing multilingue pour que vous puissiez travailler avec une seule équipe de confiance.',
      members: [
        {
          name: 'Ysacc Roncal',
          role: 'Tech lead / Senior full-stack',
          description:
            "Plus de 7 ans d'expérience dans des solutions pour la banque et les entreprises.",
          tags: ['React', 'Node.js', 'AWS'],
        },
        {
          name: 'Flor',
          role: 'Marketing & juridique (ES / EN / DE)',
          description:
            'Gestion de marque, contenus et contrats. Intervient en espagnol, anglais et allemand.',
          tags: ['Marketing', 'Juridique', 'Contenu'],
        },
        {
          name: 'Analyst EN/FR',
          role: 'Contenu & briefing',
          description:
            "Reçoit les besoins en anglais et français et les traduit en briefs clairs pour l'équipe technique.",
          tags: ['EN', 'FR', 'Briefing'],
        },
        {
          name: 'Analyst EN/IT',
          role: 'Contenu & briefing',
          description:
            'Accompagne les clients en anglais et italien, en alignant métier et technologie.',
          tags: ['EN', 'IT', 'Briefing'],
        },
      ],
    },
    portfolio: {
      title: 'Portfolio',
      subtitle:
        'Exemples de projets que nous avons construits ou que nous pouvons créer pour votre activité.',
      projects: [
        {
          name: 'Tableau de bord de monitoring pour une entreprise de sécurité',
          description:
            'Interface pour visualiser alertes, caméras et statuts en temps réel, avec filtres et métriques.',
          tag: 'Systèmes sur mesure',
        },
        {
          name: 'Landing page pour une académie en ligne',
          description:
            'Page de conversion avec informations claires, témoignages et formulaire WhatsApp.',
          tag: 'Landing page',
        },
        {
          name: 'Site corporate pour un cabinet comptable',
          description:
            'Site institutionnel avec services, équipe, blog et prise de rendez-vous.',
          tag: 'Site corporate',
        },
        {
          name: 'Portail interne de tâches et suivi',
          description:
            'Application web pour organiser tâches, responsables et statuts.',
          tag: 'Automatisation',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle:
        'Parlez-nous brièvement de votre projet et nous vous répondrons avec une proposition claire.',
      formName: 'Nom / Entreprise',
      formEmail: 'Email',
      formMessage: 'Parlez-nous de votre projet',
      submit: 'Envoyer',
      sideText:
        'Pour un contact plus direct, écrivez-nous sur WhatsApp et planifions un appel rapide.',
      sideSub:
        'Nous pouvons également travailler en anglais, allemand, français et italien.',
      whatsappCta: 'Écrire sur WhatsApp',
    },
    footer: {
      text: 'Nous créons des solutions digitales sur mesure pour les entreprises et les entrepreneurs.',
    },
  },

  // --- DEUTSCH ---
  de: {
    navbar: {
      brandMain: 'BR ',
      brandAccent: 'Digital Systems',
      sections: {
        inicio: 'Start',
        servicios: 'Leistungen',
        proceso: 'Ablauf',
        equipo: 'Team',
        portafolio: 'Projekte',
        contacto: 'Kontakt',
      },
      cta: 'Kontakt',
    },
    hero: {
      tag: 'Entwicklung & Automatisierung',
      titleMain: 'Wir entwickeln digitale Lösungen,',
      titleHighlight: 'die Ihr Geschäft voranbringen.',
      sub:
        'Full-Stack-Team mit Fokus auf Frontend, mehrsprachigem Marketing und Automatisierung. ' +
        'Wir verwandeln Ideen in digitale Produkte mit messbaren Ergebnissen.',
      cta: 'Gespräch vereinbaren',
      seeProjects: 'Projekte ansehen →',
      langs:
        'Wir arbeiten auf Spanisch, Englisch, Deutsch, Französisch und Italienisch.',
    },
    services: {
      title: 'Leistungen',
      subtitle:
        'Pakete, mit denen Sie schnell starten, wachsen und ohne technische Reibung skalieren können.',
      items: [
        {
          title: 'Professionelle Webentwicklung',
          description:
            'Moderne, schnelle Websites, damit Ihre Kunden Sie finden und konvertieren.',
        },
        {
          title: 'Systeme & Automatisierung',
          description:
            'Dashboards, Integrationen und interne Tools, damit Ihr Unternehmen effizienter arbeitet.',
        },
        {
          title: 'Wartung & Support',
          description:
            'Updates, Sicherheit, Hosting und laufender technischer Support.',
        },
      ],
    },
    process: {
      title: 'Unser Ablauf',
      subtitle:
        'Ein strukturierter Prozess, der Ihnen von Anfang an Klarheit gibt.',
      steps: [
        {
          title: '1. Analyse',
          description:
            'Wir lernen Ihr Geschäft, Ihre Ziele und Anforderungen kennen.',
        },
        {
          title: '2. Angebot & Planung',
          description:
            'Wir erstellen ein klares Angebot mit Umfang, Zeitplan und Kosten.',
        },
        {
          title: '3. Design, Entwicklung & Tests',
          description:
            'Wir entwickeln Ihre Lösung iterativ und testen vor dem Go-Live.',
        },
        {
          title: '4. Go-Live & Betreuung',
          description:
            'Wir veröffentlichen das Projekt und begleiten Sie mit Wartung und Optimierungen.',
        },
      ],
    },
    team: {
      title: 'Team',
      subtitle:
        'Wir verbinden Full-Stack-Entwicklung mit mehrsprachigem Marketing, damit Sie mit einem verlässlichen Team arbeiten können.',
      members: [
        {
          name: 'Ysacc Roncal',
          role: 'Tech Lead / Senior Full-Stack',
          description:
            'Über 7 Jahre Erfahrung in Lösungen für Banken und Unternehmen. Fokus auf Frontend und Qualität.',
          tags: ['React', 'Node.js', 'AWS'],
        },
        {
          name: 'Flor',
          role: 'Marketing & Recht (ES / EN / DE)',
          description:
            'Verantwortlich für Marke, Inhalte und Verträge. Betreut Kunden auf Spanisch, Englisch und Deutsch.',
          tags: ['Marketing', 'Recht', 'Content'],
        },
        {
          name: 'Analyst EN/FR',
          role: 'Content & Briefing',
          description:
            'Nimmt Anforderungen auf Englisch und Französisch auf und übersetzt sie in klare Briefings.',
          tags: ['EN', 'FR', 'Briefing'],
        },
        {
          name: 'Analyst EN/IT',
          role: 'Content & Briefing',
          description:
            'Betreut Kunden auf Englisch und Italienisch und verbindet Business und Technik.',
          tags: ['EN', 'IT', 'Briefing'],
        },
      ],
    },
    portfolio: {
      title: 'Projekte',
      subtitle:
        'Beispiele für Projekte, die wir umgesetzt haben oder für Sie umsetzen können.',
      projects: [
        {
          name: 'Monitoring-Dashboard für Sicherheitsunternehmen',
          description:
            'Web-Panel zur Anzeige von Alarmen, Kameras und Status in Echtzeit.',
          tag: 'Individuelle Systeme',
        },
        {
          name: 'Landingpage für Online-Akademie',
          description:
            'Conversion-starke Seite mit Kursinfos, Testimonials und WhatsApp-Formular.',
          tag: 'Landingpage',
        },
        {
          name: 'Firmenseite für Steuerkanzlei',
          description:
            'Corporate Website mit Leistungen, Team, Blog und Terminbuchung.',
          tag: 'Corporate Website',
        },
        {
          name: 'Internes Aufgaben- & Tracking-Portal',
          description:
            'Web-App zur Organisation von Aufgaben, Zuständigkeiten und Status.',
          tag: 'Automatisierung',
        },
      ],
    },
    contact: {
      title: 'Kontakt',
      subtitle:
        'Erzählen Sie uns kurz von Ihrem Projekt, und wir melden uns mit einem klaren Angebot.',
      formName: 'Name / Unternehmen',
      formEmail: 'E-Mail',
      formMessage: 'Projektbeschreibung',
      submit: 'Nachricht senden',
      sideText:
        'Für einen direkten Draht schreiben Sie uns einfach per WhatsApp und vereinbaren einen kurzen Call.',
      sideSub:
        'Wir können Sie auch auf Englisch, Deutsch, Französisch und Italienisch unterstützen.',
      whatsappCta: 'Auf WhatsApp schreiben',
    },
    footer: {
      text: 'Wir entwickeln maßgeschneiderte digitale Lösungen für Unternehmen und Selbstständige.',
    },
  },
};
