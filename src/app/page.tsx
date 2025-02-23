import AboutSection from "@/sections/AboutSection/AboutSection";
import OfferSection from "@/sections/OfferSection/OfferSection";
import RentSection from "@/sections/RentSection/RentSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import DeliverySection from "@/sections/DeliverySection/DeliverySection";
export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<AboutSection />
			{/* <DeliverySection /> */}
			<OfferSection />
			<RentSection />
		</main>
	);
}
