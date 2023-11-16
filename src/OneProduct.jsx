import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class OneProduct extends Component {
  render() {
    var pp = this.props.match.params
    return (
      <div>
        <h5>OneProduct</h5>
        <Link className="btn btn-outline-info my-1" to={"/product/"+ pp.id+"/settings/details"}>Setting</Link>
      </div>
    )
  }
}
