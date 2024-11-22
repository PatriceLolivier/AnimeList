import {AllAnime, GetMovie, GetRecommendation, GetPopular, GetNextSeason} from "./TopAnimeContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CiMedal } from "react-icons/ci";

export default function TopAnimeSection() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-36 mt-10">
      <div className="flex flex-row items-center gap-2 dark:text-white bg-gradient-to-r from-blue-800 to-blue-500 rounded-lg py-2 px-3 w-fit">
        <CiMedal className="text-lg sm:text-xl size-5 sm:size-6" />
        <h2 className="text-base sm:text-lg font-semibold">Top anime</h2>
      </div>
      <Tabs defaultValue="animes" className="hidden md:block md:mt-2 text-black dark:text-white">
        <TabsList className="mb-2 md:mb-4 lg:mb-5">
            <TabsTrigger value="animes">Tout les animés</TabsTrigger>
            <TabsTrigger value="movies" >Tout les films</TabsTrigger>
            <TabsTrigger value="recommendation">Recommendation</TabsTrigger>
            <TabsTrigger value="popular">Les plus populaire</TabsTrigger>
            <TabsTrigger value="nextseason">Prochaine saison</TabsTrigger>
        </TabsList>
        <TabsContent value="animes" className="p-10">
           <AllAnime />
        </TabsContent>
        <TabsContent value="movies">
            <GetMovie />
        </TabsContent>
        <TabsContent value="recommendation">
            <GetRecommendation />
        </TabsContent>
        <TabsContent value="popular">
            <GetPopular />
        </TabsContent>
        <TabsContent value="nextseason">
            <GetNextSeason />
        </TabsContent>
      </Tabs>
    </div>
  );
}
