import { useEffect } from 'react';
import axios from 'axios';
import axiosClient from './axiosClient'

//const api_key= "8b3a2a71fd19482db82a44883014eb1f"


export const GetContactos = async (query) => {
    return axiosClient.get(`https://dummyjson.com/products/1`)
        .then(res => {
        if (res.status < 300) return res.data;
        else console.log(`Response with status code ${res.status}`);
        })
        
        .catch(error => {
          console.log(error)
          throw error; 
        });
}