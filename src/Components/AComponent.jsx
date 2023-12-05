import React, { useContext } from 'react'
import { MyContext } from '../App'

const AComponent = () => {
    const PropsObj = useContext(MyContext)
    return (
        <div className='border border-primary p-2 my-2'>
            <h5>AComponent</h5>
            <h3>{PropsObj.count1}</h3>
            <button className='btn btn-dark btn-sm mx-1' onClick={()=>PropsObj.setCount1(prev=>prev+1)}>+</button>
            <button className='btn btn-dark btn-sm mx-1'onClick={()=>PropsObj.setCount1(prev=>prev-1)}>-</button>
        </div>
    )
}

export default AComponent