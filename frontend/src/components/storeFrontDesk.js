import React, {useEffect, useState} from 'react';
import actions from '../api'
import './Allitems.css'


function StoreFrontDesk(props) {

    const [items, setItems] = useState([])


    let dataToRender = actions.getAllItems().then(res => {
                            setItems(res.data)
                        }).catch(console.error)
                        

    useEffect((dataToRender) => {}, [])

    const mockData = [
        {
            item: "Iphone X",
            price: '300',
            // userId: { type: Schema.Types.ObjectId, ref: 'User' },
            image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-gold?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299533651',
            description: 'A beautiful phone'
        } , 
        {
            item: "Iphone X",
            price: '300',
            // userId: { type: Schema.Types.ObjectId, ref: 'User' },
            image_url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-xs-max-gold?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1579299533651',
            description: 'A beautiful phone'
        }

    ]                    


    const showItems = () =>{
        return items.map(eachItem => {
            return(
                        <div key={eachItem._id} class="item-box">
                        <div style={{padding:'1vw'}}>
                            <img src={eachItem.image_url} alt="product picture"  style={{width:'15vw', height:'15vw', borderRadius:'6px'}}/>
                        </div>
                        <div>
                            <ul style={{listStyleType:"none"}}>
                                <li>{eachItem.item}</li>
                                <li>${eachItem.price}</li>
                                <li>{eachItem.description}</li>
                            </ul>
                        </div>
                        
                        {/* <div style={{marginBottom:'2vh',display:"flex", justifyContent:'flex-end'}}>
                            <button onClick={(e) => deleteItem(eachItem._id)} >buy</button>
                            <button onClick={(e) => deleteItem(eachItem._id)} >modify</button>
                            <button onClick={(e) => deleteItem(eachItem._id)} className="del-Btn-StoreFront">delete</button>
                        </div> */}

                    </div>)
                    

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
        <div className="All-items-display">
            {/* <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
            <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
            <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
            <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
            <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
            <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
            <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div>
            <div style={{width:'15vw', height:'15vw', borderRadius:'6px', backgroundColor: "red"}}></div> */}
                {/* <h3>All Items</h3> */}
             {/* <div class="Display-Grid"> */}
                 {showItems()}
                 {/* </div> */}

             
        </div>
    
    );
}

export default StoreFrontDesk;