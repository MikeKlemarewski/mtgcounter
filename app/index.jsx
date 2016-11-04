import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import {Provider} from 'react-redux'
import createStore from './create-store'

import Application from './containers/application'
import Main from './containers/main'
import NamePlayers from './containers/name-players'

const store = createStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Application}>
                <Route path="name-players" component={NamePlayers} />
                <IndexRoute component={Main} />
            </Route>
        </Router>
    </Provider>,
    document.getElementsByClassName('react-target')[0]
)
