"use client";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOff } from "lucide-react";
import { useState } from "react";

const Eye = ({ togglePasswordView, className }) => {
  const [viewPassword, setViewPassword] = useState(false);

  const showPassword = () => {
    setViewPassword((prevState) => !prevState);
    togglePasswordView();
  };

  return (
    <span
      className={cn(
        "absolute top-[35%] z-[2] right-3 cursor-pointer",
        className,
      )}
      onClick={showPassword}
    >
      {viewPassword ? (
        <EyeIcon color="grey" size={20} />
      ) : (
        <EyeOff color="grey" size={20} />
      )}
    </span>
  );
};

export default Eye;
