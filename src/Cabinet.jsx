import React, { Component } from 'react'
import {Switch, Route, Link} from "react-router-dom"
import Settings from './Settings'
import Dashboard from './Dashboard'

export default class Cabinet extends Component {
  render() {
    return (
      <div className='col-md-12'>
            <Link className="btn btn-primary mx-2" to="/cabinet/settings">Settings</Link>
            <Link className="btn btn-warning mx-2" to="/cabinet/dashboard">Dashboard</Link>
            <hr />
            <Switch>
                <Route path="/cabinet/settings" component={Settings}/>
                <Route path="/cabinet/dashboard" component={Dashboard}/>
            </Switch>
      </div>
    )
  }
}
