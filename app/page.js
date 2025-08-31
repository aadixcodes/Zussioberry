import FreshFruitsJuices from "@/components/sections/FreshFruitsJuices";
import FullMenu from "@/components/sections/FullMenu";
import MakeOrder from "@/components/sections/MakeOrder";
import NatureGoodness from "@/components/sections/NatureGoodness";
import Slider from "@/components/sections/Slider";
import WelcomeTo from "@/components/sections/WelcomeTo";
import BeveragesSection from "@/components/sections/BeveragesSection";
import NewsletterSection from "@/components/sections/NewsletterSection";


export default function Home() {
  return (
   <>
   <Slider/>
   <WelcomeTo/>
   <MakeOrder/>
   <NatureGoodness/>
   <FreshFruitsJuices />
   <BeveragesSection />
   <NewsletterSection />
   {/* <FullMenu/> */}
   </>
  );
}


