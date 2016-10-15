import {connect} from 'react-redux'

class Application extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <header>
                    Header
                </header>
                <div className="main-content" role="main">
                        {this.props.children}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
}

const ConnectedApplication = connect(mapStateToProps)(Application)

export default ConnectedApplication
