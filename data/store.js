/* eslint no-undef: 0 */
import {compose, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose

const enhancer = composeEnhancers(applyMiddleware(thunk))
const makeStore = () => createStore(rootReducer, enhancer)

export default makeStore
