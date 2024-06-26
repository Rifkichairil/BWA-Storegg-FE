import axios, { AxiosRequestConfig } from 'axios'
import Cookies from 'js-cookie';
import jwtDecode from "jwt-decode";

interface CallApiProps extends AxiosRequestConfig {
    token?: boolean;
    serverToken?: string

}

export default async function callApi({url, method, data, token, serverToken} : CallApiProps) {
    let headers = {};
    if (serverToken) {
        headers = {
            Authorization: `Bearer ${serverToken}`
        }
    }else if(token){
        const tokenCookies = Cookies.get('token');

        if (tokenCookies) {
            const jwtToken = atob(tokenCookies);
            headers = {
                Authorization: `Bearer ${jwtToken}`
            }
        }
    }
  
    const response = await axios({
        url: url,
        method: method,
        data: data,
        headers
    })
    .catch(error => error.response);

    // Axios Response 
    if (response.status > 300) {
        const res = {
            error: true,
            message: response.data.message,
            data: null
        }
        return res;
    } 

    const {length} = Object.keys(response.data);

    
    const res = {
        error: false,
        message: 'success',
        data: length > 1 ? response.data : response.data.data
    }

    return res;
}