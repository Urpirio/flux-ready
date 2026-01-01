import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SectionPreguntasFrecuentes() {
  return (
    <section className="max-w-7xl w-full flex flex-col items-center">
      <div className="text-center w-[70%]">
        <h3 className="text-3xl font-semibold">Preguntas Frecuentes</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, esse,
          fuga debitis aut laborum cupiditate asperiores repellat excepturi nisi
          animi odit molestias voluptas. Est eaque impedit laboriosam adipisci
          ducimus consequatur.
        </p>
      </div>
      <div className="w-full">
        <Accordion className="w-full" type="single" collapsible>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>Pregunta {index}</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Esse similique qui ut quas odit, facere rerum doloribus!
                    Nesciunt, officia? Libero aliquid cum perspiciatis sit qui
                    praesentium eligendi, voluptatibus reprehenderit. Soluta.
                  </p>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
