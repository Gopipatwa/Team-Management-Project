import React, { useState } from 'react'
// import { settlementfile, getInfo, authenticateLogin } from '../ApiRouter/ApiRouter';
import axios from 'axios';

export default function Upload() {
    const [file, setFile] = useState(null);


    const handleFile = (e) => {
        let file = e.target.files[0]
        setFile({ file });
        console.log("changefile", file)
        // settoken(true)

    };
    // console.log("token",tok)
    const handleSubmission = async (e) => {
        e.preventDefault()
        console.log("handleSibmit", file);
        await uploadFile(file);
    }



    return (
        <div style={{ paddingBottom: '3rem' }}>
            {/* <form onSubmit={handleSubmission}> */}
            <input type="file" name="file" onChange={handleFile} />
            <br />
            <button onClick={handleSubmission}>Submit</button>
            {/* </form> */}

        </div>
    )
}
const uploadFile = async file => {
    try {
        console.log("upload file", file)
        const formData = new FormData()
        formData.append('files', file)
        // formData.append("destination", "xlsx");
        // formData.append("create_thumbnail", true)
        let token = localStorage.getItem("token")

        const config = {
            headers: {
                "Authorization": "Token " + `${token}`,
                "content-type": "multipart/form-data",
                // "Content-Disposition" : {
                //     "name": "FILE-ATTACH",
                //     "filename": "filename.xlsx"
                // },

                "Accept": "application/json",

            },
            body: formData,
            // data: formData


        };

        let API = "http://192.168.10.104:9999/api/settlementfile/";
        let url = `${API}`;
        let response = await axios.post(url, formData, config);
        console.log("response", response)
    }
    catch (error) {
        console.error(error);
    }
};