document.addEventListener("DOMContentLoaded", () => {

  // ==========================================================
  // ENTRE NOSOTROS
  // SCRIPT COMPLETO
  // ==========================================================


  // ==========================================================
  // 1. MENÚ PARA CELULAR
  // ==========================================================

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

      navLinks.classList.toggle("active");

      const abierto = navLinks.classList.contains("active");

      menuToggle.setAttribute("aria-expanded", abierto);

      menuToggle.textContent = abierto ? "✕" : "☰";

    });

  }


  // ==========================================================
  // 2. TARJETAS DE MITOS
  // ==========================================================

  const mythCards = document.querySelectorAll(".myth-card");

  mythCards.forEach((card) => {

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    card.addEventListener("keydown", (event) => {

      if (event.key === "Enter" || event.key === " ") {

        event.preventDefault();

        card.classList.toggle("flipped");

      }

    });

  });


  // ==========================================================
  // 3. RECURSOS DE AYUDA
  // ==========================================================

  /*
    La información está organizada por provincia.

    Recursos nacionales:
    911  → Emergencias
    100  → Bomberos
    103  → Defensa Civil
    106  → Emergencias náuticas
    135  → Prevención/asistencia ante crisis suicida
    144  → Violencia de género
    102  → Derechos de niñas, niños y adolescentes
    145  → Trata y explotación
    0800-999-0091 → Urgencias de salud mental
  */


  const recursosNacionales = [

    {
      nombre: "Emergencias",
      telefono: "911",
      descripcion:
        "Central Nacional de Emergencias. Ante una situación de peligro inmediato.",
      tipo: "emergencia"
    },

    {
      nombre: "Urgencias de salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación, apoyo y contención ante situaciones de urgencia o problemas de salud mental. Atención gratuita, confidencial y nacional, las 24 horas.",
      tipo: "salud"
    },

    {
      nombre: "Prevención del suicidio",
      telefono: "135",
      descripcion:
        "Línea destinada a brindar asistencia ante crisis emocionales y situaciones vinculadas al suicidio.",
      tipo: "salud"
    },

    {
      nombre: "Bomberos",
      telefono: "100",
      descripcion:
        "Para incendios y emergencias que requieran intervención de Bomberos.",
      tipo: "emergencia"
    },

    {
      nombre: "Defensa Civil",
      telefono: "103",
      descripcion:
        "Asistencia ante desastres, derrumbes, inundaciones y otras emergencias.",
      tipo: "emergencia"
    },

    {
      nombre: "Emergencias náuticas",
      telefono: "106",
      descripcion:
        "Emergencias en ríos, lagos y costas.",
      tipo: "emergencia"
    },

    {
      nombre: "Violencia de género",
      telefono: "144",
      descripcion:
        "Orientación y acompañamiento ante situaciones de violencia de género.",
      tipo: "orientacion"
    },

    {
      nombre: "Línea 102",
      telefono: "102",
      descripcion:
        "Orientación y protección de derechos de niñas, niños y adolescentes.",
      tipo: "orientacion"
    },

    {
      nombre: "Trata y explotación",
      telefono: "145",
      descripcion:
        "Orientación y asistencia ante situaciones de trata y explotación de personas.",
      tipo: "orientacion"
    }

  ];


  // ==========================================================
  // INFORMACIÓN POR PROVINCIA
  // ==========================================================

  const recursosPorProvincia = {

 // --------------------------------------------------------
// BUENOS AIRES
// --------------------------------------------------------

"Buenos Aires": {

  emergencia:
    "911",

  salud:
    "0800-222-5462",

  titulo:
    "Ayuda en Buenos Aires",

  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte con el 911. Para orientación y acompañamiento en salud mental en la Provincia de Buenos Aires, está disponible la línea provincial 0800-222-5462.",

  recursos: [

    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Central de Emergencias. Ante un peligro inmediato, comunicate al 911."
    },

    {
      nombre: "💚 Acompañamiento en salud mental",
      telefono: "0800-222-5462",
      descripcion:
        "Línea provincial de acompañamiento en salud mental."
    },

    {
      nombre: "💚 Urgencias de salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo nacional en salud mental, gratuita, confidencial y disponible las 24 horas."
    }

  ],

  sitio:
    "https://www.gba.gob.ar/saludprovincia"

},
   // --------------------------------------------------------
    // CIUDAD AUTÓNOMA DE BUENOS AIRES
    // --------------------------------------------------------

   "Ciudad Autónoma de Buenos Aires": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Ciudad Autónoma de Buenos Aires",

  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, podés llamar al SAME al 107, disponible las 24 horas. CABA también cuenta con Salud Mental Responde, una línea gratuita de atención y orientación en salud mental.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Central de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },
    {
      nombre: "🏥 SAME — emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio gratuito de ambulancias y atención médica de urgencia, disponible las 24 horas en la Ciudad."
    },
    {
      nombre: "💚 Salud Mental Responde",
      telefono: "08003331665",
      descripcion:
        "Línea gratuita de orientación, escucha y contención en salud mental. Atención todos los días, las 24 horas, por profesionales de Salud Mental."
    },
    {
      nombre: "💚 Atención en hospitales públicos",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental también podés acercarte a la guardia de un hospital público para recibir evaluación y atención."
    },
    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "08009990091",
      descripcion:
        "Línea nacional gratuita y confidencial de orientación y apoyo ante urgencias de salud mental. Disponible las 24 horas."
    }
  ],

  sitio: "https://buenosaires.gob.ar/salud"
},

    // --------------------------------------------------------
    // CATAMARCA
    // --------------------------------------------------------

    "Catamarca": {
  emergencia: "911",
  salud: "911",
  titulo: "Ayuda en Catamarca",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para recibir atención en salud mental, también podés acercarte a un hospital o centro de salud de la provincia.",
  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Servicio de Emergencias Coordinadas de Catamarca. Ante una situación de peligro inmediato, comunicate al 911."
    },
    {
      nombre: "💚 Atención en salud mental",
      telefono: null,
      descripcion:
        "La provincia cuenta con dispositivos y equipos de salud mental para la atención y acompañamiento de personas en situación de crisis."
    },
    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas."
    }
  ],
  sitio: "https://salud.catamarca.gob.ar/"
},

    // --------------------------------------------------------
    // CHACO
    // --------------------------------------------------------

   "Chaco": {
  emergencia: "911",
  salud: "3624-618432",
  titulo: "Ayuda en Chaco",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Chaco cuenta con una guardia remota de salud mental disponible las 24 horas para brindar asistencia y contención ante situaciones de crisis.",
  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Centro Multiagencial de Emergencias 911. Ante una situación de peligro inmediato, comunicate al 911."
    },
    {
      nombre: "💚 Salud mental — guardia diurna",
      telefono: "3624-618432",
      descripcion:
        "Guardia remota de salud mental del programa Fortaleza. Disponible todos los días de 8 a 20."
    },
    {
      nombre: "💚 Salud mental — guardia nocturna",
      telefono: "3624-814825",
      descripcion:
        "Guardia remota de salud mental del programa Fortaleza. Disponible todos los días de 20 a 8."
    },
    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas, desde cualquier punto del país."
    }
  ],
  sitio: "https://chaco.gob.ar/"
},

    // --------------------------------------------------------
    // CHUBUT
    // --------------------------------------------------------

    "Chubut": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Chubut",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, Chubut dispone del 107, línea gratuita del sistema sanitario público. También podés acercarte a un hospital o centro de salud para recibir atención y orientación en salud mental.",
  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Sistema de Emergencias Coordinadas. Ante una situación de peligro inmediato, comunicate al 911."
    },
    {
      nombre: "🏥 Emergencias de salud",
      telefono: "107",
      descripcion:
        "Línea gratuita de emergencias médicas del sistema sanitario público de Chubut."
    },
    {
      nombre: "💚 Atención en salud mental",
      telefono: null,
      descripcion:
        "La red pública de salud de Chubut cuenta con dispositivos de salud mental en hospitales y centros de atención."
    },
    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito y disponible las 24 horas."
    }
  ],
  sitio: "https://www.ministeriodesalud.chubut.gov.ar/"
},

    // --------------------------------------------------------
    // CÓRDOBA
    // --------------------------------------------------------

    "Córdoba": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Córdoba",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para emergencias médicas en Córdoba Capital, está disponible el 107. La ciudad también cuenta con una línea gratuita de escucha y orientación en salud mental y adicciones, disponible las 24 horas.",
  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Ante una situación de peligro inmediato, comunicate al 911."
    },
    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas de Córdoba Capital."
    },
    {
      nombre: "💚 Escucha y orientación en salud mental",
      telefono: "0800-888-5555",
      descripcion:
        "Línea gratuita, confidencial y disponible las 24 horas para orientación y acompañamiento en salud mental y adicciones. Este servicio está destinado a residentes de Córdoba Capital."
    },
    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],
  sitio: "https://cordoba.gob.ar/programa/red-de-salud-mental-y-adicciones/"
},

    // --------------------------------------------------------
    // CORRIENTES
    // --------------------------------------------------------

   "Corrientes": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Corrientes",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia de salud, Corrientes dispone del 107. También podés acercarte a un hospital o centro de salud para recibir atención y orientación en salud mental.",
  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Servicio de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },
    {
      nombre: "🏥 Emergencias de salud",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas de la provincia."
    },
    {
      nombre: "💚 Atención en salud mental",
      telefono: null,
      descripcion:
        "El Hospital de Salud Mental San Francisco de Asís cuenta con servicio de guardia los siete días de la semana."
    },
    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],
  sitio: "https://gobernacion.corrientes.gob.ar/"
},

    // --------------------------------------------------------
    // ENTRE RÍOS
    // --------------------------------------------------------

   "Entre Ríos": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Entre Ríos",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para emergencias médicas, la provincia cuenta con el servicio 107. Ante una urgencia de salud mental, también podés comunicarte con la línea provincial 0800-777-2100, disponible las 24 horas.",
  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Servicio de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },
    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas de Entre Ríos. La red 107 funciona en distintas localidades de la provincia."
    },
    {
      nombre: "💚 Urgencias de salud mental",
      telefono: "0800-777-2100",
      descripcion:
        "Línea provincial gratuita de orientación y acompañamiento ante urgencias de salud mental. Funciona las 24 horas y es atendida por profesionales de salud."
    },
    {
      nombre: "💚 Atención en hospitales",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental también podés concurrir al hospital público de tu localidad. Los hospitales cuentan con guardias para brindar una primera atención."
    },
    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],
  sitio: "https://www.entrerios.gov.ar/"
},

    // --------------------------------------------------------
    // FORMOSA
    // --------------------------------------------------------

   "Formosa": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Formosa",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, Formosa cuenta con el Sistema Integral Provincial de Emergencias y Catástrofes (SIPEC), al que se accede llamando al 107. La atención del 107 funciona las 24 horas. Ante una crisis de salud mental, también podés acercarte a un hospital o centro de salud para recibir atención y orientación.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Sistema de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "🏥 Emergencias médicas — SIPEC",
      telefono: "107",
      descripcion:
        "Sistema Integral Provincial de Emergencias y Catástrofes. Atiende emergencias médicas las 24 horas."
    },

    {
      nombre: "💚 Atención en salud mental",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental podés acercarte a un hospital o centro de salud de la provincia para recibir atención y orientación."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://www.formosa.gob.ar/"
},

    // --------------------------------------------------------
    // JUJUY
    // --------------------------------------------------------

    "Jujuy": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Jujuy",
  informacion:
    "Ante una situación de peligro inmediato o una emergencia de salud mental, podés comunicarte al SAME 107. Jujuy cuenta además con una línea gratuita de Salud Mental que funciona las 24 horas, con profesionales que brindan orientación, atención y derivación.",

  recursos: [
    {
      nombre: "🚨 Emergencias en salud mental — SAME",
      telefono: "107",
      descripcion:
        "Servicio de emergencias en salud mental disponible las 24 horas. Puede realizar atención domiciliaria, evaluación y derivación cuando sea necesario."
    },

    {
      nombre: "💚 Salud Mental Escucha",
      telefono: "0800-888-4767",
      descripcion:
        "Línea gratuita de orientación, atención y acompañamiento en salud mental. Disponible las 24 horas, todos los días del año."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "La Red de Salud Mental cuenta con guardias hospitalarias y centros de salud en distintos puntos de la provincia."
    },

    {
      nombre: "💚 Salud Mental Digital",
      telefono: null,
      descripcion:
        "Servicio de atención y seguimiento profesional mediante el botón Salud Mental. Disponible de lunes a viernes de 8 a 20."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://salud.jujuy.gob.ar/"
},

    // --------------------------------------------------------
    // LA PAMPA
    // --------------------------------------------------------

    "La Pampa": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en La Pampa",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, podés solicitar asistencia a través del 107. Ante una crisis de salud mental, también podés acercarte a un hospital o centro de salud de la provincia para recibir atención y orientación.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Sistema de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de atención de emergencias médicas de la provincia."
    },

    {
      nombre: "💚 Atención en salud mental",
      telefono: null,
      descripcion:
        "La provincia cuenta con una red pública de atención en salud mental y con una Dirección de Salud Mental dependiente del Ministerio de Salud."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental podés concurrir a un hospital o centro de salud para recibir una primera evaluación y orientación."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://www.lapampa.gob.ar/"
},

    // --------------------------------------------------------
    // LA RIOJA
    // --------------------------------------------------------

   "La Rioja": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en La Rioja",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, La Rioja cuenta con el servicio 107. Ante una crisis de salud mental, también podés acercarte a un hospital o a un dispositivo de la Red de Atención de Salud Mental y Adicciones de la provincia.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Servicio de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas de la provincia."
    },

    {
      nombre: "💚 Red de Salud Mental y Adicciones",
      telefono: null,
      descripcion:
        "La provincia cuenta con dispositivos gratuitos e interdisciplinarios para la prevención, promoción, tratamiento y acompañamiento en salud mental."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental podés acercarte a un hospital o centro de salud para recibir evaluación, atención y orientación."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://larioja.gob.ar/salud/saludmentalyadicciones/"
},

    // --------------------------------------------------------
    // MENDOZA
    // --------------------------------------------------------

   "Mendoza": {
  emergencia: "911",
  salud: "911",
  titulo: "Ayuda en Mendoza",
  informacion:
    "Ante una situación de peligro inmediato o una crisis de salud mental, podés comunicarte al 911. Mendoza cuenta con un Servicio de Asistencia Telefónica en Crisis que brinda escucha y asistencia ante crisis psicológicas. También podés comunicarte al 148, opción 0, para orientación, contención y asistencia en salud mental.",

  recursos: [
    {
      nombre: "🚨 Emergencias y crisis",
      telefono: "911",
      descripcion:
        "Servicio de emergencias. El 911 cuenta con un Servicio de Asistencia Telefónica en Crisis para escuchar y asistir ante situaciones de crisis psicológica."
    },

    {
      nombre: "💚 Orientación y asistencia en Salud Mental",
      telefono: "148",
      descripcion:
        "Línea provincial de orientación, contención y asistencia en Salud Mental. Seleccioná la opción 0."
    },

    {
      nombre: "💚 Atención en guardias de Salud Mental",
      telefono: null,
      descripcion:
        "El Hospital Escuela de Salud Mental Dr. Carlos Pereyra cuenta con una guardia interdisciplinaria disponible las 24 horas, los 365 días del año, para crisis, urgencias y emergencias de salud mental."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental también podés acercarte a una guardia hospitalaria o centro de salud para recibir evaluación, atención y orientación."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://www.mendoza.gov.ar/salud/salud-mental-adicciones/"
},

    // --------------------------------------------------------
    // MISIONES
    // --------------------------------------------------------

    "Misiones": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Misiones",
  informacion:
    "Ante una situación de peligro inmediato o riesgo de autolesión, podés comunicarte al 911. Misiones cuenta además con canales específicos de orientación y contención en salud mental, incluyendo un WhatsApp disponible las 24 horas y una línea de atención en crisis.",

  recursos: [
    {
      nombre: "🚨 Emergencias y crisis",
      telefono: "911",
      descripcion:
        "Centro Integral de Operaciones 911. Ante una emergencia o riesgo inmediato, activa una respuesta que articula policías, profesionales de salud mental y el sistema sanitario."
    },

    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de Emergencias Médicas de la Unidad Central de Emergencias y Traslados. Funciona las 24 horas."
    },

    {
      nombre: "💚 WhatsApp de Salud Mental",
      telefono: "3764518800",
      descripcion:
        "Canal de orientación de Salud Mental. Disponible las 24 horas."
    },

    {
      nombre: "💚 Línea de Atención en Crisis del IPS",
      telefono: "3765481000",
      descripcion:
        "Línea de contención y asesoramiento ante situaciones vinculadas al suicidio y crisis de salud mental. Disponible las 24 horas, los 365 días del año y abierta a toda la comunidad."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental también podés acercarte al servicio de salud más cercano y manifestar la situación de riesgo para recibir atención y orientación."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://salud.misiones.gob.ar/"
},

    // --------------------------------------------------------
    // NEUQUÉN
    // --------------------------------------------------------

   "Neuquén": {
  emergencia: "107",
  salud: "107",
  titulo: "Ayuda en Neuquén",
  informacion:
    "Ante una emergencia de salud o una situación de riesgo inmediato, podés comunicarte al 107. Para orientación y acompañamiento en salud mental, Neuquén cuenta con la línea gratuita y confidencial Salud Mental Te Escucha.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas de la provincia. Ante una situación de emergencia, comunicate al 107."
    },

    {
      nombre: "💚 Salud Mental Te Escucha",
      telefono: "2995358191",
      descripcion:
        "Línea telefónica gratuita y confidencial de Salud Mental para orientación, escucha y acompañamiento ante situaciones de crisis y conductas autodestructivas."
    },

    {
      nombre: "💚 Atención en Salud Mental",
      telefono: null,
      descripcion:
        "La provincia cuenta con una red de dispositivos de Salud Mental comunitaria y equipos interdisciplinarios distribuidos en distintos puntos del territorio."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental también podés acercarte a un hospital, centro de salud o dispositivo comunitario para recibir atención y orientación."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://salud.neuquen.gob.ar/bienestar-integral-y-salud-ambiental/salud-mental/"
},

    // --------------------------------------------------------
    // RÍO NEGRO
    // --------------------------------------------------------

   "Río Negro": {
  emergencia: "911",
  salud: "911",
  titulo: "Ayuda en Río Negro",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Río Negro cuenta con servicios de Salud Mental Comunitaria en sus hospitales públicos y con líneas gratuitas de orientación y acompañamiento.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Central de emergencias. Ante una situación de riesgo inmediato, comunicate al 911."
    },

    {
      nombre: "💚 Prevención del suicidio",
      telefono: "0800-345-1435",
      descripcion:
        "Línea gratuita de asistencia y prevención del suicidio, disponible desde cualquier punto del país."
    },

    {
      nombre: "💚 Orientación en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Línea nacional gratuita de orientación y apoyo en situaciones de urgencia de salud mental."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Los hospitales públicos de Río Negro cuentan con servicios de Salud Mental Comunitaria. También podés acercarte al centro de salud u hospital más cercano para recibir orientación y atención."
    },

    {
      nombre: "💚 Atención ante una crisis",
      telefono: null,
      descripcion:
        "Ante una situación de riesgo de autolesión o suicidio, es importante no dejar sola a la persona y acompañarla a buscar ayuda profesional en el centro de salud más cercano."
    }
  ],

  sitio: "https://salud.rionegro.gov.ar/salud-mental-comunitaria-y-consumos-problematicos/suicidio"
},

    // --------------------------------------------------------
    // SALTA
    // --------------------------------------------------------

    "Salta": {
  emergencia: "911",
  salud: "911",
  titulo: "Ayuda en Salta",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Salta cuenta con el programa GUIAF, que brinda contención y orientación ante situaciones relacionadas con el suicidio o intentos de suicidio. También podés acudir a la guardia de cualquier hospital general.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Sistema de Emergencias 911. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "💚 GUIAF — prevención y acompañamiento",
      telefono: "03874213387",
      descripcion:
        "Grupo Interdisciplinario de Abordaje Familiar en Episodios de Suicidio o Intento de Suicidio. Brinda contención, orientación y herramientas ante situaciones de riesgo. Atención de lunes a viernes de 7 a 15."
    },

    {
      nombre: "🏥 Guardias hospitalarias",
      telefono: null,
      descripcion:
        "Ante una urgencia de salud mental podés dirigirte a la guardia de cualquier hospital general para recibir atención."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Orientación y apoyo en salud mental, gratuito, confidencial y disponible las 24 horas desde cualquier punto del país."
    }
  ],

  sitio: "https://www.salta.gob.ar/prensa/noticias/salta-tiene-un-servicio-asistencial-para-la-problematica-del-suicidio-103773"
},

    // --------------------------------------------------------
    // SAN JUAN
    // --------------------------------------------------------

    "San Juan": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en San Juan",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, podés solicitar asistencia al 107. Ante una crisis de salud mental, también podés comunicarte con la línea nacional de orientación y apoyo o acercarte al centro de salud u hospital más cercano.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Servicio de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas. Ante una emergencia de salud, solicitá asistencia."
    },

    {
      nombre: "💚 Orientación en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Línea nacional gratuita y confidencial de orientación y apoyo ante urgencias de salud mental. Disponible las 24 horas, todos los días del año."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental podés acercarte al hospital o centro de salud más cercano para recibir evaluación, atención y orientación."
    },

    {
      nombre: "💚 Acompañamiento ante una situación de riesgo",
      telefono: null,
      descripcion:
        "Si existe riesgo de autolesión o suicidio, no dejes sola a la persona y acompañala a buscar ayuda profesional."
    }
  ],

  sitio: "https://www.sanjuan.gob.ar/"
},

    // --------------------------------------------------------
    // SAN LUIS
    // --------------------------------------------------------

    "San Luis": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en San Luis",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, podés solicitar asistencia al 107. San Luis cuenta con dispositivos de atención en salud mental y desarrolla políticas específicas de prevención del suicidio.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Servicio de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas. Ante una emergencia de salud, solicitá asistencia."
    },

    {
      nombre: "💚 Orientación en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Línea nacional gratuita y confidencial de orientación y apoyo ante urgencias de salud mental. Disponible las 24 horas, todos los días del año."
    },

    {
      nombre: "💚 Atención en salud mental",
      telefono: null,
      descripcion:
        "San Luis cuenta con dispositivos y servicios de atención en salud mental. Ante una crisis, podés acercarte al establecimiento de salud más cercano para recibir evaluación y orientación."
    },

    {
      nombre: "💚 Prevención del suicidio",
      telefono: null,
      descripcion:
        "La provincia incorporó la prevención del suicidio como una prioridad de salud pública y desarrolla acciones de prevención, atención y acompañamiento."
    }
  ],

  sitio: "https://septiembrenaranja.sanluis.gov.ar/"
},

    // --------------------------------------------------------
    // SANTA CRUZ
    // --------------------------------------------------------

    "Santa Cruz": {

      emergencia:
        "911",

      salud:
        "107",

      titulo:
        "Ayuda en Santa Cruz",

      informacion:
        "Ante una emergencia inmediata podés comunicarte al 911. En Santa Cruz, el 107 corresponde a emergencias de salud. La provincia cuenta con servicios interdisciplinarios de salud mental en sus hospitales.",

      recursos: [

        {
          nombre: "Emergencias",
          telefono: "911",
          descripcion:
            "Sistema de atención de emergencias."
        },

        {
          nombre: "Emergencias de salud",
          telefono: "107",
          descripcion:
            "Servicio de emergencias médicas de Santa Cruz."
        },

        {
          nombre: "Urgencias de salud mental",
          telefono: "0800-999-0091",
          descripcion:
            "Orientación y apoyo nacional en salud mental, las 24 horas."
        },

        {
          nombre: "Atención en hospitales",
          telefono: null,
          descripcion:
            "Los hospitales de Santa Cruz cuentan con servicios interdisciplinarios de salud mental para emergencias y crisis agudas."
        }

      ],

      sitio:
        "https://noticias.santacruz.gob.ar/organismos/salud"

    },


    // --------------------------------------------------------
    // SANTA FE
    // --------------------------------------------------------

    "Santa Fe": {
  emergencia: "107",
  salud: "107",
  titulo: "Ayuda en Santa Fe",
  informacion:
    "Ante una situación crítica propia o de alguien cercano, podés llamar al 107 o acudir a la guardia general de un hospital. Santa Fe cuenta con una Red de Salud Mental Comunitaria y con un Programa Provincial de Prevención del Suicidio.",

  recursos: [
    {
      nombre: "🚨 Emergencias de salud",
      telefono: "107",
      descripcion:
        "Servicio de emergencias y traslados. Ante una situación crítica o de riesgo inmediato, comunicate al 107."
    },

    {
      nombre: "🏥 Guardias hospitalarias",
      telefono: null,
      descripcion:
        "Ante una situación crítica de salud mental podés acudir a la guardia general de un hospital para recibir atención."
    },

    {
      nombre: "💚 Salud Mental Comunitaria",
      telefono: null,
      descripcion:
        "La provincia cuenta con una red de atención en salud mental que incluye centros de salud, hospitales generales, SAMCo y otros dispositivos comunitarios."
    },

    {
      nombre: "💚 Prevención del suicidio",
      telefono: null,
      descripcion:
        "Santa Fe cuenta con un Programa Provincial de Prevención del Suicidio orientado a fortalecer la prevención, la asistencia y las redes de cuidado en todo el territorio provincial."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "0800-999-0091",
      descripcion:
        "Línea nacional gratuita y confidencial de orientación y apoyo ante urgencias de salud mental. Disponible las 24 horas, todos los días del año."
    }
  ],

  sitio: "https://www.santafe.gov.ar/index.php/web/content/view/full/258382"
},

    // --------------------------------------------------------
    // SANTIAGO DEL ESTERO
    // --------------------------------------------------------

    "Santiago del Estero": {
  emergencia: "107",
  salud: "107",
  titulo: "Ayuda en Santiago del Estero",
  informacion:
    "Ante una emergencia que requiera atención médica inmediata, podés comunicarte al 107. Santiago del Estero cuenta con servicios específicos de Salud Mental y guardias de Salud Mental en hospitales públicos.",

  recursos: [
    {
      nombre: "🚨 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de Emergencias y Asistencia Sanitaria de Santiago del Estero. Ante una emergencia médica, comunicate al 107."
    },

    {
      nombre: "🚨 Emergencias médicas — línea alternativa",
      telefono: "08008886737",
      descripcion:
        "Línea provincial de emergencias médicas informada por el Ministerio de Salud."
    },

    {
      nombre: "💚 Área de Salud Mental",
      telefono: "3855730479",
      descripcion:
        "Contacto del Área de Salud Mental del Ministerio de Salud de Santiago del Estero."
    },

    {
      nombre: "💚 Guardia de Salud Mental — Hospital Regional",
      telefono: "3854243131",
      descripcion:
        "Guardia de Salud Mental del Hospital Regional de Santiago del Estero."
    },

    {
      nombre: "💚 Guardia de Salud Mental — Hospital Diego Alcorta",
      telefono: "3854315040",
      descripcion:
        "Guardia de Salud Mental del Hospital Diego Alcorta."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "08009990091",
      descripcion:
        "Línea nacional gratuita y confidencial de orientación y apoyo ante urgencias de salud mental. Disponible las 24 horas, todos los días del año."
    }
  ],

  sitio: "https://msaludsgo.gov.ar/web/servicio-de-salud-mental/"
},

    // --------------------------------------------------------
    // TIERRA DEL FUEGO
    // --------------------------------------------------------

   "Tierra del Fuego": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Tierra del Fuego",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia médica, podés solicitar asistencia al 107. La provincia cuenta con dispositivos de Salud Mental y atención en hospitales y centros de salud.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Línea provincial de emergencias generales. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de urgencias médicas y ambulancia. Ante una emergencia de salud, comunicate al 107."
    },

    {
      nombre: "💚 Salud Mental — Río Grande",
      telefono: "02964422285",
      descripcion:
        "Centro de Abordaje Integral en Salud Mental. Brinda asistencia, orientación y acompañamiento. Atención de lunes a viernes de 8 a 17."
    },

    {
      nombre: "💚 Atención en Salud Mental",
      telefono: null,
      descripcion:
        "La provincia cuenta con dispositivos de Salud Mental Comunitaria y atención especializada en Ushuaia, Río Grande y Tolhuin."
    },

    {
      nombre: "🏥 Hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental podés acercarte a un hospital, CAPS o centro asistencial cercano para recibir evaluación, atención y orientación."
    },

    {
      nombre: "💚 Orientación nacional en salud mental",
      telefono: "08009990091",
      descripcion:
        "Línea nacional gratuita y confidencial de orientación y apoyo ante urgencias de salud mental. Disponible las 24 horas, todos los días del año."
    }
  ],

  sitio: "https://salud.tierradelfuego.gob.ar/salud-mental/"
},

    // --------------------------------------------------------
    // TUCUMÁN
    // --------------------------------------------------------

    "Tucumán": {
  emergencia: "911",
  salud: "107",
  titulo: "Ayuda en Tucumán",
  informacion:
    "Ante una situación de peligro inmediato, podés comunicarte al 911. Para una emergencia de salud, podés solicitar asistencia médica. Ante una crisis de salud mental, también podés comunicarte con la línea nacional de orientación y apoyo o acercarte al centro de salud u hospital más cercano.",

  recursos: [
    {
      nombre: "🚨 Emergencias",
      telefono: "911",
      descripcion:
        "Servicio de emergencias. Ante una situación de peligro inmediato, comunicate al 911."
    },

    {
      nombre: "🏥 Emergencias médicas",
      telefono: "107",
      descripcion:
        "Servicio de emergencias médicas. Ante una emergencia de salud, solicitá asistencia."
    },

    {
      nombre: "💚 Orientación en salud mental",
      telefono: "08009990091",
      descripcion:
        "Línea nacional gratuita y confidencial de orientación y apoyo ante urgencias de salud mental. Disponible las 24 horas, todos los días del año."
    },

    {
      nombre: "💚 Atención en hospitales y centros de salud",
      telefono: null,
      descripcion:
        "Ante una crisis de salud mental podés acercarte al hospital o centro de salud más cercano para recibir evaluación, atención y orientación."
    },

    {
      nombre: "💚 Línea de atención de Tucumán",
      telefono: "08005558478",
      descripcion:
        "Línea de atención informada para Tucumán. Antes de publicar el sitio, conviene verificar que el número y sus horarios continúen vigentes."
    },

    {
      nombre: "💚 WhatsApp de atención",
      telefono: "3813899025",
      descripcion:
        "Contacto de WhatsApp informado para Tucumán. Antes de publicar el sitio, conviene verificar que continúe vigente."
    }
  ],

  sitio: "https://www.tucuman.gob.ar/"
},
};

 // =========================
