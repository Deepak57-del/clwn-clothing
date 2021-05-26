import React from 'react';
import './App.css';
import HomePage from '../src/page-component/hompage/Homepage.component';
import { Switch , Route } from 'react-router-dom';
import ShopPage from '../src/page-component/shop/shop.component'
import Header from '../src/components/header/header.component'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
