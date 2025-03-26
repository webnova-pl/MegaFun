import { links } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="-mt-8 flex min-h-20 flex-col items-center rounded-t-[2rem] bg-white shadow-footer">
			<div className="container flex flex-col justify-between pb-4 pt-8 md:flex-row">
				<div className="flex flex-col items-center gap-4 md:flex-row">
					<Link href={links.gallery}>Galeria zdjęć</Link>
					<Link href={links.attractions}>Atrakcje</Link>
					<Link href={links.faq}>FAQ</Link>
					<Link href={links.contact}>Kontakt</Link>
				</div>
				<div className="flex flex-col items-center gap-4 max-md:mt-4 md:flex-row">
					<a href="tel:+48662712418">+48 662 712 418</a>
					<a href="mailto:megafun1524@gmail.com">megafun1524@gmail.com</a>
					<span>Ruszelczyce 31, Krzywcza</span>
				</div>
			</div>
			<div className="container flex py-4 max-md:justify-center">
				Projekt i realizacja:{" "}
				<a href="https://www.web-nova.pl/" className="ml-2 underline">
					Web nova
				</a>
			</div>
		</footer>
	);
};

export default Footer;
