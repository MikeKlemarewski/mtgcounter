import {PropTypes} from 'react'

import LifeCounter from '../LifeCounter'
import Circle from '../Circle'

import styles from './style.css'

const CircleLifeCounter = ({lifeTotal, onLifeChange}) => {
    return (
        <div className={styles.container}>
            <div className={styles.lifeCounter}>
                <LifeCounter className={styles.lifeCounter} lifeTotal={lifeTotal} onLifeChange={onLifeChange} />
            </div>
            <Circle className={styles.circle} total={20} filled={lifeTotal} width={300} height={300} />
        </div>
    )
}

export default CircleLifeCounter
