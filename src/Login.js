import React from 'react'
import  '../assets/Login.css'
import  '../assets/Shared.css'

const Login = () => {
    return (
        <div id="login">

        <div className="box-container">
            
            <form>

                <p className="input-container"> 
                    <label className="text-field-input" for="">E-mail</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                        <label className="text-field-input" for="">Password</label>
                        <input type="password" class="text-field"/>
                </p>

                

                <button className="primary-button">SIGN IN</button>
           
                
            </form>
            
        </div>

             <div className="aditional-info">
              <p>Or if you don't have an account.<a href="#"> Register</a></p>
             </div>

    </div>
    )
}

export default Login