import DialogAuth from "@/components/components - Auth/Dialog/Dialog - Auth";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-center w-full py-3">
        <div className=" flex items-center w-full p-5 border rounded-3xl max-w-7xl shadow-xl ">
          <div className="flex grow ">
            <span>L</span>
          </div>
          <div className="flex grow justify-end gap-3">
            <Link href={""} className="">
              Inicio
            </Link>
            <Link href={""} className="">
              Servicios
            </Link>
            <Link href={""} className="">
              Sobre nosotros
            </Link>
            <Link href={""} className="">
              Contacto
            </Link>
          </div>
          <div className="flex grow justify-end  gap-3">
            <DialogAuth trigger_use="Registrarse" />
            <DialogAuth trigger_use="Iniciar_sesion" />
          </div>
        </div>
      </header>
    </>
  );
}
