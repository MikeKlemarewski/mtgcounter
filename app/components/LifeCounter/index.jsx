import {PropTypes} from 'react'

import styles from './style.css'
import Arrows from 'babel!react-svg!../../../icons/arrows.svg'

const DRAG_THRESHOLD = 20 

class LifeCounter extends React.Component {
    constructor(props) {
        super(props)
        this.didDrag = false
        this.touchY = 0
        this.accumulator = 0

        this.touchStart = this.touchStart.bind(this)
        this.changeOnClick = this.changeOnClick.bind(this)
        this.changeOnDrag = this.changeOnDrag.bind(this)
    }
    
    changeOnClick (event) {
        if (this.didDrag) {
            this.didDrag = false
            this.touchY = 0
            this.accumulator = 0
            return
        }

        let clickY = event.changedTouches[0].clientY
        let targetRect = event.target.getBoundingClientRect()

        let targetHeight = targetRect.bottom - targetRect.top
        let midPoint = targetRect.top + (targetHeight / 2)

        clickY < midPoint ? this.props.onLifeChange(1) : this.props.onLifeChange(-1)
    }

    touchStart (event) {
        this.touchY = event.changedTouches[0].clientY 
    }

    changeOnDrag (event) {
        this.didDrag = true
        this.accumulator += this.touchY - event.changedTouches[0].clientY
        this.touchY = event.changedTouches[0].clientY

        this.props.onLifeChange(~~(this.accumulator / DRAG_THRESHOLD))
        this.accumulator %= DRAG_THRESHOLD
    }

    render() {
        let {lifeTotal, onLifeChange} = this.props
        return (
            <div
                className={styles.lifeCounter}
                onTouchStart={this.touchStart}
                onTouchEnd={this.changeOnClick}
                onTouchMove={this.changeOnDrag}
            >
                {lifeTotal}
                <Arrows className={styles.arrows} />
            </div>
        )
    }
}

LifeCounter.defaultProps = {
    lifeTotal: 0,
    onLifeChange: () => {}
}

LifeCounter.propTypes = {
    lifeTotal: PropTypes.number.isRequired,
    onLifeChange: PropTypes.func.isRequired
}

export default LifeCounter
