export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center gap-5 min-h-dvh bg-neutral-950">
            <div className="relative animate-fadeIn">
                <div className="relative size-12 sm:size-16 md:size-20">
                    <div
                        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-r-blue-400 border-b-blue-400 animate-spin"
                        style={{ animationDuration: '2s' }}
                    ></div>

                    <div
                        className="absolute w-full h-full rounded-full border-[3px] border-gray-100/10 border-t-blue-400 animate-spin"
                        style={{ animationDuration: '2s', animationDirection: 'reverse' }}
                    ></div>
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 via-transparent to-blue-400/5 animate-pulse rounded-full blur-sm"
                ></div>
            </div>
            <div className="flex items-center justify-center animate-fadeIn">
                <span className="text-white text-sm sm:text-md md:text-lg font-black">Cargando...</span>
            </div>
        </div>
    )
}
