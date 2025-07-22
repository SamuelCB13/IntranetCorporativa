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
