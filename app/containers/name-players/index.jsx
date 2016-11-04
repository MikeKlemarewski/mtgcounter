import {connect} from 'react-redux'

import * as actions from '../../actions'
import NameCollector from '../../components/NameCollector'

import styles from './styles.css'

class NamePlayers extends React.Component {

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <h1>Name players</h1>
                </div>
                <div className={styles.row}>
                    <NameCollector
                        count={this.props.playerCount}
                        onSubmit={this.props.addPlayer}
                        onComplete={() => {alert('complete')}} />
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
        addPlayer: (name) => {
            dispatch(actions.addPlayer(name))
        },
    }
}

const ConnectedNamePlayers = connect(mapStateToProps, mapDispatchToProps)(NamePlayers)

export default ConnectedNamePlayers
