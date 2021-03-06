
export const UPDATE_PLAYER_COUNT = 'UPDATE_PLAYER_COUNT' 
export const TOGGLE_COMMANDER = 'TOGGLE_COMMANDER'
export const ADD_PLAYER = 'ADD_PLAYER'

export const updatePlayerCount = (delta) => {
    return {
        type: UPDATE_PLAYER_COUNT,
        delta
    }
}

export const toggleCommander = () => {
    return {
        type: TOGGLE_COMMANDER,
        text: 'Toggling commander dammage'
    }
}

export const addPlayer = (name) => {
    return {
        type: ADD_PLAYER,
        name
    }
}
