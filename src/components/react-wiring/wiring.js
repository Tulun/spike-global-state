import React from 'react'
import Wiring from 'react-wiring'
import axios from "axios";

export const reducers = {
  set(state,key,update){
    return {
      ...state,
      [key]:update
    }
  },
  error(state,error){
    return {
      ...state,
      error,
    }
  }
}

export const [useWiring, store] = Wiring(React,reducers,{})

export function getUsers(){
  store.dispatch('set','loading',true)
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => store.dispatch('set','users',res.data))
    .catch(err=>store.dispatch('error',err))
    .finally(()=>store.dispatch('set','loading',false))
}
