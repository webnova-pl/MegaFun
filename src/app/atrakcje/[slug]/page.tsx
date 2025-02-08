import { PageProps } from ".next/types/app/page";
import { getAttraction } from "@/lib/query";
import { client } from "@/lib/sanity";
import { notFound } from "next/navigation";

// type AttractionProps = {
// 	params: { slug: string }; // Pobieramy slug z URL-a
// };

export async function generateStaticParams() {
	const query = `*[_type == "attraction"]{ slug }`;
	const attractions = await client.fetch(query);

	return attractions.map((attraction: { slug: { current: string } }) => ({
		slug: attraction.slug.current, // ✅ Zwracamy poprawny slug
	}));
}

const AttractionPage = async ({ params }: PageProps) => {
	const { slug } = await params;

	const attraction = await getAttraction({ slug: slug });

	if (!attraction) return notFound(); // Jeśli brak atrakcji → 404

	return (
		<main className="py-40">
			<div className="container">{attraction[0].name}</div>
		</main>
	);
};

export default AttractionPage;
