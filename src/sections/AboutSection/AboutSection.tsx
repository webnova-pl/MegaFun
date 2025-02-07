import Image from "next/image";
import img1 from "../../../public/wedding.webp";
import slide from "../../../public/slide.png";

const items = [
	{
		id: 1,
		title: "Indywidualne podejście do każdego pacjenta",
		desc: "Każda osoba jest inna, dlatego każdą terapię dostosowuję do Twoich indywidualnych potrzeb i problemów zdrowotnych. Zawsze dbam o to, abyś czuł/a się zaopiekowany/a i wysłuchany/a.",
		img: img1,
	},
	{
		id: 2,
		title: "Wieloletnie doświadczenie i zaawansowane szkolenia",
		desc: "Pracuję jako fizjoterapeutka od ponad 5 lat, regularnie podnosząc kwalifikacje na kursach, takich jak terapia wisceralna, terapia stawów skroniowo-żuchwowych, flossing, kinesiotaping, Kobido i inne, aby oferować najskuteczniejsze metody leczenia.",
		img: img1,
	},
	{
		id: 3,
		title: "Holistyczne podejście do zdrowia",
		desc: "Nie skupiam się wyłącznie na objawach, ale analizuję całe ciało i przyczyny dolegliwości. Dzięki temu mogę skutecznie pomagać w leczeniu bólu, poprawie funkcjonowania oraz profilaktyce.",
		img: img1,
	},
	{
		id: 4,
		title: "Kompleksowa oferta terapeutyczna",
		desc: "W jednym miejscu znajdziesz szeroką gamę terapii – od masaży leczniczych, przez drenaż pneumatyczny, po nowoczesne metody, takie jak pinoterapia czy masaż KOBIDO UP. Wszystko po to, aby zapewnić Ci wszechstronną opiekę.",
		img: img1,
	},
];

const AboutSection = () => {
	return (
		<section className="py-32">
			<div className="container">
				<div className="grid grid-cols-2">
					<div>
						<h2 className="mb-4" data-aos="fade-up" data-aos-offset="200">
							Świetne <strong>Atrakcje</strong>
							<br /> Na różne okazje
						</h2>
						<Image
							alt=""
							src={slide}
							width={500}
							height={500}
							className="object-cover object-center"
						/>
					</div>
					<div className=" -mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
						{items.map((item, idx) => (
							<div
								className="relative aspect-square h-full overflow-hidden rounded-lg"
								key={item.id}
								data-aos="fade-up"
								data-aos-delay={idx * 100}
							>
								<Image
									alt=""
									src={item.img}
									width={1000}
									height={1000}
									className="h-full w-full object-cover object-center"
								/>
								<div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col justify-end bg-gradient-to-t from-[rgba(255,66,25,1)] to-[rgba(255,66,25,1)] p-6 text-white">
									<h4 className="mb-4 flex space-x-2 text-2xl font-bold">{item.title}</h4>
									<p>{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
