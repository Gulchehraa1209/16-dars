import React from 'react'
import StopWatch from './StopWatch'
import Timer from './Timer'

const App = () => {
  return (
    <div className='container'>
      <div className="row my-4 d-flex">
        <div className="col-md-6">
          <StopWatch />
        </div>
        <div className="col-md-6">
          <Timer />
        </div>
      </div>
    </div>
  )
}

export default App