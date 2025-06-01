import Carousel from "@/components/Carousel";

export default function InicioPage() {
    return (
        <main className="w-full">
            <article className="flex items-center justify-center w-full p-7 text-white">
                <p className="font-light">Juntos creamos lazos <span className="font-bold">#TalentoGlobal</span></p>
            </article>
            <article>
                <Carousel />
            </article>
        </main>
    )
}
