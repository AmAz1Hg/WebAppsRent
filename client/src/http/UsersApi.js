import { $Host, $AuthorizationHost } from "./index"
import jwt_decode from "jwt-decode"

export const reg = async (mail, password) => {
    const {data} = await $Host.post('api/user/reg', {mail, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}   

export const log = async (mail, password) => {
    const {data} = await $Host.post('api/user/log', {mail, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => { 
    const {data} = await $AuthorizationHost.get('api/user/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}