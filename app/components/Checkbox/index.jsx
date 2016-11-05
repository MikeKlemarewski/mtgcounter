import {PropTypes} from 'react'

import styles from './styles.css'

const Checkbox = ({onChange}) => {
    return (
        <input
            className={styles.checkbox}
            type="checkbox"
            onChange={(event) => {
                onChange(event.target.checked)
            }} />
    )
}

Checkbox.propTypes = {
    /**
     * A callback which gets called onChange with the checkbox value
     */
    onChange: PropTypes.func.isRequired
}

export default Checkbox
