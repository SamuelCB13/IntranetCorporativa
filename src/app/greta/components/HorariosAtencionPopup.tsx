import { ClockIcon, XIcon } from "lucide-react";
import { informacionHorarios, HorarioAtencionPopupProps } from "./interfaces";

export default function HorariosAtencionPopup({
    isOpen,
    onClose,
    infoHorario = informacionHorarios,
}: HorarioAtencionPopupProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 min-h-screen animate-fadeIn"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <section className="bg-neutral-950 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-neutral-800">
                {/* Header */}
                <header className="flex items-center justify-between p-6 border-b border-neutral-800 sticky top-0 bg-neutral-950 z-10">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-500 rounded-full flex items-center justify-center">
                            <ClockIcon className="size-4 text-white" aria-hidden="true" />
                        </div>
                        <h1 id="popup-title" className="text-2xl font-black text-white">
                            Horarios de Atención
                        </h1>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-neutral-400 hover:text-white transition-colors p-2 hover:bg-neutral-800 rounded-md cursor-pointer"
                        aria-label="Cerrar popup"
                    >
                        <XIcon className="size-5" aria-hidden="true" />
                    </button>
                </header>

                {/* Body */}
                <main className="p-6 space-y-8 text-neutral-300 text-sm">
                    {/* Definiciones */}
                    <section aria-labelledby="definiciones-title">
                        <h2 id="definiciones-title" className="sr-only">Definiciones</h2>
                        <div className="space-y-4">
                            {/* Tabla de tiempos de respuesta */}
                            <div className="border border-neutral-800 rounded-lg overflow-hidden">
                                <table className="w-full" role="table" aria-label="Tiempos de respuesta por prioridad">
                                    <thead>
                                        <tr className="text-white font-semibold bg-neutral-900">
                                            <th
                                                className="w-2/4 p-3 text-center border-b border-neutral-800"
                                                scope="col"
                                            >
                                                Medio de contacto
                                            </th>
                                            <th
                                                className="w-2/4 p-3 text-center border-b border-neutral-800"
                                                scope="col"
                                            >
                                                Disponibilidad horaria
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {infoHorario.map((tiempo) => (
                                            <tr key={tiempo.id} className="border-b border-neutral-800 last:border-b-0">
                                                <td
                                                    className="w-2/4 p-3 text-sm"
                                                >
                                                    {<tiempo.icono className="inline-block mr-2 size-4" aria-hidden="true" />}
                                                    {tiempo.contacto}
                                                </td>
                                                <td className="w-2/4 p-3 text-sm">
                                                    {<tiempo.icono className="inline-block mr-2 size-4" aria-hidden="true" />}
                                                    {tiempo.disponibilidad}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="p-6 flex justify-end gap-3 border-t border-neutral-800 sticky bottom-0 bg-neutral-950">
                    <button
                        onClick={onClose}
                        className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-600 active:bg-neutral-400 px-4 py-2 rounded-lg text-white font-medium text-xs sm:text-sm transition-colors duration-200 focus:outline-none cursor-pointer"
                        aria-label="Cerrar popup de tiempos de espera"
                    >
                        <XIcon className="size-4" aria-hidden="true" />
                        Cerrar
                    </button>
                </footer>
            </section>
        </div>
    );
}
