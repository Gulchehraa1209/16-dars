import React from 'react'

const Todo = ({ item }) => {
    return (
        <div className='d-flex align-items-center'>
            <input id={'checkbox'+item.id} type="checkbox" checked={item.completed} className='check'/>
            <h4 className='ms-3'>{item.id}.</h4>
            <label htmlFor={'checkbox'+item.id}>
                <h4 className='mx-3'>{item.title}</h4>
            </label>
        </div>
    )
}

export default Todo