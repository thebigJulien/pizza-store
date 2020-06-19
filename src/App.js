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
        <nav className="links">
        <Link to="/"><p>All Pizzas</p></Link>
        <Link to="/cart"><p>Your order</p></Link>
        </nav>
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
