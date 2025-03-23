"use client";
import { links } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Burger } from "../Burger/Burger";
import { FacebookIcon } from "@/ui/Icons/icons";
import styles from "./Header.module.scss";
import logo from "@public/monkey-head.svg";
import CtaCallButton from "../CtaCallButton/CtaCallButton";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [visible, setVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const pathname = usePathname();

	const handleOpenMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);

		if (!mobileMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	};

	useEffect(() => {
		setMobileMenuOpen(false);
		document.body.style.overflow = 'auto';
	}, [pathname]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			
			if (currentScrollY > lastScrollY) {
				setVisible(false);
			} else {
				setVisible(true);
			}
			
			setLastScrollY(currentScrollY);
		};
		
		window.addEventListener("scroll", handleScroll);
		
		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.body.style.overflow = 'auto';
		};
	}, [lastScrollY]);

	return (
		<header
			className={`fixed top-0 z-40 h-20 w-screen px-4 shadow-2xl transition-all bg-primaryc ${styles.header} ${
				visible ? "translate-y-0" : "-translate-y-[8rem]"
			}`}
		>
			<nav
				className={`mx-auto flex h-full max-w-5xl items-center justify-between p-6 lg:px-0 lg:py-0 ${styles.nav}`}
				aria-label="Global"
			>
				<div className="flex lg:hidden lg:flex-1">
					<Link href={links.homePage} className="-m-1.5 text-white">
						<Image src={logo} className="h-16 w-16" alt="Logo Dmuchańce Mega Fun" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<Burger open={mobileMenuOpen} onClick={handleOpenMenu} />
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-12 mt-4">
					<div className="flex w-96 justify-end space-x-8">
						<Link
							href={links.attractions}
							className={`text-md  hover:scale-110 whitespace-nowrap font-semibold leading-6 tracking-wider text-white transition-all`}
						>
							Atrakcje
						</Link>

						<Link
							href={links.gallery}
							className={`text-md  hover:scale-110 font-semibold leading-6 tracking-wider text-white transition-all`}
						>
							Galeria Zdjęć
						</Link>
					</div>
					<div className="flex justify-center lg:flex-1">
						<Link
							href={links.homePage}
							className="mt-2 p-1 px-4  rounded-[50%] border-[4px] border-transparent bg-primaryc text-white"
						>
							<Image src={logo} className="h-[5rem] aspect-square hover:scale-110 transition-all " alt="logo" />
						</Link>
					</div>
					<div className="flex w-96 items-center justify-start space-x-8">
						<Link
							href={links.faq}
							className={`text-md  hover:scale-110 font-semibold leading-6 tracking-wider text-white transition-all`}
						>
							Częste pytania
						</Link>
						<Link
							href={links.contact}
							className="shadow-on-hover hover:scale-110 text-md bg-secondaryc cursor-pointer whitespace-nowrap rounded-full px-4 py-2 font-semibold leading-6 tracking-wider text-white transition-all"
						>
							Kontakt
						</Link>
					</div>
				</div>
			</nav>

			{/* Mobile menu */}
			<div
				className={`fixed inset-0 z-50 h-screen w-screen bg-primaryc overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
					mobileMenuOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<div className="flex items-center justify-between p-4">
					<Link href={links.homePage} className="p-4">
						<Image src={logo} className="h-12 w-12" alt="logo" />
					</Link>
					<button 
						onClick={handleOpenMenu}
						className="p-4 text-white"
						aria-label="Close menu"
					>
						<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div className="mt-6 flex flex-col items-center justify-center pt-8">
					<div className="divide-gray-200 w-full px-4">
						<div className="flex flex-col items-center space-y-6 py-6">
							<Link
								href={links.homePage}
								className="hover:text-secondaryc block rounded-lg px-3 text-xl font-semibold leading-7 text-white text-center w-full"
								onClick={handleOpenMenu}
							>
								Strona główna
							</Link>
							<Link
								href={links.attractions}
								className="hover:text-secondaryc block rounded-lg px-3 text-xl font-semibold leading-7 text-white text-center w-full"
								onClick={handleOpenMenu}
							>
								Galeria
							</Link>
							<Link
								href={links.attractions}
								className="hover:text-secondaryc block rounded-lg px-3 text-xl font-semibold leading-7 text-white text-center w-full"
								onClick={handleOpenMenu}
							>
								Atrakcje
							</Link>
							<Link
								href={links.faq}
								className="hover:text-secondaryc block rounded-lg px-3 text-xl font-semibold leading-7 text-white text-center w-full"
								onClick={handleOpenMenu}
							>
								Częste pytania
							</Link>
							<Link
								href={links.contact}
								className="hover:text-secondaryc block rounded-lg px-3 text-xl font-semibold leading-7 text-white text-center w-full"
								onClick={handleOpenMenu}
							>
								Kontakt
							</Link>
						</div>
						<div className="flex items-center justify-center py-8">
							<CtaCallButton />
						</div>
						<div className={`${styles.icon_wr} flex items-center justify-center gap-8`}>
							<Link
								href={links.facebook}
								target="_blank"
								className="color-on-hover text-white text-xl flex gap-4 hover:text-secondaryc rounded-lg px-3 py-2 text-4xl"
							>
								<FacebookIcon /> Bądź na bieżąco
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}