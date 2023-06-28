import axios from 'axios';

const $Host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const $AuthorizationHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$AuthorizationHost.interceptors.request.use(authInterceptor)

export {
    $Host,
    $AuthorizationHost
}