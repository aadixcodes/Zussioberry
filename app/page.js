import FullMenu from "@/components/sections/FullMenu";
import MakeOrder from "@/components/sections/MakeOrder";
import NatureGoodness from "@/components/sections/NatureGoodness";
import Slider from "@/components/sections/Slider";
import WelcomeTo from "@/components/sections/WelcomeTo";


export default function Home() {
  return (
   <>
   <Slider/>
   <WelcomeTo/>
   <MakeOrder/>
   <NatureGoodness/>
   {/* <FullMenu/> */}
   </>
  );
}


