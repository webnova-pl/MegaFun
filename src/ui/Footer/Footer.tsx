import { links } from "@/constants";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="shadow-footer flex min-h-20 items-center rounded-t-[2rem] -mt-8 bg-white">
			<div className="container flex flex-col justify-between md:flex-row py-8">
				<div className="flex gap-4 md:flex-row flex-col items-center">
					<Link href={links.gallery}>Galeria zdjęć</Link>
					<Link href={links.attractions}>Atrakcje</Link>
					<Link href={links.faq}>FAQ</Link>
					<Link href={links.contact}>Kontakt</Link>
				</div>
				<div className="flex gap-4 md:flex-row flex-col mt-4 items-center ">
					<a href="tel:+48662712418">+48 662 712 418</a>
					<a href="mailto:megafun1524@gmail.com">megafun1524@gmail.com</a>
					<span>Ruszelczyce 31, Krzywcza</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
