import OurServiceSection from "@/components/OurServiceSection";
import AboutUsOnHome from "@/components/AboutUsOnHome";
import Image from "next/image";

export default function Home() {
  return (
    <section className="sm:w-full h-full">
      <div className="relative w-full h-[900px]">
      <Image
        src="/heroimage.jpg"
        alt="hero-image"
        layout="fill"
        objectFit="cover"
      />
       <div className="absolute inset-0 bg-black opacity-30 z-10" />       
    </div>
      <OurServiceSection />
      <AboutUsOnHome />
    </section>
  );
}
