import { links } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import HeroImg from "./elements/HeroImg";
import Ballons from "@/components/Ballons";
import ArrowButton from "@/ui/Buttons/ArrowButton";

interface IHeroSection {
  showButtons?: boolean;
  showImg?: boolean;
}

const HeroSection: FC<IHeroSection> = ({
  showButtons = true,
  showImg = true
}) => {
  return (
    <section
      className={`relative z-20 bg-cover bg-bottom soft-shadow -mt-[30px] lg:mt-0 rounded-b-[5rem] overflow-hidden shadow-2xl w-screen`}
    >
      {showImg ? <HeroImg bigImg={showButtons} /> : ""}
      <div
        className={`h-[89vh] flex-col absolute inset-0 flex items-center justify-center px-8 w-screen`}
      >
  
        <h1
          className={`text-4xl text-center lg:text-7xl font-extrabold lg:tracking-wide z-40 text-white  text-bold`}
        >
          Mega Fun <br /> <span className="lg:text-4xl text-2xl"> Dmuchańce które rozkręcą każdą impreze</span>
        </h1>
        {showButtons ? (
          <div className="flex text-white flex-col z-40 lg:flex-row items-center justify-center text-xl mt-8">
            <Link
              href={links.pricelist}

            >
              Galeria zdjęć
            </Link>
            <Link
              className="mt-4 lg:mt-0 lg:ml-12"
              href={links.attractions}
            >
              <ArrowButton>Zobacz oferte</ArrowButton>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <Ballons className="absolute bottom-0 left-0 lg:w-2/5 w-full"></Ballons>
      <Ballons className="absolute bottom-0 right-0 lg:w-2/5 max-lg:hidden"></Ballons>
    </section>

  );
};

export default HeroSection;
