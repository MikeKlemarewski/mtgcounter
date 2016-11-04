import {connect} from 'react-redux'

import TabbedHeader from '../../components/TabbedHeader'

import * as actions from '../../actions'
import styles from './styles.css'

class Game extends React.Component {

    render() {
        let names = this.props.players.map(player => {return player.name})
        return (
            <div>
                <TabbedHeader
                    items={names}
                    activeIndex={0}
                    onUpdateActiveIndex={() => {}}
                />
                <div className={styles.wrapper}>
                    <div className={styles.row}>
                        <h1>New Game</h1>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.game
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlayerCount: (delta) => {
            dispatch(actions.updatePlayerCount(delta))
        },
    }
}

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(Game)

export default ConnectedGame
