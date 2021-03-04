import React, { useState, useEffect, useContext } from 'react';
import actions from '../api'
import TheContext from '../TheContext';

function Profile(props) {
    const [myItems, setMyItems] = useState([])
    const { user, history, setUser } = useContext(TheContext)

    useEffect(() => {
        console.log(props)
        // if (!props.user.email) {
        //     props.history.push('/')
        // }
        actions.getMyItems().then(res => setMyItems(res.data))
    }, [])

    const showItems = () => {
        return myItems.map(item => {
            return (
                <li key={item._id}>{item.item}</li>
            )
        })
    }

    return (
        <div>
            <Welcome />
            {showItems()}
        </div>
    );
}

function Welcome(props) {
   const {user, setUser, history} = useContext(TheContext)

    const logOut = () => {
        setUser({})
        localStorage.clear()
    }
    return (
        <>
        <h3> Welcome {user?.email} with no props </h3>
        <button onClick={() => history.goBack()}>GO back</button>
        <button onClick={logOut}>Log Out</button>
        </>
    )
}





export default Profile;