import React from 'react'
import AComponent from './AComponent'
import BComponent from './BComponent'

const FirsrtComponent = () => {
  return (
    <div className='border border-danger p-2'>
        <h3>FirstComponent</h3>
        <AComponent/>
        <BComponent/>
    </div>
  )
}

export default FirsrtComponent