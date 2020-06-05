/* eslint-disable no-undef */
import axios from 'axios'
import {GET_ERRORS,GET_WALLETS, DELETE_WALLETS} from './types'

export const Createwallet = (newWallet,history)=> async dispath =>{

   await axios.post('http://localhost:8080/wallet',newWallet).then((res)=>{
      history.push('/dashboard')

    }).catch((err)=>{
       dispatchEvent({type:GET_ERRORS,payload:err.response.data})

    })




}


export const getWallets = ()=> async dispath =>{

    await axios.get('http://localhost:8080/wallet').then((res)=>{
       dispath({ type:GET_WALLETS,payload:res.data })
 
     })
 
 
 }
 export const getWallet = ()=> async dispath =>{

    await axios.get(`http://localhost:8080/wallet/${id}`).then((res)=>{
       dispath({ type:GET_WALLET,payload:res.data })
 
     })
 
 
 }

 export const deleteWallets = ()=> async dispath =>{

    await axios.delete(`http://localhost:8080/wallet/${id}`).then((res)=>{
       dispath({ type:DELETE_WALLETS,payload:id})
 
     })
 
 
 }
 
export const update = (id,updatedwallet,history)=> async dispath =>{

    await axios.put(`http://localhost:8080/wallet/${id}`,updatedwallet).then((res)=>{
       history.push('/dashboard')
 
     }).catch((err)=>{
        dispatchEvent({type:GET_ERRORS,payload:err.response.data})
 
     })
 
 
 
 
 }

 
