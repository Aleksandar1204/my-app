import ReactDOM from 'react-dom'
import React from 'react'
import Login from './Login'
import Register from './Register'
import Products from './Products'
import Newproduct from './Newproduct'
import Wrapper from './Wrapper'

import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const app = document.getElementById('app')

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to= '/'>Home</Link>
            </li>
            <li>
            <Link to= '/register'>Register</Link>
            </li>
            <li>
            <Link to= '/products'>Products</Link>
            </li>
            <li>
            <Link to= '/newproduct'>Newproduct</Link>
            </li>
            <li>
            <Link to= '/user'>User</Link>
            </li>
         
        </ul>
    )
}

const Routes = () =>{
    return (
        <Router>
            <Menu/>
            <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/newproduct' component={Newproduct} />
            <Route exact path='/user' render={() =>
                <React.Fragment>
                        <Wrapper/>
                        

                </React.Fragment>
            }
            />

            
            
            </Switch>
        </Router>
        )
}

ReactDOM.render(<Routes />, app)

