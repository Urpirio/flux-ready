import SectionClientesOpiniones from "@/components/components - Home/components/Section - ClientesOpiniones";
import SectionHero from "@/components/components - Home/components/Section - Hero";
import SectionPorqueElegirnos from "@/components/components - Home/components/Section - PorqueElegirnos";
import SectionPreguntasFrecuentes from "@/components/components - Home/components/Section - PreguntasFrecuentes";
import SectionServicios from "@/components/components - Home/components/Section - Servicios";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center">
      <SectionHero />
      <SectionServicios />
      <SectionPorqueElegirnos />
      <SectionPreguntasFrecuentes />
      <SectionClientesOpiniones />
    </main>
  );
}
