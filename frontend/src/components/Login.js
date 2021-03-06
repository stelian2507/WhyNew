import React, {useEffect, useState} from 'react';
import './navbar.css';
import {Link, useHistory} from 'react-router-dom'
import TheContext from '../TheContext'
import actions from '../api'


function Login(props) {

    const [user, setUser] = useState({})

  useEffect(() => {
    actions.getUser().then(res => {
      setUser(res.data)
    }).catch(console.error)
  }, [])

  const history = useHistory()

  // Return 
  
    return (
             
            <div>
                {!user.email ? (<Link to="/auth"><button class="login-btn"><b>Login</b></button></Link>) : (<p style={{color:'grey'}}>{user.email}</p>)}
                    <span>{user.email ? (<Link to="/auth"><button><b>Logout</b></button></Link>)  : <></>}</span>
            </div>
    );
}

export default Login;