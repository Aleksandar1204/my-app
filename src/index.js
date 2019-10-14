import ReactDOM from 'react-dom'
import React from 'react'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import Login from './Login'
import Register from './Register'
import Products from './Products'
import Newproduct from './Newproduct'
import Expenses from './Expenses'
import Wrapper from './Wrapper'
import Home from './Home'
import UsersList from './UsersList'


import '../assets/Menu.css'


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const app = document.getElementById('app')

const Menu = () => {
    return (
        <div id="menu">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/login'>Log in</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>
                    <Link to='/newproduct'>Newproduct</Link>
                </li>
                <li>
                    <Link to='/expenses'>Expenses</Link>
                </li>
                <li>
                    <Link to='/user'>User</Link>
                </li>

            </ul>
        </div>
    )
}



const Routes = () => {
    return (
        <Router>
            <Menu />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/products' component={Products} />
                <Route exact path='/newproduct' component={Newproduct} />
                <Route exact path='/expenses' component={Expenses} />

                <Route exact path='/user' render={() =>
                    <Wrapper
                        component={UsersList}
                        methodType='GET'
                        url='https://jsonplaceholder.typicode.com/users'
                    />
                }
                />

            </Switch>
        </Router>
    )
}

ReactDOM.render(
<Provider store={store}>
<Routes />
</Provider>, app)

