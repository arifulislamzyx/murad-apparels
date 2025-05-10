import About from "@/sections/home/about";
import MuradApparelsDescription from "@/sections/home/clothing-manufacture";
import Faq from "@/sections/home/FAQ";
import Header from "@/sections/home/header";
import WhyChooseUs from "@/sections/home/why-choose-us";
import Categories from "./categories/page";
import OurCutomers from "@/sections/home/our-cutomers";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <About />
      <OurCutomers />
      <WhyChooseUs />
      <Faq />
      <MuradApparelsDescription />
    </div>
  );
}
