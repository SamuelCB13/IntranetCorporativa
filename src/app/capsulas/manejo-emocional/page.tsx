export default function ManejoEmocionalPage() {
    return (
        <main className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-15 w-full max-w-4xl mx-auto">
                <section className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <header className="flex flex-col gap-3 sm:gap-4 border border-neutral-600 rounded-xl p-4 sm:p-6 lg:p-8">
                        <p className="text-xs sm:text-sm text-center font-bold text-neutral-500">
                            {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
                            El Arte de Manejar las Emociones: Clave para el Bienestar Personal
                        </h1>
                        <p className="text-sm sm:text-base font-bold text-neutral-400 leading-relaxed">
                            Las emociones forman parte esencial de la experiencia. Alegría, tristeza, enojo, miedo o sorpresa son respuestas naturales ante lo que vivimos día a día. Sin embargo, lo que realmente marca la diferencia en nuestro bienestar y nuestras relaciones no es lo que sentimos, sino cómo manejamos eso que sentimos.
                        </p>
                    </header>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            El manejo de las emociones, también conocido como inteligencia emocional, implica reconocer lo que estamos sintiendo, entender por qué lo sentimos y actuar de manera consciente, sin dejarnos arrastrar por impulsos. No se trata de reprimir o negar las emociones, sino de darles un espacio saludable para expresarse y canalizarse.
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Aprender a gestionar las emociones mejora la comunicación, reduce conflictos, aumenta la empatía y nos ayuda a tomar mejores decisiones. Por ejemplo, una persona que sabe controlar su enojo evita discusiones innecesarias, mientras que alguien que comprende su tristeza puede buscar apoyo antes de caer en el aislamiento.
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Manejar las emociones no significa ser indiferente o insensible. Al contrario, implica una conexión más profunda con uno mismo y con los demás. Significa ser capaz de sentir plenamente, pero también de reflexionar sobre esas sensaciones y actuar de manera constructiva.
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Existen diversas estrategias para desarrollar esta habilidad: la meditación, la escritura emocional, la práctica de la escucha activa o el simple hábito de detenerse a respirar profundamente en momentos de tensión. También es útil pedir ayuda profesional cuando las emociones se vuelven difíciles de manejar.
                        </p>
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            En resumen, manejar las emociones no significa dejar de sentir, sino aprender a vivir lo que sentimos con conciencia, equilibrio y responsabilidad. Es un proceso que requiere práctica, pero cuyos resultados pueden transformar profundamente nuestra vida.
                        </p>
                    </section>
                </section>
            </article>
        </main>
    )
}
