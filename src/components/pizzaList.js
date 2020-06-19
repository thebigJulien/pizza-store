import React, { useContext } from 'react';
import { PizzaContext } from '../store/pizzaContext';
import Pizza from './pizza';


const PizzaList = () => {

  const { pizzas } = useContext( PizzaContext )

  let jsxPizzas = pizzas.map((pizza) => <Pizza key={pizza.id} pizza={pizza} />);

  return <div className="pizzas">{jsxPizzas}</div>;
};

export default PizzaList;