import {connect} from 'react-redux'
import Button from './components/button'

class Home extends React.Component {

    render() {
        return (
            <div>
                Home page
                <Button text="Suck a butt!"/>
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
