const baseURL = "https://api.jikan.moe/v4/";

export const ApiURL = {
    SeasonNow: baseURL +"seasons/now",
    Recommendation: baseURL + "recommendations/anime",
    AllAnime: baseURL + "anime",
    Movie: baseURL + "top/anime?type=movie",
    Popular: baseURL + "top/anime?filter=bypopularity",
    NextSeason: baseURL + "seasons/upcoming",
}