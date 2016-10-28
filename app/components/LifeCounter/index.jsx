import {PropTypes} from 'react'

import styles from './style.css'
import Arrows from 'babel!react-svg!../../../icons/arrows.svg'

const changeOnClick = function(onLifeChange) {
    return (event) => {
        let clickY = event.clientY
        let targetRect = event.target.getBoundingClientRect()

        let targetHeight = targetRect.bottom - targetRect.top
        let midPoint = targetRect.top + (targetHeight / 2)

        clickY < midPoint ? onLifeChange(1) : onLifeChange(-1)
    }
}

const LifeCounter = ({lifeTotal, onLifeChange}) => {
    return (
        <div className={styles.lifeCounter} onClick={changeOnClick(onLifeChange)}>
            {lifeTotal}
            <Arrows className={styles.arrows} />
        </div>
    )
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
