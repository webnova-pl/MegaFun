import { client } from "./sanity";

export async function getAttraction(params?: { slug: string }) {
	const query = `*[_type == "attraction"]{
            _id,
            name,
            slug,
            description,
            price,
            mainImage
            }`;

	const data = await client.fetch(query, params);

	return data;
}
