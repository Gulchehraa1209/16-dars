import React, { Component } from 'react'
import { Switch, Route, Link } from "react-router-dom"

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3>Dashboard</h3>
                <Link className="btn btn-info" to='/cabinet/dashboard/balance'>Balance</Link>
            </div>
        )
    }
}