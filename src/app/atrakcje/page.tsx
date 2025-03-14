import AttractionCard from "@/components/AttractionCard";
import { getAttraction } from "@/lib/query";
import { AttractionType } from "@/types";

const AttractionsPage = async () => {
	const data: AttractionType[] = await getAttraction();

	return (
		<main className="py-40">
			<div className="container">
				<div className="mt-40 grid grid-cols-3 gap-10">
					{data.map((item, idx) => (
						<AttractionCard key={`${item.id}-${idx}`} attraction={item} />
					))}
				</div>
			</div>
		</main>
	);
};

export default AttractionsPage;
