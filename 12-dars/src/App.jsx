import React, { useReducer } from 'react'
import { createContext } from 'react'
import FirstComponent from './FirstComponent'

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return {...state, name:"Gulchehra"}
      break
    case "setAge":
      return{...state, age:123}
      break
    case "setPlus":
      return {...state, count:state.count+1}
      break
    case "setMinus":
      return{...state, count:state.count-1}
  }
}

export const MyContext = createContext()

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: "John",
    age: 32
  })

  function changeName(){
    dispatch({
      type:"setName"
    })
  }
  function changeAge(){
    dispatch({
      type:"setAge"
    })
  }
  function Plus(){
    dispatch({
      type:"setPlus"
    })
  }
  function Minus(){
    dispatch({
      type:"setMinus"
    })
  }


  return (
    <MyContext.Provider value={{
      count: state.count,
      Plus,
      Minus,
      name: state.name,
      changeName,
      age: state.age,
      changeAge
    }}>

      <div className='container'>
        <FirstComponent />
      </div>
    </MyContext.Provider>
  )
}

export default App