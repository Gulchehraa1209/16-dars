import React from 'react'
import { Switch, Route, Link } from 'react-router-dom/cjs/react-router-dom'
import Posts from './Pages/Posts'
import Todos from './Pages/Todos'
import Users from './Pages/Users'
import OnePost from './Pages/OnePost'

const App = () => {
    

    return (
        <div className='container my-3'>
            <Link to='/posts' className='btn btn-dark mx-1' >Posts</Link>
            <Link to='/todos' className='btn btn-dark mx-1' >Todos</Link>
            <Link to='/users' className='btn btn-dark mx-1' >Users</Link>
            <hr />
            <br />
            <Switch>
                <Route path='/posts/:id' component={OnePost} />
                <Route path='/posts' component={Posts} />
                <Route path='/todos' component={Todos} />
                <Route path='/users' component={Users} />
            </Switch>
        </div>
    )
}

export default App