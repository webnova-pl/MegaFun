import React from "react";

const RentSection = () => {
	return (
		<section className="container py-20">
			<h2 className="relative z-10 text-4xl font-bold">
				Prosty <strong className="bg-primaryc px-1 text-white">Wynajem</strong>
			</h2>
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
				<div className="order-4">elo2</div>
				<div className="order-2">elo 3</div>
				<div className="order-6">elo 4</div>
			</div>
		</section>
	);
};

export default RentSection;
