import {createStore, combineReducers, compose} from 'redux'

import newGame from './containers/new-game/reducer'

export default function(data) {
    const reducer = combineReducers({
        newGame
    })
    const finalCreateStore = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore)

    return finalCreateStore(reducer, data)
}
