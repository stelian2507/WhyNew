import React, {useEffect, useState} from 'react';
import actions from '../api'
import './Allitems.css'


function StoreFrontDesk(props) {

    const [items, setItems] = useState([])
    const [sortBtn, setSortBtn] = useState(false)


    let dataToRender = actions.getAllItems().then(res => {
                            setItems(res.data)
                        }).catch(console.error)
                        

   

    const buyItem = () => {}
    const modifyItem = () => {}

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
                        
                        <div style={{marginBottom:'2vh',display:"flex", justifyContent:'flex-end'}}>
                            <button onClick={(e) => buyItem(eachItem._id)} >buy</button>
                            <button onClick={(e) => modifyItem(eachItem._id)} >modify</button>
                            <button onClick={(e) => deleteItem(eachItem._id)} className="del-Btn-StoreFront">delete</button>
                        </div>

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


    const sortItems = (e) => {
        // e.preventDefault()
        let sortedItems = [...items]
        
        if(sortBtn === false){
            sortedItems.sort((a,b) => {return(a.price-b.price)})
                     setItems(sortedItems)
                     setSortBtn(true)
        }else{
            sortedItems.sort((a,b) => {return(b.price-a.price)})
                     setItems(sortedItems)
                     setSortBtn(false)
        }
        
    }

     useEffect((dataToRender) => {}, [])

    return (
        <>
            <div style={{float:'right'}}>
                <button  onClick={(e) => sortItems(e)} style={{border:'2px solid #308EFD',backgroundColor:'white', color:"#308EFD", borderRadius:'6px', padding:'2px 15px'}}><b>sort by price</b></button>
            </div>
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
        </>
    );
}

export default StoreFrontDesk;