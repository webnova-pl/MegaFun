import { client } from "./sanity";

export async function getAttraction() {
	const query = `*[_type == "attraction"]{
            _id,
            name,
            slug,
            description,
            price,
            mainImage
            }`;

	const data = await client.fetch(query, {});

	return data;
}
