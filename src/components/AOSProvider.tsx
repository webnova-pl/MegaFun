// components/AOSProvider.tsx
"use client";

import { useEffect, ReactNode } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: ReactNode }) {
	useEffect(() => {
		AOS.init({
			easing: "ease-out-quad",
			duration: 1000,
		});
	}, []);

	return <>{children}</>;
}
