// Interfaz para los usuarios
export interface Usuarios {
    id: string;
    nombre: string;
    area: string;
    cargo: string;
    correo: string;
    telefono: string;
    ubicacion: string;
    website?: string;
    imagen: string;
    imageAlt: string;
}

// Array de datos para los usuarios
export const usuarios: Usuarios[] = [
    {
        id: "samuel-carvajal",
        nombre: "Samuel Carvajal Bedoya",
        cargo: "Desarrollador Full Stack",
        area: "Desarrollo",
        correo: "scarvajal@esece.com",
        telefono: "+57 314 7709706",
        ubicacion: "Medellín, Colombia",
        website: "https://samuel-c.vercel.app",
        imagen: "/usuarios/samuelc.jpg",
        imageAlt: "SCB",
    },
    {
        id: "laura-posada",
        nombre: "Laura Sofía Posada",
        cargo: "Desarrolladora Frontend",
        area: "Desarrollo",
        correo: "lposada@esece.com",
        telefono: "+57 314 9988776",
        ubicacion: "Medellín, Colombia",
        imagen: "/usuarios/laurap.jpeg",
        imageAlt: "LSP",
    },
    {
        id: "cristian-manco",
        nombre: "Cristian Camilo Manco",
        cargo: "Desarrollador Backend",
        area: "Desarrollo",
        correo: "cmanco@esece.com",
        telefono: "+57 314 0011223",
        ubicacion: "Medellín, Colombia",
        website: "https://cristdev.vercel.app",
        imagen: "/usuarios/cristianm.jpeg",
        imageAlt: "CCM",
    },
    {
        id: "hilari-bedoya",
        nombre: "Hilari Bedoya Correa",
        cargo: "Líder de Gestión Humana",
        area: "Talento Humano",
        correo: "hbedoya@esece.com",
        telefono: "+57 311 1122334",
        ubicacion: "Medellín, Colombia",
        imagen: "/usuarios/default.jpg",
        imageAlt: "HBC",
    },
    {
        id: "claudia-bedoya",
        nombre: "Claudia Bedoya Correa",
        cargo: "Director de Tecnología",
        area: "Tecnología",
        correo: "cbedoya@esece.com",
        telefono: "+57 314 2233445",
        ubicacion: "Medellín, Colombia",
        imagen: "/usuarios/default.jpg",
        imageAlt: "LSP",
    },
    {
        id: "tomas-carvajal",
        nombre: "Tomás Carvajal Bedoya",
        cargo: "Líder de Contratación",
        area: "Contratación",
        correo: "tcarvajal@esece.com",
        telefono: "+57 314 6677889",
        ubicacion: "Medellín, Colombia",
        imagen: "/usuarios/default.jpg",
        imageAlt: "TCB",
    },
];
