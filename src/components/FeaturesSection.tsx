
import { Building, GraduationCap, Home, Library, LucideIcon, PenTool, Rocket } from "lucide-react";

interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
  <div className="flex flex-col space-y-3">
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div className="space-y-1.5">
      <h3 className="font-medium text-xl">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export const FeaturesSection = () => {
  const features: FeatureProps[] = [
    {
      icon: GraduationCap,
      title: "Современные аудитории",
      description: "Просторные и технологически оснащенные учебные помещения"
    },
    {
      icon: Library,
      title: "Библиотека и медиатека",
      description: "Богатый фонд учебной литературы и электронных ресурсов"
    },
    {
      icon: Building,
      title: "Собственное общежитие",
      description: "Комфортное проживание для иногородних студентов"
    },
    {
      icon: PenTool,
      title: "Творческие студии",
      description: "Возможности для развития талантов и личностного роста"
    },
    {
      icon: Rocket,
      title: "Спортивные секции",
      description: "Поддержка физического развития и здорового образа жизни"
    },
    {
      icon: Home,
      title: "Столовая",
      description: "Качественное и разнообразное питание для студентов и сотрудников"
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Преимущества
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Наша инфраструктура
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Мы создали комфортную и современную среду для обучения и развития
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
