export type AttractionType = {
	id: string;
	name: string;
	slug: { current: string };
	shortDescription: string;
	price: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	mainImage: any;
};
