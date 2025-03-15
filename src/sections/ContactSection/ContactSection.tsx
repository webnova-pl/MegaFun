import React from "react";
import Image from "next/image";
import logo from "@public/white.png";
import { FacebookIcon, PhoneIcon } from "@/ui/Icons/icons";
import CtaCallButton from "@/ui/CtaCallButton/CtaCallButton";
import { links } from "@/constants";
import Link from "next/link";

const ContactSection = () => {
	return (
		<section id="contact" className="rounded-container bg-primaryc py-20 pt-40 text-white">
			<div className="container flex flex-col justify-center space-y-10">
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col items-start space-y-8">
						<h3 className="leading-8">Atrakcja na imprezę już wybrana?</h3>
						<p>Zadzwoń i zapewnij swoim gościom niezapomnianą zabawę!</p>
						<div className="flex md:justify-start justify-center items-center w-full">
						<CtaCallButton />

						</div>
						<p>Masz pytanie? Zobacz <Link className="underline" href={links.faq}>Często zadawane pytania</Link> lub zadzwoń</p>
					</div>
					<div className="b flex flex-1 justify-end md:py-0 py-16">
						<Image src={logo} className="w-full max-w-[500px]" alt="logo" />
					</div>
				</div>

				<div className="flex flex-1 flex-col items-center justify-between space-y-4 md:flex-row">
					<p className="flex items-center space-x-2 rounded-md px-4 py-2 text-white transition-transform hover:scale-105">
						<span className="[&>svg>path]:fill-white">
							<PhoneIcon />
						</span>
						<span>+48 662 712 418</span>
					</p>
					<a
						href={links.facebook}
						target="_blank"
						className="flex items-center space-x-2"
					>
						<span className="[&>svg]:w-10">
							<FacebookIcon />
						</span>
						<span>Bądź na bieżąco!</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
