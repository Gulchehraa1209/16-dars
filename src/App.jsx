import React from 'react'
import TaskHeader from './Components/TaskHeader'
import TaskBody from './Components/TaskBody'

const App = () => {
  return (
    <div className='container'>
      <div className="row my-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
                <TaskHeader/>
            </div>
            <div className="card-body">
              <TaskBody/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App