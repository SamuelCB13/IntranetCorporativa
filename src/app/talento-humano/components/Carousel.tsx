'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon, CirclePauseIcon, CirclePlayIcon } from 'lucide-react';

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const images = [
        '/talento-humano/slider1.webp',
        '/talento-humano/slider2.webp',
        '/talento-humano/slider3.webp',
        '/talento-humano/slider4.webp',
        '/talento-humano/slider5.webp'
    ];

    // Auto-reproducción del carrusel
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, images.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 4000);
    };

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 4000);
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 4000);
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto border border-neutral-800 rounded-xl">
            {/* Contenedor principal del carrusel */}
            <div className="relative h-56 overflow-hidden rounded-xl md:h-96 bg-gray-200">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            width={1000}
                            height={384}
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="absolute block w-full h-full object-cover"
                        />
                        {/* Overlay con información de la imagen */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                            <h3 className="text-white text-lg font-semibold">
                                Imagen {index + 1}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicadores (dots) */}
            <div className="absolute z-10 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-blue-500 shadow-lg'
                                : 'bg-neutral-300 hover:bg-neutral-500'
                            }`}
                        aria-current={index === currentSlide}
                        aria-label={`Ir a slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>

            {/* Botón anterior */}
            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToPrevious}
                aria-label="Slide anterior"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 transition-all duration-300 group-focus:outline-none">
                    <ChevronLeftIcon />
                </span>
            </button>

            {/* Botón siguiente */}
            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={goToNext}
                aria-label="Slide siguiente"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 transition-all duration-300 group-focus:outline-none">
                    <ChevronRightIcon />
                </span>
            </button>

            {/* Indicador de auto-reproducción */}
            <div className="absolute top-4 right-4 z-40">
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition-all duration-200"
                    aria-label={isAutoPlaying ? "Pausar auto-reproducción" : "Reanudar auto-reproducción"}
                >
                    {isAutoPlaying ? (
                        <CirclePauseIcon className='size-5 text-blue-500' />
                    ) : (
                        <CirclePlayIcon className='size-5 text-blue-500' />
                    )}
                </button>
            </div>

            {/* Contador de slides */}
            <div className="absolute top-4 left-4 z-40 bg-neutral-800 text-blue-500 px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {images.length}
            </div>
        </div>
    );
}
