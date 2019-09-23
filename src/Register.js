import React from 'react'
import '../assets/Register.css'
import '../assets/Shared.css'

const Register = () => {
    return (
        <div id="register">

            <div className="box-container">

                <form>

                    <p className="input-container">
                        <label className="text-field-input" for="">First Name</label>
                        <input type="text" className="text-field" />
                    </p>

                    <p className="input-container">
                        <label className="text-field-input" for="">Last Name</label>
                        <input type="text" className="text-field" />
                    </p>

                    <p className="input-container">
                        <label className="text-field-input" for="">E-mail</label>
                        <input type="text" className="text-field" />
                    </p>

                    <p className="input-container">
                        <label className="text-field-input" for="">Date of Birth</label>
                        <input type="text" className="text-field" />
                    </p>

                    <p className="input-container">
                        <label className="text-field-input" for="">Telephone</label>
                        <input type="text" className="text-field" />
                    </p>

                    <p className="input-container">
                        <label className="text-field-input" for="">Country</label>
                        <input type="text" className="text-field" />
                    </p>

                    <p className="input-container">
                        <label className="text-field-input" for="">Password</label>
                        <input type="password" className="text-field" />
                    </p>


                    <button className="primary-button">REGISTER</button>


                </form>

            </div>

            <div className="aditional-info">
                <p>Or if you don't have an account.<a href="#"> Sign in</a></p>
            </div>

        </div>
    )
}

export default Register