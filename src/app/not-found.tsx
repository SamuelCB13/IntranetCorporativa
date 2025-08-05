"use client"

import { useSession } from "next-auth/react";
import Link from "next/link"
import Loading from "./loading";

export default function NotFound() {
    const { data: session } = useSession();

    if (!session) {
        return (
            <Loading />
        )
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white overflow-hidden relative">
            {/* Stars background */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-32 right-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-80 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-40 left-16 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-60 right-24 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-32 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-16 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-72 right-16 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute top-96 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 right-40 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            </div>

            {/* Saturn planet - top left */}
            <div className="absolute top-20 left-20">
                <div className="relative">
                    <div className="w-16 h-16 border-2 border-white rounded-full bg-transparent"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-0.5 border-t border-white rounded-full rotate-12"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-0.5 border-t border-white rounded-full rotate-12 opacity-60"></div>
                </div>
            </div>

            {/* Small planet - top right */}
            <div className="absolute top-32 right-32 animate-pulse">
                <div className="w-8 h-8 border-2 border-white rounded-full bg-transparent"></div>
            </div>

            {/* Spaceship/UFO - bottom left */}
            <div className="absolute bottom-32 left-16">
                <div className="relative">
                    {/* Main body */}
                    <div className="w-12 h-6 border-2 border-white rounded-full bg-transparent"></div>
                    {/* Top dome */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-4 border-2 border-white rounded-t-full bg-transparent"></div>
                    {/* Landing gear */}
                    <div className="absolute -bottom-1 left-2 w-0.5 h-3 bg-white"></div>
                    <div className="absolute -bottom-1 right-2 w-0.5 h-3 bg-white"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-white"></div>
                </div>
            </div>

            {/* Medium planet - bottom right */}
            <div className="absolute bottom-40 right-20 animate-pulse">
                <div className="w-10 h-10 border-2 border-white rounded-full bg-transparent">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 ml-2"></div>
                    <div className="w-1 h-1 bg-white rounded-full mt-1 ml-6"></div>
                </div>
            </div>

            {/* Additional small planet - middle left */}
            <div className="absolute top-1/2 left-8 animate-pulse">
                <div className="w-6 h-6 border border-white rounded-full bg-transparent"></div>
            </div>

            {/* Main content */}
            <div className="flex flex-col items-center justify-center min-h-screen px-4 relative z-10">
                {/* 404 Text */}
                <div className="text-center mb-8">
                    <div className="text-8xl md:text-9xl font-bold mb-4 tracking-wider">
                        <span className="inline-block border-4 border-white px-6 py-4 bg-transparent text-white font-mono">
                            404
                        </span>
                    </div>
                </div>

                {/* Error message */}
                <div className="text-center mb-8 max-w-md">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide">PAGE NOT FOUND</h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        The requested page could not be found on the server.
                    </p>
                </div>

                {/* Go Home button */}
                <Link
                    href="/"
                    className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-neutral-950 transition-all duration-300 rounded-full text-sm font-semibold tracking-wide uppercase transform hover:scale-105"
                >
                    GO HOME
                </Link>
            </div>
        </div>
    )
}
