import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[58.25rem] md:h-[61.1875rem]">
      <Image
        alt="this is the header image"
        src={"/images/headerImage.jpg"}
        layout="fill"
        className="w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(2,40,14,0.55)] to-[rgba(2,40,14,0.55)]"></div>
    </div>
  );
};

export default HeroSection;
