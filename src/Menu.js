import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import  '../assets/Menu.css'

const Menu = () => {
    return (
      <div id="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/newproduct">Newproduct</Link>
          </li>
          <li>
            <Link to="/expenses">Expenses</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>
      </div>
    );
  };

  export default Menu