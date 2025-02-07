"use client";
import { links } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Burger } from "../Burger/Burger";
import { InstaIcon, FacebookIcon } from "@/ui/Icons/icons";
import styles from "./Header.module.scss";
import logo from "@/assets/logo.png";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const scrollToSection = (sectionId: string) => {
		const contactSection = document.getElementById(sectionId);

		if (mobileMenuOpen) setMobileMenuOpen(false);

		if (pathname !== links.homePage) {
			router.push(`${links.homePage}#${sectionId}`);
		} else {
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: "smooth" });
			}
		}
	};

	const handleOpenMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	// useEffect(() => {
	//   window.addEventListener("scroll", changeHeader);

	//   return window.removeEventListener("scroll", changeHeader);
	// }, []);

	// window.addEventListener("scroll", changeHeader);

	useEffect(() => {
		setMobileMenuOpen(false);
	}, [pathname]);

	return (
		<header
			className={`bg-primary fixed top-0 z-40 h-20 w-full rounded-b-full transition-all ${styles.header}`}
		>
			<nav
				className={`mx-auto flex h-full max-w-7xl items-center justify-between p-6 lg:px-0 lg:py-0 ${styles.nav}`}
				aria-label="Global"
			>
				<div className="flex lg:hidden">
					<Burger open={mobileMenuOpen} onClick={handleOpenMenu} />
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-12">
					<div className="flex w-96 space-x-16">
						<Link
							href={links.homePage}
							className={`text-md hover:text-secondaryc whitespace-nowrap font-semibold leading-6 tracking-wider text-white transition-all`}
						>
							O nas
						</Link>

						<Link
							href={links.terms}
							className={`text-md hover:text-secondaryc font-semibold leading-6 tracking-wider text-white transition-all`}
						>
							Galeria Zdjęć
						</Link>
					</div>
					<div className="mt-16 flex justify-center lg:flex-1">
						<Link href={links.homePage} className="bg-primaryc -mt-4 px-6 rounded-[50%] p-1.5 text-white">
							<Image src={logo} className="h-32 w-48 pb-2" alt="logo" />
						</Link>
					</div>
					<div className="flex w-96 items-center space-x-16">
						<Link
							href={links.attractions}
							className={`text-md hover:text-secondaryc font-semibold leading-6 tracking-wider text-white transition-all`}
						>
							Atrakcje
						</Link>
						<span
							onClick={() => scrollToSection("contact")}
							className="shadow-on-hover text-md bg-secondaryc cursor-pointer whitespace-nowrap rounded-full px-4 py-2 font-semibold leading-6 tracking-wider text-white transition-all"
						>
							Skontaktuj się
						</span>
						<div className={`${styles.icon_wr} flex gap-4`}>
							<Link
								href={links.facebook}
								target="_blank"
								className="hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							>
								<FacebookIcon />
							</Link>
							<Link
								href={links.instagram}
								target="_blank"
								className="hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							>
								<InstaIcon />
							</Link>
							<Link
								href={links.youtube}
								target="_blank"
								className="color-on-hover hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							></Link>
						</div>
					</div>
				</div>
			</nav>

			<div
				className={`fixed top-0 mx-0 h-full w-full origin-top border-0 bg-gradient-to-tr from-[#FF3E27] to-[#FF3061] transition-transform lg:hidden ${
					mobileMenuOpen ? "left-0 z-40 translate-x-[0%]" : "-ml-4 translate-x-[100%]"
				}`}
			>
				<div className="flex items-center justify-between">
					<Link href={links.homePage} className="ml-4 pt-8">
						<Image src={logo} className="h-64 w-64" alt="logo" />
					</Link>
				</div>
				<div className="mt-6 flex h-full justify-center pt-16">
					<div className="-my-6 divide-gray-200">
						<div className="flex flex-col items-center space-y-2 py-6">
							<Link
								href={links.homePage}
								className="hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							>
								Strona główna
							</Link>
							<Link
								href={links.terms}
								className="hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							>
								Regulamin
							</Link>
							<Link
								href={links.attractions}
								className="hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							>
								Atrakcje
							</Link>
							<Link
								href={links.pricelist}
								className="hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							>
								Cennik
							</Link>
						</div>
						<div className="flex items-center justify-center py-6">
							<span
								onClick={() => scrollToSection("contact")}
								className="shadow-on-hover cursor-pointer whitespace-nowrap rounded-2xl px-4 py-2 text-2xl font-semibold leading-6 text-white transition-all"
							>
								Skontaktuj się
							</span>
						</div>
						<div className={`${styles.icon_wr} flex items-center justify-center gap-4`}>
							<Link
								href={links.facebook}
								target="_blank"
								className="color-on-hover hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7"
							>
								<FacebookIcon />
							</Link>
							<Link
								href={links.instagram}
								target="_blank"
								className="color-on-hover hover:text-secondaryc -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							>
								<InstaIcon />
							</Link>
							<Link
								href={links.youtube}
								target="_blank"
								className="color-on-hover -mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white"
							></Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
