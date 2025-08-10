import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./Providers";
import Buttons from "@/components/Buttons";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Intranet Esece | Red social para empleados activos o vinculados en la empresa",
    keywords: ["intranet", "red social", "empleados", "corporativa"],
    description: "Intranet Esece: Conecta a los empleados activos de la empresa con una red social interna.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Providers>
                    <div className="flex h-dvh">
                        {/* Sidebar fijo */}
                        <Sidebar />

                        {/* Contenido principal */}
                        <div className="flex flex-col flex-1">
                            <Navbar />
                            <main className="flex-1 overflow-y-scroll bg-neutral-950">
                                {children}
                                <Footer />
                            </main>
                        </div>

                        {/* Botones flotantes */}
                        <Buttons />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
