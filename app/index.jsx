import {render} from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

import {Provider} from 'react-redux'
import createStore from './create-store'

import Application from './application'
import Home from './home'

const store = createStore()

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Application}>
                <IndexRoute component={Home}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementsByClassName('react-target')[0]
)
