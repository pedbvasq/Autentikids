import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Baby",
    title: "Estimulación Temprana",
    description:
      "Potenciamos el desarrollo integral de los más pequeños a través de actividades lúdicas y educativas.",
  },
  {
    icon: "UserRoundCog",
    title: "Psicología Clínica niños, adolescentes y adultos",
    description:
      "Evaluación, diagnóstico y acompañamiento psicológico para todas las etapas de la vida.",
  },
  {
    icon: "Users",
    title: "Orientación Familiar",
    description:
      "Apoyo y estrategias para fortalecer los vínculos y la comunicación dentro del núcleo familiar.",
  },
  {
    icon: "BookOpen",
    title: "Psicopedagogía",
    description:
      "Intervención y acompañamiento en procesos de aprendizaje para mejorar el rendimiento académico.",
  },
  {
    icon: "ClipboardList",
    title: "Control de tareas y Seguimiento Escolar",
    description:
      "Supervisión académica personalizada para reforzar hábitos de estudio y organización escolar.",
  },
  {
    icon: "Layers",
    title: "Terapias Integrales",
    description:
      "Enfoque multidisciplinario para el bienestar emocional, cognitivo y conductual.",
  },
  {
    icon: "BrainCircuit",
    title: "Intervención Temprana en trastornos del Neurodesarrollo",
    description:
      "Detección y abordaje oportuno de dificultades del desarrollo para maximizar el potencial individual.",
  },
];


export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Nuestros
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Servicios
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
      Ofrecemos servicios psicológicos diseñados para promover el bienestar emocional y el desarrollo personal en todas las etapas de la vida. Desde la psicoeducación y la orientación individual hasta la terapia familiar y la evaluación psicopedagógica, nuestro enfoque profesional busca brindar apoyo efectivo y personalizado.
      </h3>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
    {featureList.map(({ icon, title, description }, index) => (
      <div
        key={title}
        className={`w-full flex justify-center ${
          featureList.length % 3 === 1 && index === featureList.length - 1
            ? "lg:col-span-3"
            : ""
        }`}
      >
        <Card className="h-full bg-background border-0 shadow-none w-full max-w-[300px]">
          <CardHeader className="flex flex-col justify-center items-center text-center">
            <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
              <Icon
                name={icon as keyof typeof icons}
                size={24}
                color="hsl(var(--primary))"
                className="text-primary"
              />
            </div>
            <CardTitle className="text-center">{title}</CardTitle>
          </CardHeader>

          <CardContent className="text-muted-foreground text-center">
            {description}
          </CardContent>
        </Card>
      </div>
    ))}
  </div>
    </section>
  );
};
