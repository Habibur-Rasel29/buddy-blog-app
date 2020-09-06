import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
import UserComments from './components/UserComments/UserComments';
import SpecificComment from './components/SpecificComment/SpecificComment';


function App() {
 
    return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/blog">
            <Blog/>
          </Route>

          <Route path="/login">
          <Login/>
          </Route>

          <Route exact path="/">
            <Home/>
            </Route>

            <Route path="/user/:userInfo">
              <UserComments/>
              <SpecificComment/>
            </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  </div>
    )
}

export default App;


