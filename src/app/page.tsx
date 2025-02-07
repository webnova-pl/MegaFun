import AboutSection from "@/sections/AboutSection/AboutSection";
import ContactSection from "@/sections/ContactSection/ContactSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import RentSection from "@/sections/RentSection/RentSection";
export default function Home() {
	return (
		<main className="">
			<HeroSection></HeroSection>
			<AboutSection></AboutSection>
			<HeroSection></HeroSection>
			<RentSection />
			<ContactSection />
		</main>
	);
}
