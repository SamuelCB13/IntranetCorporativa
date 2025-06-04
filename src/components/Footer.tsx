"use client";

import Link from "next/link";
import Image from "next/image";
import { AiFillTikTok, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { useSession } from "next-auth/react";

export default function Footer() {
    const { data: session } = useSession();

    if (!session) {
        return null;
    }

    return (
        <main>
            {session && (
                <footer className="bg-neutral-950 text-white border-t border-neutral-800">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                        {/* Logo y nombre */}
                        <Link href="/" className=" flex-1 flex items-center justify-center">
                            <Image
                                src="/logofinal-blanco.webp"
                                alt="Logo de la aplicación"
                                width={100}
                                height={100}
                                quality={100}
                            />
                        </Link>

                        {/* Sección de usuario y menú móvil */}
                        <div className=" flex-1 flex items-center justify-center md:order-2 space-x-3 md:space-x-5 rtl:space-x-reverse">
                            {/* Botón de contacto */}
                            <Link
                                href="https://www.facebook.com/bpoglobalservices"
                                target="_blank"
                                className="text-neutral-500 hover:text-white font-bold rounded-full text-sm text-center transition duration-200"
                            >
                                <AiFillFacebook className="size-6" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/bpoglobalservices/"
                                target="_blank"
                                className="text-neutral-500 hover:text-white font-bold rounded-full text-sm text-center transition duration-200"
                            >
                                <AiFillInstagram className="size-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/bpoglobalservices-sas/"
                                target="_blank"
                                className="text-neutral-500 hover:text-white font-bold rounded-full text-sm text-center transition duration-200"
                            >
                                <AiFillLinkedin className="size-6" />
                            </Link>
                            <Link
                                href="https://www.tiktok.com/@bpoglobalservices"
                                target="_blank"
                                className="text-neutral-500 hover:text-white font-bold rounded-full text-sm text-center transition duration-200"
                            >
                                <AiFillTikTok className="size-6" />
                            </Link>
                        </div>

                        {/* Menú de navegación */}
                        <div
                            className=" flex-1 hidden items-center justify-center w-full lg:flex md:w-auto md:order-1 z-40"
                            id="navbar-menu"
                        >
                            <ul className="flex flex-col font-black py-2 md:p-0 mt-6 border border-neutral-700 rounded-xl bg-neutral-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-xl">
                                <p>BPO Global Services SAS.</p>
                            </ul>
                        </div>
                    </div>
                    <div className="max-w-screen-lg flex items-center justify-center mx-auto p-5 border-t border-neutral-800">
                        <p className="text-sm text-neutral-400 text-center">
                            © {new Date().getFullYear()} Todos los derechos reservados / All rights reserved.
                        </p>
                    </div>
                </footer>
            )}
        </main>
    );
}
