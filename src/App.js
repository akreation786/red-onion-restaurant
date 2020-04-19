import React, { createContext, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MenuDetail from './components/MenuDetail/MenuDetail';
import NotFound from './components/NotFound/NotFound';


export const CategoryContext = createContext();




function App() {
const [foodOrderCount, setFoodOrderCount] = useState(0);
const [foodCategory, setFoodCategory] = useState("lunch");
const [cart, setCart] = useState([]);


const handleAddFoodCard = (menuCard) => {
  console.log("add food card clicked", menuCard);
  const newCart = [...cart, menuCard];
  setCart(newCart);
}

  return (
    <CategoryContext.Provider value={[foodOrderCount, setFoodOrderCount]}>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu foodCategory={foodCategory} setFoodCategory={setFoodCategory}></Menu>
          </Route>
          <Route exact path="/">
            <Menu></Menu>
          </Route>
          <Route path="/menuCard/:menuCardKey">
            <MenuDetail handleAddFoodCard={handleAddFoodCard}></MenuDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </CategoryContext.Provider>
  );
}

export default App;
