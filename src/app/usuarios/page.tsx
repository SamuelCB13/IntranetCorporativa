"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useState, useMemo } from "react";
import Loading from "../loading";
import { usuarios } from "./components/interfaces";
import { MailCheckIcon, MailPlusIcon, MapPinCheckIcon, SearchIcon, MonitorSmartphoneIcon, GlobeIcon } from "lucide-react";
import Link from "next/link";

export default function UsuariosPage() {
    const { data: session } = useSession();
    const [searchTerm, setSearchTerm] = useState("");

    // Filtrar usuarios basado en el término de búsqueda
    const usuariosFiltrados = useMemo(() => {
        if (!searchTerm.trim()) return usuarios;

        const termino = searchTerm.toLowerCase().trim();
        return usuarios.filter(usuario =>
            usuario.nombre.toLowerCase().includes(termino) ||
            usuario.cargo.toLowerCase().includes(termino) ||
            usuario.area.toLowerCase().includes(termino) ||
            usuario.correo.toLowerCase().includes(termino)
        );
    }, [searchTerm]);

    const limpiarBusqueda = () => {
        setSearchTerm("");
    };

    if (!session) {
        return (
            <Loading />
        )
    }

    return (
        <main className="w-full p-5 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-15 w-full max-w-5xl mx-auto py-5">
                <section className="w-full bg-neutral-950">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Directorio de usuarios</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Aquí encontrarás un listado de usuarios registrados en el sistema.
                        </p>
                    </div>

                    {/* Buscador */}
                    <div className="pb-6">
                        <div className="relative w-full mx-auto">
                            <div className="relative">
                                <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 size-4" />
                                <input
                                    type="text"
                                    placeholder="Buscar por nombre, cargo, área o correo..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-10 py-3 bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder:text-neutral-400 hover:border-neutral-600 duration-200 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Lista de usuarios */}
                    {usuariosFiltrados.length === 0 && searchTerm ? (
                        <div className="text-center py-12">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center">
                                    <SearchIcon className="size-8 text-neutral-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">No se encontraron usuarios</h3>
                                    <p className="text-neutral-400">
                                        Intenta con otros términos de búsqueda o{" "}
                                        <button
                                            onClick={limpiarBusqueda}
                                            className="text-blue-500 cursor-pointer transition-all duration-200"
                                        >
                                            borra el filtro
                                        </button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                            {usuariosFiltrados.map((usuario) => (
                                <div key={usuario.id} className="flex flex-col items-start gap-3 sm:gap-4 border border-neutral-800 rounded-xl p-4 sm:p-5 lg:p-6 hover:border-neutral-600 hover:bg-neutral-900 duration-200">
                                    {/* Layout móvil: imagen y info lado a lado / Desktop: imagen centrada */}
                                    <section className="flex flex-row sm:flex-col items-center gap-3 sm:gap-4 w-full">
                                        {/* Imagen */}
                                        <div className="flex items-center justify-center sm:w-full">
                                            <Image
                                                src={usuario.imagen}
                                                alt={usuario.imageAlt}
                                                width={112}
                                                height={112}
                                                className="border-2 border-neutral-800 rounded-full size-20 sm:size-24 lg:size-28 object-cover object-center mask-bottom flex-shrink-0"
                                                priority
                                                quality={100}
                                            />
                                        </div>

                                        {/* Información del usuario */}
                                        <div className="flex flex-col items-start sm:items-center justify-center gap-1 w-full text-left sm:text-center">
                                            <p className="text-base sm:text-lg font-black text-white leading-tight">{usuario.nombre}</p>
                                            <p className="text-sm sm:text-base font-semibold text-neutral-500">{usuario.cargo}</p>
                                            <p className="text-xs font-semibold text-white px-3 py-1 bg-blue-600 rounded-full mt-2 whitespace-nowrap">{usuario.area}</p>
                                        </div>
                                    </section>

                                    {/* Información de contacto */}
                                    <section className="flex items-center justify-center w-full">
                                        <div className="flex flex-col items-center justify-center gap-2 w-full">
                                            <p className="flex items-center gap-2 text-sm text-neutral-400 w-full">
                                                <MailCheckIcon className="size-3 sm:size-4 flex-shrink-0" />
                                                <span className="truncate">{usuario.correo}</span>
                                            </p>
                                            <p className="flex items-center gap-2 text-sm text-neutral-400 w-full">
                                                <MonitorSmartphoneIcon className="size-3 sm:size-4 flex-shrink-0" />
                                                <span className="truncate">{usuario.telefono}</span>
                                            </p>
                                            <p className="flex items-center gap-2 text-sm text-neutral-400 w-full">
                                                <MapPinCheckIcon className="size-3 sm:size-4 flex-shrink-0" />
                                                <span className="truncate">{usuario.ubicacion}</span>
                                            </p>
                                            {usuario.website && (
                                                <p className="flex items-center gap-2 text-sm text-neutral-400 w-full">
                                                    <GlobeIcon className="size-3 sm:size-4 flex-shrink-0" />
                                                    <Link href={usuario.website ?? ""} target="_blank" className="truncate underline hover:text-white duration-200">{usuario.website}</Link>
                                                </p>
                                            )}
                                        </div>
                                    </section>

                                    {/* Botón de contacto */}
                                    <section className="flex items-center w-full mt-auto">
                                        <Link
                                            href={`mailto:${usuario.correo}`}
                                            className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-600 text-white px-4 py-2 rounded-lg font-medium text-xs sm:text-sm w-full transition-colors duration-200"
                                        >
                                            <MailPlusIcon className="size-4" />
                                            <span>Contactar por correo</span>
                                        </Link>
                                    </section>
                                </div>
                            ))}
                        </div>
                    )}
                </section>
            </article>
        </main>
    )
}
