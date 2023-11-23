import React from 'react'
import { useState } from 'react'
import ModalComponent from './ModalComponent'
import Thead from './Thead'
import Tbody from './Tbody'

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
      id: users.length + 1,
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      active: false,
      count: 0
    }
    users.push(obj)
    setUsers([...users])
    setActive(false)
  }

  var changeActive = (item, e) => {
    item.active = e.target.checked
    setUsers([...users])
  }

  var DelUsers=(index)=>{
      users.splice(index,1)
      setUsers([...users])
  }


  return (
    <div className='container'>
      <ModalComponent isOpen={active} toggle={OpenModal} AddUsers={AddUsers} />

      <button onClick={OpenModal} className='btn btn-outline-dark my-4'>+Add</button>
      <div className="row my-2">
        <table className='table table-dark'>
            <Thead/>
            <Tbody users={users} changeActive={changeActive} DelUsers={DelUsers}/>
        </table>
      </div>

    </div>
  )
}

export default App