import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";

export type AttractionDescriptionProps = {
	description: TypedObject | TypedObject[];
};

const AttractionDescription = ({ description }: AttractionDescriptionProps) => {
	return (
		<div
			className="flex h-fit max-w-[960px] flex-1 flex-col text-xl lg:sticky lg:top-[80px] pb-20"
		>
			<div className="prose [&_strong]:bg-transparent ]">
				<PortableText value={description} />
			</div>
			<div className="flex justify-center md:justify-between flex-col">
				<p className="font-semi-bold">Usługa dodatkowa (nie obowiązkowa) opiekun do atrakcji 30 zł za godzinę </p>
			</div>
		</div>
	);
};

export default AttractionDescription;
