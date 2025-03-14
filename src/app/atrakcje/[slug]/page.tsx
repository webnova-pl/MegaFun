// import { PageProps } from ".next/types/app/page";
// import { getSingleAttraction } from "@/lib/query";
// import { client } from "@/lib/sanity";
// import AttractionDescription from "@/ui/AttractionDescription/AttractionDescription";
// import AttractionImages from "@/ui/AttractionImages/AttractionImages";
// import { notFound } from "next/navigation";
// import { TypedObject } from "sanity";

// export async function generateStaticParams() {
// 	const query = `*[_type == "attraction"]{ slug }`;
// 	const attractions = await client.fetch(query);

// 	return attractions.map((attraction: { slug: { current: string } }) => ({
// 		slug: attraction.slug.current,
// 	}));
// }

const AttractionPage = async () => {
	// const { slug } = await params;

	// const attraction: {
	// 	name: string;
	// 	description: TypedObject | TypedObject[];
	// 	price: string;
	// 	mainImage: { asset: { _ref: string; _type: string } };
	// 	gallery: { asset: { url: string; _id: string } }[];
	// } = await getSingleAttraction({ slug: slug });

	// if (!attraction) return notFound();

	// return (
	// 	<main className="">
	// 		<section className="rounded-b-[5rem] bg-primaryc pb-40 pt-52">
	// 			<div className="container text-3xl font-bold text-white lg:text-5xl">
	// 				<h1 className="text-center">{attraction.name}</h1>
	// 			</div>
	// 		</section>
	// 		<section className="relative z-10 -mb-20 -mt-20 max-w-7xl rounded-[5rem] bg-white py-20 shadow-md lg:container max-lg:overflow-hidden max-lg:pb-0 md:pl-20">
	// 			<div className="flex flex-col max-lg:space-y-10 md:flex-row lg:space-x-10">
	// 				<AttractionDescription description={attraction.description} price={attraction.price} />
	// 				<div className="flex-1 overflow-hidden lg:rounded-b-3xl">
	// 					<AttractionImages mainImage={attraction.mainImage} images={attraction.gallery} />
	// 				</div>
	// 			</div>
	// 		</section>
	// 	</main>
	// );

	return <main>SINGLE ATTRACTION</main>;
};

export default AttractionPage;
