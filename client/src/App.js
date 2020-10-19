import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './scss/App.scss';
import Nav from './components/Nav';
import LineStops from './components/LineStops';
import LineStatuses from './components/LineStatuses';
import Station from './components/Station';

//reduxStore
//Connect react & redux:
import { Provider } from 'react-redux';
//bring in store
import store from './store';

const App =() => {
  return (
    <Provider store={store}>
      <div className='App'>
        <header>
          <Nav />
        </header>
        <Switch>
          <Route exact path='/line/:id' component = { LineStops }/>
          <Route exact path='/station/:url' component = { Station }/>
          <Route path='/' component = { LineStatuses }/>
        </Switch>

        <footer className='right'>
          <a href='http://www.orjon.com'>orjon.com</a>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
