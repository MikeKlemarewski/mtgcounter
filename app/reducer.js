import * as actions from './actions'

const initialState = {
    playerCount: 2,
    commanderDamage: false
}

const game = (state = initialState, action) => {
    switch(action.type) {
        case actions.UPDATE_PLAYER_COUNT:
            return {
                ...state,
                playerCount: Math.min(Math.max(0, state.playerCount + action.delta), 8)
            }
        case actions.TOGGLE_COMMANDER:
            return {
                ...state,
                commanderDamage: !state.commanderDamage
            };
        default:
            return state;
    }
}

export default game 
