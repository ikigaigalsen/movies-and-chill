import { init, RematchRootState } from "@rematch/core";
import { movies } from "./movies";
import { people } from "./people";

const models = { movies, people };

/**
 * Since we are using Rematch (A Redux Framework), we don't need to
 * initailize reducers, dispatcher, etc., Rematch simplifies it all for us
 * and makes Redux a breeze to use
 */
export const store = init({
  models
});

export type TStore = typeof store;
export type TDispatch = typeof store.dispatch;
export type TRootState = RematchRootState<typeof models>;
