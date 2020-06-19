import React from 'react';
import { useContext } from 'react';
import { PizzaContext } from '../store/pizzaContext';

const Cart = () => {

    const { cart } = useContext(PizzaContext);

    let jsxCart = cart.map((pizza) => (
        <div className="cart-item">
          <div className="image"><img src={pizza.image} alt={pizza.name} /></div>
          <div className="name">{pizza.name}</div>
          <div className="price" >{pizza.price} &euro;</div>
        </div>
      ));

    return (
        <div className="cart">
            <h3>Your selection</h3>
            <div className="content">
            { cart.length > 0 ? jsxCart : 
        <p className="empty">Empty, please select a pizza</p>
            }
            </div>
            <h2>buon Appetito</h2>
        </div>
    )
}

export default Cart