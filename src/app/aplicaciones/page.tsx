"use client";

import Link from "next/link";
import Image from "next/image";
import { Aplicaciones, aplicaciones } from "./components/interfaces";
import { useSession } from "next-auth/react";
import ArrowUpIcon from "../../../public/icons/arrowUpIcon";
import Loading from "../loading";

// Funciones helper para filtrar aplicaciones por sección
const getAplicacionesPorSeccion = (seccion: 'tic' | 'desarrollo' | 'reportes'): Aplicaciones[] => {
    return aplicaciones.filter(app => app.seccion === seccion);
};

// Componente de sección reutilizable
const SeccionAplicaciones = ({ titulo, descripcion, aplicaciones }: { titulo: string; descripcion: string; aplicaciones: Aplicaciones[]; }) => (
    <main>
        <div className="text-center pb-5 px-7">
            <h2 className="text-xl font-black text-white">{titulo}</h2>
            <p className="text-base font-bold text-neutral-400">{descripcion}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
            {aplicaciones.map((aplicacion) => (
                <Link
                    href={aplicacion.href}
                    target="_blank"
                    key={aplicacion.id}
                    className="flex flex-col items-start gap-3 border border-neutral-800 rounded-xl hover:bg-neutral-900 group transition-all duration-100 py-4">
                    <section className="flex items-center gap-3 px-5 w-full">
                        <div className="rounded-full relative size-10 group-hover:bg-white">
                            {/* Imagen por defecto */}
                            <Image
                                src={aplicacion.imagen}
                                alt="icono"
                                width={40}
                                height={40}
                                className="rounded-full size-10 absolute top-0 left-0 group-hover:hidden"
                            />

                            {/* Imagen que aparece al hacer hover */}
                            <ArrowUpIcon className="hidden absolute top-1 left-1 group-hover:block size-8" />
                        </div>
                        <div>
                            <p className="text-lg font-black text-white">{aplicacion.titulo}</p>
                        </div>
                    </section>
                    <section className="px-5">
                        <p className="text-sm text-neutral-500">
                            {aplicacion.descripcion}
                        </p>
                    </section>
                </Link>
            ))}
            {aplicaciones.length === 0 && (
                <p className="text-center text-neutral-700 col-span-full italic">
                    No hay aplicaciones o reportes disponibles en esta sección.
                </p>
            )}
        </div>
    </main>
);

export default function AplicacionesPage() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Loading />
        );
    }

    return (
        <main className="w-full p-5 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-15 w-full max-w-6xl mx-auto py-5">
                {/* Sección de Cápsulas informativas */}
                <section className="w-full">
                    <div className="text-center py-5 px-7">
                        <h2 className="text-xl font-black text-white">Aplicaciones Corporativas</h2>
                        <p className="text-base font-bold text-neutral-400">
                            Hola {session?.user?.name ?? 'Usuario'}, aquí podrás ver todas las herramientas necesarias para tus labores diarias. Encuentra tus herramientas de trabajo.
                        </p>
                    </div>

                    {/* Sección Aplicaciones TIC */}
                    <SeccionAplicaciones
                        titulo="Aplicaciones Tic"
                        descripcion="Herramientas tecnológicas para uso diario o a necesidad de los empleados."
                        aplicaciones={getAplicacionesPorSeccion('tic')}
                    />

                    {/* Sección Aplicaciones Desarrollo */}
                    <SeccionAplicaciones
                        titulo="Aplicaciones Desarrollo"
                        descripcion="Aplicaciones web o herramientas tecnológicas para uso diario o a necesidad de los empleados."
                        aplicaciones={getAplicacionesPorSeccion('desarrollo')}
                    />

                    {/* Sección Reportes */}
                    <SeccionAplicaciones
                        titulo="Reportes y Estadísticas"
                        descripcion="Herramientas informativas para uso diario o a necesidad de los empleados."
                        aplicaciones={getAplicacionesPorSeccion('reportes')}
                    />
                </section>
            </article>
        </main>
    )
}
