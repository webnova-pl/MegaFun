import { FirstArrow, SaveOrderIcon, SecondArrow } from "@/ui/Icons/icons";
import kdrimg from "../../../public/kdr.webp";
import React from "react";
import Image from "next/image";

const RentSection = () => {
	return (
		<section className="container max-w-7xl py-20">
			<h2 className="mb-20 text-center">Dlaczego warto wybrać Mega Fun?</h2>
			<div className="flex flex-col py-28 md:flex-row">
				<div className="flex-1">
					<h3 className="leading-normal">
						<strong className="bg-primaryc px-1 text-white">Bezpieczeństwo</strong> <br /> Na
						pierwszym miejscu
					</h3>
					<p className="text-gray mt-10 max-w-[540px] font-bold">
						Nasze zjeżdżalnie są wykonane z wysokiej jakości materiałów, spełniających normy
						bezpieczeństwa. Dbamy o to, aby każda atrakcja była w pełni bezpieczna dla dzieci
					</p>
				</div>
				<div className="flex flex-1 items-center justify-end">
					<SaveOrderIcon />
				</div>
			</div>
			<div className="flex flex-col py-28 md:flex-row">
				<div className="flex flex-1">
					<Image
						alt="Karta duzej rodziny"
						src={kdrimg}
						width={2000}
						height={2000}
						className="w-[420px]"
					/>
				</div>
				<div className="flex-1">
					<h3 className="text-end leading-normal">
						Honorujemy <br />
						<strong className="bg-primaryc px-1 text-white">Karte dużej rodziny</strong>
					</h3>
					<p className="text-gray ml-auto mt-10 max-w-[540px] text-end font-bold">
						Jesteśmy Partnerem Ministerstwa Rodziny i Polityki Społecznej oraz Związku Dużych Rodzin
						„Trzy Plus” w programie wsparcia dla rodzin wielodzietnych Karta Dużej Rodziny
					</p>
				</div>
			</div>
			<h3 className="relative z-10 pt-28">
				Prosty <strong className="bg-primaryc px-1 text-white">Wynajem</strong>
			</h3>
			<div className="mt-20 grid grid-cols-3 grid-rows-2 gap-y-10">
				<div className="order-1 flex items-center justify-end">
					<div className="shadow-custom max-w-[300px] justify-center rounded-[48px] px-6 py-10">
						<h4 className="text-primaryc text-center text-2xl font-bold">Wybierz atrakcje</h4>
						<p className="text-gray mt-6 text-center font-bold">
							Przeglądnij naszą oferte i wybierz atrakcje która najbardziej odpowiada twoim
							potrzebom
						</p>
					</div>
				</div>
				<div className="order-5 flex items-center justify-center">
					<div className="shadow-custom max-w-[270px] justify-center rounded-[48px] px-6 py-10">
						<h4 className="text-primaryc text-center text-2xl font-bold">Zadzwoń</h4>
						<p className="text-gray mt-6 text-center font-bold">
							Zapytaj o dostepność w danym terminie i zarezerwuj
						</p>
					</div>
				</div>
				<div className="order-3 flex items-center justify-center">
					<div className="bg-primaryc max-w-[412px] justify-center rounded-[48px] px-6 py-10">
						<h4 className="text-center text-2xl font-bold text-white">Baw się dobrze</h4>
						<p className="mt-6 text-center font-bold text-white">
							W wybranym dniu dostarczymy dmuchańca pod twoje drzwi oraz zamontujemy. A po wszystkim
							przyjedziemy go zdemonotwać i odebrać
						</p>
					</div>
				</div>
				<div className="order-4 flex justify-end">
					<FirstArrow />
				</div>
				<div className="order-2 flex items-end justify-end">
					<SecondArrow />
				</div>
				<div className="order-6" />
			</div>
		</section>
	);
};

export default RentSection;
