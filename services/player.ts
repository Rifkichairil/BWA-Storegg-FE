import axios from 'axios'
import callApi from '../config/api';
import { CheckoutTypes } from './data-types';


const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';


export async function getFeaturedGame(){
    const END_POINT = 'players/landingpage';

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${END_POINT}`);
    // Axios Response 
    const axiosResponse = response.data;
    return axiosResponse.data;
}

export async function getDetailVoucher (id: string) {
    const END_POINT = `players/${id}/detail`;

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${END_POINT}`);
    // Axios Response 
    const axiosResponse = response.data;
    return axiosResponse.data;
}

export async function getGameCategory() {
    const END_POINT = `players/category`;

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${END_POINT}`);
    // Axios Response 
    const axiosResponse = response.data;
    return axiosResponse.data;
}

export async function setCheckout(data: CheckoutTypes) {
    const url = `${ROOT_API}/${API_VERSION}/players/checkout`;

    return callApi({
        url,
        method: "POST",
        data: data,
        token: true
    })
}
