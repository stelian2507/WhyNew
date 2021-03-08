import React, {useEffect, useState} from 'react';
import './navbar.css';
import {Link, useHistory} from 'react-router-dom'
import TheContext from '../TheContext'
import actions from '../api'
import Login from './Login';
import axios from 'axios';

function Navbar(props) {

    const [user, setUser] = useState({})
    const[searchInput, setSearchInput] = useState('')
  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  const history = useHistory()


  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }


  const postSearch = async (e) =>  {
    // send the post to data base
    e.preventDefault()
   let res = await actions.searchItems(searchInput)
    console.log(res.data)
    props.setCosasInNavBar(res.data)
    history.push('/search')
  }

    return (
        
        <>

        {/* /  Nav Bar */}

        <div id="Navbar">
            <div class="logo">
                <h2>WhyNew!</h2>
            </div>
            <div class="login">
               
            
            <div style={{display:'flex', alignItems:'center'}}>
            <form onSubmit={postSearch}>
                  <input onChange={handleChange} type="text" class="searchItems" placeholder=" ...search"/>
                  
                  
                  <button type="submit" class="searchButton">
                  <i style={{color:'black'}}class="fa fa-search"></i>
                  </button>
            </form>
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