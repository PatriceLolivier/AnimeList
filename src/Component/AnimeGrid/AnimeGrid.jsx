import CardAnime from "../Card/CardAnime";

export default function AnimeGrid({ data, showIndex = true, variant }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 pb-10">
      {data?.data.map((anime, index) => {
        const animeData = anime.entry ? anime.entry[0] : anime;
        
        return (
          <div key={`${animeData.mal_id}-${index}`}>
            <CardAnime 
              anime={animeData} 
              showIndex={showIndex} 
              index={index}
              variant={variant}
            />
          </div>
        );
      })}
    </div>
  );
}
