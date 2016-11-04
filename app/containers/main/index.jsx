import {connect} from 'react-redux'

import * as actions from '../../actions'
import NewGame from '../new-game'
import Game from '../game'

class Main extends React.Component {

    render() {
        if (this.props.players.length > 0) {
            return (
                <Game />
            )
        }

        return <NewGame />
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.game
    }
}

const ConnectedMain = connect(mapStateToProps)(Main)

export default ConnectedMain
