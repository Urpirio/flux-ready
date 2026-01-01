import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SectionHero() {
  return (
    <section className="grid grid-cols-2 items-center border max-w-7xl gap-2 py-30">
      <div className="col-span-1 space-y-2.5">
        <h3 className="text-3xl font-semibold">
          Simplifica tu flujo de trabajo en un solo lugar
        </h3>
        <p>
          La herramienta definitiva para equipos que buscan eficiencia sin
          complicaciones. Empieza a gestionar tus proyectos hoy mismo.
        </p>
        <Button className="p-5">Get Started</Button>
      </div>
      <div className="col-span-1">
        <img
          className="rounded-2xl"
          src="https://i.pinimg.com/1200x/b6/ac/26/b6ac26e6ddbcf4adc924c95083089f45.jpg"
          alt="IMAGE-Car"
        />
      </div>
    </section>
  );
}
