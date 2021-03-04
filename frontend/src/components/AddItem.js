import React, { useState } from 'react';
import actions from '../api'

function AddItem(props) {

    let [item, setItem] = useState('')
    let [price, setPrice] = useState('')
    let [image_url, setImage_url] = useState('')
    const handleSubmit = (event) => {
        //Send it to the server! 
        event.preventDefault()

        actions.addItem({item, price, image_url})
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

    const handleChangeImage_url = (event) => {
        //On typing setItem 
        setImage_url(event.target.value)
    }

    return (
        <>
            <h3>Add an Item</h3>

            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeItem} type="text" name="item" placeholder="Add an item..." />
                <input onChange={handleChangePrice} type="number" name="price" placeholder="Set your price" />
                <input onChange={handleChangeImage_url} type="text" name="image" placeholder="This is the image" />
                <button>📬</button>
            </form>

        </>
    );
}

export default AddItem;