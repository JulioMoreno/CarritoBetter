import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./components/FontawesomeIcons";
import "./App.css";
import NavBar from "./components/navbar/navbar";
import Cart from "./components/cart/cart";
import Products from "./components/products/products";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
