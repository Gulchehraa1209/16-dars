import React, { useEffect } from 'react'
import { useState } from 'react'

const Timer = () => {

    const [second, setSecond] = useState(0)
    const [minute, setMinute] = useState(0)
    const [hour, setHour] = useState(0)
    const [boolean, setBoolean] = useState(false)

    var SecondPlus=()=>{
      setSecond(prev=>prev+1)
    }
    var MinutePlus=()=>{
      setMinute(prev=>prev+1)
    }
    var HourPlus=()=>{
      setHour(prev=>prev+1)
    }
    var SecondMinus=()=>{
      setSecond(prev=>prev-1)
      if(second<=0){
        setSecond(0)
      }
    }
    var MinuteMinus=()=>{
      setMinute(prev=>prev-1)
      if(minute<=0){
        setMinute(0)
      }
    }
    var HourMinus=()=>{
      setHour(prev=>prev-1)
      if(hour<=0){
        setHour(0)
      }
    }

    useEffect(()=>{
        if(boolean){
             let b = setInterval(() => {
                if(second===0){
                  if(minute===0){
                      if(hour===0){
                        setHour(60)
                        clearInterval(b)
                      }
                      setHour(prev=>prev-1)
                      setMinute(60)
                    }
                    setMinute(prev=>prev-1)
                    setSecond(60)
                }
                setSecond(prev=>prev-1)
            }, 1000)
            return()=>{ clearInterval(b)}
        }
    },[second, boolean])

     var Clear=()=>{
        setSecond(0)
        setMinute(0)
        setHour(0)
        setBoolean(true)
    }
  return (
    <div className='container'>
        <div>
            <div className="card text-center">
              <div className="card-header">
                <h2 className='text-center'>Timer</h2>
              </div>
              <div className="card-body">
                  <div className="d-flex justify-content-center">
                    <div className="m-2">
                          <button onClick={HourPlus} className='btn btn-dark btn-sm'>+</button>
                          <h1>{hour}</h1>
                          <button onClick={HourMinus} className='btn btn-dark btn-sm'>-</button>
                    </div>
                    <div className="m-2">
                          <button onClick={MinutePlus} className='btn btn-dark btn-sm'>+</button>
                          <h1>{minute}</h1>
                          <button onClick={MinuteMinus} className='btn btn-dark btn-sm'>-</button>
                    </div>
                    <div className="m-2">
                          <button onClick={SecondPlus} className='btn btn-dark btn-sm'>+</button>
                          <h1>{second}</h1>
                          <button onClick={SecondMinus} className='btn btn-dark btn-sm'>-</button>
                    </div>
                  </div>
              </div>
              <div className="card-footer">
                <button onClick={()=>setBoolean(true)} className='btn btn-success btn-sm mx-2'>start</button>
                <button onClick={()=>setBoolean(false)} className='btn btn-warning btn-sm mx-2'>stop</button>
                <button onClick={Clear} className='btn btn-danger btn-sm mx-2'>clear</button>
              </div>
              <div className="card-footer">

              </div>
          </div>
        </div>
    </div>
  )
}

export default Timer