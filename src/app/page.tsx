import HeroSection from "./components/HeroSection";
import DealOfTheMonth from "./components/DealOfTheMonth";
import PartnerSection from "./components/PartnerSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PartnerSection />
      <DealOfTheMonth />
    </div>
  );
}
