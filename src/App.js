import React from 'react';
import './App.scss';
import PizzaList from './components/pizzaList';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1>Cazzo Pizza</h1>
      </header>
      <PizzaList></PizzaList>
    </div>
  );
}

export default App;
