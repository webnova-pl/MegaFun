import { links } from "@/constants";
import { urlFor } from "@/lib/sanity";
import { AttractionType } from "@/types";
import ArrowButtonLink from "@/ui/Buttons/ArrowButtonLink";

const AttractionCard: React.FC<{ attraction: AttractionType }> = ({ attraction }) => {
	return (
		<div
			className="relative h-[40rem] overflow-hidden rounded-[2rem] border-8 bg-cover bg-center p-4 shadow-md"
			style={{
				backgroundImage: attraction.name
					? `linear-gradient(#202020cc,#30303000 40%,#30303000 70%, #202020cc), url(${urlFor(attraction.mainImage).url()})`
					: "none",
			}}
		>
			<div className="flex h-full flex-col justify-between">
				<div className="rounded-md p-4">
					<h2 className="text-3xl text-white">{attraction.name}</h2>
				</div>
				<div className="bottom-10 flex w-full flex-col items-center justify-between">
					<p className="text-shadow mb-3 text-2xl font-bold text-white drop-shadow-md">
						Już od {attraction.price} PLN
					</p>
					<ArrowButtonLink href={`${links.attractions}/${attraction.slug.current}`}>
						Dowiedz się więcej
					</ArrowButtonLink>
				</div>
			</div>
		</div>
	);
};

export default AttractionCard;
