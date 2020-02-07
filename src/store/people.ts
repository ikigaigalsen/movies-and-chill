import { createModel } from "@rematch/core";
import { api } from "./api";
import { IPeopleList } from "./types";

export const people = createModel<{ treading: IPeopleList }>({
  state: {
    treading: { page: 0, total_results: 0, total_pages: 0, results: [] }
  },
  reducers: {
    setTreadingPeople: (state, payload) => ({ ...state, treading: payload })
  },
  effects: {
    async fetchTrendingPeople() {
      const { data } = await api("/person/popular");
      this.setTreadingPeople(data);
    }
  }
});
