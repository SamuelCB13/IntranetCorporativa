"use client";

import Image from "next/image";
import { tipsTecnologicos, acciones } from "./components/interfaces";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Loading from "../loading";
import TiemposEsperaPopup from "./components/TiemposEsperaPopup";
import HorariosAtencionPopup from "./components/HorariosAtencionPopup";

export default function GretaPage() {
    const { data: session } = useSession();
    const [showPopupTiempos, setShowPopupTiempos] = useState(false);
    const [showPopupHorarios, setShowPopupHorarios] = useState(false);

    if (!session) {
        return (
            <Loading />
        );
    }

    const handleActionClick = (accionId: string, href: string) => {
        if (accionId === "tiempos-espera") {
            setShowPopupTiempos(true);
        } else if (accionId === "horarios-atencion") {
            setShowPopupHorarios(true);
        } else {
            // Para enlaces externos o internos válidos
            window.open(href, "_blank");
        }
    };

    return (
        <>
            <main className="w-full p-5 animate-fadeIn">
                <article className="flex flex-col items-center justify-center gap-15 w-full max-w-6xl mx-auto py-5">
                    <section className="w-full bg-neutral-950">
                        <div className="text-center py-5 px-7">
                            <h2 className="text-xl font-black text-white">Mesa de Ayuda | Greta</h2>
                            <p className="text-base font-bold text-neutral-400">
                                Aquí encontrarás una serie de opciones rápidas que puedes consultar para conocer más sobre nuestra área.
                            </p>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 max-w-3xl mx-auto">
                            {acciones.map((accion) => (
                                <div
                                    key={accion.id}
                                    onClick={() => handleActionClick(accion.id, accion.href)}
                                    className="group flex-1 flex items-center flex-col gap-3 pb-3 border border-neutral-800 rounded-xl hover:translate-2 transition-all duration-200 relative overflow-hidden cursor-pointer"
                                >
                                    <Image
                                        src={accion.imagen}
                                        alt={accion.imageAlt}
                                        width={256}
                                        height={128}
                                        className="rounded-t-xl w-full h-32 object-cover object-top mask-bottom"
                                        priority
                                        quality={100}
                                    />
                                    <h2 className="text-base font-black text-white z-10">{accion.titulo}</h2>

                                    {/* Descripción al hacer hover */}
                                    <p className="absolute top-0 bottom-0 px-4 py-2 text-sm text-white bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center flex items-center justify-center">
                                        {accion.descripcion}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Sección de Tips tecnológicos */}
                    <section className="w-full">
                        <div className="text-center py-5 px-7">
                            <h2 className="text-xl font-black text-white">Tips tecnológicos</h2>
                            <p className="text-base font-bold text-neutral-400">
                                Descubre consejos o tips prácticos para mejorar tu productividad y seguridad digital.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {tipsTecnologicos.map((tip) => (
                                <div key={tip.id} className="flex flex-col items-start gap-3 border border-neutral-800 rounded-xl hover:scale-105 transition-all duration-200">
                                    <Image
                                        src={tip.imagen}
                                        alt={tip.imageAlt}
                                        width={1000}
                                        height={208}
                                        className="rounded-t-xl w-full h-52 object-cover object-center mask-bottom"
                                        priority
                                        quality={100}
                                    />
                                    <section className="flex items-center gap-3 px-5 w-full">
                                        <div className="bg-neutral-700 rounded-full p-2">
                                            <p className="text-xs font-bold text-white">{tip.categoriaAbrev}</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-black text-white">{tip.titulo}</p>
                                        </div>
                                    </section>
                                    <section className="px-5 pb-3">
                                        <p className="text-sm text-neutral-500">
                                            {tip.descripcion}
                                        </p>
                                    </section>
                                </div>
                            ))}
                        </div>
                    </section>
                </article>
            </main>

            {/* Popup de Tiempos de Espera */}
            <TiemposEsperaPopup
                isOpen={showPopupTiempos}
                onClose={() => setShowPopupTiempos(false)}
            />

            {/* Popup de Horarios de Atención */}
            <HorariosAtencionPopup
                isOpen={showPopupHorarios}
                onClose={() => setShowPopupHorarios(false)}
            />
        </>
    )
}
