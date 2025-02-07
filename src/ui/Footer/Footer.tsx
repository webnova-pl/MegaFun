import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="container flex flex-col md:flex-row">
			<div className="flex space-x-6">
				<Link href="#">Galeria zdjęć</Link>
				<Link href="#">Atrakcje</Link>
				<Link href="#">Kontakt</Link>
			</div>
			<div className="flex space-x-6"></div>
		</footer>
	);
};

export default Footer;
