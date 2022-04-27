import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import './Admin.scss';
import { RiCloseFill } from "react-icons/ri";

import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
// const eye = <BsFillEyeFill />;

function ChangePwd(props) {

    const [currentPassword, setCurrentPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [newPasswordRepeated, setNewPasswordRepeated] = useState()


    const [currpasswordShown, setCurrPasswordShown] = useState(false);
    const toggleCurrPasswordVisiblity = () => {
        setCurrPasswordShown(currpasswordShown ? false : true);
    };

    const [newpasswordShown, setNewPasswordShown] = useState(false);
    const toggleNewPasswordVisiblity = () => {
        setNewPasswordShown(newpasswordShown ? false : true);
    };


    const [newreppasswordShown, setNewRepPasswordShown] = useState(false);
    const toggleNewRepPasswordVisiblity = () => {
        setNewRepPasswordShown(newreppasswordShown ? false : true);
    };

    return (
        <Modal className='user'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='change-pwd'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="pass-header ">
                        <h2>Change Password</h2>
                    </div>
                </Modal.Title>
                <RiCloseFill onClick={props.onHide} className="close-btn" />
            </Modal.Header>
            <Modal.Body>
                <form className="form-change-password">
                    <label>Current password</label>
                    <div style={{ position: 'relative', display: 'flex', marginBottom: '14px' }}>
                        <input
                            placeholder="Enter Current Password"
                            name="currentPassword"
                            type={currpasswordShown ? "text" : "password"}
                            className="form-control"
                            autoComplete="on"
                        />
                        <label className='input-group-addon'>
                            <input type="checkbox" style={{ display: 'none' }} />
                            <i onClick={toggleCurrPasswordVisiblity} className="pass-hide-show"> {currpasswordShown ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
                        </label>

                    </div>
                    <label>New password</label>
                    <div style={{ position: 'relative', display: 'flex', marginBottom: '14px' }}>
                        <input
                            placeholder="Enter New Password"
                            name="NewPassword"
                            type={newpasswordShown ? "text" : "password"}
                            className="form-control"
                            autocomplete="on"
                        />
                        <label className='input-group-addon'>
                            <input type="checkbox" style={{ display: 'none' }} />
                            <i onClick={toggleNewPasswordVisiblity} className="pass-hide-show"> {newpasswordShown ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
                        </label>
                    </div>
                    <label>Confirm password</label>
                    <div style={{ position: 'relative', display: 'flex', marginBottom: '14px' }}>
                        <input
                            placeholder="Enter Confirm Password"
                            name="NewPasswordRepeated"
                            type={newreppasswordShown ? "text" : "password"}
                            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            className="form-control"
                            autocomplete="on"
                        />
                        <label className='input-group-addon'>
                            <input type="checkbox" style={{ display: 'none' }} />
                            {/* <i onClick={toggleNewRepPasswordVisiblity} ><BsFillEyeFill style={{ transform: 'scale(1.4)', cursor:'pointer'  }} /></i>{" "} */}
                            <i onClick={toggleNewRepPasswordVisiblity} className="pass-hide-show"> {newreppasswordShown ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
                        </label>
                    </div>
                </form>
            </Modal.Body>

            <Modal.Footer>
                <Button>Update</Button>
            </Modal.Footer>
        </Modal>
    );
}
export default ChangePwd;


