import { ClipboardCheckIcon, CloudLightningIcon, HeartHandshakeIcon, HelpCircleIcon, Home, LayoutGridIcon, MonitorCogIcon, SmilePlusIcon, UsersRoundIcon } from "lucide-react";

export const menuItems = [
    { name: 'Inicio', href: '/', icon: Home },
    { name: 'Talento Humano', href: '/talento-humano', icon: HeartHandshakeIcon },
    { name: 'Usuarios', href: '/folders', icon: UsersRoundIcon },
    { name: 'Greta', href: '/favorites', icon: HelpCircleIcon },
    { name: 'Aplicaciones', href: '/tags', icon: LayoutGridIcon },
    { name: 'Beneficios', href: '/archive', icon: SmilePlusIcon },
    { name: 'Sistema de Gestión', href: '/trash', icon: MonitorCogIcon },
    { name: 'Global Learning', href: '/trash', icon: CloudLightningIcon },
    { name: 'Evaluación del Empleado', href: '/trash', icon: ClipboardCheckIcon }
];
