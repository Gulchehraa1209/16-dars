import React, { useContext } from 'react'
import { MyContext } from '../App'

const BComponent = () => {
    const PropsObj = useContext(MyContext)
  return (
    <div className='border border-primary p-2'>
        <h5>BComponent</h5>
        <h3>{PropsObj.count2}</h3>
        <button onClick={()=>PropsObj.setCount2(prev=>prev+1)} className='btn btn-dark btn-sm mx-1'>+</button>
        <button onClick={()=>PropsObj.setCount2(prev=>prev-1)} className='btn btn-dark btn-sm mx-1'>-</button>
    </div>
  )
}

export default BComponent