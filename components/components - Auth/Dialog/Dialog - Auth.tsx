"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useAuth } from "../hooks/useAuth";
import { Tabs } from "@/components/ui/tabs";
import TabsLogin from "../components/Tabs - Login";
import TabsRegistro from "../components/Tabs - Registro";
import TabsCodigo from "../components/Tabs - Codigo";
import TabsOlvidePassword from "../components/Tabs - OlvidePassword";

interface TypeDialogAuth {
  trigger_use: "Registrarse" | "Iniciar_sesion";
}

const trigger_button = {
  Registrarse: <Button variant={"ghost"}>Registrarse</Button>,
  Iniciar_sesion: <Button>Iniciar Sesion</Button>,
};

export default function DialogAuth({ trigger_use }: TypeDialogAuth) {
  const {
    EstadoDialogAuth,
    setEstadoDialogAuth,
    InputLogin,
    setInputLogin,
    TabsValue,
    setTabsValue,
    InputOlvidePassword,
    setInputOlvidePassword,
  } = useAuth();

  return (
    <Dialog
      open={EstadoDialogAuth}
      onOpenChange={(value) => {
        setEstadoDialogAuth(value);
      }}
    >
      <DialogTrigger>{trigger_button[trigger_use]}</DialogTrigger>
      <DialogContent className="rounded-2xl">
        <Tabs value={TabsValue}>
          <TabsLogin
            setTabsValue={setTabsValue}
            setInputLogin={setInputLogin}
            InputLogin={InputLogin}
          />
          <TabsRegistro />
          <TabsCodigo />
          <TabsOlvidePassword
            InputOlvidePassword={InputOlvidePassword}
            setInputOlvidePassword={setInputOlvidePassword}
            setTabsValue={setTabsValue}
          />
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
