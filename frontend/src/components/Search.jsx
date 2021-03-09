import React from 'react';


function Search(props) {

    console.log(props.MyItemsZZZZ)

    const showItems = ( ) => {
        return(
            props.MyItemsZZZZ.map(eachElement => {
             return(   <div>
                    {/* <div> {eachElement[image_url]}</div> */}
                    <div> {eachElement.item}</div>
                    {/* <div> {eachElement[price]}</div>
                    <div> {eachElement[description]}</div> */}
                </div>
             )
            })
            
        )
    }

    return (
        <div>
            {showItems()}
        </div>
    );
}

export default Search;