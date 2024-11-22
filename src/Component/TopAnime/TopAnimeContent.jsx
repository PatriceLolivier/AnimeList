import { fetchAllAnime, fetchMovie, fetchRecommendation, fetchPopular, fetchNextSeason} from "../../features/anime/animeSlice"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimeGrid from "../AnimeGrid/AnimeGrid";

export function AllAnime() {
    const { allAnimeList, loading, error } = useSelector(
        (state) => state.anime
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllAnime());
    }, [dispatch]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
        <>
            <AnimeGrid data={allAnimeList} variant="allanime" />
        </>
    )
}

export function GetMovie() {
    const { movieList, loading, error} = useSelector(
        (state) => state.anime
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie());
    }, [dispatch]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
        <>
            <AnimeGrid data={movieList} variant="movies" />
        </>
    )
}

export function GetRecommendation() {
    const { recommendationList, loading, error} = useSelector(
        (state) => state.anime
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRecommendation());
    }, [dispatch]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;

    const transformedData = {
        data: recommendationList?.data?.map(item => item.entry[0]) || []
    };

    return (
        <>
            <AnimeGrid data={transformedData} variant="recommendation" />
        </>
    )
}

export function GetPopular() {
    const { popularList, loading, error} = useSelector(
        (state) => state.anime
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopular());
    }, [dispatch]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
        <>
            <AnimeGrid data={popularList} variant="popular" />
        </>
    )
}

export function GetNextSeason() {
    const { nextSeasonList, loading, error} = useSelector(
        (state) => state.anime
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNextSeason());
    }, [dispatch]);

    if (loading) return <div>Chargement...</div>;
    if (error) return <div>Erreur: {error}</div>;

    return (
        <>
            <AnimeGrid data={nextSeasonList} variant="nextseason" />
        </>
    )
}
