import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import MapGL from './components/Map';
import './App.css';
import ButtonAppBar from './components/ButtonAppBar'

const App = props => {
  return (
    <div className="App">
     <ButtonAppBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/map" component={MapGL}/>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}
export default App;
