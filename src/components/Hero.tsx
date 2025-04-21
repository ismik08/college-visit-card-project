
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-background py-20 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Колледж знаний и возможностей
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0">
                Качественное образование для успешного будущего.
                Современные программы и индивидуальный подход к каждому студенту.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button size="lg" className="gap-1">
                Подать документы
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative h-[350px] md:h-[450px] lg:h-[500px] w-full overflow-hidden rounded-lg">
            <img
              src="/placeholder.svg"
              alt="Студенты колледжа"
              className="absolute inset-0 object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
