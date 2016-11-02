const initialState = {
    playerCount: 2,
    commanderDamage: false
}

const home = (state = {}, action) => {
    switch(action.type) {
        case 'TOGGLE_COMMANDER':
            return {
                ...state,
                commanderDamage: !state.commanderDamage
            };
        default:
            return state;
    }
}

export default home
