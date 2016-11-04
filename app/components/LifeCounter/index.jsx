import {PropTypes} from 'react'

import Stepper from '../Stepper'
import Circle from '../Circle'

import styles from './styles.css'

class LifeCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            width: 0
        }
    }

    componentDidMount() {
        this.setState({
            width: this.refs.container.clientWidth
        })
    }

    render() {
        let {lifeTotal, onLifeChange} = this.props


        return (
            <div ref="container" className={styles.container}>
                <div className={styles.lifeCounter}>
                    <Stepper className={styles.lifeCounter} number={lifeTotal} onChange={onLifeChange} />
                </div>
                {this.state.width ?
                    <Circle
                        className={styles.circle}
                        total={20}
                        filled={lifeTotal}
                        width={this.state.width}
                        height={this.state.width} />
                : null}
            </div>
        )
    }
}

export default LifeCounter
