// import React, { useState } from "react";
// import axios from "axios";
// import { settlementFile } from '../ApiRouter/ApiRouter'

// const FileUploadServer = () => {
//     const [file, setFile] = useState(null);

//     function handleChange(event) {
//         setFile(event.target.files[0])
//     }

//     function handleSubmit(event) {
//         event.preventDefault()

//         const formData = new FormData();
//         formData.append('file', file);
//         formData.append('fileName', file);
//         const config = {
//             headers: {
//                 'content-type': 'multipart/form-data',
//             },
//         };
//         axios.post(settlementFile, formData, config).then((response) => {
//             console.log(response.data);
//         });

//     }

//     return (
//         <div className="App">
//             <form onSubmit={handleSubmit}>
//                 <h1>React File Upload</h1>
//                 <input type="file" onChange={handleChange} />
//                 <button type="submit">Upload</button>
//             </form>
//         </div>
//     );
// }

// export default FileUploadServer;



// import React, { useState } from 'react';
// import { settlementFile, getInfo, authenticateLogin } from '../ApiRouter/ApiRouter'
// import axios, { post } from 'axios'
// function FileUploadServer() {
//     const [file, setFile] = useState(false);
//     const [token, setToken] = useState();

//     const changeHandler = (event) => {
//         setFile(event.target.files[0]);
//         console.log(event.target.files[0])
//         // settoken(true)


//     };
//     // const fileUpload = async () => {




//     //     // console.log("lkgjkfdhg", response);
//     //     // if('file' in response){
//     //     //     let userdata = await getInfo()
//     //     //     localStorage.setItem("userdata", JSON.stringify(userdata.data))
//     //     //     console.log(JSON.stringify(userdata.data))
//     //     // }

//     // }

//     const handleSubmission = async (e) => {
//         // e.stopPropagation();
//         e.preventDefault();
//         const data = new FormData();
//         data.append("file", file);
//         console.log("ghfdkg", file)
//         // let token = localStorage.getItem("token");

        
//         try {
//             const response = await settlementFile({
//                 // "file": file,
//                 data: data,
//                 // header:{
    
//                 //     Authorization: "Token " +`${token}`
//                 // }
    
//             });
//             console.log("res", response);
//             localStorage.setItem("token", response.data.token)
//             console.log('token', response.data.token)
//         }
//         catch (ex) {
//             console.log("ex", ex)
//         }

//         // let response = await settlementfile({
//         //     "file": file,
//         //     data: data
//         // });
//         // console.log("gssf", response.json)
//         // localStorage.setItem("token", response.data.token)
//         // console.log('token', response.data.token)

//         // fetch("http://192.168.10.104:9999/api/settlementfile/", {
//         //     method: "POST",
//         //     body: data
//         // })
//         //     .then((response) => response.json())
//         //     .then((data) => {
//         //         setFile(data);
//         //     })
//         //     .catch((error) => {
//         //         console.error(error);
//         //     });


//         // const url = 'http://192.168.10.104:9999/api/settlementfile/';
//         // const formData = new FormData();
//         // formData.append('file', file)
//         // const config = {
//         //     headers: {
//         //         Authorization: "Token " + localStorage.getItem("token"),
//         //         'content-type': 'multipart/form-data'
//         //     }
//         // }
//         // return post(url, formData, config)

//     };


//     return (
//         <div style={{ paddingBottom: '3rem' }}>
//             <form onSubmit={handleSubmission}>
//                 <input type="file" name="file" onChange={changeHandler} />
//                 <br />
//                 <button type="submit" >Submit</button>
//             </form>

//         </div>
//     )
// }
// export default FileUploadServer