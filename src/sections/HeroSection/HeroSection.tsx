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
      className={`relative h-[95vh] z-20 bg-cover bg-bottom soft-shadow -mt-[30px] lg:mt-0 rounded-b-[5rem] overflow-hidden`}
    >
      {showImg ? <HeroImg bigImg={showButtons} /> : ""}
      <div
        className={`h-[89vh] flex-col absolute inset-0 flex items-center justify-center px-8`}
      >
  
        <h1
          className={`text-4xl max-sm:bg-red-400 text-center lg:text-7xl font-extrabold lg:tracking-widest text-white tracking-wide`}
        >
          Mega Fun <br /> <span className="text-4xl"> Dmuchańce które rozkręcą każdą impreze</span>
        </h1>
        {showButtons ? (
          <div className="flex text-white flex-col lg:flex-row items-center justify-center text-xl mt-8">
            <Link
              href={links.pricelist}

            >
              Cennik
            </Link>
            <Link
              className="mt-4 lg:mt-0 lg:ml-12"
              href={links.attractions}
            >
              <ArrowButton>Galeria zdjec</ArrowButton>
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
      <Ballons className="absolute top-16 left-32 w-1/4"></Ballons>
      <Ballons className="absolute top-16 right-32 w-1/4"></Ballons>
    </section>

  );
};

export default HeroSection;
