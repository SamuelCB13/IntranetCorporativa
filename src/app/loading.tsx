export default function Loading() {
    return (
        <main className="min-h-screen flex items-center justify-center w-full px-4 py-6 sm:px-6 md:py-12">
            <article className="absolute inset-0 -z-10 h-full w-full bg-neutral-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <section className="absolute left-0 right-0 -z-10 m-auto h-64 w-64 sm:h-96 sm:w-96 md:h-[500px] md:w-[500px] rounded-full bg-neutral-800 opacity-20 blur-[100px]"></section>
            </article>
            <article className="animate-fadeIn w-full max-w-md md:max-w-lg text-white flex flex-col items-center justify-center text-center gap-4 sm:gap-6 md:gap-7 p-5 sm:p-6 md:p-8 bg-neutral-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-2xl border border-neutral-700">
                <h1 className="text-white text-xl font-bold">Cargando...</h1>
            </article>
        </main>
    )
}
