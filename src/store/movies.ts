import { createModel } from "@rematch/core";
import { api } from "./api";
import { ITreadingMovies } from "./types";

export const movies = createModel<{ treading: ITreadingMovies }>({
  state: {
    treading: { page: 0, total_results: 0, total_pages: 0, results: [] }
  },
  reducers: {
    setTreadingMovies: (state, payload) => ({ ...state, treading: payload })
  },
  effects: {
    async fetchTrendingMovies() {
      const { data } = await api("discover/movie");

      this.setTreadingMovies(data);
    }
  }
});
