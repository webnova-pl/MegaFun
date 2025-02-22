import { PageProps } from ".next/types/app/page";
import { getSingleAttraction } from "@/lib/query";
import { client, urlFor } from "@/lib/sanity";
import CtaCallButton from "@/ui/CtaCallButton/CtaCallButton";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";

// type AttractionProps = {
// 	params: { slug: string }; // Pobieramy slug z URL-a
// };

export async function generateStaticParams() {
	const query = `*[_type == "attraction"]{ slug }`;
	const attractions = await client.fetch(query);

	return attractions.map((attraction: { slug: { current: string } }) => ({
		slug: attraction.slug.current,
	}));
}

const AttractionPage = async ({ params }: PageProps) => {
	const { slug } = await params;

	const attraction = await getSingleAttraction({ slug: slug });

	if (!attraction) return notFound();

	return (
		<main className="">
			<section className="rounded-b-[5rem] bg-primaryc pb-40 pt-52">
				<div className="container text-3xl font-bold text-white lg:text-5xl">
					<h1>{attraction.name}</h1>
				</div>
			</section>
			<section className="container relative z-10 -mb-20 -mt-20 max-w-7xl rounded-[5rem] bg-white px-6 py-20 shadow-md md:px-20">
				<div className="flex flex-col max-lg:space-y-10 md:flex-row lg:space-x-10">
					<div className="flex flex-1 flex-col text-xl">
						{/* <p>{attraction.description}</p> */}
						<div className="prose text-black">
							<PortableText value={attraction.description} />
						</div>
						<div className="mt-10 flex">
							<CtaCallButton className="animate-bounce rounded-lg bg-primaryc px-4 py-2 text-white" />
						</div>
						<div className="mt-10 inline-block font-semibold text-primaryc">
							od {attraction.price} zł
						</div>
					</div>
					<div className="flex-1 overflow-hidden rounded-b-3xl">
						<Image
							src={urlFor(attraction.mainImage).url()}
							alt={attraction.name}
							width={1000}
							height={1000}
						/>
						{attraction.gallery.map((img: any, idx) => (
							<Image
								alt=""
								src={urlFor(img.asset.url).url()}
								key={img.asset._id}
								width={1000}
								height={1000}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default AttractionPage;
