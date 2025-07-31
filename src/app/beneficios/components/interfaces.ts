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
