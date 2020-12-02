import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home/Home';
import CharacterInfo from './components/CharacterInfo/CharacterInfo';

function App() {
  return (
    <div className="app-wrapper">
      <Route path="/character/:characterId?" component={CharacterInfo} exact />
      <Route path="/" component={Home} exact />
    </div>
  );
}

export default App;
