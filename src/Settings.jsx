import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Settings extends Component {
  render() {
    var pp = this.props.match.params
    return (
      <div>
        <h3>Settings</h3>
        <Link className="btn btn-info" to={"/product/"+ pp.id+"/settings/details"}>Details</Link>
      </div>
    )
  }
}
