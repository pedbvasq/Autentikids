"use client";
import React, { useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();

  const sliderRef = React.useRef<HTMLDivElement | null>(null);
  const [sliderInstanceRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  const images = ["/hero.jpg", "/hero.jpg", "/hero.jpg"];

  // Autoplay con verificación de instancia lista
  useEffect(() => {
    const interval = setInterval(() => {
      if (slider.current) {
        slider.current.next();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
<section className="container mx-auto px-4 py-20">
  
  {/* Carrusel centrado y responsive */}
  <div className="relative w-full max-w-full sm:max-w-2xl md:max-w-4xl mx-auto">
    
    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[80%] h-24 md:h-40 bg-primary/30 rounded-full blur-3xl z-0"></div>

    <div
      ref={(node) => {
        sliderRef.current = node;
        sliderInstanceRef(node);
      }}
      className="keen-slider rounded-xl overflow-hidden relative z-10"
    >
      {images.map((src, i) => (
        <div key={i} className="keen-slider__slide flex items-center justify-center w-full">
          <Image
            src={src}
            alt={`Slide ${i + 1}`}
            width={1200}
            height={400}
            className="rounded-xl object-cover w-full h-[180px] sm:h-[300px] md:h-[400px] border border-secondary border-t-2 border-t-primary/30"
            sizes="(max-width: 768px) 100vw, 1200px"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Texto adaptable */}
  <div className="text-center space-y-8 mt-12 px-2 sm:px-4 max-w-4xl mx-auto">
    
    <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug">
      AutentiKids:
      <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text block sm:inline">
        Comprender su mundo es fortalecer su camino y bienestar.
      </span>
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
      Somos un Centro Terapéutico Integral que ofrece un espacio seguro, confidencial y personalizado para el bienestar emocional de niños, adolescentes y adultos, con terapias actualizadas y basadas en evidencia científica.
    </p>

    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
      Agenda tu cita hoy y comienza tu camino hacia el bienestar emocional con el apoyo que necesitas.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
      
      <Button className="w-full sm:w-auto font-bold group/arrow">
        Conversemos
        <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
      </Button>

      <Button
        asChild
        variant="secondary"
        className="w-full sm:w-auto font-bold"
      >
        <Link href="https://wa.me/1234566" target="_blank">
          Agenda tu cita
        </Link>
      </Button>

    </div>
  </div>
</section>


  );
};
