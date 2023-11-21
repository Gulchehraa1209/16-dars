import React from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader,Button} from "reactstrap"
import {AvForm, AvField} from "availity-reactstrap-validation"

const ModalComponent = ({isOpen, toggle, AddUsers}) => {


    var SubmitForm=(event, values)=>{
        AddUsers(values)
    }
  return (
    <div>
        <Modal isOpen={isOpen} toggle={toggle}>
            <ModalHeader>Add User</ModalHeader>
            <ModalBody>
                    <AvForm onValidSubmit={SubmitForm} id="aaa">
                        <AvField name="firstName" label="FirstName" required/>
                        <AvField name="lastName" label="LastName" required/>
                        <AvField name="phone" label="Phone" required/>
                    </AvForm>
            </ModalBody>
            <ModalFooter>
                <Button form='aaa' color='success'>save</Button>
                <Button onClick={toggle} color='danger'> cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
  )
}

export default ModalComponent