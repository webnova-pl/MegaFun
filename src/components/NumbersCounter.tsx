"use client";
import { useInView } from "framer-motion";
import React, { useRef } from "react";
import CountUp from "react-countup";

const NumbersCounter = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div className="container flex flex-col md:items-center pb-8 pt-16 text-primary">
			<div
				className="grid grid-cols-1 gap-8 md:gap-20 text-4xl md:grid-cols-2 lg:grid-cols-3 [&_p]:text-left [&_p]:text-lg"
				ref={ref}
			>

				<div className="flex flex-col items-start justify-center ">
					<span className="text-primaryc">
						{isInView ? <CountUp end={10} className="" duration={3} delay={0.5} /> : 0} +
					</span>
					<p>Różnych atrakcji</p>
				</div>
				<div className="flex flex-col items-start justify-start">
					<span className="text-primaryc">
						{isInView ? <CountUp end={150} duration={3} delay={0.5} /> : 0} +
					</span>
					<p>Obsłużonych wydarzeń</p>
				</div>
				<div className="flex flex-col items-start justify-center">
					<span className="text-primaryc">
						{isInView ? <CountUp end={100} duration={3} delay={0.5} /> : 0} %
					</span>
					<p>Zadowolonych klientów</p>
				</div>
			</div>
		</div>
	);
};

export default NumbersCounter;
