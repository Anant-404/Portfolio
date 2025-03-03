'use client'
import Lottie from "lottie-react";
import brainAnimation from "@/assets/Animation - 1741007450899.json"; // Adjust the path

const brain = () => {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <Lottie 
        animationData={brainAnimation} 
        className="w-full max-w-[500px] h-auto"
      />
    </div>
  );
};

export default brain;
