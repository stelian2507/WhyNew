import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <section>

        {/* /  Nav Bar */}

        <div id="Navbar">
            <div class="logo">
                <h2>WhyNew!</h2>
            </div>
            <div class="login">
               
            
            <div style={{display:'flex', alignItems:'center'}}>
            <input type="text" class="searchItems" placeholder=" ...search"/>
                <button type="submit" class="searchButton">
                 <i style={{color:'black'}}class="fa fa-search"></i>
                </button>
                </div>
                <button class="login-btn"><b>Login</b></button> 
            </div>
        </div>
        <div className="nav-buttons">
                <Link to="/"><b>Home</b></Link>
                <Link to="all-items"><b>All Items</b></Link>
                <Link to="add-items"><b>Add Item</b></Link>
         </div>
        {/* / end Nav Bar */}

            {/* <section class="bodyNav-bar">

                


                
            </section> */}
        </section>
    );
}

export default Navbar;