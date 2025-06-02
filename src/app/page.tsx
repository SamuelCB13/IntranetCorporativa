import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, CrownIcon } from "lucide-react";
import { capsulasInformativas } from "./interface";

export default function HomePage() {
    return (
        <main className="w-full p-5">
            <article className="flex flex-col items-center justify-center gap-5 w-full max-w-6xl mx-auto">
                <section className="w-full bg-neutral-950 border border-neutral-800 rounded-xl">
                    <Link
                        href={"/"}
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
                <section className="w-full bg-neutral-950 rounded-xl">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Cápsulas informativas</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Explora nuestras cápsulas informativas para estar informado de las últimas novedades y consejos útiles.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {capsulasInformativas.map((capsula) => (
                            <div key={capsula.id} className="flex flex-col items-start gap-3 border border-neutral-800 rounded-xl">
                                <Image
                                    src={capsula.imagen}
                                    alt={capsula.imageAlt}
                                    width={360}
                                    height={176}
                                    className="rounded-t-xl w-full h-44 object-cover object-top mask-bottom"
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
                                        className="flex items-center gap-1 text-sm font-semibold text-neutral-500 hover:underline hover:text-white transition-all duration-200"
                                    >
                                        Ver más
                                        <ArrowUpRightIcon className="size-4" />
                                    </Link>
                                </section>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
