import ReactDOM from 'react-dom'
import React from 'react'
import Login from './Login'
import Register from './Register'
import Products from './Products'
import Newproduct from './Newproduct'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const app = document.getElementById('app')

const Routes = () =>{
    return (
        <Router>
            
            <Switch>
            <Route exact path='/' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/newproduct' component={Newproduct} />
            
            
            </Switch>
        </Router>
        )
}

ReactDOM.render(<Routes />, app)

