import React, { useState } from 'react';
import { Dropdown, Modal, NavLink } from "react-bootstrap";
import './Admin.scss';
import { RiCloseFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";




function Setting(props) {
    // const [isChecked, setIsChecked] = useState(false);

    // const handleOnChange = () => {
    //     setIsChecked(!isChecked);
    // };


    const [showUserId, setShowUserId] = React.useState(false)
    const onClickUserId = () => setShowUserId(!showUserId)


    const [showUserRole, setShowUserRole] = React.useState(false)
    const onClickUserRole = () => setShowUserRole(!showUserRole)



    return (
        <Modal className='user-setting'
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='general-setting'>
                <Modal.Title id="contained-modal-title-vcenter">
                    <div className="setting-header ">
                        <h5>General Settings</h5>
                    </div>
                </Modal.Title>
                <RiCloseFill onClick={props.onHide} className="close-btn" />
            </Modal.Header>
            <Modal.Body>
                <div className="row form-change-password">
                    <div className="col-md-3 ">
                        <div className="">
                            <label>Select Username</label>
                            <select name="" id="" className="form-control form-select" aria-label="Default select example">
                                {/* {listItems} */}

                                <option value="Success">admin</option>
                                <option value="Error">vishal</option>
                                <option value="Success">mcxrms</option>
                                <option value="Error">rachit</option>
                                <option value="Success">@rachit</option>
                                <option value="Error">C001</option>
                                <option value="Success">C002</option>
                                <option value="Error">C003</option>
                                <option value="Success">D21</option>
                                <option value="Error">D22</option>
                                <option value="Success">MOCK</option>
                                <option value="Error">RISE4</option>
                                <option value="Success">RISE5</option>
                                <option value="Error">prishita</option>
                                <option value="Success">Cosmic</option>
                                <option value="Error">RM</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="">
                            <label>Allowed UserId</label>
                            <input
                                type="text"
                                className="form-control form-control-alternative"
                                autoComplete="on"
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label>Select UserId</label>
                        <div className="select-userid" onClick={onClickUserId} >
                            {/* <button onClick={onClick}>toggle: {showResults ? 'showResults' : 'hide'}</button> */}
                            {/* {showResults && <div>Hi there</div>} */}
                            <div class="form-control form-control-alternative">

                                <div class="dropdown-btn" >Select UserId
                                    <i class="fa fa-caret-down"></i>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            {showUserId &&
                                <div className="checkboxes-group">
                                    <label for="C001"><input type="checkbox" id="C001" class="userid-checkbox" value="C001" />C001</label>
                                    <label for="C0010"><input type="checkbox" id="C0010" class="userid-checkbox" value="C0010" />C0010</label>
                                    <label for="C0011"><input type="checkbox" id="C0011" class="userid-checkbox" value="C0011" />C0011</label>
                                    <label for="C0012"><input type="checkbox" id="C0012" class="userid-checkbox" value="C0012" />C0012</label>
                                    <label for="C0013"><input type="checkbox" id="C0013" class="userid-checkbox" value="C0013" />C0013</label>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label>Select Role</label>
                        <div className="select-userid" onClick={onClickUserRole} >
                            {/* <button onClick={onClick}>toggle: {showResults ? 'showResults' : 'hide'}</button> */}
                            {/* {showResults && <div>Hi there</div>} */}
                            <div class="form-control form-control-alternative">

                                <div class="dropdown-btn">Select Role
                                    <i class="fa fa-caret-down"></i>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            {showUserRole &&
                                <div className="checkboxes-group">
                                    <label for="Company"><input type="checkbox" id="Company" class="userid-checkbox" value="Company" />Company</label>
                                    <label for="Client"><input type="checkbox" id="Client" class="userid-checkbox" value="Client" />Client</label>
                                    <label for="Admin"><input type="checkbox" id="Admin" class="userid-checkbox" value="Admin" />Admin</label>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <NavLink href="#"><FiEdit /> Update</NavLink>
                {/* <Button>Update</Button> */}
            </Modal.Footer>
        </Modal >
    );
}
export default Setting;


