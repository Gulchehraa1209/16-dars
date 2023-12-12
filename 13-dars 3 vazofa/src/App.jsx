import React, { useEffect, useState } from 'react'
import api from './api'

const App = () => {

  const [Posts, setPosts] = useState([])

  var GetPosts = () => {
    api.get("/posts").then((res) => setPosts(res.data))
  }
  useEffect(() => {
    GetPosts()
  }, [])

  return (
    <div className='container'>
      <div className="row">
          {
            Posts.map((item, index) => <div className='col-md-4 my-2' key={index}>
              <div className="card">
                <div className="card-header">{item.id}. {item.title}</div>
                <div className="card-body">{item.body}</div>
              </div>
            </div>)
          }
      </div>
    </div>
  )
}

export default App