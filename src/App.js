import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import CatalogItem from './components/CatalogItem';
import './App.css';
import banner from './img/banner.jpg';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <main className="container">
              <div className="row">
                  <div className="col">
                      <div className="banner">
                          <img src={banner} className="img-fluid" alt="К весне готовы!" />
                          <h2 className="banner-header">К весне готовы!</h2>
                      </div>
                      <Switch>
                        <Route path={`/${process.env.REACT_APP_HOMEPAGE}`} component={Main} />
                        <Route path="/products/:id" component={CatalogItem} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contacts} />
                        <Route exact path="/" component={Main} />
                        <Route path="*" component={NotFound} />
                      </Switch>
                  </div>
              </div>
          </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
