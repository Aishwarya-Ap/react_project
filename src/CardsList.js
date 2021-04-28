import React from "react";
import './Cards.css';
import 'tachyons';

const CardsList = (props) => {
    return (
        <div className="Cards_style ma5 bg-light-purple dib pa3 grow shadow-4 tc">
            <img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="" />
            <h1>{props.name}</h1>
            <p>{props.work}</p>
        </div>
    )
}
export default CardsList;