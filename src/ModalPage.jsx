import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {AvField, AvForm} from "availity-reactstrap-validation"

const ModalPage = ({modalVisible, OpenModal, SubmitForm, EditmodalVisible,EditUser,EditSubmitForm  }) => {
    return (
        <div>
            {/* Modal For User */}
            <Modal isOpen={modalVisible} toggle={OpenModal}>
                <ModalHeader>Add User</ModalHeader>
                <ModalBody>
                    <AvForm id="form" onValidSubmit={SubmitForm}>
                        <AvField name="firstName" label="FirstName" required/>
                        <AvField name="lastName" label="LastName" required/>
                        <AvField name="userName" label="UserName" required/>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <Button form='form' color='success'>save</Button>
                    <Button color='danger' onClick={OpenModal}>cansel</Button>
                </ModalFooter>
            </Modal>

            {/* Modal For Edit User */}
            <Modal isOpen={EditmodalVisible} toggle={EditUser}>
                <ModalHeader>Edit User</ModalHeader>
                <ModalBody>
                    <AvForm id="form2" onValidSubmit={EditSubmitForm}>
                        <AvField name="firstName" label="FirstName" required/>
                        <AvField name="lastName" label="LastName" required/>
                        <AvField name="userName" label="UserName" required/>
                    </AvForm>
                </ModalBody>
                <ModalFooter>
                    <Button form='form2' color='warning'>edit</Button>
                    <Button color='danger' onClick={EditUser}>cansel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default ModalPage