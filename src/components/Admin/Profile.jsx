import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row, InputGroup } from 'react-bootstrap';
import './Admin.scss';
function Profile(props) {

    const [clientId, setClientId] = useState()
    const [accessUser, setAccessUser] = useState()
    const [username, setUsername] = useState()
    const [emailAddress, setEmailAddress] = useState()
    const [name, setName] = useState()
    const [telegramUsername, setTelegramUsername] = useState()
    const [contactNumber, setContactNumber] = useState()


    const [validate, setValidate] = useState(false);

    const handleOnUpdate = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidate(true);
    };


    const handleSubmit = event => {
        event.preventDefault();
        alert('You have submitted the form.')
    }

    return (
        <div >
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onSubmit={handleOnUpdate}
                noValidate
                className='user-section'
            // validate={validate}
            >
                {/* <Modal.Header closeButton> */}
                <Modal.Header className='main-profile-header'>
                    <Modal.Title id="contained-modal-title-vcenter" className='profile-header'>
                        <div className="header">
                            <h1>Profile
                                {/* - <span className='active'>Active</span> */}
                            </h1>
                        </div>
                        <div className="profile-btn">
                            <Button variant="danger" className='btn-sm' onClick={props.onHide}>Close</Button>
                            {/* <button onClick={props.onHide}>Close</button> */}
                            <Button variant="primary" className='btn-sm' type="submit" onChange={handleSubmit}>Update</Button>
                            {/* <button type="submit" >Update</button> */}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    {/* <Form className='profile-form' noValidate validated={validated} onSubmit={handleSubmit}> */}
                    <Form className='profile-form'>

                        <Row className="">
                            <Form.Group as={Col} md="6" className='form-group'>
                                <Form.Label>Client id</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Client id"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" className='form-group'>
                                <Form.Label>Access User</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Access User"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" className='form-group'>
                                <Form.Label>Username</Form.Label>
                                <InputGroup hasValidation>
                                    {/* <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text> */}
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        aria-describedby="inputGroupPrepend"
                                        required
                                    />
                                    {/* <Form.Control.Feedback type="invalid">
                                        Please choose a username.
                                    </Form.Control.Feedback> */}
                                </InputGroup>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="" className='form-group'>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Email address"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" className='form-group'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name"
                                    defaultValue=""
                                />
                                {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" className='form-group'>
                                <Form.Label>Telegram Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Telegram Username"
                                    defaultValue=""
                                    required />
                                {/* <Form.Control.Feedback type="invalid">
                                    Please provide a valid Telegram Username.
                                </Form.Control.Feedback> */}
                            </Form.Group>
                            <Form.Group as={Col} md="6" className='form-group'>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Contact Number"
                                    defaultValue=""
                                    required />

                            </Form.Group>

                        </Row>

                    </Form>
                </Modal.Body>

            </Modal>

        </div>
    )
}

export default Profile