// SELECTOR DE PROVINCIAS
// =========================

const provinceSelect = document.getElementById("province");
const provinceButton = document.getElementById("search-province");

if (provinceSelect && provinceButton) {

  provinceButton.addEventListener("click", function () {

    const province = provinceSelect.value;

    if (province === "") {
      alert("Por favor, seleccioná una provincia.");
      return;
    }

    let result = document.getElementById("province-result");

    if (!result) {
      result = document.createElement("div");
      result.id = "province-result";
      result.className = "province-result";

      provinceButton.parentElement.appendChild(result);
    }

   const datos = recursosPorProvincia[province];

if (datos) {

  let recursosHTML = "";

  datos.recursos.forEach((recurso) => {

    const telefonoHTML = recurso.telefono
      ? `<a href="tel:${recurso.telefono}">${recurso.telefono}</a>`
      : "";

    recursosHTML += `
      <div class="province-resource">

        <strong>${recurso.nombre}</strong>

        <p>
          ${telefonoHTML}
          ${telefonoHTML ? " — " : ""}
          ${recurso.descripcion}
        </p>

      </div>
    `;
  });

  result.innerHTML = `
    <h4>${datos.titulo}</h4>

    <p>
      ${datos.informacion}
    </p>

    ${recursosHTML}

    <p>
      <a
        href="${datos.sitio}"
        target="_blank"
        rel="noopener noreferrer"
      >
        🌐 Consultar sitio oficial
      </a>
    </p>
  `;

  } else {

    result.innerHTML = `
      <h4>Ayuda en ${province}</h4>

      <p>
        Estamos preparando información oficial
        específica para esta provincia.
      </p>
    `;

  }

  result.classList.add("show");

  });

}
  

  // ==========================================================
  // 6. DESPLAZAMIENTO SUAVE
  // ==========================================================

  const internalLinks =
    document.querySelectorAll('a[href^="#"]');


  internalLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");


      if (targetId === "#") {
        return;
      }


      const target =
        document.querySelector(targetId);


      if (target) {

        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });


        // Cerrar menú de celular

        if (
          navLinks &&
          navLinks.classList.contains("active")
        ) {

          navLinks.classList.remove("active");

          if (menuToggle) {

            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );

            menuToggle.textContent = "☰";

          }

        }

      }

    });

  });


  // ==========================================================
  // 7. ANIMACIONES AL BAJAR
  // ==========================================================

  const animatedElements =
    document.querySelectorAll(
      ".card, .myth-card, .support-step, .conversation-box"
    );


  animatedElements.forEach((element) => {

    element.classList.add("scroll-hidden");

  });


  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.15
        }
      );


    animatedElements.forEach((element) => {

      observer.observe(element);

    });

  } else {

    animatedElements.forEach((element) => {

      element.classList.add("visible");

    });

  }


  // ==========================================================
  // 8. BOTONES DE AYUDA
  // ==========================================================

  const helpButtons =
    document.querySelectorAll(
      'a[href="#ayuda"], a[href="#vos"]'
    );


  helpButtons.forEach((button) => {

    button.addEventListener("click", () => {

      console.log(
        "La persona está buscando información de ayuda."
      );

    });

  });


  // ==========================================================
  // 9. AÑO AUTOMÁTICO DEL FOOTER
  // ==========================================================

  const yearElement =
    document.querySelector("[data-year]");


  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }


  // ==========================================================
  // 10. ESC PARA CERRAR EL MENÚ
  // ==========================================================

  document.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Escape") {

        if (
          navLinks &&
          navLinks.classList.contains("active")
        ) {

          navLinks.classList.remove(
            "active"
          );


          if (menuToggle) {

            menuToggle.setAttribute(
              "aria-expanded",
              "false"
            );

            menuToggle.textContent = "☰";

          }

        }

      }

    }
  );


  // ==========================================================
  // 11. MENSAJE DE CONTROL
  // ==========================================================

  console.log(
    "Entre Nosotros: sitio cargado correctamente."
  );

  console.log(
    "Recursos provinciales cargados correctamente."
  );

});