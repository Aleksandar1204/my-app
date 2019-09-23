import React from 'react'
import '../assets/Products.css'
import '../assets/Shared.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'



const Products = () => {
    return (
        <div id="products">
            <div className="navigator">
                <div className="buttons-nav">
                    <button className="products-button">PRODUCTS</button>
                    <button className="expenses-button">EXPENSES</button>
                </div>
                <p className="img-text">Gal Gadot</p>

            </div>

            <div className="table-container">
                <div className="table-nav">
                    <h1>Products</h1>

                    <div className="select-box">
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
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button class="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>
                    <tr>
                        <td>Coca-cola</td>
                        <td>Drink</td>
                        <td>Carbonated soft drink</td>
                        <td>26.08.2019</td>
                        <td>75</td>
                        <td><button className="btn"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                    </tr>

                    <button className="fixedbutton">NEW PRODUCT</button>
                </table>
            </div>


        </div>

    )
}

export default Products