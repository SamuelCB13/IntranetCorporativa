import Link from "next/link";

export default function DirectorioAreasPage() {
    const areas = [
        {
            nombre: "Administración",
            ubicacion: "Piso 5",
            correos: [
                "infraestructura@bpogs.com",
                "Aguacatala: auxiliar@bpogs.com",
                "Andes: auxiliarandes@bpogs.com",
                "Patio bonito: auxiliarpatiobonito@bpogs.com"
            ]
        },
        {
            nombre: "Bienestar",
            ubicacion: "Piso 4",
            correos: [
                "fevergara@bpogs.com",
                "dhenao@bpogs.com",
                "paposada@bpogs.com"
            ]
        },
        {
            nombre: "Formación",
            ubicacion: "Piso 4 (Bahía del fondo de la operación)",
            correos: [
                "gatilano@bpogs.com",
                "agiraldo@bpogs.com"
            ]
        },
        {
            nombre: "Seguridad y Salud en el trabajo",
            ubicacion: "Piso 4",
            correos: [
                "sst@bpogs.com"
            ]
        },
        {
            nombre: "Selección",
            ubicacion: "Piso 4",
            correos: [
                "seleccion@bpogs.com"
            ]
        },
        {
            nombre: "Marketing",
            ubicacion: "Piso 4",
            correos: [
                "comunicaciones@bpogs.com",
                "lurrea@bpogs.com"
            ]
        },
        {
            nombre: "Talento Humano",
            ubicacion: "Piso 5",
            correos: [
                "talentohumano@bpogs.com",
                "analistarh@bpogs.com",
                "contratacion@bpogs.com",
                "rh@bpogs.com"
            ]
        },
        {
            nombre: "Tecnología / Soporte",
            ubicacion: "Piso 3",
            correos: [
                "Greta@bpogs.com"
            ]
        }
    ];

    return (
        <main className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 animate-fadeIn">
            <article className="flex flex-col items-center justify-center gap-8 sm:gap-12 lg:gap-15 w-full max-w-4xl mx-auto">
                <section className="w-full flex flex-col gap-6 sm:gap-8 lg:gap-10">
                    <header className="flex flex-col gap-3 sm:gap-4 border border-neutral-600 rounded-xl p-4 sm:p-6 lg:p-8">
                        <p className="text-xs sm:text-sm text-center font-bold text-neutral-500">
                            {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
                            Directorio de áreas: Encuentra, conecta y consulta
                        </h1>
                        <p className="text-sm sm:text-base font-bold text-neutral-400 leading-relaxed">
                            Información de contacto y ubicación de todas las áreas y departamentos de BPO Global Services en la sede de Aguacatala.
                        </p>
                    </header>

                    <section className="border border-neutral-600 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full table-fixed">
                                <colgroup>
                                    <col className="w-3/10" />
                                    <col className="w-3/10" />
                                    <col className="w-2/5" />
                                </colgroup>
                                <thead>
                                    <tr className="border-b border-neutral-600">
                                        <th className="text-center p-4 sm:p-6 text-sm sm:text-base font-black text-white">
                                            Área / Departamento
                                        </th>
                                        <th className="text-center p-4 sm:p-6 text-sm sm:text-base font-black text-white">
                                            Ubicación Aguacatala
                                        </th>
                                        <th className="text-center p-4 sm:p-6 text-sm sm:text-base font-black text-white">
                                            Correos de contacto
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {areas.map((area, index) => (
                                        <tr key={index} className={`border-b border-neutral-700 ${index % 2 === 0 ? 'bg-neutral-900/30' : 'bg-neutral-800/30'}`}>
                                            <td className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-white align-center text-center">
                                                {area.nombre}
                                            </td>
                                            <td className="p-4 sm:p-6 text-xs sm:text-sm font-bold text-neutral-400 bg-neutral-900 align-center text-center">
                                                {area.ubicacion}
                                            </td>
                                            <td className="p-4 sm:p-6 text-xs sm:text-sm font-light text-neutral-400 align-center">
                                                <div className="flex flex-col gap-1">
                                                    {area.correos.map((correo, correoIndex) => (
                                                        <div key={correoIndex}>
                                                            <Link
                                                                href={`mailto:${correo.includes(':') ? correo.split(': ')[1] : correo}`}
                                                                className="text-neutral-500 hover:underline hover:text-neutral-300 transition-colors"
                                                            >
                                                                {correo}
                                                            </Link>
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Para mayor información o consultas adicionales, puedes contactarnos directamente a través de los correos electrónicos listados según el área de tu interés.
                        </p>
                    </section>

                    <section className="flex flex-col gap-4 sm:gap-6">
                        <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
                            Si tienes alguna duda sobre la ubicación de las áreas o necesitas direcciones específicas, escribe al correo: comunicaciones@bpogs.com
                        </p>
                    </section>
                </section>
            </article>
        </main>
    );
}
