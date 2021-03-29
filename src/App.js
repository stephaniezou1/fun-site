import React from 'react';
import NavBar from './components/NavBar'
import HomeContainer from './containers/HomeContainer'
import DetailContainer from './containers/DetailContainer'
import {Route, Switch} from 'react-router-dom'
import './App.css';

class App extends React.Component {

  render (){
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
              <HomeContainer/>
          </Route>
          <Route exact path="/details">
              <DetailContainer/>
          </Route>
        </Switch>
        
      </div>
    );
  }
}

export default App;
