"use client";

import Image from "next/image";
import { beneficios, ultimasVacantes } from "./components/interfaces";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import { AlertCircleIcon, CheckIcon, CircleDollarSignIcon, CrownIcon, EyeIcon, EyeOffIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";

export default function BeneficiosPage() {
    const { data: session } = useSession();
    const [expandedId, setExpandedId] = useState<number | null>(null);

    if (!session) {
        return (
            <Loading />
        );
    }

    return (
        <main className="w-full p-5 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-15 w-full max-w-6xl mx-auto py-5">
                <section className="w-full bg-neutral-950 border border-neutral-800 rounded-xl hover:translate-2 transition-all duration-200">
                    <div
                        className="flex flex-col md:flex-row md:items-center justify-between gap-10 py-5 px-7"
                    >
                        <div className="flex-1 flex items-start flex-col gap-3">
                            <p className="text-base font-bold text-neutral-400">¿Conoces a alguien bilingüe en busca de empleo?</p>
                            <h2 className="text-xl font-black text-white">¡Refiérelo y gana!</h2>
                            <ol className="space-y-4 text-neutral-500 list-disc list-inside">
                                <li className="leading-relaxed text-sm">
                                    Para desarrolladores bilingües, podrías ganar $100.000 por cada referido que sea contratado y otros $100.000 si permanece en la empresa por más de 2 meses aprobando su periodo de prueba.
                                </li>
                            </ol>
                            <p className="flex items-center gap-1 bg-neutral-800 font-medium text-xs sm:text-sm w-auto my-2 py-2 px-3 rounded-lg text-white">
                                Ganar con Esece es así de sencillo
                                <CrownIcon className="size-5" />
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src="/beneficios/desarrolladores.webp"
                                alt="Desarrolladores"
                                width={576}
                                height={192}
                                className="rounded-t-xl w-full h-48 object-cover object-center mask-bottom"
                                priority
                                quality={100}
                            />
                        </div>
                    </div>
                </section>

                {/* Sección de últimas vacantes */}
                <section className="w-full">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Últimas vacantes</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Descubre y conoce las últimas vacantes activas de la empresa, aquí podrás encontrar información para posibles referidos.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {ultimasVacantes.map((vacante) => (
                            <div key={vacante.id} className="flex flex-col items-start gap-3 border border-neutral-800 rounded-xl hover:scale-105 transition-all duration-200">
                                <Image
                                    src={vacante.imagen}
                                    alt={vacante.imageAlt}
                                    width={1000}
                                    height={160}
                                    className="rounded-t-xl w-full h-40 object-cover object-center mask-bottom"
                                    priority
                                    quality={100}
                                />
                                <section className="flex items-center gap-3 px-5 w-full">
                                    <div>
                                        <p className="flex items-center gap-2 text-xl font-black text-white">
                                            {<vacante.icono className="size-5" aria-hidden="true" />}
                                            {vacante.cargo}
                                        </p>
                                    </div>
                                </section>
                                <section className="grid grid-cols-1 max-sm:grid-cols-2 gap-3 px-5 pb-3">
                                    <p className="max-sm:col-span-2 text-xs md:text-sm text-neutral-500 w-full">
                                        {vacante.funciones}
                                    </p>
                                    <p title={vacante.ubicacion} className="flex items-center gap-1 text-xs md:text-sm text-white bg-neutral-900 border border-zinc-700 px-2 py-1 rounded-md whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="truncate">{vacante.ubicacion}</span>
                                        <MapPinIcon className="size-3 md:size-4 flex-shrink-0" />
                                    </p>
                                    <p title={vacante.contrato} className="flex items-center gap-1 text-xs md:text-sm text-[#0099ff] bg-[#030320] border border-blue-950 px-2 py-1 rounded-md whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="truncate">{vacante.contrato}</span>
                                        <CheckIcon className="size-3 md:size-4 flex-shrink-0" />
                                    </p>
                                    <p title={vacante.salario} className="flex items-center gap-1 text-xs md:text-sm text-[#00ff00] bg-[#032003] border border-green-900 px-2 py-1 rounded-md whitespace-nowrap overflow-hidden text-ellipsis">
                                        <span className="truncate">{vacante.salario}</span>
                                        <CircleDollarSignIcon className="size-3 md:size-4 flex-shrink-0" />
                                    </p>
                                    {vacante.urgencia && (
                                        <p title={vacante.urgencia} className="flex items-center gap-1 text-xs md:text-sm text-[#ff0000] bg-[#220404] border border-red-950 px-2 py-1 rounded-md whitespace-nowrap overflow-hidden text-ellipsis">
                                            <AlertCircleIcon className="size-3 md:size-4 flex-shrink-0" />
                                            <span className="truncate">{vacante.urgencia}</span>
                                        </p>
                                    )}
                                </section>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sección de Quiénes somos - Dinámica */}
                <section className="w-full max-w-5xl">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Nuestros beneficios</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Conoce más sobre nuestros beneficios y cómo trabajamos para el bienestar de nuestros empleados.
                        </p>
                    </div>

                    {beneficios.map((somos, index) => (
                        <div
                            key={somos.id}
                            className={`flex flex-col md:flex-row md:items-center justify-between gap-10 my-10 ${somos.posicion === 'izquierda'
                                ? 'border-r-3 border-neutral-800'
                                : 'border-l-3 border-neutral-800'
                                } ${index === beneficios.length - 1 ? 'mb-0' : ''}`}
                        >
                            {/* Contenido */}
                            <div className={`flex-1 flex items-start flex-col gap-3 ${somos.posicion === 'izquierda' ? 'md:order-2' : 'md:order-1'
                                }`}>
                                <section className={`${expandedId === somos.id ? 'px-5 animate-fadeIn' : 'px-5'}`}>
                                    <p className="text-xl font-black text-white">{somos.titulo}</p>
                                </section>
                                <section className={`${expandedId === somos.id ? 'px-5 animate-fadeIn' : 'px-5'}`}>
                                    <p className="text-sm text-neutral-500">
                                        {somos.descripcion}
                                    </p>

                                    <button
                                        onClick={() =>
                                            setExpandedId(expandedId === somos.id ? null : somos.id)
                                        }
                                        className="mt-2 text-sm font-semibold bg-neutral-800 hover:bg-neutral-600 text-white cursor-pointer w-full py-2 rounded-lg transition-colors duration-200"
                                    >
                                        {expandedId === somos.id ? (
                                            <p>
                                                <EyeOffIcon className="inline size-4 mr-2" />
                                                Ocultar
                                            </p>
                                        ) : (
                                            <p>
                                                <EyeIcon className="inline size-4 mr-2" />
                                                Ver más
                                            </p>
                                        )}
                                    </button>

                                    {expandedId === somos.id && (
                                        <p className="mt-3 text-sm text-[#0099ff] bg-[#030320] border border-blue-950 p-2 rounded-lg">{somos.detalle}</p>
                                    )}
                                </section>
                            </div>

                            {/* Imagen */}
                            <div className={`flex-1 px-5 md:px-0 ${somos.posicion === 'izquierda' ? 'md:order-1' : 'md:order-2'
                                }`}>
                                <Image
                                    src={somos.imagen}
                                    alt={somos.imageAlt}
                                    width={512}
                                    height={256}
                                    className="rounded-t-xl w-full h-52 object-cover object-center mask-bottom"
                                    priority
                                    quality={100}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </main>
    )
}
