import Link from "next/link";

export default function HomePage() {
    return (
        <main className="w-full">
            <article className="flex items-center justify-center w-full max-w-6xl mx-auto mt-5">
                <Link
                    href="https://forms.office.com/pages/responsepage.aspx?id=EMzAYcHr-0CzL97xxmpAPJhEqasyDYpNoHbkSyGbFL1UNFYzVFlKNjkyQ1g3WE5SVEhCVFZQMUZMTy4u&route=shorturl"
                    className="block w-full h-[340px] bg-contain bg-center bg-no-repeat hover:opacity-80 transition-opacity"
                    target="_blank"
                    style={{
                        backgroundImage: "url('/anota-gol-y-gana.jpg')"
                    }}
                    title="Ir a referir"
                >
                    <span className="sr-only">Ir a referir</span>
                </Link>
            </article>
        </main>
    );
}
