import {PropTypes} from 'react'

import LifeCounter from '../LifeCounter'
import Circle from '../Circle'

import styles from './style.css'

class CircleLifeCounter extends React.Component {

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
                    <LifeCounter className={styles.lifeCounter} lifeTotal={lifeTotal} onLifeChange={onLifeChange} />
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

export default CircleLifeCounter
