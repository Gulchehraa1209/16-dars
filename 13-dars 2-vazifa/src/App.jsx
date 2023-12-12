import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [Posts, setPosts] = useState([])
  const [Todos, setTodos] = useState([])
  const [Users, setUsers] = useState([])

  var posts = 'https://jsonplaceholder.typicode.com/posts'
  var todos = 'https://jsonplaceholder.typicode.com/todos'
  var users = 'https://jsonplaceholder.typicode.com/users'

  var GetPosts = () => {
    axios.get(posts).then((res) => { setPosts(res.data) })
  }
  var GetTodos = () => {
    axios.get(todos).then((res) => { setTodos(res.data) })
  }

  var GetUsers = () => {
    axios.get(users).then((res) => { setUsers(res.data) })
  }
  useEffect(() => {
    GetPosts()
    GetTodos()
    GetUsers()
  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4 border border-light bg-dark text-light">
          <h3>Posts</h3>
          {
            Posts.map((item, index) => <div className='card my-2' key={index}>
              <div className="card-header">
                {item.id}.{item.title}
              </div>
              <div className="card-body">
                {item.body}
              </div>
            </div>)
          }
        </div>
        <div className="col-md-4 border border-light bg-dark text-light">
          <h3>Todos</h3>
          {
            Todos.map((item, index) => <div className='card' key={index}>
              <div className="card-header">
                <input className='mx-1' type="checkbox" checked={item.completed} />
                {item.id}. {item.title}
              </div>
            </div>)
          }
        </div>
        <div className="col-md-4 border border-lilght bg-dark text-light">
          <h3>Users</h3>
          {
            Users.map((item, index) => <div className='card' key={index}>
              <div className="card-header">{item.id}.{item.username}</div>
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.phone}</p>
                <p>{item.email}</p>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default App