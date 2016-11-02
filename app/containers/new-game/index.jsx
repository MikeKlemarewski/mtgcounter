import {connect} from 'react-redux'

import Stepper from '../../components/stepper'

import styles from './style.css'

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
                        <Stepper number={2} />
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.sublabel}>Commander Dammage</div>
                    <input type="checkbox"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const ConnectedGame = connect(mapStateToProps)(NewGame)

export default ConnectedGame
