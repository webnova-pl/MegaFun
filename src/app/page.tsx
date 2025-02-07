import ContactSection from "@/sections/ContactSection/ContactSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import RentSection from "@/sections/RentSection/RentSection";
export default function Home() {
	return (
		<main className="">
			<HeroSection text="Mega Fun - dmuchańce które rozkręcą każdą impreze"></HeroSection>
			<RentSection />
			<ContactSection />
		</main>
	);
}
