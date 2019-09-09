import { createAction, createReducer } from "redux-act"
import * as R from "ramda"

export const updateBooks = createAction("update books")

export const reducer = createReducer(
	{
		[updateBooks]: (state, payload) => R.merge(state, payload)
	},
	[]
)
