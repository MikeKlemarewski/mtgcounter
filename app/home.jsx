import {connect} from 'react-redux'
import TabbedHeader from './components/TabbedHeader'

class Home extends React.Component {

    render() {
        return (
            <div>
                Home page
                <TabbedHeader items={["Chris", "Mike", "Jane"]} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const ConnectedHome = connect(mapStateToProps)(Home)

export default ConnectedHome
