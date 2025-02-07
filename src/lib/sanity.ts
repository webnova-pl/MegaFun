import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "ccdolf8h",
	dataset: "production",
	apiVersion: "2023-01-01",
	useCdn: true,
});
