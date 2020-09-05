import React from 'react';
import './OrderItem.css';

const OrderItem = props => {
    const ingredients = Object.keys(props.ingredients).map(ingName => {
        return {
            name: ingName,
            amount: props.ingredients[ingName]
        };
    });


    const ingredientOutput = ingredients.map(ig => (
        <span key={ig.name}>{ig.name} ({ig.amount})</span>
    ));

    return (
        <div className="OrderItem">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>{props.price} KGS</strong></p>
        </div>
    );
};

export default OrderItem;