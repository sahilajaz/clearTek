import OurServiceSection from "@/components/OurServiceSection";
import AboutUsOnHome from "@/components/AboutUsOnHome";
import Image from "next/image";

export default function Home() {
  return (
    <section className="sm:w-full h-full">
      <div className="relative w-full h-[800px] ">
      <Image
        src="/heroimage.jpg"
        alt="hero-image"
        layout="fill"
        objectFit="cover"
      />
    </div>
      <OurServiceSection />
      <AboutUsOnHome />
    </section>
  );
}
