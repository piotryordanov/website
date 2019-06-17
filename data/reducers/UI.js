import { createAction, createReducer } from "redux-act";
import * as R from "ramda";

export const updateUI = createAction("update ui");

export const reducer = createReducer(
  {
    [updateUI]: (state, payload) => R.merge(state, payload)
  },
  {title: "Hello world"}
);
