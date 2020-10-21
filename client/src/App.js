import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import LineStops from './components/LineStops';
import LineStatuses from './components/LineStatuses';
import Station from './components/Station';
import './scss/App.scss';

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

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
