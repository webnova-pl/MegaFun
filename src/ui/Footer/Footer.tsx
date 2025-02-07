import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="shadow-footer flex h-20 items-center">
			<div className="container flex flex-col justify-between md:flex-row">
				<div className="flex space-x-6">
					<Link href="#">Galeria zdjęć</Link>
					<Link href="#">Atrakcje</Link>
					<Link href="#">Kontakt</Link>
				</div>
				<div className="flex space-x-6">
					<a href="tel:+48662712418">+48 662 712 418</a>
					<a href="mailto:megafun1524@gmail.com">megafun1524@gmail.com</a>
					<span>Ruszelczyce 31, Krzywcza</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
