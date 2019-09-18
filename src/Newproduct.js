import React from 'react'
import  '../assets/Newproduct.css'

const Newproduct = () => {
    return(
        <div id="products">
        <div className="navigator">
             <div className="buttons-nav">
            <button className="products-button">PRODUCTS</button>
            <button className="expenses-button">EXPENSES</button>
             </div>
            <p className="img-text">Gal Gadot</p>

        </div>
        
        <h1>New Product</h1>      
                
    <div className="new-container">

           
     

        <div className="first-container">

        <div id="new-product">

        <form>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Product Name</label>
                    <input type="text" className="text-field"/>
                </p>

                <p className="input-container"> 
                        <label className="text-field-input" for="">Product Description</label>
                        <input type="text" className="text-field"/>
                </p>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Product Type</label>
                    <input type="text" className="text-field"/>
                </p>

                <p className="input-container"> 
                    <label className="text-field-input" for="">Purchase Date</label>
                    <input type="text" className="text-field"/>
                </p>

                <p className="input-container">
                    <label class="text-field-input" for="">Product Price</label>
                    <input type="text" className="text-field"/>
                </p>


                <button className="primary-button">CREATE PRODUCT</button>
           
                
            </form>
        </div>
        
    </div>
    <div className="second-container">
            <div className="products-add">
            <i className="fas fa-plus-circle fa-3x"></i>
            <p>You are creating a new product</p>
    </div>

    </div>
    
    </div>
       
    </div>
  
    )
}

export default Newproduct