"use client";

import Image from "next/image";
import { HeadsetIcon } from "lucide-react";
import Carousel from "./components/Carousel";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import Link from "next/link";

export default function TalentoHumanoPage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Loading />
        )
    }

    return (
        <main className="w-full p-5 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-15 w-full max-w-6xl mx-auto py-5">
                <section className="w-full bg-neutral-950 border border-neutral-800 rounded-xl">
                    <div
                        className="flex flex-col md:flex-row md:items-center justify-between gap-10 py-5 px-7"
                    >
                        <div className="flex-1 flex items-start flex-col gap-3">
                            <h2 className="text-xl font-black text-white">¡Audio boletín Esece!</h2>
                            <p className="text-base font-bold text-neutral-400">Conecta aquí con información de tu interés.</p>
                            <ol className="space-y-4 text-neutral-500 list-disc list-inside">
                                <li className="leading-relaxed text-sm">
                                    Escucha nuestro boletín semanal con noticias, eventos y novedades de Esece.
                                </li>
                                <li className="leading-relaxed text-sm">
                                    Participa en nuestras actividades y eventos para fortalecer la comunidad Esece.
                                </li>
                            </ol>
                            <p className="flex items-center gap-1 bg-neutral-800 font-medium text-xs sm:text-sm w-auto my-2 py-2 px-3 rounded-lg text-white">
                                ¡Escucha nuestro boletín semanal!
                                <HeadsetIcon className="size-5" />
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="flex-1"
                        >
                            <Image
                                src="/talento-humano/audio-boletin.webp"
                                alt="Referidos Image"
                                width={512}
                                height={256}
                                className="rounded-t-xl w-full h-64 object-cover object-center mask-bottom hover:translate-2 transition-all duration-200"
                                priority
                                quality={100}
                            />
                        </Link>
                    </div>
                </section>

                {/* Sección del carrusel */}
                <section className="w-full max-w-5xl">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Galería de Esece</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Conoce más sobre nosotros a través de nuestra galería de imágenes.
                        </p>
                    </div>
                    <Carousel />
                </section>

                {/* Sección de nuestro funcionamiento */}
                <section className="w-full max-w-5xl">
                    <header className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Nuestro Funcionamiento en Esece</h2>
                        <p className="text-sm lg:text-base font-bold text-neutral-400">
                            Conoce el reglamento que nos guía como Esece, las normas de nuestro equipo, los procesos de cada área, además de su relación y aporte a la empresa.
                        </p>
                    </header>
                    <article className="w-full flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10">
                        <section className="flex-1 flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-lg lg:text-xl font-black text-white">Política de Calidad</h2>
                                <p className="text-xs lg:text-sm font-bold text-neutral-400">Somos un aliado estratégico de las empresas que representamos, brindamos servicios de externalización de procesos de negocios (BPO) y contact center. Estamos comprometidos con la satisfacción de nuestros clientes, aportándoles soluciones  a la medida de sus necesidades, un servicio de calidad, puntual y efectivo, y mejorando continuamente nuestros procesos.</p>
                            </div>
                        </section>
                        <section className="flex-1 flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-lg lg:text-xl font-black text-white">Objetivos de Calidad</h2>
                                <ul className="list-disc text-xs lg:text-sm font-bold text-neutral-400">
                                    <li>Satisfacer las necesidades de los clientes.</li>
                                    <li>Aportar soluciones a la medida.</li>
                                    <li>Brindar servicios de calidad.</li>
                                    <li>Puntualidad en el servicio.</li>
                                    <li>Efectividad en el servicio.</li>
                                    <li>Mejorar continuamente los procesos.</li>
                                    <li>Prevenir y controlar riesgos</li>
                                </ul>
                            </div>
                        </section>
                    </article>
                </section>
            </article>
        </main>
    );
}
