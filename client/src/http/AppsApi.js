import { $Host, $AuthorizationHost } from "./index"
import jwt_decode from "jwt-decode"

export const createApps = async (apps) => {
    const {data} = await $AuthorizationHost.post('api/apps', apps)
    return data
}       

export const fetchApps = async (page, limit = 5) => {
    const {data} = await $Host.get('api/apps', {params: {
        page, limit
    }})
    return data
}   

export const fetchOneApps = async (id) => {
    const {data} = await $Host.get('api/apps/' + id)
    return data
}   
