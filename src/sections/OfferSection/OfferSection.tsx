import { getAttraction } from "@/lib/query";
import { AttractionType } from "@/types";
import React from "react";

const OfferSection = async () => {
	const data: AttractionType[] = await getAttraction();

	return (
		<div>
			{data.map((item) => (
				<div key={item.name}>{item.name}</div>
			))}
		</div>
	);
};

export default OfferSection;
