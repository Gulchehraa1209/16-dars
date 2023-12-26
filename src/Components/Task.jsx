import React from 'react'
import { connect } from 'react-redux'

const Task = ({ item, index, checkedFunc,DeleteTask }) => {
  
    return (
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <input onChange={()=>checkedFunc(item.id)} id={'checkbox' + item.id} type="checkbox" checked={item.active} style={{ transform: "scale(1.5)" }} />
                <label htmlFor={'checkbox' + item.id} className='mx-2'>
                    <h3>{item.name}</h3>
                </label>
            </div>
            <button onClick={()=>DeleteTask(index)} className='btn btn-danger btn-sm'>del</button>
        </div>
    )
}
function mapDispatchToProps(dispatch) {
    return {
        checkedFunc: (id) => {
            dispatch({
                type: "setCheckbox",
                id: id
            })
        },
        DeleteTask:(index)=>{
            dispatch({
                type:"setDeleteTask",
                id:index
            })
        }
    }
}
export default connect(null, mapDispatchToProps)(Task)