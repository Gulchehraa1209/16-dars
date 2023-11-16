import React, { Component } from 'react'
import {Switch, Route, Link} from "react-router-dom"
import OptionOne from './Component/OptionOne'
import OptionTwo from './Component/OptionTwo'
import OptionThree from './Component/OptionThree'
import OptionFour from './Component/OptionFour'
import OptionFive from './Component/OptionFive'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
                <div className="row my-4">
                    <div className="col-md-6">
                            <Link to="/"> <button className='btn btn-success'>HOME</button> </Link>
                            <Link to="/optionOne"> <button className='btn btn-success'>Option1</button> </Link>
                            <Link to="/optionTwo"> <button className='btn btn-success'>Option2</button> </Link>
                            <Link to="/optionThree"> <button className='btn btn-success'>Option3</button> </Link>
                            <Link to="/optionFour"> <button className='btn btn-success'>Option4</button> </Link>
                            <Link to="/optionFive"> <button className='btn btn-success'>Option5</button> </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="card card-body p-5">
                            <Switch>
                                <Route path="/optionOne" component={OptionOne}/>
                                <Route path="/optionTwo" component={OptionTwo}/>
                                <Route path="/optionThree" component={OptionThree}/>
                                <Route path="/optionFour" component={OptionFour}/>
                                <Route path="/optionFive" component={OptionFive}/>
                            </Switch>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}
