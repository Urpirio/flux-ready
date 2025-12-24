import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import InputLabel from "@/components/components - globales/UI/InputLabel";
import { Button } from "@/components/ui/button";
import { Iconos } from "@/components/components - globales/UI/Iconos";
import { Dispatch, SetStateAction } from "react";
import { TabsValue } from "../hooks/useAuth";
import { TypeOlvidePassword } from "../hooks/useOlvidePassword";

interface TypeTabsOlvidePassword {
  setTabsValue: Dispatch<SetStateAction<TabsValue>>;
  InputOlvidePassword: TypeOlvidePassword;
  setInputOlvidePassword: Dispatch<SetStateAction<TypeOlvidePassword>>;
}

export default function TabsOlvidePassword({
  setTabsValue,
  setInputOlvidePassword,
  InputOlvidePassword,
}: TypeTabsOlvidePassword) {
  return (
    <TabsContent
      value="OlvidePassword"
      className="flex flex-col items-start gap-3"
    >
      <Button
        onClick={() => {
          setTabsValue("Login");
        }}
        variant={"ghost"}
        className=" cursor-pointer"
      >
        <Iconos.ArrowLeft className="size-6" />
      </Button>
      <div className="w-full">
        <DialogTitle className="text-2xl text-center">
          Restablecer contraseña
        </DialogTitle>
        <DialogDescription className="text-md text-center">
          Introduce tu correo electrónico y te enviaremos un enlace para que
          puedas crear una nueva clave de forma segura.
        </DialogDescription>
      </div>
      <div className="w-full">
        <InputLabel
          placeholder="example@email.com"
          label="correo electronico"
          type_input="email"
          Value={InputOlvidePassword.email}
          setValue={(value) => {
            setInputOlvidePassword({ ...InputOlvidePassword, email: value });
          }}
        />
      </div>
      <span className=" h-0.5 bg-gray-100 w-full"></span>
      <div className="w-full">
        <Button className="p-6 text-md w-full cursor-pointer">
          Iniciar Sesion
        </Button>
      </div>
    </TabsContent>
  );
}
