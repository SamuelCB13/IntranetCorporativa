/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: any) {
    const token = await getToken({ req });

    // Si no hay token, redirige a la página del inicio de sesión
    if (!token) {
        return NextResponse.redirect(new URL("/auth/signin", req.url));
    }

    // Si hay token, permite continuar
    return NextResponse.next();
}

export const config = {
    matcher: ["/", "/capsulas", "/capsulas/:path*", "/usuarios", "/greta", "/aplicaciones"],
};
