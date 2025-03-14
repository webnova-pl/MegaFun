"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/ballons.json";

const LottieAnimation = (props: React.HTMLAttributes<HTMLDivElement>) => {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	return (
		<div {...props}>{isClient ? <Lottie animationData={animationData} loop={true} /> : null}</div>
	);
};

export default LottieAnimation;
