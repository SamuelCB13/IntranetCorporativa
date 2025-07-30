import { HandPlatterIcon, HeadphonesIcon, MailPlusIcon, MonitorSmartphoneIcon } from "lucide-react";

// Interfaz para los tips tecnológicos
export interface TipsTecnologicos {
    id: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    imageAlt: string;
    categoriaAbrev: string;
}

// Array de datos para los tips
export const tipsTecnologicos: TipsTecnologicos[] = [
    {
        id: "proteccion-datos",
        titulo: "¿Cómo se debería manejar la protección de datos?",
        descripcion: "El manejo adecuado de la protección de datos es crucial para garantizar la privacidad y seguridad de la información. Descubre las mejores prácticas para proteger tus datos personales.",
        imagen: "/greta/proteccion-datos.jpg",
        imageAlt: "Protección de Datos",
        categoriaAbrev: "PD",
    },
    {
        id: "correos-masivos",
        titulo: "¿Cómo se deberían enviar los correos masivos?",
        descripcion: "El envío de correos masivos es una herramienta poderosa para la comunicación empresarial. Descubre las mejores prácticas para enviar correos masivos de manera profesional.",
        imagen: "/greta/correos-masivos.jpg",
        imageAlt: "Envío de Correos Masivos",
        categoriaAbrev: "CM",
    },
    {
        id: "uso-contrasenas",
        titulo: "¿Cómo se deberían usar las contraseñas?",
        descripcion: "El uso adecuado de contraseñas es fundamental para la seguridad digital. Descubre las mejores prácticas para crear y gestionar contraseñas seguras y proteger tu información personal.",
        imagen: "/greta/uso-contrasenas.jpg",
        imageAlt: "Uso de Contraseñas",
        categoriaAbrev: "UC",
    },
    {
        id: "uso-usb",
        titulo: "Prohibido el uso de dispositivos USB",
        descripcion: "El uso de dispositivos USB puede representar un riesgo para la seguridad de la información. Descubre las recomendaciones para evitar el uso no autorizado de dispositivos USB.",
        imagen: "/greta/uso-usb.jpg",
        imageAlt: "Uso de Dispositivos USB",
        categoriaAbrev: "DU",
    },
    {
        id: "incidente-seguridad",
        titulo: "¿Sabes lo que es un incidente de seguridad?",
        descripcion: "Un incidente de seguridad es cualquier evento que compromete la confidencialidad, integridad o disponibilidad de la información. Descubre cómo identificar y manejar incidentes de seguridad.",
        imagen: "/greta/incidente-seguridad.jpg",
        imageAlt: "Incidente de Seguridad",
        categoriaAbrev: "IS",
    },
    {
        id: "sgsi",
        titulo: "¿Sabes lo que es un SGSI?",
        descripcion: "Un Sistema de Gestión de Seguridad de la Información (SGSI) es un marco que ayuda a las organizaciones a gestionar y proteger su información. Descubre cómo implementar un SGSI efectivo.",
        imagen: "/greta/sgsi.jpg",
        imageAlt: "SGSI",
        categoriaAbrev: "SG",
    }
];

// Interfaz para las acciones
export interface Acciones {
    id: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    imageAlt: string;
    href: string;
}

// Array de datos para las acciones
export const acciones: Acciones[] = [
    {
        id: "tiempos-espera",
        titulo: "Tiempos de espera",
        descripcion: "En esta sección encontrarás información sobre los tiempos de espera para diferentes trámites y solicitudes.",
        imagen: "/greta/tiempos-espera.webp",
        imageAlt: "Tiempos de Espera",
        href: "#",
    },
    {
        id: "horarios-atencion",
        titulo: "Horarios de atención",
        descripcion: "Consulta los horarios de atención para realizar tus trámites y solicitudes de manera eficiente.",
        imagen: "/greta/horarios-atencion.webp",
        imageAlt: "Horarios de Atención",
        href: "#",
    },
    {
        id: "registra-solicitud",
        titulo: "Registra tu solicitud",
        descripcion: "Registra tu solicitud o caso que tengas y lo resolveremos lo antes posible.",
        imagen: "/greta/greta.jpg",
        imageAlt: "Registro de Solicitud",
        href: "#",
    },
    {
        id: "solicitud-cambios",
        titulo: "Solicitud de cambios",
        descripcion: "Conoce el formato para solicitar cambios en lo que necesites y envíalo a nuestro equipo.",
        imagen: "/greta/solicitud-cambios.webp",
        imageAlt: "Solicitud de Cambios",
        href: "https://bpogs.com/intranet/wp-content/uploads/2022/06/Formato-solicitud-de-cambios.xlsx",
    },
];

