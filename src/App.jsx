import React from 'react'
import { connect } from 'react-redux'

const App = ({name, changeName}) => {


  return (
    <div className='container'>
      <h1>{name}</h1>
      <button onClick={changeName}>changeName</button>
    </div>
  )
}
function mapStateToProps(state){
    return{
      name:state.name
    }
}
function mapDispatchToProps(dispatch){
    return {
      changeName:()=>{
          dispatch({
            type:"setName"
          })
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)