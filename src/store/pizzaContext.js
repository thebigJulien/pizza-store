import React, { createContext, useState } from 'react';

export const PizzaContext = createContext();


const PizzasProvider = (props) => {

    let wrap = props.children;

    const [pizzas] = useState([
            {id: 1, name: "pizza whatever", price: "9,90", description: "the best pizza with whatever you want on it", image: "https://cdn.pixabay.com/photo/2017/01/22/19/12/pizza-2000599_960_720.jpg"},
            {id: 2, name: "pizza sofarsogood", price: "8,90", description: "nobody complained till now", image: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg"},
            {id: 3, name: "pizza Meln", price: "10,90", description: "the Germans love it", image: "https://cdn.pixabay.com/photo/2018/04/07/15/03/pizza-3298685_960_720.jpg"}
    ])

    const [ cart, setCart ] = useState([])

    const addPizzaToCart = (pizza) => {
        let pizzasInCart = [...cart, pizza]
        console.log(pizzasInCart);
        setCart( pizzasInCart )
      }

    let sharedData = {pizzas, addPizzaToCart, cart};

    return (
        <PizzaContext.Provider value={sharedData}>
            {wrap}
        </PizzaContext.Provider>
    )
};

 
export default PizzasProvider;