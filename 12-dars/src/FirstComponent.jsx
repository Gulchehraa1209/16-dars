import React, { useContext } from 'react'
import { MyContext } from './App'

const FirstComponent = () => {

    const Props = useContext(MyContext)
  return (
    <div>
        <h1>{Props.name}</h1>
        <button onClick={Props.changeName}>changeName</button>
        <h1>{Props.age}</h1>
        <button onClick={Props.changeAge}>changeAge</button>
        <h1>{Props.count}</h1>
        <button onClick={Props.Plus}>Plus</button>
        <button onClick={Props.Minus}>Minus</button>
    </div>
  )
}

export default FirstComponent