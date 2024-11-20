import { montserrat, quicksand } from "@/font";
import { cn } from "../../lib/utils";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div
      className={cn(
        "lg:bg-brand-background  min-h-screen container flex justify-center items-center ",
        montserrat.className,
      )}
    >
      <Image
        className="block md:hidden absolute -top-16"
        src={"/images/clip.png"}
        alt=""
        width={1000}
        height={300}
      />
      <div className="md:w-[648px] w-[80%] h-auto md:shadow-lg lg:bg-white lg:px-8  flex flex-col  py-[28px] z-[1]">
        <Image
          src={"/images/logo.png"}
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto "
        />
        {children}
      </div>
    </div>
  );
}
