import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, CrownIcon } from "lucide-react";
import { capsulasInformativas, quienesSomosData, valoresData } from "./interface";

export default function HomePage() {
    return (
        <main className="w-full p-5">
            <article className="flex flex-col items-center justify-center gap-15 w-full max-w-6xl mx-auto py-5">
                <section className="w-full bg-neutral-950 border border-neutral-800 rounded-xl hover:translate-2 transition-all duration-200">
                    <Link
                        href={"#"}
                        className="flex flex-col md:flex-row md:items-center justify-between gap-10 py-5 px-7"
                    >
                        <div className="flex-1 flex items-start flex-col gap-3">
                            <h2 className="text-xl font-black text-white">¡Anota un gol y gana!</h2>
                            <p className="text-base font-bold text-neutral-400">¿Conoces a alguien bilingüe que esté buscando trabajo?</p>
                            <h2 className="text-xl font-black text-white">¡Refiérelo y gana!</h2>
                            <ol className="space-y-4 text-neutral-500 list-disc list-inside">
                                <li className="leading-relaxed text-sm">
                                    Gana $100.000 cuando la persona firme el contrato: recibe otros $100.000 si pasa el período de prueba.
                                </li>
                                <li className="leading-relaxed text-sm">
                                    ¡Pero eso no es todo!, si refieres a alguien que hable español y es contratado, ¡también podrás ganar $100.000!
                                </li>
                            </ol>
                            <p className="flex items-center gap-1 bg-white font-semibold text-sm border w-auto my-2 py-2 px-3 rounded-lg">
                                Ganar con Bpogs es así de sencillo
                                <CrownIcon className="size-5" />
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src="/referidos.webp"
                                alt="Referidos Image"
                                width={512}
                                height={256}
                                className="rounded-t-xl w-full h-64 object-cover object-top mask-bottom"
                                priority
                                quality={100}
                            />
                        </div>
                    </Link>
                </section>

                {/* Sección de Cápsulas informativas */}
                <section className="w-full">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Cápsulas informativas</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Explora nuestras cápsulas informativas para estar informado de las últimas novedades y consejos útiles.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {capsulasInformativas.map((capsula) => (
                            <div key={capsula.id} className="flex flex-col items-start gap-3 border border-neutral-800 rounded-xl hover:scale-105 transition-all duration-200">
                                <Image
                                    src={capsula.imagen}
                                    alt={capsula.imageAlt}
                                    width={1000}
                                    height={208}
                                    className="rounded-t-xl w-full h-52 object-cover object-center mask-bottom"
                                    priority
                                    quality={100}
                                />
                                <section className="flex items-center gap-3 px-5 w-full">
                                    <div className="bg-neutral-700 rounded-full p-2">
                                        <p className="text-xs font-bold text-white">{capsula.categoriaAbrev}</p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-black text-white">{capsula.titulo}</p>
                                    </div>
                                </section>
                                <section className="px-5">
                                    <p className="text-sm text-neutral-500">
                                        {capsula.descripcion}
                                    </p>
                                </section>
                                <section className="px-5 pb-3">
                                    <Link
                                        href={capsula.href}
                                        className="flex items-center gap-1 text-base font-bold text-neutral-400 hover:underline hover:text-white transition-all duration-200"
                                    >
                                        Ver más
                                        <ArrowUpRightIcon className="size-4" />
                                    </Link>
                                </section>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Sección de Quiénes somos - Dinámica */}
                <section className="w-full max-w-5xl">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">¿Quiénes somos?</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Conoce más sobre nosotros, nuestra visión y misión. Estamos comprometidos con la excelencia y la innovación.
                        </p>
                    </div>

                    {quienesSomosData.map((somos, index) => (
                        <div
                            key={somos.id}
                            className={`flex flex-col md:flex-row md:items-center justify-between gap-10 my-10 ${somos.posicion === 'izquierda'
                                ? 'border-r-3 border-neutral-800'
                                : 'border-l-3 border-neutral-800'
                                } ${index === quienesSomosData.length - 1 ? 'mb-0' : ''}`}
                        >
                            {/* Contenido */}
                            <div className={`flex-1 flex items-start flex-col gap-3 ${somos.posicion === 'izquierda' ? 'md:order-2' : 'md:order-1'
                                }`}>
                                <section className="px-5">
                                    <p className="text-xl font-black text-white">{somos.titulo}</p>
                                </section>
                                <section className="px-5">
                                    <p className="text-sm text-neutral-500">
                                        {somos.descripcion}
                                    </p>
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

                {/* Sección de Valores - Ahora dinámica */}
                <section className="w-full">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Nuestros valores</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Conoce más sobre nuestros valores, que son la base de nuestra cultura y nos guían en cada acción que realizamos.
                        </p>
                    </div>

                    {/* Grid responsive de valores */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-6 py-8">
                        {valoresData.map((valor) => (
                            <div
                                key={valor.id}
                                className="flex flex-col items-center justify-center gap-3 p-4 grayscale hover:grayscale-0 hover:scale-105 transition-all duration-200"
                            >
                                <div className="size-16 md:size-20 flex items-center justify-center">
                                    <Image
                                        src={valor.icono}
                                        alt={valor.iconoAlt}
                                        width={64}
                                        height={64}
                                        className="w-full h-full aspect-square object-contain"
                                        priority
                                        quality={100}
                                    />
                                </div>
                                <p className="text-xs md:text-sm font-bold text-neutral-500 text-center">
                                    {valor.titulo}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
