import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Players from './features/players/Players';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/">
            <Players />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

