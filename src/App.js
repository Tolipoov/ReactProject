import React from "react";
import Nav from "./HomePage/Nav";
import Categories from "./HomePage/Categories";
import Home from "./HomePage/Home";
import Products from "./HomePage/Products/Products";
import Advertising from "./HomePage/Products/Advertising";
import NewCollection from "./HomePage/NewCollection";
import Tranding from "./HomePage/TrendProducts/Tranding";
import Footer from "./HomePage/TrendProducts/Footer";
import '../src/styles/main.scss';
import '../src/styles/responsive.scss'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Categories/>
        <Home/>
        <Products/>
        <Advertising/>
        <NewCollection/>
        <Tranding/>
        <Advertising/>
        <Footer/>
    </div>
  );
}

export default App;
