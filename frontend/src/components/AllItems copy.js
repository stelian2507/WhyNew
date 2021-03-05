import React, { useEffect, useState } from 'react';
import actions from '../api'
import './Allitems.css';


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
                
                <div class="Display-Grid" style={{width:"91vw", display:'flex', justifyContent:"space-around", flexFlow:"wrap", paddingLeft:'9vw'}}>
                    <div key={item._id} class="item-box" style={{display:"flex", flexFlow:'column', alignItems:'baseline', marginBottom:'2vh'}}>
                        <div style={{padding:'1vw'}}>
                            <img src={item.image_url} alt="product picture"  style={{width:'18vw', height:'30vw', borderRadius:'6px'}}/>
                        </div>
                        <div>
                            <ul>
                                <li>{item.item}</li>
                                <li>${item.price}</li>
                                <li>{item.description}</li>
                            </ul>
                        </div>


                    </div>
                </div>

            //    <div><li key={item._id}>{item.item} -${item.price}{item.description}{item.image_url}</li>
            //      <img src={item.image_url}/>
            //     </div> 35 20 10 20 10 20 10
                
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