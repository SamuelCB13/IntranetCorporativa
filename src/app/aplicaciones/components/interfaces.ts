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
        id: "microsoft-teams",
        titulo: "Microsoft Teams",
        descripcion: "Plataforma de comunicación y colaboración empresarial integrada con Office 365.",
        imagen: "/aplicaciones/teams.ico",
        imageAlt: "Logo de Microsoft Teams",
        href: "https://teams.microsoft.com/",
        seccion: "tic"
    },
    {
        id: "slack",
        titulo: "Slack",
        descripcion: "Herramienta de mensajería y colaboración para equipos de trabajo.",
        imagen: "/aplicaciones/slack.svg",
        imageAlt: "Logo de Slack",
        href: "https://slack.com/",
        seccion: "tic"
    },
    {
        id: "zoom",
        titulo: "Zoom",
        descripcion: "Plataforma de videoconferencias y reuniones virtuales.",
        imagen: "/aplicaciones/zoom.svg",
        imageAlt: "Logo de Zoom",
        href: "https://zoom.us/",
        seccion: "tic"
    },
    {
        id: "google-workspace",
        titulo: "Google Workspace",
        descripcion: "Suite de herramientas de productividad y colaboración en la nube.",
        imagen: "/aplicaciones/google.svg",
        imageAlt: "Logo de Google Workspace",
        href: "https://workspace.google.com/",
        seccion: "tic"
    },
    {
        id: "trello",
        titulo: "Trello",
        descripcion: "Herramienta de gestión de proyectos basada en tableros Kanban.",
        imagen: "/aplicaciones/trello.jpg",
        imageAlt: "Logo de Trello",
        href: "https://trello.com/",
        seccion: "tic"
    },
    {
        id: "notion",
        titulo: "Notion",
        descripcion: "Espacio de trabajo todo-en-uno para notas, documentos y bases de datos.",
        imagen: "/aplicaciones/notion.svg",
        imageAlt: "Logo de Notion",
        href: "https://notion.so/",
        seccion: "tic"
    },
    {
        id: "dropbox",
        titulo: "Dropbox",
        descripcion: "Servicio de almacenamiento y sincronización de archivos en la nube.",
        imagen: "/aplicaciones/dropbox.svg",
        imageAlt: "Logo de Dropbox",
        href: "https://dropbox.com/",
        seccion: "tic"
    },
    {
        id: "asana",
        titulo: "Asana",
        descripcion: "Plataforma de gestión de proyectos y seguimiento de tareas.",
        imagen: "/aplicaciones/asana.svg",
        imageAlt: "Logo de Asana",
        href: "https://asana.com/",
        seccion: "tic"
    },

    // Aplicaciones de la sección Desarrollo
    {
        id: "github",
        titulo: "GitHub",
        descripcion: "Plataforma de desarrollo colaborativo para alojar proyectos utilizando Git.",
        imagen: "/aplicaciones/github.svg",
        imageAlt: "Logo de GitHub",
        href: "https://github.com/",
        seccion: "desarrollo"
    },
    {
        id: "visual-studio-code",
        titulo: "Visual Studio Code",
        descripcion: "Editor de código fuente gratuito desarrollado por Microsoft.",
        imagen: "/aplicaciones/vscode.svg",
        imageAlt: "Logo de Visual Studio Code",
        href: "https://code.visualstudio.com/",
        seccion: "desarrollo"
    },
    {
        id: "figma",
        titulo: "Figma",
        descripcion: "Herramienta de diseño de interfaces y prototipado colaborativo.",
        imagen: "/aplicaciones/figma.svg",
        imageAlt: "Logo de Figma",
        href: "https://figma.com/",
        seccion: "desarrollo"
    },
    {
        id: "postman",
        titulo: "Postman",
        descripcion: "Plataforma para el desarrollo y testing de APIs.",
        imagen: "/aplicaciones/postman.svg",
        imageAlt: "Logo de Postman",
        href: "https://postman.com/",
        seccion: "desarrollo"
    },
    {
        id: "docker",
        titulo: "Docker",
        descripcion: "Plataforma de contenedores para desarrollo y despliegue de aplicaciones.",
        imagen: "/aplicaciones/docker.svg",
        imageAlt: "Logo de Docker",
        href: "https://docker.com/",
        seccion: "desarrollo"
    },
    {
        id: "jenkins",
        titulo: "Jenkins",
        descripcion: "Servidor de automatización para integración y entrega continua.",
        imagen: "/aplicaciones/jenkins.svg",
        imageAlt: "Logo de Jenkins",
        href: "https://jenkins.io/",
        seccion: "desarrollo"
    },
    {
        id: "jira",
        titulo: "Jira",
        descripcion: "Herramienta de gestión de proyectos y seguimiento de issues.",
        imagen: "/aplicaciones/jira.png",
        imageAlt: "Logo de Jira",
        href: "https://atlassian.com/software/jira",
        seccion: "desarrollo"
    },
    {
        id: "confluence",
        titulo: "Confluence",
        descripcion: "Plataforma de colaboración y documentación para equipos.",
        imagen: "/aplicaciones/confluence.png",
        imageAlt: "Logo de Confluence",
        href: "https://atlassian.com/software/confluence",
        seccion: "desarrollo"
    },
    {
        id: "aws-console",
        titulo: "AWS Management Console",
        descripcion: "Consola web para gestionar servicios de Amazon Web Services.",
        imagen: "/aplicaciones/aws.svg",
        imageAlt: "Logo de AWS",
        href: "https://aws.amazon.com/console/",
        seccion: "desarrollo"
    },

    // Aplicaciones de la sección Reportes
    {
        id: "tableau",
        titulo: "Tableau",
        descripcion: "Plataforma líder en visualización de datos y business intelligence.",
        imagen: "/aplicaciones/tableau.png",
        imageAlt: "Logo de Tableau",
        href: "https://tableau.com/",
        seccion: "reportes"
    },
    {
        id: "power-bi",
        titulo: "Microsoft Power BI",
        descripcion: "Herramienta de análisis empresarial y visualización de datos.",
        imagen: "/aplicaciones/powerbi.png",
        imageAlt: "Logo de Power BI",
        href: "https://powerbi.microsoft.com/",
        seccion: "reportes"
    },
    {
        id: "google-analytics",
        titulo: "Google Analytics",
        descripcion: "Plataforma de análisis web para medir el tráfsvg y comportamiento de usuarios.",
        imagen: "/aplicaciones/google.svg",
        imageAlt: "Logo de Google Analytics",
        href: "https://analytics.google.com/",
        seccion: "reportes"
    },
    {
        id: "looker-studio",
        titulo: "Looker Studio",
        descripcion: "Herramienta gratuita de Google para crear reportes y dashboards interactivos.",
        imagen: "/aplicaciones/looker.svg",
        imageAlt: "Logo de Looker Studio",
        href: "https://datastudio.google.com/",
        seccion: "reportes"
    },
    {
        id: "qlik-sense",
        titulo: "Qlik Sense",
        descripcion: "Plataforma de analytics autoservicio para exploración de datos.",
        imagen: "/aplicaciones/qlik.svg",
        imageAlt: "Logo de Qlik Sense",
        href: "https://qlik.com/us/products/qlik-sense",
        seccion: "reportes"
    },
    {
        id: "metabase",
        titulo: "Metabase",
        descripcion: "Herramienta open source para crear dashboards y hacer preguntas sobre datos.",
        imagen: "/aplicaciones/metabase.png",
        imageAlt: "Logo de Metabase",
        href: "https://metabase.com/",
        seccion: "reportes"
    },
    {
        id: "grafana",
        titulo: "Grafana",
        descripcion: "Plataforma de monitoreo y observabilidad con dashboards personalizables.",
        imagen: "/aplicaciones/grafana.png",
        imageAlt: "Logo de Grafana",
        href: "https://grafana.com/",
        seccion: "reportes"
    },
    {
        id: "jupyter",
        titulo: "Jupyter Notebook",
        descripcion: "Aplicación web para crear documentos con código, ecuaciones y visualizaciones.",
        imagen: "/aplicaciones/jupyter.png",
        imageAlt: "Logo de Jupyter",
        href: "https://jupyter.org/",
        seccion: "reportes"
    },
    {
        id: "plotly-dash",
        titulo: "Plotly Dash",
        descripcion: "Framework para crear aplicaciones web analíticas interactivas.",
        imagen: "/aplicaciones/plotly.png",
        imageAlt: "Logo de Plotly",
        href: "https://plotly.com/dash/",
        seccion: "reportes"
    },
    {
        id: "apache-superset",
        titulo: "Apache Superset",
        descripcion: "Plataforma moderna de exploración y visualización de datos.",
        imagen: "/aplicaciones/superset.png",
        imageAlt: "Logo de Apache Superset",
        href: "https://superset.apache.org/",
        seccion: "reportes"
    },
    {
        id: "elastic-kibana",
        titulo: "Kibana",
        descripcion: "Herramienta de visualización para datos almacenados en Elasticsearch.",
        imagen: "/aplicaciones/kibana.png",
        imageAlt: "Logo de Kibana",
        href: "https://elastic.co/kibana/",
        seccion: "reportes"
    },
    {
        id: "domo",
        titulo: "Domo",
        descripcion: "Plataforma cloud de business intelligence y visualización de datos.",
        imagen: "/aplicaciones/domo.png",
        imageAlt: "Logo de Domo",
        href: "https://domo.com/",
        seccion: "reportes"
    }
];
