"use client";
import Slider from "react-slick";
import AttractionCard from "./AttractionCard";
import { AttractionType } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type AttractionsSliderProps = {
  attractions: AttractionType[];
};

const settings = {
  infinite: false,
  speed: 1500,
  slidesToShow: 3,
  autoplay: true,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const AttractionsSlider: React.FC<AttractionsSliderProps> = ({ attractions }) => {
  return (
    <div className="w-full overflow-hidden">
      <Slider
        {...settings}
        className="cursor-pointer py-16 [&_.slick-track]:flex [&_.slick-track]:gap-4"
      >
        {attractions.map((attraction, idx) => (
          <AttractionCard key={`${idx}-${attraction.id}`} attraction={attraction} />
        ))}
      </Slider>
    </div>
  );
};

export default AttractionsSlider;
