'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { menuItems } from './MenuItems';
import { PanelRightCloseIcon, PanelRightOpenIcon, SearchIcon } from 'lucide-react';

export default function Sidebar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);
    const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

    const isActive = (href: string) => pathname === href;
    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main>
            {session && (
                <section>
                    {/* Botón flotante visible SOLO en móviles */}
                    <button
                        onClick={toggleMobileSidebar}
                        className={` ${!isMobileOpen ? 'fixed top-5 left-5 z-50 p-2 hover:bg-neutral-800 hover:rounded-full cursor-pointer text-white sm:hidden' : 'hidden' }`}
                    >
                        {!isMobileOpen && (
                            <PanelRightOpenIcon className="size-6" />
                        )}
                    </button>

                    {/* Sidebar en desktop (collapsed/expanded) */}
                    <aside className={`
                        ${isCollapsed ? 'w-16' : 'w-64'}
                        hidden sm:flex
                        h-dvh bg-neutral-950 text-neutral-100 border-r border-neutral-800
                        flex-col transition-all duration-300 ease-in-out
                    `}>
                        {/* Header */}
                        <div className="p-4 border-b border-neutral-800 h-20 flex items-center justify-center">
                            <div className="flex items-center justify-between gap-5">
                                {!isCollapsed && (
                                    <h1 className="text-lg font-black">Intranet Esece</h1>
                                )}
                                <button
                                    onClick={toggleSidebar}
                                    className="p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
                                >
                                    {isCollapsed ? (
                                        <PanelRightCloseIcon className="size-6 text-neutral-400" />
                                    ) : (
                                        <PanelRightOpenIcon className="size-6 text-neutral-400" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Búsqueda */}
                        {!isCollapsed && (
                            <div className="p-4">
                                <div className="relative">
                                    <SearchIcon className="size-5 text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                    <input
                                        type="text"
                                        placeholder="Buscar página..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full pl-10 pr-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded-full hover:border-blue-400 focus:border-blue-400 focus:outline-none transition duration-200 focus:text-blue-400 text-sm"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Navegación */}
                        <nav className={`${isCollapsed ? 'flex flex-col justify-center flex-1 p-2 space-y-2 overflow-y-auto' : 'flex-1 p-2 space-y-2 overflow-y-auto' }`}>
                            {filteredItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.href);
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        title={item.name}
                                        className={`
                                            ${active ? 'bg-neutral-800 text-blue-400' : 'text-neutral-300 hover:bg-neutral-800'}
                                            ${isCollapsed ? 'justify-center p-3' : 'px-3 py-2'}
                                            flex items-center rounded-full transition-all duration-200 group
                                        `}
                                    >
                                        <Icon className={`
                                            ${active ? 'text-blue-400' : 'text-neutral-400 group-hover:text-white'}
                                            ${isCollapsed ? 'w-6 h-6' : 'size-5'}
                                            flex-shrink-0
                                        `} />
                                        {!isCollapsed && (
                                            <span className="ml-3 text-sm font-medium">{item.name}</span>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </aside>

                    {/* Sidebar en móviles (overlay completo) */}
                    {isMobileOpen && (
                        <div className="fixed inset-0 z-40 backdrop-blur-xs bg-opacity-50 flex sm:hidden">
                            <aside className="w-64 h-full bg-neutral-950 text-neutral-100 flex flex-col">
                                <div className="p-4 border-b border-neutral-800 h-20 flex items-center justify-between">
                                    <h1 className="text-lg font-black">Intranet Esece</h1>
                                    <button
                                        onClick={toggleMobileSidebar}
                                        className="p-2 rounded-full hover:bg-neutral-800"
                                    >
                                        <PanelRightCloseIcon className="size-6 text-neutral-400" />
                                    </button>
                                </div>

                                <div className="p-4">
                                    <div className="relative">
                                        <SearchIcon className="size-5 text-neutral-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                                        <input
                                            type="text"
                                            placeholder="Buscar página..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 bg-neutral-800 text-white border border-neutral-700 rounded-full hover:border-blue-400 focus:border-blue-400 focus:outline-none transition duration-200 focus:text-blue-400 text-sm"
                                        />
                                    </div>
                                </div>

                                <nav className="flex-1 p-2 space-y-2 overflow-y-auto">
                                    {filteredItems.map((item) => {
                                        const Icon = item.icon;
                                        const active = isActive(item.href);
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                title={item.name}
                                                className={`
                                                    ${active ? 'bg-neutral-800 text-blue-400' : 'text-neutral-300 hover:bg-neutral-800'}
                                                    px-3 py-2 flex items-center rounded-full transition-all duration-200 group
                                                `}
                                                onClick={toggleMobileSidebar}
                                            >
                                                <Icon className={`
                                                    ${active ? 'text-blue-400' : 'text-neutral-400 group-hover:text-white'}
                                                    size-5 flex-shrink-0
                                                `} />
                                                <span className="ml-3 text-sm font-medium">{item.name}</span>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </aside>
                        </div>
                    )}
                </section>
            )}
        </main>
    );
}
