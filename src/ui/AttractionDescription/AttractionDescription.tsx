"use client";
import { PortableText } from "next-sanity";
import React, { useEffect, useRef, useState } from "react";
import { TypedObject } from "sanity";
import CtaCallButton from "../CtaCallButton/CtaCallButton";

export type AttractionDescriptionProps = {
	description: TypedObject | TypedObject[];
	price: string;
};

const AttractionDescription = ({ description, price }: AttractionDescriptionProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [overflowData, setOverflowData] = useState(0);

	useEffect(() => {
		const checkOverflow = () => {
			if (containerRef.current) {
				const rect = containerRef.current.getBoundingClientRect();

				setOverflowData(rect.bottom > window.innerHeight ? rect.bottom - window.innerHeight : 0);
			}
		};

		// Sprawdzenie przy montowaniu i podczas zmiany rozmiaru okna
		checkOverflow();
		window.addEventListener("resize", checkOverflow);
		return () => {
			window.removeEventListener("resize", checkOverflow);
		};
	}, []);
	return (
		<div
			ref={containerRef}
			className="flex h-fit max-w-[960px] flex-1 flex-col text-xl max-lg:px-6 lg:sticky"
			style={{
				top: overflowData > 0 ? `-${overflowData}px` : "140px",
			}}
		>
			{/* <p>{attraction.description}</p> */}
			<div className="prose text-black">
				<PortableText value={description} />
			</div>
			<div className="mt-10 flex">
				<CtaCallButton className="animate-bounce rounded-lg bg-primaryc px-4 py-2 text-white" />
			</div>
			<div className="mt-10 inline-block font-semibold text-primaryc">od {price} zł</div>
		</div>
	);
};

export default AttractionDescription;
