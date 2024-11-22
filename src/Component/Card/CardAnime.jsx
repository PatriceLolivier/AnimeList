import { Card, CardTitle } from "../ui/Card";
import { CiMedal } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { TbCalendarMonth } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function CardAnime({
  anime,
  showIndex = false,
  index,
  variant = "default",
}) {
  const navigate = useNavigate();
  if (!anime || !anime.images?.jpg?.large_image_url || !anime.title) {
    return null;
  }

  const cardStyles = {
    default: "w-[300px] h-[400px] ",
    recommendation: "w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px]",
    movies: "w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px]",
    allanime: "w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px]",
    popular: "w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px]",
    nextseason: "w-full h-[180px] sm:h-[220px] md:h-[280px] lg:h-[350px]",
  };

  return (
    <Card className={`${cardStyles[variant]} relative overflow-hidden`} 
    onClick={() => navigate(`/detail/${anime.mal_id}`)}
    >
      <img
        src={anime.images.jpg.large_image_url}
        alt={anime.title}
        className="absolute w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 bg-black/20 rounded-lg" />
      <div className="relative z-10 h-full flex flex-col justify-between p-2 sm:p-3 md:p-4">
        <div className="flex justify-between items-start">
          {showIndex && (
            <span className="bg-gradient-to-r from-blue-800 to-blue-500 px-1 sm:px-2 py-1 rounded-lg text-white text-xs sm:text-sm md:text-base">
              #{index + 1}
            </span>
          )}
          {variant === "movies" && (
            <CardTitle className="bg-gradient-to-r from-blue-800 to-blue-500 w-fit p-1 sm:p-2 rounded-lg text-white text-xs sm:text-sm md:text-base">
              <CiMedal className="text-yellow-500 size-6"/> {anime.score || "N/A"}
            </CardTitle>
          )}
          {variant === "allanime" && (
            <CardTitle className="bg-gradient-to-r from-red-800 to-red-500 w-fit p-1 sm:p-2 rounded-lg text-white text-xs sm:text-sm md:text-base">
               <FaHeart className="text-red-500 size-5"/> {anime.favorites}
            </CardTitle>
          )}
          {variant === "popular" && (
            <CardTitle className="bg-gradient-to-r from-green-800 to-green-500 w-fit p-1 sm:p-2 rounded-lg text-white text-xs sm:text-sm md:text-base">
               <TbCalendarMonth className="size-5"/> {anime.season}
            </CardTitle>
          )}
          {variant === "nextseason" && (
            <CardTitle className="bg-gradient-to-r from-green-800 to-green-500 w-fit p-1 sm:p-2 rounded-lg text-white text-xs sm:text-sm md:text-base">
               <TbCalendarMonth className="size-5"/> {anime.string || " ?? "}
            </CardTitle>
          )}
        </div>
        <div className="flex justify-between">
          {(variant === "movies" || variant === "recommendation" || variant === "allanime" || variant === "popular" || variant === "nextseason") && (
            <CardTitle className="text-white line-clamp-2 text-sm sm:text-base md:text-lg">
              {anime.title}
            </CardTitle>
          )}
          {variant === "default" && (
            <CardTitle className="text-white line-clamp-2 text-sm sm:text-base md:text-lg">
              {anime.title}
            </CardTitle>
          )}
        </div>
      </div>
    </Card>
  );
}
