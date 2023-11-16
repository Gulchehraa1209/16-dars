import React, { Component } from 'react'
import {Link} from "react-router-dom"

export default class Details extends Component {
  render() {
    var pp = this.props.match.params
    return (
      <div>
        <h6>Details</h6>
        <Link to={"/product/"+ pp.id+"/settings/details/"+pp.id}>Click here...</Link>
      </div>
    )
  }
}
