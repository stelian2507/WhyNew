import React, { useEffect, useState } from 'react';
import actions from '../api'


function AllItems(props) {
    const [items, setItems] = useState([])


    useEffect(() => {
        actions.getAllItems().then((allItems) => {
            setItems(allItems.data)
        }).catch(console.error)

    }, [])
console.log(items)
    const showItems = () => {
        return items.map(item => {
            return (
                
               <div><li key={item._id}>{item.item} -${item.price}{item.description}{item.image_url}</li>
                 <img src={item.image_url}/>
                </div>
                
            )
        })
    }


    return (
        <>
            <h3>All Items</h3>
            <ul>{showItems()}</ul>
            

        </>
    );
}

export default AllItems;