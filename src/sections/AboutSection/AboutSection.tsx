import Image from "next/image";
import img1 from "../../../public/wedding.webp";
import slide from "../../../public/slide.png";

const items = [
	{
		id: 1,
		title: "Urodziny",
		desc: "Zorganizuj niezapomniane urodziny dla swojego dziecka z Mega Fun! Dmuchane zjeżdżalnie, zamki i tory przeszkód to gwarancja mnóstwo śmiechu i radości dla wszystkich uczestników. Dopełnij zabawę watą cukrową, popcornem i bańkami mydlanymi, a stworzysz imprezę marzeń!.",
		img: img1,
	},
	{
		id: 2,
		title: "Wesela",
		desc: "Szukasz oryginalnej atrakcji na wesele, która zaskoczy Twoich gości? Dmuchańce Mega Fun to idealny sposób na urozmaicenie przyjęcia i zapewnienie rozrywki zarówno dzieciom, jak i dorosłym. Stwórz niezapomnianą atmosferę i podaruj swoim gościom mnóstwo radości!",
		img: img1,
	},
	{
		id: 3,
		title: "Festyny i pikniki",
		desc: "Rozkręć swój festyn lub piknik z dmuchanymi atrakcjami Mega Fun! Nasze zjeżdżalnie, zamki i tory przeszkód przyciągną tłumy i zapewnią mnóstwo frajdy dla uczestników w każdym wieku. Wata cukrowa, popcorn i bańki mydlane dopełnią całości i stworzą niepowtarzalny klimat!",
		img: img1,
	},
	{
		id: 4,
		title: "Imprezy firmowe",
		desc: "Zorganizuj integracyjną imprezę firmową, która na długo zapadnie w pamięć Twoim pracownikom! Dmuchańce Mega Fun to doskonały sposób na budowanie zespołu, relaks i oderwanie od codziennych obowiązków. Zapewnij swoim pracownikom mnóstwo śmiechu i pozytywnej energii!",
		img: img1,
	},
];

const AboutSection = () => {
	return (
		<section className="py-32">
			<div className="container mt-16">
				<div className="grid xl:grid-cols-2 grid-cols-1 ">
					<div className="flex justify-center flex-col items-center">
						<h2 className="mb-4" data-aos="fade-up" data-aos-offset="200">
							Świetne <strong>Atrakcje</strong>
							<br /> Na różne okazje
						</h2>
						<Image
							alt=""
							src={slide}
							width={500}
							height={500}
							className="object-cover object-center drop-shadow-2xl"
						/>
					</div>
					<div className="xl:-mt-16 grid grid-cols-1 gap-4 md:grid-cols-2">
						{items.map((item, idx) => (
							<div
								className="relative  h-full group rounded-3xl shadow-2xl justify-start  bottom-0 left-0 right-0 top-0 flex flex-col shadow-custom--outside-only transition-all hover:bg-primaryc p-6 text-primaryc hover:text-white"
								key={item.id}
								data-aos="fade-up"
								data-aos-delay={idx * 100}
							>
									<h4 className="mb-4 flex space-x-2 xl:text-2xl text-lg font-bold">{item.title}</h4>
									<p className="group-hover:text-white text-gray text-base">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
