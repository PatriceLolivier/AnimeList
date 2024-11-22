import DetailContent from "./DetailContent"
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailAnime } from "../../features/anime/animeSlice";
import { useEffect } from "react";

export default function DetailSection({ params }) {
    const { detailAnimeList, loading, error } = useSelector((state) => state.anime);
    const dispatch = useDispatch();

    useEffect(() => {
        if (params?.id) {
            dispatch(fetchDetailAnime(params.id));
        }
    }, [dispatch, params?.id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!detailAnimeList) return null;

    return (
        <div className="w-full min-h-[65vh] bg-cover bg-center">
            <div className="w-[90%] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1400px] mx-auto flex flex-col justify-center py-8 md:py-0">
                <DetailContent detailAnimeList={detailAnimeList} />
            </div>
        </div>
    );
}