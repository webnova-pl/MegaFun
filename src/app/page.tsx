import AboutSection from "@/sections/AboutSection/AboutSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import RentSection from "@/sections/RentSection/RentSection";
import OfferSection from "@/sections/OfferSection/OfferSection";
export default function Home() {
	return (
		<main className="">
			<HeroSection />
			<AboutSection />
			<OfferSection />
			<RentSection />
			<ContactSection />
		</main>
	);
}
