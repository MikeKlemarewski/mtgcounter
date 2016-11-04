import {PropTypes} from 'react'

import styles from './styles.css'

const Button = ({text, disabled, onClick}) => {
    return (
        <button
            className={styles.button}
            type="submit"
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    )
}



Button.propTypes = {
    text: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired
}

export default Button
