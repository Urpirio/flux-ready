import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SectionServicios() {
  return (
    <section className="max-w-7xl w-full py-10 flex flex-col gap-4">
      <div className=" flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-semibold">Nuestros Servicios</h3>
          <p className="text-xl text-gray-800">
            Elige el tratamiento que mejor se adapte a tu estilo.
          </p>
        </div>
        <Button>Ver mas</Button>
      </div>
      <div className="grid-cols-3 grid gap-2  w-full">
        {Array.from({ length: 6 }).map((_, index) => {
          return (
            <Card key={index} className="col-span-1 shadow-none pt-0">
              <CardHeader className="px-0">
                <img
                  className="rounded-t-xl"
                  src="https://i.pinimg.com/736x/d4/9e/c5/d49ec5ce9ca9e6007bab4272c1fbd934.jpg"
                  alt=""
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-2xl">Prueba {index}</CardTitle>
                <CardDescription>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum,
                  nam repellat dolor minus ducimus eum velit corrupti labore
                  aperiam distinctio sapiente sit repudiandae ea aliquid magni
                  quae nihil, quaerat dicta.
                </CardDescription>
              </CardContent>
              <CardFooter className="w-full flex gap-2">
                <Button className="grow flex cursor-pointer">Adquirir</Button>
                <Button
                  className="grow flex cursor-pointer"
                  variant={"outline"}
                >
                  Mas detalles
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
