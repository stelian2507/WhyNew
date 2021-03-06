import React, {useEffect, useState} from 'react';
import './navbar.css';
import {Link, useHistory} from 'react-router-dom'
import TheContext from '../TheContext'
import actions from '../api'

function Navbar(props) {

    const [user, setUser] = useState({})

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  const history = useHistory()




    return (
        <TheContext.Provider value={{ user, setUser, history }}>
        <section>

        {/* /  Nav Bar */}

        <div id="Navbar">
            <div class="logo">
                <h2>WhyNew!</h2>
            </div>
            <div class="login">
               
            
            <div style={{display:'flex', alignItems:'center'}}>
            <p style={{color:'grey'}}>{user.email}</p>
            <input type="text" class="searchItems" placeholder=" ...search"/>
                <button type="submit" class="searchButton">
                 <i style={{color:'black'}}class="fa fa-search"></i>
                </button>
                </div>
                {!user.email ? <Link to="/auth">
                                         <button class="login-btn"><b>Login</b></button>
                                </Link> : <Link to="/profile"><b>Profile</b></Link>}
                
            </div>
        </div>
        <div className="nav-buttons">
                <Link to="/"><b>Home</b></Link>
                <Link to="/storeFrontDesk"><b>All Items</b></Link>
                <Link to="/add-items"><b>Add Item</b></Link>
         </div>
        {/* / end Nav Bar */}

            {/* <section class="bodyNav-bar">

                


                
            </section> */}
        </section>
         </TheContext.Provider>
    );
}

export default Navbar;