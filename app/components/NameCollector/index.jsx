import {PropTypes} from 'react'

import styles from './styles.css'

class NameCollector extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }

        this.submitName = this.submitName.bind(this)
    }

    submitName(event) {
        event.preventDefault()

        this.props.onSubmit(this.refs.nameInput.value)
        this.refs.nameInput.value = ''

        if (this.state.count === 1) {
            this.props.onComplete()
        }

        this.setState({
            count: --this.state.count
        })
    }

    render() {
        let {onComplete} = this.props

        return (
            <div>
                <form onSubmit={this.stubitName}>
                    <input
                        className={styles.input}
                        type="text"
                        ref="nameInput"
                        disabled={this.state.count === 0}
                        placeholder={`Player ${this.props.count - this.state.count + 1}`} />
                    <input
                        className={styles.button}
                        type="submit"
                        value="Add"
                        disabled={this.state.count === 0}
                        onClick={this.submitName} />
                </form>
            </div>
        )
    }

}

NameCollector.propTypes = {
    count: PropTypes.number.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onComplete: PropTypes.func.isRequired
}

export default NameCollector
