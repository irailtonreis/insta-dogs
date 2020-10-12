import React from 'react';
import { USER_GET, TOKEN_POST } from './api';

export const UserContext = React.createContext()

export const UserStorage = ({children}) =>{
    const [ data, setData] = React.useState(null)
    const [ usuario, setUsuario] = React.useState(null)
    const [ login, setLogin] = React.useState(null)
    const [ loading, setLoading] = React.useState(null)
    const [ error, setError] = React.useState(null)

    async function getUser(token) {
        console.log(token)
        const { url, options } = USER_GET(token)
        const repsonse = await fetch(url, options)
        const json = await repsonse.json()
        setData(json)
        setLogin(true)
        console.log(data)
    }

    async function userLogin(username, password) {
        const { url, options } = TOKEN_POST({username, password})
        const repsonse = await fetch(url, options)
        const { token } = await repsonse.json()
        window.localStorage.setItem('token', token)
        getUser(token)
        console.log(token)
    }

    return (
   <UserContext.Provider value={{ userLogin, data }}>
        {children}
    </UserContext.Provider>
    )
}