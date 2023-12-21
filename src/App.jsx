import { useState } from 'react'
import { Button} from 'reactstrap'
import ModalPage from './ModalPage'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const App = () => {

    const [users, setUsers] = useState([
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            userName: "Johon",
            count: 0,
            active: false
        },
        {
            id: 2,
            firstName: "Bruce",
            lastName: "Lee",
            userName: "Bobur",
            count: 0,
            active: false
        },
        {
            id: 3,
            firstName: "Michael",
            lastName: "Jeckovich",
            userName: "Mike",
            count: 0,
            active: false
        },
        {
            id: 4,
            firstName: "Marlyn",
            lastName: "Monro",
            userName: "Mary",
            count: 0,
            active: false
        },
    ])
    const [modalVisible, setModalvisible] = useState(false)
    const [EditmodalVisible, setEditmodalVisible] = useState(false)
    const [selectUsers, setSelectUsers] = useState("")

    var CheckboxStyle = {
        transform: 'scale(2)'
    }
    var OpenModal = () => {
        setModalvisible(prev => !prev)
    }
    var SubmitForm = (event, values) => {
        var obj = {
            id: users.length + 1,
            firstName: values.firstName,
            lastName: values.lastName,
            userName: values.userName,
            count: 0,
            active: false
        }
        users.push(obj)
        setUsers([...users])
        setModalvisible(false)
        toast.success("User added successfully")
    }
    var DeleteUser = (index) => {
        users.splice(index, 1)
        setUsers([...users])
    }
    var EditUser = (item) => {
        setSelectUsers(item)
        setEditmodalVisible(prev => !prev)
    }
    var EditSubmitForm=(event, values)=>{
        var firstName = values.firstName
        var lastName = values.lastName
        var userName= values.userName
        users.map((item,index)=>{
            if(item.id===selectUsers.id){
                item.firstName=firstName
                item.lastName=lastName
                item.userName=userName
            }
        })
        setUsers([...users])
        setEditmodalVisible(false)
        toast.warning("User edited successfully")
    }   
    return (
        <div className='container'>
            <ToastContainer/>
            <div className="row my-4">
                <ModalPage
                    modalVisible={modalVisible}
                    OpenModal={OpenModal}
                    SubmitForm={SubmitForm}
                    EditmodalVisible={EditmodalVisible} 
                    EditUser={EditUser}
                    EditSubmitForm={EditSubmitForm}
                />
                <div className="col-3">
                    <input type="search" placeholder='Search' className='form-control' />
                </div>
                <div className="col-3">
                    <input id='par' type="checkbox" style={CheckboxStyle} />
                    <label htmlFor="par" className='mx-3'>
                        <h4>Active</h4>
                    </label>
                </div>
                <div className="col-6">
                    <Button onClick={OpenModal} color='dark float-end px-4'>Add</Button>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12">
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>UserName</th>
                                <th>Count</th>
                                <th>Active</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item, index) =>
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.userName}</td>
                                        <td>
                                            <Button color='outline-light btn-sm mx-1'>+</Button>
                                            {item.count}
                                            <Button color='outline-light btn-sm mx-1'>-</Button>
                                        </td>
                                        <td>
                                            <input type="checkbox" checked={item.active} style={CheckboxStyle} />
                                        </td>
                                        <td>
                                            <Button onClick={() => EditUser(item)} color='warning btn-sm'>edit</Button>
                                            <Button onClick={() => DeleteUser(index)} color='danger mx-2 btn-sm'>delete</Button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default App