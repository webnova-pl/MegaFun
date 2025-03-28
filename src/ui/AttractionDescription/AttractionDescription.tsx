import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";
import CtaCallButton from "../CtaCallButton/CtaCallButton";

export type AttractionDescriptionProps = {
	description: TypedObject | TypedObject[];
	price: string;
};

const AttractionDescription = ({ description, price }: AttractionDescriptionProps) => {
	return (
		<div
			className="flex h-fit max-w-[960px] flex-1 flex-col text-xl max-lg:px-6 lg:sticky lg:top-[80px] pb-20"
		>
			<div className="prose [&_strong]:bg-transparent ]">
				<PortableText value={description} />
			</div>
			<div className="flex justify-center md:justify-between flex-col">
				<div className="mt-10 inline-block text-2xl font-semibold text-primaryc">Wynajem już od {price} PLN</div>
				<p className="font-semi-bold">Usługa dodatkowa (nie obowiązkowa) opiekun do atrakcji 30 zł za godzinę </p>
				<div className="mt-10 flex justify-center md:justify-start">
					<CtaCallButton className="animate-bounce rounded-lg bg-primaryc px-4 py-2 text-white" />
				</div>
			</div>
		</div>
	);
};

export default AttractionDescription;
