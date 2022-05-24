import axios from 'axios';

const url = 'http://192.168.10.104:9999/api';
export const authenticateLogin = async (user) => {
    try {
        console.log(user)
        return await axios.post(`${url}/login/`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('error while calling Signup API: ', error);
    }
}

export const getInfo = async () => {
    try {
        return await axios.get(`${url}/dashboard/`, {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }
        });
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}

export const Logout = async () => {
    try {
        return await axios.get(`${url}/logout/`, {
            headers: {
                "Authorization": "Token " + localStorage.getItem("token")
            }

        });
    } catch (error) {
        console.log('Error while getting product by id response', error);
    }
}


export const payUsingPaytm = async (data) => {
    try {
        console.log('payment api');
        let response = await axios.post(`${url}/payment`, data);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}

// export const settlementFile = async (file) => {
//     // console.log("token",localStorage.getItem("token"))
    
   
//     try {
//         // file['Authorization'] = "Token " + localStorage.getItem("token");
//         console.log("apifile",file);
//         // return await axios.post(`${url}/settlementfile/`, file)
//      return await axios.post(`${url}/settlementfile/`,  {
//             headers: {
//                 Authorization: "Token " + localStorage.getItem("token"),
//                 // "Content-Type":'application/vnd.ms-excel',
//                 "content-type": "multipart/form-data",
                
//             },
//            body: file
//         });

//     } catch (error) {
//         console.log('Error while getting product by id response', error);
//     }
// }

