import React, { useState } from 'react'
import { Button, Nav, NavLink } from 'react-bootstrap';
import './Login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { authenticateLogin, getInfo } from '../ApiRouter/ApiRouter'
import swal from 'sweetalert';

const Login1 = () => {
    const history = useNavigate();
    // const { user, setUser } = useContext(UserContext);
    // const location = useLocation();
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    // const [apidata, setApiData] = useState([])



    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [shownPassword, setShownPassword] = useState(false);
    const toggleUserPasswordVisiblity = () => {
        setShownPassword(shownPassword ? false : true);
    };


    const errors = {
        uname: "invalid username",
        pass: "invalid password",
    };

    // const url = 'http://192.168.10.104:9999/api/login/';
    const Authlogin = async () => {
        let response = await authenticateLogin({
            "username": username,
            "password": password
        });
        // console.log(response.data.token);
        // localStorage.setItem("token", response.data.token)
        console.log("gssf", response)

        localStorage.setItem("token", response.data.token)
        console.log(response.data.token);
        if (response.data.message === "success") {
            let userdata = await getInfo()

            localStorage.setItem("userdata", JSON.stringify(userdata.data))
            history("dashboard", { replace: true })
            console.log(JSON.stringify(userdata.data))
            // history.push('/')
            // alert("login successfull")
        }


        // if (response.data.message === "success") {
        //     let userdata = await getInfo()
        //         // localStorage.setItem("token", response.data.token)
        //         localStorage.setItem("token", response.data.token)
        //         console.log('token', response.data.token)
        //         // console.log('token', response.data.token)
        //         // swal("Success", response.data.message, "success", {
        //         //     buttons: false,
        //         //     timer: 2000,
        //         // })
        //         .then((value) => {
        //             localStorage.setItem("userdata", JSON.stringify(userdata.data))

        //             //   localStorage.setItem('user', JSON.stringify(response['user']));
        //         });
        //         history("dashboard", { replace: true })
        // } else {
        //     // swal("False", response.data.message, "error");
        //     console.log("check you username and password")
        // }


        // if (response.data.message === "success") {
        //     let userdata = await getInfo()
        //     // localStorage.setItem("token", response.data.token)
        //     swal("Success", response.message, "success", {
        //         buttons: false,
        //         timer: 2000,
        //     })
        //         .then((value) => {
        //             localStorage.setItem('token', response.data.token);
        //             localStorage.setItem('userdata', JSON.stringify([userdata.data]));
        //             window.location.href = "/dashboard";
        //         })
        // } else {
        //     swal("Failed", response.message, "error");
        // }


    }



    const handleSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();

        Authlogin();


    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );



    // const renderForm = (
    //     <div>
    //         {/* <MainPage /> */}

    //     </div>
    // );
    return (
        <div className="form">
          
            <form onSubmit={handleSubmit} noValidate className="form-group">
                <h4 className='form-heading'>Sign In</h4>
                <div className="input-group-content">
                    <input type="text"
                        name="uname"
                        placeholder="username"
                        className='form-control'
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete='on'
                    />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-group-content">
                    <input
                        type={shownPassword ? "text" : "password"}
                        name="pass"
                        placeholder="password"
                        className='form-control'
                        required
                        onChange={(e) => setPassword(e.target.value)} />
                    {renderErrorMessage("pass")}
                    <i onClick={toggleUserPasswordVisiblity} className="admin-pass-hide-show"> {shownPassword ? <BsFillEyeSlashFill className='eye-icon' /> : <BsFillEyeFill className='eye-icon' />}</i>{" "}
                </div>
                {/* <div className='forgot'>
                    <NavLink className="forgot-password" to="/" >
                        Forgot Password?
                    </NavLink>
                </div> */}
                <div className="button-container d-grid pt-4">

                    <Button size="lg" type="submit"  >
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
    );
}

export default Login1
