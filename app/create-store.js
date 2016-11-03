import {createStore, combineReducers, compose} from 'redux'

import game from './reducer'

export default function(data) {
    const reducer = combineReducers({
        game
    })
    const finalCreateStore = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

    return finalCreateStore(reducer, data)
}
