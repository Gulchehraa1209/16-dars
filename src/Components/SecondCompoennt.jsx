import React from 'react'
import CComponent from './CComponent'
import DComponent from './DComponent'

const SecondCompoennt = () => {
  return (
    <div className='border border-danger p-2'>
        <h3>SecondCompoennt</h3>
        <CComponent/>
        <DComponent/>
    </div>
  )
}

export default SecondCompoennt