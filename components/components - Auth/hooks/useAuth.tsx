import { useState } from "react";
import { useLogin } from "./useLogin";
import { useRegistro } from "./useRegistro";
import { useOlvidePassword } from "./useOlvidePassword";

export type TabsValue = "Login" | "OlvidePassword" | "Registro" | "Codigo";

export const useAuth = () => {
  const { InputLogin, setInputLogin } = useLogin();
  const {} = useRegistro();
  const { InputOlvidePassword, setInputOlvidePassword } = useOlvidePassword();
  const [TabsValue, setTabsValue] = useState<TabsValue>("Login");
  const [EstadoDialogAuth, setEstadoDialogAuth] = useState<boolean>(false);

  return {
    EstadoDialogAuth,
    setEstadoDialogAuth,
    InputLogin,
    setInputLogin,
    TabsValue,
    setTabsValue,
    InputOlvidePassword,
    setInputOlvidePassword
  };
};
