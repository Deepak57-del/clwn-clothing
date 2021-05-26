import React from 'react';
import './App.css';
import HomePage from '../src/page-component/hompage/Homepage.component';
import { Switch , Route } from 'react-router-dom';
import ShopPage from '../src/page-component/shop/shop.component'


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
