import { CSSProperties } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { FaRegEye } from "react-icons/fa";
import { PiUser } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";


interface TypeIconos {
  className?: string;
  style?: CSSProperties;
}

export const Iconos = {
  RegEyeSlash: ({ className, style }: TypeIconos) => {
    return <FaRegEyeSlash className={cn("", className)} style={style} />;
  },
  RegEye: ({ className, style }: TypeIconos) => {
    return <FaRegEye className={cn("", className)} style={style} />;
  },
  User: ({ className, style }: TypeIconos) => {
    return <PiUser className={cn("", className)} style={style} />;
  },
  Google: ({ className, style }: TypeIconos) => {
    return <FaGoogle className={cn("", className)} style={style} />;
  },
  ArrowLeft:({ className, style }: TypeIconos) => {
    return <GoArrowLeft className={cn("", className)} style={style} />;
  }
};
