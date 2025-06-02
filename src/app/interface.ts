// Interfaz para las cápsulas informativas
export interface CapsulaInformativa {
    id: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    imageAlt: string;
    categoria: string;
    categoriaAbrev: string;
    href: string;
}

// Array de datos para las cápsulas
export const capsulasInformativas: CapsulaInformativa[] = [
    {
        id: "manejo-emocional",
        titulo: "Manejo emocional",
        descripcion: "El arte de manejar las emociones: Clave para el bienestar personal y profesional. Aprende a gestionar tus emociones para mejorar tu vida diaria y tus relaciones laborales.",
        imagen: "/background.webp",
        imageAlt: "Emocional Image",
        categoria: "Desarrollo Personal",
        categoriaAbrev: "ME",
        href: "/capsulas/manejo-emocional"
    },
    {
        id: "horoscopo",
        titulo: "Horóscopo 26/05 - 01/06",
        descripcion: "Conoce las predicciones astrológicas para la semana actual. Descubre cómo los astros pueden influir en tu vida personal, profesional y emocional.",
        imagen: "/background.webp",
        imageAlt: "Comunicación Image",
        categoria: "Comunicación",
        categoriaAbrev: "CE",
        href: "/capsulas/horoscopo"
    },
    {
        id: "evaluacion-desempeno",
        titulo: "Evaluación de desempeño",
        descripcion: "Estamos en época de evaluación de desempeño. Conoce la importancia de este proceso y cómo prepararte para recibir retroalimentación constructiva.",
        imagen: "/background.webp",
        imageAlt: "Evaluation Image",
        categoria: "Evaluación",
        categoriaAbrev: "ED",
        href: "/capsulas/evaluacion-desempeno"
    },
    {
        id: "productividad",
        titulo: "Productividad personal",
        descripcion: "Optimiza tu tiempo y aumenta tu eficiencia diaria. Conoce metodologías probadas para gestionar tareas, establecer prioridades y alcanzar tus objetivos.",
        imagen: "/background.webp",
        imageAlt: "Productividad Image",
        categoria: "Productividad",
        categoriaAbrev: "PP",
        href: "/capsulas/productividad"
    },
    {
        id: "networking",
        titulo: "Networking profesional",
        descripcion: "Construye una red de contactos sólida y estratégica. Aprende a crear relaciones profesionales duraderas que impulsen tu crecimiento laboral.",
        imagen: "/background.webp",
        imageAlt: "Networking Image",
        categoria: "Desarrollo Profesional",
        categoriaAbrev: "NP",
        href: "/capsulas/networking"
    },
    {
        id: "innovacion",
        titulo: "Pensamiento innovador",
        descripcion: "Desarrolla tu creatividad y capacidad de innovación. Conoce técnicas para generar ideas disruptivas y resolver problemas de manera creativa.",
        imagen: "/background.webp",
        imageAlt: "Innovación Image",
        categoria: "Innovación",
        categoriaAbrev: "PI",
        href: "/capsulas/innovacion"
    }
];
