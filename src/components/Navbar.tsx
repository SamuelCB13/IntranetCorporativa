"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CogIcon, LogOutIcon, MailCheckIcon } from "lucide-react";

export default function Navbar() {
    const { data: session } = useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    if (!session) {
        return null;
    }

    return (
        <main>
            {session && (
                <nav className="bg-neutral-950 text-white border-b border-neutral-800 h-20">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                        {/* Logo y nombre */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logofinal-blanco.webp"
                                alt="Logo de la aplicación"
                                width={100}
                                height={100}
                                quality={100}
                                className="max-sm:ml-14"
                            />
                        </Link>

                        {/* Sección de usuario y menú móvil */}
                        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                            {/* Botón/Perfil de usuario */}
                            {session?.user && (
                                <div className="relative">
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex text-sm bg-neutral-950 rounded-full cursor-pointer border border-transparent hover:border-neutral-400 focus:border-neutral-400 transition duration-200"
                                        aria-expanded={isDropdownOpen}
                                    >
                                        <Image
                                            src={session.user.image || ''}
                                            alt="Foto del usuario"
                                            width={40}
                                            height={40}
                                            className="rounded-full size-10"
                                            quality={100}
                                        />
                                    </button>
                                    {/* Dropdown del usuario */}
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-6 z-50 text-base list-none bg-neutral-950 border-neutral-700 divide-y divide-neutral-700 rounded-xl shadow-lg">
                                            <div className="px-4 py-3">
                                                <span className="block text-sm text-neutral-300 font-bold truncate">
                                                    Hola, {session.user.name} 👋🏻
                                                </span>
                                                <span className="flex items-center gap-1 text-sm text-neutral-400 truncate">
                                                    <MailCheckIcon className="size-4" /> {session.user.email}
                                                </span>
                                            </div>
                                            <ul className="py-2">
                                                <li>
                                                    <Link
                                                        href="/settings"
                                                        className="w-full flex items-center justify-between gap-1 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all duration-200 cursor-pointer"
                                                        onClick={() => setIsDropdownOpen(false)}
                                                    >
                                                        Configuración
                                                        <CogIcon className="size-4" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() => {
                                                            setIsDropdownOpen(false);
                                                            signOut({ callbackUrl: '/' });
                                                        }}
                                                        className="w-full flex items-center justify-between gap-1 px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition-all duration-200 cursor-pointer"
                                                    >
                                                        Cerrar Sesión
                                                        <LogOutIcon className="size-4" />
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Menú de navegación */}
                        <div
                            className="hidden items-center justify-between w-full lg:flex lg:w-auto lg:order-1 z-40"
                            id="navbar-menu"
                        >
                            <ul className="flex flex-col font-black py-2 md:p-0 mt-6 border border-neutral-700 rounded-xl bg-neutral-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-xl">
                                <p>Bienvenidos a nuestra intranet global</p>
                            </ul>
                        </div>
                    </div>
                </nav>
            )}
        </main>
    );
}
