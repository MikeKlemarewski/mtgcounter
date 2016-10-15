import {PropTypes} from 'react'
import styles from './style.css'

const Button = ({text}) => {
    return (
        <button className={styles.button}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
};

export default Button;
