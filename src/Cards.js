import React from 'react';
import './Cards.css';
import 'tachyons';
import CardsList from './CardsList';
const Cards = (props) => {

    // const- after ES6 dont ues var , no one will change the value of const
    const cardsListArray = [ //array
        { //array of object in key value pair
            id: 1,
            name: "AAAA",
            work: "Web Developer"
        },
        {
            id: 2,
            name: "BBBB",
            work: "Backend Developrt"
        },
        {
            id: 3,
            name: "CCCC",
            work: "UI Developer"
        },
        {
            id: 4,
            name: "DDDD",
            work: "Web Developer"
        }
    ]
    const arrayCards = cardsListArray.map((Cards, i) => {
        return <CardsList id={cardsListArray[i].id} //acces this through array
            name={cardsListArray[i].name}
            work={cardsListArray[i].work} />
    })
    return (
        <div className="mainpage">
            <h1 className="Cards_style tc"> Welcome Friends </h1>
            {arrayCards}
            <button className="Cards_style ma5 bg-yellow dib pa4 grow tc">Click</button>
        </div>
    )
}

export default Cards;
//<CardsList id="1" name="Aish" work="Web Developer" /> this is hard coded