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
      className={`h-20 rounded-b-full bg-primary transition-all top-0 w-full z-40 fixed ${styles.header}`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-0 lg:py-0 h-full ${styles.nav}`}
        aria-label="Global"
      >
        <div className="flex lg:hidden">
          <Burger open={mobileMenuOpen} onClick={handleOpenMenu} />
        </div>
        <div className="hidden lg:flex lg:items-center lg:gap-x-12 lg:flex-1 lg:justify-end">
          <div className="w-96 flex space-x-16">
          <Link
            href={links.homePage}
            className={`text-md tracking-wider whitespace-nowrap font-semibold leading-6 text-white hover:text-secondaryc transition-all`}
          >
            O nas
          </Link>

          <Link
            href={links.terms}
            className={`text-md tracking-wider leading-6 text-white font-semibold hover:text-secondaryc transition-all `}
          >
            Galeria Zdjęć
          </Link>
          </div>
          <div className="flex justify-center lg:flex-1 mt-16 ">
            <Link href={links.homePage} className="text-white bg-primaryc rounded-[50%] p-1.5">
              <Image src={logo} className="h-32 w-48 pb-2" alt="logo" />
            </Link>
          </div>
          <div className="w-96 flex space-x-16 items-center">
          <Link
            href={links.attractions}
            className={`text-md tracking-wider leading-6 text-white font-semibold hover:text-secondaryc transition-all `}
          >
            Atrakcje
          </Link>
          <span
            onClick={() => scrollToSection("contact")}
            className="shadow-on-hover text-md tracking-wider whitespace-nowrap font-semibold leading-6 text-white bg-secondaryc py-2 px-4 rounded-full transition-all cursor-pointer"
          >
            Skontaktuj się
          </span>
          <div className={`${styles.icon_wr} flex gap-4`}>
            <Link
              href={links.facebook}
              target="_blank"
              className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-secondaryc"
            >
              <FacebookIcon />
            </Link>
            <Link
              href={links.instagram}
              target="_blank"
              className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white hover:text-secondaryc"
            >
              <InstaIcon />
            </Link>
            <Link
              href={links.youtube}
              target="_blank"
              className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white color-on-hover hover:text-secondaryc"
            >
            </Link>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`h-full lg:hidden fixed w-full bg-gradient-to-tr from-[#FF3E27] to-[#FF3061] border-0 mx-0 transition-transform origin-top top-0  ${
          mobileMenuOpen
            ? "left-0 z-40 translate-x-[0%]"
            : "translate-x-[100%] -ml-4 "
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href={links.homePage} className="pt-8 ml-4">
            <Image src={logo} className="h-64 w-64" alt="logo" />
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
              <span
                onClick={() => scrollToSection("contact")}
                className="text-2xl whitespace-nowrap font-semibold leading-6 text-white shadow-on-hover  py-2 px-4 rounded-2xl transition-all cursor-pointer"
              >
                Skontaktuj się
              </span>
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
              <Link
                href={links.youtube}
                target="_blank"
                className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-semibold leading-7 text-white color-on-hover"
              >
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
