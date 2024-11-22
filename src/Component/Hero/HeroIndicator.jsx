import React from "react";
import { FaCaretLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa6";

export const SliderButton = ({ prevIndex, nextIndex }) => {
  return (
    <div className="w-full h-full absolute z-20 hidden lg:flex justify-between items-center">
      <button onClick={prevIndex} className="text-white">
        <FaCaretLeft  className="size-10 text-neutral-500 hover:text-blue-800 transition-colors duration-300 ease-in-out ml-0 xl:ml-2 pointer-events-auto" />
      </button>
      <button onClick={nextIndex} className="text-white">
        <FaCaretRight  className="size-10 text-neutral-500 hover:text-blue-800 transition-colors duration-300 ease-in-out mr-0 xl:mr-2" />
      </button>
    </div>
  );
};


export const IndicatorButton = ({heroList, currentIndex, handleSlide}) => {
    return (
        <div className="absolute z-30 bottom-0 left-1/2 -translate-x-1/2 flex gap-x-2 pb-6">
          {heroList?.data.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSlide(idx)}
              className={`size-[8px] md:size-[10px] rounded-full pointer-events-auto hover:bg-neutral-200 transition-colors duration-300 ease-in-out ${
                currentIndex === idx ? 'bg-neutral-200' : 'bg-neutral-500'
              }`}
            />
          ))}
        </div>
    );
}

