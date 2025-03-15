import { FirstArrow, SaveOrderIcon, SecondArrow } from "@/ui/Icons/icons";
import kdrimg from "../../../public/kdr.webp";
import React from "react";
import Image from "next/image";
import Map from "@public/map.svg";

const RentSection = () => {
	return (
		<section className="rounded-container container relative z-10 -mb-20 -mt-20 bg-white px-4 pt-20 shadow-md md:py-20 lg:px-40">
			<h2 className="mb-12 text-center">Dlaczego warto wybrać Mega Fun?</h2>
			<div className="flex flex-col items-center gap-12 md:py-20 lg:flex-row">
				<div className="flex-1" data-aos="fade-up" data-aos-offset="200">
					<h3 className="leading-[3.5rem] text-primaryc">
						<strong className="strong">Bezpieczeństwo</strong> <br /> Na pierwszym miejscu
					</h3>
					<p className="mt-10 max-w-[540px] text-xl text-gray">
						Nasze zjeżdżalnie są wykonane z wysokiej jakości materiałów, spełniających normy
						bezpieczeństwa. Dbamy o to, aby każda atrakcja była w pełni bezpieczna dla dzieci,
						dlatego wszystkie z nich posiadają atest.
					</p>
				</div>
				<div className="flex flex-1 items-center justify-end">
					<SaveOrderIcon />
				</div>
			</div>
			<div className="flex flex-col-reverse items-center gap-12 md:py-20 lg:flex-row">
				<div className="flex flex-1">
					<Image
						alt="Karta duzej rodziny"
						src={kdrimg}
						width={1000}
						height={1000}
						className="w-[420px]"
					/>
				</div>
				<div className="flex-1" data-aos="fade-up" data-aos-offset="200">
					<h3 className="text-left leading-normal text-primaryc lg:text-end">
						Honorujemy <br />
						<strong className="bg-primaryc px-1 text-white">Karte dużej rodziny</strong>
					</h3>
					<p className="ml-auto mt-10 max-w-[540px] text-left text-xl text-gray lg:text-end">
						Jesteśmy Partnerem Ministerstwa Rodziny i Polityki Społecznej oraz Związku Dużych Rodzin
						„Trzy Plus” w programie wsparcia dla rodzin wielodzietnych Karta Dużej Rodziny
					</p>
				</div>
			</div>
			<div className="container">
				<div className="flex flex-col items-center justify-center">
					<div className="flex w-full flex-col-reverse items-center justify-around py-16 lg:flex-row-reverse">
						<Image
							alt="Zakres zostaw, mapa podkarpacia"
							src={Map}
							width={500}
							height={500}
							className="object-cover object-center"
						/>
						<div className="mb-12 max-w-[35rem] text-left text-xl text-gray" data-aos="fade-up">
							<div className="mb-8 flex items-center gap-4">
								<h3>
									<strong className="strong"> Dostawa GRATIS</strong>{" "}
								</h3>
							</div>
							<p className="text-xl">
								Działamy na terenie całego województwa podkarpackiego, a jeśli znajdujesz się w
								promieniu 30 km od naszej lokalizacji, dowieziemy do ciebie atrakcje
								<span className="ml-2 bg-primaryc px-2 font-bold text-white">ZA DARMO!</span> <br />
								Więc jeżeli jesteś z okolic:
							</p>
							<ul className="ml-5 list-disc py-4">
								<li>Przemyśla</li>
								<li>Jarosławia</li>
								<li>Dubiecka</li>
								<li>Arłamowa</li>
							</ul>
							<p>za dostawę nie poniesiesz żadnych kosztów.</p>
						</div>
					</div>
				</div>
			</div>
			<div 					data-aos="fade-zoom-up"
					data-aos-offset="200">
				<h3 className="relative z-10 pt-12 text-center text-primaryc">
					<strong>Prosty Wynajem</strong>
				</h3>
				<div
					className="mt-10 grid grid-cols-1 grid-rows-2 gap-5 lg:grid-cols-3"
				>
					<div className="order-1 flex items-center lg:justify-end">
						<div className="justify-center rounded-[48px] px-6 py-10 shadow-2xl transition-all hover:scale-[1.05] lg:max-w-[300px]">
							<h4 className="text-center text-2xl font-bold text-primaryc">Wybierz atrakcje</h4>
							<p className="font-semi mt-6 text-center text-gray">
								Przeglądnij naszą oferte i wybierz atrakcje która najbardziej odpowiada twoim
								potrzebom
							</p>
						</div>
					</div>
					<div className="order-2 flex items-center justify-center lg:order-5">
						<div className="w-full justify-center rounded-[48px] px-6 py-10 shadow-2xl transition-all hover:scale-[1.05] lg:max-w-[270px]">
							<h4 className="text-center text-2xl font-bold text-primaryc">Zadzwoń</h4>
							<p className="font-semi mt-6 text-center text-gray">
								Zapytaj o dostepność w danym terminie i zarezerwuj
							</p>
						</div>
					</div>
					<div className="order-3 flex items-center justify-center">
						<div className="justify-center rounded-[48px] bg-primaryc px-6 py-10 transition-all hover:scale-[1.05] lg:max-w-[412px]">
							<h4 className="text-center text-2xl font-bold text-white">Baw się dobrze</h4>
							<p className="font-semi mt-6 text-center text-white">
								W wybranym dniu dostarczymy dmuchańca pod twoje drzwi oraz zamontujemy. A po
								wszystkim przyjedziemy go zdemonotwać i odebrać
							</p>
						</div>
					</div>
					<div className="order-4 hidden justify-end lg:flex">
						<FirstArrow />
					</div>
					<div className="order-2 hidden items-end justify-end lg:flex">
						<SecondArrow />
					</div>
					<div className="order-6" />
				</div>
			</div>
		</section>
	);
};

export default RentSection;
