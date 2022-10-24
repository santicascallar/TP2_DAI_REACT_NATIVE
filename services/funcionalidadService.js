import { useEffect } from 'react';
import axios from 'axios';
import axiosClient from './axiosClient'

//const api_key= "8b3a2a71fd19482db82a44883014eb1f"


export const getClima = async (query) => {
    return axiosClient.get(`http://api.weatherunlocked.com/api/current/40.71,-74.00?app_id=b4030fb7&app_key=667faa988c3c34f1841baa94ff02983a`)
        .then(res => {
        if (res.status < 300) return res.data;
        else console.log(`Response with status code ${res.status}`);
        })
        
        .catch(error => {
          console.log(error)
          throw error; 
        });
}