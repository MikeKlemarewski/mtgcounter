import {createStore, combineReducers, compose} from 'redux'

import * as reducers from './reducers'

export default function(data) {
    const reducer = combineReducers(reducers)
    const finalCreateStore = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

    return finalCreateStore(reducer, data)
}
