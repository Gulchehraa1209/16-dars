import React from 'react'
import { useState } from 'react'

const App = () => {
      const [arr,setarr] = useState([])

      var AddCounter=()=>{
        arr.push(0)
        setarr([...arr])
      }

      var Plus=(index)=>{
          arr[index] = arr[index]+1
          setarr([...arr])
      }
      var Minus=(index)=>{
        arr[index] = arr[index]-1
        setarr([...arr])
    }
  return (
    <div className='container'>
        <h1>Counters:</h1>
       {
        arr.map((item,index)=><div key={index}>
          <span>{index+1}. counter{index+1} =  {item}</span>
          <button onClick={()=>Plus(index)} className='btn btn-outline-dark m-1 btn-sm'>+</button>
          <button onClick={()=>Minus(index)} className='btn btn-outline-dark m-1 btn-sm'>-</button>
        </div>)
       }
        <button className='btn btn-outline-dark my-2 mx-3' onClick={AddCounter}>+Add Counter</button>
    </div>
  )
}

export default App