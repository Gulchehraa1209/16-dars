import React, { useState } from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import Posts from './Pages/Posts'
import Todos from './Pages/Todos'
import Users from './Pages/Users'

const App = () => {


  
  return (
    <div className='container my-3'>
      <Link className="btn btn-dark mx-2" to="/posts">Posts</Link>
      <Link className="btn btn-dark mx-2" to="/todos">Todos</Link>
      <Link className="btn btn-dark mx-2" to="/users">Users</Link>
      <hr />
      <br />
      <Switch>
        <Route path="/posts" component={Posts}/>
        <Route path="/todos" component={Todos}/>
        <Route path="/users" component={Users}/>
      </Switch>
    </div>
  )
}

export default App