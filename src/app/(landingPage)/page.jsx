import Image from "next/image";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <main className="flex min-h-screen flex-col items-center justify-between p-24 font-montserrat container">
        <h1>Welcome to the homepage for the accommodation app</h1>
      </main>
    </>
  );
}
