import { IoPlayOutline } from "react-icons/io5";
import { FaMedal } from "react-icons/fa6";
import { PiListNumbersFill } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";

export default function DetailContent({ detailAnimeList }) {
  if (!detailAnimeList) return null;

  return (
    <div className="flex flex-col md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8 pb-4 md:pb-8 lg:pb-10 xl:pb-12 mt-12 rounded-xl">
      <img
        src={detailAnimeList.data.images.webp.large_image_url}
        alt={detailAnimeList.data.title}
        className="w-[220px] h-[320px] mx-auto md:m-0 object-cover rounded-xl mb-2 md:mb-0"
      />
      <div>
        <h1 className="text-2xl font-bold text-black dark:text-white mt-5">
          {detailAnimeList?.data.title}
        </h1>
        <div className="flex flex-wrap gap-2 mt-2">
          <span className="flex items-center gap-1 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-black dark:text-white bg-gradient-to-r from-blue-500 to-blue-500 py-1 px-2 rounded-lg">
            <IoPlayOutline />
            {detailAnimeList?.data.type}
          </span>
          <span className="flex items-center gap-1 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-black dark:text-white bg-gradient-to-r from-blue-500 to-blue-500 py-1 px-2 rounded-lg">
            {detailAnimeList?.data.popularity}
          </span>
          <span className="flex items-center gap-1 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-black dark:text-white bg-gradient-to-r from-blue-500 to-blue-500 py-1 px-2 rounded-lg">
            <BsHeart /> {detailAnimeList?.data.favorites}
          </span>
          <span className="flex items-center gap-1 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-black dark:text-white bg-gradient-to-r from-blue-500 to-blue-500 py-1 px-2 rounded-lg">
            <FaMedal /> {detailAnimeList?.data.score}
          </span>
          <span className="flex items-center gap-1 text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-black dark:text-white bg-gradient-to-r from-blue-500 to-blue-500 py-1 px-2 rounded-lg">
            <PiListNumbersFill /> {detailAnimeList?.data.episodes} Ep
          </span>
          <p className="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-black dark:text-white">
            {detailAnimeList?.data.synopsis}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {detailAnimeList?.data.genres.map((genre) => (
            <span
              key={genre.mal_id}
              className="text-[0.8rem] md:text-[0.95rem] lg:text-[1rem] xl:text-[1.05rem] text-black dark:text-white bg-blue-800/80 border border-blue-900  px-2 py-1 rounded-lg"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
