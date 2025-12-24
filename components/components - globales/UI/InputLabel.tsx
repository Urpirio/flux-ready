import {
  CSSProperties,
  Dispatch,
  HTMLInputTypeAttribute,
  SetStateAction,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Iconos } from "./Iconos";

interface TypeInputLabel {
  label?: string;
  name?: string;
  setValue: (e: string) => void;
  Value?: string;
  className?: string;
  style?: CSSProperties;
  className_Label?: string;
  style_label?: CSSProperties;
  className_Input?: string;
  style_Input?: CSSProperties;
  type_input: HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function InputLabel({
  label,
  name,
  setValue,
  Value,
  className,
  style,
  className_Label,
  style_label,
  style_Input,
  className_Input,
  type_input,
  placeholder,
}: TypeInputLabel) {
  const [ShowPassword, setShowPassWord] = useState<boolean>(false);
  return (
    <div style={style} className={cn("flex flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={name || label}
          className={cn("text-gray-800", className_Label)}
          style={style_label}
        >
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </label>
      )}
      <div className="flex items-center border w-full py-2 px-2 rounded-lg">
        <input
          placeholder={placeholder || ""}
          name={name || label}
          type={ShowPassword ? "text" : type_input || "text"}
          className={cn("w-full outline-0 text-lg font-light", className_Input)}
          value={Value || ""}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {(type_input == "password" || ShowPassword) && (
          <>
            <Button
              onClick={() => {
                setShowPassWord(!ShowPassword);
              }}
              name={name || label}
              variant={"ghost"}
              className="text-xs p-0 cursor-pointer"
            >
              {ShowPassword ? (
                <Iconos.RegEyeSlash className="text-gray-600" />
              ) : (
                <Iconos.RegEye className="text-gray-600" />
              )}
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
