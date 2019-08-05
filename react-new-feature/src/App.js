import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConcurrentModeDemo from './ConcurrentMode/index';
import StateHook from './hook/stateHook'
import PrepareForEffectHook from './hook/prepareForEffectHook'
import EffectHookDemo from './hook/effectHook'
import Index from './hook/ReducerHook'

function App() {
  return (
    <div>
      {/* <ConcurrentModeDemo /> */}
      <StateHook />
      <PrepareForEffectHook />
      <EffectHookDemo/>
      <Index/>
    </div>
  );
}

export default App;
