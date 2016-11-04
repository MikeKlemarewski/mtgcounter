import {PropTypes} from 'react'

import styles from './styles.css'
import Arrows from 'babel!react-svg!../../../icons/arrows.svg'

const DRAG_THRESHOLD = 20 

class Stepper extends React.Component {
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

        clickY < midPoint ? this.props.onChange(1) : this.props.onChange(-1)
    }

    touchStart (event) {
        this.touchY = event.changedTouches[0].clientY 
    }

    changeOnDrag (event) {
        this.didDrag = true
        this.accumulator += this.touchY - event.changedTouches[0].clientY
        this.touchY = event.changedTouches[0].clientY

        this.props.onChange(~~(this.accumulator / DRAG_THRESHOLD))
        this.accumulator %= DRAG_THRESHOLD
    }

    render() {
        let {number} = this.props
        return (
            <div
                className={styles.stepper}
                onTouchStart={this.touchStart}
                onTouchEnd={this.changeOnClick}
                onTouchMove={this.changeOnDrag}
            >
                {number}
                <Arrows className={styles.arrows} />
            </div>
        )
    }
}

Stepper.defaultProps = {
    number: 0,
    onChange: () => {}
}

Stepper.propTypes = {
    number: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Stepper
