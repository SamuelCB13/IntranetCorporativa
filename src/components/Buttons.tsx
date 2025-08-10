'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { CoffeeIcon, HeadsetIcon, HeartPulseIcon, UsersRoundIcon } from 'lucide-react';

export default function Buttons() {
    const { data: session } = useSession();

    // Botones definidos directamente en el componente
    const buttons = [
        { id: 1, name: 'Organiza tu Parche', href: '/', icon: UsersRoundIcon },
        { id: 2, name: 'Comité de Convivencia', href: '/', icon: HeartPulseIcon },
        { id: 3, name: 'Café con Esece', href: '/', icon: CoffeeIcon },
        { id: 4, name: 'Audio Boletín', href: '/talento-humano', icon: HeadsetIcon },
    ];

    return (
        <main>
            {session && (
                <aside className="fixed top-20 right-2 w-16 h-[92vh] max-2xl:bg-transparent bg-neutral-950 text-neutral-100 2xl:border-l 2xl:border-neutral-800 flex flex-col z-50">
                    {/* Contenedor de los 4 botones verticales */}
                    <div className="flex-1 flex flex-col 2xl:justify-around justify-center items-center p-2 gap-4">
                        {buttons.map((item) => {
                            const Icon = item.icon;
                            return (
                                <div className="w-12 flex items-center justify-center" key={item.id}>
                                    <Link
                                        href={item.href}
                                        title={item.name}
                                        className="flex-1 flex items-center justify-center gap-2 p-3 rounded-full transition-all duration-200 group transform 2xl:rotate-90 text-neutral-400 hover:text-white max-sm:hover:bg-neutral-600 max-sm:bg-neutral-800 origin-center"
                                        style={{ width: 'max-content', height: 'max-content' }}
                                    >
                                        <Icon className="text-neutral-400 group-hover:text-white size-5 transition-colors duration-200" />
                                        <p className="hidden 2xl:block whitespace-nowrap">{item.name}</p>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </aside>
            )}
        </main>
    );
}
