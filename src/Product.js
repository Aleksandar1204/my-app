import React from 'react'
import axios from "axios";
import {
    writeProductsToStore,
    addProductToStore,
  removeProductToStore
  } from "./redux/actions/writeProductsToStore";
import { connect } from "react-redux";
import '../assets/Products.css'
import '../assets/Shared.css'
import  '../assets/Newproduct.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'



class Product extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            showModal:null
        }
    }
    componentDidMount() {
        axios
          .get("./_products_list.json")
          .then(response => {
            //zapisi vo redux
            this.props.writeProductsToStore(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }

      addProduct = () => { 
          this.setState({
            showModal:(
              
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
                        <input type="text" id="name" className="text-field"/>
                    </p>
    
                    <p className="input-container"> 
                            <label className="text-field-input" for="">Product Description</label>
                            <input type="text" id="description" className="text-field"/>
                    </p>
    
                    <p className="input-container"> 
                        <label className="text-field-input" for="">Product Type</label>
                        <input type="text" id="type" className="text-field"/>
                    </p>
    
                    <p className="input-container"> 
                        <label className="text-field-input" for="">Purchase Date</label>
                        <input type="text" id="date" className="text-field"/>
                    </p>
    
                    <p className="input-container">
                        <label className="text-field-input" for="">Product Price</label>
                        <input type="text" id="price" className="text-field"/>
                    </p>
    
    
                    <button id="save"
              onClick={() => this.saveUser()} className="primary-button">CREATE PRODUCT</button>
               
                    
                </form>
            </div>
            
        </div>
        <div className="second-container">
                <div className="products-add">
                <FontAwesomeIcon icon={faPlusCircle } />
                <p>You are creating a new product</p>
        </div>
    
        </div>
        
        </div>
           
        </div>
            
            )  
          
        });
        ;
    }
        
      saveUser = id => {
        const newProduct = {
          id: id,
          name: document.getElementById("name").value,
          description: document.getElementById("description").value,
          type: document.getElementById("type").value,
          date: document.getElementById("date").value,
          price: document.getElementById("price").value
        };
       
        this.props.addProductToStore(newProduct);
        //avtomatski go zatvara modalot od save
        this.setState({ showModal: null });
      };

      editUser = product => {
        this.setState({
          showModal: (
            <div className="my-modal">
              <div className="form-container">
                <div className="text-container">EDIT USER</div>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  defaultValue={product.name}
                />
                <input
                  id="description"
                  type="text"
                  className="form-control"
                  defaultValue={product.description}
                />
                <input
                  id="type"
                  type="text"
                  className="form-control"
                  defaultValue={product.type}
                />
                <input
                  id="date"
                  type="text"
                  className="form-control"
                  defaultValue={product.date}
                />
                <input
                  id="price"
                  type="text"
                  className="form-control"
                  defaultValue={product.price}
                />
               
                <button
                  id="save"
                  onClick={() => this.saveUser(product.id)}
                  className="btn btn-success"
                >
                  SAVE
                </button>
                <button
                  id="close"
                  onClick={() => this.setState({ showModal: null })}
                  className="btn btn-secondary"
                >
                  close
                </button>
              </div>
            </div>
          )
        });
      };
      deleteUser = product => {
        this.props.removeProductToStore(product);
      };

    render(){
        let header = null;
        let productsList = null;
        if(this.props.products){

       productsList = this.props.products.map(product => {
        return(
            <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.type}</td>
            <td>{product.date}</td>
            <td>{product.price}</td>
            <td><button  id="edit" className="btn" onClick={() => this.editUser(product)}><FontAwesomeIcon icon={faEdit} /></button> 
            <button className="btn" onClick={() => this.deleteUser(product)}><FontAwesomeIcon icon={faTrashAlt} /></button></td>
            </tr>
        );
       });
    }
    return (
        <React.Fragment>
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

                    <div id="select-box">
                        <p>Filter by:
                               <select>
                                <option id="" value="year">Year</option>
                                <option value="highest-price">Highest Price</option>
                                <option value="lowest-price">Lowest Price</option>
                                <option value="latest-purchases">Latest Purchases</option>
                            </select>
                        </p>
                    </div>
                </div>
                <table>
                {this.state.showModal}

<thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Product Description</th>
                        <th>Purchase Date</th>
                        <th>Product Price</th>
                        <th>Edit/Delete</th>
                    </tr>
                    
                    </thead>
                    <tbody>{productsList}</tbody>
                    <button className="fixedbutton"  id="add"
                  onClick={this.addProduct}>NEW PRODUCT</button>
                </table>
            </div>


        </div>
        </React.Fragment>
    )
}
}

function mapStateToProps(state) {
    return {
      products: state.productsTableReducer.products
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
    writeProductsToStore: data => dispatch( writeProductsToStore(data)),
    addProductToStore: data => dispatch(addProductToStore(data)),
    removeProductToStore: data => dispatch(removeProductToStore(data))
     
    };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Product);
  