import React, { useState } from 'react'
import { Button, Nav, NavLink } from 'react-bootstrap';
import './Login.scss';
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Navigate, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';


const GetDashboad = () => {
    const history = useNavigate();
    // const { user, setUser } = useContext(UserContext);
    // const location = useLocation();
    const [username, setUsername] = useState()
    const [token, setToken] = useState()
    const [apidata, setApiData] = useState([])



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

    const url = 'http://192.168.10.104:9999/api/dashboard/';
    function downloadFile(url) {
        console.log(username, password);
        axios.get(url, {
            "token": token,
            "password": password
        })
            .then(response => {
                console.log("data3", response.data)
                setApiData(response.data);
                console.log(response.data)
                history("/dashboard")


            })
            .catch(err => {
                console.log(err);

            })
    }
    const handleSubmit1 = (event) => {
        event.stopPropagation();
        event.preventDefault();
        downloadFile(url);

    };


    return (

        <>

            <h1 onClick={handleSubmit1}>xyz</h1>
        </>
    );
}

export default GetDashboad
