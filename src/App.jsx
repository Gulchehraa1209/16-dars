import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"
import Product from './Product'
import Cabinet from './Cabinet'
import Settings from './Settings'
import Dashboard from './Dashboard'
import Balance from './Balance'
import OneProduct from './OneProduct'
import Details from './Details'
import LastPage from './LastPage'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row my-4">
          <div className="col-md-12">
            <Link to="/" className="btn btn-dark mx-2">H0ME</Link>
            <Link to="/product" className="btn btn-success mx-2">Product</Link>
            <Link to="/cabinet" className="btn btn-info mx-2">Cabinet</Link>
          </div>
          <br />
          <br />
          <hr />
          <Switch>
            <Route path="/product/:id/settings/details/:id" component={LastPage} />
            <Route path="/product/:id/settings/details" component={Details} />
            <Route path="/product/:id/settings" component={Settings} />
            <Route path="/product/:id" component={OneProduct} />
            <Route path="/cabinet/dashboard/balance" component={Balance} />
            <Route path="/cabinet/dashboard" component={Dashboard} />
            <Route path="/cabinet/settings" component={Settings} />
            <Route path="/product" component={Product} />
            <Route path="/cabinet" component={Cabinet} />
          </Switch>
        </div>
      </div>
    )
  }
}
