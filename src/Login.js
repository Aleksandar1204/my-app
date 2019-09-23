import React from 'react'
import '../assets/Login.css'
import '../assets/Shared.css'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
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
        alert(this.state.username + '' + this.state.password)
    }

    saveInput = (event) => {
        this.state({[event.target.id]: event.target.value})
    }
    render() {
        return (
            <div id="login">

                <div className="box-container">

                    <form>

                        <p className="input-container">
                            <label className="text-field-input" for="">E-mail</label>
                            <input type="text" id='password' className="text-field" placeholder='Username' onChange={this.checkInput} />
                            
                        </p>

                        <p className="input-container">
                            <label className="text-field-input" for="">Password</label>
                            <input type="password" className="text-field" placeholder='Password' onChange={this.saveInput} />
                        </p>



                        <button id='submit' className="primary-button"  onClick={this.submit}>SIGN IN</button>


                    </form>

                </div>

                <div className="aditional-info">
                    <p>Or if you don't have an account.<a href="#"> Register</a></p>
                </div>

            </div>
        )
    }
}
export default Login