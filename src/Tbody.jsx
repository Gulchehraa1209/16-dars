import React from 'react'
import {useState} from 'react'
const Tbody = ({ users, changeActive, DelUsers}) => {
    
    const [count, setCount] = useState(0)

    return (
        <tbody>
            {
                users.map((item, index) => <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.phone}</td>
                    <td>
                        <input type="checkbox" onChange={(e) => changeActive(item, e)} style={{ scale: "1.5" }} checked={item.active} />
                    </td>
                    <td>
                        <button className='btn btn-outline-light btn-sm' onClick={()=>setCount(prev=>prev+1)}>+</button>
                        {count}
                        <button className='btn btn-outline-light btn-sm mx-1'onClick={()=>setCount(prev=>prev-1)}>-</button>
                    </td>
                    <td>
                        <button onClick={()=>DelUsers(index)} className='btn btn-danger btn-sm'>del</button>
                    </td>
                </tr>)
            }
        </tbody>
    )
}

export default Tbody