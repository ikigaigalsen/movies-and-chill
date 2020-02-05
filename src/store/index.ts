import { init, RematchRootState } from "@rematch/core";
import { movies } from "./movies";

const models = { movies };
export const store = init({
  models
});

export type TStore = typeof store;
export type TDispatch = typeof store.dispatch;
export type TRootState = RematchRootState<typeof models>;
