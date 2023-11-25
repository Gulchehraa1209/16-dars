import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [second, setSecond] = useState(0)
  const [minute, setMinute] = useState(0)
  const [hour, setHour] = useState(0)
  const [boolean, setBoolean] = useState(false)
  const [arr, setArr] = useState([])

  useEffect(() => {
    if (boolean) {
      var a = setInterval(() => {
        if (second < 60) {
          if (second === 59) {
            if (minute === 59) {
              setSecond(0)
              setMinute(0)
              setHour(prev => prev + 1)
            }
            setSecond(0)
            setMinute(prev => prev + 1)
          }
          setSecond(prev => prev + 1)
        }
      }, 1000)
    }
    return () => { clearInterval(a) }
  }, [second, boolean])

  var Interval = () => {
    if (second === 0 && minute === 0 && hour === 0) {
      setArr = ([])
    } else {
      setArr([...arr, hour + ":" + minute + ":" + second])
    }
  }
  var Clear = () => {
    setSecond(0)  
    setMinute(0)  
    setHour(0)  
    setBoolean(false)
    setArr([])
  }

  return (
    <div className='container'>
      <div className="row my-3">
        <div className="col-md-6 offset-3">
          <div className="card text-center">
            <div className="card-header">
              <h3 className='text-center'>StopWatch</h3>
            </div>
            <div className="card-body">
              <h1>{hour} : {minute} : {second}</h1>
            </div>
            <div className="card-footer">
              <button onClick={() => setBoolean(true)} className='btn btn-success btn-sm mx-2'>start</button>
              <button onClick={() => setBoolean(false)} className='btn btn-warning btn-sm mx-2'>stop</button>
              <button onClick={Interval} className='btn btn-primary btn-sm mx-2'>interval</button>
              <button onClick={Clear} className='btn btn-danger btn-sm mx-2'>clear</button>
            </div>
            <div className="card-footer">
              {
                arr.map(item => <h4>{item}</h4>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App