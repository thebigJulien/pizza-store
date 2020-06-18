import React, { useContext } from 'react';
import { PizzaContext } from '../store/pizzaContext';


const PizzaList = () => {

  let { pizzas } = useContext(PizzaContext);

  let jsxPizzas = pizzas.map((pizza) => 
  <div className="cart" key={pizza.id}>
  <img src={pizza.image} alt={pizza.name}></img>
  <h3> {pizza.name} </h3>
  <p>{pizza.description}</p>
  <p> {pizza.price} </p>
  <button>order</button>
  </div>
  );

  return <div className="pizzas">{jsxPizzas}</div>;
};

export default PizzaList;