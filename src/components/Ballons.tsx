"use client";

import dynamic from "next/dynamic";
import animationData from "@/assets/ballons.json";

// ✅ Importujemy `Lottie` dynamicznie, aby Next.js nie próbował go renderować na serwerze
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LottieAnimation = (props: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...props}>
			{/* ✅ `Lottie` jest teraz ładowane tylko na kliencie */}
			<Lottie animationData={animationData} loop />
		</div>
	);
};

export default LottieAnimation;
