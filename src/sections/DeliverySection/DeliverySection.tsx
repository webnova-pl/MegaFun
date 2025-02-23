import { Delivery } from "@/ui/Icons/icons";
import Image from "next/image";
import Map from "@public/map.svg";

const DeliverySection = () => {
	return (
		<section className="pb-32">
			<div className="container">
				<div className="flex flex-col items-center justify-center">
					<div className="flex w-full flex-col items-center justify-around py-16 lg:flex-row-reverse" >
						<Image
							alt="Mapa podkarpacia"
							src={Map}
							width={500}
							height={500}
							className="object-cover object-center"
						/>
						<div className="max-w-[35rem] text-left text-xl text-gray" data-aos="fade-right">
							<div className="flex items-center gap-4">
								<h2>Dostawa GRATIS</h2>
								<Delivery></Delivery>
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
		</section>
	);
};

export default DeliverySection;
