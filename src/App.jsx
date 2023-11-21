import React from 'react'
import { useState } from 'react'
import ModalComponent from './ModalComponent'

const App = () => {

  const [active, setActive] = useState(false)
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Mark",
      lastName: "Otto",
      phone: 99876543,
      active: false,
      count: 0,
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      phone: 88777875,
      active: false,
      count: 0,
    },
    {
      id: 3,
      firstName: "Helen",
      lastName: "Smith",
      phone: 992007072,
      active: false,
      count: 0,
    },
    {
      id: 4,
      firstName: "Larry",
      lastName: "TheBirsd",
      phone: 99879222,
      active: false,
      count: 0,
    },
    {
      id: 5,
      firstName: "Jacob",
      lastName: "Smacktat",
      phone: 88787878,
      active: false,
      count: 0,
    }
  ])

  var OpenModal = () => {
    setActive(prev => !prev)
  }
  var AddUsers = (values) => {
    var obj = {
      id:users.length+1,
      firstName:values.firstName,
      lastName:values.lastName,
      phone:values.phone,
      active:false,
      count:0
    }
    users.push(obj)
    setUsers([...users])
    setActive(false)
  }
  return (
    <div className='container'>
      <ModalComponent isOpen={active} toggle={OpenModal} AddUsers={AddUsers} />

      <button onClick={OpenModal} className='btn btn-outline-dark my-4'>+Add</button>
      <div className="row my-2">
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>NO</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Phone</th>
              <th>Active</th>
              <th>Count</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((item, index) => <tr key={index}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.phone}</td>
                <td>
                  <input type="checkbox" checked={item.active} />
                </td>
                <td>
                  <button className='btn btn-outline-light btn-sm'>+</button>
                  {item.count}
                  <button className='btn btn-outline-light btn-sm mx-1'>-</button>
                </td>
                <td>
                  <button className='btn btn-danger btn-sm'>del</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App