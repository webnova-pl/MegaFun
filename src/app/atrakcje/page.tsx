import { links } from "@/constants";
import { getAttraction } from "@/lib/query";
import { AttractionType } from "@/types";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { urlFor } from "@/lib/sanity";

const AttractionsPage = async () => {
	const data: AttractionType[] = await getAttraction();

	return (
		<main className="py-40">
			<div className="container">
				<div className="mt-40 grid grid-cols-3 gap-10">
					{data.map((item, idx) => (
						<div
							key={`${item.id}-${idx}`}
							className="flex flex-col items-center rounded-[2rem] bg-white px-10 py-10 text-black"
						>
							<Image
								src={urlFor(item.mainImage).url()}
								alt=""
								width={1000}
								height={1000}
								className="-mt-32 max-w-[300px]"
							/>
							<h4 className="text-primaryc mb-10 text-center text-3xl font-bold">{item.name}</h4>
							<p className="text-gray mb-10 text-center text-lg">{item.description}</p>
							<Link
								href={`${links.attractions}/${item.slug.current}`}
								className="bg-primaryc mt-auto w-full rounded-full py-4 text-center text-xl text-white"
							>
								Dowiedz się więcej
							</Link>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default AttractionsPage;
