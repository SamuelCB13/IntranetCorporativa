"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import FacebookIcon from "../../public/icons/facebookIcon";
import InstagramIcon from "../../public/icons/instagramIcon";
import LinkedInIcon from "../../public/icons/linkedInIcon";
import TikTokIcon from "../../public/icons/tiktokIcon";

export default function Footer() {
    const { data: session } = useSession();

    return (
        <main>
            {session && (
                <footer className="bg-neutral-950 text-white border-t border-neutral-800">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
                        {/* Logo y nombre */}
                        <Link href="/" className=" flex-1 flex items-center justify-center">
                            <Image
                                src="/esece-logo-claro.webp"
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
                                href="https://www.facebook.com/Samuel.Carvajal13"
                                target="_blank"
                                className="text-neutral-500 rounded-full text-sm text-center transition duration-200"
                            >
                                <FacebookIcon className="size-6" />
                            </Link>
                            <Link
                                href="https://www.instagram.com/sxmuelc99_/ "
                                target="_blank"
                                className="text-neutral-500 rounded-full text-sm text-center transition duration-200"
                            >
                                <InstagramIcon className="size-6" />
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/samuelcb13/"
                                target="_blank"
                                className="text-neutral-500 rounded-full text-sm text-center transition duration-200"
                            >
                                <LinkedInIcon className="size-6" />
                            </Link>
                            <Link
                                href="https://www.tiktok.com/@sxmuelc99_"
                                target="_blank"
                                className="text-neutral-500 rounded-full text-sm text-center transition duration-200"
                            >
                                <TikTokIcon className="size-6" />
                            </Link>
                        </div>

                        {/* Menú de navegación */}
                        <div
                            className=" flex-1 hidden items-center justify-center w-full lg:flex md:w-auto md:order-1 z-40"
                            id="navbar-menu"
                        >
                            <ul className="flex flex-col font-black py-2 md:p-0 mt-6 border border-neutral-700 rounded-xl bg-neutral-950 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent text-xl">
                                <p>Esece — Developing Dreams —</p>
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
