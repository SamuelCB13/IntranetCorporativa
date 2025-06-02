import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Providers from "./Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Intranet Corporativa | Red social para empleados activos.",
    keywords: ["intranet", "red social", "empleados", "corporativa"],
    description: "Intranet Corporativa: Conecta a los empleados activos de la empresa con una red social interna.",
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
                    <div className="flex h-screen overflow-hidden">
                        {/* Sidebar fijo */}
                        <Sidebar />

                        {/* Contenido principal */}
                        <div className="flex flex-col flex-1 overflow-hidden">
                            <Navbar />
                            <main className="flex-1 overflow-y-auto bg-neutral-950">
                                {children}
                            </main>
                        </div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
