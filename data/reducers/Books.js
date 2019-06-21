import { createAction, createReducer } from "redux-act";
import * as R from "ramda";

export const updateBooks = createAction("update books");

import * as meta from "../../static/meta.json";

export const reducer = createReducer(
  {
    [updateBooks]: (state, payload) => R.merge(state, payload)
  },
  meta.default
);
