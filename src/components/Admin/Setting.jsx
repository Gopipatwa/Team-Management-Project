import React, { useState, useEffect } from 'react';
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

    // const [data, setData] = React.useState([])

    const [showUserRole, setShowUserRole] = React.useState(false)
    const onClickUserRole = () => setShowUserRole(!showUserRole)


    // const columns = [

    //     { Header: "userid", accessor: "userid", Footer: "userid" },
    //     { Header: "bfcme", accessor: "bfcme", Footer: "bfcme" },
    //     { Header: "bfcme_dgcx_inr", accessor: "bfcme_dgcx_inr", Footer: "bfcme_dgcx_inr" },
    //     { Header: "bfcme_dgcx_mcx_inr", accessor: "bfcme_dgcx_mcx_inr", Footer: "bfcme_dgcx_mcx_inr" },
    //     { Header: "bfcme_dgcx_usd", accessor: "bfcme_dgcx_usd", Footer: "bfcme_dgcx_usd" },
    //     { Header: "bfdgcx", accessor: "bfdgcx", Footer: "bfdgcx" },
    //     { Header: "bfmcxf", accessor: "bfmcxf", Footer: "bfmcxf" },
    //     { Header: "currencyrate", accessor: "currencyrate", Footer: "currencyrate" },
    //     { Header: "groupname", accessor: "groupname", Footer: "groupname" },
    //     { Header: "live_cme_dgcx_inr", accessor: "live_cme_dgcx_inr", Footer: "live_cme_dgcx_inr" },
    //     { Header: "live_cme_dgcx_mcx_inr", accessor: "live_cme_dgcx_mcx_inr", Footer: "live_cme_dgcx_mcx_inr" },
    //     { Header: "livecme", accessor: "livecme", Footer: "livecme" },
    //     { Header: "livecme_dgcx_usd", accessor: "livecme_dgcx_usd", Footer: "livecme_dgcx_usd" },
    //     { Header: "livedgcx", accessor: "livedgcx", Footer: "livedgcx" },
    //     { Header: "livemcx", accessor: "livemcx", Footer: "livemcx" },
    //     { Header: "srno", accessor: "srno", Footer: "srno" },
    //     { Header: "total_cme_dgcx_inr", accessor: "total_cme_dgcx_inr", Footer: "total_cme_dgcx_inr" },
    //     { Header: "total_cme_dgcx_mcx_inr", accessor: "total_cme_dgcx_mcx_inr", Footer: "total_cme_dgcx_mcx_inr" },
    //     { Header: "totalcme", accessor: "totalcme", Footer: "totalcme" },
    //     { Header: "totalcme_dgcx_usd", accessor: "totalcme_dgcx_usd", Footer: "totalcme_dgcx_usd" },
    //     { Header: "totaldgcx", accessor: "totaldgcx", Footer: "totaldgcx" },
    //     { Header: "totalmcx", accessor: "totalmcx", Footer: "totalmcx" },
    // ]
    // React.useEffect(() => {
    //     if ((props.data)) {
    //         console.log('data',props.data);
    //         setData(props.data)
    //     }
    // }, [props.data])


    // console.log('data', props.data);
    // let items = props.data;

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
                        <h4>General Settings</h4>
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
                                {/* {items.map(item =>
                                    <h4 key={item.}>{item.name}</h4>
                                )} */}
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
                            <div className="form-control form-control-alternative">

                                <div className="dropdown-btn" >Select UserId
                                    <i className="fa fa-caret-down"></i>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            {showUserId &&
                                <div className="checkboxes-group">
                                    <label for="C001"><input type="checkbox" id="C001" className="userid-checkbox" value="C001" />C001</label>
                                    <label for="C0010"><input type="checkbox" id="C0010" className="userid-checkbox" value="C0010" />C0010</label>
                                    <label for="C0011"><input type="checkbox" id="C0011" className="userid-checkbox" value="C0011" />C0011</label>
                                    <label for="C0012"><input type="checkbox" id="C0012" className="userid-checkbox" value="C0012" />C0012</label>
                                    <label for="C0013"><input type="checkbox" id="C0013" className="userid-checkbox" value="C0013" />C0013</label>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <label>Select Role</label>
                        <div className="select-userid" onClick={onClickUserRole} >
                            {/* <button onClick={onClick}>toggle: {showResults ? 'showResults' : 'hide'}</button> */}
                            {/* {showResults && <div>Hi there</div>} */}
                            <div className="form-control form-control-alternative">

                                <div className="dropdown-btn">Select Role
                                    <i className="fa fa-caret-down"></i>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown">
                            {showUserRole &&
                                <div className="checkboxes-group">
                                    <label for="Company"><input type="checkbox" id="Company" className="userid-checkbox" value="Company" />Company</label>
                                    <label for="Client"><input type="checkbox" id="Client" className="userid-checkbox" value="Client" />Client</label>
                                    <label for="Admin"><input type="checkbox" id="Admin" className="userid-checkbox" value="Admin" />Admin</label>
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


