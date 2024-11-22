import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosRetry from 'axios-retry';
import { ApiURL } from "../../lib/ApiURL";

const createRateLimitedAxios = () => {
    let lastRequestTime = 0;
    const instance = axios.create();

    instance.interceptors.request.use(async (config) => {
        const now = Date.now();
        const timeToWait = Math.max(0, 500 - (now - lastRequestTime)); 
        
        if (timeToWait > 0) {
            await new Promise(resolve => setTimeout(resolve, timeToWait));
        }
        
        lastRequestTime = Date.now();
        return config;
    });

    return instance;
};

const axiosInstance = createRateLimitedAxios();

axiosRetry(axiosInstance, {
    retries: 3,
    retryDelay: (retryCount) => {
        return retryCount * 1000; 
    },
    retryCondition: (error) => error.response?.status === 429
});

export const fetchHero = createAsyncThunk(
    "anime/fetchHero",
    async (_, { rejectWithValue, getState }) => {
        try {
            const response = await axiosInstance.get(ApiURL.SeasonNow);
            console.log(response.data, "Hero list");
            return response.data;
        } catch (error) {
            const state = getState();
            if (error.response?.status === 429 && state.anime.heroList) {
                return state.anime.heroList;
            }
            console.error("Erreur lors de la récupération des données:", error);
            return rejectWithValue(error.response?.data || 'Une erreur est survenue');
        }
    }
);

export const fetchRecommendation = createAsyncThunk(
    "anime/fetchRecommendation",
    async (_, { rejectWithValue, getState }) => {
        try {
            const response = await axiosInstance.get(ApiURL.Recommendation);
            console.log("Recommendation list", response.data);
            const seenIds = new Set();
            const uniqueData = response.data.data
                .filter(item => {
                    if (!item?.entry?.[0]?.mal_id) return false;
                    const id = item.entry[0].mal_id;
                    if (seenIds.has(id)) return false;
                    seenIds.add(id);
                    return true;
                })
                .slice(0, 25);

            return {
                ...response.data,
                data: uniqueData
            };
        } catch (error) {
            const state = getState();
            if (error.response?.status === 429 && state.anime.recommendationList) {
                return state.anime.recommendationList;
            }
            console.error("Erreur lors de la récupération des données:", error);
            return rejectWithValue(error.response?.data || 'Une erreur est survenue');
        }
    }
);

export const fetchPopular = createAsyncThunk(
    "anime/fetchPopular",
    async (_, { rejectWithValue, getState }) => {
        try {
            const response = await axiosInstance.get(ApiURL.Popular);
            console.log("Popular list", response.data);
            return response.data;
        } catch (error) {
            const state = getState();
            if (error.response?.status === 429 && state.anime.popularList) {
                return state.anime.popularList;
            }
            console.error("Erreur lors de la récupération des données:", error);
            return rejectWithValue(error.response?.data || 'Une erreur est survenue');
        }
    }
);

export const fetchAllAnime = createAsyncThunk(
    "anime/fetchAllAnime",
    async (_, { rejectWithValue, getState }) => {
        try {
            const response = await axiosInstance.get(ApiURL.AllAnime);
            console.log("All anime list", response.data);
            return response.data;
        } catch (error) {
            const state = getState();
            if (error.response?.status === 429 && state.anime.allAnimeList) {
                return state.anime.allAnimeList;
            }
            console.error("Erreur lors de la récupération des données:", error);
            return rejectWithValue(error.response?.data || 'Une erreur est survenue');
        }
    }
);

export const fetchMovie = createAsyncThunk(
    "anime/fetchMovie",
    async (_, { rejectWithValue, getState }) => {
        try {
            const response = await axiosInstance.get(ApiURL.Movie);
            console.log("Movie list", response.data);
            return response.data;
        } catch (error) {
            const state = getState();
            if (error.response?.status === 429 && state.anime.movieList) {
                return state.anime.movieList;
            }
            console.error("Erreur lors de la récupération des données:", error);
            return rejectWithValue(error.response?.data || 'Une erreur est survenue');
        }
    }
)

export const fetchNextSeason = createAsyncThunk(
    "anime/fetchNextSeason",
    async (_, { rejectWithValue, getState }) => {
        try {
            const response = await axiosInstance.get(ApiURL.NextSeason);
            console.log("Next season list", response.data);
            return response.data;
        } catch (error) {
            const state = getState();
            if (error.response?.status === 429 && state.anime.nextSeasonList) {
                return state.anime.nextSeasonList;
            }
            console.error("Erreur lors de la récupération des données:", error);
            return rejectWithValue(error.response?.data || 'Une erreur est survenue');
        }
    }
)

export const fetchDetailAnime = createAsyncThunk(
    "anime/fetchDetailAnime",
    async (id, { rejectWithValue, getState }) => {
        try {
            const response = await axiosInstance.get(`${ApiURL.AllAnime}/${id}/full`);
            console.log("Detail anime list", response.data);
            return response.data;
        } catch (error) {
            const state = getState();
            if (error.response?.status === 429 && state.anime.detailAnimeList) {
                return state.anime.detailAnimeList;
            }
            console.error("Erreur lors de la récupération des données:", error);
            return rejectWithValue(error.response?.data || 'Une erreur est survenue');
        }
    }
)

const animeSlice = createSlice({
    name: "anime",
    initialState: {
        heroList: null,
        recommendationList: null,
        allAnimeList: null,
        movieList: null,
        popularList: null,
        nextSeasonList: null,
        detailAnimeList: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHero.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHero.fulfilled, (state, action) => {
                state.loading = false;
                state.heroList = action.payload;
            })
            .addCase(fetchHero.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Une erreur est survenue';
            })
            .addCase(fetchRecommendation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRecommendation.fulfilled, (state, action) => {
                state.loading = false;
                state.recommendationList = action.payload;
            })
            .addCase(fetchRecommendation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Une erreur est survenue';
            })
            .addCase(fetchAllAnime.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllAnime.fulfilled, (state, action) => {
                state.loading = false;
                state.allAnimeList = action.payload;
            })
            .addCase(fetchAllAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Une erreur est survenue';
            })
            .addCase(fetchMovie.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMovie.fulfilled, (state, action) => {
                state.loading = false;
                state.movieList = action.payload;
            })
            .addCase(fetchMovie.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Une erreur est survenue';
            })
            .addCase(fetchPopular.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.loading = false;
                state.popularList = action.payload;
            })
            .addCase(fetchPopular.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Une erreur est survenue';
            })
            .addCase(fetchNextSeason.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNextSeason.fulfilled, (state, action) => {
                state.loading = false;
                state.nextSeasonList = action.payload;
            })
            .addCase(fetchNextSeason.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Une erreur est survenue';
            })
            .addCase(fetchDetailAnime.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDetailAnime.fulfilled, (state, action) => {
                state.loading = false;
                state.detailAnimeList = action.payload;
            })
            .addCase(fetchDetailAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Une erreur est survenue';
            })
    },
});

export default animeSlice.reducer;

