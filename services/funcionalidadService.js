import { useEffect } from 'react';
import axiosClient from './axiosClient'

//const api_key= "8b3a2a71fd19482db82a44883014eb1f"


export const getVerificacion = async (userState) => {  
    return axiosClient
        .post(``,{
          ...userState
        })
        .then((res) => {
          console.log(res.data.token)
          return res.data.token
        })
        .catch((e) => {
          throw "Error 401"
        });
};


export const getPlatos = async (query) => {
    return axiosClient.get(``)
        .then(res => {
        if (res.status < 300) return res.data;
        else console.log(`Response with status code ${res.status}`);
        })
        .catch(error => {
          console.log(error)
          throw error;
        });
}

export const detallePlato= async (id) =>{
  console.log()
  return axiosClient.get(``,{})
  .then(function(res){
      console.log(res)
      return res.data
  })
  .catch(function(){
      throw "Error"
  })
  
}