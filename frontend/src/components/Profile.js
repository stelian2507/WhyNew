import React, { useState, useEffect } from 'react';
import actions from '../api'

function Profile(props) {
    const [myItems, setMyItems] = useState([])


    useEffect(() => {
        console.log(props)
        if (!props.user.email) {
            props.history.push('/')
        }
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
            <h3>{props.user?.email}</h3>

            {showItems()}
        </div>
    );
}

export default Profile;