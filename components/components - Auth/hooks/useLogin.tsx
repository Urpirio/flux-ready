import { useState } from "react";

export interface TypeinputLogin {
  Password?: string;
  email?: string;
}

export const useLogin = () => {
  const [InputLogin, setInputLogin] = useState<TypeinputLogin>({});


  const handle_loguear = () =>{

  }

  return {
    InputLogin,
    setInputLogin,
  };
};
