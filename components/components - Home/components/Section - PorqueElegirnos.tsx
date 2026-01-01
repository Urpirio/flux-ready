import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function SectionPorqueElegirnos() {
  return (
    <section className="max-w-7xl grid grid-cols-2 items-center gap-2 py-10">
      <div className="col-span-1 space-y-2.5">
        <h3 className="text-3xl font-semibold">¿Por qué trabajar con nosotros?</h3>
        <p>
          Perspectiva sobre el avance digital La tecnología y la creatividad
          caminan de la mano en un mundo digital que nunca se detiene. Cada
          línea de código representa una oportunidad para resolver problemas
          reales, mientras que la curiosidad nos impulsa a explorar nuevas
          fronteras. En nuestra región, esa chispa creativa se nutre de la
          energía del entorno, recordándonos que el equilibrio entre el esfuerzo
          técnico y la apreciación de lo cotidiano es la clave para una
          innovación con propósito y sentido hu
        </p>
      </div>
      <div className="col-span-1">
        <img
          className="rounded-2xl"
          src="https://i.pinimg.com/736x/d4/9e/c5/d49ec5ce9ca9e6007bab4272c1fbd934.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
