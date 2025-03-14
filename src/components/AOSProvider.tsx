"use client";

import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: ReactNode }) {
	useEffect(() => {
		// Inicjalizacja AOS tylko po stronie klienta
		AOS.init({
			// Optymalne ustawienia dla wydajności
			once: true, // Animacja wykona się tylko raz
			easing: "ease-out-cubic", // Płynna funkcja przejścia
			duration: 600, // Krótszy czas trwania dla lepszej wydajności
			offset: 120, // Offset dla wyzwalania animacji
			delay: 0, // Domyślnie bez opóźnienia
			throttleDelay: 99, // Zmniejszenie obciążenia przy przewijaniu
		});

		// Odświeżanie AOS po hydratacji React
		const refreshAOS = setTimeout(() => {
			AOS.refresh();
		}, 500);

		return () => clearTimeout(refreshAOS);
	}, []);

	return <>{children}</>;
}
