export default function SeparacionResiduosPage() {
    return (
        <main className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-15 w-full max-w-4xl mx-auto">
                <section className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <header className="flex flex-col gap-3 sm:gap-4 border border-neutral-600 rounded-xl p-4 sm:p-6 lg:p-8">
                        <p className="text-xs sm:text-sm text-center font-bold text-neutral-500">
                            {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
                            Separación de residuos: un compromiso con el planeta y nuestro entorno
                        </h1>
                        <p className="text-sm sm:text-base font-bold text-neutral-400 leading-relaxed">
                            En nuestra organización, estamos comprometidos con el cuidado del medio ambiente. Una de las acciones más importantes que podemos realizar en nuestro día a día es la correcta separación de residuos, lo cual reduce el impacto ambiental, optimizar los procesos de reciclaje y contribuir al bienestar colectivo.
                        </p>
                    </header>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <h2 className="text-center text-base sm:text-lg md:text-xl font-black text-white leading-tight">
                            ¿Por qué es importante separar los residuos?
                        </h2>

                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Separar adecuadamente los residuos en los puntos ecológicos no solo facilita el trabajo de recicladores y gestores ambientales, sino que también:
                        </p>

                        <div className="flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">1.</span>
                                    <span className="leading-tight font-light text-neutral-500">Reduce la contaminación del suelo, aire y agua.</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">2.</span>
                                    <span className="leading-tight font-light text-neutral-500">Disminuye la cantidad de residuos que llegan a los rellenos sanitarios.</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">3.</span>
                                    <span className="leading-tight font-light text-neutral-500">Permite el aprovechamiento de materiales reciclables, dándoles una segunda vida útil.</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">4.</span>
                                    <span className="leading-tight font-light text-neutral-500">Apoya causas solidarias, como la recolección de tapitas para programas sociales y de salud.</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">5.</span>
                                    <span className="leading-tight font-light text-neutral-500">Fomenta una cultura organizacional sostenible, alineada con valores de responsabilidad y conciencia ambiental.</span>
                                </h3>
                            </div>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <h2 className="text-center text-base sm:text-lg md:text-xl font-black text-white leading-tight">
                            ¿Cómo separar correctamente?
                        </h2>

                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            En nuestras instalaciones contamos con canecas de colores, cada una con una función específica:
                        </p>

                        <div className="flex flex-col gap-4 sm:gap-5 ml-2 sm:ml-4">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">1.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">🟢 Caneca verde:</span> Residuos orgánicos (restos de comida, servilletas usadas).</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">2.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">⚪ Caneca blanca:</span> Residuos reciclables limpios y secos (plásticos, papel, cartón, vidrio).</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">3.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">⚫ Caneca negra:</span> Residuos no reciclables o contaminados (icopor, empaques sucios, papel higiénico).</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">4.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">🔵 Caneca azul (disponible en algunos sites):</span> Exclusivamente para botellas plásticas.</span>
                                </h3>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h3 className="text-xs sm:text-sm font-black text-white flex items-center gap-2">
                                    <span className="text-neutral-400 flex-shrink-0">5.</span>
                                    <span className="leading-tight font-light text-neutral-500"><span className="font-black text-white">🟡 Recipiente especial para tapitas:</span> Súmate a nuestra campaña solidaria recolectando tapitas de botellas.</span>
                                </h3>
                            </div>
                        </div>

                        <p className="text-center text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            ¡Tu rol es clave!
                        </p>
                    </section>
                </section>
            </article>
        </main>
    )
}
