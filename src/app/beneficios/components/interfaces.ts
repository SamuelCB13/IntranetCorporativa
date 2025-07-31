import { CodeXmlIcon, InfinityIcon, MonitorCheckIcon, MonitorCogIcon, MonitorSmartphoneIcon, SmartphoneIcon } from "lucide-react";

// Interfaz para las últimas vacantes
export interface UltimasVacantes {
    id: string;
    imagen: string;
    imageAlt: string;
    cargo: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icono: React.ComponentType<any>;
    funciones: string;
    ubicacion: string;
    contrato: string;
    salario: string;
    urgencia?: string;
}

// Array de datos para las últimas vacantes
export const ultimasVacantes: UltimasVacantes[] = [
    {
        id: "desarrollador-frontend",
        imagen: "/beneficios/desarrollador-frontend.webp",
        imageAlt: "Desarrollador Frontend",
        cargo: "Desarrollador Frontend",
        icono: MonitorCheckIcon,
        funciones: "Desarrollar y mantener aplicaciones web y móviles, asegurando la calidad del código y la experiencia del usuario.",
        ubicacion: "Medellín, Colombia",
        contrato: "Término indefinido",
        salario: "$4'500.000 COP",
    },
    {
        id: "desarrollador-fullstack",
        imagen: "/beneficios/desarrollador-fullstack.webp",
        imageAlt: "Desarrollador Full Stack",
        cargo: "Desarrollador Full Stack",
        icono: CodeXmlIcon,
        funciones: "Desarrollar y mantener aplicaciones web y móviles, asegurando la calidad del código y la experiencia del usuario.",
        ubicacion: "Miami, Estados Unidos",
        contrato: "Término indefinido",
        salario: "$1.500.00 USD",
        urgencia: "Se necesita urgente",
    },
    {
        id: "desarrollador-backend",
        imagen: "/beneficios/desarrollador-backend.webp",
        imageAlt: "Desarrollador Backend",
        cargo: "Desarrollador Backend",
        icono: MonitorCogIcon,
        funciones: "Desarrollar y mantener aplicaciones web y móviles, asegurando la calidad del código y la experiencia del usuario.",
        ubicacion: "Cali, Colombia",
        contrato: "Término indefinido",
        salario: "$4'500.000 COP",
    },
    {
        id: "desarrollador-movil",
        imagen: "/beneficios/desarrollador-movil.webp",
        imageAlt: "Desarrollador Móvil",
        cargo: "Desarrollador Móvil",
        icono: SmartphoneIcon,
        funciones: "Desarrollar y mantener aplicaciones web y móviles, asegurando la calidad del código y la experiencia del usuario.",
        ubicacion: "Bogotá, Colombia",
        contrato: "Término indefinido",
        salario: "$4'500.000 COP",
        urgencia: "Se necesita urgente",
    },
    {
        id: "desarrollador-ux-ui",
        imagen: "/beneficios/desarrollador-ux-ui.webp",
        imageAlt: "Desarrollador UX/UI",
        cargo: "Desarrollador UX/UI",
        icono: MonitorSmartphoneIcon,
        funciones: "Desarrollar y mantener aplicaciones web y móviles, asegurando la calidad del código y la experiencia del usuario.",
        ubicacion: "Barranquilla, Colombia",
        contrato: "Término indefinido",
        salario: "$4'000.000 COP",
    },
    {
        id: "desarrollador-devops",
        imagen: "/beneficios/desarrollador-devops.webp",
        imageAlt: "Desarrollador DevOps",
        cargo: "Desarrollador DevOps",
        icono: InfinityIcon,
        funciones: "Desarrollar y mantener aplicaciones web y móviles, asegurando la calidad del código y la experiencia del usuario.",
        ubicacion: "Cartagena, Colombia",
        contrato: "Término indefinido",
        salario: "$4'000.000 COP",
        urgencia: "Se necesita urgente",
    }
];

export interface Beneficios {
    id: number;
    titulo: string;
    descripcion: string;
    detalle: string;
    imagen: string;
    imageAlt: string;
    posicion: 'izquierda' | 'derecha';
}

// Datos para la sección beneficios
export const beneficios: Beneficios[] = [
    {
        id: 1,
        titulo: "Tiquetera de Beneficios",
        descripcion: "En Esece contamos con tiquetera de beneficios que lleva rumbo a la Felicidad, armonizando la vida personal con la vida laboral. ¿Cuáles son los tiquetes que podrás disfrutar?",
        detalle: "Un día libre por cumpleaños | Medio día por graduación académica | Un día libre por matrimonio | Reconocimiento por cumplir 5 años en la compañía (Quinquenios).",
        imagen: "/beneficios/tiquetera.webp",
        imageAlt: "Tiquetera de Beneficios",
        posicion: "derecha",
    },
    {
        id: 2,
        titulo: "Convenios",
        descripcion: "Contamos con convenios con diferentes empresas para ofrecerte descuentos exclusivos en productos y servicios. Pensamos en tu bienestar y en el de tu familia, por eso tenemos estos convenios.",
        detalle: "SmartFit. Accediendo a los planes del gimnasio, tendrás acceso ilimitado a las sedes a nivel nacional e internacional, ingreso a las clases grupales y uso de las instalaciones | Caja de Compensación. ¿Sabes que nos ofrece la Caja de compensación? Te invitamos a conocer todos los servicios que tiene Comfama.",
        imagen: "/beneficios/convenio.webp",
        imageAlt: "Convenios",
        posicion: "izquierda",
    },
    {
        id: 3,
        titulo: "Aniversarios",
        descripcion: "Celebramos cada año de las campañas, junto con nuestros aliados. Estas fechas especiales son motivo de alegría en Esece!",
        detalle: "Este mes celebramos la creación de nuestros lazos y el inicio de una nueva etapa en Esece. ¡Feliz aniversario! | Celebramos el aniversario de Vercel y Nextjs con sorpresas y momentos inolvidables.",
        imagen: "/beneficios/aniversario.webp",
        imageAlt: "Aniversarios",
        posicion: "derecha",
    },
    {
        id: 4,
        titulo: "Calendario de actividades",
        descripcion: "Cada mes tenemos fechas programadas, para salir de la cotidianidad, generar espacio de esparcimiento e integración disfrutar de nuestra diversidad y cultura.",
        detalle: "Cada mes tenemos fechas programadas, para salir de la cotidianidad, generar espacio de esparcimiento e integración disfrutar de nuestra diversidad y cultura.",
        imagen: "/beneficios/calendario.webp",
        imageAlt: "Calendario de actividades",
        posicion: "izquierda",
    },
    {
        id: 5,
        titulo: "Crecimiento profesional",
        descripcion: "Celebramos tu crecimiento profesional, por eso queremos recordarte algunas de nuestras políticas internas, tus beneficios y el procedimiento para realizar solicitudes.",
        detalle: "¡Ahora sí! Bienvenidx a Esece, abre el documento para conocer tus beneficios, deberes y otra información que te puede interesar | Celebramos tu crecimiento profesional, por eso queremos recordarte algunas de nuestras políticas internas, tus beneficios y el procedimiento para realizar solicitudes.",
        imagen: "/beneficios/escalamiento.webp",
        imageAlt: "Crecimiento profesional",
        posicion: "derecha",
    }
];
