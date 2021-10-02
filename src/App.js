import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home'
import Create from './Create';
import MarketPlace from './MarketPlace';
import MyItems from './MyItems';
import Profile from './Profile';
import { useMoralis } from 'react-moralis';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const {isAuthenticated}=useMoralis();
  return (
    <BrowserRouter>
    <Switch>
    <div>
    <Header/>
      <Route path="/" component={Home} exact/>
      <Route path="/create" component={Create} />
      <Route path="/marketplace" component={MarketPlace}/>
      <Route path="/myitems">
      {isAuthenticated? <MyItems/> : <Home/>}
      </Route>
      <Route path="/profile">
      {isAuthenticated? <Profile/> : <Home/>}
      </Route>
      <Footer/>
      </div>
    </Switch>
    <Redirect path="/" exact/>
    </BrowserRouter>
  );
}

export default App;
