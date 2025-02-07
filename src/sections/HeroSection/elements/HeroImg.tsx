import { FC } from "react";
import Image from "next/image";
import heroImg from "../../../assets/hero.jpg";

interface IHeroImg {
  bigImg?: boolean;
}

const HeroImg: FC<IHeroImg> = ({ bigImg }) => {
  return (
    <Image
      alt="hero img"
      src={heroImg}
      priority
      className={`${
        bigImg ? "h-[95vh]" : "h-[95vh]"
      } w-full z-30 object-cover object-center brightness-[.4]`}
    />
  );
};

export default HeroImg;
