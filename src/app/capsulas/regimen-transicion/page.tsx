import Link from "next/link";

export default function RegimenTransicionPage() {
    return (
        <main className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-15 w-full max-w-4xl mx-auto">
                <section className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <header className="flex flex-col gap-3 sm:gap-4 border border-neutral-600 rounded-xl p-4 sm:p-6 lg:p-8">
                        <p className="text-xs sm:text-sm text-center font-bold text-neutral-500">
                            {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
                            Régimen de transición Ley 2381 de 2024
                        </h1>
                        <p className="text-sm sm:text-base font-bold text-neutral-400 leading-relaxed">
                            Aunque la Corte Constitucional aún no ha emitido sentencia sobre las 12 demandas de inconstitucionalidad contra la Ley 2381 de 2024 (reforma pensional), se considera importante avanzar en la preparación ante su posible entrada en vigencia el 1 de julio de 2025.
                        </p>
                    </header>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            De acuerdo con lo anterior, hemos iniciado un proceso de recolección de información para identificar a los colaboradores que podrían estar cobijados por el régimen de transición establecido en el artículo 75 de la ley. Este régimen aplica a quienes, al 1 de julio de 2025, cumplan con:
                        </p>
                        <div className="flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">1.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">750 semanas cotizadas</span> para mujeres.</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">2.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">900 semanas cotizadas</span> para hombres.</span>
                                </h3>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Esta información es crucial para definir el destino de los aportes a pensión:
                        </p>
                        <div className="flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">1.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">Colaboradores en transición:</span> aportes se dirigirán exclusivamente a </span><span className="font-light text-white">Colpensiones.</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">2.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">Colaboradores no cobijados:</span> el destino de los aportes dependerá del</span><span className="font-light text-white">Ingreso Base de Cotización (IBC).</span>
                                </h3>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Solicitamos que, a más tardar el 30 de mayo de 2025, cada colaborador:
                        </p>
                        <div className="flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">1.</span>
                                    <span className="leading-tight font-light text-neutral-500">Informe si cumple con el número mínimo de semanas cotizadas al <span className="font-light text-white">1 de julio de 2025.</span></span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">2.</span>
                                    <span className="leading-tight font-light text-neutral-500">En caso afirmativo, <span className="font-light text-white">envíe la certificación oficial de semanas cotizadas</span> a comunicaciones@esece.com, expedida por la entidad correspondiente (Colpensiones, fondo privado u otra).</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">3.</span>
                                    <span className="leading-tight font-light text-neutral-500">Si <span className="font-light text-white">no cumple con el requisito o no tiene certeza,</span> indíquelo también en el formulario.</span>
                                </h3>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            ¡Haz clic {" "}
                            <Link
                                href="https://forms.office.com/pages/responsepage.aspx?id=EMzAYcHr-0CzL97xxmpAPDWNi77CuhVDvBGleffS4IVUOFlHVlkyWU85U0FCSUxTOU9SS1VJNDMyWS4u&route=shorturl"
                                target="_blank"
                                className="text-blue-500 hover:underline"
                            >
                                aquí
                            </Link> y diligencia el formulario!
                        </p>
                    </section>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Si tienes alguna duda o requieres apoyo en la gestión del documento, escribe al correo: talentohumano@esece.com
                        </p>
                    </section>
                </section>
            </article>
        </main>
    )
}
