import React from 'react';
import logo from '../../img/logo2.png';
import '../../components/Header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
   return (
      <div className="container">
         <div className="row">
            <div className="col-md-3">
               <div className="logo">
                  <img src={logo} alt=""/>
               </div>
            </div>
            <div className="col-md-9 row justify-content-end">
               <div className="login_form">
                  <a href="/" className="cart_icon">
                     <FontAwesomeIcon icon={faShoppingCart} />
                  </a>
                  <a href="/" className="login">Log in</a>
                  <a href="/" className="btnSignUp">Sign Up</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;