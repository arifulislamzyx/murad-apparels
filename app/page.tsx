import About from "@/sections/home/about";
import MuradApparelsDescription from "@/sections/home/clothing-manufacture";
import Faq from "@/sections/home/FAQ";
import Header from "@/sections/home/header";
import ApparelManufacture from "@/sections/home/products";
import WhyChooseUs from "@/sections/home/why-choose-us";

export default function Home() {
  return (
    <div>
      <Header />
      <ApparelManufacture />
      <About />
      <WhyChooseUs />
      <Faq />
      <MuradApparelsDescription />
    </div>
  );
}
