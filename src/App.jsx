import React, { createContext, useState } from 'react'
import FirsrtComponent from './Components/FirsrtComponent'
import SecondCompoennt from './Components/SecondCompoennt'

export const MyContext = createContext()
const App = () => {

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [count4, setCount4] = useState(0)


  var Plus=()=>{
    setCount1(prev=>prev+1)
    setCount2(prev=>prev+1)
    setCount3(prev=>prev+1)
    setCount4(prev=>prev+1)
  }
  var Minus=()=>{
    setCount1(prev=>prev-1)
    setCount2(prev=>prev-1)
    setCount3(prev=>prev-1)
    setCount4(prev=>prev-1)
  }
  return (
    <MyContext.Provider value={{
      count1, count2, count3, count4,
      setCount1, setCount2, setCount3, setCount4
    }}>
      <div className='container'>
        <div className="row border border-dark mt-4">
          <div className="col-md-3 offset-5 ps-5 my-2">
            <button className='btn btn-outline-dark ' onClick={Plus}> +</button>
            <button className='btn btn-outline-dark mx-3' onClick={Minus}>-</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 border border-dark p-5">
            <FirsrtComponent />
          </div>
          <div className="col-md-6 border border-dark p-5">
            <SecondCompoennt />
          </div>
        </div>
      </div>
    </MyContext.Provider>
  )
}

export default App