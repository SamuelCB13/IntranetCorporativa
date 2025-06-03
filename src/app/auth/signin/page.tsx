'use client';

import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { CircleAlertIcon } from "lucide-react";

export default function SignInPage() {

    return (
        <main className="min-h-screen flex items-center justify-center w-full px-4 py-6 sm:px-6 md:py-12">
            <article className="absolute inset-0 z-0 h-full w-full">
                <Image
                    src="/background.webp"
                    alt="Fondo"
                    fill
                    className="object-cover "
                    quality={100}
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <section className="absolute left-0 right-0 -z-10 m-auto h-64 w-64 sm:h-96 sm:w-96 md:h-[500px] md:w-[500px] rounded-full bg-neutral-800 opacity-20 blur-[100px]"></section>
            </article>
            <article className="animate-fadeIn w-full max-w-md md:max-w-lg text-white flex flex-col items-center justify-center text-center gap-4 sm:gap-6 md:gap-7 p-5 sm:p-6 md:p-8 bg-neutral-900/50 backdrop-blur-3xl rounded-xl sm:rounded-2xl shadow-2xl border border-neutral-700">
                <section className="flex flex-col items-center justify-center gap-7">
                    <Image
                        src="/logofinal.webp"
                        alt="Logo de la aplicación"
                        width={220}
                        height={220}
                        className=""
                        quality={100}
                    />
                    <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                        Bienvenida/o a la aplicación {" "}
                        <span className="bg-gradient-to-r from-neutral-600 to-neutral-400 text-transparent bg-clip-text font-black">Intranet Global</span>
                        {" "}de Bpogs.
                    </h1>
                    <p className="text-sm sm:text-base text-neutral-400">Acceda a la plataforma iniciando sesión con Google o Github, esto directamente con su correo o cuenta.</p>
                </section>
                <section className="w-full flex flex-col items-center justify-center gap-3">
                    <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-white bg-gradient-to-r from-neutral-500 to-neutral-800 rounded-full hover:opacity-70 focus:opacity-50 transition duration-200 cursor-pointer"
                        onClick={() => signIn("google", { callbackUrl: "/" })}>
                        <FcGoogle className="size-5 sm:size-6" />
                        <span className="font-medium">Iniciar sesión con Google</span>
                    </button>
                    {/* <button className="w-full flex items-center justify-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-white bg-gradient-to-r from-neutral-500 to-neutral-800 rounded-full hover:opacity-70 focus:opacity-50 transition duration-200 cursor-pointer"
                        onClick={() => signIn("github", { callbackUrl: "/" })}>
                        <GithubIcon className="size-5 sm:size-6" />
                        <span className="font-medium">Iniciar sesión con Github</span>
                    </button> */}
                </section>
                <div className="flex items-center justify-center gap-1 text-xs sm:text-sm">
                    <CircleAlertIcon className="size-3 sm:size-4" />
                    <span>
                        ¿Necesitas ayuda?{" "}
                        <Link
                            className="text-neutral-400 hover:underline"
                            href="mailto:casato311409@gmail.com"
                        >
                            Contactar a soporte
                        </Link>
                    </span>
                </div>
            </article>
        </main>
    )
}
