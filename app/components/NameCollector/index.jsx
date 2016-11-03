import {PropTypes} from 'react'

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
                        type="text"
                        ref="nameInput"
                        disabled={this.state.count === 0}
                        placeholder={`Player ${this.props.count - this.state.count + 1}`} />
                    <button
                        disabled={this.state.count === 0}
                        onClick={this.submitName}>Add</button>
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
