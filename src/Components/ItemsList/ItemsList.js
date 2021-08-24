import React from 'react';
import "./ItemsList.css"
 const ItemsList =(props) => {

    const {deleteItem, items}=props;
    const length= items.length;
    const List = length ? (
        items.map(
            singleItem => {
                return(
                <div className="listItems" key={singleItem.id}>
                    <span className="name value">{singleItem.name}</span>
                    <span className="age value">{singleItem.age}</span>
                    <span className="action value" onClick={()=>deleteItem(singleItem.id)}>&times;</span>
                </div>
                )
            }
        )
    ) : (
        <p className="empty_msg"> No Items Left </p>
    )
    return (
        <div className="headerListItems">
            <div>
                <span className="headerName title">Name</span>
                <span className="headerAge title">Age</span>
                <span className="headerAction title">action</span>
            </div>
            {List}
            </div>
        
    )
 }

 export default ItemsList
