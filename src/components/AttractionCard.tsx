import { urlFor } from "@/lib/sanity";
import { AttractionType } from "@/types";
import ArrowButtonLink from "@/ui/Buttons/ArrowButtonLink";

const AttractionCard: React.FC<{ attraction: AttractionType }> = ({ attraction }) => {
	return (
		<div
			className="relative h-[40rem] overflow-hidden border-8 bg-cover bg-center p-4 shadow-md rounded-[2rem]"
			style={{
				backgroundImage: attraction.name
					? `linear-gradient(#202020cc,#30303000 40%,#30303000 70%, #202020cc), url(${urlFor(attraction.mainImage).url()})`
					: "none",
			}}
		>
			<div className="h-full flex justify-between flex-col">
				<div className="rounded-md p-4 ">
					<h2 className="text-3xl text-white ">{attraction.name}</h2>
				</div>
				<div className="bottom-10 w-full flex flex-col items-center justify-between">
                    <p className="text-shadow text-2xl drop-shadow-md font-bold mb-3">Już od {attraction.price} PLN</p>
					<ArrowButtonLink href={attraction.slug.current}>Dowiedz się więcej</ArrowButtonLink>
				</div>
			</div>
		</div>
	);
};

export default AttractionCard;
