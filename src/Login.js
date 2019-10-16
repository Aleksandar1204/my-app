import React from 'react'
import '../assets/Login.css'
import '../assets/Shared.css'
import store from './redux/store'
import { updateUser, deleteUser } from './redux/actions/updateUser'
import Alert from './Alert.js'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            phonenumber:''
        }
    }

    checkInput = (event) => {
            const inputValue = event.target.value
        if (inputValue.indexOf('@') <= 0) {
            console.log('imas greska u mejlo')
        }
            this.saveInput(event)
    }

    submit = () => {
        store.dispatch(updateUser(
            this.state.username, 
            this.state.password,
            this.state.phonenumber
            )
        )
    }

    delete = () => {
        store.dispatch(deleteUser())
    }

    saveInput = (event) => {
        this.setState({[event.target.id]: event.target.value})
    }
    render() {
        return (
           <React.Fragment>
                  <Alert/>
                           
                            <input  id='username' className="text-field" placeholder='Username' onChange={this.checkInput} />

                            <input id="password"  className="text-field" placeholder='Password' onChange={this.saveInput} />
                           
                            <input id="phonenumber"  className="text-field" placeholder='Phonenumber' onChange={this.saveInput} />

                        <button id='submit' className="primary-button"  onClick={this.submit}>SIGN IN</button>

                        <button id='delete' className="primary-button"  onClick={this.delete}>DELETE</button>
                        


</React.Fragment>
        )
    }
}
export default Login