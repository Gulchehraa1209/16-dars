import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Red from './component/Red'
import Yellow from './component/Yellow'
import Green from './component/Green'

const App = () => {

      const [sec,setSec] = useState(15)

      useEffect(()=>{
        var i = setInterval(() => {
          if(sec===0){
            setSec(15)
          }else{
            setSec(prev=>prev-1)
          }
        }, 1000);
        return ()=>{
          clearInterval(i)
        }
      },[sec])

  return (
    <div className='container my-3'>
        <h2 className='text-center'>Svetofor</h2>
        <div className="row justify-content-center my-4">
          <div className="svetofor">
            <div className="rama">
                {10 < sec ? <Red second={sec}/>:""}
            </div>
            <div className="rama">
                {sec < 11 && sec > 5 ?<Yellow second={sec}/>:""}
            </div>
            <div className="rama">
                {sec < 6 ?<Green second={sec}/>:""}
            </div>
          </div>
        </div>
    </div>
  )
}

export default App