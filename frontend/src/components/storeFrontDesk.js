import React, {useEffect, useState} from 'react';
import actions from '../api'
import './Allitems.css'


function storeFrontDesk(props) {

    const [items, setItems] = useState([])


    let dataToRender = actions.getAllItems().then(res => {
                            setItems(res.data)
                        }).catch(console.error)
                        

    useEffect((dataToRender) => {}, [])

    const showItems = () =>{
        return items.map(eachItem => {
            <div class="Display-Grid" style={{width:"91vw", display:'flex', justifyContent:"space-around", flexFlow:"wrap", paddingLeft:'9vw'}}>

                    <div key={eachItem._id} class="item-box" style={{display:"flex", flexFlow:'column', alignItems:'baseline'}}>
                        <div style={{padding:'1vw'}}>
                            <img src={eachItem.image_url} alt="product picture"  style={{width:'18vw', height:'30vw', borderRadius:'6px'}}/>
                        </div>
                        <div>
                            <ul style={{listStyleType:"none"}}>
                                <li>{eachItem.item}</li>
                                <li>${eachItem.price}</li>
                                <li>{eachItem.description}</li>
                            </ul>
                        </div>

                        <div style={{marginBottom:'2vh',display:"flex", justifySelf:"end"}}>
                        <button  onClick={(e) => deleteItem(item._id)} style={{border:'none',backgroundColor:'red', color:"white", borderRadius:'6px'}}>delete</button>
                    </div>

                    </div>
                    
                </div>
        })
    }

    const deleteItem = (ItemId) =>{
        actions.delItem(ItemId)
        .then(res => {
            let copyItems = [...items]
            let filteredItems = copyItems.filter(eachItem => eachItem._id !== ItemId)
            setItems(filteredItems)
        })
    } 

    return (
        <>
            <h3>All Items</h3>
            <ul>{showItems()}</ul>
        </>
    );
}

export default storeFrontDesk;