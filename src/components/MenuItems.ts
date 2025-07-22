import { ClipboardCheckIcon, CloudLightningIcon, HandHelpingIcon, HeartHandshakeIcon, Home, LayoutGridIcon, MonitorCogIcon, SmilePlusIcon, UsersRoundIcon } from "lucide-react";

export const menuItems = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Talento Humano', href: '/talento-humano', icon: HeartHandshakeIcon },
    { name: 'Usuarios', href: '/usuarios', icon: UsersRoundIcon },
    { name: 'Greta', href: '/greta', icon: HandHelpingIcon },
    { name: 'Aplicaciones', href: '/aplicaciones', icon: LayoutGridIcon },
    { name: 'Beneficios', href: '/archive', icon: SmilePlusIcon },
    { name: 'Sistema de Gestión', href: '/trash', icon: MonitorCogIcon },
    { name: 'Global Learning', href: '/trash', icon: CloudLightningIcon },
    { name: 'Evaluación del Empleado', href: 'https://bpogs.com/Relacion_Empleado/#/login', icon: ClipboardCheckIcon }
];
