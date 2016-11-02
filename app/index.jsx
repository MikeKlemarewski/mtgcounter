import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import {Provider} from 'react-redux'
import createStore from './create-store'

import Application from './containers/application'
import NewGame from './containers/new-game'

const store = createStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Application}>
                <IndexRoute component={NewGame}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementsByClassName('react-target')[0]
)
