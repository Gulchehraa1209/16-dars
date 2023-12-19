import React from 'react'
import { doGet } from './Service'
import { useState } from 'react'
import { useEffect } from 'react'
import {Modal, ModalFooter, ModalBody, ModalHeader,Button} from "reactstrap"
import {AvForm, AvField} from "availity-reactstrap-validation"

const Posts = ({ history }) => {

  const [data, setData] = useState([])
  const [Posts, setPosts] = useState([])
  const [Users, setUsers] = useState([])
  const [modalVizible, setModalVizible] = useState(false)

   async function getPosts() {
    var res = await doGet("/posts")
    setPosts(res.data)
    setData(res.data)
  }
  async function getUsers() {
    await doGet("/users").then((res) => setUsers(res.data))
  }
  useEffect(() => {
    getPosts()
    getUsers()
  }, [])

  var CardStyle = {
    height: "300px",
  }
  var OpenOnePost = (id) => {
    history.push("/posts/" + id)
  }

  const filter = (UserID) => {
    return data.filter(item => item.userId == parseInt(UserID) || UserID == "")
  }
  var OnchangeUserSelect = (event) => {
    var UserID = event.target.value
    var res = filter(UserID)
    setPosts(res)
  }
  var OpenModal=()=>{
      setModalVizible(prev=>!prev)
  }
  var SubmitForm=(event,values)=>{
      Posts.unshift(values)
      setModalVizible(false)
  }

  return (
    <div>
      <div className="row my-2">
        <h1 className="text-center">Posts</h1>
      </div>
      <div className="row my-3">
        <div className="col-md-3">
          <select className='form-control' onChange={OnchangeUserSelect}>
            <option value={""}>All</option>
            {
              Users.map((item, index) => <option key={index} value={item.id}>{item.name}</option>)
            }
          </select>
        </div>
        <div className="col-md-9">
          <button onClick={OpenModal} className='btn btn-success float-end'>+Add</button>
        </div>
      </div>
      <div className='row'>
        {
          Posts.map((item, index) =>
            <div className='col-md-3' key={index}>
              <div className="card cardStyle" style={CardStyle}
                onClick={() => OpenOnePost(item.id)}
              >
                <div className="card-header bg-dark text-light">
                  {index+1}. {item.title}
                </div>
                <div className="card-body">
                  {item.body}
                </div>
              </div>
            </div>)
        }
      </div>

      <Modal isOpen={modalVizible} toggle={OpenModal}>
        <ModalHeader>Add Post</ModalHeader>
        <ModalBody>
            <AvForm id="form" onValidSubmit={SubmitForm}>
              <AvField name="title" label="Title" required/>
              <AvField name="body" label="Body" required/>
            </AvForm>
        </ModalBody>
        <ModalFooter>
            <Button form='form' className='btn btn-success'>save</Button>
            <Button onClick={OpenModal} className='btn btn-danger'>cansel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Posts