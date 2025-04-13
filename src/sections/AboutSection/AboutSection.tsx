import Image from "next/image";
import img1 from "../../../public/wedding.webp";
import logo from "@public/dmuchaniec.png";

import NumbersCounter from "../../components/NumbersCounter";

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
		desc: "Zorganizuj integracyjną imprezę firmową, która na długo zapadnie w pamięć Twoim pracownikom! Dmuchańce Mega Fun to doskonały sposób na budowanie zespołu, relaks i oderwanie od codziennych obowiązków. Zapewnij swoim pracownikom lub ich dzieciom mnóstwo śmiechu i pozytywnej energii!",
		img: img1,
	},
];

const AboutSection = () => {
	return (
		<section className="py-16 pt-8 md:py-32 bg-contain bg-no-repeat z-30 bg-[url('/decoration.svg')] md:pt-48 ">
			<div className="container flex flex-col items-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
					<div className="item mt-8 flex max-w-[35rem] flex-col text-xl md:py-16">
						<h2 className="text mb-4 text-left text-4xl leading-[3.5rem]" >
							 O Nas
						</h2>
						<p className="text-xl" data-aos="fade-up">
							Jesteśmy firmą, która z pasją dostarcza najlepsze dmuchane atrakcje na wszelkiego
							rodzaju eventy – od urodzin i festynów po duże wydarzenia plenerowe. Naszym celem jest
							zapewnienie maksymalnej radości i bezpieczeństwa, dlatego oferujemy wyłącznie wysokiej
							jakości dmuchane place zabaw, zjeżdżalnie i tory przeszkód, które spełniają najwyższe
							standardy. Dzięki wieloletniemu doświadczeniu wiemy, jak stworzyć niezapomniane chwile
							dla dzieci i dorosłych.
						</p>
						<NumbersCounter />
					</div>
					<Image
						alt="Dmuchana zdjeżdżalnia"
						src={logo}
						width={600}
						height={600}
						className="object-cover object-center drop-shadow-2xl"
					/>
				</div>
			</div>

			<div className="container">
				<h2 className="text my-12 mb-16 text-center text-4xl text-primaryc mt-16" data-aos="fade-up">
					Z nami twoje wydarzenie zapadnie w pamięci
				</h2>
				<div className="grid grid-cols-1 py-12">
					<div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
						{items.map((item, idx) => (
							<div
								className="transition-duration-[2s] group relative bottom-0 left-0 right-0 top-0 flex h-full flex-col justify-start rounded-3xl bg-white p-6 text-primaryc shadow-xl transition-all hover:bg-primaryc hover:text-white"
								key={item.id}
								data-aos="fade-up"
								data-aos-delay={idx * 100}
							>
								<h3 className="mb-4 flex space-x-2 text-lg font-bold xl:text-2xl">{item.title}</h3>
								<p className="text-base text-gray group-hover:text-white">{item.desc}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
