import React from 'react'
import  '../assets/Register.css'

const Register = () => {
    return (
        <div id="register">

        <div class="box-container">
            
            <form>

                <p class="input-container"> 
                    <label class="text-field-input" for="">First Name</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                        <label class="text-field-input" for="">Last Name</label>
                        <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                    <label class="text-field-input" for="">E-mail</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                    <label class="text-field-input" for="">Date of Birth</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container">
                    <label class="text-field-input" for="">Telephone</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                    <label class="text-field-input" for="">Country</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                    <label class="text-field-input" for="">Password</label>
                    <input type="password" class="text-field"/>
                </p>
                

                <button class="primary-button">REGISTER</button>
           
                
            </form>
            
        </div>

             <div class="aditional-info">
              <p>Or if you don't have an account.<a href="#"> Sign in</a></p>
             </div>

    </div>
    )
}

export default Register