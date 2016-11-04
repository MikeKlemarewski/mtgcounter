import {PropTypes} from 'react'

import styles from './styles.css'

const Checkbox = ({onChange}) => {
    return (
        <input
            className={styles.checkbox}
            type="checkbox"
            onChange={onChange} />
    )
}

Checkbox.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default Checkbox
