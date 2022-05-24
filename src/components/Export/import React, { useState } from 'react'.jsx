import React, { useState } from 'react'
// import { settlementfile, getInfo, authenticateLogin } from '../ApiRouter/ApiRouter';
import axios from 'axios';

function Upload() {
    const [file, setFile] = useState(null);
    const [fileselect, setFileSelect] = useState();
    const changeHandler = (event) => {
        let file = event.target.files[0]
        setFile({ file });
        console.log("changefile", file)
        // settoken(true)

    };
    let tok = localStorage.getItem("token");
    // console.log("token",tok)

    const handleSubmission = async (file) => {
        try {
            file.preventDefault();
            const data = new FormData()
            data.append('files', file)
            data.append("create_thumbnail", true)
            console.log(file)
            const tok = localStorage.getItem("token")
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                    "Authorization": "Token " + `${tok}`,
                }
            };

            const API = "http://192.168.10.104:9999/api/settlementfile/";
            const url = `${API}`;
            const response = await axios(url, data, config);
            console.log("response", response)



        }
        catch (error) {
            console.error(error);
        }




        // file.preventDefault();
        // let data = new FormData()
        // data.append('files', file)
        // data.append("create_thumbnail", true)
        // console.log(file)
        // const tok = localStorage.getItem("token")
        // try {
        //     let response = await axios({
        //         method: "POST",
        //         dataType: "json",
        //         url: "http://192.168.10.104:9999/api/settlementfile/",
        //         data: data,
        //         contentType: "application/json",
        //         headers: {
        //             "Authorization": "Token " + `${tok}`,
        //             "Content-Type": "multipart/form-data"
        //         },
        //         success: function (data, textStatus) {
        //             alert("Data: " + data);
        //         }
        //     })
        //     console.log("response", response)
        //     console.log("tok", tok)
        // } catch (error) {
        //     console.log('error', error)
        //     // alert("error" );
        // }



        // const onFileChangeHandler = (e) => {
        //     e.preventDefault();
        //     const fileData = e.target.files[0];
        //     setFileSelect({
        //         fileselect: fileData
        //     });
        //     const formData = new FormData();
        //     formData.append('file', file);
        //     const USER_UPLOAD_FILE_URL = 'http://192.168.10.104:9999/api/settlementfile/';
        //     fetch(USER_UPLOAD_FILE_URL, {
        //         method: 'POST',
        //         headers: {
        //             "Authorization": localStorage.getItem("token")
        //         },
        //         body: formData
        //     }).then(res => {
        //         if(res.ok) {
        //             console.log(res.data);
        //             alert("File uploaded successfully.")
        //         }
        //     });

        // };


        // const handleSubmission =(event)=> {
        //     event.preventDefault();
        //     // const payload = {
        //     //     // "username": this.state.username,
        //     //     "location": this.capital_letter(this.state.location),
        //     //     "bio": this.state.bio
        //     // };
        //     const formData = new FormData();
        //         formData.append('file', file);
        //         console.log(file)
        //     fetch('http://192.168.10.104:9999/api/settlementfile/', {
        //         method: 'POST',
        //         headers: {
        //             'Authorization': "Token " + localStorage.getItem("token"),
        //             // "Content-Type":'application/vnd.ms-excel',
        //             "content-type": "multipart/form-data",
        //         },
        //         body: file
        //     })
        //         .then(response => response.json())
        //         .then((data) => {
        //             console.log(data);
        //         });
        // }
        return (
            <div style={{ paddingBottom: '3rem' }}>
                {/* <form onSubmit={handleSubmission}> */}
                <input type="file" name="file" onChange={changeHandler} />
                <br />
                <button type="submit" onClick={handleSubmission}>Submit</button>
                {/* </form> */}

            </div>
        )
    }
}
export default Upload



try {
    const FormData = new FormData()
    FormData.append('files', file)
    FormData.append("create_thumbnail", true)
    console.log('upload file', file)
    let tok = localStorage.getItem("token")
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            "Authorization": "Token " + `${tok}`,
        }
    };

    let API = 'http://192.168.10.104:9999/api/settlementfile/';
    let url = `${API}`;
    let response = await axios.post(url, FormData, config);
    console.log("response", response)
}
catch (error) {
    console.error(error);
}