import React from 'react'
import './list-item.scss';
const ListItems = (props) => {
    return (

        <div className="list-item">
            <h2>{props.item.itemName}</h2>
            <p>$ {props.item.itemValue}</p>
            <p>% {props.item.tax}</p>
        </div>

    );
}

export default ListItems;