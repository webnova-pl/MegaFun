"use client";
import Lottie from "lottie-react";
import animationData from "@/assets/ballons.json"; // Adjust path if needed

const LottieAnimation = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieAnimation;
