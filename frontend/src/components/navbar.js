import React, {useEffect, useState} from 'react';
import './navbar.css';
import {Link, useHistory} from 'react-router-dom'
import TheContext from '../TheContext'
import actions from '../api'
import Login from './Login';

function Navbar(props) {

    const [user, setUser] = useState({})

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  const history = useHistory()




    return (
        
        <>

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
                    <Login/>
                </div>
        </div>
        <div className="nav-buttons">
                <Link to="/"><b>Home</b></Link>
                <Link to="/storeFrontDesk"><b>All Items</b></Link>
                <Link to="/add-items"><b>Add Item</b></Link>
         </div>
        </>
    );
}

export default Navbar;