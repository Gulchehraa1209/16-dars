import React from 'react'
import { useState } from 'react'
import { doGet } from './Service'
import { useEffect } from 'react'

const Users = () => {

  const [Users, setUsers] = useState([])

  async function getUsers(){
    await doGet("/users").then((res)=>setUsers(res.data))
  }

  useEffect(()=>{
    getUsers()
  },[])

  return (
    <div className='row'>
        <h1 className='text-center'>Users</h1>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th>NO</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            Users.map((item,index)=><tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <button className='btn btn-danger btn-sm'>del</button>  
              </td>
            </tr>)
          }
        </tbody>
      </table>
      
    </div>
  )
}

export default Users