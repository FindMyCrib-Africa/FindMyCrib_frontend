import Image from "next/image";
import HeaderImage from "../../public/images/headerImage.jpg";

export default function Header() {
  return (
    <section className="relative w-full h-[58.25rem] md:h-[61.1875rem]">
      <Image
        alt="this is the header image"
        src={HeaderImage}
        layout="fill"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,40,14,0.55)] to-[rgba(2,40,14,0.55)]"></div>

      {/* Text Content */}
      <div className="container font-inter text-white relative z-10h-full">
        <h1 className="text-4xl md:text-6xl font-bold">Find my Crib</h1>
      </div>
    </section>
  );
}
