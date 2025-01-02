import Mycarousel from "@/components/Mycarousel";
import OurServiceSection from "@/components/OurServiceSection";
import AboutUsOnHome from '@/components/AboutUsOnHome'

export default function Home() {
   
  return (
    <section className="w-full h-full">
       <Mycarousel/>
       <OurServiceSection/>
       <AboutUsOnHome/>
    </section>
  )
}
