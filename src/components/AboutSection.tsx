
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
            О колледже
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Традиции качества и инновации
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Более 20 лет мы помогаем студентам строить успешное будущее, сочетая традиционные ценности образования и современные технологии обучения.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Современные программы</h3>
              <p className="text-muted-foreground">
                Актуальные образовательные программы, разработанные совместно с ведущими работодателями.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Квалифицированные преподаватели</h3>
              <p className="text-muted-foreground">
                Опытные педагоги с практическим опытом в профессиональной сфере.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Гарантированное трудоустройство</h3>
              <p className="text-muted-foreground">
                Партнерские отношения с компаниями-работодателями и поддержка карьерного роста выпускников.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
