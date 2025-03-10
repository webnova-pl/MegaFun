"use client";
import { PortableText } from "next-sanity";
import { TypedObject } from "sanity";

export type AttractionDescriptionProps = {
	description: TypedObject | TypedObject[];
	price: string;
};

const AttractionDescription = ({ description, price }: AttractionDescriptionProps) => {
	// const containerRef = useRef<HTMLDivElement>(null);
	// const [overflowData, setOverflowData] = useState(0);

	// useEffect(() => {
	// 	const checkOverflow = () => {
	// 		if (containerRef.current) {
	// 			const rect = containerRef.current.getBoundingClientRect();

	// 			setOverflowData(rect.bottom > window.innerHeight ? rect.bottom - window.innerHeight : 0);
	// 		}
	// 	};

	// 	// Sprawdzenie przy montowaniu i podczas zmiany rozmiaru okna
	// 	checkOverflow();
	// 	window.addEventListener("resize", checkOverflow);
	// 	return () => {
	// 		window.removeEventListener("resize", checkOverflow);
	// 	};
	// }, []);
	// return (
	// 	<div
	// 		ref={containerRef}
	// 		className="flex h-fit max-w-[960px] flex-1 flex-col text-xl max-lg:px-6 lg:sticky"
	// 		style={{
	// 			top: overflowData > 0 ? `-${overflowData}px` : "140px",
	// 		}}
	// 	>
	// 		<div className="prose text-black [&_strong]:bg-transparent">
	// 			<PortableText value={description} />
	// 		</div>
	// 		<div className="mt-10 flex">
	// 			<CtaCallButton className="animate-bounce rounded-lg bg-primaryc px-4 py-2 text-white" />
	// 		</div>
	// 		<div className="mt-10 inline-block font-semibold text-primaryc">od {price} zł</div>
	// 	</div>
	// );

	return (
		<div>
			<PortableText value={description} />
			<span>{price}</span>
		</div>
	);
};

export default AttractionDescription;
