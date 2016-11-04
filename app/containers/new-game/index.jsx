import {connect} from 'react-redux'
import {browserHistory} from 'react-router'

import Stepper from '../../components/stepper'
import Button from '../../components/button'

import * as actions from '../../actions'
import styles from './styles.css'

class NewGame extends React.Component {

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.row}>
                    <h1>New Game</h1>
                </div>
                <div className={styles.row}>
                    <div className={styles.label}>Players:</div>
                    <div>
                        <Stepper number={this.props.playerCount} onChange={this.props.updatePlayerCount} />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.sublabel}>Commander Dammage</div>
                    <input onChange={this.props.toggleCommander} type="checkbox"/>
                </div>
                <div className={styles.row}>
                    <Button
                        text="Start Game"
                        onClick={browserHistory.push.bind(null, 'name-players')} />                    
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
        toggleCommander: dispatch.bind(null, actions.toggleCommander())
    }
}

const ConnectedGame = connect(mapStateToProps, mapDispatchToProps)(NewGame)

export default ConnectedGame
