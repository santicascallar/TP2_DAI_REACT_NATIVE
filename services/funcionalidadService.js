import axios from 'axios';
import axiosClient from './axiosClient'

//const api_key= "8b3a2a71fd19482db82a44883014eb1f"


export const getClima = async () => {
    return axios.get(`http://api.weatherapi.com/v1/forecast.json?key=a176d44698274c5b96d114333222510&q=London&days=1&aqi=no&alerts=no`)
        .then(res => {
        if (res.status < 300) return res.data;
        else console.log(`Response with status code ${res.status}`);
        })
        
        .catch(error => {
          console.log(error)
          throw error; 
        });
}