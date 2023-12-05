import React, { useContext } from 'react'
import { MyContext } from '../App'

const DComponent = () => {
    const PropsObj = useContext(MyContext)
  return (
    <div className='border border-primary p-2'>
        <h5>DComponent</h5>
        <h3>{PropsObj.count4}</h3>
        <button onClick={()=>PropsObj.setCount4(prev=>prev+1)} className='btn btn-dark btn-sm mx-1'>+</button>
        <button onClick={()=>PropsObj.setCount4(prev=>prev-1)} className='btn btn-dark btn-sm mx-1'>-</button>
    </div>
  )
}

export default DComponent