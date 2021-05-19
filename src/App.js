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

      <a
        href='https://wa.me/+25779335848'
        className='whatsapp_float'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i class='fa fa-whatsapp whatsapp-icon'></i>
      </a>
    </div>
  );
}

export default App;
