"use client";

import Image from "next/image";
import { ultimasVacantes } from "./components/interfaces";
import { useSession } from "next-auth/react";
import Loading from "../loading";
import { AlertCircleIcon, CheckIcon, CircleDollarSignIcon, MapPinIcon } from "lucide-react";

export default function BeneficiosPage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Loading />
        );
    }

    return (
        <main className="w-full p-5 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-15 w-full max-w-6xl mx-auto py-5">
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
                                    <p className="max-sm:col-span-2 text-sm text-neutral-500 w-full">
                                        {vacante.funciones}
                                    </p>
                                    <p className="flex items-center gap-1 text-sm text-white bg-neutral-900 border border-zinc-700 px-2 py-1 rounded-md">
                                        {vacante.ubicacion} <MapPinIcon className="size-4" />
                                    </p>
                                    <p className="flex items-center gap-1 text-sm text-[#0099ff] bg-[#030320] border border-blue-950 px-2 py-1 rounded-md">
                                        {vacante.contrato} <CheckIcon className="size-4" />
                                    </p>
                                    <p className="flex items-center gap-1 text-sm text-[#00ff00] bg-[#032003] border border-green-900 px-2 py-1 rounded-md">
                                        {vacante.salario} <CircleDollarSignIcon className="size-4" />
                                    </p>
                                    {vacante.urgencia && (
                                        <p className="flex items-center gap-1 text-sm text-[#ff0000] bg-[#220404] border border-red-950 px-2 py-1 rounded-md">
                                            <AlertCircleIcon className="size-4" /> {vacante.urgencia}
                                        </p>
                                    )}
                                </section>
                            </div>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    )
}
