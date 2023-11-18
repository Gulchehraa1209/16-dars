import AComponent from "./components/AComponent"
import AFirstChild from "./components/AFirstChild"
import BComponent from "./components/BComponent"
import { useState } from "react"

  const App = () => {
    
    var [count, setCount] = useState(0)
    const [name, setName] =useState("John")
    const [users, setUsers] = useState(
      [
        {id:1, firstName:'Gulchehra', LastName:"Sadullayeva", age:32},
        {id:2, firstName:'Helen', LastName:"Smith", age:35},
        {id:3, firstName:'Ann', LastName:"Hathway", age:38},
      ]
    )
    const [user,setUser] = useState({name:"AAA", lastname:"BBB", age:23})
    var ChangeName=()=>{
      var a = {...user, name:"DDD"}
      setUser(a)
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-3 my-5">
          <div className="card card-body">
            <h1 className="text-center">Parent Component</h1>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card card-body">
            <AComponent/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-body">
            <BComponent/>
          </div>
        </div>
      </div>

      <h1>{count}</h1>
      <button onClick={()=>setCount(prev=> prev+1)}>changeCount</button>
      <h1>{name}</h1>
      <button onClick={()=>setName("Gulchehra")}>changeName</button>
      <hr />
      <table className="table table-dark">
        <thead>
          <tr>
            <th>NO</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(item=><tr>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.LastName}</td>
              <td>{item.age}</td>
            </tr>)
          }
        </tbody>
      </table>
      <hr />``
      <h1>{user.name + " " + user.lastname}</h1>
      <button onClick={ChangeName}>changeName</button>
      </div>
      
  )
}
export default App