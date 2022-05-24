import React, { Component } from 'react'
// import { settlementfile, getInfo, authenticateLogin } from '../ApiRouter/ApiRouter';
import axios from 'axios';

export default class UploadFileServer extends Component {
    state = {
        file: null
    };

    handleFile(e) {
        let file = e.target.files[0];
        this.setState({ file });
        console.log("first", file)
    }
    async handleUpload(e) {
        console.log("upload", this.state.file);
        await uploadImage(this.state.file);
    }



    render() {
        return (
            <div style={{ paddingBottom: '3rem' }}>
                <input type="file" name="file" onChange={(e) => this.handleFile(e)} />
                <button onClick={(e) => this.handleUpload(e)}>Upload</button>
            </div>
        );
    }
}
const uploadImage = async (file) => {
    try {
      console.log("Upload file", file);
      const formData = new FormData();
      formData.append("filename", file);
      let token = localStorage.getItem("token")
    //   formData.append("create_thumbnail", true);
      const config = {
        headers: {
            "Authorization": "Token " + `${token}`,
            "content-type": "multipart/form-data",
        }
      };
      const API = "http://192.168.10.104:9999/api/settlementfile/";
      const url = `${API}`;
  
      const result = await axios.post(url, formData, config);
      console.log("REsult: ", result);
    } catch (error) {
      console.error(error);
    }
  };