import InputLabel from "@/components/components - globales/UI/InputLabel";
import { Button } from "@/components/ui/button";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TabsContent } from "@/components/ui/tabs";
import { Dispatch, SetStateAction } from "react";
import { TypeinputLogin } from "../hooks/useLogin";
import { Iconos } from "@/components/components - globales/UI/Iconos";
import { TabsValue } from "../hooks/useAuth";

interface TypeTabsLogin {
  InputLogin?: TypeinputLogin;
  setInputLogin: Dispatch<SetStateAction<TypeinputLogin>>;
  setTabsValue: Dispatch<SetStateAction<TabsValue>>;
}

export default function TabsLogin({
  setInputLogin,
  InputLogin,
  setTabsValue,
}: TypeTabsLogin) {
  return (
    <TabsContent value="Login" className="flex flex-col items-center gap-2">
      <div className="border rounded-2xl h-20 w-20 flex items-center justify-center bg-linear-to-l from-gray-300 to-gray-100">
        <Iconos.User className="text-4xl text-gray-600" />
      </div>
      <div>
        <DialogTitle className="text-2xl text-center">
          Bienvenido de nuevo
        </DialogTitle>
        <DialogDescription className="text-md text-center">
          Ingresa tus credenciales para acceder a tu cuenta y continuar donde lo
          dejaste.
        </DialogDescription>
      </div>

      <div className="w-full">
        <Button
          variant={"outline"}
          className="flex items-center w-full py-6 text-lg cursor-pointer shadow-none"
        >
          <Iconos.Google />
          <span>Google</span>
        </Button>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <InputLabel
          placeholder="example@email.com"
          label="correo electronico"
          type_input="email"
          Value={InputLogin?.email}
          setValue={(value) => {
            setInputLogin({ ...InputLogin, email: value });
          }}
        />
        <InputLabel
          placeholder="123456"
          label="contrasena"
          type_input="password"
          Value={InputLogin?.Password}
          setValue={(value) => {
            setInputLogin({ ...InputLogin, Password: value });
          }}
        />
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <div className="w-full flex justify-end">
          <Button
            onClick={() => {
              setTabsValue("OlvidePassword");
            }}
            variant={"link"}
            className="cursor-pointer"
          >
            {" "}
            Olvide mi contrasena
          </Button>
        </div>
        <Button className="p-6 text-md w-full cursor-pointer">
          Iniciar Sesion
        </Button>
        <div className="flex relative w-full items-center justify-center py-2">
          <span className="absolute bg-white px-1 text-gray-600 text-sm">
            No tienes una cuenta
          </span>
          <div className="border w-full"></div>
        </div>
        <Button className="p-6 text-md w-full cursor-pointer">
          {" "}
          Registrate
        </Button>
      </div>
    </TabsContent>
  );
}