// Interface para tiempos de respuesta
export interface TiempoRespuesta {
    id: string;
    tipo: 'incidente' | 'requerimiento';
    prioridad: 'alta' | 'media' | 'baja';
    tiempo: string;
    descripcion?: string;
}

// Interface para horarios de atención
export interface HorarioAtencion {
    id: string;
    medioIngreso: string;
    horario: string;
    dias: string;
    observaciones: string;
}

// Interface para definiciones
export interface Definicion {
    termino: string;
    descripcion: string;
}

export interface TiemposEsperaPopupProps {
    isOpen: boolean;
    onClose: () => void;
    tiemposRespuesta?: TiempoRespuesta[];
    horariosAtencion?: HorarioAtencion[];
    definiciones?: Definicion[];
}

// Array de datos para los tiempos de respuesta
export const tiempoRespuesta: TiempoRespuesta[] = [
    {
        id: "inc-alta",
        tipo: "incidente",
        prioridad: "alta",
        tiempo: "2 horas"
    },
    {
        id: "inc-media",
        tipo: "incidente",
        prioridad: "media",
        tiempo: "4 horas"
    },
    {
        id: "inc-baja",
        tipo: "incidente",
        prioridad: "baja",
        tiempo: "8 horas"
    },
    {
        id: "req-baja",
        tipo: "requerimiento",
        prioridad: "baja",
        tiempo: "12 horas"
    }
];

// Array de datos para los horarios
export const horarioAtencion: HorarioAtencion[] = [
    {
        id: "telefonico",
        medioIngreso: "Telefónico",
        horario: "6:00 am a 9:00 pm",
        dias: "Lunes a sábado",
        observaciones: "Domingos y horarios después de las 9:00 pm se atienden por disponibilidad telefónica."
    },
    {
        id: "self-service",
        medioIngreso: "Self Service",
        horario: "6:00 am a 9:00 pm",
        dias: "Lunes a sábado",
        observaciones: "Domingos y horarios después de las 9:00 pm se atienden por disponibilidad telefónica."
    },
    {
        id: "whatsapp",
        medioIngreso: "WhatsApp",
        horario: "6:00 am a 9:00 pm",
        dias: "Lunes a sábado",
        observaciones: "Domingos y horarios después de las 9:00 pm se atienden por disponibilidad telefónica."
    }
];

// Array de datos para las definiciones
export const definicion: Definicion[] = [
    {
        termino: "Incidentes",
        descripcion: "Es cualquier evento que interrumpa el funcionamiento normal de un servicio afectando ya sea a uno, a un grupo o a todos los usuarios de un servicio."
    },
    {
        termino: "Requerimientos",
        descripcion: "Es algo nuevo, como información o acceso; puede tomarse como una petición de un usuario solicitando información, asesoramiento, un cambio."
    }
];

// Interface para horarios de atención
export interface InformacionHorarios {
    id: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icono: React.ComponentType<any>;
    contacto: string;
    disponibilidad: string;
};

export interface HorarioAtencionPopupProps {
    isOpen: boolean;
    onClose: () => void;
    infoHorario?: InformacionHorarios[];
    definiciones?: Definicion[];
}

// Array de datos para los horarios
export const informacionHorarios: InformacionHorarios[] = [
    {
        id: "telefono",
        icono: HeadphonesIcon,
        contacto: "448 92 76 ext | 8000",
        disponibilidad: "Lunes a sábado de 6:00 am a 9:00 pm | Domingos todo el día | Nocturnos 9:00 pm a 5:30 am (Por disponibilidad telefónica)",
    },
    {
        id: "whatsapp",
        icono: MonitorSmartphoneIcon,
        contacto: "+57 314 770 9706",
        disponibilidad: "Lunes a sábado de 6:00 am a 9:00 pm | Domingos todo el día | Nocturnos 9:00 pm a 5:30 am (Por disponibilidad telefónica)"
    },
    {
        id: "correo",
        icono: MailPlusIcon,
        contacto: "scarvajal@esece.dev",
        disponibilidad: "Los incidentes y requerimientos recibidos del servicio a través de este medio serán atendidos dentro del horario de atención hábil de la mesa de ayuda.",
    },
    {
        id: "glpi",
        icono: HandPlatterIcon,
        contacto: "Auto servicios - Glpi",
        disponibilidad: "Los incidentes y requerimientos recibidos del servicio a través de este medio serán atendidos dentro del horario de atención hábil de la mesa de ayuda."
    },
];
