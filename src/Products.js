import React from 'react'
import  '../assets/Products.css'
const Products = () => {
    return(
        <div id="products">
            <div class="navigator">
                 <div class="buttons-nav">
                <button class="products-button">PRODUCTS</button>
                <button class="expenses-button">EXPENSES</button>
                 </div>
                <p class="img-text">Gal Gadot</p>
            
            </div>
        
        <div class="table-container">
            <div class="table-nav">
            <h1>Products</h1>
            
            <div class="select-box">
            <p>Filter by:
            <select>
                <option value="year">Year</option>
                <option value="highest-price">Highest Price</option>
                <option value="lowest-price">Lowest Price</option>
                <option value="latest-purchases">Latest Purchases</option>
              </select>
            </p>
        </div>
        </div>
            <table>
                
                <tr>
                    <th>Product Name</th>
                    <th>Product Type</th>
                    <th>Product Description</th>
                    <th>Purchase Date</th>
                    <th>Product Price</th>
                    <th>Edit/Delete</th>
                </tr>
                <tr>
                 <td>Coca-cola</td>
                 <td>Drink</td>
                 <td>Carbonated soft drink</td>
                 <td>26.08.2019</td>
                 <td>75</td>
                 <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                </tr>
                <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>26.08.2019</td>
                    <td>75</td>
                    <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                   </tr>
                   <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>26.08.2019</td>
                    <td>75</td>
                    <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                   </tr>
                   <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>26.08.2019</td>
                    <td>75</td>
                    <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                   </tr>
                   <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>26.08.2019</td>
                    <td>75</td>
                    <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                   </tr>
                   <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>26.08.2019</td>
                    <td>75</td>
                    <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                   </tr>
                   <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>26.08.2019</td>
                    <td>75</td>
                    <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                   </tr>
                   <tr>
                    <td>Coca-cola</td>
                    <td>Drink</td>
                    <td>Carbonated soft drink</td>
                    <td>26.08.2019</td>
                    <td>75</td>
                    <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                   </tr>
                   <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                       </tr>
                       <tr>
                            <td>Coca-cola</td>
                            <td>Drink</td>
                            <td>Carbonated soft drink</td>
                            <td>26.08.2019</td>
                            <td>75</td>
                            <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                           </tr>
                           <tr>
                                <td>Coca-cola</td>
                                <td>Drink</td>
                                <td>Carbonated soft drink</td>
                                <td>26.08.2019</td>
                                <td>75</td>
                                <td><button class="btn"><i class="far fa-edit"></i></button> <button class="btn"><i class="far fa-trash-alt"></i></button></td>
                               </tr>

                               <button class="fixedbutton">NEW PRODUCT</button>
            </table>
        </div>
      
            
    </div>
    
    )
}

export default Products