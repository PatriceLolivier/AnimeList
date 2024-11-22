import React from "react";
import { Link } from "react-router-dom";
import { BsInfoCircle } from "react-icons/bs";
import { CiPlay1 } from "react-icons/ci";
import { MdOutlineTimer } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function HeroContent({ heroList, currentIndex }) {
  const navigate = useNavigate();

  return (
    <>
      {heroList?.data.slice(currentIndex, currentIndex + 1).map((hero) => (
        <div
          key={hero.mal_id}
          role="img"
          aria-label={hero.title}
          className="h-full w-full bg-center bg-cover duration-500"
          style={{
            backgroundImage: `url(${hero.trailer.images.maximum_image_url})`,
          }}
        >
          <OverlayHero />
          <div className="relative z-20 h-full mx-auto flex flex-col justify-center w-[90%]" >
            <span className="text-[13px] md:text-[17px] text-neutral-200 font-medium mb-4 md:mb-6 lg:mb-8 bg-gradient-to-r from-blue-800 to-blue-500 w-fit p-2 rounded-lg">
              #{currentIndex + 1} Saison en cours
            </span>
            <div className="md:max-w-[620px] lg:max-w-[740px] mb-2 md:mb-4 lg:mb-6">
              <h1 className="text-[25px] md:text-[35px] lg:text-[40px] font-bold text-neutral-50">
                {hero.title}
              </h1>
              <div className="flex flex-row gap-x-2">
                <span className="text-[13px] md:text-[17px] rounded-lg text-neutral-200 flex items-center gap-2 border border-blue-500 p-2">
                  <CiPlay1 />
                  {hero.type}
                </span>
                <span className="text-[13px] md:text-[17px] rounded-lg text-neutral-200 flex items-center gap-2 border border-blue-500 p-2">
                  <BsInfoCircle />
                  {hero.episodes} épisodes
                </span>
                <span className="text-[13px] md:text-[17px] rounded-lg text-neutral-200 flex items-center gap-2 border border-blue-500 p-2">
                  <MdOutlineTimer />
                  {hero.duration} 
                </span>
                <span className="text-[13px] md:text-[17px] rounded-lg flex items-center gap-2 border border-yellow-500 text-yellow-500 p-2">
                  <FaMedal />
                  {hero.score} 
                </span>
              </div>
            </div>
            {hero.synopsis.length > 200 ? (
              <p className="text-[13px] md:text-[17px] text-neutral-200 md:max-w-[650px] lg:max-w-[780px]">
                {hero.synopsis.substring(0, 200)}...&nbsp;
                <Link
                  to={`/detail/${hero.mal_id}`}
                  className="text-blue-800 hover:text-blue-600 transition-colors duration-300 ease-in-out font-bold"
                >
                  En savoir plus
                </Link>
              </p>
            ) : (
              <p className="text-[13px] md:text-[17px] text-neutral-200 md:max-w-[650px] lg:max-w-[780px]">
                {hero.synopsis}
              </p>
            )}
            <div className="flex gap-x-8 items-center mt-6 md:mt-8 lg:mt-10">
              <button
                onClick={() => navigate(`/detail/${hero.mal_id}`)}
                className="flex gap-x-2 items-center bg-transparent hover:bg-blue-800 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                <span>Voir détails</span> <BsInfoCircle />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const OverlayHero = () => {
  return (
    <>
      <div className="absolute z-10 h-full w-full bg-gradient-to-t from-neutral-950 " />
      <div className="absolute z-10 h-full w-full bg-gradient-to-r from-neutral-950 via-transparent" />
      <div className="absolute z-10 h-full w-full bg-gradient-to-b from-neutral-950 via-transparent" />
    </>
  );
};
