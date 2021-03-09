import axios from 'axios';
import React, { useEffect, useState } from 'react';
import actions from '../api'
import './Allitems.css';


function AllItems(props) {
    const [items, setItems] = useState([])
    let [sortBtn, setSortBtn] = useState(false)


    useEffect(() => {
        actions.getAllItems().then((allItems) => {
            setItems(allItems.data)
        }).catch(console.error)

    }, [])


    const deleteItem = (itemId) => {
        // preventDefault()
        actions.delItem(itemId)
        .then(res => {
            let copyItems = [...items]
            let filteredItems = copyItems.filter(each => each._id !== itemId)
            setItems(filteredItems)
        })

    }



console.log(items)
    const showItems = () => {

        // Paged Returned
        return items.map(item => {
            return (
                
                <div class="Display-Grid" style={{width:"91vw", display:'flex', justifyContent:"space-around", flexFlow:"wrap", paddingLeft:'9vw'}}>
                   
                    <div key={item._id} class="item-box" style={{display:"flex", flexFlow:'column', alignItems:'baseline'}}>
                        <div style={{padding:'1vw'}}>
                            <img src={item.image_url} alt="product picture"  style={{width:'18vw', height:'30vw', borderRadius:'6px'}}/>
                        </div>
                        <div>
                            <ul style={{listStyleType:"none"}}>
                                <li>{item.item}</li>
                                <li>${item.price}</li>
                                <li>{item.description}</li>
                            </ul>
                        </div>

                        <div style={{marginBottom:'2vh',display:"flex", justifySelf:"end"}}>
                        <button  onClick={(e) => deleteItem(item._id)} style={{border:'none',backgroundColor:'red', color:"white", borderRadius:'6px'}}>delete</button>
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