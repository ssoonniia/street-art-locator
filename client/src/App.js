import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage}/>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}
export default App;
