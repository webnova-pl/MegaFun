"use client";
import { useRef, useEffect } from "react";
import Slider from "react-slick";
import AttractionCard from "./AttractionCard";
import { AttractionType } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type AttractionsSliderProps = {
  attractions: AttractionType[];
};

const AttractionsSlider: React.FC<AttractionsSliderProps> = ({ attractions }) => {
  const sliderRef = useRef<Slider | null>(null);

  // Custom arrow components for better styling
  const PrevArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} z-10 before:text-gray-600 hover:before:text-gray-900 before:text-2xl`}
        onClick={onClick}
      />
    );
  };

  const NextArrow = (props: any) => {
    const { className, onClick } = props;
    return (
      <button
        className={`${className} z-10 before:text-gray-600 hover:before:text-gray-900 before:text-2xl`}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: false,
    speed: 1000, // Slightly reduced for smoother transitions
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
    dotsClass: "slick-dots custom-dots", // Custom class for dots
  };

  // Pause autoplay when window is not in focus
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && sliderRef.current) {
        sliderRef.current.slickPause();
      } else if (!document.hidden && sliderRef.current) {
        sliderRef.current.slickPlay();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden relative">
      <Slider
        ref={sliderRef}
        {...settings}
        className="cursor-pointer py-16 [&_.slick-track]:flex [&_.slick-track]:gap-4"
      >
        {attractions.map((attraction, idx) => (
          <div key={`${idx}-${attraction.id}`} className="px-2">
            <AttractionCard attraction={attraction} />
          </div>
        ))}
      </Slider>
      
      <style jsx global>{`
        .custom-dots {
          bottom: 15px;
        }
        .custom-dots li {
          margin: 0 3px;
        }
        .custom-dots li button:before {
          font-size: 8px;
          color: #aaaaaaaa;
          opacity: 0.7;
        }
        .custom-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
        .slick-prev {
          left: 10px;
          z-index: 10;
          transform:scale(2);
        }
        .slick-next {
          right: 10px;
          z-index: 10;
          transform:scale(2);
        }
      `}</style>
    </div>
  );
};

export default AttractionsSlider;