import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import MapGL from './components/Map';
import Form from './pages/Form';
import User from './pages/User';
import Comment from './pages/CommentsContainer'
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
          <Route exact path="/form" component={Form}/>
          <Route exact path="/user" component={User}/>
          <Route exact path="/comments" component={Comment}/>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}
export default App;
