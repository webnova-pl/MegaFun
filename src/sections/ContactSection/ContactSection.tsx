import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { FacebookIcon, InstaIcon, PhoneIcon } from "@/ui/Icons/icons";
import CtaCallButton from "@/ui/CtaCallButton/CtaCallButton";

const ContactSection = () => {
	return (
		<section className="bg-primaryc mt-20 rounded-t-[5rem] py-20 text-white">
			<div className="container flex flex-col justify-center space-y-10">
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col items-start space-y-8">
						<h3 className="">Atrakcja na imprezę już wybrana?</h3>
						<p>Zadzwoń i zapewnij swoim gościom niezapomnianą zabawę!</p>
						<CtaCallButton />
					</div>
					<div className="b flex flex-1 justify-end">
						<Image src={logo} className="w-full max-w-[500px]" alt="logo" />
					</div>
				</div>

				<div className="flex flex-1 items-center justify-between space-y-4">
					<a
						className="flex items-center space-x-2"
						target="_blank"
						href="https://www.instagram.com/"
					>
						<span className="[&>svg]:w-10">
							<InstaIcon />
						</span>
						<span>Obserwuj nas na instagramie!</span>
					</a>
					<a
						href="tel:+48662712418"
						className="text-primaryc flex items-center space-x-2 rounded-md bg-white px-4 py-2 transition-transform hover:scale-105"
					>
						<span className="[&>svg>path]:fill-primaryc">
							<PhoneIcon />
						</span>
						<span>+48 662 712 418</span>
					</a>
					<a
						href="https://www.facebook.com/"
						target="_blank"
						className="flex items-center space-x-2"
					>
						<span className="[&>svg]:w-10">
							<FacebookIcon />
						</span>
						<span>Bądź na bierząco!</span>
					</a>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
