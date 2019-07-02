import React from 'react';
import LoginStatus from './LoginStatus';
import ExampleMobx from './ExampleMobx/index';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
function App() {
  return (
    <>
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
      <ExampleMobx />
    </>
  )
}

export default App;
