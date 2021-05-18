/** @format */

import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route>404 not Found!!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
