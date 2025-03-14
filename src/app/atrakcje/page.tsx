import AttractionCard from "@/components/AttractionCard";
import { getAttraction } from "@/lib/query";
import { AttractionType } from "@/types";

const AttractionsPage = async () => {
	const data: AttractionType[] = await getAttraction();

	return (
		<main className="pb-40 pt-40 lg:pt-60">
			<div className="container">
				<h1 className="text-center text-3xl font-bold text-primaryc lg:text-5xl">
					Sprawdź nasze atrakcje
				</h1>
				<div className="mt-40 grid grid-cols-1 gap-10 lg:grid-cols-3">
					{data.map((item, idx) => (
						<AttractionCard key={`${item.id}-${idx}`} attraction={item} />
					))}
				</div>
			</div>
		</main>
	);
};

export default AttractionsPage;
