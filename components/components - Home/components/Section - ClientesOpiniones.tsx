import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function SectionClientesOpiniones() {
  return (
    <section className="max-w-7xl w-full py-10 flex flex-col gap-3">
      <div className="text-center">
        <h3 className="text-3xl font-semibold">
          Impulsando el éxito de nuestros usuarios.
        </h3>
        <p>
          Historias reales de equipos que han transformado su forma de trabajar
          y optimizado sus resultados con nuestra tecnología.
        </p>
      </div>
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <CarouselItem className="basis-1/3" key={index}>
                <Card className="shadow-none">
                  <CardHeader>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Quia, alias ullam deserunt vitae incidunt reprehenderit
                      dolor minus, esse tempore impedit odio laudantium. Culpa
                      sunt facilis vero cum accusamus, numquam impedit?
                    </p>
                  </CardHeader>
                  <CardContent className="flex items-center gap-2">
                    <Avatar className="border-3 size-15">
                      <AvatarImage
                        src={
                          "https://i.pinimg.com/736x/33/67/af/3367af9d3530ad4f3ee5fb852fbf5f65.jpg"
                        }
                      />
                      <AvatarFallback>XD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Maria juaquina</h3>
                      <p className="text-xs text-gray-800">Un cargo random</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext></CarouselNext>
      </Carousel>
    </section>
  );
}
