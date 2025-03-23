import Image from 'next/image';
import { FC } from 'react';
import heroImg from '@public/ai_bg2.png';

interface IHeroImg {
  bigImg?: boolean;
}

const HeroImg: FC<IHeroImg> = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Image
        alt="Dmuchane zjeżdżalnie"
        src={heroImg}
        priority
        className="w-full h-full z-30 object-cover overflow-hidden"
      />
     <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-[#f74444]/50 to-black/80"></div>
      <div className="absolute inset-0 bg-black/40 z-41"></div>
    </div>
  );
};

export default HeroImg;