import {connect} from 'react-redux'

import styles from './style.css'

class NewGame extends React.Component {

    render() {
        return (
            <div className={styles.wrapper}>
                <h2>New Game</h2>
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
