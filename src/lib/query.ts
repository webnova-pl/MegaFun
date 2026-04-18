import { client } from "./sanity";

export async function getAttraction(params?: { slug: string }) {
	const query = `*[_type == "attraction"] | order(order asc, name asc) {
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
		shortDescription,
		description,
		price,
		mainImage,
		mainVideo{
			asset->{
				_id,
				url
			}
		},
		gallery[]{
			_type,
			_key,
			asset->{
				_id,
				url,
				mimeType,
				originalFilename
			}
		},
		order
	}`;

	const data = await client.fetch(query, params);

	return data;
}

export async function getMainPageAttractions() {
	// Also updated this query to include sorting
	const query = `*[_type == "attraction" && showOnMainPage == true] | order(order asc, name asc) {
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
