import { client } from "./sanity";

export async function getAttraction(params?: { slug: string }) {
	const query = `*[_type == "attraction"]{
            _id,
            name,
            slug,
            shortDescription,
            price,
            mainImage
            }`;

	const data = await client.fetch(query, params);

	return data;
}

export async function getSingleAttraction(params: { slug: string }) {
	const query = `*[_type == "attraction" && slug.current == $slug][0]{
            _id,
            name,
            slug,
		description[],
            price,
            mainImage,
            gallery[] {
			asset -> {
				_id,
				url
			}
		}
            }`;

	const data = await client.fetch(query, params);

	return data;
}


export async function getMainPageAttractions() {
	const query = `*[_type == "attraction" && showOnMainPage == true]{
            _id,
            name,
            slug,
            shortDescription,
            price,
            mainImage
            }`;

	const data = await client.fetch(query);

	return data;
}
