import { createModel } from "@rematch/core";
import { api } from "./api";
import { IMoviesList } from "./types";

export const movies = createModel<{
  treading: IMoviesList;
  nowPlaying: IMoviesList;
  upComing: IMoviesList;
}>({
  state: {
    treading: { page: 0, total_results: 0, total_pages: 0, results: [] },
    nowPlaying: { page: 0, total_results: 0, total_pages: 0, results: [] },
    upComing: { page: 0, total_results: 0, total_pages: 0, results: [] }
  },

  reducers: {
    setTreadingMovies: (state, payload) => ({ ...state, treading: payload }),
    setNowPlayingMovies: (state, payload) => ({
      ...state,
      nowPlaying: payload
    }),
    setUpComingMovies: (state, payload) => ({ ...state, upComing: payload })
  },

  effects: {
    async fetchTrendingMovies() {
      const { data } = await api("discover/movie");
      this.setTreadingMovies(data);
    },

    async fetchNowPlayingMovies() {
      const { data } = await api("/movie/now_playing");
      this.setNowPlayingMovies(data);
    },

    async fetchUpComingMovies() {
      const { data } = await api("/movie/upcoming");
      this.setUpComingMovies(data);
    }
  }
});
