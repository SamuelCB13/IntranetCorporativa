"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Providers({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula un "loading" por 1 segundo
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <Loading />
        );
    }
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
