import React, { useState } from 'react'
import { connect } from 'react-redux'

const TaskHeader = ({ addTask }) => {

    const [InputVal, setInputVal] = useState('')
    var getInputVal = (e) => {
        setInputVal(e.target.value)
    }
    var AddTask1 = () => {
        if(InputVal===""){
            alert("Taskni kiriting!")
        }else{
            addTask(InputVal)
            setInputVal("")
        }
    }
    return (
        <div className='d-flex'>
            <input value={InputVal} onChange={getInputVal} type="text" className='form-control' />
            <button onClick={AddTask1} className='btn btn-danger btn-sm mx-1'>add</button>
        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return {
        addTask: (InputVal) => {
            dispatch({
                type:"ADD_TASK",
                payload:InputVal
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(TaskHeader) 