import React from 'react'
import  '../assets/Newproduct.css'

const Newproduct = () => {
    return(
        <div id="products">
        <div class="navigator">
             <div class="buttons-nav">
            <button class="products-button">PRODUCTS</button>
            <button class="expenses-button">EXPENSES</button>
             </div>
            <p class="img-text">Gal Gadot</p>

        </div>
        
        <h1>New Product</h1>      
                
    <div class="new-container">

           
     

        <div class="first-container">

        <div id="new-product">

        <form>

                <p class="input-container"> 
                    <label class="text-field-input" for="">Product Name</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                        <label class="text-field-input" for="">Product Description</label>
                        <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                    <label class="text-field-input" for="">Product Type</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container"> 
                    <label class="text-field-input" for="">Purchase Date</label>
                    <input type="text" class="text-field"/>
                </p>

                <p class="input-container">
                    <label class="text-field-input" for="">Product Price</label>
                    <input type="text" class="text-field"/>
                </p>


                <button class="primary-button">CREATE PRODUCT</button>
           
                
            </form>
        </div>
        
    </div>
    <div class="second-container">
            <div class="products-add">
            <i class="fas fa-plus-circle fa-3x"></i>
            <p>You are creating a new product</p>
    </div>

    </div>
    
    </div>
       
    </div>
  
    )
}

export default Newproduct