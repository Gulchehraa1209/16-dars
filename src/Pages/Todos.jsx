import React from 'react'
import { useState } from 'react'
import { doGet } from './Service'
import { useEffect } from 'react'
import Todo from './Todo'

const Todos = () => {

  const [data, setData] = useState([])
  const [Todos, setTodos] = useState([])
  const [Users, setUsers] = useState([])
  const [page, setPage] = useState(1)
  const [currentUser, setCurrentUser] = useState("")
  const [isFiltering, setIsFiltering] = useState(false)
  const [check, setCheck] = useState(false)

  async function getTodos() {
    var res = await doGet("/todos")
    setTodos(res.data.filter((item, index) => index >= 0 && index < 10))
    setData(res.data)
  }
  async function getUsers() {
    await doGet("/users").then((res) => setUsers(res.data))
  }
  useEffect(() => {
    getTodos()
    getUsers()
  }, [])

  useEffect(() => {
     var res = filter(currentUser, page,check)
     setTodos(res)
  }, [page])

  const filter = (UserID,page, check) => {
    return data.filter(item =>
      (item.userId == UserID || !UserID) &&
      (item.completed == check || ! isFiltering)
    ).filter((item, index) => index >= (page - 1) * 10 && index > page-10)
  }
  var OnchangeTodosSelect = (event) => {
    var UserID = event.target.value
    var res = filter(UserID)
    setTodos(res)
    setCurrentUser(UserID)
  }
  var OnNext = () => {
    setPage(prev => prev + 1)
  }
  var OnPrev = () => {
    setPage(prev => prev - 1)
    if (page <= 1) {
      setPage(1)
    }
  }
  var HandleChecked = (event) => {
    var checked = event.target.checked
    var arr = data.filter((item, index) => item.completed === checked)
    setTodos(arr)
    setCheck(checked)
  }
  var Reset = () => {
    setTodos(data)
    setCurrentUser("")
    setCheck(false)
    setPage(1)
    setIsFiltering(false)
  }

  return (
    <div>
      <div className="row my-3">
        <div className="col-md-12">
          <h1 className='text-center'>Todos</h1>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-1">
          <button onClick={Reset} className='btn btn-danger'>reset</button>
        </div>
        <div className="col-md-3">
          <select className='form-control' value={currentUser} onChange={OnchangeTodosSelect}>
            <option value={""}>All</option>
            {
              Users.map((item, index) =>
                <option key={index} value={item.id} id={item.id} >{item.name}</option>)
            }
          </select>
        </div>
        <div className="col-md-3">
          <div className="d-flex align-items-center">
            <h3>Completed: </h3>
            <input type="checkbox" className='mx-3' checked={check}
              onChange={HandleChecked} style={{ transform: "scale(2" }} />
          </div>
        </div>
      </div>
      {
        Todos.map((item, index) => <Todo item={item} key={index} />)
      }
      <div className="row">
        <div className="d-flex align-items-center">
          <button onClick={OnPrev} className='btn btn-dark'>{"<<"} prev</button>
          <h1 className='m-2'>
            {page}
          </h1>
          <button onClick={OnNext} className='btn btn-dark'>next {">>"}</button>
        </div>
      </div>
    </div>
  )
}

export default Todos