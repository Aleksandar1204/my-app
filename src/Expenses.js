import React from 'react'
import '../assets/Expenses.css'
import '../assets/Shared.css'

const Expenses = () => {
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

                <h1>Expenses</h1>

                <div className="table-nav">
                    <button className="monthly-button active">MONTHLY</button>
                    <button className="yearly-button">YEARLY</button>
                    <div className="select-box">
                        <p>Choose Month:
            <select>
                                <option selected value='1'>Janaury</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                                <option value='4'>April</option>
                                <option value='5'>May</option>
                                <option value='6'>June</option>
                                <option value='7'>July</option>
                                <option value='8'>August</option>
                                <option value='9'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
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

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>
                    <tr>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasdasd</td>
                        <td>sdfsdfsdf</td>
                        <td>asdsd</td>

                    </tr>


                </table>
            </div>
            <div className="footer">
                <h2>Total spent: 1205 den.</h2>
            </div>

        </div>
    )
}

export default Expenses