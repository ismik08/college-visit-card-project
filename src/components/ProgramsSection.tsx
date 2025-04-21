
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProgramCardProps {
  title: string;
  code: string;
  description: string;
  duration: string;
  type: "budget" | "commercial" | "both";
}

const ProgramCard = ({ title, code, description, duration, type }: ProgramCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge variant={type === "budget" ? "default" : type === "commercial" ? "outline" : "secondary"}>
            {type === "budget" ? "Бюджет" : type === "commercial" ? "Платно" : "Бюджет/Платно"}
          </Badge>
        </div>
        <CardDescription>Код специальности: {code}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center border-t pt-4">
        <span className="text-sm text-muted-foreground">Срок обучения: {duration}</span>
        <Button variant="outline" size="sm">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export const ProgramsSection = () => {
  const programs: ProgramCardProps[] = [
    {
      title: "Информационные системы",
      code: "09.02.07",
      description: "Подготовка специалистов в области разработки, внедрения и сопровождения информационных систем.",
      duration: "3 года 10 месяцев",
      type: "both"
    },
    {
      title: "Экономика и бухгалтерский учет",
      code: "38.02.01",
      description: "Формирование профессиональных компетенций в сфере экономики, бухгалтерского учета и налогообложения.",
      duration: "2 года 10 месяцев",
      type: "commercial"
    },
    {
      title: "Правоохранительная деятельность",
      code: "40.02.02",
      description: "Подготовка юристов для работы в правоохранительных органах и юридических фирмах.",
      duration: "3 года 6 месяцев",
      type: "budget"
    }
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            Программы обучения
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Специальности и направления
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Мы предлагаем востребованные специальности по различным направлениям подготовки
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg">Смотреть все программы</Button>
        </div>
      </div>
    </section>
  );
};
