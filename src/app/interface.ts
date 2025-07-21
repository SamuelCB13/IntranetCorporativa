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
        imagen: "/emociones.webp",
        imageAlt: "Emocional Image",
        categoria: "Desarrollo Personal",
        categoriaAbrev: "ME",
        href: "/capsulas/manejo-emocional"
    },
    {
        id: "separacion-residuos",
        titulo: "Separación de Residuos",
        descripcion: "La separación de residuos es esencial para el cuidado del medio ambiente. Aprende cómo clasificar tus desechos correctamente y contribuir a un planeta más limpio.",
        imagen: "/residuos.webp",
        imageAlt: "Residuos Image",
        categoria: "Residuos",
        categoriaAbrev: "SR",
        href: "/capsulas/separacion-residuos"
    },
    {
        id: "evaluacion-desempeno",
        titulo: "Evaluación de desempeño",
        descripcion: "Estamos en época de evaluación de desempeño. Conoce la importancia de este proceso y cómo prepararte para recibir retroalimentación constructiva.",
        imagen: "/desempeno.webp",
        imageAlt: "Evaluation Image",
        categoria: "Evaluación",
        categoriaAbrev: "ED",
        href: "/capsulas/evaluacion-desempeno"
    },
    {
        id: "directorio-areas",
        titulo: "Directorio de áreas",
        descripcion: "Directorio de áreas: Conoce las diferentes áreas de la empresa y cómo cada una contribuye al éxito organizacional. Aprende sobre sus funciones y cómo puedes colaborar con ellas.",
        imagen: "/areas.webp",
        imageAlt: "Directorio Image",
        categoria: "Directorio de Áreas",
        categoriaAbrev: "DA",
        href: "/capsulas/directorio-areas"
    },
    {
        id: "regimen-transicion",
        titulo: "Régimen de transición",
        descripcion: "Proceso clave para la adaptación organizacional. Descubre cómo este régimen puede facilitar la transición hacia nuevos modelos de trabajo y mejorar la eficiencia.",
        imagen: "/regimen.webp",
        imageAlt: "Regimen Image",
        categoria: "Régimen de Transición",
        categoriaAbrev: "RT",
        href: "/capsulas/regimen-transicion"
    },
    {
        id: "inspiracion-crecimiento",
        titulo: "Inspiración y crecimiento",
        descripcion: "Encuentra inspiración para tu crecimiento profesional. Descubre historias motivadoras y consejos prácdesarrolloos para alcanzar tus metas y superar desafíos en este primer episodio.",
        imagen: "/inspiracion.webp",
        imageAlt: "Inspiration Image",
        categoria: "Inspiración",
        categoriaAbrev: "IC",
        href: "/capsulas/inspiracion-crecimiento"
    }
];

export interface QuienesSomosItem {
    id: number;
    titulo: string;
    descripcion: string;
    imagen: string;
    imageAlt: string;
    posicion: 'izquierda' | 'derecha'; // Para alternar la posición de la imagen
}

// Datos para la sección "¿Quiénes somos?"
export const quienesSomosData: QuienesSomosItem[] = [
    {
        id: 1,
        titulo: "Te contamos quiénes somos",
        descripcion: "Somos una empresa colombiana, conformada por personas como tú, talentosas, divertidas, innovadoras, gente comprometida, que disfruta los retos y la generación de valor a través de experiencias memorables.",
        imagen: "/background.webp",
        imageAlt: "Quiénes somos - Imagen 1",
        posicion: "derecha"
    },
    {
        id: 2,
        titulo: "Conoce nuestra cultura global",
        descripcion: "Nuestro propósito es Crear Lazos a través de la confianza, la calidad de los procesos, el crecimiento del equipo, el desarrollo de las habilidades y el impacto positivo en cada contacto.",
        imagen: "/somos.webp",
        imageAlt: "Cultura global - Imagen 3",
        posicion: "izquierda"
    },
    {
        id: 3,
        titulo: "Conoca más sobre nuestra misión",
        descripcion: "Transformar la experiencia de nuestros clientes y aliados, entendiendo sus oportunidades y dinamizando sus procesos.",
        imagen: "/talento.webp",
        imageAlt: "Nuestra misión - Imagen 2",
        posicion: "derecha"
    },
    {
        id: 4,
        titulo: "Conoce más sobre nuestra visión",
        descripcion: "Trabajar de la mano con colaboradores y clientes para maximizar su potencial, generando un impacto positivo en la sociedad.",
        imagen: "/global.webp",
        imageAlt: "Nuestra visión - Imagen 3",
        posicion: "izquierda"
    }
];

export interface ValorItem {
    id: number;
    titulo: string;
    icono: string; // Ruta del icono/imagen
    iconoAlt: string;
}

// Datos para la sección de valores
export const valoresData: ValorItem[] = [
    {
        id: 1,
        titulo: "Respeto",
        icono: "/valores/respeto.webp",
        iconoAlt: "Icono de Respeto"
    },
    {
        id: 2,
        titulo: "Honestidad",
        icono: "/valores/honestidad.webp",
        iconoAlt: "Icono de Honestidad"
    },
    {
        id: 3,
        titulo: "Confianza",
        icono: "/valores/confianza.webp",
        iconoAlt: "Icono de Confianza"
    },
    {
        id: 4,
        titulo: "Compromiso",
        icono: "/valores/compromiso.webp",
        iconoAlt: "Icono de Compromiso"
    },
    {
        id: 5,
        titulo: "Coherencia",
        icono: "/valores/coherencia.webp",
        iconoAlt: "Icono de Coherencia"
    },
    {
        id: 6,
        titulo: "Responsabilidad",
        icono: "/valores/responsabilidad.webp",
        iconoAlt: "Icono de Responsabilidad"
    },
    {
        id: 7,
        titulo: "Inclusión",
        icono: "/valores/inclusion.webp",
        iconoAlt: "Icono de Inclusión"
    },
    {
        id: 8,
        titulo: "Dinamismo",
        icono: "/valores/dinamismo.webp",
        iconoAlt: "Icono de Dinamismo"
    }
];
