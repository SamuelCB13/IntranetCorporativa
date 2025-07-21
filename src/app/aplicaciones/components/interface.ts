// Interfaz para las aplicaciones
export interface Aplicaciones {
    id: string;
    titulo: string;
    descripcion: string;
    imagen: string;
    imageAlt: string;
    href: string;
    seccion: 'tic' | 'desarrollo' | 'reportes';
}

// Array de datos para las aplicaciones
export const aplicaciones: Aplicaciones[] = [
    // Aplicaciones de la sección TIC
    {
        id: "tipificador-help-tic",
        titulo: "Tipificador de Help",
        descripcion: "Realizado en aplicativo web, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/help-logo.png",
        imageAlt: "Logo de Help",
        href: "https://bpogs.com/typification/help_typification/#/login",
        seccion: "tic"
    },
    {
        id: "aplicativo-cpanel",
        titulo: "Aplicativo de cPanel",
        descripcion: "Hosting de aplicaciones, con base de datos en SQL.",
        imagen: "/aplicaciones/cpanel-logo.png",
        imageAlt: "Logo de cPanel",
        href: "https://bpogs.com/webmail",
        seccion: "tic"
    },
    {
        id: "aplicativo-zoho",
        titulo: "Aplicativo Zoho",
        descripcion: "Aplicativo para gestión de clientes, con base de datos en SQL.",
        imagen: "/aplicaciones/zoho-logo.png",
        imageAlt: "Logo de Zoho",
        href: "https://crm.zoho.com/crm/%20",
        seccion: "tic"
    },
    {
        id: "aplicativo-five9",
        titulo: "Aplicativo de Five9",
        descripcion: "Aplicativo de gestión de llamadas, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/five9-logo.png",
        imageAlt: "Logo de Five9",
        href: "https://app.five9.com/",
        seccion: "tic"
    },
    {
        id: "aplicativo-time-doctor",
        titulo: "Aplicativo de Time Doctor",
        descripcion: "Aplicativo de gestión de tiempo, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/time-doctor-logo.png",
        imageAlt: "Logo de Time Doctor",
        href: "https://www.timedoctor.com/",
        seccion: "tic"
    },
    {
        id: "aplicativo-vonage",
        titulo: "Aplicativo de Vonage",
        descripcion: "Aplicativo de comunicaciones, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/vonage-logo.webp",
        imageAlt: "Logo de Vonage",
        href: "https://app.vonage.com/login",
        seccion: "tic"
    },
    {
        id: "aplicativo-powerbi",
        titulo: "Aplicativo de Power BI",
        descripcion: "Aplicativo de visualización de datos, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/powerbi-logo.png",
        imageAlt: "Logo de Power BI",
        href: "https://app.powerbi.com",
        seccion: "tic"
    },
    {
        id: "herramientas-office365",
        titulo: "Herramientas Office 365",
        descripcion: "Herramientas de productividad y colaboración en la nube.",
        imagen: "/aplicaciones/office-logo.png",
        imageAlt: "Logo de Office 365",
        href: "https://www.office.com/",
        seccion: "tic"
    },
    {
        id: "herramientas-google",
        titulo: "Herramientas Google",
        descripcion: "Herramientas de productividad y colaboración en la nube.",
        imagen: "/aplicaciones/google-logo.png",
        imageAlt: "Logo de Google",
        href: "https://google.com",
        seccion: "tic"
    },

    // Aplicaciones de la sección Desarrollo
    {
        id: "gestion-humana-v1",
        titulo: "Gestión Humana - V1",
        descripcion: "Realizado en power apps, conectado a listas de SharePoint.",
        imagen: "/aplicaciones/gh-web-1.png",
        imageAlt: "Logo de Gestión Humana V1",
        href: "https://apps.powerapps.com/play/e/default-61c0cc10-ebc1-40fb-b32f-def1c66a403c/a/144b530f-0efa-4351-a3e6-db94f7d1edc6?tenantId=61c0cc10-ebc1-40fb-b32f-def1c66a403c&sourcetime=2023-08-11%2014%3A43%3A57Z&source=portal",
        seccion: "desarrollo"
    },
    {
        id: "gestion-humana-v2",
        titulo: "Gestión Humana - V2",
        descripcion: "Realizado en power apps, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/gh-web-1.png",
        imageAlt: "Logo de Gestión Humana V2",
        href: "https://apps.powerapps.com/play/e/0c0b9563-e8e2-ef7e-a381-c043f8d96711/a/647712b8-6a0d-4cdc-8851-0d28021fb6f3?tenantId=61c0cc10-ebc1-40fb-b32f-def1c66a403c&sourcetime=1742305036471",
        seccion: "desarrollo"
    },
    {
        id: "gestion-humana-v3",
        titulo: "Gestión Humana - V3",
        descripcion: "Realizado en aplicativo web, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/gh-web.png",
        imageAlt: "Logo de Gestión Humana V3",
        href: "https://gestionhumana.co.bpogs.com/",
        seccion: "desarrollo"
    },
    {
        id: "datamee-bavaria",
        titulo: "Datamee Bavaria",
        descripcion: "Realizado en aplicativo web, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/bavaria-logo.png",
        imageAlt: "Logo de Bavaria",
        href: "https://bpogs.com/dbbavaria/#/login",
        seccion: "desarrollo"
    },
    {
        id: "tipificador-help-dev",
        titulo: "Tipificador de Help",
        descripcion: "Realizado en aplicativo web, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/help-logo.png",
        imageAlt: "Logo de Help",
        href: "https://bpogs.com/typification/help_typification/#/login",
        seccion: "desarrollo"
    },
    {
        id: "tipificador-vtr",
        titulo: "Tipificador de Vtr",
        descripcion: "Realizado en aplicativo web, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/vtr-logo.png",
        imageAlt: "Logo de Vtr",
        href: "https://bpogs.com/vtr/typification/Home-VTR/#/login",
        seccion: "desarrollo"
    },
    {
        id: "tipificador-worksimpli",
        titulo: "Tipificador de WorkSimpli",
        descripcion: "Realizado en aplicativo web, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/worksimpli-logo.png",
        imageAlt: "Logo de WorkSimpli",
        href: "https://bpogs.com/typification/WorkSimpli/#/login",
        seccion: "desarrollo"
    },
    {
        id: "aplicativo-compras",
        titulo: "Aplicativo de Compras",
        descripcion: "Realizado en power apps, conectado a listas de SharePoint.",
        imagen: "/aplicaciones/compras-logo.png",
        imageAlt: "Logo de Compras",
        href: "https://apps.powerapps.com/play/e/default-61c0cc10-ebc1-40fb-b32f-def1c66a403c/a/8564b230-7b75-4f57-a1ad-6ee459cb7528?tenantId=61c0cc10-ebc1-40fb-b32f-def1c66a403c&sourcetime=2023-08-11%2019%3A40%3A31Z&source=portal",
        seccion: "desarrollo"
    },
    {
        id: "aplicativo-visitantes",
        titulo: "Aplicativo de Visitantes",
        descripcion: "Realizado en power apps, conectado a listas de SharePoint.",
        imagen: "/aplicaciones/visitantes-logo.png",
        imageAlt: "Logo de Visitantes",
        href: "https://apps.powerapps.com/play/e/default-61c0cc10-ebc1-40fb-b32f-def1c66a403c/a/5d2da586-58a7-4efa-b4c0-619dc1ddcfe0?tenantId=61c0cc10-ebc1-40fb-b32f-def1c66a403c&source=AppSharedV3&hint=c3b4e05f-2db3-485f-a630-6c895720792a&sourcetime=1703114816159",
        seccion: "desarrollo"
    },

    // Aplicaciones de la sección Reportes
    {
        id: "reporte-greta",
        titulo: "Reporte de Greta",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/greta-logo.png",
        imageAlt: "Logo de Greta",
        href: "https://app.powerbi.com/view?r=eyJrIjoiZGY1YTM0YzYtODcxMi00NDU1LWIzNjYtOTI0Mjk5YWQ0YWQ3IiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-glpi",
        titulo: "Reporte de Glpi",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/glpi-logo.png",
        imageAlt: "Logo de Glpi",
        href: "https://app.powerbi.com/view?r=eyJrIjoiZmUzMjE3MzItNjlkZi00MWY3LWI1YjUtYjFmZjFmZTViYjNhIiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-bavaria",
        titulo: "Reporte de Bavaria",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/bavaria-logo.png",
        imageAlt: "Logo de Baviaria",
        href: "https://app.powerbi.com/view?r=eyJrIjoiZTEzZTBhMTYtNzA5NC00Mjg3LTg4YWEtZDFhMDQyOTZhMWFmIiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-bold",
        titulo: "Reporte de Bold",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/bold-logo.png",
        imageAlt: "Logo de Bold",
        href: "https://app.powerbi.com/view?r=eyJrIjoiZDFkN2I4OWEtN2EwYi00ZmE0LTg3MDgtYjMxNjI4MWNhOWU3IiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-time-doctor",
        titulo: "Reporte de Time Doctor",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/time-doctor-logo.png",
        imageAlt: "Logo de Time Doctor",
        href: "https://app.powerbi.com/view?r=eyJrIjoiNzBhY2FlMTMtY2U3Yy00ZTBiLWE0Y2UtNmM1ZDAzNDEwYjI5IiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-stihl",
        titulo: "Reporte de Stihl",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/stihl-logo.png",
        imageAlt: "Logo de Stihl",
        href: "https://app.powerbi.com/view?r=eyJrIjoiYTljMzBiN2YtM2NhNy00MzdkLTk0NDktODY0ODA2NDA4M2FjIiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9&embedImagePlaceholder=true",
        seccion: "reportes"
    },
    {
        id: "reporte-gestion-humana",
        titulo: "Reporte de Gestión Humana",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/gh-web.png",
        imageAlt: "Logo de Gestión Humana",
        href: "https://app.powerbi.com/view?r=eyJrIjoiMjYwZGUzNjktODNlNy00ZGIzLThmNzMtMWVlYWE0ZmZjOWE5IiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-sky-autofinance",
        titulo: "Reporte de Sky Autofinance",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/sky-logo.png",
        imageAlt: "Logo de Sky Autofinance",
        href: "https://app.powerbi.com/view?r=eyJrIjoiYjAyMzMyZWItZDVhOC00MWU1LTkwMGMtYWY0Y2U4M2U0NzE0IiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-simple-loans",
        titulo: "Reporte de Simple Loans",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/simple-loans-logo.png",
        imageAlt: "Logo de Simple Loans",
        href: "https://app.powerbi.com/view?r=eyJrIjoiZTIxZjE4Y2QtNGJlMS00N2RiLTljNTctYzY0ZmM2NTE1ZWJjIiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-resume-genius",
        titulo: "Reporte de Resume Genius",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/resume-genius-logo.png",
        imageAlt: "Logo de Resume Genius",
        href: "https://app.powerbi.com/view?r=eyJrIjoiMjk4OTNiM2MtNzQ2Mi00MjExLWE2ODgtY2YwMzFhOTU3OWM5IiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9&embedImagePlaceholder=true",
        seccion: "reportes"
    },
    {
        id: "reporte-evaluaciones",
        titulo: "Reporte de Evaluaciones",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/evaluaciones-logo.png",
        imageAlt: "Logo de Evaluaciones",
        href: "https://app.powerbi.com/view?r=eyJrIjoiNDg3Y2ZiNjktMTA3MC00MjgzLTgwODktZjZlYTYwMjYzZjIzIiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
    {
        id: "reporte-conectix",
        titulo: "Reporte de Conectix",
        descripcion: "Realizado en power bi, conectado a base de datos en SQL.",
        imagen: "/aplicaciones/conectix-logo.png",
        imageAlt: "Logo de Conectix",
        href: "https://app.powerbi.com/view?r=eyJrIjoiMjg5NTQwMjQtYmIyZi00NmRhLWEzOWUtZWUyNzllZDk1MDUyIiwidCI6IjYxYzBjYzEwLWViYzEtNDBmYi1iMzJmLWRlZjFjNjZhNDAzYyJ9",
        seccion: "reportes"
    },
];
