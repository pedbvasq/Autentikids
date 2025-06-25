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
    <section className="container w-full">
      <div className="grid place-items-center max-w-screen-xl gap-8 mx-auto py-20 px-4">
        {/* Carrusel */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute top-2 -top-8 left-1/2 -translate-x-1/2 w-full h-24 md:h-40 bg-primary/30 rounded-full blur-3xl z-0"></div>

          <div
            ref={(node) => {
              sliderRef.current = node;
              sliderInstanceRef(node);
            }}
            className="keen-slider rounded-xl overflow-hidden relative z-10"
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="keen-slider__slide flex items-center justify-center min-w-full"
              >
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  width={1200}
                  height={500}
                  className="rounded-xl object-cover w-full h-[300px] md:h-[400px] border border-secondary border-t-2 border-t-primary/30"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Texto */}
        <div className="text-center space-y-8 px-4">
          <div className="max-w-screen-md mx-auto text-4xl md:text-6xl font-bold">
            <h1>
              Alianza para tu bienestar:
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                creciendo juntos hacia una vida plena.
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Agenda tu cita hoy y comienza tu camino hacia el bienestar emocional con el apoyo que necesitas.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/nobruf/shadcn-landing-page.git"
                target="_blank"
              >
                Github repository
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
