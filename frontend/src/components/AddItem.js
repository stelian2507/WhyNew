import React, { useState } from 'react';
import actions from '../api'

function AddItem(props) {

    let [item, setItem] = useState('')
    let [price, setPrice] = useState('')
    const handleSubmit = (event) => {
        //Send it to the server! 
        event.preventDefault()

        actions.addItem({item, price})
            .then(newItem => {
                console.log('new item!', newItem)
                //Redirect to all-items page
                props.history.push(`all-items`)
            }).catch(console.error)
    }

    const handleChangeItem = (event) => {
        //On typing setItem 
        setItem(event.target.value)
    }

    const handleChangePrice = (event) => {
        //On typing setItem 
        setPrice(event.target.value)
    }


    return (
        <>
            <h3>Add a AddItem</h3>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeItem} type="text" name="item" placeholder="Make a item..." />
                <input onChange={handleChangePrice} type="number" name="price" placeholder="This is the price" />
                <button>📬</button>
            </form>

        </>
    );
}

export default AddItem;