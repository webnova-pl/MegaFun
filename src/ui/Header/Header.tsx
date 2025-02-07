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
import CtaCallButton from "../CtaCallButton/CtaCallButton";

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
			className={`bg-primary fixed top-0 z-40 h-20 w-full rounded-b-full transition-all shadow-2xl ${styles.header}`}
		>
			<nav
				className={`mx-auto flex h-full max-w-5xl items-center justify-between p-6 lg:px-0 lg:py-0 ${styles.nav}`}
				aria-label="Global"
			>
        <div className="flex lg:flex-1 lg:hidden">
          <Link href={links.homePage} className="-m-1.5 text-white">
            <Image src={logo} className="h-18 w-28" alt="logo" />
          </Link>
        </div>
				<div className="flex lg:hidden">
					<Burger open={mobileMenuOpen} onClick={handleOpenMenu} />
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-12">
					<div className="flex w-96 space-x-8 justify-end">
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
						<Link href={links.homePage} className="bg-primaryc -mt-4 -mx-4 rounded-[50%] text-white border-[4px] border-transparent">
							<Image src={logo} className="h-32  mb-1 ml-1 mx-3 pb-2" alt="logo" />
						</Link>
					</div>
					<div className="flex w-96 items-center space-x-8 justify-start">
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
        className={`h-full lg:hidden fixed w-full bg-gradient-to-tr bg-primaryc border-0 mx-0 transition-transform origin-top top-0  ${
          mobileMenuOpen
            ? "left-0 overflow-hidden z-40 translate-x-[0%]"
            : "translate-x-[100%]"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href={links.homePage} className="pt-8 ml-4">
            <Image src={logo} className="h-32 w-48" alt="logo" />
          </Link>
        </div>
        <div className="mt-6 h-full flex pt-16 justify-center">
          <div className="-my-6 divide-gray-200">
            <div className="space-y-2 py-6 flex flex-col items-center">
              <Link
                href={links.homePage}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-secondaryc"
              >
                Strona główna
              </Link>
              <Link
                href={links.terms}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-secondaryc"
              >
                Regulamin
              </Link>
              <Link
                href={links.attractions}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-secondaryc"
              >
                Atrakcje
              </Link>
              <Link
                href={links.pricelist}
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-secondaryc"
              >
                Cennik
              </Link>
            </div>
            <div className="py-6 flex items-center justify-center">
              <CtaCallButton
              >
              </CtaCallButton>
            </div>
            <div
              className={`${styles.icon_wr} items-center  justify-center flex gap-4`}
            >
              <Link
                href={links.facebook}
                target="_blank"
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 color-on-hover hover:text-secondaryc"
              >
                <FacebookIcon />
              </Link>
              <Link
                href={links.instagram}
                target="_blank"
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 color-on-hover text-white hover:text-secondaryc"
              >
                <InstaIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
		</header>
	);
}
