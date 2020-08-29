import React from "react";
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose } from 'redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


// import ProductListReducer from './features/productList/ProductListReducer';
import CollectionListReducer from './features/collectionList/CollectionListReducer';


import ProductList from './features/productList/ProductList';
import CollectionList from './features/collectionList/CollectionList';

const store = compose()(createStore)(combineReducers({
  // ProductList: ProductListReducer,
  CollectionList: CollectionListReducer
}), window.devToolsExtension());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store } >
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/product">Product</Link>
                </li>
                <li>
                  <Link to="/collection">Collection</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/product">
                <ProductList />
              </Route>
              <Route path="/collection">
                <CollectionList />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}