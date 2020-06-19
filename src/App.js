import React from 'react';
import './App.scss';
import PizzaList from './components/pizzaList';
import { Route, Link } from 'react-router-dom';
import Cart from './components/cart';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Cazzo Pizza</h1>
        <Link to="/">All Pizzas</Link>
        <Link to="/cart">Your order &#128722;</Link>
      </header>
      <main>
      <Route exact path="/">
          <PizzaList></PizzaList>
      </Route>
      
      <Route path="/cart">
          <Cart></Cart>
        </Route>
      </main>
    </div>
  );
}

export default App;
