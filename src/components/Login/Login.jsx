import React, { useState } from 'react'
import { Button, Nav, NavLink } from 'react-bootstrap';
import './Login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Dashboard from '../Dashboard/Dashboard';


const Login1 = () => {
    const history = useNavigate();


    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [apidata, setApiData] = useState([])



    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);

    const [shownPassword, setShownPassword] = useState(false);
    const toggleUserPasswordVisiblity = () => {
        setShownPassword(shownPassword ? false : true);
    };
    const errors = {
        uname: "invalid username",
        pass: "invalid password",
    };

    const url = 'http://192.168.10.104:9999/api/login/';
    function downloadFile(url) {
        console.log(username, password);
        axios.post(url, {
            "username": username,
            "password": password
        })
            .then(response => {
                console.log("data3", response.data)
                setApiData(response.data.data);
                console.log(response.data.data)
            })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        downloadFile(url)
        history("/dashboard")

    }

    // const renderForm = (
    //     <div>
    //         {/* <MainPage /> */}

    //     </div>
    // );
    return (
        <div className="login">
            <div className="login-form">
                <div className="form">
                    <form onSubmit={handleSubmit} className="form-group">
                        <h4 className='form-heading'>Sign In</h4>
                        <div className="input-group-content">
                            <input type="text"
                                name="uname"
                                placeholder="username"
                                className='form-control'
                                onChange={(e) => setUsername(e.target.value)}
                                required />
                            {/* {renderErrorMessage("uname")} */}
                        </div>
                        <div className="input-group-content">
                            <input
                                type={shownPassword ? "text" : "password"}
                                name="pass"
                                placeholder="password"
                                className='form-control'
                                required
                                onChange={(e) => setPassword(e.target.value)} />
                            {/* {renderErrorMessage("pass")} */}
                            <i onClick={toggleUserPasswordVisiblity} className="admin-pass-hide-show"> {shownPassword ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
                        </div>
                        <div>
                            <NavLink className="forgot-password" to="/" >
                                Forgot Password?
                            </NavLink>
                        </div>
                        <div className="button-container d-grid gap-2">

                            <Button variant="primary" size="lg" type="submit">
                                Sign In
                            </Button>

                        </div>
                    </form>
                    {/* <div>
                        <h4 className='sign-up'>Don't have an account?
                            <Nav.Link className="sign-up-here" href="/dashboard" >
                                Sign up here
                            </Nav.Link>
                        </h4>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default Login1
