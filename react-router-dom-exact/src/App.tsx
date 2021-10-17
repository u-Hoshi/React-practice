import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>AboutTop</Link>
            </li>
            <li>
              <Link to='/about/1'>About1</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/about'>
            <h1>aboutTop</h1>
          </Route>
          <Route path='/about/1'>
            <h1>about1</h1>
          </Route>
          <Route path='/'>
            <h1>top</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
