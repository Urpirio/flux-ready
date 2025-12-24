import { useState } from "react";

export interface TypeOlvidePassword {
  email?: string;
}

export const useOlvidePassword = () => {
  const [InputOlvidePassword, setInputOlvidePassword] =
    useState<TypeOlvidePassword>({});
  return {
    InputOlvidePassword,
    setInputOlvidePassword,
  };
};
