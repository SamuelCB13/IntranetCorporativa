export default function EvaluacionDesempenoPage() {
    return (
        <main className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-15 w-full max-w-4xl mx-auto">
                <section className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <header className="flex flex-col gap-3 sm:gap-4 border border-neutral-600 rounded-xl p-4 sm:p-6 lg:p-8">
                        <p className="text-xs sm:text-sm text-center font-bold text-neutral-500">
                            {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
                            Estamos en épocas de evaluación de desempeño
                        </h1>
                        <p className="text-sm sm:text-base font-bold text-neutral-400 leading-relaxed">
                            Del 26 al 09 de mayo, se estará llevando a cabo el proceso de evaluaciones de desempeño,
                            una herramienta clave para el desarrollo individual y colectivo. Este momento del año es
                            una oportunidad para reflexionar, reconocer y proyectar mejoras que beneficien tanto a los
                            colaboradores como a la empresa.
                        </p>
                    </header>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <h2 className="text-center text-base sm:text-lg md:text-xl font-black text-white leading-tight">
                            ¿Por qué son importantes las evaluaciones de desempeño?
                        </h2>

                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Las evaluaciones no son solo un requisito institucional; son una vía para construir un
                            entorno laboral más transparente, justo y orientado al crecimiento. Aquí te compartimos
                            algunas razones por las que tu participación es fundamental:
                        </p>

                        <div className="flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">1.</span>
                                    <span className="leading-tight">Espacio para la retroalimentación</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 ml-4 sm:ml-6 leading-relaxed">
                                    Permiten dialogar abiertamente sobre logros, desafíos y oportunidades de mejora.
                                    Escuchar y ser escuchado fortalece la relación entre líderes y equipos, creando
                                    una cultura de confianza.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">2.</span>
                                    <span className="leading-tight">Reconocer y valorar el esfuerzo</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 ml-4 sm:ml-6 leading-relaxed">
                                    Es el momento para destacar el compromiso, la actitud y el aporte de cada persona
                                    al cumplimiento de los objetivos organizacionales. Reconocer lo positivo motiva
                                    e impulsa el rendimiento.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">3.</span>
                                    <span className="leading-tight">Identificar oportunidades de desarrollo</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 ml-4 sm:ml-6 leading-relaxed">
                                    Gracias a este proceso, es posible detectar habilidades que pueden potenciarse y áreas donde se requiere apoyo o capacitación, lo que permite planear acciones de formación adaptadas a cada perfil.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">4.</span>
                                    <span className="leading-tight">Alinear expectativas</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 ml-4 sm:ml-6 leading-relaxed">
                                    Evaluar el desempeño facilita que todos tengamos claridad sobre las metas del rol y cómo cada uno contribuye al propósito global de la organización.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">5.</span>
                                    <span className="leading-tight">Tomar decisiones informadas</span>
                                </h3>
                                <p className="text-xs sm:text-sm text-neutral-500 ml-4 sm:ml-6 leading-relaxed">
                                    La información obtenida durante este periodo será clave para tomar decisiones justas y objetivas sobre desarrollo profesional, promociones, planes de carrera y reconocimientos.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:gap-4">
                            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                                Invitamos a todos los colaboradores a participar activamente en este proceso hasta el 9 de junio.
                                Tómate el tiempo para reflexionar sobre tu desempeño laboral, recibir retroalimentación y compartir
                                tus expectativas de crecimiento.
                            </p>
                            <p className="text-xs sm:text-sm font-extrabold text-neutral-400 leading-relaxed">
                                Construir una organización más sólida empieza por reconocer nuestras fortalezas y comprometernos
                                con nuestras oportunidades de mejora.
                            </p>
                        </div>
                    </section>
                </section>
            </article>
        </main>
    )
}
