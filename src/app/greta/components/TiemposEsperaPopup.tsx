import { ClockIcon, XIcon } from "lucide-react";
import { horarioAtencion, tiempoRespuesta, definicion, TiemposEsperaPopupProps } from "./interfaces";

// Función utilitaria para formatear prioridades
const formatearPrioridad = (tipo: string, prioridad: string): string => {
    const tipoCapitalizado = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    const prioridadCapitalizada = prioridad.charAt(0).toUpperCase() + prioridad.slice(1);
    return `${tipoCapitalizado} - Prioridad ${prioridadCapitalizada.toLowerCase()}`;
};

// Función utilitaria para obtener color de prioridad
const obtenerColorPrioridad = (prioridad: string): string => {
    const colores = {
        alta: "text-red-400",
        media: "text-yellow-400",
        baja: "text-green-400"
    };
    return colores[prioridad as keyof typeof colores] ?? "text-neutral-300";
};

export default function TiemposEsperaPopup({
    isOpen,
    onClose,
    tiemposRespuesta = tiempoRespuesta,
    horariosAtencion = horarioAtencion,
    definiciones = definicion
}: TiemposEsperaPopupProps) {
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
                            Tiempos de Espera
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
                            <div className="grid gap-4 md:grid-cols-2">
                                {definiciones.map((definicion, index) => (
                                    <div key={index} className="space-y-2">
                                        <dt className="text-white font-semibold">
                                            {definicion.termino}:
                                        </dt>
                                        <dd className="text-neutral-300 text-sm leading-relaxed">
                                            {definicion.descripcion}
                                        </dd>
                                    </div>
                                ))}
                            </div>

                            {/* Tabla de tiempos de respuesta */}
                            <div className="border border-neutral-800 rounded-lg overflow-hidden">
                                <table className="w-full" role="table" aria-label="Tiempos de respuesta por prioridad">
                                    <thead>
                                        <tr className="text-white font-semibold bg-neutral-900">
                                            <th
                                                className="p-3 text-left border-b border-neutral-800"
                                                scope="col"
                                                colSpan={2}
                                            >
                                                Prioridad
                                            </th>
                                            <th
                                                className="p-3 text-left border-b border-neutral-800"
                                                scope="col"
                                            >
                                                Tiempo de respuesta
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tiemposRespuesta.map((tiempo) => (
                                            <tr key={tiempo.id} className="border-b border-neutral-800 last:border-b-0">
                                                <td
                                                    className="p-3 text-sm"
                                                    colSpan={2}
                                                >
                                                    <span className={obtenerColorPrioridad(tiempo.prioridad)}>
                                                        {formatearPrioridad(tiempo.tipo, tiempo.prioridad)}
                                                    </span>
                                                </td>
                                                <td className="p-3 text-sm font-medium text-white">
                                                    {tiempo.tiempo}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* Horario de atención */}
                    <section aria-labelledby="horarios-title">
                        <h2 id="horarios-title" className="text-white text-lg font-bold mb-3">
                            Horario de atención del servicio
                        </h2>
                        <div className="border border-neutral-800 rounded-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[600px]" role="table" aria-label="Horarios de atención por medio de contacto">
                                    <thead>
                                        <tr className="text-white font-semibold bg-neutral-900">
                                            <th className="w-1/4 p-3 text-left border-b border-neutral-800" scope="col">
                                                Medio de ingreso
                                            </th>
                                            <th className="w-1/4 p-3 text-left border-b border-neutral-800" scope="col">
                                                Horario
                                            </th>
                                            <th className="w-1/4 p-3 text-left border-b border-neutral-800" scope="col">
                                                Días
                                            </th>
                                            <th className="w-1/4 p-3 text-left border-b border-neutral-800" scope="col">
                                                Observaciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {horariosAtencion.map((horario) => (
                                            <tr key={horario.id} className="border-b border-neutral-800 last:border-b-0">
                                                <td className="w-1/4 text-left p-3 text-sm font-medium text-white">
                                                    {horario.medioIngreso}
                                                </td>
                                                <td className="w-1/4 text-left p-3 text-sm">
                                                    {horario.horario}
                                                </td>
                                                <td className="w-1/4 text-left p-3 text-sm">
                                                    {horario.dias}
                                                </td>
                                                <td className="w-1/4 text-left p-3 text-sm">
                                                    {horario.observaciones}
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
