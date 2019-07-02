import React from 'react';
import LoginStatus from './LoginStatus';
import ShopCart from './ShopCart';
import WithLogin from './WithLogin';
import './App.css';

// const WithLoginStatus = WithLogin(LoginStatus);
// const WithShopCart = WithLogin(ShopCart);
// 将组件传入进去,并在withlogin中将状态进行判断选择，返回一个已经判断状态的组件

function App() {
  return (
    <React.Fragment>
      <LoginStatus />
      <ShopCart />
      {/* <WithLoginStatus />
      <WithShopCart a="1" b="2"/> */}
    </React.Fragment>
  );
}

export default App;
